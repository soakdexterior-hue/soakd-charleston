import { createClientFromRequest } from 'npm:@base44/sdk@0.8.44';

const SITE_URL = "https://soakdcharleston.com/";
const DAYS_RANGE = 28;

export default async function(req) {
  try {
    const base44 = createClientFromRequest(req);

    const { accessToken } = await base44.asServiceRole.connectors.getConnection("google_search_console");

    const encodedSiteUrl = encodeURIComponent(SITE_URL);
    const apiUrl = `https://www.googleapis.com/webmasters/v3/sites/${encodedSiteUrl}/searchAnalytics/query`;

    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - DAYS_RANGE);

    const startDateStr = startDate.toISOString().split("T")[0];
    const endDateStr = today.toISOString().split("T")[0];

    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    };

    // 1. Get totals (no dimensions)
    const totalsRes = await fetch(apiUrl, {
      method: "POST",
      headers,
      body: JSON.stringify({ startDate: startDateStr, endDate: endDateStr, rowLimit: 1 })
    });
    const totalsData = await totalsRes.json();
    const totalsRow = (totalsData.rows || [])[0] || {};

    // 2. Get top queries
    const queriesRes = await fetch(apiUrl, {
      method: "POST",
      headers,
      body: JSON.stringify({ startDate: startDateStr, endDate: endDateStr, dimensions: ["query"], rowLimit: 50 })
    });
    const queriesData = await queriesRes.json();
    const topQueries = (queriesData.rows || []).map(r => ({
      query: r.keys[0],
      clicks: r.clicks,
      impressions: r.impressions,
      ctr: Number((r.ctr * 100).toFixed(2)),
      position: Number(r.position.toFixed(1))
    }));

    // 3. Get top pages
    const pagesRes = await fetch(apiUrl, {
      method: "POST",
      headers,
      body: JSON.stringify({ startDate: startDateStr, endDate: endDateStr, dimensions: ["page"], rowLimit: 20 })
    });
    const pagesData = await pagesRes.json();
    const topPages = (pagesData.rows || []).map(r => ({
      page: r.keys[0],
      clicks: r.clicks,
      impressions: r.impressions,
      ctr: Number((r.ctr * 100).toFixed(2)),
      position: Number(r.position.toFixed(1))
    }));

    const totalClicks = totalsRow.clicks || 0;
    const totalImpressions = totalsRow.impressions || 0;
    const avgCtr = Number(((totalsRow.ctr || 0) * 100).toFixed(2));
    const avgPosition = Number((totalsRow.position || 0).toFixed(1));

    // 4. Save snapshot
    const snapshot = await base44.asServiceRole.entities.GscSnapshot.create({
      snapshot_date: endDateStr,
      days_range: DAYS_RANGE,
      total_clicks: totalClicks,
      total_impressions: totalImpressions,
      avg_ctr: avgCtr,
      avg_position: avgPosition,
      top_queries: topQueries,
      top_pages: topPages
    });

    return Response.json({
      ok: true,
      snapshot_id: snapshot.id,
      snapshot_date: endDateStr,
      total_clicks: totalClicks,
      total_impressions: totalImpressions,
      avg_ctr: avgCtr,
      avg_position: avgPosition,
      top_queries_count: topQueries.length,
      top_pages_count: topPages.length
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
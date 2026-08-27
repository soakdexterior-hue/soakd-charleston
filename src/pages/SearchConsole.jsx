import React, { useState, useEffect, useCallback } from 'react';
import { base44 } from '@/api/base44Client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, MousePointerClick, Eye, Target, RefreshCw, TrendingUp, Calendar } from 'lucide-react';
import SEO from '@/components/shared/SEO';

export default function SearchConsole() {
  const [snapshot, setSnapshot] = useState(null);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);

  const fetchLatest = useCallback(async () => {
    try {
      const results = await base44.entities.GscSnapshot.list('-snapshot_date', 1);
      setSnapshot(results[0] || null);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchLatest(); }, [fetchLatest]);

  const handleSync = async () => {
    setSyncing(true);
    try {
      await base44.functions.invoke('syncGscData', {});
      await fetchLatest();
    } catch (err) {
      console.error(err);
    } finally {
      setSyncing(false);
    }
  };

  const topQueries = Array.isArray(snapshot?.top_queries) ? snapshot.top_queries : [];
  const topPages = Array.isArray(snapshot?.top_pages) ? snapshot.top_pages : [];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="Search Console Dashboard | Soakd Charleston"
        description="Google Search Console performance data for soakdcharleston.com"
        canonical="/search-console"
      />
      <div className="min-h-screen bg-muted/30 py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-primary">Search Console Dashboard</h1>
              <p className="text-muted-foreground text-sm mt-1 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                Google Search performance for soakdcharleston.com
                {snapshot?.snapshot_date && <span className="ml-1">· Last sync: {snapshot.snapshot_date}</span>}
              </p>
            </div>
            <Button onClick={handleSync} disabled={syncing} className="bg-primary hover:bg-secondary text-white">
              <RefreshCw className={`w-4 h-4 mr-2 ${syncing ? 'animate-spin' : ''}`} />
              {syncing ? 'Syncing...' : 'Sync Now'}
            </Button>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MousePointerClick className="w-4 h-4" />
                  <span className="text-xs font-medium uppercase tracking-wide">Clicks</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary">{(snapshot?.total_clicks || 0).toLocaleString()}</p>
                <p className="text-xs text-muted-foreground mt-1">Last {snapshot?.days_range || 28} days</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Eye className="w-4 h-4" />
                  <span className="text-xs font-medium uppercase tracking-wide">Impressions</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary">{(snapshot?.total_impressions || 0).toLocaleString()}</p>
                <p className="text-xs text-muted-foreground mt-1">Last {snapshot?.days_range || 28} days</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-xs font-medium uppercase tracking-wide">Avg CTR</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary">{(snapshot?.avg_ctr || 0).toFixed(2)}%</p>
                <p className="text-xs text-muted-foreground mt-1">Click-through rate</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Target className="w-4 h-4" />
                  <span className="text-xs font-medium uppercase tracking-wide">Avg Position</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary">{snapshot?.avg_position ? snapshot.avg_position.toFixed(1) : '—'}</p>
                <p className="text-xs text-muted-foreground mt-1">In search results</p>
              </CardContent>
            </Card>
          </div>

          {/* Tables */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Top Queries */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Search className="w-5 h-5 text-secondary" /> Top Search Queries
                </CardTitle>
              </CardHeader>
              <CardContent>
                {topQueries.length === 0 ? (
                  <p className="text-muted-foreground text-sm text-center py-8">
                    No search queries yet. Google will populate this once your pages start appearing in search results.
                  </p>
                ) : (
                  <div className="space-y-1">
                    {topQueries.slice(0, 15).map((q, i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{q.query}</p>
                          <p className="text-xs text-muted-foreground">
                            {q.impressions.toLocaleString()} impressions · Pos {q.position.toFixed(1)}
                          </p>
                        </div>
                        <Badge variant="secondary" className="ml-2 shrink-0">{q.clicks} clicks</Badge>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Top Pages */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Eye className="w-5 h-5 text-secondary" /> Top Pages
                </CardTitle>
              </CardHeader>
              <CardContent>
                {topPages.length === 0 ? (
                  <p className="text-muted-foreground text-sm text-center py-8">
                    No page data yet. This will populate once Google starts indexing and serving your pages.
                  </p>
                ) : (
                  <div className="space-y-1">
                    {topPages.slice(0, 15).map((p, i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate text-primary">
                            {p.page.replace('https://soakdcharleston.com', '')}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {p.impressions.toLocaleString()} impressions · Pos {p.position.toFixed(1)}
                          </p>
                        </div>
                        <Badge variant="secondary" className="ml-2 shrink-0">{p.clicks} clicks</Badge>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Info note */}
          <div className="mt-8 bg-primary/5 border border-primary/10 rounded-xl p-4">
            <p className="text-sm text-muted-foreground">
              <strong className="text-primary">Automated monitoring:</strong> This data syncs automatically every Monday at 9 AM ET.
              Google Search Console data has a 2–3 day delay. Use "Sync Now" to pull the latest data on demand.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
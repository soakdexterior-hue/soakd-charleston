/**
 * Regenerates public/sitemap.xml from the data layer.
 *
 * Runs under plain Node as part of `npm run build`, so everything it imports
 * must stay free of bundler-only syntax (JSX, `@/` aliases, asset imports).
 * That is why images live in the data layer as CDN URL strings.
 *
 * Adding an SEO page means adding a data entry — the sitemap follows. The
 * hand-maintained sitemap this replaced had drifted four pages out of date.
 */
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

import { services, servicePath } from '../src/data/services.js';
import { seoPages } from '../src/data/seo-pages/index.js';

const SITE_URL = 'https://soakdcharleston.com';
const TODAY = new Date().toISOString().split('T')[0];

// Never sitemapped: /template-preview (internal harness, noindexed).
const entries = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/services', changefreq: 'monthly', priority: '0.9' },
  { path: '/service-areas', changefreq: 'monthly', priority: '0.9' },
  { path: '/contact', changefreq: 'monthly', priority: '0.8' },
  { path: '/reviews', changefreq: 'weekly', priority: '0.8' },
  { path: '/about', changefreq: 'monthly', priority: '0.7' },
  { path: '/blog', changefreq: 'weekly', priority: '0.7' },
  { path: '/faq', changefreq: 'monthly', priority: '0.7' },
  { path: '/legal', changefreq: 'yearly', priority: '0.3' },

  // Primary Service pages. Legacy hand-built pages stay listed so their
  // rankings are not thrown away while they wait to be rebuilt on the template;
  // template-built pages list too. Only pages that actually exist either way.
  ...services
    .filter((s) => s.hasLegacyPage || s.hasPage)
    .map((s) => ({
      path: servicePath(s.slug),
      changefreq: 'monthly',
      priority: '0.9',
    })),

  // Every SEO template page — county, city, location service, primary service.
  // Registry presence means the page exists, so nothing here can 404.
  // Drafts are excluded: a page still carrying placeholder copy must never be
  // submitted to Google. Remove `draft` from the entry once its copy is wired.
  ...seoPages
    .filter((p) => !p.draft)
    .map((p) => ({
      path: p.path,
      changefreq: 'monthly',
      priority: p.type === 'county' ? '0.8' : '0.7',
    })),
];

const seen = new Set();
for (const e of entries) {
  if (seen.has(e.path)) throw new Error(`Duplicate sitemap path: ${e.path}`);
  seen.add(e.path);
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (e) => `  <url>
    <loc>${SITE_URL}${e.path}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(__dirname, '../public/sitemap.xml');
writeFileSync(outPath, xml);
console.log(`Sitemap written to ${outPath} (${entries.length} URLs)`);

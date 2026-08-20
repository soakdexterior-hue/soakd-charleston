/**
 * Validates the SEO page registry. Run after scaffolding a batch and again
 * after wiring copy:  npm run validate
 *
 * Encodes the rules that are easy to break by hand across a monthly batch —
 * slug conventions, hub integrity, unique per-batch imagery, and the guarantee
 * that a page carrying placeholder copy can never be published.
 *
 * Exits non-zero on any error, so it can gate a build.
 */
import { seoPages, ROOT_HUBS, pageByPath, breadcrumbsFor } from '../src/data/seo-pages/index.js';

const errors = [];
const warnings = [];
const err = (page, msg) => errors.push(`${page?.path ?? '(registry)'} — ${msg}`);
const warn = (page, msg) => warnings.push(`${page?.path ?? '(registry)'} — ${msg}`);

const TYPES = ['county', 'city', 'location-service', 'primary-service'];

// ─── Structural checks ───────────────────────────────────────────────────────

const seenPaths = new Set();

for (const page of seoPages) {
  // Required fields
  for (const field of ['type', 'path', 'parentPath', 'name', 'metaTitle', 'metaDescription']) {
    if (!page[field] || typeof page[field] !== 'string') {
      err(page, `missing or non-string field: ${field}`);
    }
  }

  if (!TYPES.includes(page.type)) err(page, `unknown type "${page.type}"`);

  // Unique paths — a duplicate silently shadows a route
  if (seenPaths.has(page.path)) err(page, 'duplicate path in registry');
  seenPaths.add(page.path);

  if (!page.path?.startsWith('/')) err(page, 'path must start with "/"');

  // The path must actually sit under its declared parent, or hubs and
  // breadcrumbs will disagree with the URL.
  if (page.parentPath && page.path) {
    const expectedPrefix = page.parentPath === '/' ? '/' : `${page.parentPath}/`;
    if (!page.path.startsWith(expectedPrefix)) {
      err(page, `path is not nested under parentPath "${page.parentPath}"`);
    }
    if (page.path.slice(expectedPrefix.length).includes('/')) {
      err(page, `path is more than one segment below parentPath "${page.parentPath}"`);
    }
  }

  // Parent must resolve, or the page is orphaned from every hub
  if (page.parentPath && !ROOT_HUBS[page.parentPath] && !pageByPath(page.parentPath)) {
    err(page, `parentPath "${page.parentPath}" is not a registered page or root hub`);
  }

  // ─── Slug convention (Karan's) ────────────────────────────────────────────
  // County slugs keep the state suffix; nested city slugs drop it, because the
  // county segment already carries the state.
  const slug = page.path?.split('/').filter(Boolean).pop() ?? '';
  if (page.type === 'county' && !slug.endsWith('-sc')) {
    err(page, `county slug "${slug}" should end with "-sc"`);
  }
  if (page.type === 'city' && slug.endsWith('-sc')) {
    err(page, `city slug "${slug}" should NOT end with "-sc" (county carries the state)`);
  }

  // ─── Copy shape ───────────────────────────────────────────────────────────
  const copy = page.copy;
  if (!copy) {
    err(page, 'missing copy');
    continue;
  }
  if (!copy.hero?.headline) err(page, 'copy.hero.headline missing');
  if (!copy.hero?.subtext) err(page, 'copy.hero.subtext missing');
  for (const section of ['benefits', 'why']) {
    const s = copy[section];
    if (!s?.heading) err(page, `copy.${section}.heading missing`);
    if (!Array.isArray(s?.items) || s.items.length !== 3) {
      err(page, `copy.${section}.items must have exactly 3 bullets`);
    }
  }
  if (!Array.isArray(copy.faq?.items) || copy.faq.items.length === 0) {
    err(page, 'copy.faq.items missing');
  }
  if (!copy.map) err(page, 'copy.map missing');

  // Hubs are derived from the registry — authoring one by hand would produce
  // cards that can point at pages which do not exist.
  if (copy.hub) err(page, 'copy.hub must not be authored by hand; SeoPage derives it');

  // ─── Draft / placeholder safety ───────────────────────────────────────────
  const hasTodo = JSON.stringify(page).includes('TODO');
  if (hasTodo && !page.draft) {
    err(page, 'contains TODO placeholder copy but is not flagged draft — it would be published');
  }
  if (!hasTodo && page.draft) {
    warn(page, 'flagged draft but no TODO remains — ready to publish? remove `draft`');
  }

  // Meta fields feed plain-text metadata; links there would render literally.
  for (const field of ['metaTitle', 'metaDescription']) {
    if (/\[[^\]]+\]\([^)]+\)/.test(page[field] ?? '')) {
      err(page, `${field} must not contain a Markdown link`);
    }
  }

  // Breadcrumbs must reach Home, or the BreadcrumbList schema is broken
  const crumbs = breadcrumbsFor(page);
  if (crumbs[0]?.url !== '/') err(page, 'breadcrumb trail does not start at Home');
  if (crumbs.at(-1)?.url !== page.path) err(page, 'breadcrumb trail does not end at this page');
}

// ─── Unique Benefits/Why imagery across the batch (Karan's rule) ─────────────

const imageUse = new Map();
for (const page of seoPages) {
  for (const section of ['benefits', 'why']) {
    const image = page.copy?.[section]?.image;
    if (!image) continue;
    if (!imageUse.has(image)) imageUse.set(image, []);
    imageUse.get(image).push(`${page.path} (${section})`);
  }
}
for (const [image, uses] of imageUse) {
  if (uses.length > 1) {
    errors.push(`image reused across the batch: ${image}\n      ${uses.join('\n      ')}`);
  }
}

// ─── Report ──────────────────────────────────────────────────────────────────

const drafts = seoPages.filter((p) => p.draft);
const live = seoPages.filter((p) => !p.draft);

console.log(`\nRegistry: ${seoPages.length} page(s) — ${live.length} live, ${drafts.length} draft\n`);
for (const page of seoPages) {
  console.log(`  ${page.draft ? 'DRAFT' : ' LIVE'}  ${page.type.padEnd(16)} ${page.path}`);
}

if (warnings.length) {
  console.log(`\n${warnings.length} warning(s):`);
  for (const w of warnings) console.log(`  ! ${w}`);
}

if (errors.length) {
  console.log(`\n${errors.length} error(s):`);
  for (const e of errors) console.log(`  x ${e}`);
  console.log('');
  process.exit(1);
}

console.log('\nAll checks passed.\n');

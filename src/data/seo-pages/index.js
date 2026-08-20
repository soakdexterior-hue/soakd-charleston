/**
 * REGISTRY OF SEO PAGES — the single source of truth.
 *
 * Everything derives from this one array: routing, every card hub, breadcrumbs,
 * and the sitemap. Creating a page each month means adding a module here and
 * importing it below. Nothing else needs touching.
 *
 * One module per page, named after its URL path:
 *
 *   ./charleston-county-sc.js                     → /service-areas/charleston-county-sc
 *   ./charleston-county-sc/mount-pleasant.js      → /service-areas/charleston-county-sc/mount-pleasant
 *   ./charleston-county-sc/mount-pleasant/window-cleaning.js
 *   ./services/window-cleaning.js                 → /services/window-cleaning
 *
 * Each module default-exports an entry:
 *
 *   {
 *     type:            'county' | 'city' | 'location-service' | 'primary-service',
 *     path:            '/service-areas/charleston-county-sc/mount-pleasant',
 *     parentPath:      '/service-areas/charleston-county-sc',
 *     name:            'Mount Pleasant',        // hub card label
 *     cardImage:       '/images/areas/...jpg',  // hub card thumbnail (optional)
 *     cardDescription: '...',                   // hub card subline (optional)
 *     geoPlacename:    'Mount Pleasant',        // optional
 *     serviceName:     'Window Cleaning',       // service pages only, for schema
 *     metaTitle:       '...',
 *     metaDescription: '...',
 *     copy:            { hero, benefits, why, faq, map },   // SeoPageCopy
 *   }
 *
 * HUBS ARE AUTOMATIC. A page's hub is every entry whose `parentPath` equals its
 * own `path`. So a county lists its cities, a city lists its location services,
 * and the two root hubs list their children — with no flags to keep in sync and
 * no possibility of a card pointing at a page that does not exist. A page with
 * no children simply renders no hub.
 *
 * Do NOT add the `copy.hub` field by hand; SeoPage builds it from the registry.
 *
 * Safe to import from Node build scripts — page modules must therefore stay free
 * of JSX and bundler asset imports (image paths are plain `/public` strings).
 */

// ─── Registered pages ────────────────────────────────────────────────────────
// Add each new page module here. Empty today: every page is being built fresh
// on the template, and the legacy flat pages are excluded by design.

export const seoPages = [
  // e.g. import charlestonCounty from './charleston-county-sc.js';
  //      ...then list it here.
];

// ─── Root hubs ───────────────────────────────────────────────────────────────
// The two hand-built hub pages that sit above the registry. Used for breadcrumb
// labels when walking a page's parent chain up to the site root.

export const ROOT_HUBS = {
  '/services': 'Services',
  '/service-areas': 'Service Areas',
};

// ─── Derived lookups ─────────────────────────────────────────────────────────

export const pageByPath = (path) => seoPages.find((p) => p.path === path);

/** Direct children of a path — this is what every card hub renders. */
export const childrenOf = (path) => seoPages.filter((p) => p.parentPath === path);

/**
 * Breadcrumb trail from the site root down to `entry`, walking parentPath.
 * Returns [{ name, url }], starting with Home.
 */
export const breadcrumbsFor = (entry) => {
  const trail = [];
  let current = entry;

  while (current) {
    trail.unshift({ name: current.name, url: current.path });
    const parent = current.parentPath;
    if (!parent) break;
    if (ROOT_HUBS[parent]) {
      trail.unshift({ name: ROOT_HUBS[parent], url: parent });
      break;
    }
    current = pageByPath(parent);
  }

  return [{ name: 'Home', url: '/' }, ...trail];
};

/** Every registered page path — drives routing and the sitemap. */
export const seoPagePaths = () => seoPages.map((p) => p.path);

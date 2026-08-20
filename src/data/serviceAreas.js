/**
 * Cities and communities served, grouped by county.
 *
 * Today these are informational only — there are no per-area pages yet, so the
 * /service-areas hub lists them as plain cards. Once county pages exist they
 * become the tree's second level:
 *
 *   /service-areas/{countySlug}/                    county page
 *   /service-areas/{countySlug}/{slug}/             city page
 *   /service-areas/{countySlug}/{slug}/{service}    location service page
 *
 * Slug convention (Karan's): the COUNTY slug keeps its state suffix
 * (`charleston-county-sc`); nested city slugs DROP it, because the county
 * segment already carries the state.
 *
 * REFERENCE DATA ONLY. Which pages exist — and therefore every hub card, route
 * and sitemap entry — is decided solely by the registry in src/data/seo-pages.
 * This file supplies names, ZIPs and imagery when authoring those pages.
 *
 * IMAGES mirror page URLs (Karan's convention). Drop the file into `public/`
 * at the path matching its page and reference it with a leading slash:
 *
 *   county page  →  public/images/areas/charleston-county-sc.jpg
 *                   image: '/images/areas/charleston-county-sc.jpg'
 *   city page    →  public/images/areas/charleston-county-sc/mount-pleasant.jpg
 *                   image: '/images/areas/charleston-county-sc/mount-pleasant.jpg'
 *
 * Files in `public/` are served verbatim, so these stay plain strings — no
 * bundler import, and Node build scripts can still read this module. A hub card
 * simply renders without a thumbnail while `image` is null.
 *
 * Safe to import from Node build scripts — no bundler asset imports.
 */

export const counties = [
  { slug: 'charleston-county-sc', name: 'Charleston County', image: null },
  { slug: 'berkeley-county-sc', name: 'Berkeley County', image: null },
  { slug: 'dorchester-county-sc', name: 'Dorchester County', image: null },
];

export const areas = [
  { slug: 'charleston', name: 'Charleston', countySlug: 'charleston-county-sc', zip: '29401', popularService: 'Window Cleaning', image: null },
  { slug: 'west-ashley', name: 'West Ashley', countySlug: 'charleston-county-sc', zip: '29414', popularService: 'Pressure Washing', image: null },
  { slug: 'mount-pleasant', name: 'Mount Pleasant', countySlug: 'charleston-county-sc', zip: '29464', popularService: 'Window Cleaning', image: null },
  { slug: 'james-island', name: 'James Island', countySlug: 'charleston-county-sc', zip: '29412', popularService: 'Soft Washing', image: null },
  { slug: 'johns-island', name: 'Johns Island', countySlug: 'charleston-county-sc', zip: '29455', popularService: 'Gutter Cleaning', image: null },
  { slug: 'north-charleston', name: 'North Charleston', countySlug: 'charleston-county-sc', zip: '29405', popularService: 'Pressure Washing', image: null },
  { slug: 'isle-of-palms', name: 'Isle of Palms', countySlug: 'charleston-county-sc', zip: '29451', popularService: 'Window Cleaning', image: null },
  { slug: 'sullivans-island', name: "Sullivan's Island", countySlug: 'charleston-county-sc', zip: '29482', popularService: 'Soft Washing', image: null },
  { slug: 'folly-beach', name: 'Folly Beach', countySlug: 'charleston-county-sc', zip: '29439', popularService: 'Window Cleaning', image: null },
  { slug: 'daniel-island', name: 'Daniel Island', countySlug: 'berkeley-county-sc', zip: '29492', popularService: 'Window Cleaning', image: null },
  { slug: 'goose-creek', name: 'Goose Creek', countySlug: 'berkeley-county-sc', zip: '29445', popularService: 'Soft Washing', image: null },
  { slug: 'summerville', name: 'Summerville', countySlug: 'dorchester-county-sc', zip: '29483', popularService: 'Pressure Washing', image: null },
];

export const countyPath = (countySlug) => `/service-areas/${countySlug}`;
export const cityPath = (countySlug, slug) => `/service-areas/${countySlug}/${slug}`;

export const countyName = (countySlug) =>
  counties.find((c) => c.slug === countySlug)?.name ?? '';

export const areasByCounty = (countySlug) =>
  areas.filter((a) => a.countySlug === countySlug);


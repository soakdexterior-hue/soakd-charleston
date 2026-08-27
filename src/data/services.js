import { IMAGES } from './media.js';

/**
 * The four primary services.
 *
 * `hasLegacyPage` exists because "a page exists" and "a TEMPLATE page exists"
 * are different things:
 *
 *   hasLegacyPage — the original hand-built page is live at the flat URL
 *                   (e.g. /window-cleaning). It stays routed and stays in the
 *                   sitemap so its rankings are not thrown away.
 *
 * Whether a service has a TEMPLATE page is decided solely by the registry in
 * src/data/seo-pages — that is what fills the /services hub. Legacy pages are to
 * be REBUILT there, not linked from the hub.
 *
 * URL SHAPE — deliberately behind one constant. Pages currently live at the flat
 * top-level URLs they launched with. To migrate the tree under `/services/*`
 * later, change SERVICES_BASE to '/services' and add redirects; every link, hub
 * card, breadcrumb and sitemap entry follows, because they all route through
 * `servicePath()`.
 *
 * Safe to import from Node build scripts — no bundler asset imports.
 */

export const SERVICES_BASE = '';

export const servicePath = (slug) => `${SERVICES_BASE}/${slug}`;

export const services = [
  {
    slug: 'window-cleaning',
    name: 'Window Cleaning',
    shortName: 'Windows',
    tagline: 'Interior & exterior, screens, tracks and sills included.',
    description:
      'Streak-free interior and exterior window cleaning for Charleston homes, including screens, tracks and sills. Backed by our Clean Window Guarantee.',
    image: IMAGES.windowCleaningHero,
    cardImage: IMAGES.windowCleaningCrew,
    hasLegacyPage: true,
  },
  {
    slug: 'pressure-washing',
    name: 'Pressure Washing',
    shortName: 'Pressure Washing',
    tagline: 'Driveways, fences, siding — blast away grime instantly.',
    description:
      'High-pressure cleaning for concrete driveways, brick patios, pool decks and sidewalks across the Lowcountry.',
    image: IMAGES.pressureWashingHero,
    cardImage: IMAGES.porchWashing,
    hasLegacyPage: true,
  },
  {
    slug: 'soft-washing',
    name: 'Soft Washing',
    shortName: 'Soft Washing',
    tagline: 'Safe low-pressure cleaning for roofs & stucco.',
    description:
      'Low-pressure, biodegradable soft washing that removes algae, mold and mildew from roofs, siding and stucco without damaging the surface.',
    image: IMAGES.softWashingHero,
    cardImage: IMAGES.roofWashing,
    hasLegacyPage: true,
  },
  {
    slug: 'roof-washing',
    name: 'Roof Washing',
    shortName: 'Roof Washing',
    tagline: 'Safe low-pressure cleaning that removes algae and black streaks.',
    description:
      'Low-pressure roof washing that safely removes algae, black streaks, and moss from shingle and tile roofs without voiding your warranty.',
    image: IMAGES.roofWashing,
    cardImage: IMAGES.roofWashing,
    hasLegacyPage: true,
  },
  {
    slug: 'gutter-cleaning',
    name: 'Gutter Cleaning',
    shortName: 'Gutters',
    tagline: 'Clear clogs and protect your home from water damage.',
    description:
      'Full gutter and downspout clearing to prevent overflow damage to fascia, foundations and landscaping.',
    image: IMAGES.gutterCleaningHero,
    cardImage: IMAGES.doubleCleaning,
    hasLegacyPage: true,
  },
];

export const serviceBySlug = (slug) => services.find((s) => s.slug === slug);
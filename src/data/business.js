/**
 * Single source of truth for business identity.
 *
 * Phone, site URL and review counts were previously hardcoded across ~15 files.
 * New work should import from here; existing pages get migrated opportunistically.
 * Safe to import from Node build scripts — no image or asset imports.
 */

export const SITE_URL = 'https://soakdcharleston.com';

export const BUSINESS = {
  name: 'Soakd Window Cleaning',
  shortName: 'Soakd',
  phone: '843-826-6708',
  phoneHref: 'tel:+18438266708',
  telephone: '+1-843-826-6708',
  email: 'info@soakdcharleston.com',
  address: 'Charleston, SC',
  city: 'Charleston',
  state: 'SC',
  tagline: 'Exterior Done Premium',
  description:
    'Professional window cleaning, pressure washing, soft washing and gutter cleaning across Charleston, SC and the Lowcountry. Fully insured, locally owned, 170+ five-star reviews.',
  url: SITE_URL,
  logo: 'https://media.base44.com/images/public/69bdabf65e992908c9993001/e8ae08491_Soakdlogo2.jpg',
};

// Google Business Profile — listing name "SoakD Exterior".
//
// `cid` is the listing's Google Customer ID (hex 0xea41326144ec9fce), resolved
// from the short link Karan supplied. Links and embeds are keyed off the CID
// rather than a name search, so they always land on this exact listing and can
// never drift to a competitor's.
export const GOOGLE_BUSINESS = {
  cid: '16879828271710904270',
  shortUrl: 'https://maps.app.goo.gl/8fC9GcGmHBu2QHE57',
  profileUrl: 'https://www.google.com/maps?cid=16879828271710904270',
  embedUrl: 'https://www.google.com/maps?cid=16879828271710904270&output=embed',
  rating: 5.0,
  reviewCount: 170, // as of August 2026 — bump when the listing moves
};

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BUSINESS, SITE_URL, GOOGLE_BUSINESS } from '@/data/business';
import { stripLinks } from '@/components/seo-template/RichText';

/**
 * Head tags for SEO template pages: meta, Open Graph, Twitter, canonical, geo,
 * and one or more JSON-LD blocks.
 *
 * The older `components/shared/SEO.jsx` takes a single `schema` object and is
 * still used by the hand-built pages; this one takes a `jsonLd` array so a page
 * can emit LocalBusiness + Service + FAQPage + BreadcrumbList together.
 */
export default function SEOHead({
  title,
  description,
  canonical,
  ogImage = BUSINESS.logo,
  geoRegion,
  geoPlacename,
  jsonLd = [],
  noindex = false,
}) {
  const fullCanonical = `${SITE_URL}${canonical}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {geoRegion && <meta name="geo.region" content={geoRegion} />}
      {geoPlacename && <meta name="geo.placename" content={geoPlacename} />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={BUSINESS.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

/* ── Schema builders ─────────────────────────────────────────────────────── */

/** The business itself. Referenced by @id from the Service schemas below. */
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${SITE_URL}/#business`,
  name: BUSINESS.name,
  description: BUSINESS.description,
  url: SITE_URL,
  telephone: BUSINESS.telephone,
  email: BUSINESS.email,
  image: BUSINESS.logo,
  logo: BUSINESS.logo,
  address: {
    '@type': 'PostalAddress',
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.state,
    addressCountry: 'US',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: String(GOOGLE_BUSINESS.rating),
    reviewCount: String(GOOGLE_BUSINESS.reviewCount),
  },
};

/**
 * FAQ answers may carry an inline link (rendered for users via RichText).
 * JSON-LD must stay plain text, so flatten `[label](url)` down to `label`.
 */
export const faqSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((faq) => ({
    '@type': 'Question',
    name: stripLinks(faq.question),
    acceptedAnswer: {
      '@type': 'Answer',
      text: stripLinks(faq.answer),
    },
  })),
});

export const breadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: `${SITE_URL}${item.url}`,
  })),
});

export const serviceSchema = (name, description, areaServed) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: name,
  description: stripLinks(description),
  provider: { '@id': `${SITE_URL}/#business` },
  ...(areaServed && { areaServed: { '@type': 'Place', name: areaServed } }),
});

/** Used by hub pages to declare the full list of places served. */
export const areaServedSchema = (places) => ({
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${SITE_URL}/#business`,
  name: BUSINESS.name,
  url: SITE_URL,
  telephone: BUSINESS.telephone,
  areaServed: places.map((p) => ({ '@type': 'City', name: p })),
});

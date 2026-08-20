import React from 'react';
import SEOHead, {
  localBusinessSchema,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
} from '@/components/seo/SEOHead';
import SeoPageTemplate from '@/components/seo-template/SeoPageTemplate';
import { childrenOf, breadcrumbsFor } from '@/data/seo-pages';
import { BUSINESS } from '@/data/business';

/**
 * Renders any of the four SEO page types from a registry entry.
 *
 * One component rather than four near-identical ones: the types differ only in
 * which schema they emit and which children their hub lists, and both of those
 * are derivable from the entry. Adding a page is a data change, never a
 * component change.
 *
 * The hub is built here, from the registry — a page's children are every entry
 * whose parentPath is this page's path. Page copy never declares its own hub, so
 * a card can never point at a page that has not been built.
 */

const HUB_COPY = {
  county: {
    variant: 'location',
    eyebrow: 'Service Areas',
    heading: (entry) => `Communities We Serve in ${entry.name}`,
  },
  city: {
    variant: 'service',
    eyebrow: 'Our Services',
    heading: (entry) => `Exterior Cleaning Services in ${entry.name}`,
  },
};

function buildHub(entry) {
  const config = HUB_COPY[entry.type];
  if (!config) return undefined; // leaf pages never have a hub

  const children = childrenOf(entry.path);
  if (children.length === 0) return undefined;

  return {
    variant: config.variant,
    eyebrow: config.eyebrow,
    heading: config.heading(entry),
    items: children.map((child) => ({
      name: child.name,
      href: child.path,
      image: child.cardImage,
      description: child.cardDescription,
    })),
  };
}

function buildSchema(entry) {
  const isService = entry.type === 'location-service' || entry.type === 'primary-service';
  const areaServed = entry.geoPlacename
    ? `${entry.geoPlacename}, ${BUSINESS.state}`
    : `${BUSINESS.city}, ${BUSINESS.state}`;

  return [
    localBusinessSchema,
    ...(isService
      ? [
          serviceSchema(
            entry.serviceName ?? entry.name,
            entry.metaDescription,
            areaServed
          ),
        ]
      : []),
    ...(entry.copy.faq?.items?.length ? [faqSchema(entry.copy.faq.items)] : []),
    breadcrumbSchema(breadcrumbsFor(entry)),
  ];
}

export default function SeoPage({ entry }) {
  const copy = { ...entry.copy, hub: buildHub(entry) };

  return (
    <>
      <SEOHead
        title={entry.metaTitle}
        description={entry.metaDescription}
        canonical={entry.path}
        geoRegion={`US-${BUSINESS.state}`}
        geoPlacename={entry.geoPlacename ?? entry.name}
        jsonLd={buildSchema(entry)}
        noindex={!!entry.draft}
      />
      {entry.draft && (
        <div className="bg-yellow-400 text-[#0f1e3d] text-center text-sm font-bold py-2 px-4">
          ⚠️ Draft — placeholder copy. Noindexed and excluded from the sitemap and
          hub cards until the copy is wired.
        </div>
      )}
      <SeoPageTemplate copy={copy} />
    </>
  );
}

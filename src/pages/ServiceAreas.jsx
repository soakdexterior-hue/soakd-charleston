import React from 'react';
import SEOHead, {
  localBusinessSchema,
  areaServedSchema,
  breadcrumbSchema,
} from '@/components/seo/SEOHead';
import CardHub from '@/components/seo-template/CardHub';
import CTASection from '@/components/shared/CTASection';
import { areas } from '@/data/serviceAreas';
import { childrenOf } from '@/data/seo-pages';

/**
 * `/service-areas` — the Top Level Service Area hub. Root of the areas tree.
 *
 * The card hub IS the page (Karan's rule) — no hero, benefits, why, body copy,
 * map or CTA. With no hero, the hub heading carries the page's single H1.
 *
 * The hub's children are the COUNTY pages. None are built yet, so the cards
 * render unlinked; each becomes a link automatically when its `hasPage` flag
 * is flipped in src/data/serviceAreas.js.
 */
export default function ServiceAreas() {
  const hub = {
    variant: 'location',
    eyebrow: 'Where We Work',
    heading: 'Soakd Service Areas in Charleston, SC',
    subtext:
      'Locally owned and based in Charleston, Soakd serves homeowners and businesses throughout the Lowcountry — from the beaches to the suburbs.',
    // Cards come from the page registry — every registered page whose parent is
    // this hub. Empty today; fills automatically as county pages are built.
    items: childrenOf('/service-areas').map((child) => ({
      name: child.name,
      href: child.path,
      image: child.cardImage,
      description: child.cardDescription,
    })),
  };

  return (
    <>
      <SEOHead
        title="Service Areas | Window Cleaning & Pressure Washing Charleston SC | Soakd"
        description="Soakd Window Cleaning serves all of Charleston SC and the Lowcountry — West Ashley, Mount Pleasant, James Island, Summerville, Goose Creek, Isle of Palms, and more. Call 843-826-6708."
        canonical="/service-areas"
        geoRegion="US-SC"
        geoPlacename="Charleston"
        jsonLd={[
          localBusinessSchema,
          areaServedSchema(areas.map((a) => a.name)),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Service Areas', url: '/service-areas' },
          ]),
        ]}
      />

      <CardHub hub={hub} headingLevel={1} />
      <CTASection />
    </>
  );
}

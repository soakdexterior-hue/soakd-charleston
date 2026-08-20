import React from 'react';
import SEOHead, {
  localBusinessSchema,
  serviceSchema,
  breadcrumbSchema,
} from '@/components/seo/SEOHead';
import CardHub from '@/components/seo-template/CardHub';
import CTASection from '@/components/shared/CTASection';
import { childrenOf } from '@/data/seo-pages';
import { areas } from '@/data/serviceAreas';
import { BUSINESS } from '@/data/business';

/**
 * `/service-areas` — the Top Level Service Area page.
 *
 * Card hub ONLY (Karan's rule) — no hero, benefits, why, FAQ or map sections.
 * The hub heading carries the page's single H1, so `headingLevel={1}`.
 *
 * Cards are derived from the registry: every page whose parentPath is
 * '/service-areas'. Counties appear here automatically as they are built.
 *
 * Copy is Karan's South Carolina page copy — meta, H1 and hero description
 * (used as the hub subtext), minus the citation markers his source document
 * carried. The internal home link is dropped here because the subtext sits on
 * the home-linked hub page itself; see the note in the conversation.
 */
export default function ServiceAreas() {
  const hub = {
    variant: 'location',
    eyebrow: 'Our Locations',
    heading: 'Service Areas for Window Cleaning in South Carolina',
    subtext:
      'Soakd provides professional window cleaning in South Carolina for homeowners seeking clearer glass, cleaner frames, and a more polished exterior. Window cleaning can include interior and exterior glass along with screens, tracks, and sills.',
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
        title="Professional Window Cleaning in South Carolina | Soakd"
        description="Soakd provides professional window cleaning in South Carolina with detailed service and flexible scheduling. Get cleaner, clearer windows. Call Now!"
        canonical="/service-areas"
        geoRegion="US-SC"
        geoPlacename="South Carolina"
        jsonLd={[
          localBusinessSchema,
          serviceSchema(
            'Window Cleaning',
            'Professional residential window cleaning including interior and exterior glass, screens, tracks and sills.',
            'South Carolina'
          ),
          {
            '@context': 'https://schema.org',
            '@type': 'HomeAndConstructionBusiness',
            '@id': 'https://soakdcharleston.com/#business',
            name: BUSINESS.name,
            url: 'https://soakdcharleston.com',
            telephone: BUSINESS.telephone,
            areaServed: areas.map((a) => ({ '@type': 'City', name: a.name })),
          },
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

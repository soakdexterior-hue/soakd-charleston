import React from 'react';
import SEOHead, {
  localBusinessSchema,
  serviceSchema,
  breadcrumbSchema,
} from '@/components/seo/SEOHead';
import CardHub from '@/components/seo-template/CardHub';
import CTASection from '@/components/shared/CTASection';
import { services } from '@/data/services';
import { childrenOf } from '@/data/seo-pages';
import { BUSINESS } from '@/data/business';

/**
 * `/services` — the Primary Service hub. Root of the services tree.
 *
 * The card hub IS the page (Karan's rule) — no hero, benefits, why, body copy,
 * map or CTA. With no hero, the hub heading carries the page's single H1.
 */
export default function Services() {
  const hub = {
    variant: 'service',
    eyebrow: 'What We Do',
    heading: 'Exterior Cleaning Services in Charleston, SC',
    subtext:
      'Soakd is a locally owned, fully insured exterior cleaning company serving Charleston and the surrounding Lowcountry.',
    // Cards come from the page registry — every registered page whose parent is
    // this hub. The legacy flat pages (/window-cleaning etc.) are not registered,
    // so they are excluded until rebuilt on the template.
    items: childrenOf('/services').map((child) => ({
      name: child.name,
      href: child.path,
      image: child.cardImage,
      description: child.cardDescription,
    })),
  };

  return (
    <>
      <SEOHead
        title="Exterior Cleaning Services in Charleston, SC | Soakd"
        description="Window cleaning, pressure washing, soft washing and gutter cleaning across Charleston SC and the Lowcountry. Fully insured, 170+ five-star reviews. Call 843-826-6708."
        canonical="/services"
        geoRegion="US-SC"
        geoPlacename="Charleston"
        jsonLd={[
          localBusinessSchema,
          ...services.map((s) =>
            serviceSchema(s.name, s.description, `${BUSINESS.city}, ${BUSINESS.state}`)
          ),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Services', url: '/services' },
          ]),
        ]}
      />

      <CardHub hub={hub} headingLevel={1} />
      <CTASection />
    </>
  );
}

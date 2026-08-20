import React from 'react';
import SeoHero from './SeoHero';
import CardHub from './CardHub';
import BenefitsSection from './BenefitsSection';
import WhySection from './WhySection';
import FaqSection from './FaqSection';
import MapSection from './MapSection';
import CTASection from '@/components/shared/CTASection';

/**
 * Shared body for all four SEO page types.
 *
 * The card hub is optional — it renders only when the page has real children of
 * its own type — and its POSITION depends on the variant (Karan's rule):
 *
 *   location hub → directly BELOW the hero
 *   service  hub → directly ABOVE the FAQ
 *
 * So the section order per page type is:
 *
 *   County (Nested Broad Stroke):  hero + hub(location) + benefits + why + faq + map(area)
 *   City (Broad Stroke):           hero + benefits + why + hub(service) + faq + map(area)
 *   Location / Primary Service:    hero + benefits + why +                faq + map(gbp)
 *
 * SEOHead (meta + JSON-LD) stays in the page component, not here.
 */
export default function SeoPageTemplate({ copy }) {
  const hasHub = !!copy.hub && copy.hub.items.length > 0;
  const locationHub = hasHub && copy.hub.variant === 'location';
  const serviceHub = hasHub && copy.hub.variant === 'service';

  return (
    <>
      <SeoHero hero={copy.hero} />
      {/* Muted so it separates from the Benefits block that follows it. */}
      {locationHub && <CardHub hub={copy.hub} background />}
      <BenefitsSection benefits={copy.benefits} />
      <WhySection why={copy.why} />
      {serviceHub && <CardHub hub={copy.hub} />}
      <FaqSection faq={copy.faq} />
      <MapSection map={copy.map} />
      <CTASection title={copy.ctaHeadline} />
    </>
  );
}

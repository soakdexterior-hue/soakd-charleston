import React from 'react';
import SplitSection from './SplitSection';

/** Benefits: image on the left, content on the right. */
export default function BenefitsSection({ benefits }) {
  return (
    <SplitSection
      eyebrow={benefits.eyebrow ?? 'Benefits'}
      heading={benefits.heading}
      subheading={benefits.subheading}
      items={benefits.items}
      image={benefits.image}
      imageAlt={benefits.imageAlt}
    />
  );
}

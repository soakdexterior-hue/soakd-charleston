import React from 'react';
import SplitSection from './SplitSection';

/** Why: image on the right, content on the left — the mirror of Benefits. */
export default function WhySection({ why }) {
  return (
    <SplitSection
      eyebrow={why.eyebrow ?? 'Why Us'}
      heading={why.heading}
      subheading={why.subheading}
      items={why.items}
      image={why.image}
      imageAlt={why.imageAlt}
      reverse
      background
    />
  );
}

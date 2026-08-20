import React from 'react';
import { BUSINESS, GOOGLE_BUSINESS } from '@/data/business';
import RichText from './RichText';

/**
 * Google Maps embed — keyless iframe, lazy-loaded.
 *
 * "location" embeds the area by place query (county / city pages);
 * "gbp" embeds the business's Google Business Profile (leaf service pages).
 */
export default function MapSection({ map }) {
  const isGbp = map.variant === 'gbp';
  const query = map.query ?? BUSINESS.address;
  const heading = map.heading ?? (isGbp ? 'Our Google Business Profile' : 'Our Service Area');

  // The GBP variant embeds the listing by CID so it always resolves to our own
  // profile; the area variant embeds a place search for the county/city.
  const src = isGbp
    ? GOOGLE_BUSINESS.embedUrl
    : `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-3">
            {map.eyebrow ?? 'Find Us'}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            {heading}
          </h2>
          {map.subtext && (
            <RichText className="text-muted-foreground max-w-4xl mx-auto text-lg leading-relaxed">
              {map.subtext}
            </RichText>
          )}
        </div>

        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden border shadow-sm">
          <iframe
            title={isGbp ? `${BUSINESS.name} on Google Maps` : `Map of ${query}`}
            src={src}
            className="w-full h-[320px] sm:h-[400px] md:h-[480px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

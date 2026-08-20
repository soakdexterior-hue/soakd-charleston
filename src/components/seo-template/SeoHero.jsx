import React from 'react';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BUSINESS } from '@/data/business';
import QuoteForm from '@/components/forms/QuoteForm';
import RichText from './RichText';

/**
 * Two-column SEO hero: headline + description + phone CTA on the left,
 * an inline quote-form card on the right.
 */
export default function SeoHero({ hero }) {
  return (
    <section className="relative overflow-hidden bg-primary">
      {hero.image && (
        <div className="absolute inset-0">
          <img
            src={hero.image}
            alt={hero.imageAlt ?? ''}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary" />
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="max-w-xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              {hero.headline}
            </h1>
            <RichText className="text-base sm:text-lg text-white/80 leading-relaxed mb-8">
              {hero.subtext}
            </RichText>
            <a href={BUSINESS.phoneHref}>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-bold px-8 w-full sm:w-auto"
              >
                <Phone className="w-5 h-5 mr-2" /> {BUSINESS.phone}
              </Button>
            </a>
          </div>

          <div className="bg-white rounded-2xl border shadow-2xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-center text-foreground mb-1">
              {hero.formTitle ?? 'Get a Free Quote'}
            </h2>
            <p className="text-sm text-muted-foreground text-center mb-6">
              Tell us about your property — we respond within 1 hour.
            </p>
            <QuoteForm preselectedService={hero.formPreselectService} />
          </div>
        </div>
      </div>

      {hero.imageCredit && (
        <p className="absolute bottom-2 right-4 z-10 text-[10px] text-white/40">
          Photo: {hero.imageCredit}
        </p>
      )}
    </section>
  );
}

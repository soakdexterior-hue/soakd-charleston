import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BUSINESS } from '@/data/business';
import RichText from './RichText';

/**
 * Two-column image + content block shared by the Benefits and Why sections.
 * Content order: badge → heading → subheading → checkmark list → CTAs.
 *
 * `reverse` flips the image to the right (Why mirrors Benefits).
 */
export default function SplitSection({
  eyebrow,
  heading,
  subheading,
  items,
  image,
  imageAlt,
  reverse = false,
  background = false,
}) {
  return (
    <section className={`py-16 md:py-24 ${background ? 'bg-muted/40' : 'bg-background'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {image && (
            <div className={reverse ? 'lg:order-2' : ''}>
              <img
                src={image}
                alt={imageAlt ?? ''}
                loading="lazy"
                className="w-full aspect-[4/3] object-cover rounded-2xl shadow-lg"
              />
            </div>
          )}

          <div className={reverse ? 'lg:order-1' : ''}>
            <span className="inline-block bg-secondary text-white text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
              {eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              {heading}
            </h2>
            {subheading && (
              <RichText className="text-muted-foreground text-lg leading-relaxed mb-8">
                {subheading}
              </RichText>
            )}

            <ul className="space-y-5 mb-10">
              {items.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-1" strokeWidth={3} />
                  <p className="leading-relaxed text-sm">
                    <span className="font-bold text-foreground">{item.title}:</span>{' '}
                    <span className="text-muted-foreground">
                      <RichText inline>{item.text}</RichText>
                    </span>
                  </p>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-white font-bold px-8 w-full sm:w-auto"
                >
                  Get a Free Quote <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href={BUSINESS.phoneHref}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary font-bold px-8 w-full sm:w-auto"
                >
                  <Phone className="w-5 h-5 mr-2" /> {BUSINESS.phone}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

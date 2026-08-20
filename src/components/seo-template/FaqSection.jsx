import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import RichText from './RichText';

/**
 * Accordion FAQ, matching the style of the standalone /faq page.
 *
 * Answers render through RichText so a link placed inside an answer stays
 * clickable for visitors. The JSON-LD copy of the same answer is flattened to
 * plain text in SEOHead — the link lives on the page, not in the schema.
 */
function FaqItem({ faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between text-left px-5 py-4 bg-white hover:bg-muted/50 transition-colors gap-4"
      >
        <span className="font-semibold text-primary text-sm md:text-base">{faq.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-secondary shrink-0 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      {open && (
        <div className="px-5 py-4 bg-muted/30 border-t border-border">
          <RichText className="text-foreground text-sm leading-relaxed">{faq.answer}</RichText>
        </div>
      )}
    </div>
  );
}

export default function FaqSection({ faq }) {
  return (
    <section className="py-16 md:py-24 bg-muted/40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-3">
            Got Questions?
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            {faq.title ?? 'Frequently Asked Questions'}
          </h2>
          {faq.subtitle && (
            <p className="text-muted-foreground text-lg leading-relaxed">{faq.subtitle}</p>
          )}
        </div>

        <div className="space-y-3">
          {faq.items.map((item) => (
            <FaqItem key={item.question} faq={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

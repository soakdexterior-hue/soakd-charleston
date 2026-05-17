import React, { useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import SEO from '../components/shared/SEO';

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between soft washing and pressure washing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Soft washing uses low-pressure water combined with biodegradable cleaning solutions to safely remove algae, mold, mildew, and organic staining from delicate surfaces like vinyl siding, stucco, wood, and roofs. Pressure washing uses high-pressure water to blast away tough buildup from hard, durable surfaces like concrete driveways, brick patios, and sidewalks. Using high pressure on the wrong surface can cause cracking, water intrusion, or stripped paint."
      }
    },
    {
      "@type": "Question",
      "name": "How often should I clean my windows in Charleston, SC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most Charleston homeowners should have their windows professionally cleaned at least twice a year — once in spring after pollen season, and once in fall to clear summer salt and humidity residue. Coastal properties near Isle of Palms, Folly Beach, or Sullivan's Island should schedule every 3–4 months due to corrosive salt air exposure."
      }
    },
    {
      "@type": "Question",
      "name": "What causes mold and algae buildup on Charleston homes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Charleston's warm, humid climate and frequent rainfall create ideal conditions for algae (Gloeocapsa Magma), mold, and mildew to grow on home exteriors. The black streaks you see on roofs and siding are living organisms that feed on building materials. Soft washing with professional-grade solutions kills them at the root and prevents regrowth for 12–24 months."
      }
    },
    {
      "@type": "Question",
      "name": "How often should gutters be cleaned in Charleston?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We recommend professional gutter cleaning at least twice per year in the Charleston area — once in late spring after pollen season, and once in late fall after leaves drop. Homes near live oaks or pine trees may need quarterly cleanings due to heavy debris accumulation from Spanish moss and pine needles."
      }
    },
    {
      "@type": "Question",
      "name": "Is soft washing safe for my roof?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — soft washing is the only manufacturer-approved method for cleaning asphalt shingle roofs. The low-pressure application won't strip granules or void your roof warranty. Pressure washing shingles causes significant damage and can void manufacturer warranties, which is why professional roof cleaners exclusively use soft wash techniques."
      }
    },
    {
      "@type": "Question",
      "name": "How do I know if I need pressure washing or soft washing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The surface type determines the method. Concrete driveways, brick patios, and sidewalks need pressure washing. Vinyl siding, stucco, painted wood, and roofs need soft washing. Wood decks and fences need low-pressure soft washing. Windows require professional window cleaning — a separate process from both."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer a satisfaction guarantee?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Every job at Soakd is backed by our Clean Window Guarantee. If you're not completely satisfied with the results, we return and make it right at no extra charge — no questions asked."
      }
    },
    {
      "@type": "Question",
      "name": "How long does professional window cleaning last?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In Charleston's climate, professionally cleaned windows typically stay clean for 3–6 months for interior glass and 2–4 months for exterior glass exposed to pollen, humidity, and salt air. Coastal properties may see buildup faster. Regular scheduling — typically twice a year — is the most cost-effective approach."
      }
    },
    {
      "@type": "Question",
      "name": "Are you insured and licensed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Soakd Window Cleaning is fully insured with general liability coverage on every job. This protects your home and your property if anything unexpected occurs. We strongly advise against hiring any exterior cleaning company that cannot provide proof of insurance."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can you schedule a job?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most jobs are scheduled within 48 hours of your quote request. We respond to all calls and quote forms within one hour, seven days a week. Same-week availability is common — call or text 843-826-6708 for the fastest response."
      }
    },
    {
      "@type": "Question",
      "name": "What areas do you serve in the Charleston region?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Soakd serves all of Charleston and the surrounding Lowcountry, including West Ashley, Mount Pleasant, James Island, Johns Island, Daniel Island, Summerville, Goose Creek, North Charleston, Isle of Palms, Sullivan's Island, Folly Beach, and more."
      }
    },
    {
      "@type": "Question",
      "name": "Can hard water stains be removed from windows?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — professional window cleaners use specialized hard water stain removal solutions that dissolve mineral deposits without scratching glass. DIY methods rarely work on stubborn hard water stains. If left too long, mineral deposits can permanently etch into the glass surface, requiring restoration or full replacement."
      }
    },
  ]
};

const CATEGORIES = [
  {
    label: 'Soft Washing & Pressure Washing',
    faqs: [0, 5, 2],
  },
  {
    label: 'Window Cleaning',
    faqs: [1, 7, 11],
  },
  {
    label: 'Roof & Gutter Care',
    faqs: [4, 3],
  },
  {
    label: 'Working With Soakd',
    faqs: [6, 8, 9, 10],
  },
];

const ALL_FAQS = FAQ_SCHEMA.mainEntity;

function FAQItem({ faq, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left px-5 py-4 bg-white hover:bg-muted/50 transition-colors gap-4"
      >
        <span className="font-semibold text-primary text-sm md:text-base">{faq.name}</span>
        <ChevronDown className={`w-5 h-5 text-secondary shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-5 py-4 bg-muted/30 border-t border-border">
          <p className="text-foreground text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <>
      <SEO
        title="FAQ | Window Cleaning & Pressure Washing Questions | Soakd Charleston SC"
        description="Get answers to your top questions about window cleaning, soft washing, pressure washing, gutter cleaning, and roof cleaning in Charleston SC. Call Soakd at 843-826-6708."
        canonical="/faq"
        schema={FAQ_SCHEMA}
      />

      {/* Hero */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">Got Questions?</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-white/75 max-w-2xl mx-auto text-lg leading-relaxed">
            Everything Charleston homeowners want to know about window cleaning, pressure washing,
            soft washing, gutter cleaning, and working with Soakd.
          </p>
        </div>
      </section>

      {/* Intro body copy */}
      <section className="bg-background py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-foreground leading-relaxed text-base mb-4">
            Charleston's coastal climate creates unique exterior maintenance challenges that most national
            cleaning companies don't fully understand. Salt air from the Atlantic corrodes glass and metal.
            The region's warm humidity and abundant rainfall accelerate algae, mold, and mildew growth on
            roofs, siding, and driveways faster than almost anywhere else in the Southeast. Pollen seasons
            are intense — yellow-green coatings accumulate on windows within days of a cleaning. And
            Spanish moss, pine needles, and live oak debris fill gutters far more aggressively than in
            inland communities.
          </p>
          <p className="text-foreground leading-relaxed text-base">
            The questions below are drawn from real conversations we have with Charleston, Mount Pleasant,
            Summerville, and James Island homeowners every week. If you don't see your question answered
            here, call or text us at <a href="tel:8438266708" className="text-secondary font-semibold hover:underline">843-826-6708</a> — we respond within one hour, seven days a week.
          </p>
        </div>
      </section>

      {/* FAQ by category */}
      <section className="bg-background pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">
          {CATEGORIES.map((cat) => (
            <div key={cat.label}>
              <h2 className="text-xl font-bold text-primary mb-4 pb-2 border-b border-border">{cat.label}</h2>
              <div className="space-y-3">
                {cat.faqs.map((idx) => (
                  <FAQItem key={idx} faq={ALL_FAQS[idx]} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-white text-2xl font-bold mb-2">Still have questions?</p>
          <p className="text-white/70 text-sm mb-8">We're happy to answer anything. Call, text, or fill out our quote form — we respond fast.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:8438266708">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold px-8">
                <Phone className="w-4 h-4 mr-2" /> Call 843-826-6708
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold px-8">
                Request a Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import SEO from '../components/shared/SEO';

const AREAS = [
  { name: 'Charleston', county: 'Charleston County', zip: '29401', popular_service: 'Window Cleaning' },
  { name: 'West Ashley', county: 'Charleston County', zip: '29414', popular_service: 'Pressure Washing' },
  { name: 'Mount Pleasant', county: 'Charleston County', zip: '29464', popular_service: 'Window Cleaning' },
  { name: 'James Island', county: 'Charleston County', zip: '29412', popular_service: 'Soft Washing' },
  { name: 'Johns Island', county: 'Charleston County', zip: '29455', popular_service: 'Gutter Cleaning' },
  { name: 'Daniel Island', county: 'Berkeley County', zip: '29492', popular_service: 'Window Cleaning' },
  { name: 'Summerville', county: 'Dorchester County', zip: '29483', popular_service: 'Pressure Washing' },
  { name: 'Goose Creek', county: 'Berkeley County', zip: '29445', popular_service: 'Soft Washing' },
  { name: 'North Charleston', county: 'Charleston County', zip: '29405', popular_service: 'Pressure Washing' },
  { name: 'Isle of Palms', county: 'Charleston County', zip: '29451', popular_service: 'Window Cleaning' },
  { name: "Sullivans Island", county: 'Charleston County', zip: '29482', popular_service: 'Soft Washing' },
  { name: 'Folly Beach', county: 'Charleston County', zip: '29439', popular_service: 'Window Cleaning' },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Soakd Window Cleaning",
  "telephone": "843-826-6708",
  "url": "https://soakdcharleston.com",
  "areaServed": AREAS.map(a => ({ "@type": "City", "name": a.name })),
};

export default function ServiceAreas() {
  return (
    <>
      <SEO
        title="Service Areas | Window Cleaning & Pressure Washing Charleston SC | Soakd"
        description="Soakd Window Cleaning serves all of Charleston SC and the Lowcountry — West Ashley, Mount Pleasant, James Island, Summerville, Goose Creek, Isle of Palms, and more. Call 843-826-6708."
        canonical="/service-areas"
        schema={SCHEMA}
      />

      {/* Hero */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">Where We Work</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
            Soakd Service Areas in Charleston, SC
          </h1>
          <p className="text-white/75 max-w-2xl mx-auto text-lg leading-relaxed">
            Locally owned and based in Charleston, Soakd Window Cleaning serves homeowners and businesses
            throughout the entire Lowcountry region — from the beaches to the suburbs.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">

          {/* Topical body copy for AI / SEO citability */}
          <div className="prose prose-slate max-w-none mb-14">
            <h2 className="text-2xl font-bold text-primary mb-4">Professional Exterior Cleaning Across the Lowcountry</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Soakd Window Cleaning provides residential and commercial exterior cleaning services throughout
              Charleston, South Carolina and the surrounding Lowcountry communities. Whether you need streak-free
              window cleaning in Mount Pleasant, soft washing on a James Island home, or driveway pressure washing
              in Summerville, our fully insured team brings the same high-quality service to every ZIP code we serve.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The Charleston climate — characterized by intense humidity, heavy pollen seasons, frequent rain, and
              corrosive coastal salt air — makes regular professional exterior cleaning more important here than almost
              anywhere else in the country. Salt deposits from the Atlantic Ocean can permanently etch window glass
              within months if left untreated. Black algae streaks (Gloeocapsa Magma) spread rapidly on roofs and
              siding due to year-round warmth. Spanish moss and pine debris fill gutters faster than in most
              regions, causing overflow damage to foundations and fascia boards.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              That's why Soakd operates on a rapid-response model — with most quote requests answered within one
              hour and most jobs scheduled within 48 hours. Our team uses professional-grade water-fed pole systems
              for window cleaning, biodegradable soft-wash solutions for roofs and siding, and commercial pressure
              washing equipment for concrete, brick, and hardscape. Every service is backed by our Clean Window
              Guarantee: if you're not satisfied, we return and make it right at no extra charge.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              With 170+ five-star Google reviews from verified Lowcountry homeowners, Soakd is one of the most
              trusted exterior cleaning companies in the Charleston area. We are locally owned — not a franchise —
              which means every crew member is accountable to the community they serve. We carry full general
              liability insurance on every job, protecting your home and your investment.
            </p>
            <p className="text-foreground leading-relaxed">
              If you're unsure whether we service your area, call or text us at 843-826-6708. We're happy to
              confirm availability and provide a free, no-obligation estimate for any exterior cleaning project in
              the greater Charleston region.
            </p>
          </div>

          {/* Area cards grid */}
          <h2 className="text-2xl font-bold text-primary mb-6">Cities & Communities We Serve</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-14">
            {AREAS.map((area) => (
              <div key={area.name} className="bg-white rounded-2xl border shadow-sm p-5 flex flex-col gap-2">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-secondary shrink-0" />
                  <h3 className="font-bold text-primary text-base">{area.name}</h3>
                </div>
                <p className="text-muted-foreground text-xs">{area.county} · {area.zip}</p>
                <p className="text-xs text-foreground mt-auto pt-2 border-t border-muted">
                  Top service: <span className="font-semibold text-primary">{area.popular_service}</span>
                </p>
              </div>
            ))}
          </div>

          {/* What's included */}
          <div className="bg-primary rounded-2xl p-8 md:p-10 mb-12">
            <h2 className="text-2xl font-bold text-white mb-2">What Every Service Includes</h2>
            <p className="text-white/70 text-sm mb-6">No matter which community you're in, you get the same Soakd standard.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Free upfront quote — no surprises',
                'Fully insured crew on every job',
                'Professional-grade equipment',
                'Biodegradable, eco-safe cleaning solutions',
                'Clean Window Satisfaction Guarantee',
                '1-hour response to all quote requests',
                'Screens, tracks & sills cleaned at no extra cost',
                'Same-week scheduling available',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/85 text-sm">
                  <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-xl font-bold text-primary mb-2">Ready to book your service?</p>
            <p className="text-muted-foreground text-sm mb-6">Call or text us — we respond within 1 hour, 7 days a week.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:8438266708">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8">
                  <Phone className="w-4 h-4 mr-2" /> Call 843-826-6708
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary text-primary font-bold px-8">
                  Request a Free Quote
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
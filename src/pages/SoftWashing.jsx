import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from "@/components/ui/button";
import CTASection from '../components/shared/CTASection';

const IDEAL_FOR = [
  'Vinyl and wood siding',
  'Stucco and EIFS systems',
  'Roof shingles and tiles',
  'Painted surfaces and trim',
  'Screened-in porches and enclosures',
  'Historic Charleston homes',
];

export default function SoftWashing() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-20">
          <img src="https://media.base44.com/images/public/69bdabf65e992908c9993001/ae57edefc_generated_17952509.png" alt="Soft washing service in Charleston SC" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-20 md:py-28 text-center">
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Soft Washing Services in Charleston, SC
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            A gentle, low-pressure cleaning method that safely removes algae, mold, mildew, and bacteria from your home's exterior without risking damage to delicate surfaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:843-826-6708">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-8 w-full sm:w-auto">
                <Phone className="w-5 h-5 mr-2" /> Call Now
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold px-8 w-full sm:w-auto">
                Get Free Quote <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">What Is Soft Washing?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Soft washing uses low-pressure water combined with specialized biodegradable cleaning solutions to safely remove organic growth like algae, mold, mildew, and bacteria from your home's exterior surfaces. Unlike traditional pressure washing, soft washing won't damage paint, siding, shingles, or delicate architectural details.
              </p>
              <h3 className="text-xl font-bold text-foreground mb-4">Why Soft Washing Is Better for Charleston Homes</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Charleston's warm, humid climate creates an ideal breeding ground for mold, algae, and bacteria on your home's surfaces. High-pressure washing can force water behind siding, damage paint, and even crack delicate materials common in Lowcountry architecture. Soft washing is the safer, more effective choice — it kills organic growth at its source so your home stays cleaner longer.
              </p>
              <h3 className="text-xl font-bold text-foreground mb-4">Ideal For</h3>
              <ul className="space-y-3">
                {IDEAL_FOR.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src="https://media.base44.com/images/public/69bdabf65e992908c9993001/ae57edefc_generated_17952509.png" alt="Soft washing a Charleston home" className="w-full" />
              </div>
              <div className="bg-white rounded-2xl p-8 border shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Safe for Your Home</h3>
                    <p className="text-sm text-muted-foreground">No damage, just results</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Our soft washing technique uses 1/3 the pressure of a garden hose while delivering a deeper, longer-lasting clean. The specialized solutions we use are biodegradable and safe for your landscaping, pets, and family. Whether you're in Isle of Palms, Daniel Island, or Summerville, we protect your home while giving it a brand-new look.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-6">Explore Our Other Services</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/window-cleaning" className="text-secondary hover:underline font-medium text-sm">Window Cleaning</Link>
            <span className="text-border">•</span>
            <Link to="/pressure-washing" className="text-secondary hover:underline font-medium text-sm">Pressure Washing</Link>
            <span className="text-border">•</span>
            <Link to="/gutter-cleaning" className="text-secondary hover:underline font-medium text-sm">Gutter Cleaning</Link>
            <span className="text-border">•</span>
            <Link to="/contact" className="text-secondary hover:underline font-medium text-sm">Get a Quote</Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
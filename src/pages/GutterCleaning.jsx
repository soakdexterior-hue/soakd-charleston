import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone, ArrowRight, Award, AlertTriangle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import CTASection from '../components/shared/CTASection';
import SEO from '../components/shared/SEO';

const INCLUDED = [
  'Complete debris removal from all gutters',
  'Downspout flushing and unclogging',
  'Visual inspection for damage or leaks',
  'Cleanup of all removed debris',
  'Before and after photo documentation',
  'Recommendations for any needed repairs',
];

const RISKS = [
  'Foundation damage from water overflow',
  'Roof leaks and fascia board rot',
  'Pest infestations and breeding grounds',
  'Landscape erosion around your home',
  'Ice dams in winter weather',
];

export default function GutterCleaning() {
  return (
    <>
      <SEO
        title="Gutter Cleaning Charleston SC | Soakd"
        description="Professional gutter cleaning in Charleston & Summerville SC. Protect your home today. Free quote at 843-826-6708."
        canonical="/gutter-cleaning"
      />
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-20">
          <img src="https://media.base44.com/images/public/69bdabf65e992908c9993001/f83ec5140_generated_9c30a3c3.png" alt="Professional gutter cleaning service in Charleston SC" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-20 md:py-28 text-center">
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Gutter Cleaning in Charleston, SC
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Keep your gutters clear and your home protected from water damage. Our professional gutter cleaning service ensures proper drainage year-round in Charleston's rainy climate.
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
              <h2 className="text-3xl font-bold text-foreground mb-6">Why Gutter Cleaning Matters</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With Charleston's frequent rainstorms and abundance of live oaks, pine trees, and palmetto palms, your gutters can fill up fast. Clogged gutters cause water to overflow, which can lead to serious and expensive damage to your home's foundation, roof, siding, and landscaping.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We recommend having your gutters professionally cleaned at least twice a year — especially before hurricane season. Our team serves homeowners across Charleston, Summerville, Goose Creek, Mount Pleasant, and all surrounding Lowcountry communities.
              </p>

              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-destructive" />
                Risks of Neglected Gutters
              </h3>
              <ul className="space-y-3 mb-8">
                {RISKS.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-destructive shrink-0 mt-2" />
                    <span className="text-foreground text-sm">{r}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-foreground mb-4">What's Included</h3>
              <ul className="space-y-3">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src="https://media.base44.com/images/public/69bdabf65e992908c9993001/f83ec5140_generated_9c30a3c3.png" alt="Clean gutters and downspouts on a Charleston SC home after professional cleaning" className="w-full" />
              </div>
              <div className="bg-white rounded-2xl p-8 border shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Professional & Thorough</h3>
                    <p className="text-sm text-muted-foreground">Every gutter, every downspout</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We don't just scoop out the big stuff. Our team fully clears every gutter run, flushes all downspouts to confirm flow, inspects for damage, and cleans up every bit of debris. You get photos of the finished work so you can see the results even from the ground.
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
            <Link to="/soft-washing" className="text-secondary hover:underline font-medium text-sm">Soft Washing</Link>
            <span className="text-border">•</span>
            <Link to="/reviews" className="text-secondary hover:underline font-medium text-sm">Reviews</Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
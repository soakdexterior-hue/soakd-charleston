import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from "@/components/ui/button";
import CTASection from '../components/shared/CTASection';
import SEO from '../components/shared/SEO';
import { IMAGES } from '@/data/media';

const IDEAL_FOR = [
  'Asphalt shingle roofs',
  'Tile and metal roofs',
  'Homes with black streak stains',
  'Roofs near heavy tree cover',
  'Coastal properties with salt exposure',
  'Roofs showing algae or moss growth',
];

export default function RoofWashing() {
  return (
    <>
      <SEO
        title="Roof Washing Services Charleston SC | Soakd"
        description="Professional roof washing in Charleston SC. Safe low-pressure soft washing removes algae, black streaks, and moss without damaging shingles or voiding your warranty. Call 843-826-6708."
        canonical="/roof-washing"
      />
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-20">
          <img src={IMAGES.roofWashing} alt="Professional roof washing service on a Charleston SC home" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-20 md:py-28 text-center">
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Roof Washing Services in Charleston, SC
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Safe, low-pressure roof washing that removes algae, black streaks, and moss — restoring your roof's appearance and extending its lifespan without voiding your warranty.
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
              <h2 className="text-3xl font-bold text-foreground mb-6">What Is Roof Washing?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Roof washing is a specialized soft washing process that safely removes algae, mold, mildew, and bacteria from your roof's surface. Using low-pressure water combined with professional-grade biodegradable cleaning solutions, we eliminate the organisms that cause those unsightly black streaks — without the high pressure that can damage shingles and void your roof warranty.
              </p>
              <h3 className="text-xl font-bold text-foreground mb-4">What Causes Those Black Streaks?</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The dark streaks on your roof are caused by <strong>Gloeocapsa magma</strong>, a type of algae that thrives in warm, humid climates like Charleston's. It feeds on the limestone filler in asphalt shingles, causing discoloration and premature aging. Left untreated, it can shorten your roof's lifespan by years. Our soft washing process kills this algae at the root, keeping your roof cleaner for up to 2–3 years.
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
                <img src={IMAGES.roofWashing} alt="Roof washing removing black algae streaks from a Charleston SC roof" className="w-full" />
              </div>
              <div className="bg-white rounded-2xl p-8 border shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Warranty-Safe Cleaning</h3>
                    <p className="text-sm text-muted-foreground">No pressure, no damage</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  High-pressure washing strips the protective granules from asphalt shingles, voiding your manufacturer warranty and dramatically shortening your roof's life. Our low-pressure soft washing is the only manufacturer-approved method — it's safe for all roof types and backed by our satisfaction guarantee. Whether you're in Mount Pleasant, James Island, or Summerville, we'll protect your investment.
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
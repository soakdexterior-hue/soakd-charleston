import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone, ArrowRight, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";
import CTASection from '../components/shared/CTASection';

const SURFACES = [
  'Driveways and walkways',
  'Patios and pool decks',
  'Sidewalks and curbs',
  'Fences and retaining walls',
  'Concrete and brick surfaces',
  'Garage floors',
];

export default function PressureWashing() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-20">
          <img src="https://media.base44.com/images/public/69bdabf65e992908c9993001/db442dc11_generated_01ad29cc.png" alt="Pressure washing service in Charleston SC" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-20 md:py-28 text-center">
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Pressure Washing in Charleston, SC
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Restore your home's exterior surfaces to like-new condition. Our professional pressure washing removes years of built-up dirt, algae, mold, and grime from driveways, patios, walkways, and more.
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
              <h2 className="text-3xl font-bold text-foreground mb-6">Transform Your Outdoor Spaces</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Charleston's humid climate creates the perfect environment for mold, mildew, algae, and dirt to accumulate on your outdoor surfaces. Our professional pressure washing service blasts away years of buildup, revealing the clean, beautiful surfaces underneath.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                From Summerville driveways to Goose Creek patios, our team uses commercial-grade equipment and adjustable pressure settings to safely and effectively clean any hard surface. The before and after difference is incredible — many customers say it looks like they got a brand-new driveway.
              </p>
              <h3 className="text-xl font-bold text-foreground mb-4">Surfaces We Clean</h3>
              <ul className="space-y-3">
                {SURFACES.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src="https://media.base44.com/images/public/69bdabf65e992908c9993001/db442dc11_generated_01ad29cc.png" alt="Pressure washing a driveway in Charleston" className="w-full" />
              </div>
              <div className="bg-white rounded-2xl p-8 border shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Before &amp; After Results</h3>
                    <p className="text-sm text-muted-foreground">See the dramatic difference</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Our customers are always amazed at the transformation. Dark, stained concrete becomes bright and clean again. Green, mossy sidewalks look freshly poured. The results are dramatic and immediate — no waiting required.
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
            <Link to="/soft-washing" className="text-secondary hover:underline font-medium text-sm">Soft Washing</Link>
            <span className="text-border">•</span>
            <Link to="/gutter-cleaning" className="text-secondary hover:underline font-medium text-sm">Gutter Cleaning</Link>
            <span className="text-border">•</span>
            <Link to="/about" className="text-secondary hover:underline font-medium text-sm">About Us</Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
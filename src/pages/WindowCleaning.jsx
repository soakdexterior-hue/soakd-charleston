import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import CTASection from '../components/shared/CTASection';
import SEO from '../components/shared/SEO';

const BENEFITS = [
  'Crystal clear interior and exterior windows',
  'Screen cleaning and track detailing included',
  'Safe cleaning for multi-story homes',
  'Streak-free, spot-free guaranteed results',
  'Eco-friendly cleaning solutions',
  'Flexible scheduling around your day',
];

export default function WindowCleaning() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-20">
          <img src="https://media.base44.com/images/public/69bdabf65e992908c9993001/cb3a1e018_generated_67b0b0b3.png" alt="Professional window cleaning in Charleston SC" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-20 md:py-28 text-center">
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Professional Window Cleaning in Charleston, SC
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Let the Lowcountry sunshine pour through crystal clear windows. Our professional window cleaning service delivers streak-free, spotless results every time — backed by our Clean Window Guarantee.
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

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Why Clean Windows Matter</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Living in Charleston, SC means dealing with salt air, pollen, humidity, and coastal weather that quickly builds up on your windows. Regular professional window cleaning doesn't just improve your home's curb appeal — it extends the life of your glass by removing corrosive contaminants before they cause permanent damage.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you're in Mount Pleasant, Summerville, James Island, or anywhere across the Lowcountry, our team arrives with professional-grade equipment and eco-friendly solutions to make every window sparkle.
              </p>
              <h3 className="text-xl font-bold text-foreground mb-4">What's Included</h3>
              <ul className="space-y-3">
                {BENEFITS.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src="https://media.base44.com/images/public/69bdabf65e992908c9993001/cb3a1e018_generated_67b0b0b3.png" alt="Window cleaning service in Charleston" className="w-full" />
              </div>
              <div className="bg-white rounded-2xl p-8 border shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Clean Window Guarantee</h3>
                    <p className="text-sm text-muted-foreground">100% satisfaction or we make it right</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We stand behind every job. If you're not completely happy with your window cleaning, we'll come back and redo it at no charge. That's our promise to every homeowner in Charleston and beyond.
                </p>
              </div>
              <div className="bg-primary rounded-2xl p-8 text-white">
                <h3 className="font-bold text-lg mb-2">Residential Window Cleaning</h3>
                <p className="text-white/70 text-sm mb-4">Starting from</p>
                <p className="text-4xl font-bold mb-2">$149</p>
                <p className="text-white/70 text-sm mb-6">Price varies based on home size and number of windows</p>
                <Link to="/contact">
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold">
                    Get Your Custom Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-6">Explore Our Other Services</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/pressure-washing" className="text-secondary hover:underline font-medium text-sm">Pressure Washing</Link>
            <span className="text-border">•</span>
            <Link to="/soft-washing" className="text-secondary hover:underline font-medium text-sm">Soft Washing</Link>
            <span className="text-border">•</span>
            <Link to="/gutter-cleaning" className="text-secondary hover:underline font-medium text-sm">Gutter Cleaning</Link>
            <span className="text-border">•</span>
            <Link to="/reviews" className="text-secondary hover:underline font-medium text-sm">Customer Reviews</Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Sparkles, Clock, Star, Award, MapPin, Zap, ShieldCheck } from 'lucide-react';
import { Button } from "@/components/ui/button";
import TrustBar from '../components/shared/TrustBar';
import ServiceCard from '../components/shared/ServiceCard';
import ReviewCard from '../components/shared/ReviewCard';
import CTASection from '../components/shared/CTASection';

const SERVICES = [
  {
    icon: Sparkles,
    title: 'Window Cleaning',
    description: 'Crystal clear windows inside and out. We leave every pane sparkling so you can enjoy the Lowcountry views your home deserves.',
    path: '/window-cleaning',
    image: '/__generating__/img_8c8b6ae10a1a.png',
  },
  {
    icon: Zap,
    title: 'Pressure Washing',
    description: 'Blast away years of dirt, grime, and mildew from driveways, sidewalks, patios, and more. Your home will look brand new.',
    path: '/pressure-washing',
    image: '/__generating__/img_6de816b88275.png',
  },
  {
    icon: ShieldCheck,
    title: 'Soft Washing',
    description: 'Gentle yet powerful cleaning for siding, roofs, and delicate surfaces. Perfect for Charleston\'s historic and coastal homes.',
    path: '/soft-washing',
    image: '/__generating__/img_ecc1b86a396f.png',
  },
  {
    icon: Award,
    title: 'Gutter Cleaning',
    description: 'Keep your gutters clear and flowing. We remove all debris to protect your home from water damage year-round.',
    path: '/gutter-cleaning',
    image: '/__generating__/img_174acbf786a0.png',
  },
];

const REVIEWS = [
  { name: 'Sarah M.', date: 'February 2026', text: 'Soakd did an incredible job on our windows. They were fast, professional, and our windows have never looked better. Highly recommend to anyone in Mount Pleasant!' },
  { name: 'James R.', date: 'January 2026', text: 'Called Soakd for pressure washing our driveway and patio. The difference is night and day. They showed up on time and the results speak for themselves. Great local company.' },
  { name: 'Lisa T.', date: 'December 2025', text: 'We\'ve tried other cleaning companies in Charleston but Soakd is by far the best. Their Clean Window Guarantee is legit — they came back and touched up one spot no questions asked.' },
];

const WHY_US = [
  { icon: Clock, title: 'Fastest Response Time', desc: 'We respond to every inquiry within an hour. When you need your home cleaned, we don\'t make you wait.' },
  { icon: ShieldCheck, title: 'Clean Window Guarantee', desc: 'If you\'re not 100% happy with our work, we\'ll come back and make it right. No questions asked.' },
  { icon: Star, title: '70 Five-Star Reviews', desc: 'Our customers love us, and our reviews prove it. We earn trust one sparkling window at a time.' },
  { icon: MapPin, title: '2 Years in the Lowcountry', desc: 'Locally owned and operated. We know Charleston\'s homes, weather, and what it takes to keep them looking great.' },
];

const AREAS = [
  'Charleston', 'Summerville', 'Goose Creek', 'Mount Pleasant',
  'James Island', 'Daniel Island', 'Johns Island', 'Seabrook Island',
  'Isle of Palms', 'Folly Beach', 'Sullivans Island'
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/__generating__/img_25948ba1100c.png"
            alt="Beautiful Charleston home with sparkling clean windows"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-32 lg:py-40">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              70 Five-Star Reviews Across Charleston
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              The Lowcountry's Most Trusted Window &amp; Exterior Cleaning Company
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
              Serving Charleston and surrounding areas with a Clean Window Guarantee and the fastest response time in the business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:843-826-6708">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-8 text-base w-full sm:w-auto">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold px-8 text-base w-full sm:w-auto">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-secondary font-semibold text-sm tracking-widest uppercase">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">Our Professional Services</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              From sparkling windows to spotless driveways, we keep your Charleston home looking its absolute best.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <ServiceCard key={s.path} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-secondary font-semibold text-sm tracking-widest uppercase">Why Soakd</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">Why Charleston Homeowners Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WHY_US.map((item) => (
              <div key={item.title} className="flex gap-5 p-6 rounded-2xl bg-background border hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-secondary font-semibold text-sm tracking-widest uppercase">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((r) => (
              <ReviewCard key={r.name} {...r} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/reviews">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8">
                See All Reviews
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-secondary font-semibold text-sm tracking-widest uppercase">Coverage</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">Areas We Serve</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Proudly serving homeowners across the Charleston, SC metro area and surrounding Lowcountry communities.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {AREAS.map((area) => (
              <div key={area} className="flex items-center gap-2 bg-background border rounded-full px-5 py-2.5">
                <MapPin className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-foreground">{area}, SC</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection />
    </>
  );
}
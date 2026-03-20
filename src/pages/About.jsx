import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShieldCheck, Clock, Star, Users, MapPin } from 'lucide-react';
import CTASection from '../components/shared/CTASection';
import SEO from '../components/shared/SEO';

const VALUES = [
  { icon: Clock, title: 'Fast Response', desc: 'We respond to every inquiry within an hour. Your time matters, and we don\'t keep you waiting.' },
  { icon: ShieldCheck, title: 'Guaranteed Work', desc: 'Our Clean Window Guarantee means if you\'re not happy, we come back and make it right — no questions asked.' },
  { icon: Heart, title: 'Community First', desc: 'We\'re not a franchise. We\'re your neighbors, proud to serve the Charleston community we call home.' },
  { icon: Star, title: 'Quality Standards', desc: 'Every crew member is trained, insured, and committed to delivering five-star results on every single job.' },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">About Us</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Your Local Window &amp; Exterior Cleaning Experts
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Built on trust, fast response, and a commitment to making every Lowcountry home shine.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Soakd Window Cleaning was founded right here in Charleston, SC, with a simple goal: to provide the highest quality exterior cleaning service in the Lowcountry with the fastest response time and a guarantee that stands behind every job.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Over the past two years, we've grown from a small startup to one of the most trusted names in exterior cleaning across the Charleston metro area. With 70 five-star reviews and counting, our reputation speaks for itself — and it's built one clean window, one sparkling driveway, and one happy homeowner at a time.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We're locally owned and operated, which means when you call Soakd, you're talking to someone who lives and works right here in your community. From Mount Pleasant to Summerville, James Island to Daniel Island, we treat every home like it's our own.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Users className="w-5 h-5 text-secondary" />
                  Professional Team
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <MapPin className="w-5 h-5 text-secondary" />
                  Locally Owned
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Star className="w-5 h-5 text-secondary" />
                  70+ Five-Star Reviews
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="https://media.base44.com/images/public/69bdabf65e992908c9993001/7806fea0e_generated_d5d2c8d6.png" alt="Soakd Window Cleaning team" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-secondary font-semibold text-sm tracking-widest uppercase">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">What Drives Us Every Day</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VALUES.map((v) => (
              <div key={v.title} className="flex gap-5 p-6 rounded-2xl bg-background border">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <v.icon className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-1">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-6">Learn More About What We Do</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/window-cleaning" className="text-secondary hover:underline font-medium text-sm">Window Cleaning</Link>
            <span className="text-border">•</span>
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
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ReviewCard from '../components/shared/ReviewCard';
import CTASection from '../components/shared/CTASection';
import SEO from '../components/shared/SEO';

const ALL_REVIEWS = [
  { name: 'Sarah M.', date: 'February 2026', text: 'Soakd did an incredible job on our windows. They were fast, professional, and our windows have never looked better. Highly recommend to anyone in Mount Pleasant!' },
  { name: 'James R.', date: 'January 2026', text: 'Called Soakd for pressure washing our driveway and patio. The difference is night and day. They showed up on time and the results speak for themselves. Great local company.' },
  { name: 'Lisa T.', date: 'December 2025', text: 'We\'ve tried other cleaning companies in Charleston but Soakd is by far the best. Their Clean Window Guarantee is legit — they came back and touched up one spot no questions asked.' },
  { name: 'Michael P.', date: 'November 2025', text: 'Had our gutters cleaned before hurricane season. The team was thorough, professional, and left everything spotless. We\'ll definitely be using Soakd again. Best service in Summerville!' },
  { name: 'Amanda W.', date: 'October 2025', text: 'The soft washing they did on our house was amazing. All the algae and mildew is gone, and it looks like we just painted the house. Incredible results on our Daniel Island home.' },
  { name: 'Robert K.', date: 'September 2025', text: 'Fast response, fair pricing, and excellent work. What more could you ask for? Our windows on James Island sparkle like never before.' },
  { name: 'Jennifer H.', date: 'August 2025', text: 'We had Soakd clean our windows and pressure wash the pool deck. Both came out perfect. They were done in half the time I expected and the quality was outstanding.' },
  { name: 'David L.', date: 'July 2025', text: 'Called on a Monday morning and they were at our Goose Creek home by Wednesday. The window cleaning was flawless. Our home feels brighter inside now. Thank you Soakd!' },
  { name: 'Karen S.', date: 'June 2025', text: 'Finally found a company that does what they say they\'ll do. Soakd pressure washed our entire driveway and walkway in Isle of Palms. It looks brand new. Five stars all the way.' },
  { name: 'Chris B.', date: 'May 2025', text: 'The crew was friendly, professional, and incredibly efficient. They soft washed our home in Folly Beach and it looks fantastic. Best cleaning company in the Lowcountry!' },
  { name: 'Patricia N.', date: 'April 2025', text: 'Our Sullivans Island cottage needed a deep clean. Soakd handled everything — windows, gutters, and soft washing. The results exceeded every expectation. Highly recommend!' },
  { name: 'Thomas G.', date: 'March 2025', text: 'Quick to schedule, on time, and delivered amazing results on our Seabrook Island home. Our windows are crystal clear and the whole exterior looks refreshed. Will use again!' },
];

export default function Reviews() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">Testimonials</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            70+ Five-Star Reviews
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Don't just take our word for it. See what homeowners across Charleston, Summerville, Mount Pleasant, and the entire Lowcountry have to say about Soakd Window Cleaning.
          </p>
          {/* Google Review badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map((s) => (
                <Star key={s} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-white font-semibold">5.0 on Google</span>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-secondary/80">
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_REVIEWS.map((r) => (
              <ReviewCard key={r.name} {...r} />
            ))}
          </div>

          {/* Leave a review */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 border shadow-sm max-w-lg mx-auto">
              <h3 className="text-xl font-bold text-foreground mb-2">Love Our Work?</h3>
              <p className="text-muted-foreground text-sm mb-6">
                We'd love to hear from you! Leave us a review on Google and help other Charleston homeowners find trusted cleaning services.
              </p>
              <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                <Button className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8">
                  Leave a Google Review
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-6">Learn More</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/about" className="text-secondary hover:underline font-medium text-sm">About Us</Link>
            <span className="text-border">•</span>
            <Link to="/window-cleaning" className="text-secondary hover:underline font-medium text-sm">Window Cleaning</Link>
            <span className="text-border">•</span>
            <Link to="/pressure-washing" className="text-secondary hover:underline font-medium text-sm">Pressure Washing</Link>
            <span className="text-border">•</span>
            <Link to="/contact" className="text-secondary hover:underline font-medium text-sm">Get a Quote</Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
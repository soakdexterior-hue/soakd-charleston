import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Sparkles, Clock, Star, Award, MapPin, Zap, ShieldCheck } from 'lucide-react';
import { Button } from "@/components/ui/button";
import TrustBar from '../components/shared/TrustBar';
import ServiceCard from '../components/shared/ServiceCard';
import ReviewCard from '../components/shared/ReviewCard';
import CTASection from '../components/shared/CTASection';
import SEO from '../components/shared/SEO';

const HOME_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Soakd Window Cleaning",
  "image": "https://soakdcharleston.com/logo.png",
  "telephone": "843-826-6708",
  "email": "info@soakdcharleston.com",
  "url": "https://soakdcharleston.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Charleston",
    "addressRegion": "SC",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 32.7765,
    "longitude": -79.9311
  },
  "areaServed": [
    "Charleston SC","Summerville SC","Mount Pleasant SC","Goose Creek SC",
    "James Island SC","Daniel Island SC","Johns Island SC","Seabrook Island SC",
    "Isle of Palms SC","Folly Beach SC","Sullivans Island SC"
  ],
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "70"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    "opens": "07:00",
    "closes": "18:00"
  }
};

const SERVICES = [
  {
    icon: Sparkles,
    title: 'Window Cleaning',
    description: 'Your windows are the eyes of your home. We clean every pane inside and out, removing hard water stains, salt deposits, and pollen buildup. Backed by our Clean Window Guarantee.',
    path: '/window-cleaning',
    image: 'https://media.base44.com/images/public/69bdabf65e992908c9993001/0dae65802_windowcleaningpic.jpg',
  },
  {
    icon: Zap,
    title: 'Pressure Washing',
    description: 'Driveways, sidewalks, patios, and pool decks — we blast away years of grime, algae, and staining with professional grade equipment. Your hardscapes will look brand new.',
    path: '/pressure-washing',
    image: 'https://media.base44.com/images/public/69bdabf65e992908c9993001/6bfb982d5_tempImageRL4qIA.jpg',
  },
  {
    icon: ShieldCheck,
    title: 'Soft Washing',
    description: 'Gentle on your home, tough on dirt. Our soft washing service safely removes algae, mildew, and organic staining from your siding, roof, and delicate surfaces without damage.',
    path: '/soft-washing',
    image: 'https://media.base44.com/images/public/69bdabf65e992908c9993001/ae57edefc_generated_17952509.png',
  },
  {
    icon: Award,
    title: 'Gutter Cleaning',
    description: 'Clogged gutters cause serious damage to your home\'s foundation and roof. We clear every blockage and flush your gutters clean so water flows freely.',
    path: '/gutter-cleaning',
    image: 'https://media.base44.com/images/public/69bdabf65e992908c9993001/f83ec5140_generated_9c30a3c3.png',
  },
];

const REVIEWS = [
  { name: 'Terry Jarocki', date: 'Google Review', text: 'Very professional, friendly, and thorough. I highly recommend this company. The team is hardworking and honest. My windows have never looked better!' },
  { name: 'Dennis Brooks', date: 'Google Review', text: 'Best results of any outside window cleaning EVER and I have lived here 26 years. Professional, prompt and would never use another company. By the way my home is 3 stories.' },
  { name: 'Ted Skinner', date: 'Google Review', text: 'These guys are amazing and did a great job with my home. My neighbor liked the clean house and driveway so much she also had a great experience. Stop procrastinating and give them a call.' },
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
      <SEO
        title="Window Cleaning & Pressure Washing Charleston SC | Soakd"
        description="Soakd Window Cleaning offers professional window cleaning, pressure washing, soft washing and gutter cleaning across Charleston SC and the Lowcountry. 70+ five-star reviews. Call 843-826-6708!"
        canonical="/"
        schema={HOME_SCHEMA}
      />
      {/* Hero */}
      <section className="relative" style={{minHeight: '95vh'}}>
        {/* Full-bleed split background */}
        <div className="absolute inset-0 flex">
          <div className="w-1/2 h-full">
            <img src="https://media.base44.com/images/public/69bdabf65e992908c9993001/3227f4cb6_Soakdtruck2.png" alt="Soakd truck" className="w-full h-full object-cover" />
          </div>
          <div className="w-1/2 h-full">
            <img src="https://media.base44.com/images/public/69bdabf65e992908c9993001/0aa3f1106_Soakdteamwalking.jpg" alt="Soakd team" className="w-full h-full object-cover object-top" />
          </div>
          {/* Seamless center blend */}
          <div className="absolute inset-0" style={{background: 'linear-gradient(to right, rgba(15,35,75,0.72) 0%, rgba(15,35,75,0.45) 40%, rgba(15,35,75,0.45) 60%, rgba(15,35,75,0.72) 100%)'}} />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to right, transparent 38%, rgba(15,35,75,0.6) 50%, transparent 62%)'}} />
        </div>

        {/* Centered content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24" style={{minHeight: '95vh'}}>
          {/* Rating badge */}
          <a
            href="https://www.google.com/search?q=soakd+exterior#mpd=~16744916890549171315/customers/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium px-5 py-2.5 rounded-full mb-8 hover:bg-white/20 transition-colors"
          >
            <span className="flex gap-0.5">{[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}</span>
            <span>70+ Five-Star Google Reviews</span>
            <ArrowRight className="w-3.5 h-3.5 opacity-70" />
          </a>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-5 max-w-4xl tracking-tight">
            Charleston's Window &amp;<br className="hidden md:block" /> Exterior Cleaning Experts
          </h1>
          <div className="w-16 h-1 bg-secondary rounded-full mb-6" />
          <p className="text-lg md:text-xl text-white/80 max-w-lg mb-10 leading-relaxed">
            Professional window cleaning, pressure washing &amp; soft washing across the Lowcountry. Guaranteed results. 1-hour response.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:843-826-6708">
              <Button size="lg" className="bg-white text-primary hover:bg-white/95 font-bold px-10 py-6 text-base rounded-xl shadow-lg w-full sm:w-auto">
                <Phone className="w-5 h-5 mr-2" />
                Call 843-826-6708
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold px-10 py-6 text-base rounded-xl shadow-lg w-full sm:w-auto">
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Scroll hint */}
          <p className="text-white/40 text-sm mt-14 tracking-widest uppercase">Scroll to explore</p>
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
              From sparkling clean windows to a spotless driveway, Soakd handles it all. We use the right technique for every surface — protecting your home while delivering results that wow your neighbors.
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

      {/* Photo Strip */}
      <section className="py-0 bg-foreground">
        <div className="grid grid-cols-3 h-64">
          <div className="overflow-hidden">
            <img src="https://media.base44.com/images/public/69bdabf65e992908c9993001/3220ac9d9_soappic.jpg" alt="Window cleaning soap application" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="overflow-hidden">
            <img src="https://media.base44.com/images/public/69bdabf65e992908c9993001/f7b8d6e92_glidingglasspic.jpg" alt="Professional glass cleaning" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="overflow-hidden">
            <img src="https://media.base44.com/images/public/69bdabf65e992908c9993001/0dae65802_windowcleaningpic.jpg" alt="Window cleaning close up" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-secondary font-semibold text-sm tracking-widest uppercase">Results</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">See the Difference</h2>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src="https://media.base44.com/images/public/69bdabf65e992908c9993001/3332bdd29_Beforeandafter.jpg" alt="Before and after window cleaning results by Soakd" className="w-full" />
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
          <div className="text-center mt-10 space-y-4">
            <a href="https://www.google.com/search?q=soakd+exterior#mpd=~16744916890549171315/customers/reviews" target="_blank" rel="noopener noreferrer" className="block text-secondary font-semibold hover:underline">
              70+ Five Star Reviews from Lowcountry Homeowners →
            </a>
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">Proudly Serving the Lowcountry</h2>
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

      {/* Clean Window Guarantee */}
      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/20 mb-6">
            <ShieldCheck className="w-8 h-8 text-secondary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Clean Window Guarantee</h2>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
            Not happy with your results? We come back and make it right — no questions asked. That's the Soakd promise to every single customer in the Lowcountry.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection />
    </>
  );
}
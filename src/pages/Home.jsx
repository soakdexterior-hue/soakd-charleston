import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Star, ShieldCheck, MapPin, CheckCircle, Sparkles, Zap, Award, Building2, CalendarCheck, Users, ThumbsUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import SEO from '../components/shared/SEO';

const HOME_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Soakd Window Cleaning",
  "telephone": "843-826-6708",
  "url": "https://soakdcharleston.com",
  "address": { "@type": "PostalAddress", "addressLocality": "Charleston", "addressRegion": "SC", "addressCountry": "US" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "70" }
};

const TRUCK_IMG     = "https://media.base44.com/images/public/69bdabf65e992908c9993001/3227f4cb6_Soakdtruck2.png";
const TEAM_IMG      = "https://media.base44.com/images/public/69bdabf65e992908c9993001/0aa3f1106_Soakdteamwalking.jpg";
const WATERFED_IMG  = "https://media.base44.com/images/public/69bdabf65e992908c9993001/5c61a750a_waterfedpolepic.jpg";
const SOAP_IMG      = "https://media.base44.com/images/public/69bdabf65e992908c9993001/91ca4afcd_soappic.jpg";

const SERVICES = [
  { icon: Sparkles,    label: 'Window Cleaning',  desc: 'Interior & exterior, screens, tracks and sills included.',         path: '/window-cleaning' },
  { icon: Zap,         label: 'Pressure Washing', desc: 'Driveways, fences, siding — blast away grime instantly.',           path: '/pressure-washing' },
  { icon: ShieldCheck, label: 'Soft Washing',     desc: 'Safe low-pressure cleaning for roofs & stucco.',                    path: '/soft-washing' },
  { icon: Award,       label: 'Gutter Cleaning',  desc: 'Clear clogs and protect your home from water damage.',              path: '/gutter-cleaning' },
  { icon: Building2,   label: 'Commercial',       desc: 'Storefronts, offices & maintenance contracts.',                     path: '/contact' },
  { icon: Sparkles,    label: 'Move-In / Out',    desc: 'Full exterior clean for real estate and staging.',                  path: '/contact' },
];

const HOW_IT_WORKS = [
  { step: '1', icon: Phone,         title: 'Get a Free Quote', desc: 'Call or fill out our form. Upfront pricing, no surprises.' },
  { step: '2', icon: CalendarCheck, title: 'Pick Your Date',   desc: 'Flexible scheduling including weekends.' },
  { step: '3', icon: Users,         title: 'We Show Up',       desc: 'On time, insured team. No shortcuts, ever.' },
  { step: '4', icon: ThumbsUp,      title: 'Love It or Free',  desc: '100% satisfaction — we make it right, guaranteed.' },
];

const WHY_US = [
  { title: 'Fully Insured & Licensed', desc: 'Every job is fully covered. Your home is protected.' },
  { title: '70+ Five-Star Reviews',    desc: 'Real Charleston homeowners. Real results.' },
  { title: 'Transparent Pricing',      desc: 'No hidden fees. You know the price before we arrive.' },
  { title: 'Locally Owned',            desc: 'Your neighbors — not a franchise. We care about this community.' },
];

const REVIEWS = [
  { name: 'Terry Jarocki',   location: 'Charleston',     text: 'Very professional, friendly, and thorough. I highly recommend this company. My windows have never looked better!' },
  { name: 'Dennis Brooks',   location: 'James Island',   text: 'Best results of any outside window cleaning EVER and I have lived here 26 years. Professional, prompt and would never use another company.' },
  { name: 'Ted Skinner',     location: 'West Ashley',    text: 'These guys are amazing. My neighbor liked the clean house so much she also had a great experience. Stop procrastinating and give them a call.' },
];

// Staggered reveal hook
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function StaggerGrid({ children, className }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, i) => (
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(28px)',
            transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SEO
        title="Window Cleaning & Pressure Washing Charleston SC | Soakd"
        description="Soakd Window Cleaning offers professional window cleaning, pressure washing, soft washing and gutter cleaning across Charleston SC. 70+ five-star reviews. Call 843-826-6708!"
        canonical="/"
        schema={HOME_SCHEMA}
      />

      {/* ── HERO ── */}
      <section className="relative bg-[#0f1e3d] overflow-hidden" style={{ minHeight: '100vh' }}>
        {/* Background photo — team walking */}
        <div className="absolute inset-0">
          <img src={TEAM_IMG} alt="Soakd team" className="w-full h-full object-cover object-top" style={{ opacity: 0.70 }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(15,30,61,0.35) 0%, rgba(15,30,61,0.75) 70%, rgba(15,30,61,1) 100%)' }} />
        </div>



        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-blue-400 rounded-full" />
              Serving Charleston &amp; Surrounding Areas
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-[1.05] mb-4">
              Spotless<br />Windows.<br /><span className="text-blue-400">Every Time.</span>
            </h1>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-md">
              Professional window cleaning, pressure washing &amp; soft washing for homes and businesses. Fast, reliable, guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link to="/contact">
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-300 text-[#0f1e3d] font-bold px-8 py-6 text-base rounded-xl w-full sm:w-auto">
                  <Phone className="w-5 h-5 mr-2" />
                  Get a Free Quote
                </Button>
              </Link>
              <a href="tel:843-826-6708">
                <Button size="lg" className="bg-transparent hover:bg-white/15 text-white font-bold px-8 py-6 text-base rounded-xl w-full sm:w-auto border-2 border-white/70">
                  Call Now
                </Button>
              </a>
            </div>
            {/* Stats */}
            <div className="flex gap-8">
              {[['70+','5-Star Reviews'],['500+','Happy Customers'],['100%','Guaranteed']].map(([num, label]) => (
                <div key={label}>
                  <div className="text-3xl font-extrabold text-white">{num}</div>
                  <div className="text-white/50 text-xs mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — services quick-list */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            <p className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-1">Our Services</p>
            <p className="text-white/40 text-xs mb-5">Residential &amp; Commercial</p>
            <div className="space-y-3">
              {[
                { name: 'Window Cleaning',  sub: 'Interior & exterior, streak-free',  badge: 'Most Popular', badgeClass: 'bg-yellow-400 text-[#0f1e3d]' },
                { name: 'Pressure Washing', sub: 'Driveways, decks & siding',          badge: 'Available',    badgeClass: 'bg-green-500/20 text-green-300 border border-green-500/40' },
                { name: 'Soft Washing',     sub: 'Roofs & delicate surfaces',          badge: 'Available',    badgeClass: 'bg-green-500/20 text-green-300 border border-green-500/40' },
                { name: 'Gutter Cleaning',  sub: 'Full flush & inspection',            badge: 'Available',    badgeClass: 'bg-green-500/20 text-green-300 border border-green-500/40' },
                { name: 'Commercial',       sub: 'Storefronts & offices',              badge: 'Commercial',   badgeClass: 'bg-blue-500/20 text-blue-300 border border-blue-500/40' },
              ].map(s => (
                <Link to="/contact" key={s.name} className="flex items-center justify-between bg-white/5 hover:bg-white/15 border border-white/15 rounded-xl px-4 py-3 transition-colors">
                  <div>
                    <p className="text-white font-semibold text-sm">{s.name}</p>
                    <p className="text-white/45 text-xs">{s.sub}</p>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${s.badgeClass}`}>{s.badge}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ROTATING REVIEWS TICKER ── */}
      <section className="bg-[#0c1830] py-6 border-t border-white/10 overflow-hidden">
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10" style={{ background: 'linear-gradient(to right, #0c1830, transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10" style={{ background: 'linear-gradient(to left, #0c1830, transparent)' }} />
          <div className="flex gap-6 w-max" style={{ animation: 'ticker 40s linear infinite' }}>
            {[...REVIEWS, ...REVIEWS, ...REVIEWS, ...REVIEWS].map((r, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-3 shrink-0">
                <div className="flex gap-0.5">{[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}</div>
                <p className="text-white/70 text-sm shrink-0 max-w-xs" style={{ maxWidth: '280px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>"{r.text}"</p>
                <p className="text-white/40 text-xs shrink-0">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
      </section>

      {/* ── PHOTO STRIP ── */}
      <section className="bg-[#0a1628] relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10" style={{ background: 'linear-gradient(to right, #0a1628, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10" style={{ background: 'linear-gradient(to left, #0a1628, transparent)' }} />
        <div className="grid grid-cols-3">
          <div className="h-64 md:h-80 overflow-hidden">
            <img src={TRUCK_IMG} alt="Soakd truck" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="h-64 md:h-80 overflow-hidden">
            <img src={WATERFED_IMG} alt="Water fed pole cleaning" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="h-64 md:h-80 overflow-hidden">
            <img src={SOAP_IMG} alt="Window soap cleaning" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </section>

      {/* ── EVERYTHING WE DO ── */}
      <section className="bg-[#0f1e3d] py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-2">Everything We Do</p>
          <h2 className="text-3xl font-extrabold text-white mb-10">Our Services</h2>
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {SERVICES.map(s => (
              <Link to={s.path} key={s.label} className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition-all group block">
                <s.icon className="w-6 h-6 text-blue-400 mb-4" />
                <h3 className="text-white font-bold text-base mb-1">{s.label}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-[#0c1830] py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-2">How It Works</p>
          <h2 className="text-3xl font-extrabold text-white mb-10">Simple & Easy Process</h2>
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {HOW_IT_WORKS.map(s => (
              <div key={s.title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white font-extrabold text-sm mb-4">{s.step}</div>
                <h3 className="text-white font-bold text-base mb-2">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── PHOTO + WHY US split ── */}
      <section className="bg-[#0f1e3d] border-t border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="h-72 md:h-auto overflow-hidden">
            <img src={TRUCK_IMG} alt="Soakd truck on site" className="w-full h-full object-cover" />
          </div>
          <div className="py-16 px-8 md:px-12">
            <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-2">Why Choose Soakd</p>
            <h2 className="text-3xl font-extrabold text-white mb-8">Charleston's Most Trusted Exterior Cleaners</h2>
            <div className="space-y-5">
              {WHY_US.map(w => (
                <div key={w.title} className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm mb-0.5">{w.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT CUSTOMERS SAY ── */}
      <section className="bg-[#0c1830] py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-2">What Customers Say</p>
          <h2 className="text-3xl font-extrabold text-white mb-10">Real Reviews from Real Neighbors</h2>
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {REVIEWS.map(r => (
              <div key={r.name} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex gap-0.5 mb-4">{[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}</div>
                <p className="text-white/75 text-sm leading-relaxed mb-4">"{r.text}"</p>
                <p className="text-white/40 text-xs">— {r.name}, {r.location}</p>
              </div>
            ))}
          </StaggerGrid>
          <div className="text-center mt-8">
            <a
              href="https://www.google.com/search?q=soakd+exterior#mpd=~16744916890549171315/customers/reviews"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-yellow-400 font-semibold text-sm hover:text-yellow-300 transition-colors"
            >
              See all 70+ Google Reviews <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-[#0f1e3d] py-20 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3">Ready for a Cleaner Home?</h2>
          <p className="text-white/50 mb-3">Most jobs booked within 48 hours. Free, no-obligation quotes.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-white/50 text-xs mb-10">
            {['Free Quotes','Fully Insured','Satisfaction Guaranteed','Local Business'].map(t => (
              <span key={t} className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-blue-400" /> {t}</span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:843-826-6708">
              <Button size="lg" className="bg-yellow-400 hover:bg-yellow-300 text-[#0f1e3d] font-bold px-10 py-6 text-base rounded-xl w-full sm:w-auto">
                <Phone className="w-5 h-5 mr-2" />
                843-826-6708
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" className="bg-transparent hover:bg-white/15 text-white font-bold px-10 py-6 text-base rounded-xl w-full sm:w-auto border-2 border-white/70">
                Request Quote Online
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
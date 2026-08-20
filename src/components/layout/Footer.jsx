import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Star, ArrowUpRight } from 'lucide-react';
import { GOOGLE_BUSINESS } from '@/data/business';
import { childrenOf } from '@/data/seo-pages';

const SERVICES = [
  { label: 'Window Cleaning', path: '/window-cleaning' },
  { label: 'Pressure Washing', path: '/pressure-washing' },
  { label: 'Soft Washing', path: '/soft-washing' },
  { label: 'Gutter Cleaning', path: '/gutter-cleaning' },
];

// Counties come from the page registry, so the footer lists exactly the county
// pages that exist and links to each. Adding a county page adds it here.

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img src="https://media.base44.com/images/public/69bdabf65e992908c9993001/e8ae08491_Soakdlogo2.jpg" alt="Soakd Window Cleaning" className="h-16 w-auto object-contain" />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-2">
              Proudly serving the Lowcountry one spotless window at a time 🪟
            </p>
            <p className="text-white/60 text-xs leading-relaxed mb-6">
              soakdcharleston.com
            </p>
            <div className="flex items-center gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Soakd on Facebook" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={GOOGLE_BUSINESS.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Soakd on Google — read our reviews"
                className="inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-white/10 hover:bg-secondary transition-colors text-sm font-semibold"
              >
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                {GOOGLE_BUSINESS.rating.toFixed(1)} on Google
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.path}>
                  <Link to={s.path} className="text-white/70 hover:text-secondary transition-colors text-sm flex items-center gap-1 group">
                    {s.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Service Areas</h3>
            <ul className="space-y-3">
              {childrenOf('/service-areas').map((county) => (
                <li key={county.path}>
                  <Link
                    to={county.path}
                    className="text-white/70 hover:text-secondary transition-colors text-sm flex items-center gap-1 group"
                  >
                    {county.name}, SC
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/service-areas" className="inline-flex items-center gap-1 text-secondary hover:text-secondary/80 text-xs font-semibold mt-3 transition-colors">
              View All Areas <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:843-826-6708" className="flex items-center gap-3 text-white/70 hover:text-secondary transition-colors text-sm">
                  <Phone className="w-4 h-4 shrink-0" />
                  843-826-6708
                </a>
              </li>
              <li>
                <a href="mailto:info@soakdcharleston.com" className="flex items-center gap-3 text-white/70 hover:text-secondary transition-colors text-sm">
                  <Mail className="w-4 h-4 shrink-0" />
                  info@soakdcharleston.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                Charleston, SC &amp; Surrounding Areas
              </li>
              <li>
                <a
                  href={GOOGLE_BUSINESS.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-secondary transition-colors text-sm group"
                >
                  <Star className="w-4 h-4 shrink-0" />
                  Find us on Google
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Google Business Profile map — embedded by CID so it always resolves to
          our own listing. Lazy-loaded: this sits on every page of the site. */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <div className="rounded-xl overflow-hidden border border-white/10">
          <iframe
            title="SoakD on Google Maps"
            src={GOOGLE_BUSINESS.embedUrl}
            className="w-full h-64 sm:h-80 border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © 2026 Soakd Window Cleaning. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-white/50 text-sm">
             <Link to="/services" className="hover:text-white/80 transition-colors">Services</Link>
             <Link to="/service-areas" className="hover:text-white/80 transition-colors">Service Areas</Link>
             <Link to="/about" className="hover:text-white/80 transition-colors">About</Link>
             <Link to="/reviews" className="hover:text-white/80 transition-colors">Reviews</Link>
             <Link to="/faq" className="hover:text-white/80 transition-colors">FAQ</Link>
             <Link to="/contact" className="hover:text-white/80 transition-colors">Contact</Link>
             <Link to="/legal#privacy-policy" className="hover:text-white/80 transition-colors">Privacy Policy</Link>
             <Link to="/legal#terms-of-service" className="hover:text-white/80 transition-colors">Terms of Service</Link>
           </div>
        </div>
      </div>
    </footer>
  );
}
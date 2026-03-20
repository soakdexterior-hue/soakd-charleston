import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown, Droplets } from 'lucide-react';
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  {
    label: 'Services', path: '/services', children: [
      { label: 'Window Cleaning', path: '/window-cleaning' },
      { label: 'Pressure Washing', path: '/pressure-washing' },
      { label: 'Soft Washing', path: '/soft-washing' },
      { label: 'Gutter Cleaning', path: '/gutter-cleaning' },
    ]
  },
  { label: 'About', path: '/about' },
  { label: 'Reviews', path: '/reviews' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="hidden sm:block">Serving Charleston, SC &amp; Surrounding Areas</span>
          <a href="tel:843-826-6708" className="flex items-center gap-2 font-semibold hover:text-secondary transition-colors">
            <Phone className="w-3.5 h-3.5" />
            843-826-6708
          </a>
        </div>
      </div>

      {/* Main header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <div className="leading-tight">
                <span className="text-xl font-bold text-primary tracking-tight">SOAKD</span>
                <span className="block text-[10px] font-medium text-muted-foreground tracking-widest uppercase">Window Cleaning</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <div key={link.label} className="relative group">
                  {link.children ? (
                    <>
                      <button className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1 transition-colors hover:bg-muted ${location.pathname.includes('washing') || location.pathname.includes('cleaning') || location.pathname.includes('gutter') ? 'text-primary' : 'text-foreground'}`}>
                        {link.label}
                        <ChevronDown className="w-3.5 h-3.5" />
                      </button>
                      <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div className="bg-white rounded-xl shadow-xl border p-2 min-w-[200px]">
                          {link.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              className={`block px-4 py-2.5 rounded-lg text-sm transition-colors hover:bg-muted ${location.pathname === child.path ? 'text-primary font-semibold bg-muted' : 'text-foreground'}`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-muted ${location.pathname === link.path ? 'text-primary font-semibold' : 'text-foreground'}`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA */}
            <div className="flex items-center gap-3">
              <Link to="/contact">
                <Button className="hidden sm:flex bg-secondary hover:bg-secondary/90 text-white font-semibold px-6">
                  Get Free Quote
                </Button>
              </Link>
              <a href="tel:843-826-6708" className="lg:hidden">
                <Button size="icon" variant="outline" className="border-primary text-primary">
                  <Phone className="w-4 h-4" />
                </Button>
              </a>
              <button
                className="lg:hidden p-2"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t shadow-xl">
            <nav className="px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  {link.children ? (
                    <>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium hover:bg-muted"
                      >
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {servicesOpen && (
                        <div className="pl-4 space-y-1">
                          {link.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className="block px-4 py-3 rounded-lg text-sm font-medium hover:bg-muted"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t">
                <Link to="/contact">
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold">
                    Get Free Quote
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
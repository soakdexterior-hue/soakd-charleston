import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { base44 } from '@/api/base44Client';

const STORAGE_KEY = 'soakd_popup_dismissed';

export default function QuotePopup() {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', service: '', address: '' });

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
    setVisible(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await base44.functions.invoke('handleContactForm', { ...form, email: '', message: '' });
    setLoading(false);
    setSubmitted(true);
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
    setTimeout(() => setVisible(false), 3000);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div
        className="relative w-full max-w-md rounded-2xl shadow-2xl overflow-hidden"
        style={{ backgroundColor: '#1B3A6B' }}
      >
        {/* Close button */}
        <button
          onClick={dismiss}
          className="absolute top-3 right-3 text-white/60 hover:text-white transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-4">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-white mb-2">Request Received!</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Thanks! We'll be calling or texting you within 10 minutes.
              </p>
              <p className="text-white/60 text-xs mt-3">Call us anytime: 843-826-6708</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-5">
                <h2 className="text-2xl font-bold text-white mb-2">Get Your FREE Quote Today!</h2>
                <p className="text-white/80 text-sm">
                  Serving all of Charleston &amp; the Lowcountry
                </p>
                <p className="text-yellow-400 text-sm mt-1">⭐⭐⭐⭐⭐ 70 Five-Star Reviews</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name *"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50 text-sm"
                />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50 text-sm"
                />
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/50 text-sm"
                  style={{ backgroundColor: '#1B3A6B' }}
                >
                  <option value="" disabled>Service Needed *</option>
                  <option value="window-cleaning">Window Cleaning</option>
                  <option value="pressure-washing">Pressure Washing</option>
                  <option value="soft-washing">Soft Washing</option>
                  <option value="gutter-cleaning">Gutter Cleaning</option>
                </select>
                <input
                  type="text"
                  placeholder="Property Address *"
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  required
                  className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50 text-sm"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-lg font-bold text-white text-sm transition-opacity hover:opacity-90 disabled:opacity-60 flex items-center justify-center gap-2"
                  style={{ backgroundColor: '#4BA3E3' }}
                >
                  {loading ? 'Sending...' : 'Get My Free Quote →'}
                </button>
              </form>

              <p className="text-center text-white/40 text-xs mt-4">
                No spam. We'll only contact you about your quote.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { BUSINESS } from '@/data/business';

const SERVICES = [
  { value: 'window-cleaning', label: 'Window Cleaning' },
  { value: 'pressure-washing', label: 'Pressure Washing' },
  { value: 'soft-washing', label: 'Soft Washing' },
  { value: 'gutter-cleaning', label: 'Gutter Cleaning' },
  { value: 'multiple', label: 'Multiple Services' },
];

const FIELD_CLASS =
  'w-full px-4 py-2.5 rounded-lg bg-white border border-input text-foreground ' +
  'placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary text-sm';

/**
 * Compact quote form for the SEO hero card. Posts to the same Base44
 * `handleContactForm` function as the Contact page and the QuotePopup.
 *
 * Failures surface to the visitor rather than silently showing a success state —
 * a lead that never arrived must never be reported as sent.
 */
export default function QuoteForm({ preselectedService = '' }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: preselectedService,
    address: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await base44.functions.invoke('handleContactForm', {
        ...form,
        email: '',
        message: '',
      });
      setStatus('sent');
    } catch (err) {
      console.error('Quote form submission failed:', err);
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="text-center py-6">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-lg font-bold text-foreground mb-2">Request Received!</h3>
        <p className="text-muted-foreground text-sm">
          We&apos;ll call or text you within 10 minutes.
        </p>
        <p className="text-muted-foreground text-xs mt-3">
          Need us sooner? Call {BUSINESS.phone}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        placeholder="Your Name *"
        value={form.name}
        onChange={set('name')}
        required
        className={FIELD_CLASS}
      />
      <input
        type="tel"
        placeholder="Phone Number *"
        value={form.phone}
        onChange={set('phone')}
        required
        className={FIELD_CLASS}
      />
      <select value={form.service} onChange={set('service')} required className={FIELD_CLASS}>
        <option value="" disabled>
          Service Needed *
        </option>
        {SERVICES.map((s) => (
          <option key={s.value} value={s.value}>
            {s.label}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Property Address"
        value={form.address}
        onChange={set('address')}
        className={FIELD_CLASS}
      />

      {status === 'error' && (
        <p className="text-destructive text-xs leading-relaxed" role="alert">
          Something went wrong sending your request. Please try again, or call us
          directly at{' '}
          <a href={BUSINESS.phoneHref} className="font-semibold underline">
            {BUSINESS.phone}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full py-3 rounded-lg font-bold text-white text-sm bg-secondary hover:bg-secondary/90 disabled:opacity-60 transition-colors"
      >
        {status === 'sending' ? 'Sending…' : 'Get My Free Quote →'}
      </button>

      <a
        href={BUSINESS.phoneHref}
        className="flex items-center justify-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors pt-1"
      >
        <Phone className="w-4 h-4" /> Or call {BUSINESS.phone}
      </a>

      <p className="text-center text-muted-foreground text-xs">
        No spam. We&apos;ll only contact you about your quote.
      </p>
    </form>
  );
}

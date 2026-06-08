import React, { useState } from 'react';
import { Phone, Globe, CheckCircle, ChevronDown } from 'lucide-react';

const BRAND = '#1a4f7a';
const BRAND_LIGHT = '#e8f4fd';

export default function Legal() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', consent: false });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Header */}
      <header style={{ backgroundColor: BRAND }} className="py-6 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Soak'd Exteriors</h1>
          <p className="text-blue-200 text-sm mt-1">Professional Exterior Cleaning · Charleston, SC</p>
          <div className="flex justify-center gap-6 mt-4 text-sm text-blue-200">
            <a href="https://soakdcharleston.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
              <Globe className="w-4 h-4" /> soakdcharleston.com
            </a>
            <a href="tel:8438266708" className="flex items-center gap-1 hover:text-white transition-colors">
              <Phone className="w-4 h-4" /> 843-826-6708
            </a>
          </div>
        </div>
      </header>

      {/* Nav anchors */}
      <nav className="sticky top-0 z-20 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 flex gap-2 overflow-x-auto py-3">
          {[
            { label: 'Privacy Policy', href: '#privacy-policy' },
            { label: 'Terms of Service', href: '#terms-of-service' },
            { label: 'Contact / Opt-In', href: '#contact' },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold border-2 hover:bg-blue-50 transition-colors"
              style={{ borderColor: BRAND, color: BRAND }}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-16">

        {/* PRIVACY POLICY */}
        <section id="privacy-policy" className="scroll-mt-20">
          <div className="rounded-2xl border border-blue-100 overflow-hidden">
            <div className="px-8 py-5" style={{ backgroundColor: BRAND }}>
              <h2 className="text-2xl font-bold text-white">Privacy Policy</h2>
              <p className="text-blue-200 text-sm mt-1">Effective Date: June 2025</p>
            </div>
            <div className="px-8 py-8 space-y-6 text-gray-700 leading-relaxed" style={{ backgroundColor: BRAND_LIGHT }}>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">1. Information We Collect</h3>
                <p>Soak'd Exteriors collects the following personal information when you contact us or submit a form on our website:</p>
                <ul className="mt-2 space-y-1 ml-4 list-disc text-sm">
                  <li>Full name</li>
                  <li>Phone number</li>
                  <li>Email address</li>
                  <li>Service inquiry details</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">2. How We Use Your Information</h3>
                <p>We use your contact information solely to communicate with you about your service requests and our offerings, including:</p>
                <ul className="mt-2 space-y-1 ml-4 list-disc text-sm">
                  <li>Appointment confirmations and scheduling</li>
                  <li>Service reminders</li>
                  <li>Promotional offers and announcements via SMS and email</li>
                  <li>Follow-up and customer support communications</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">3. SMS and Email Marketing</h3>
                <p>By submitting your contact information through our website or opt-in form, you consent to receive text messages (SMS) and emails from Soak'd Exteriors. Message and data rates may apply. You may opt out of SMS communications at any time by replying <strong>STOP</strong> to any text message. You may unsubscribe from email communications at any time by clicking the unsubscribe link in any email.</p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">4. Data Sharing</h3>
                <p className="font-semibold text-gray-900">We do not sell, rent, or share your personal information with third parties for their own marketing purposes.</p>
                <p className="mt-2 text-sm">We may share your information with trusted service providers who assist us in operating our business (e.g., scheduling or CRM platforms) under strict confidentiality agreements.</p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">5. Data Security</h3>
                <p>We take reasonable precautions to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet is 100% secure.</p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">6. Contact</h3>
                <p>If you have questions about this Privacy Policy, please contact us at <a href="tel:8438266708" className="font-semibold underline" style={{ color: BRAND }}>843-826-6708</a> or visit <a href="https://soakdcharleston.com" className="font-semibold underline" style={{ color: BRAND }}>soakdcharleston.com</a>.</p>
              </div>

            </div>
          </div>
        </section>

        {/* TERMS OF SERVICE */}
        <section id="terms-of-service" className="scroll-mt-20">
          <div className="rounded-2xl border border-blue-100 overflow-hidden">
            <div className="px-8 py-5" style={{ backgroundColor: BRAND }}>
              <h2 className="text-2xl font-bold text-white">Terms of Service</h2>
              <p className="text-blue-200 text-sm mt-1">Effective Date: June 2025</p>
            </div>
            <div className="px-8 py-8 space-y-6 text-gray-700 leading-relaxed" style={{ backgroundColor: BRAND_LIGHT }}>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">1. Services</h3>
                <p>Soak'd Exteriors provides professional exterior cleaning services in Charleston, SC and surrounding areas, including but not limited to window cleaning, pressure washing, soft washing, roof cleaning, and gutter cleaning. All services are subject to availability and scheduling.</p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">2. Quotes and Pricing</h3>
                <p>All quotes provided are estimates based on information supplied by the customer. Final pricing may vary if conditions on-site differ from what was described. Any changes to the quoted price will be communicated before work begins. Prices are subject to change without notice for new bookings.</p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">3. Payment</h3>
                <p>Payment is due upon completion of services unless otherwise agreed in writing. Accepted payment methods include cash, check, and major credit/debit cards. Invoices not paid within 14 days of service may be subject to a late fee.</p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">4. Cancellations and Rescheduling</h3>
                <p>We understand that plans change. We ask that you provide at least <strong>24 hours' notice</strong> if you need to cancel or reschedule your appointment. Cancellations made with less than 24 hours' notice may be subject to a cancellation fee. No-shows without prior notice may be charged a service fee.</p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">5. Customer Responsibilities</h3>
                <p>Customers are responsible for ensuring safe and reasonable access to the areas to be serviced, including clearing vehicles, furniture, or obstacles as necessary. Soak'd Exteriors is not responsible for pre-existing damage to surfaces, structures, or materials.</p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">6. Satisfaction Guarantee</h3>
                <p>We stand behind the quality of our work. If you are not satisfied with the results, please contact us within <strong>48 hours</strong> of service completion and we will return to address the concern at no additional charge.</p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">7. SMS and Text Message Consent</h3>
                <p>By submitting your contact information through our website, contact form, or any other intake method, you expressly consent to receive text messages (SMS) and phone calls from Soak'd Exteriors for informational, scheduling, and promotional purposes. You may opt out at any time by replying <strong>STOP</strong> to any SMS message or by contacting us directly. Message and data rates may apply.</p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">8. Limitation of Liability</h3>
                <p>Soak'd Exteriors shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability to any customer shall not exceed the amount paid for the specific service in question.</p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">9. Governing Law</h3>
                <p>These Terms of Service are governed by the laws of the State of South Carolina. Any disputes arising from these terms shall be subject to the jurisdiction of the courts of Charleston County, SC.</p>
              </div>

            </div>
          </div>
        </section>

        {/* CONTACT / OPT-IN FORM */}
        <section id="contact" className="scroll-mt-20">
          <div className="rounded-2xl border border-blue-100 overflow-hidden">
            <div className="px-8 py-5" style={{ backgroundColor: BRAND }}>
              <h2 className="text-2xl font-bold text-white">Contact Us / Request a Quote</h2>
              <p className="text-blue-200 text-sm mt-1">We'll get back to you within 1 hour</p>
            </div>
            <div className="px-8 py-8" style={{ backgroundColor: BRAND_LIGHT }}>
              {submitted ? (
                <div className="text-center py-10">
                  <CheckCircle className="w-16 h-16 mx-auto mb-4" style={{ color: BRAND }} />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">We've received your request and will be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 max-w-xl">

                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-1">Full Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      required
                      placeholder="John Smith"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-1">Phone Number <span className="text-red-500">*</span></label>
                    <input
                      type="tel"
                      required
                      placeholder="(843) 000-0000"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-1">Email Address <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-1">Service Interested In <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <select
                        required
                        value={form.service}
                        onChange={e => setForm({ ...form, service: e.target.value })}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none bg-white appearance-none"
                      >
                        <option value="">Select a service...</option>
                        <option value="window-cleaning">Window Cleaning</option>
                        <option value="pressure-washing">Pressure Washing</option>
                        <option value="soft-washing">Soft Washing</option>
                        <option value="roof-cleaning">Roof Cleaning</option>
                        <option value="gutter-cleaning">Gutter Cleaning</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div className="bg-white border border-blue-200 rounded-lg p-4">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={form.consent}
                        onChange={e => setForm({ ...form, consent: e.target.checked })}
                        className="mt-0.5 w-4 h-4 shrink-0 accent-blue-700"
                      />
                      <span className="text-sm text-gray-700 leading-relaxed">
                        By submitting this form, you authorize <strong>Soak'd Exteriors</strong> to contact you via text message or phone call for informational and promotional purposes. Message and data rates may apply. Reply <strong>STOP</strong> to opt out at any time.
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl font-bold text-white text-base transition-opacity hover:opacity-90"
                    style={{ backgroundColor: BRAND }}
                  >
                    Submit Request
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting, you agree to our{' '}
                    <a href="#privacy-policy" className="underline" style={{ color: BRAND }}>Privacy Policy</a>
                    {' '}and{' '}
                    <a href="#terms-of-service" className="underline" style={{ color: BRAND }}>Terms of Service</a>.
                  </p>

                </form>
              )}
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-gray-200 py-8 text-center text-sm text-gray-500" style={{ backgroundColor: BRAND_LIGHT }}>
        <p className="font-semibold text-gray-700 mb-1">Soak'd Exteriors · Charleston, SC</p>
        <div className="flex justify-center gap-6 mt-2">
          <a href="https://soakdcharleston.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline" style={{ color: BRAND }}>
            <Globe className="w-4 h-4" /> soakdcharleston.com
          </a>
          <a href="tel:8438266708" className="flex items-center gap-1 hover:underline" style={{ color: BRAND }}>
            <Phone className="w-4 h-4" /> 843-826-6708
          </a>
        </div>
        <p className="mt-3 text-xs text-gray-400">© 2025 Soak'd Exteriors. All rights reserved.</p>
      </footer>

    </div>
  );
}
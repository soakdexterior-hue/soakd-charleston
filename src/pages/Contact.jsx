import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import SEO from '../components/shared/SEO';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', phone: '', email: '', service: '', address: '', message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Free Quote | Soakd Window Cleaning Charleston SC"
        description="Request a free quote for window cleaning, pressure washing, soft washing or gutter cleaning in Charleston SC. We respond within 1 hour. Call 843-826-6708."
        canonical="/contact"
      />
      {/* Hero */}
      <section className="bg-primary py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">Contact Us</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Get Your Free Quote Today
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Ready for crystal clear windows and a spotless home exterior? Fill out the form below or give us a call. We respond within 1 hour!
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-white rounded-2xl border shadow-sm p-12 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Quote Request Sent!</h2>
                  <p className="text-muted-foreground mb-2">
                    Thank you for reaching out. We'll get back to you within 1 hour.
                  </p>
                  <p className="text-muted-foreground text-sm mb-6">
                    Need an answer right now? Give us a call!
                  </p>
                  <a href="tel:843-826-6708">
                    <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8">
                      <Phone className="w-4 h-4 mr-2" /> Call 843-826-6708
                    </Button>
                  </a>
                </div>
              ) : (
                <div className="bg-white rounded-2xl border shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-2">Request a Free Quote</h2>
                  <p className="text-muted-foreground text-sm mb-8">Fill out the form and we'll get back to you within 1 hour.</p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="John Smith"
                          value={form.name}
                          onChange={(e) => setForm({...form, name: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(843) 555-0123"
                          value={form.phone}
                          onChange={(e) => setForm({...form, phone: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={form.email}
                          onChange={(e) => setForm({...form, email: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Needed *</Label>
                        <Select value={form.service} onValueChange={(v) => setForm({...form, service: v})} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="window-cleaning">Window Cleaning</SelectItem>
                            <SelectItem value="pressure-washing">Pressure Washing</SelectItem>
                            <SelectItem value="soft-washing">Soft Washing</SelectItem>
                            <SelectItem value="gutter-cleaning">Gutter Cleaning</SelectItem>
                            <SelectItem value="multiple">Multiple Services</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Property Address</Label>
                      <Input
                        id="address"
                        placeholder="123 Main St, Charleston, SC 29401"
                        value={form.address}
                        onChange={(e) => setForm({...form, address: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project..."
                        value={form.message}
                        onChange={(e) => setForm({...form, message: e.target.value})}
                        className="h-28 resize-none"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold text-base">
                      <Send className="w-5 h-5 mr-2" />
                      Send Quote Request
                    </Button>
                  </form>
                </div>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Click to Call */}
              <div className="bg-primary rounded-2xl p-8 text-white">
                <h3 className="font-bold text-xl mb-2">Prefer to Call?</h3>
                <p className="text-white/70 text-sm mb-6">Talk to a real person right now. We're here to help.</p>
                <a href="tel:843-826-6708">
                  <Button size="lg" className="w-full bg-white text-primary hover:bg-white/90 font-bold text-lg">
                    <Phone className="w-5 h-5 mr-2" />
                    843-826-6708
                  </Button>
                </a>
              </div>

              {/* Response Promise */}
              <div className="bg-white rounded-2xl p-8 border shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">1-Hour Response Time</h3>
                    <p className="text-sm text-muted-foreground">Fastest in the Lowcountry</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We know your time is valuable. That's why we commit to responding to every inquiry within one hour during business hours. No waiting around, no phone tag.
                </p>
              </div>

              {/* Contact Details */}
              <div className="bg-white rounded-2xl p-8 border shadow-sm space-y-5">
                <h3 className="font-bold text-foreground text-lg">Contact Details</h3>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-secondary shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a href="tel:843-826-6708" className="font-semibold text-foreground hover:text-secondary transition-colors">843-826-6708</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-secondary shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:info@soakdcharleston.com" className="font-semibold text-foreground hover:text-secondary transition-colors">info@soakdcharleston.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Service Area</p>
                    <p className="font-semibold text-foreground">Charleston, SC &amp; Surrounding Areas</p>
                  </div>
                </div>
              </div>

              {/* Internal Links */}
              <div className="bg-white rounded-2xl p-8 border shadow-sm">
                <h3 className="font-bold text-foreground text-lg mb-4">Explore Our Services</h3>
                <div className="space-y-2">
                  <Link to="/window-cleaning" className="block text-secondary hover:underline font-medium text-sm">→ Window Cleaning</Link>
                  <Link to="/pressure-washing" className="block text-secondary hover:underline font-medium text-sm">→ Pressure Washing</Link>
                  <Link to="/soft-washing" className="block text-secondary hover:underline font-medium text-sm">→ Soft Washing</Link>
                  <Link to="/gutter-cleaning" className="block text-secondary hover:underline font-medium text-sm">→ Gutter Cleaning</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
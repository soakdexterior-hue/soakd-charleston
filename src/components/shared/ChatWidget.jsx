import React, { useState } from 'react';
import { MessageCircle, X, Phone, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { base44 } from '@/api/base44Client';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await base44.functions.invoke('handleContactForm', { name: form.name, phone: form.phone, message: form.message, email: '', service: '', address: '' });
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setOpen(false);
      setForm({ name: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="mb-4 w-80 bg-white rounded-2xl shadow-2xl border overflow-hidden">
          <div className="bg-primary text-white p-4 flex items-center justify-between">
            <div>
              <p className="font-semibold">Soakd Window Cleaning</p>
              <p className="text-xs text-white/70">We respond within 1 hour</p>
            </div>
            <button onClick={() => setOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>
          {sent ? (
            <div className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Send className="w-5 h-5 text-green-600" />
              </div>
              <p className="font-semibold text-foreground">Message sent!</p>
              <p className="text-sm text-muted-foreground mt-1">We'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-4 space-y-3">
              <Input placeholder="Your name" required className="text-sm" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} />
              <Input type="tel" placeholder="Phone number" required className="text-sm" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} />
              <Textarea placeholder="How can we help?" required className="text-sm h-20 resize-none" value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} />
              <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold">
                Send Message
              </Button>
              <a href="tel:843-826-6708" className="flex items-center justify-center gap-2 text-sm text-primary font-medium hover:underline">
                <Phone className="w-3.5 h-3.5" /> Or call 843-826-6708
              </a>
            </form>
          )}
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-secondary text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
}
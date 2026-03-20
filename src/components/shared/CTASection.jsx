import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function CTASection({
  title = "Ready for Crystal Clear Results?",
  subtitle = "Get Your Free Quote Today",
  description = "Join over 70 satisfied homeowners across the Charleston area. Fast response, guaranteed results.",
}) {
  return (
    <section className="bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{title}</h2>
        <p className="text-xl md:text-2xl font-semibold text-secondary mb-4">{subtitle}</p>
        <p className="text-white/70 max-w-2xl mx-auto mb-8">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:843-826-6708">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 w-full sm:w-auto">
              <Phone className="w-4 h-4 mr-2" />
              Call 843-826-6708
            </Button>
          </a>
          <Link to="/contact">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 w-full sm:w-auto">
              Get Free Quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { Star, Shield, Award, Heart } from 'lucide-react';

const TRUST_ITEMS = [
  { icon: Star, label: '150 Five-Star Reviews', color: 'text-yellow-500' },
  { icon: Shield, label: 'Licensed & Insured', color: 'text-secondary' },
  { icon: Award, label: 'Clean Window Guarantee', color: 'text-secondary' },
  { icon: Heart, label: 'Locally Owned', color: 'text-red-400' },
];

export default function TrustBar() {
  return (
    <section className="bg-white border-y">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_ITEMS.map((item) => (
            <div key={item.label} className="flex items-center gap-3 justify-center">
              <item.icon className={`w-5 h-5 ${item.color} shrink-0`} />
              <span className="text-sm font-semibold text-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
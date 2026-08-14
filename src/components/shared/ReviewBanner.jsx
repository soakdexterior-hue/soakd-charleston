import React from 'react';

const GOOGLE_URL = "https://www.google.com/maps/place/Soakd+Window+Cleaning/@32.7765,-79.9311,15z/data=!4m8!3m7!1s0x0:soakd!8m2!3d32.7765!4d-79.9311!9m1!1b1";

export default function ReviewBanner() {
  return (
    <a
      href={GOOGLE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 bg-primary hover:bg-secondary transition-colors duration-200 px-4 py-2 text-white no-underline w-full"
      style={{ minHeight: '36px' }}
    >
      <span className="text-yellow-400 text-base leading-none">★★★★★</span>
      <span className="text-xs font-semibold tracking-wide">
        170+ Five-Star Reviews — Click to Read What Our Customers Say
      </span>
      <span className="text-secondary group-hover:text-white text-xs font-bold">→</span>
    </a>
  );
}
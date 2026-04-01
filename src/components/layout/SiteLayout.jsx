import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ChatWidget from '../shared/ChatWidget';
import ReviewBanner from '../shared/ReviewBanner';
import QuotePopup from '../shared/QuotePopup';

export default function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ReviewBanner />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ChatWidget />
      <QuotePopup />
    </div>
  );
}
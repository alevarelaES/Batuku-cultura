import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

export const Root = () => {
  return (
    <div className="flex flex-col min-h-screen relative bg-brand-bg text-brand-text w-full" style={{ fontFamily: 'var(--font-body)' }}>
      <ScrollRestoration />
      <Navbar />
      {/* pt compensates for fixed navbar height (4.5rem) + flag strip (~4px) */}
      <main className="flex-grow flex flex-col w-full pt-[5rem]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
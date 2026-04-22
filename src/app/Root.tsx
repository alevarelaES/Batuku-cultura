import React, { Suspense } from 'react';
import { Outlet, ScrollRestoration } from 'react-router';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

const PageFallback = () => (
  <div className="flex-grow flex items-center justify-center min-h-[60vh]">
    <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
  </div>
);

export const Root = () => {
  return (
    <div className="flex flex-col min-h-screen relative bg-brand-bg text-brand-text w-full overflow-x-hidden" style={{ fontFamily: 'var(--font-body)' }}>
      <ScrollRestoration />
      <Navbar />
      {/* pt compensates for fixed navbar height (4.5rem) + flag strip (~4px) */}
      <main className="flex-grow flex flex-col w-full pt-[5rem]">
        <Suspense fallback={<PageFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};
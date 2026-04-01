'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { Globe, Menu, X } from 'lucide-react';
import { FlagStrip } from './FlagStrip';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('Navbar');
  const pathname = usePathname();

  const links = [
    { path: "/", label: t('home') },
    { path: "/about", label: t('about') },
    { path: "/batuku", label: t('batuku') },
    { path: "/culture", label: t('culture') },
    { path: "/events", label: t('events') },
    { path: "/gallery", label: t('gallery') },
    { path: "/contact", label: t('contact') }
  ];

  // Simple locale switcher logic
  const toggleLocale = pathname.includes('/pt') ? 'fr' : 'pt';

  return (
    <nav className="bg-deep relative z-50 overflow-hidden shadow-lg border-b-2 border-white/10">
      <div className="h-24 px-4 md:px-12 flex items-center justify-between relative z-10">
        <Link href="/" className="text-accent text-3xl md:text-4xl font-display uppercase tracking-widest drop-shadow-md">
          BATUKU & CULTURA
        </Link>

        <div className="hidden lg:flex gap-6 xl:gap-8 items-center font-body font-bold text-white text-sm xl:text-base tracking-wide">
          {links.map((link) => (
            <Link 
              key={link.path}
              href={link.path} 
              className={pathname === link.path ? "text-accent border-b-2 border-accent pb-1" : "hover:text-accent hover:-translate-y-0.5 transition-all"}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <Link href={pathname} locale={toggleLocale} className="flex items-center gap-2 border-2 border-accent rounded-full px-4 py-2 text-deep bg-accent font-bold text-sm hover:bg-white hover:border-white transition-all shadow-[0_0_15px_rgba(245,184,0,0.4)]">
            <Globe size={18} />
            {toggleLocale.toUpperCase()}
          </Link>
          
          <button className="lg:hidden text-white hover:text-accent" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
        
        <FlagStrip />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-24 left-0 w-full bg-deep border-t border-white/10 flex flex-col py-4 px-4 shadow-2xl z-40">
          {links.map((link) => (
            <Link 
              key={link.path}
              href={link.path} 
              onClick={() => setIsOpen(false)}
              className={`py-4 px-4 font-body font-bold text-xl border-b border-white/10 ${pathname === link.path ? "text-accent bg-white/5" : "text-white"}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
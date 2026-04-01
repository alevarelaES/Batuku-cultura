import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { FlagStrip } from './FlagStrip';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import type { Lang } from '../translations';

const LANGS: Lang[] = ['fr', 'pt', 'en'];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const links = [
    { path: '/', label: t('Navbar', 'home') },
    { path: '/about', label: t('Navbar', 'about') },
    { path: '/batuku', label: t('Navbar', 'batuku') },
    { path: '/culture', label: t('Navbar', 'culture') },
    { path: '/events', label: t('Navbar', 'events') },
    { path: '/gallery', label: t('Navbar', 'gallery') },
    { path: '/contact', label: t('Navbar', 'contact') },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 shadow-lg overflow-visible bg-primary"
    >
      {/* Subtle instrument pattern overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.07]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="nav-instruments" x="0" y="0" width="120" height="96" patternUnits="userSpaceOnUse">
              {/* Djembe */}
              <g transform="translate(15,8) rotate(-10)" stroke="white" fill="none" strokeWidth="1.2">
                <ellipse cx="10" cy="4" rx="9" ry="3.5"/>
                <path d="M1,4 Q2,18 6,22 Q10,26 14,22 Q18,18 19,4"/>
                <ellipse cx="10" cy="22" rx="5" ry="2"/>
              </g>
              {/* Guitar */}
              <g transform="translate(55,5) rotate(15)" stroke="white" fill="none" strokeWidth="1.2">
                <path d="M8,0 L8,14"/>
                <path d="M3,20 Q0,28 4,33 Q8,36 8,34 Q8,36 12,33 Q16,28 13,20 Q11,14 8,14 Q5,14 3,20"/>
                <circle cx="8" cy="27" r="4"/>
                <rect x="6" y="-8" width="4" height="8" rx="1"/>
              </g>
              {/* Maracas */}
              <g transform="translate(95,10) rotate(-20)" stroke="white" fill="none" strokeWidth="1.2">
                <circle cx="8" cy="8" r="7"/>
                <line x1="8" y1="15" x2="8" y2="30"/>
              </g>
              {/* Keys */}
              <g transform="translate(5,60)" stroke="white" fill="none" strokeWidth="1.2">
                <rect x="0" y="0" width="6" height="18" rx="1"/>
                <rect x="8" y="3" width="6" height="15" rx="1"/>
                <rect x="16" y="6" width="6" height="12" rx="1"/>
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#nav-instruments)"/>
        </svg>
      </div>

      <div className="px-6 md:px-12 2xl:px-20 flex items-center justify-between relative z-10" style={{ height: '4.5rem' }}>
        {/* Logo */}
        <NavLink to="/" className="flex flex-col leading-none shrink-0 group">
          <span
            className="font-display text-accent uppercase tracking-widest drop-shadow group-hover:opacity-90 transition-opacity"
            style={{ fontSize: '2rem' }}
          >
            BATUKU & CULTURA
          </span>
          <span className="flex items-center gap-1.5 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-white/60 inline-block shrink-0" />
            <span className="font-body font-bold text-white/80 text-[9px] tracking-[0.3em] uppercase">
              {t('Navbar', 'capvertSuisse')}
            </span>
            <span className="text-white/40 text-[9px]">·</span>
            <span className="font-body text-white/50 text-[9px] tracking-[0.2em] uppercase">
              {t('Navbar', 'culturesPalop')}
            </span>
          </span>
        </NavLink>

        {/* Desktop nav links */}
        <div className="hidden lg:flex gap-5 xl:gap-7 items-center font-body font-semibold text-white tracking-wide" style={{ fontSize: '0.85rem' }}>
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                isActive
                  ? 'text-white border-b-2 border-white pb-0.5 font-bold'
                  : 'text-white/85 hover:text-white hover:-translate-y-0.5 transition-all'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Right side: language pill + mobile hamburger */}
        <div className="flex items-center gap-4">
          {/* Language pill — "FR | PT | EN" style */}
          <div className="hidden sm:flex items-center border border-white/70 rounded-full px-1 py-1 gap-0.5">
            {LANGS.map((l, idx) => (
              <React.Fragment key={l}>
                <button
                  onClick={() => setLang(l)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                    lang === l
                      ? 'bg-white text-primary font-black'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {l.toUpperCase()}
                </button>
                {idx < LANGS.length - 1 && (
                  <span className="text-white/40 text-xs">|</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white hover:text-white/70 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* 5-color separator strip */}
      <FlagStrip />

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="lg:hidden absolute top-full left-0 w-full border-t border-white/20 flex flex-col py-3 px-4 shadow-2xl z-40 bg-primary"
        >
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `py-3 px-4 font-body font-bold text-lg border-b border-white/10 ${
                  isActive ? 'text-accent' : 'text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          {/* Language selector in mobile */}
          <div className="flex gap-2 pt-4 px-4">
            {LANGS.map((l) => (
              <button
                key={l}
                onClick={() => { setLang(l); setIsOpen(false); }}
                className={`px-4 py-2 rounded-full font-bold text-sm border-2 transition-all ${
                  lang === l
                    ? 'bg-white border-white text-primary'
                    : 'border-white/40 text-white hover:border-white'
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

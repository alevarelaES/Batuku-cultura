import React from 'react';
import { NavLink } from 'react-router';
import { MapPin, Mail, Phone, Instagram, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const CONTACT = {
  email: 'ercelinabatuku11cultura@gmail.com',
  phone1: '079 965 03 54',
  phone1Href: '+41799650354',
  phone2: '079 617 53 87',
  phone2Href: '+41796175387',
  address: "Grand'Rue 36, 1530 Payerne (VD)",
  instagram: '@as.batuku_et_cultura',
  instagramUrl: 'https://instagram.com/as.batuku_et_cultura',
};

const PALOP_COLORS = ['#003893', '#CE1126', '#F7D116', '#1A6B3C', '#E8751A'];

export const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { to: '/',        label: t('Navbar', 'home') },
    { to: '/about',   label: t('Navbar', 'about') },
    { to: '/batuku',  label: t('Navbar', 'batuku') },
    { to: '/culture', label: t('Navbar', 'culture') },
    { to: '/events',  label: t('Navbar', 'events') },
    { to: '/gallery', label: t('Navbar', 'gallery') },
    { to: '/contact', label: t('Navbar', 'contact') },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#060E1F] text-white">

      {/* --- BACKGROUND ATMOSPHERE --- */}
      {/* Deep blue ocean glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] pointer-events-none -translate-x-1/3 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange/10 rounded-full blur-[120px] pointer-events-none translate-x-1/4 translate-y-1/4"></div>

      {/* Cape Verde flag — subtle, bottom-right, fading in from right */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="/flags/flag-cape-verde.jpg"
          alt=""
          className="absolute right-0 top-0 h-full w-auto object-cover object-right"
          style={{
            opacity: 0.06,
            maskImage: 'linear-gradient(to left, black 0%, black 20%, transparent 70%)',
            WebkitMaskImage: 'linear-gradient(to left, black 0%, black 20%, transparent 70%)',
          }}
        />
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-10">

        {/* Top section: Brand + tagline (full width) */}
        <div className="border-b border-white/10 pb-12 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">

            {/* Logo block */}
            <NavLink to="/" className="group flex flex-col max-w-xs">
              <span
                className="font-display text-4xl md:text-5xl text-white leading-none tracking-tight mb-3 group-hover:text-orange transition-colors duration-300"
              >
                BATUKU<br />
                <span className="text-orange font-light italic text-3xl md:text-4xl">& Cultura</span>
              </span>
              {/* Tagline pills */}
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="font-body text-[9px] font-bold uppercase tracking-[0.3em] text-white/50 border border-white/20 px-3 py-1 rounded-full">
                  Cap-Vert · Suisse
                </span>
                <span className="font-body text-[9px] font-bold uppercase tracking-[0.3em] text-white/30 border border-white/10 px-3 py-1 rounded-full">
                  Cultures PALOP
                </span>
              </div>
            </NavLink>

            {/* Short description */}
            <p className="font-body text-white/50 text-sm leading-relaxed max-w-sm md:text-right">
              {t('Footer', 'description')}
            </p>
          </div>
        </div>

        {/* Middle: 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">

          {/* Col 1: Navigation */}
          <div>
            <h4 className="font-body font-bold text-white/30 uppercase tracking-[0.3em] text-[10px] mb-6">
              {t('Footer', 'quickLinks')}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `group flex items-center gap-2 font-body text-sm transition-colors duration-200 ${
                        isActive ? 'text-orange' : 'text-white/60 hover:text-white'
                      }`
                    }
                  >
                    <span className="w-0 h-px bg-orange transition-all duration-300 group-hover:w-4"></span>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Contact */}
          <div>
            <h4 className="font-body font-bold text-white/30 uppercase tracking-[0.3em] text-[10px] mb-6">
              {t('Footer', 'contact')}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/50 text-sm">
                <div className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={12} className="text-orange" />
                </div>
                <span className="leading-relaxed">{CONTACT.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                  <Mail size={12} className="text-primary" />
                </div>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-white/50 hover:text-white text-sm transition-colors duration-200 break-all"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone size={12} className="text-green" />
                </div>
                <div className="flex flex-col gap-1">
                  <a href={`tel:${CONTACT.phone1Href}`} className="text-white/50 hover:text-white text-sm transition-colors tracking-wider">
                    {CONTACT.phone1}
                  </a>
                  <a href={`tel:${CONTACT.phone2Href}`} className="text-white/50 hover:text-white text-sm transition-colors tracking-wider">
                    {CONTACT.phone2}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 3: Social + Founded */}
          <div>
            <h4 className="font-body font-bold text-white/30 uppercase tracking-[0.3em] text-[10px] mb-6">
              Réseaux
            </h4>
            <a
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 rounded-2xl p-4 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E1306C] to-[#833AB4] flex items-center justify-center shrink-0">
                <Instagram size={18} className="text-white" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-white font-body font-semibold text-sm">{CONTACT.instagram}</span>
                <span className="text-white/40 text-xs font-body">Suivez-nous sur Instagram</span>
              </div>
              <ArrowUpRight size={14} className="text-white/30 group-hover:text-white/70 transition-colors ml-auto shrink-0" />
            </a>

            <div className="mt-8 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.07]">
              <p className="font-body text-white/30 text-xs italic leading-relaxed">
                {t('Footer', 'foundedIn')}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.08] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* PALOP color strip (subtle) */}
          <div className="flex items-center gap-2">
            {PALOP_COLORS.map((color, i) => (
              <div
                key={i}
                className="w-5 h-1 rounded-full"
                style={{ backgroundColor: color, opacity: 0.7 }}
              ></div>
            ))}
          </div>
          <p className="font-body text-white/25 text-xs text-center">
            {t('Footer', 'rights')}
          </p>
          <NavLink to="/contact" className="font-body text-white/30 hover:text-white/60 text-xs transition-colors tracking-widest uppercase">
            Contact →
          </NavLink>
        </div>

      </div>
    </footer>
  );
};
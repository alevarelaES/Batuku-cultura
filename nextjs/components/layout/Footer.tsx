import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { FlagStrip } from './FlagStrip';

export const Footer = () => {
  const t = useTranslations('Footer');
  const tNav = useTranslations('Navbar');

  return (
    <footer className="bg-deep text-white pt-24 pb-10 px-4 md:px-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row flex-wrap gap-8 justify-between mb-8 z-10 relative">
        <div className="w-[280px] flex-shrink-0">
          <h2 className="text-accent mb-4 text-3xl font-display tracking-widest">BATUKU & CULTURA</h2>
          <p className="font-body opacity-80 leading-relaxed">
            {t('description')}
          </p>
        </div>
        
        <div>
          <h3 className="text-accent mb-4 font-display text-2xl tracking-widest">{t('quickLinks')}</h3>
          <ul className="space-y-2 opacity-80 font-body font-medium">
            <li><Link href="/about" className="hover:text-accent transition-colors">{tNav('about')}</Link></li>
            <li><Link href="/batuku" className="hover:text-accent transition-colors">{tNav('batuku')}</Link></li>
            <li><Link href="/events" className="hover:text-accent transition-colors">{tNav('events')}</Link></li>
            <li><Link href="/gallery" className="hover:text-accent transition-colors">{tNav('gallery')}</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-accent mb-4 font-display text-2xl tracking-widest">{t('contact')}</h3>
          <ul className="space-y-2 opacity-80 font-body font-medium">
            <li>Email: ercelinabatuku11cultura@gmail.com</li>
            <li>Tél: 079 965 03 54</li>
            <li>Grand'Rue 36, 1530 Payerne (VD)</li>
            <li>Instagram: @as.batuku_et_cultura</li>
          </ul>
        </div>
      </div>
      <div className="text-center opacity-50 text-sm mt-12 mb-4 relative z-10 font-body font-medium">
        {t('rights')}
      </div>
      <FlagStrip />
    </footer>
  );
};
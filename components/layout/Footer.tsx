import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { FlagStrip } from './FlagStrip'
import { Instagram, Mail, Phone, MapPin } from 'lucide-react'

export const Footer = () => {
  const t = useTranslations('Footer')
  const tNav = useTranslations('Navbar')
  const tContact = useTranslations('Contact')

  return (
    <footer className="bg-deep text-white relative overflow-hidden">
      {/* Pattern décoratif */}
      <div className="absolute inset-0 african-pattern opacity-10 pointer-events-none" />

      <div className="container-wide relative z-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Colonne 1 — Association */}
          <div>
            <h2 className="font-display text-accent text-3xl tracking-widest mb-4">
              BATUKU & CULTURA
            </h2>
            <p className="font-body text-white/75 leading-relaxed text-sm max-w-[260px]">
              {t('description')}
            </p>
            <p className="font-body text-white/40 text-xs mt-4">
              {t('foundedIn')}
            </p>
          </div>

          {/* Colonne 2 — Navigation */}
          <div>
            <h3 className="font-display text-accent text-xl tracking-widest mb-4">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-2">
              {[
                { path: '/about', label: tNav('about') },
                { path: '/batuku', label: tNav('batuku') },
                { path: '/culture', label: tNav('culture') },
                { path: '/events', label: tNav('events') },
                { path: '/gallery', label: tNav('gallery') },
                { path: '/contact', label: tNav('contact') },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="font-body font-medium text-white/75 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 — Contact */}
          <div>
            <h3 className="font-display text-accent text-xl tracking-widest mb-4">
              {t('contact')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/75 font-body">
                <Mail size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <a href="mailto:ercelinabatuku11cultura@gmail.com" className="hover:text-accent transition-colors break-all">
                  {tContact('emailValue')}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/75 font-body">
                <Phone size={16} className="text-accent flex-shrink-0" />
                <a href="tel:+41799650354" className="hover:text-accent transition-colors">
                  {tContact('phoneValue')}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/75 font-body">
                <MapPin size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <span>{tContact('addressValue')}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/75 font-body">
                <Instagram size={16} className="text-accent flex-shrink-0" />
                <a
                  href="https://instagram.com/as.batuku_et_cultura"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  {tContact('instagramValue')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="font-body text-white/40 text-xs">{t('rights')}</p>
        </div>
      </div>

      {/* FlagStrip en bas */}
      <FlagStrip />
    </footer>
  )
}

'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { Link, usePathname, useRouter } from '@/i18n/routing'
import { Menu, X, Globe } from 'lucide-react'
import { FlagStrip } from './FlagStrip'

const locales = [
  { code: 'fr', label: 'FR' },
  { code: 'pt', label: 'PT' },
  { code: 'en', label: 'EN' },
]

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showLangMenu, setShowLangMenu] = useState(false)
  const t = useTranslations('Navbar')
  const pathname = usePathname()
  const locale = useLocale()
  const router = useRouter()

  const links = [
    { path: '/', label: t('home') },
    { path: '/about', label: t('about') },
    { path: '/batuku', label: t('batuku') },
    { path: '/culture', label: t('culture') },
    { path: '/events', label: t('events') },
    { path: '/gallery', label: t('gallery') },
    { path: '/contact', label: t('contact') },
  ]

  const handleLocaleChange = (newLocale: string) => {
    router.push(pathname, { locale: newLocale })
    setShowLangMenu(false)
  }

  return (
    <nav className="bg-primary relative z-50 shadow-lg">
      <div className="container-wide h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-accent text-2xl md:text-3xl tracking-widest uppercase hover:opacity-90 transition-opacity"
        >
          BATUKU & CULTURA
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`font-body font-semibold text-sm xl:text-base transition-all ${
                pathname === link.path
                  ? 'text-accent border-b-2 border-accent pb-0.5'
                  : 'text-white hover:text-accent hover:-translate-y-0.5'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Lang switcher + hamburger */}
        <div className="flex items-center gap-4">
          {/* Sélecteur de langue */}
          <div className="relative">
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="flex items-center gap-2 border-2 border-accent rounded-full px-3 py-1.5 text-deep bg-accent font-body font-bold text-sm hover:bg-white hover:border-white transition-all"
            >
              <Globe size={14} />
              {locale.toUpperCase()}
            </button>

            {showLangMenu && (
              <div className="absolute right-0 top-10 bg-white rounded-lg shadow-card border border-gray-100 overflow-hidden z-50 min-w-[80px]">
                {locales.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => handleLocaleChange(l.code)}
                    className={`w-full px-4 py-2 text-sm font-body font-semibold text-left transition-colors ${
                      locale === l.code
                        ? 'bg-primary text-white'
                        : 'text-brand-text hover:bg-brand-bg'
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Hamburger mobile */}
          <button
            className="lg:hidden text-white hover:text-accent transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* FlagStrip */}
      <FlagStrip />

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-primary border-t border-white/20 shadow-2xl z-40">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-6 py-4 font-body font-semibold text-lg border-b border-white/10 transition-colors ${
                pathname === link.path
                  ? 'text-accent bg-white/10'
                  : 'text-white hover:text-accent hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="px-6 py-4 flex gap-3">
            {locales.map((l) => (
              <button
                key={l.code}
                onClick={() => handleLocaleChange(l.code)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  locale === l.code
                    ? 'bg-accent text-deep'
                    : 'border border-white/50 text-white hover:border-accent hover:text-accent'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

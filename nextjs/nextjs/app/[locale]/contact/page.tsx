'use client'

import { useTranslations } from 'next-intl'
import { Mail, Phone, MapPin, Instagram, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const t = useTranslations('Contact')
  const [subject, setSubject] = useState('')

  const contactCards = [
    {
      icon: <MapPin size={24} className="text-primary" />,
      label: t('addressLabel'),
      value: t('addressValue'),
      href: 'https://maps.google.com/?q=Grand+Rue+36+Payerne',
    },
    {
      icon: <Mail size={24} className="text-cv" />,
      label: t('emailLabel'),
      value: t('emailValue'),
      href: `mailto:${t('emailValue')}`,
    },
    {
      icon: <Phone size={24} className="text-nature" />,
      label: t('phoneLabel'),
      value: t('phoneValue'),
      href: `tel:+41799650354`,
    },
    {
      icon: <Instagram size={24} className="text-deep" />,
      label: t('instagramLabel'),
      value: t('instagramValue'),
      href: 'https://instagram.com/as.batuku_et_cultura',
    },
  ]

  const subjectOptions = [
    'Question générale',
    'Atelier de danse',
    'Adhésion',
    'Partenariat',
    'Événement',
    'Autre',
  ]

  return (
    <div className="w-full">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-primary py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 african-pattern opacity-20 pointer-events-none" />
        <div className="relative z-10">
          <h1 className="font-display text-accent text-6xl md:text-8xl text-shadow-lg">
            {t('pageTitle')}
          </h1>
        </div>
      </section>

      {/* ── CONTENU PRINCIPAL ────────────────────────────────────── */}
      <section className="bg-brand-bg section-padding px-4 md:px-12">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Colonne gauche */}
            <div>
              {/* Cards contact */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {contactCards.map((card) => (
                  <a
                    key={card.label}
                    href={card.href}
                    target={card.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="bg-white rounded-card p-5 shadow-card hover:shadow-hero transition-shadow group"
                  >
                    <div className="mb-3">{card.icon}</div>
                    <div className="font-body font-semibold text-brand-text text-sm mb-1">
                      {card.label}
                    </div>
                    <div className="font-body text-brand-text/60 text-xs leading-relaxed break-all group-hover:text-primary transition-colors">
                      {card.value}
                    </div>
                  </a>
                ))}
              </div>

              {/* Adhésion */}
              <div className="bg-deep rounded-card p-8 african-pattern relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <div className="relative z-10">
                  <h2 className="font-display text-accent text-3xl mb-4">
                    {t('joinTitle')}
                  </h2>
                  <p className="font-body text-white/80 leading-relaxed mb-6">
                    {t('joinText')}
                  </p>
                  <button className="inline-flex items-center gap-2 bg-primary text-white font-body font-bold px-6 py-3 rounded-pill hover:bg-accent hover:text-deep transition-all w-full justify-center">
                    {t('joinBtn')}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Formulaire */}
            <div className="bg-white rounded-card p-8 shadow-card">
              <h2 className="font-display text-deep text-3xl mb-2">{t('formTitle')}</h2>
              <p className="font-body text-brand-text/60 text-sm mb-6">{t('formSubtitle')}</p>

              <form className="space-y-5">
                {/* Sujets pré-définis */}
                <div>
                  <label className="font-body text-xs font-semibold uppercase tracking-widest text-brand-text/60 mb-2 block">
                    {t('formSubject')}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {subjectOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setSubject(opt)}
                        className={`font-body text-xs px-3 py-1.5 rounded-pill border transition-all ${
                          subject === opt
                            ? 'bg-primary text-white border-primary'
                            : 'border-brand-text/20 text-brand-text/60 hover:border-primary hover:text-primary'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Nom */}
                <div>
                  <label className="font-body text-xs font-semibold uppercase tracking-widest text-brand-text/60 mb-2 block">
                    {t('formName')}
                  </label>
                  <input
                    type="text"
                    placeholder={t('formNamePlaceholder')}
                    className="w-full border border-brand-text/20 rounded-lg px-4 py-3 font-body text-sm focus:outline-none focus:border-primary transition-colors bg-brand-bg"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="font-body text-xs font-semibold uppercase tracking-widest text-brand-text/60 mb-2 block">
                    {t('formEmail')}
                  </label>
                  <input
                    type="email"
                    placeholder={t('formEmailPlaceholder')}
                    className="w-full border border-brand-text/20 rounded-lg px-4 py-3 font-body text-sm focus:outline-none focus:border-primary transition-colors bg-brand-bg"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="font-body text-xs font-semibold uppercase tracking-widest text-brand-text/60 mb-2 block">
                    {t('formMessage')}
                  </label>
                  <textarea
                    rows={5}
                    placeholder={t('formMessagePlaceholder')}
                    className="w-full border border-brand-text/20 rounded-lg px-4 py-3 font-body text-sm focus:outline-none focus:border-primary transition-colors bg-brand-bg resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white font-body font-bold py-4 rounded-pill hover:bg-deep transition-colors shadow-card flex items-center justify-center gap-2"
                >
                  {t('formSend')}
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

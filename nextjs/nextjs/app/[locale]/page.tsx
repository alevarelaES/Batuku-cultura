import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import Image from 'next/image'
import { Countdown } from '@/components/ui/Countdown'
import { palopCountries, upcomingEvents } from '@/lib/data'
import { ArrowRight, MapPin, Calendar, Ticket } from 'lucide-react'

export default function HomePage() {
  const t = useTranslations('Home')

  return (
    <div className="w-full">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-primary min-h-[85vh] flex flex-col md:flex-row items-center px-4 md:px-12 relative overflow-hidden">
        {/* Décoratifs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-deep/20 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        {/* Texte */}
        <div className="w-full md:w-1/2 z-10 py-16 md:py-0">
          <p className="font-body text-accent/80 text-sm tracking-widest uppercase mb-2">
            Association Batuku & Cultura
          </p>
          <h1 className="font-display text-accent text-6xl md:text-8xl lg:text-9xl leading-none mb-4 text-shadow-lg">
            {t('heroTitle')}
          </h1>
          <p className="font-body text-white text-lg md:text-xl italic mb-2 opacity-90">
            {t('heroSubtitle')}
          </p>
          <p className="font-body text-white/60 text-sm italic mb-8">
            "{t('heroSlogan')}"
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 bg-accent text-deep font-body font-bold px-6 py-3 rounded-pill hover:bg-white transition-all shadow-glow"
            >
              {t('joinBtn')}
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-body font-semibold px-6 py-3 rounded-pill hover:bg-white hover:text-primary transition-all"
            >
              {t('discoverBtn')}
            </Link>
          </div>
        </div>

        {/* Image hero */}
        <div className="w-full md:w-1/2 flex items-center justify-center py-8 md:py-0 z-10">
          <div className="relative">
            <div className="absolute -inset-3 border-4 border-accent rounded-[32px] rotate-3 opacity-60" />
            <div className="relative overflow-hidden rounded-[28px] border-4 border-white shadow-hero -rotate-2 hover:rotate-0 transition-transform duration-500 max-w-[480px]">
              <Image
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80"
                alt="Performance culturelle PALOP"
                width={480}
                height={560}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPTE À REBOURS ─────────────────────────────────────── */}
      <Countdown />

      {/* ── APERÇU ASSOCIATION ───────────────────────────────────── */}
      <section className="bg-brand-bg section-padding px-4 md:px-12 relative">
        {/* Pattern décoratif */}
        <div className="absolute inset-0 african-pattern pointer-events-none opacity-30" />

        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-primary text-4xl md:text-5xl mb-6">
                {t('aboutTitle')}
              </h2>
              <p className="font-body text-brand-text/80 text-lg leading-relaxed mb-8">
                {t('aboutText')}
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-body font-semibold text-primary hover:text-deep transition-colors group"
              >
                En savoir plus
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: t('stat1Value'), label: t('stat1Label'), color: 'border-primary text-primary' },
                { value: t('stat2Value'), label: t('stat2Label'), color: 'border-cv text-cv' },
                { value: t('stat3Value'), label: t('stat3Label'), color: 'border-nature text-nature' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={`border-2 ${stat.color} rounded-card p-4 text-center bg-white shadow-card`}
                >
                  <div className={`font-display text-3xl md:text-4xl ${stat.color.split(' ')[1]}`}>
                    {stat.value}
                  </div>
                  <div className="font-body text-brand-text/60 text-xs mt-1 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SPOTLIGHT BATUKU ─────────────────────────────────────── */}
      <section className="bg-primary section-padding px-4 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />

        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-3 border-4 border-accent/40 rounded-[32px] -rotate-2" />
              <div className="relative overflow-hidden rounded-[28px] shadow-hero rotate-1">
                <Image
                  src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&q=80"
                  alt="Groupe Batuku"
                  width={560}
                  height={420}
                  className="object-cover w-full"
                />
                <div className="absolute inset-0 bg-deep/20" />
              </div>
            </div>

            {/* Texte */}
            <div>
              <p className="font-display text-accent text-lg tracking-widest mb-2">
                {t('batukuSubtitle')}
              </p>
              <h2 className="font-display text-white text-4xl md:text-5xl mb-6">
                {t('batukuTitle')}
              </h2>
              <p className="font-body text-white/80 text-lg leading-relaxed mb-8">
                {t('batukuText')}
              </p>
              <Link
                href="/batuku"
                className="inline-flex items-center gap-2 border-2 border-accent text-accent font-body font-semibold px-6 py-3 rounded-pill hover:bg-accent hover:text-deep transition-all"
              >
                {t('batukuBtn')}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PAYS PALOP ───────────────────────────────────────────── */}
      <section className="bg-brand-bg section-padding px-4 md:px-12">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-display text-primary text-4xl md:text-5xl mb-4">
              {t('heritageTitle')}
            </h2>
            <p className="font-body text-brand-text/60 max-w-xl mx-auto">
              {t('heritageSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {palopCountries.map((country) => (
              <Link
                key={country.id}
                href="/culture"
                className={`${country.color} ${country.textColor} rounded-card p-6 text-center hover:scale-105 transition-transform shadow-card group`}
              >
                <div className="font-display text-4xl opacity-30 group-hover:opacity-50 transition-opacity mb-2">
                  {country.code}
                </div>
                <div className="font-display text-lg tracking-wide">
                  {country.nameKey === 'capvert' ? 'Cap-Vert' :
                   country.nameKey === 'angola' ? 'Angola' :
                   country.nameKey === 'guineeBissau' ? 'Guinée-Bissau' :
                   country.nameKey === 'mozambique' ? 'Mozambique' : 'São Tomé'}
                </div>
                <div className="font-body text-xs opacity-70 mt-1">
                  {country.music.split(',')[0]}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ÉVÉNEMENTS À VENIR ───────────────────────────────────── */}
      <section className="bg-deep section-padding px-4 md:px-12 relative overflow-hidden african-pattern">
        <div className="container-wide relative z-10">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-display text-accent text-4xl md:text-5xl">
              À venir
            </h2>
            <Link
              href="/events"
              className="font-body font-semibold text-white/70 hover:text-accent transition-colors flex items-center gap-2"
            >
              Tous les événements <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white/10 backdrop-blur rounded-card p-6 hover:bg-white/15 transition-colors">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`font-body text-xs font-semibold px-3 py-1 rounded-pill ${event.categoryColor}`}>
                    {event.category}
                  </span>
                </div>
                <h3 className="font-display text-white text-2xl mb-3">{event.title}</h3>
                <div className="flex items-center gap-2 text-white/60 text-sm font-body mb-1">
                  <Calendar size={14} />
                  {event.date}
                </div>
                <div className="flex items-center gap-2 text-white/60 text-sm font-body">
                  <MapPin size={14} />
                  {event.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

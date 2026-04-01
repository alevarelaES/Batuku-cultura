import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import Image from 'next/image'
import { upcomingEvents } from '@/lib/data'
import { MapPin, Calendar, Ticket, ArrowRight } from 'lucide-react'

export default function EventsPage() {
  const t = useTranslations('Events')

  const filters = [
    t('filterAll'),
    t('filterFestival'),
    t('filterDance'),
    t('filterWorkshop'),
    t('filterGastronomy'),
  ]

  return (
    <div className="w-full">

      {/* ── ÉVÉNEMENT PHARE ──────────────────────────────────────── */}
      <section className="bg-deep section-padding px-4 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 african-pattern opacity-10 pointer-events-none" />

        <div className="container-wide relative z-10">
          <div className="bg-primary/90 rounded-[24px] p-8 md:p-12 shadow-hero overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
              {/* Image */}
              <div className="overflow-hidden rounded-card shadow-hero">
                <Image
                  src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=700&q=80"
                  alt="Cultura Palops Suiça"
                  width={560}
                  height={360}
                  className="object-cover w-full hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Infos */}
              <div>
                <span className="font-body text-xs font-bold tracking-widest uppercase bg-accent text-deep px-4 py-1.5 rounded-pill mb-4 inline-block">
                  {t('featuredBadge')}
                </span>
                <h1 className="font-display text-white text-5xl md:text-6xl leading-tight mb-4">
                  {t('featuredTitle')}
                  <br />
                  <span className="text-accent">SUIÇA</span>
                </h1>
                <p className="font-body text-white/80 text-lg leading-relaxed mb-6">
                  {t('featuredText')}
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 font-body text-white/80">
                    <MapPin size={18} className="text-accent flex-shrink-0" />
                    {t('featuredLocation')}
                  </div>
                  <div className="flex items-center gap-3 font-body text-white/80">
                    <Ticket size={18} className="text-accent flex-shrink-0" />
                    {t('featuredPrice')}
                  </div>
                  <div className="flex items-center gap-3 font-body text-white/80">
                    <Calendar size={18} className="text-accent flex-shrink-0" />
                    {t('featuredDate')}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border-2 border-accent text-accent font-body font-bold px-8 py-3 rounded-pill hover:bg-accent hover:text-deep transition-all"
                >
                  {t('reserveBtn')}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FILTRES + LISTE ──────────────────────────────────────── */}
      <section className="bg-brand-bg section-padding px-4 md:px-12">
        <div className="container-wide">
          {/* Filtres */}
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {filters.map((filter, i) => (
              <button
                key={filter}
                className={`font-body font-semibold text-sm px-5 py-2 rounded-pill border transition-all ${
                  i === 0
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-brand-text border-brand-text/20 hover:border-primary hover:text-primary'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Cards événements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-card shadow-card overflow-hidden hover:shadow-hero transition-shadow group">
                {/* Image placeholder */}
                <div className="h-48 bg-brand-bg relative overflow-hidden">
                  <div className={`absolute inset-0 opacity-20 ${event.categoryColor.split(' ')[0]}`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-6xl text-brand-text/10">
                      {event.category[0]}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`font-body text-xs font-bold px-3 py-1 rounded-pill ${event.categoryColor}`}>
                      {event.category}
                    </span>
                  </div>
                  <h3 className="font-display text-brand-text text-2xl mb-3 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-2 text-brand-text/60 text-sm font-body mb-1">
                    <Calendar size={14} className="text-primary" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-brand-text/60 text-sm font-body">
                    <MapPin size={14} className="text-primary" />
                    {event.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

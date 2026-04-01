import { useTranslations } from 'next-intl'
import { palopCountries } from '@/lib/data'

export default function CulturePage() {
  const t = useTranslations('Culture')

  return (
    <div className="w-full">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-primary py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 african-pattern opacity-20 pointer-events-none" />
        <div className="relative z-10">
          <h1 className="font-display text-accent text-5xl md:text-7xl text-shadow-lg mb-3">
            {t('pageTitle')}
          </h1>
          <p className="font-body text-white/80 text-lg italic">
            {t('pageSubtitle')}
          </p>
        </div>
      </section>

      {/* ── NAV STICKY PAYS ──────────────────────────────────────── */}
      <nav className="sticky top-0 z-40 bg-white border-b border-brand-bg shadow-card">
        <div className="container-wide">
          <div className="flex overflow-x-auto scrollbar-hide">
            {palopCountries.map((country) => (
              <a
                key={country.id}
                href={`#${country.id}`}
                className={`flex-shrink-0 px-6 py-4 font-body font-semibold text-sm transition-colors hover:text-white ${country.color} hover:opacity-90 ${country.textColor} border-r border-white/20 first:rounded-none last:rounded-none`}
              >
                {country.nameKey === 'capvert' ? t('capvert') :
                 country.nameKey === 'angola' ? t('angola') :
                 country.nameKey === 'guineeBissau' ? t('guineeBissau') :
                 country.nameKey === 'mozambique' ? t('mozambique') : t('saoTome')}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── SECTIONS PAYS ────────────────────────────────────────── */}
      {palopCountries.map((country, index) => (
        <section
          key={country.id}
          id={country.id}
          className={`section-padding px-4 md:px-12 relative overflow-hidden ${index % 2 === 0 ? 'bg-brand-bg' : 'bg-white'}`}
        >
          {/* Grand sigle en fond */}
          <div className={`absolute right-4 top-1/2 -translate-y-1/2 font-display text-[180px] md:text-[260px] leading-none select-none pointer-events-none opacity-[0.06] ${country.textColor === 'text-deep' ? 'text-deep' : country.color.replace('bg-', 'text-')}`}>
            {country.code}
          </div>

          <div className="container-wide relative z-10">
            {/* Titre pays */}
            <div className="mb-10">
              <div className={`inline-block font-display text-4xl md:text-6xl ${country.textColor === 'text-white' ? country.color.replace('bg-', 'text-') : 'text-deep'} mb-2`}>
                {country.nameKey === 'capvert' ? t('capvert') :
                 country.nameKey === 'angola' ? t('angola') :
                 country.nameKey === 'guineeBissau' ? t('guineeBissau') :
                 country.nameKey === 'mozambique' ? t('mozambique') : t('saoTome')}
              </div>
              <div className={`h-1 w-24 ${country.color} rounded-full`} />
            </div>

            {/* Cards musique + gastronomie */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-card p-6 shadow-card">
                <div className={`font-display text-xl mb-1 ${country.textColor === 'text-white' ? country.color.replace('bg-', 'text-') : 'text-deep'}`}>
                  {t('musicDance')}
                </div>
                <div className={`h-0.5 w-16 ${country.color} rounded-full mb-4`} />
                <div className="font-body font-semibold text-sm text-brand-text mb-2">
                  {country.music}
                </div>
                <p className="font-body text-brand-text/70 text-sm leading-relaxed">
                  {country.musicDetail}
                </p>
              </div>

              <div className="bg-white rounded-card p-6 shadow-card">
                <div className={`font-display text-xl mb-1 ${country.textColor === 'text-white' ? country.color.replace('bg-', 'text-') : 'text-deep'}`}>
                  {t('gastronomy')}
                </div>
                <div className={`h-0.5 w-16 ${country.color} rounded-full mb-4`} />
                <div className="font-body font-semibold text-sm text-brand-text mb-2">
                  {country.gastronomy}
                </div>
                <p className="font-body text-brand-text/70 text-sm leading-relaxed">
                  {country.gastronomyDetail}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

    </div>
  )
}

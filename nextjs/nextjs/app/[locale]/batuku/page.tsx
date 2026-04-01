import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function BatukuPage() {
  const t = useTranslations('Batuku')

  const timeline = [
    { era: t('timeline1Era'), title: t('timeline1Title'), text: t('timeline1Text'), color: 'border-primary text-primary' },
    { era: t('timeline2Era'), title: t('timeline2Title'), text: t('timeline2Text'), color: 'border-cv text-cv' },
    { era: t('timeline3Era'), title: t('timeline3Title'), text: t('timeline3Text'), color: 'border-nature text-nature' },
  ]

  const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&q=80', alt: 'Performance Batuku' },
    { src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80', alt: 'Danse africaine' },
    { src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80', alt: 'Tambours percussions' },
    { src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80', alt: 'Groupe musical' },
  ]

  return (
    <div className="w-full">

      {/* ── HERO IMMERSIF ────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-end pb-12 px-4 md:px-12 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1400&q=80"
          alt="Groupe Batuku"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-deep/70" />
        <div className="absolute inset-0 bg-primary/30" />

        {/* Décoratif */}
        <div className="absolute top-8 right-8 w-32 h-32 border-4 border-accent/30 rounded-full pointer-events-none" />

        <div className="container-wide relative z-10">
          <h1 className="font-display text-accent text-6xl md:text-8xl text-shadow-lg mb-2">
            {t('pageTitle')}
          </h1>
          <p className="font-body text-white text-xl md:text-2xl italic opacity-90">
            {t('pageSubtitle')}
          </p>
        </div>
      </section>

      {/* ── HÉRITAGE ─────────────────────────────────────────────── */}
      <section className="bg-brand-bg section-padding px-4 md:px-12 relative">
        <div className="absolute inset-0 african-pattern opacity-20 pointer-events-none" />
        <div className="container-wide relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="font-display text-primary text-4xl md:text-5xl mb-6">
            {t('heritageTitle')}
          </h2>
          <p className="font-body text-brand-text/75 text-lg leading-relaxed">
            {t('heritageText')}
          </p>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────────────── */}
      <section className="bg-white section-padding px-4 md:px-12">
        <div className="container-wide max-w-2xl mx-auto">
          <div className="relative">
            {/* Ligne centrale */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-cv to-nature" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-8 pl-16 relative">
                  {/* Point */}
                  <div className={`absolute left-4 top-1 w-4 h-4 rounded-full border-4 bg-white ${item.color.split(' ')[0]}`} />

                  <div>
                    <span className={`font-body text-xs font-bold tracking-widest uppercase ${item.color.split(' ')[1]} bg-brand-bg px-3 py-1 rounded-pill`}>
                      {item.era}
                    </span>
                    <h3 className="font-display text-brand-text text-2xl mt-3 mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-brand-text/70 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── GALERIE DANSE ────────────────────────────────────────── */}
      <section className="bg-deep section-padding px-4 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 african-pattern opacity-10 pointer-events-none" />
        <div className="container-wide relative z-10">
          <h2 className="font-display text-accent text-4xl md:text-5xl text-center mb-10">
            {t('galleryTitle')}
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-card shadow-hero ${i === 0 ? 'row-span-2' : ''}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={i === 0 ? 700 : 330}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ATELIERS ─────────────────────────────────────────── */}
      <section className="bg-brand-bg section-padding px-4 md:px-12">
        <div className="container-wide max-w-2xl mx-auto text-center">
          <h2 className="font-display text-primary text-4xl md:text-5xl mb-4">
            {t('workshopTitle')}
          </h2>
          <p className="font-body text-brand-text/70 text-lg leading-relaxed mb-8">
            {t('workshopText')}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-white font-body font-semibold px-8 py-4 rounded-pill hover:bg-deep transition-colors shadow-card"
          >
            {t('workshopBtn')}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  )
}

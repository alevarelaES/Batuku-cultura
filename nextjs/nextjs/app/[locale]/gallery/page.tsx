import { useTranslations } from 'next-intl'
import Image from 'next/image'

const photos = [
  { src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80', alt: 'Festival musical', height: 'h-64' },
  { src: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80', alt: 'Femme au marché', height: 'h-48' },
  { src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80', alt: 'Danseur traditionnel', height: 'h-80' },
  { src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80', alt: 'Musiciens africains', height: 'h-56' },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', alt: 'Cap-Vert paysage', height: 'h-72' },
  { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80', alt: 'Portrait homme', height: 'h-48' },
  { src: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80', alt: 'Gastronomie africaine', height: 'h-60' },
  { src: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800&q=80', alt: 'Groupe de danse', height: 'h-52' },
]

export default function GalleryPage() {
  const t = useTranslations('Gallery')

  const filters = [
    t('filterAll'),
    t('filterBatuku'),
    t('filterEvents'),
    t('filterGastronomy'),
    t('filterVideos'),
  ]

  return (
    <div className="w-full">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-brand-bg pt-16 pb-8 px-4 md:px-12 text-center">
        <div className="container-wide">
          <h1 className="font-display text-primary text-6xl md:text-8xl mb-4">
            {t('pageTitle')}
          </h1>
          <p className="font-body text-brand-text/70 text-lg max-w-xl mx-auto">
            {t('pageSubtitle')}
          </p>
        </div>
      </section>

      {/* ── FILTRES ──────────────────────────────────────────────── */}
      <section className="bg-brand-bg pb-8 px-4 md:px-12">
        <div className="container-wide flex flex-wrap gap-3 justify-center">
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
      </section>

      {/* ── GRILLE MASONRY ───────────────────────────────────────── */}
      <section className="bg-brand-bg section-padding px-4 md:px-12">
        <div className="container-wide">
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {photos.map((photo, i) => (
              <div
                key={i}
                className="break-inside-avoid overflow-hidden rounded-card shadow-card hover:shadow-hero transition-shadow group cursor-pointer"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={400}
                  height={300}
                  className="object-cover w-full hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDÉOS ───────────────────────────────────────────────── */}
      <section className="bg-deep section-padding px-4 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 african-pattern opacity-10 pointer-events-none" />
        <div className="container-wide relative z-10">
          <h2 className="font-display text-accent text-4xl md:text-5xl text-center mb-10">
            {t('filterVideos')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Performance Batuku — Payerne 2024', sub: 'Grupo Batuku · 2024' },
              { title: 'Soirée Cultura Palops — Genève', sub: 'Événement annuel · 2024' },
            ].map((video) => (
              <div key={video.title} className="bg-white/10 rounded-card overflow-hidden group cursor-pointer">
                <div className="relative h-48 bg-black/30 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform shadow-hero">
                    <div className="w-0 h-0 border-t-8 border-b-8 border-l-14 border-transparent border-l-white ml-1" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-display text-white text-xl mb-1">{video.title}</h3>
                  <p className="font-body text-white/60 text-sm">{video.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

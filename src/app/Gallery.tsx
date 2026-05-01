import React, { useState, useEffect, useCallback } from 'react';
import { SEO } from './components/SEO';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { FadeIn } from './components/FadeIn';
import { Confetti, CapeVerdeIslands } from './components/Decorations';
import { CapeVerdeStars } from './components/CulturalMotifs';
import { useLanguage } from './contexts/LanguageContext';

type Category = 'all' | 'batuku' | 'events' | 'gastronomy';

interface GalleryItem {
  src: string;
  category: Exclude<Category, 'all'>;
  labelKey: string;
}

const galleryItems: GalleryItem[] = [
  // ── GROUPE BATUKU ──
  {
    src: '/groupe%20batuku/groupo%20batuku%201.jpeg',
    category: 'batuku',
    labelKey: 'labelBatukuRepet',
  },
  {
    src: '/groupe%20batuku/groupo%20batuku%202.jpeg',
    category: 'batuku',
    labelKey: 'labelPercussions',
  },
  {
    src: '/groupe%20batuku/groupo%20batuku%203.jpeg',
    category: 'batuku',
    labelKey: 'labelDanseTrad',
  },

  // ── ÉVÉNEMENTS — Festival Batuku (Sementera) ──
  {
    src: '/Evenment sementera batukaderas photos/WhatsApp Image 2026-04-27 at 19.16.05 (2).jpeg',
    category: 'events',
    labelKey: 'Festival 2026',
  },
  {
    src: '/Evenment sementera batukaderas photos/WhatsApp Image 2026-04-27 at 19.16.05 (3).jpeg',
    category: 'events',
    labelKey: 'Sementera Batukaderas',
  },
  {
    src: '/Evenment sementera batukaderas photos/WhatsApp Image 2026-04-27 at 19.16.05 (4).jpeg',
    category: 'events',
    labelKey: 'La Troupe Sementera',
  },
  {
    src: '/Evenment sementera batukaderas photos/WhatsApp Image 2026-04-27 at 19.16.05 (5).jpeg',
    category: 'events',
    labelKey: 'Tradition Cap-Verdienne',
  },
  {
    src: '/Evenment sementera batukaderas photos/WhatsApp Image 2026-04-27 at 19.16.05 (6).jpeg',
    category: 'events',
    labelKey: 'Énergie Pure',
  },
  {
    src: '/Evenment sementera batukaderas photos/WhatsApp Image 2026-04-27 at 19.16.05 (7).jpeg',
    category: 'events',
    labelKey: 'Célébration',
  },
  {
    src: '/Evenment sementera batukaderas photos/WhatsApp Image 2026-04-27 at 19.16.06 (1).jpeg',
    category: 'events',
    labelKey: 'Rythme & Danse',
  },
  {
    src: '/Evenment sementera batukaderas photos/WhatsApp Image 2026-04-27 at 19.16.06.jpeg',
    category: 'events',
    labelKey: 'Fierté 3e Place',
  },

  // ── GASTRONOMIE (photos locales en attendant) ──
  {
    src: '/about%20par%20pays/gastronomie/cap%20vert/cachupa-sal-cabo-verde-1.png',
    category: 'gastronomy',
    labelKey: 'labelCachupa',
  },
  {
    src: '/about%20par%20pays/gastronomie/angola/maxresdefault.jpg',
    category: 'gastronomy',
    labelKey: 'labelCuisinePalop',
  },
  {
    src: '/about%20par%20pays/gastronomie/Mozambique/P1018787.png',
    category: 'gastronomy',
    labelKey: 'labelCuisinePalop',
  },
  {
    src: '/about%20par%20pays/gastronomie/Guin%C3%A9%20Bissau/caldo-de-mancarra-frango.png',
    category: 'gastronomy',
    labelKey: 'labelCuisinePalop',
  },
  {
    src: '/about%20par%20pays/gastronomie/sao%20tom%C3%A9/Calulu.jpg',
    category: 'gastronomy',
    labelKey: 'labelDinerGala',
  },
];

/* ─── Lightbox ─────────────────────────────────────────── */
interface LightboxProps {
  items: GalleryItem[];
  index: number;
  getLabel: (key: string) => string;
  getCategoryLabel: (cat: Exclude<Category, 'all'>) => string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const Lightbox = ({ items, index, getLabel, getCategoryLabel, onClose, onPrev, onNext }: LightboxProps) => {
  const item = items[index];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
        aria-label="Fermer"
      >
        <X size={18} />
      </button>

      {/* Prev */}
      {items.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 md:left-8 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
          aria-label="Précédent"
        >
          <ChevronLeft size={22} />
        </button>
      )}

      {/* Next */}
      {items.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 md:right-8 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
          aria-label="Suivant"
        >
          <ChevronRight size={22} />
        </button>
      )}

      {/* Photo */}
      <div
        className="relative max-w-[90vw] max-h-[88vh] flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.src}
          alt={getLabel(item.labelKey)}
          className="max-w-full max-h-[78vh] object-contain rounded-2xl shadow-2xl"
          draggable={false}
        />
        <div className="flex items-center gap-3">
          <span className="font-body text-white/80 text-sm">{getLabel(item.labelKey)}</span>
          <span className="bg-white/15 text-white/70 font-body text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            {getCategoryLabel(item.category)}
          </span>
        </div>
        <span className="absolute -bottom-8 font-body text-white/30 text-xs">
          {index + 1} / {items.length}
        </span>
      </div>
    </div>
  );
};

/* ─── Gallery Page ──────────────────────────────────────── */
export const Gallery = () => {
  const { t, lang } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<Category>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const allFilters: { key: Category; label: string }[] = [
    { key: 'all',        label: t('Gallery', 'filterAll') },
    { key: 'batuku',     label: t('Gallery', 'filterBatuku') },
    { key: 'events',     label: t('Gallery', 'filterEvents') },
    { key: 'gastronomy', label: t('Gallery', 'filterGastronomy') },
  ];

  // N'affiche un filtre que s'il y a au moins 1 photo (sauf "Tout")
  const filters = allFilters.filter(
    (f) => f.key === 'all' || galleryItems.some((i) => i.category === f.key),
  );

  const filtered =
    activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter((img) => img.category === activeFilter);

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevPhoto = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length)),
    [filtered.length],
  );
  const nextPhoto = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length)),
    [filtered.length],
  );

  const getCategoryLabel = (cat: Exclude<Category, 'all'>) =>
    filters.find((f) => f.key === cat)?.label ?? cat;

  const seoData = {
    fr: { title: 'Galerie Photos', description: "Galerie photos et vidéos de l'association Batuku & Cultura — moments forts de nos événements, performances de Batuku et rassemblements en Suisse Romande." },
    pt: { title: 'Galeria', description: "Galeria de fotos e vídeos da associação Batuku & Cultura — momentos marcantes dos nossos eventos, performances de Batuku e encontros na Suíça." },
    en: { title: 'Photo Gallery', description: "Photo and video gallery of the Batuku & Cultura association — highlights from our events, Batuku performances and gatherings in French-speaking Switzerland." },
  }[lang as 'fr' | 'pt' | 'en'] ?? { title: 'Galerie Photos', description: '' };

  return (
    <div className="w-full min-h-screen pb-section px-4 md:px-xl relative">
      <SEO title={seoData.title} description={seoData.description} path="gallery" lang={lang} pageType="CollectionPage" breadcrumbs={[{ name: seoData.title, path: 'gallery' }]} />

      {/* ── BACKGROUND ── */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src="/Sections_fonds/fond page galerie.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-[#F5EDE3]/40" />
      </div>
      <Confetti className="fixed inset-0 text-deep opacity-[0.03] pointer-events-none z-0" />
      <div className="fixed top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[150px] md:text-[250px] font-display text-primary opacity-[0.02] pointer-events-none select-none z-0 leading-none tracking-widest whitespace-nowrap">
        MEMORIES
      </div>
      <CapeVerdeStars className="hidden md:block fixed -top-[100px] -left-[100px] text-accent opacity-[0.05] w-[700px] h-[700px] pointer-events-none z-0 animate-[spin_80s_linear_infinite]" />
      <CapeVerdeIslands className="fixed top-1/3 right-10 text-primary opacity-[0.03] w-[400px] h-[250px] pointer-events-none z-0 rotate-12" />

      {/* ── CONTENT ── */}
      <div className="relative z-10 pt-10 md:pt-14">
        <FadeIn>
          <h1 className="text-brand-text text-center mb-6 text-5xl md:text-6xl drop-shadow-sm font-display tracking-tight">
            {t('Gallery', 'pageTitle')}
          </h1>
          <p className="text-center font-body text-lg md:text-xl font-medium opacity-80 mb-12 max-w-3xl mx-auto bg-white/60 backdrop-blur-md px-8 py-5 rounded-[2rem] shadow-sm border border-white/80 text-brand-text">
            {t('Gallery', 'pageSubtitle')}
          </p>
        </FadeIn>

        {/* Filter Tabs */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((f) => {
              const count = f.key === 'all' ? galleryItems.length : galleryItems.filter((i) => i.category === f.key).length;
              const isActive = activeFilter === f.key;
              return (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-body font-semibold text-sm border transition-[background-color,border-color,box-shadow,transform] duration-300 ${
                    isActive
                      ? 'bg-primary border-primary text-white shadow-[0_6px_18px_rgba(0,56,147,0.30)] scale-105'
                      : 'border-black/8 text-primary hover:bg-white hover:border-black/10 hover:shadow-md bg-white/60 backdrop-blur-sm'
                  }`}
                >
                  {f.label}
                  <span className={`text-[10px] font-bold rounded-full px-2 py-0.5 leading-none ${isActive ? 'bg-white/20 text-white' : 'bg-black/8 text-primary/60'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Masonry Grid */}
        <FadeIn delay={0.2}>
          <div className="max-w-7xl mx-auto">
            {filtered.length === 0 ? (
              <div className="text-center py-20 opacity-50 font-body text-2xl font-semibold">
                {t('Gallery', 'filterAll')} — 0
              </div>
            ) : (
              <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 1024: 3 }}>
                <Masonry gutter="20px">
                  {filtered.map((item, i) => (
                    <div
                      key={`${item.category}-${i}`}
                      onClick={() => openLightbox(i)}
                      className="overflow-hidden rounded-[1.75rem] group relative cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.08)] md:hover:shadow-[0_12px_28px_rgba(0,56,147,0.14)] md:hover:-translate-y-1 transition-[transform,box-shadow] duration-500 ease-out border-[5px] border-white bg-white"
                    >
                      {/* Hover overlay — simple black gradient for legibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 ease-out z-10 rounded-[1.2rem]" />

                      {/* Zoom hint icon */}
                      <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                        <ZoomIn size={14} className="text-primary" />
                      </div>

                      <img
                        src={item.src}
                        alt={t('Gallery', item.labelKey)}
                        loading="lazy"
                        className="w-full block object-cover"
                        style={{ minHeight: '220px' }}
                      />

                      {/* Caption (visible on hover) */}
                      <div className="absolute bottom-5 left-5 right-5 z-20 opacity-0 md:group-hover:opacity-100 translate-y-2 md:group-hover:translate-y-0 transition-[opacity,transform] duration-500 ease-out">
                        <p className="text-white font-display text-lg leading-snug mb-2 drop-shadow-md">
                          {item.labelKey.includes(' ') || item.labelKey.includes('é') || item.labelKey.includes('-') ? item.labelKey : t('Gallery', item.labelKey)}
                        </p>
                        <span className="inline-block bg-white text-primary font-body text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                          {getCategoryLabel(item.category)}
                        </span>
                      </div>
                    </div>
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            )}
          </div>
        </FadeIn>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          items={filtered}
          index={lightboxIndex}
          getLabel={(key) => key.includes(' ') || key.includes('é') || key.includes('-') ? key : t('Gallery', key)}
          getCategoryLabel={getCategoryLabel}
          onClose={closeLightbox}
          onPrev={prevPhoto}
          onNext={nextPhoto}
        />
      )}
    </div>
  );
};

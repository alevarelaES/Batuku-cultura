import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { FadeIn } from './components/FadeIn';
import { PatternBg, Confetti, CarnivalMask, CapeVerdeIslands } from './components/Decorations';
import { MotifIcons, MotifGuitar, CapeVerdeStars } from './components/CulturalMotifs';
import { useLanguage } from './contexts/LanguageContext';

type Category = 'all' | 'batuku' | 'events' | 'gastronomy';

const galleryItems = [
  {
    src: 'https://images.unsplash.com/photo-1696236930810-5bd7ea978369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbXVzaWMlMjBmZXN0aXZhbCUyMGNyb3dkJTIwY29sb3JmdWx8ZW58MXx8fHwxNzc0MjcxMTM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'events' as Category,
    labelKey: 'labelFestival',
  },
  {
    src: 'https://images.unsplash.com/photo-1581536678606-3a35fecc8fc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBlJTIwdmVyZGVhbiUyMHdvbWVuJTIwdHJhZGl0aW9uYWwlMjBkcnVtc3xlbnwxfHx8fDE3NzQyNzExMzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'batuku' as Category,
    labelKey: 'labelBatukuRepet',
  },
  {
    src: 'https://images.unsplash.com/photo-1772268337010-03e52e5b9a11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdHJhZGl0aW9uYWwlMjBkYW5jZXxlbnwxfHx8fDE3NzQyNzExMzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'batuku' as Category,
    labelKey: 'labelDanseTrad',
  },
  {
    src: 'https://images.unsplash.com/photo-1672856181212-b5b5a0065a08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBlJTIwdmVyZGUlMjBtdXNpY3xlbnwxfHx8fDE3NzQyNzExMzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'events' as Category,
    labelKey: 'labelNuitKizomba',
  },
  {
    src: 'https://images.unsplash.com/photo-1767293940906-6aa1c13b514b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdHJhZGl0aW9uYWwlMjBkcnVtfGVufDF8fHx8MTc3NDI3MTEzNXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'batuku' as Category,
    labelKey: 'labelPercussions',
  },
  {
    src: 'https://images.unsplash.com/photo-1615476983313-81a3ac618e0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZmVtYWxlJTIwZGFuY2VyfGVufDF8fHx8MTc3NDI2NzI2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'batuku' as Category,
    labelKey: 'labelDanseuse',
  },
  {
    src: 'https://images.unsplash.com/photo-1764670274687-ab62458d6306?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcGVyY3Vzc2lvbiUyMGdyb3VwfGVufDF8fHx8MTc3NDI2NzI2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'events' as Category,
    labelKey: 'labelPercussionsLive',
  },
  {
    src: 'https://images.unsplash.com/photo-1688940738506-acfe9334bf5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwZm9vZCUyMGNhY2h1cGElMjBDYXBlJTIwVmVyZGUlMjB0cmFkaXRpb25hbCUyMGRpc2h8ZW58MXx8fHwxNzc0Mjc1MTYyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'gastronomy' as Category,
    labelKey: 'labelCachupa',
  },
  {
    src: 'https://images.unsplash.com/photo-1702827482556-481adcd68f3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwZ2FzdHJvbm9teSUyMGNvbG9yZnVsJTIwZm9vZCUyMHBsYXR0ZXJ8ZW58MXx8fHwxNzc0Mjc1MTY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'gastronomy' as Category,
    labelKey: 'labelCuisinePalop',
  },
  {
    src: 'https://images.unsplash.com/photo-1647998270792-69ac80570183?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxXZXN0JTIwQWZyaWNhbiUyMGRpbm5lciUyMGZlYXN0JTIwdHJhZGl0aW9uYWwlMjBtZWFsfGVufDF8fHx8MTc3NDI3NTE3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'gastronomy' as Category,
    labelKey: 'labelDinerGala',
  },
];

export const Gallery = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<Category>('all');

  const filters: { key: Category; label: string }[] = [
    { key: 'all', label: t('Gallery', 'filterAll') },
    { key: 'batuku', label: t('Gallery', 'filterBatuku') },
    { key: 'events', label: t('Gallery', 'filterEvents') },
    { key: 'gastronomy', label: t('Gallery', 'filterGastronomy') },
  ];

  const filtered =
    activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter((img) => img.category === activeFilter);

  return (
    <div className="w-full bg-brand-bg min-h-screen py-section px-4 md:px-xl relative overflow-hidden">
      <PatternBg className="text-primary opacity-5 fixed inset-0 z-0" />
      <CarnivalMask className="absolute top-20 right-[-100px] text-accent opacity-20 w-[400px] h-[400px] rotate-[15deg] pointer-events-none z-0" />
      <Confetti className="absolute inset-0 text-deep opacity-10 pointer-events-none z-0" />

      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[150px] md:text-[250px] font-display text-primary opacity-[0.03] pointer-events-none select-none z-0 leading-none tracking-widest">
        MEMORIES
      </div>

      <CapeVerdeStars className="absolute -top-[100px] -left-[100px] text-accent opacity-[0.05] w-[700px] h-[700px] pointer-events-none z-0 animate-[spin_80s_linear_infinite]" />
      <CapeVerdeIslands className="absolute top-1/3 right-10 text-primary opacity-[0.03] w-[400px] h-[250px] pointer-events-none z-0 rotate-12" />

      <div className="relative z-10">
        <FadeIn>
          <h1 className="text-deep text-center mb-6 text-6xl drop-shadow-sm">
            {t('Gallery', 'pageTitle')}
          </h1>
          <p className="text-center font-body text-xl font-medium opacity-90 mb-12 max-w-3xl mx-auto bg-white/50 backdrop-blur-sm p-6 rounded-3xl shadow-lg text-text">
            {t('Gallery', 'pageSubtitle')}
          </p>
        </FadeIn>

        {/* Filter Tabs */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-7 py-3 rounded-full font-body font-bold text-base border-2 transition-all duration-300 ${
                  activeFilter === f.key
                    ? 'bg-primary border-primary text-white shadow-[0_8px_20px_rgba(232,98,10,0.35)] scale-105'
                    : 'border-primary/40 text-primary hover:bg-primary/10 bg-white/70 backdrop-blur-sm'
                }`}
              >
                {f.label}
                {activeFilter === f.key && (
                  <span className="ml-2 bg-white/20 rounded-full px-2 py-0.5 text-xs">
                    {filtered.length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-7xl mx-auto">
            {filtered.length === 0 ? (
              <div className="text-center py-20 opacity-50 font-body text-2xl font-semibold">
                {t('Gallery', 'filterAll')} — 0
              </div>
            ) : (
              <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 1024: 3 }}>
                <Masonry gutter="24px">
                  {filtered.map((item, i) => (
                    <div
                      key={`${item.category}-${i}`}
                      className="overflow-hidden rounded-[30px] group relative cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 border-4 border-white/50"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                      <img
                        src={item.src}
                        alt={item.labelKey}
                        className="w-full block transform group-hover:scale-110 transition-transform duration-700 object-cover"
                        style={{ minHeight: '250px' }}
                      />
                      <div className="absolute bottom-6 left-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                        <p className="text-white font-display text-2xl tracking-widest">
                          {t('Gallery', item.labelKey)}
                        </p>
                        <span className="inline-block mt-2 bg-accent text-deep px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                          {filters.find((f) => f.key === item.category)?.label}
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
    </div>
  );
};
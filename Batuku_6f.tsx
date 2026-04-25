import React from 'react';
import { FadeIn } from './components/FadeIn';
import { PatternBg, Confetti, Djembe, CapeVerdeIslands } from './components/Decorations';
import { CapeVerdeStars } from './components/CulturalMotifs';
import { useLanguage } from './contexts/LanguageContext';

export const Batuku = () => {
  const { t } = useLanguage();

  const timeline = [
    {
      period: t('Batuku', 'timeline1Era'),
      title: t('Batuku', 'timeline1Title'),
      text: t('Batuku', 'timeline1Text'),
      color: 'from-orange/20 to-transparent',
      borderColor: 'border-orange',
      badgeClass: 'bg-orange text-white'
    },
    {
      period: t('Batuku', 'timeline2Era'),
      title: t('Batuku', 'timeline2Title'),
      text: t('Batuku', 'timeline2Text'),
      color: 'from-primary/20 to-transparent',
      borderColor: 'border-primary',
      badgeClass: 'bg-primary text-white'
    },
    {
      period: t('Batuku', 'timeline3Era'),
      title: t('Batuku', 'timeline3Title'),
      text: t('Batuku', 'timeline3Text'),
      color: 'from-green/20 to-transparent',
      borderColor: 'border-green',
      badgeClass: 'bg-green text-white'
    },
  ];

  return (
    <div className="w-full bg-brand-bg min-h-screen relative overflow-hidden">
      <PatternBg className="text-primary opacity-[0.03] fixed inset-0 z-0 pointer-events-none" />

      {/* ─── ACTE 1 : HERO VIBRANT ─── */}
      <section className="relative h-[55vh] md:h-[65vh] flex items-center justify-center overflow-hidden bg-deep">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581536678606-3a35fecc8fc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBlJTIwdmVyZGVhbiUyMHdvbWVuJTIwdHJhZGl0aW9uYWwlMjBkcnVtc3xlbnwxfHx8fDE3NzQyNzExMzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Femmes Cap-verdiennes"
            className="w-full h-full object-cover opacity-60"
          />
          {/* Vibrant gradient overlay instead of dull grey */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#003893]/80 via-[#0B1B3D]/80 to-[#E8751A]/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent opacity-100" />
        </div>
        
        <CapeVerdeStars className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-[0.10] w-[900px] h-[900px] z-10 pointer-events-none animate-[spin_100s_linear_infinite]" />

        <FadeIn className="relative z-20 text-center px-6 max-w-5xl mt-20">
          <span className="inline-block bg-white/20 backdrop-blur-md border border-white/30 text-white font-body font-bold px-6 py-2 rounded-full text-sm md:text-base tracking-[0.3em] uppercase mb-6 shadow-xl">
            {t('Batuku', 'pageSubtitle')}
          </span>
          <h1 className="text-white text-6xl md:text-[120px] font-display tracking-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] mb-4 leading-none">
            {t('Batuku', 'pageTitle')}
          </h1>
        </FadeIn>
      </section>

      {/* ─── ACTE 2 : LA PHOTO DU GROUPE ─── */}
      <section className="py-10 md:py-16 px-6 relative z-10 bg-brand-bg">
        <FadeIn className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-3 font-body font-medium uppercase tracking-[0.3em] text-orange/80 text-sm mb-4">
              <span className="w-8 h-px bg-orange/40 shrink-0"></span>
              Notre Force
            </span>
            <h2 className="text-primary text-4xl md:text-6xl font-display leading-tight">
              Tout le Groupe Batuku
            </h2>
          </div>
          
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white group bg-deep">
            {/* Soft background if image delays loading */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange/20 to-primary/20 mix-blend-overlay z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <img 
              src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2000&auto=format&fit=crop" 
              alt="Photo complète du groupe Batuku"
              className="w-full aspect-video md:aspect-[21/9] object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            {/* Caption on hover */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-[20%] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
              <p className="text-white font-display text-2xl md:text-4xl mb-2">La force du collectif</p>
              <p className="text-white/80 font-body text-base md:text-lg">Unies par le rythme, ensemble pour la culture.</p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ─── ACTE 3 : HÉRITAGE & TIMELINE DYNAMIQUE ─── */}
      <section className="py-10 md:py-16 px-6 relative max-w-6xl mx-auto z-10">
        <Djembe className="absolute top-0 right-0 text-orange opacity-[0.03] w-[500px] h-[500px] pointer-events-none -translate-y-1/4 translate-x-1/4" />
        
        <FadeIn>
          <div className="text-center mb-12 relative z-10">
            <span className="inline-flex items-center gap-3 font-body font-medium uppercase tracking-[0.3em] text-primary/70 text-sm mb-4">
              <span className="w-8 h-px bg-primary/40 shrink-0"></span>
              Notre Histoire
            </span>
            <h2 className="text-primary text-4xl md:text-5xl font-display mb-8">
              {t('Batuku', 'heritageTitle')}
            </h2>
            <div className="bg-white/60 backdrop-blur-sm border border-white p-8 rounded-3xl shadow-lg max-w-3xl mx-auto inline-block">
              <p className="font-body text-brand-text/90 text-xl font-medium leading-relaxed">
                {t('Batuku', 'heritageText')}
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Timeline verticale condensée et colorée */}
        <div className="relative border-l-4 md:border-l-0 md:before:content-[''] md:before:absolute md:before:w-1.5 md:before:h-full md:before:bg-gradient-to-b md:before:from-orange md:before:via-primary md:before:to-green md:before:left-1/2 md:before:-translate-x-1/2 ml-4 md:ml-0 space-y-6">
          {timeline.map((item, idx) => (
            <div
              key={idx}
              className={`relative flex items-center md:w-1/2 ${
                idx % 2 === 0 ? 'md:pr-16 md:mr-auto md:text-right' : 'md:pl-16 md:ml-auto'
              } pl-10`}
            >
              {/* Point Timeline */}
              <div
                className={`absolute w-8 h-8 rounded-full bg-white border-[6px] ${item.borderColor} shadow-[0_0_15px_rgba(0,0,0,0.1)] top-1/2 -translate-y-1/2 ${
                  idx % 2 === 0 ? 'md:-right-4 left-[-18px]' : 'md:-left-4 left-[-18px]'
                } z-10`}
              />

              <FadeIn
                delay={idx * 0.15}
                className={`w-full relative z-10 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-[2.5rem] overflow-hidden border border-black/5 hover:-translate-y-2 transition-transform duration-500 group`}
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${item.color} opacity-20 group-hover:opacity-40 transition-opacity`} />
                <div className="p-8 md:p-10 relative z-10">
                  <span className={`${item.badgeClass} font-body font-bold px-4 py-1.5 rounded-full text-xs md:text-sm tracking-widest uppercase mb-6 inline-block shadow-sm`}>
                    {item.period}
                  </span>
                  <h3 className="text-brand-text text-3xl md:text-4xl font-display leading-tight mb-4">
                    {item.title}
                  </h3>
                  <p className="font-body text-brand-text/70 leading-relaxed text-base md:text-lg">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </section>

      {/* ─── ACTE 4 : L'ÉNERGIE EN MOUVEMENT (GALERIE DENSE & FLUIDE) ─── */}
      <section className="py-16 px-6 bg-gradient-to-b from-[#0B1B3D] to-[#040A18] relative overflow-hidden">
        {/* Soft Glows */}
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-orange/15 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>

        <Confetti className="absolute inset-0 text-white opacity-[0.03] z-0 pointer-events-none" />

        <FadeIn className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-3 font-body font-medium uppercase tracking-[0.3em] text-white/50 text-sm mb-4">
              <span className="w-8 h-px bg-white/20 shrink-0"></span>
              Galerie
            </span>
            <h2 className="text-orange text-5xl md:text-6xl font-display drop-shadow-md">
              {t('Batuku', 'galleryTitle')}
            </h2>
          </div>

          {/* Grille Fluide */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[350px]">
            {/* Image 1 (Large) */}
            <div className="lg:col-span-2 lg:row-span-2 rounded-[2.5rem] overflow-hidden group relative shadow-2xl border border-white/10 bg-deep/50">
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-multiply" />
              <img
                src="https://images.unsplash.com/photo-1772268337010-03e52e5b9a11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80"
                alt="Danse Batuku"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />
            </div>
            
            {/* Image 2 (Small) */}
            <div className="rounded-[2.5rem] overflow-hidden group relative shadow-2xl border border-white/10 bg-deep/50">
              <div className="absolute inset-0 bg-orange/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-multiply" />
              <img
                src="https://images.unsplash.com/photo-1767293940906-6aa1c13b514b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80"
                alt="Tambours africains"
                className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700"
              />
            </div>

            {/* Image 3 (Small) */}
            <div className="rounded-[2.5rem] overflow-hidden group relative shadow-2xl border border-white/10 bg-deep/50">
              <div className="absolute inset-0 bg-deep/50 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay" />
              <img
                src="https://images.unsplash.com/photo-1696236930810-5bd7ea978369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80"
                alt="Fête musicale"
                className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700"
              />
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
};
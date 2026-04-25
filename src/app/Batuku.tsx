import React from 'react';
import { FadeIn } from './components/FadeIn';
import { PatternBg, Confetti, Djembe, CapeVerdeIslands } from './components/Decorations';
import { CapeVerdeStars } from './components/CulturalMotifs';
import { useLanguage } from './contexts/LanguageContext';

const PHOTOS = [
  '/groupe%20batuku/groupo%20batuku%203.jpeg',
  '/groupe%20batuku/groupo%20batuku%202.jpeg',
  '/groupe%20batuku/groupo%20batuku%201.jpeg',
];

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
      <section className="relative min-h-[72vh] md:min-h-[78vh] flex items-center justify-center overflow-hidden bg-deep">
        <div className="absolute inset-0 z-0">
          <img
            src="/Sections_fonds/Batuku_1.png"
            alt=""
            fetchPriority="high"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep/50 via-deep/75 to-deep" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent opacity-100" />
        </div>

        <CapeVerdeStars className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-[0.10] w-[900px] h-[900px] z-10 pointer-events-none animate-[spin_100s_linear_infinite]" />

        <FadeIn className="relative z-20 text-center px-6 max-w-3xl mt-16">
          <p className="text-orange/80 font-body font-bold text-[10px] uppercase tracking-[0.4em] mb-5">
            {t('Batuku', 'ourStrengthLabel')}
          </p>
          <h1 className="text-white text-6xl md:text-[120px] font-display tracking-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] mb-6 leading-none">
            {t('Batuku', 'pageTitle')}
          </h1>
          <p className="text-white/70 text-base md:text-xl font-body leading-relaxed">
            {t('Batuku', 'pageSubtitle')}
          </p>
        </FadeIn>
      </section>

      {/* ─── ACTE 2 : LA PHOTO DU GROUPE ─── */}
      <section className="py-10 md:py-16 px-6 relative z-10 bg-brand-bg">
        <FadeIn className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-3 font-body font-medium uppercase tracking-[0.3em] text-orange/80 text-sm mb-4">
              <span className="w-8 h-px bg-orange/40 shrink-0"></span>
              {t('Batuku', 'ourStrengthLabel')}
            </span>
            <h2 className="text-primary text-4xl md:text-6xl font-display leading-tight">
              {t('Batuku', 'fullGroupTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center max-w-5xl mx-auto">
            {PHOTOS.map((src, i) => (
              <div
                key={i}
                className={`relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white group bg-deep 
                ${i === 1 ? 'md:-mt-10 md:mb-10 shadow-[0_20px_40px_rgba(232,117,26,0.15)]' : ''}`}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-orange/20 to-primary/20 mix-blend-overlay z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img
                  src={src}
                  alt={`Groupe Batuku ${i + 1}`}
                  className={`w-full ${i === 1 ? 'aspect-[3/4]' : 'aspect-[9/16]'} object-cover object-top transition-transform duration-700`}
                />
              </div>
            ))}
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
              {t('Batuku', 'ourHistoryLabel')}
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
              className={`relative flex items-center md:w-1/2 ${idx % 2 === 0 ? 'md:pr-16 md:mr-auto md:text-right' : 'md:pl-16 md:ml-auto'
                } pl-10`}
            >
              {/* Point Timeline */}
              <div
                className={`absolute w-8 h-8 rounded-full bg-white border-[6px] ${item.borderColor} shadow-[0_0_15px_rgba(0,0,0,0.1)] top-1/2 -translate-y-1/2 ${idx % 2 === 0 ? 'md:-right-4 left-[-18px]' : 'md:-left-4 left-[-18px]'
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
              {t('Batuku', 'galleryLabel')}
            </span>
            <h2 className="text-orange text-5xl md:text-6xl font-display drop-shadow-md">
              {t('Batuku', 'galleryTitle')}
            </h2>
          </div>

          {/* Grille Flex pour images portrait */}
          <div className="flex flex-col md:flex-row h-auto md:h-[580px] gap-6 items-stretch">
            <div className="md:flex-1 h-[400px] md:h-auto rounded-[2.5rem] overflow-hidden relative shadow-2xl border border-white/10 bg-deep/50">
              <img
                src={PHOTOS[0]}
                alt="Groupe Batuku"
                className="w-full h-full object-cover object-top transition-transform duration-700"
              />
            </div>

            <div className="md:flex-[1.4] h-[450px] md:h-auto rounded-[2.5rem] overflow-hidden relative shadow-2xl border border-white/15 bg-deep/50 md:-mt-4 md:mb-4">
              <img
                src={PHOTOS[1]}
                alt="Groupe Batuku"
                className="w-full h-full object-cover object-top transition-transform duration-700"
              />
            </div>

            <div className="md:flex-1 h-[400px] md:h-auto rounded-[2.5rem] overflow-hidden relative shadow-2xl border border-white/10 bg-deep/50">
              <img
                src={PHOTOS[2]}
                alt="Groupe Batuku"
                className="w-full h-full object-cover object-top transition-transform duration-700"
              />
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
};

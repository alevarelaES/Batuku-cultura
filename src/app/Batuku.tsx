import React from 'react';
import { FadeIn } from './components/FadeIn';
import { FeatherLarge, FeatherMedium, LeafMonstera, LeafPalm, Djembe, PatternBg, Confetti, Guitar, MusicNotes, CapeVerdeIslands } from './components/Decorations';
import { MotifDrum, MotifTribal, CapeVerdeStars } from './components/CulturalMotifs';
import { Button } from './components/Button';
import { useLanguage } from './contexts/LanguageContext';
import { NavLink } from 'react-router';
import { ArrowRight, Music } from 'lucide-react';

export const Batuku = () => {
  const { t } = useLanguage();

  const timeline = [
    {
      period: t('Batuku', 'timeline1Era'),
      title: t('Batuku', 'timeline1Title'),
      text: t('Batuku', 'timeline1Text'),
    },
    {
      period: t('Batuku', 'timeline2Era'),
      title: t('Batuku', 'timeline2Title'),
      text: t('Batuku', 'timeline2Text'),
    },
    {
      period: t('Batuku', 'timeline3Era'),
      title: t('Batuku', 'timeline3Title'),
      text: t('Batuku', 'timeline3Text'),
    },
  ];

  return (
    <div className="w-full bg-brand-bg min-h-screen relative">
      {/* General Pattern */}
      <PatternBg className="text-primary opacity-5 fixed inset-0 z-0" />

      {/* Hero Immersif */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <CapeVerdeStars className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-20 w-[800px] h-[800px] z-10 pointer-events-none animate-[spin_120s_linear_infinite]" />
        <CapeVerdeIslands className="absolute top-1/2 right-0 -translate-y-1/2 text-white opacity-[0.06] w-[600px] h-[400px] z-10 pointer-events-none" />
        
        <Confetti className="absolute inset-0 text-white opacity-20 z-10 pointer-events-none" />

        <div className="absolute inset-0 bg-deep z-0">
          <img
            src="https://images.unsplash.com/photo-1581536678606-3a35fecc8fc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBlJTIwdmVyZGVhbiUyMHdvbWVuJTIwdHJhZGl0aW9uYWwlMjBkcnVtc3xlbnwxfHx8fDE3NzQyNzExMzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Femmes Cap-verdiennes Tambours"
            className="w-full h-full object-cover opacity-50 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep/80 via-primary/50 to-accent/40 mix-blend-multiply" />
        </div>

        <FadeIn className="relative z-20 text-center px-4 max-w-5xl">
          <h1 className="text-accent text-7xl md:text-[140px] tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] mb-6 leading-none">
            {t('Batuku', 'pageTitle')}
          </h1>
          <p className="text-white font-body text-2xl md:text-4xl uppercase tracking-widest font-bold opacity-90 drop-shadow-lg bg-black/30 inline-block px-8 py-4 rounded-full backdrop-blur-sm border border-white/20">
            {t('Batuku', 'pageSubtitle')}
          </p>
        </FadeIn>
      </section>

      {/* Histoire & Timeline */}
      <section className="py-section px-4 md:px-xl relative max-w-5xl mx-auto z-10">
        <FadeIn>
          <div className="text-center mb-24 relative z-10">
            <h2 className="text-primary mb-6 text-5xl md:text-6xl">{t('Batuku', 'heritageTitle')}</h2>
            <p className="font-body opacity-90 text-xl md:text-2xl max-w-3xl mx-auto font-medium text-text bg-white/50 p-6 rounded-3xl backdrop-blur-sm shadow-xl">
              {t('Batuku', 'heritageText')}
            </p>
          </div>
        </FadeIn>

        {/* Timeline verticale */}
        <div className="relative border-l-4 md:border-l-0 md:before:content-[''] md:before:absolute md:before:w-2 md:before:h-full md:before:bg-gradient-to-b md:before:from-primary md:before:via-accent md:before:to-deep md:before:left-1/2 md:before:-translate-x-1/2 ml-4 md:ml-0 space-y-24">
          {timeline.map((item, idx) => (
            <div
              key={idx}
              className={`relative flex items-center md:w-1/2 ${
                idx % 2 === 0 ? 'md:pr-16 md:mr-auto md:text-right' : 'md:pl-16 md:ml-auto'
              } pl-12`}
            >
              <div
                className={`absolute w-10 h-10 rounded-full bg-accent border-4 border-white shadow-[0_0_20px_rgba(245,184,0,0.6)] top-1/2 -translate-y-1/2 ${
                  idx % 2 === 0 ? 'md:-right-5 left-[-22px]' : 'md:-left-5 left-[-22px]'
                } z-10`}
              />

              {idx % 2 === 0 ? null : null}

              <FadeIn
                delay={idx * 0.2}
                className="w-full relative z-10 bg-white/90 backdrop-blur-md p-10 rounded-[40px] shadow-2xl border border-white hover:scale-105 transition-transform duration-300"
              >
                <span className="bg-primary text-white font-body font-bold px-6 py-2 rounded-full text-xl mb-6 inline-block shadow-md">
                  {item.period}
                </span>
                <h3 className="text-deep mb-4 text-4xl leading-tight">{item.title}</h3>
                <p className="font-body opacity-80 leading-relaxed text-lg font-medium">{item.text}</p>
              </FadeIn>
            </div>
          ))}
        </div>
      </section>

      {/* Galerie Danse */}
      <section className="py-section px-4 md:px-xl bg-deep relative overflow-hidden mt-10">
        <Djembe className="absolute top-1/2 right-0 text-primary opacity-10 rotate-[-15deg] w-96 h-96 z-0 pointer-events-none -translate-y-1/2" />
        <Guitar className="absolute bottom-10 right-24 text-accent opacity-[0.08] w-16 h-32 z-0 pointer-events-none rotate-[15deg]" />
        <MusicNotes className="absolute top-20 right-1/4 text-white opacity-[0.06] w-32 h-32 z-0 pointer-events-none" />
        <Confetti className="absolute inset-0 text-white opacity-10 z-0 pointer-events-none" />

        <FadeIn className="relative z-10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-white text-center mb-16 text-5xl md:text-6xl drop-shadow-md">
              {t('Batuku', 'galleryTitle')}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:h-[800px]">
              <div className="h-[400px] lg:h-full rounded-[40px] overflow-hidden group relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-white/10">
                <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-multiply" />
                <img
                  src="https://images.unsplash.com/photo-1772268337010-03e52e5b9a11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdHJhZGl0aW9uYWwlMjBkYW5jZXxlbnwxfHx8fDE3NzQyNzExMzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Danse 1"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="grid grid-rows-2 gap-8 h-[800px] lg:h-full">
                <div className="rounded-[40px] overflow-hidden group relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-white/10">
                  <div className="absolute inset-0 bg-accent/30 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-multiply" />
                  <img
                    src="https://images.unsplash.com/photo-1767293940906-6aa1c13b514b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdHJhZGl0aW9uYWwlMjBkcnVtfGVufDF8fHx8MTc3NDI3MTEzNXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Danse 2"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-[40px] overflow-hidden group relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-white/10">
                  <div className="absolute inset-0 bg-deep/30 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-multiply" />
                  <img
                    src="https://images.unsplash.com/photo-1696236930810-5bd7ea978369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbXVzaWMlMjBmZXN0aXZhbCUyMGNyb3dkJTIwY29sb3JmdWx8ZW58MXx8fHwxNzc0MjcxMTM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Danse 3"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* REJOINDRE UN ATELIER — Section manquante ajoutée */}
      <section className="bg-accent py-section px-4 md:px-xl relative overflow-hidden">
        {/* Décorations */}
        <PatternBg className="text-deep opacity-10" />
        <Confetti className="absolute inset-0 text-deep opacity-20 pointer-events-none" />
        <Guitar className="absolute top-10 right-20 text-deep opacity-[0.08] w-24 h-48 pointer-events-none rotate-[10deg]" />
        <MusicNotes className="absolute bottom-10 left-1/4 text-deep opacity-[0.08] w-48 h-48 pointer-events-none" />

        {/* Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] md:text-[300px] font-display text-deep opacity-[0.06] pointer-events-none select-none leading-none tracking-tighter">
          BATUKU
        </div>

        <FadeIn className="relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Texte */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-deep rounded-full flex items-center justify-center shadow-xl">
                    <Music size={28} className="text-accent" />
                  </div>
                  <span className="font-display text-deep text-2xl tracking-widest uppercase">
                    Ateliers
                  </span>
                </div>
                <h2 className="text-deep text-5xl md:text-6xl mb-6 leading-none">
                  {t('Batuku', 'workshopTitle')}
                </h2>
                <p className="font-body text-deep/80 text-xl leading-relaxed mb-10">
                  {t('Batuku', 'workshopText')}
                </p>
                <NavLink to="/contact">
                  <Button
                    variant="primary"
                    className="bg-deep text-white hover:bg-white hover:text-deep text-xl px-10 py-5 shadow-[0_10px_30px_rgba(92,45,130,0.4)] border-2 border-deep"
                  >
                    {t('Batuku', 'workshopBtn')}
                    <ArrowRight size={22} />
                  </Button>
                </NavLink>
              </div>

              {/* Infos pratiques */}
              <div className="bg-deep/10 rounded-[30px] p-8 border-2 border-deep/20 backdrop-blur-sm">
                <h3 className="text-deep text-3xl mb-6">{t('Batuku', 'infoTitle')}</h3>
                <ul className="space-y-4">
                  {[
                    { icon: '🗓', label: t('Batuku', 'infoSaturdayLabel'), detail: t('Batuku', 'infoSaturdayDetail') },
                    { icon: '📍', label: t('Batuku', 'infoLocationLabel'), detail: t('Batuku', 'infoAddressDetail') },
                    { icon: '👥', label: t('Batuku', 'infoLevelLabel'), detail: t('Batuku', 'infoLevelDetail') },
                    { icon: '💰', label: t('Batuku', 'infoCostLabel'), detail: t('Batuku', 'infoCostDetail') },
                  ].map((info, idx) => (
                    <li key={idx} className="flex items-start gap-4 bg-white/40 p-4 rounded-2xl">
                      <span className="text-2xl">{info.icon}</span>
                      <div>
                        <span className="font-body font-bold text-deep block">{info.label}</span>
                        <span className="font-body text-deep/70 text-sm">{info.detail}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
};
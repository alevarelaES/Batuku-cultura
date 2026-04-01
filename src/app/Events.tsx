import React, { useState } from 'react';
import { FadeIn } from './components/FadeIn';
import { EventCard } from './components/EventCard';
import { Button } from './components/Button';
import { MapPin, Ticket, Calendar } from 'lucide-react';
import {
  FeatherLarge, FeatherMedium, Trumpet, Confetti, Guitar, MusicNotes, KentePattern, CapeVerdeIslands
} from './components/Decorations';
import { MotifGuitar, MotifIcons, CapeVerdeStars } from './components/CulturalMotifs';
import { useLanguage } from './contexts/LanguageContext';
const imgFestival = 'https://images.unsplash.com/photo-1581536678606-3a35fecc8fc5?w=1080&q=80';

const MUSIC_IMG = 'https://images.unsplash.com/photo-1672856181212-b5b5a0065a08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBlJTIwdmVyZGUlMjBtdXNpY3xlbnwxfHx8fDE3NzQyNzExMzV8MA&ixlib=rb-4.1.0&q=80&w=1080';
const DANCE_IMG = 'https://images.unsplash.com/photo-1772268337010-03e52e5b9a11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdHJhZGl0aW9uYWwlMjBkYW5jZXxlbnwxfHx8fDE3NzQyNzExMzV8MA&ixlib=rb-4.1.0&q=80&w=1080';
const GALA_IMG = 'https://images.unsplash.com/photo-1696236930810-5bd7ea978369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbXVzaWMlMjBmZXN0aXZhbCUyMGNyb3dkJTIwY29sb3JmdWx8ZW58MXx8fHwxNzc0MjcxMTM1fDA&ixlib=rb-4.1.0&q=80&w=1080';

// Filter dot colors (internal keys stay in FR as category IDs)
const FILTER_DOT: Record<string, string> = {
  Festival: 'bg-accent',
  Danse: 'bg-cv',
  Atelier: 'bg-nature',
  Gastronomie: 'bg-primary',
};

type FilterKey = 'Tous' | 'Festival' | 'Danse' | 'Atelier' | 'Gastronomie';

export const Events = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<FilterKey>('Tous');

  // PALOP colors with translated labels
  const PALOP_COLORS = {
    angola:    { dot: 'bg-primary',  text: 'text-primary',  label: t('Events', 'palopAngola') },
    capvert:   { dot: 'bg-cv',       text: 'text-cv',       label: t('Events', 'palopCapVert') },
    bissau:    { dot: 'bg-accent',   text: 'text-accent',   label: t('Events', 'palopGuineeBissau') },
    mozambique:{ dot: 'bg-nature',   text: 'text-nature',   label: t('Events', 'palopMozambique') },
    santome:   { dot: 'bg-deep',     text: 'text-deep',     label: t('Events', 'palopSaoTome') },
  };

  const filterLabels: { key: FilterKey; label: string }[] = [
    { key: 'Tous',       label: t('Events', 'filterAll') },
    { key: 'Festival',   label: t('Events', 'filterFestival') },
    { key: 'Danse',      label: t('Events', 'filterDance') },
    { key: 'Atelier',    label: t('Events', 'filterWorkshop') },
    { key: 'Gastronomie',label: t('Events', 'filterGastronomy') },
  ];

  const events = [
    {
      image: MUSIC_IMG,
      date: t('Events', 'event1Date'),
      title: t('Events', 'event1Title'),
      location: t('Events', 'event1Location'),
      badges: ['Danse'],
      type: 'Danse',
      countries: [PALOP_COLORS.angola, PALOP_COLORS.capvert],
    },
    {
      image: DANCE_IMG,
      date: t('Events', 'event2Date'),
      title: t('Events', 'event2Title'),
      location: t('Events', 'event2Location'),
      badges: ['Atelier', 'Danse'],
      type: 'Atelier',
      countries: [PALOP_COLORS.capvert],
    },
    {
      image: GALA_IMG,
      date: t('Events', 'event3Date'),
      title: t('Events', 'event3Title'),
      location: t('Events', 'event3Location'),
      badges: ['Gastronomie'],
      type: 'Gastronomie',
      countries: [PALOP_COLORS.angola, PALOP_COLORS.capvert, PALOP_COLORS.bissau, PALOP_COLORS.mozambique, PALOP_COLORS.santome],
    },
  ];

  const filteredEvents =
    filter === 'Tous'
      ? events
      : events.filter((e) => e.type === filter || e.badges.includes(filter));

  const currentFilterLabel = filter === 'Tous'
    ? t('Events', 'allEventsTitle')
    : filterLabels.find(f => f.key === filter)?.label || filter;

  return (
    <div className="w-full bg-brand-bg min-h-screen pb-section">

      {/* ── HERO EVENT PHARE ── */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #E8620A 0%, #C04B00 60%, #A03A00 100%)' }}>
        {/* Motifs décoratifs */}
        <CapeVerdeStars className="absolute -top-20 -left-20 text-white opacity-10 w-[600px] h-[600px] pointer-events-none z-0 animate-[spin_60s_linear_infinite]" />
        <CapeVerdeIslands className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-[0.05] w-[800px] h-[500px] pointer-events-none z-0" />
        <KentePattern className="text-white opacity-[0.06] relative z-0" />
        <Guitar className="absolute top-10 right-[45%] text-accent opacity-[0.12] w-20 h-40 pointer-events-none z-0 rotate-[20deg]" />
        <MusicNotes className="absolute bottom-10 left-[40%] text-white opacity-[0.08] w-48 h-48 pointer-events-none z-0" />
        <Trumpet className="absolute top-1/2 left-5 text-accent opacity-[0.12] w-32 h-32 pointer-events-none z-0 -translate-y-1/2 rotate-[-30deg]" />
        <Confetti className="absolute inset-0 text-accent opacity-15 pointer-events-none z-0" />

        {/* Glow blobs */}
        <div className="absolute top-0 right-1/3 w-[600px] h-[400px] rounded-full bg-accent opacity-10 blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full bg-white opacity-5 blur-[80px] pointer-events-none z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-xl pt-16 pb-24">
          {/* PALOP flag strip en haut */}
          <div className="flex gap-3 mb-10 flex-wrap">
            {Object.values(PALOP_COLORS).map((c, i) => (
              <span
                key={i}
                className={`${c.dot} text-white font-display text-sm px-4 py-1.5 rounded-full tracking-widest shadow-md`}
              >
                {c.label}
              </span>
            ))}
          </div>

          {/* Card principale */}
          <div className="flex flex-col lg:flex-row gap-10 xl:gap-16 items-center bg-white/10 p-8 md:p-12 rounded-[40px] backdrop-blur-md border-2 border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">

            {/* Image gauche */}
            <div className="w-full lg:w-[45%] shrink-0 relative">
              {/* Tilt background */}
              <div className="absolute inset-0 bg-accent rounded-[20px] transform -rotate-3 scale-[1.04] z-0 shadow-[0_15px_30px_rgba(245,184,0,0.4)]" />
              <img
                src={imgFestival}
                alt="Festival Cultura PALOPs Suiça"
                className="relative z-10 w-full rounded-[20px] shadow-2xl object-cover h-[360px] md:h-[420px] border-4 border-white/20"
              />
              {/* Badge flottant sur l'image */}
              <div className="absolute -top-4 -right-4 z-20 bg-accent text-deep font-display text-xl px-5 py-2 rounded-full shadow-[0_0_20px_rgba(245,184,0,0.6)] rotate-3">
                2026
              </div>
            </div>

            {/* Texte droit */}
            <div className="w-full lg:flex-1 min-w-0 text-white">
              <span className="bg-accent text-deep px-5 py-2 rounded-full font-body font-bold text-sm uppercase tracking-widest inline-block mb-6 shadow-[0_0_15px_rgba(245,184,0,0.5)]">
                {t('Events', 'featuredBadge')}
              </span>

              <h1 className="text-white mb-6 text-5xl md:text-6xl xl:text-7xl leading-none drop-shadow-lg">
                CULTURA<br/>PALOPS<br/>SUIÇA 2026
              </h1>

              <p className="font-body text-xl opacity-90 mb-8 leading-relaxed">
                {t('Events', 'featuredText')}
              </p>

              {/* Infos box */}
              <div className="flex flex-col gap-4 mb-10 font-body font-semibold bg-black/20 p-6 rounded-2xl border border-white/10 w-full max-w-xs">
                <div className="flex items-center gap-4 text-lg">
                  <MapPin size={22} className="text-accent shrink-0" />
                  <span>{t('Events', 'festivalCity')}</span>
                </div>
                <div className="flex items-center gap-4 text-lg">
                  <Ticket size={22} className="text-accent shrink-0" />
                  <span>{t('Events', 'festivalPass')}</span>
                </div>
                <div className="flex items-center gap-4 text-lg">
                  <Calendar size={22} className="text-accent shrink-0" />
                  <span>{t('Events', 'festivalDate')}</span>
                </div>
              </div>

              <Button
                variant="primary"
                className="bg-accent text-deep hover:bg-white hover:text-primary text-xl px-10 py-5 shadow-[0_10px_30px_rgba(245,184,0,0.5)] border-2 border-accent font-bold"
              >
                {t('Events', 'reserveBtn')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── SÉPARATEUR BANDE DE COULEURS PALOP ── */}
      <div className="flex h-2 w-full">
        {['bg-cv', 'bg-primary', 'bg-accent', 'bg-nature', 'bg-deep'].map((c, i) => (
          <div key={i} className={`flex-1 ${c}`} />
        ))}
      </div>

      {/* ── FILTRES & LISTE ── */}
      <section className="px-4 md:px-xl max-w-7xl mx-auto mt-20 relative">
        {/* Décorations section liste */}
        <Trumpet className="absolute -top-10 -left-10 text-accent opacity-[0.12] rotate-45 w-64 h-64 -z-10 pointer-events-none" />
        <Guitar className="absolute top-0 right-10 text-primary opacity-[0.07] w-20 h-40 -z-10 pointer-events-none -rotate-12" />
        <MusicNotes className="absolute bottom-20 left-10 text-nature opacity-[0.07] w-48 h-48 -z-10 pointer-events-none" />

        <FadeIn className="relative z-10">
          {/* Titre section */}
          <h2 className="text-primary text-center text-5xl mb-10">
            {currentFilterLabel}
          </h2>

          {/* Filtres avec couleurs PALOP */}
          <div className="flex flex-wrap gap-4 mb-16 justify-center">
            {filterLabels.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-7 py-3 rounded-full font-body font-bold text-base border-2 transition-all duration-300 flex items-center gap-2 ${
                  filter === f.key
                    ? 'bg-primary border-primary text-white shadow-[0_8px_20px_rgba(232,98,10,0.35)] scale-105'
                    : 'border-primary/40 text-primary hover:bg-primary/10 bg-white/80 backdrop-blur-sm'
                }`}
              >
                {f.key !== 'Tous' && (
                  <span className={`w-3 h-3 rounded-full ${FILTER_DOT[f.key] ?? 'bg-primary'} inline-block`} />
                )}
                {f.label}
              </button>
            ))}
          </div>

          {/* Grille événements */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredEvents.map((event, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="relative">
                  {/* PALOP country dots on card */}
                  <div className="absolute -top-3 right-4 z-20 flex gap-1.5">
                    {event.countries.map((c, ci) => (
                      <span
                        key={ci}
                        title={c.label}
                        className={`w-5 h-5 rounded-full ${c.dot} border-2 border-white shadow-md`}
                      />
                    ))}
                  </div>
                  <EventCard
                    image={event.image}
                    date={event.date}
                    title={event.title}
                    location={event.location}
                    badges={event.badges}
                  />
                </div>
              </FadeIn>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-20 opacity-50 font-body text-2xl font-semibold">
              {t('Events', 'noEvents')}
            </div>
          )}
        </FadeIn>
      </section>
    </div>
  );
};

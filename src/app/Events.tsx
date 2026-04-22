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
import { events, formatEventDate } from '../data/events';

const imgFestival = events.find((e) => e.featured)?.image ?? '';

// Filter dot colors (internal keys stay in FR as category IDs)
const FILTER_DOT: Record<string, string> = {
  Festival: 'bg-accent',
  Danse: 'bg-cv',
  Atelier: 'bg-nature',
  Gastronomie: 'bg-primary',
};

type FilterKey = 'Tous' | 'Festival' | 'Danse' | 'Atelier' | 'Gastronomie';

export const Events = () => {
  const { t, lang } = useLanguage();
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

  const tagToFilter: Record<string, FilterKey> = {
    festival: 'Festival',
    danse: 'Danse',
    atelier: 'Atelier',
    gastronomie: 'Gastronomie',
  };

  const listEvents = events
    .filter((e) => !e.featured)
    .map((e) => ({
      id: e.id,
      image: e.image ?? '',
      date: formatEventDate(e.date, lang),
      title: e.title[lang],
      location: e.location,
      badges: [tagToFilter[e.tag]],
      type: tagToFilter[e.tag],
      countries: (e.countries ?? []).map((c) => PALOP_COLORS[c]).filter(Boolean),
    }));

  const filteredEvents =
    filter === 'Tous'
      ? listEvents
      : listEvents.filter((e) => e.type === filter || e.badges.includes(filter));

  const currentFilterLabel = filter === 'Tous'
    ? t('Events', 'allEventsTitle')
    : filterLabels.find(f => f.key === filter)?.label || filter;

  return (
    <div className="w-full bg-brand-bg min-h-screen pb-section">

      {/* ── HERO EVENT PHARE ── */}
      <section className="relative overflow-hidden bg-deep">
        {/* Motifs décoratifs */}
        <CapeVerdeStars className="absolute -top-20 -left-20 text-white opacity-10 w-[600px] h-[600px] pointer-events-none z-0 animate-[spin_60s_linear_infinite]" />
        <CapeVerdeIslands className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-[0.05] w-[800px] h-[500px] pointer-events-none z-0" />
        <KentePattern className="absolute inset-0 text-white opacity-[0.06] pointer-events-none z-0" />
        <Guitar className="absolute top-10 right-[45%] text-accent opacity-[0.12] w-20 h-40 pointer-events-none z-0 rotate-[20deg]" />
        <MusicNotes className="absolute bottom-10 left-[40%] text-white opacity-[0.08] w-48 h-48 pointer-events-none z-0" />
        <Trumpet className="absolute top-1/2 left-5 text-accent opacity-[0.12] w-32 h-32 pointer-events-none z-0 -translate-y-1/2 rotate-[-30deg]" />
        <Confetti className="absolute inset-0 text-accent opacity-15 pointer-events-none z-0" />

        {/* Glow blobs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-primary/20 blur-[150px] pointer-events-none z-0" />
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px] pointer-events-none z-0 -translate-y-1/2 -ml-32" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-xl pb-12 md:pb-16">
          {/* Titre de page — design premium */}
          <div className="text-center pt-3 pb-6 relative">
            <p className="font-body text-white/50 uppercase tracking-[0.3em] text-xs font-bold mb-2">
              {t('Events', 'featuredBadge')}
            </p>
            <h1 className="font-display text-5xl md:text-6xl text-white drop-shadow-lg tracking-wide bg-gradient-to-r from-yellow via-white to-yellow bg-clip-text text-transparent">
              {t('Events', 'pageTitle')}
            </h1>
            <div className="flex items-center justify-center gap-3 mt-3">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-yellow/70 block" />
              <span className="w-2 h-2 rounded-full bg-yellow shadow-[0_0_8px_rgba(245,184,0,0.8)]" />
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-yellow/70 block" />
            </div>
          </div>
          {/* Card principale */}
          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-center bg-white/10 p-6 md:p-10 rounded-[40px] backdrop-blur-md border-2 border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">

            {/* Image gauche */}
            <div className="w-full lg:w-[45%] shrink-0 relative">
              {/* Tilt background */}
              <div className="absolute inset-0 bg-yellow rounded-[20px] transform -rotate-3 scale-[1.04] z-0 shadow-[0_15px_30px_rgba(245,184,0,0.4)]" />
              <img
                src={imgFestival}
                alt="Festival Cultura PALOPs Suiça"
                className="relative z-10 w-full rounded-[20px] shadow-2xl object-cover h-[360px] md:h-[420px] border-4 border-white/20"
              />
            </div>

            {/* Texte droit */}
            <div className="w-full lg:flex-1 min-w-0 text-white">
              <span className="bg-yellow text-deep px-5 py-2 rounded-full font-body font-bold text-sm uppercase tracking-widest inline-block mb-6 shadow-[0_0_15px_rgba(245,184,0,0.5)]">
                {t('Events', 'featuredBadge')}
              </span>

              <h1 className="text-white mb-6 text-5xl md:text-6xl xl:text-7xl leading-none drop-shadow-lg">
                CULTURA<br/>PALOPS<br/>SUIÇA 2026
              </h1>

              <p className="font-body text-xl opacity-90 mb-8 leading-relaxed">
                {t('Events', 'featuredText')}
              </p>

              {/* Infos box */}
              <div className="flex flex-col gap-4 mb-10 font-body font-semibold bg-white/5 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] border border-white/10 w-full max-w-sm shadow-2xl">
                <div className="flex items-center gap-4 text-white hover:text-white/80 transition-colors">
                  <MapPin size={22} className="text-primary shrink-0" />
                  <span className="text-sm md:text-base tracking-wide">{t('Events', 'festivalCity')}</span>
                </div>
                <div className="flex items-center gap-4 text-white hover:text-white/80 transition-colors">
                  <Ticket size={22} className="text-primary shrink-0" />
                  <span className="text-sm md:text-base tracking-wide">{t('Events', 'festivalPass')}</span>
                </div>
                <div className="flex items-center gap-4 text-white hover:text-white/80 transition-colors">
                  <Calendar size={22} className="text-primary shrink-0" />
                  <span className="text-sm md:text-base tracking-wide">{t('Events', 'festivalDate')}</span>
                </div>
              </div>

              <Button
                variant="primary"
                className="bg-primary hover:bg-orange text-white text-base md:text-lg px-8 py-4 shadow-[0_10px_30px_rgba(232,98,10,0.5)] font-bold rounded-full w-full max-w-sm transition-all focus:ring-4 focus:ring-primary/20"
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
      <section className="px-4 md:px-xl max-w-7xl mx-auto mt-20 relative pb-32 md:pb-40">
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
                className={`px-6 md:px-8 py-3 rounded-full font-body font-bold text-sm md:text-base border transition-all duration-300 flex items-center gap-2 ${
                  filter === f.key
                    ? 'bg-primary border-primary text-white shadow-[0_8px_20px_rgba(232,98,10,0.35)] scale-105'
                    : 'border-black/5 text-brand-text/70 hover:bg-white hover:border-black/10 hover:shadow-md bg-white/60 backdrop-blur-sm'
                }`}
              >
                {f.key !== 'Tous' && (
                  <span className={`w-2.5 h-2.5 rounded-full ${FILTER_DOT[f.key] ?? 'bg-primary'} inline-block`} />
                )}
                <span className="mb-0.5">{f.label}</span>
              </button>
            ))}
          </div>

          {/* Grille événements */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredEvents.map((event, idx) => (
              <FadeIn key={event.id} delay={idx * 0.1}>
                <EventCard
                  image={event.image}
                  date={event.date}
                  title={event.title}
                  location={event.location}
                  badges={event.badges}
                />
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

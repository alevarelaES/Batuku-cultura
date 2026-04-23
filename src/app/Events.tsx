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
      <section className="relative overflow-hidden bg-deep lg:h-[calc(100vh-5rem)]">
        {/* Motifs décoratifs */}
        <CapeVerdeStars className="absolute -top-20 -left-20 text-white opacity-10 w-[600px] h-[600px] pointer-events-none z-0 animate-[spin_60s_linear_infinite]" />
        <CapeVerdeIslands className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-[0.05] w-[800px] h-[500px] pointer-events-none z-0" />
        <KentePattern className="absolute inset-0 text-white opacity-[0.06] pointer-events-none z-0" />
        <Guitar className="absolute top-10 right-[45%] text-accent opacity-[0.12] w-20 h-40 pointer-events-none z-0 rotate-[20deg]" />
        <MusicNotes className="absolute bottom-10 left-[40%] text-white opacity-[0.08] w-48 h-48 pointer-events-none z-0" />
        <Trumpet className="absolute top-1/2 left-5 text-accent opacity-[0.12] w-32 h-32 pointer-events-none z-0 -translate-y-1/2 rotate-[-30deg]" />
        <Confetti className="absolute inset-0 text-accent opacity-15 pointer-events-none z-0" />

        {/* Glow blobs — vivid */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-orange/30 blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-yellow/20 blur-[100px] pointer-events-none z-0" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] rounded-full bg-green/20 blur-[120px] pointer-events-none z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-4 pb-4 flex flex-col lg:h-full">
          {/* Card principale */}
          <div className="flex flex-col lg:flex-row gap-0 items-stretch rounded-[40px] border-2 border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.5)] lg:flex-1 lg:min-h-0 overflow-hidden">

            {/* Bande PALOP en haut (mobile) / gauche (desktop) */}
            <div className="flex lg:flex-col h-2 lg:h-auto lg:w-2 shrink-0">
              {['#1A5CB5','#E8620A','#F5B800','#2D7A5E','#4A7FD4'].map((c) => (
                <div key={c} className="flex-1" style={{ backgroundColor: c }} />
              ))}
            </div>

            {/* Image gauche — pleine hauteur */}
            <div className="w-full lg:w-[44%] shrink-0 relative min-h-[300px] lg:min-h-0">
              <img
                src={imgFestival}
                alt="Festival Cultura PALOPs Suiça"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0B1B3D]/60 pointer-events-none" />
              <div className="absolute bottom-6 left-6">
                <span className="bg-yellow text-deep px-4 py-1.5 rounded-full font-body font-bold text-xs uppercase tracking-widest shadow-[0_0_15px_rgba(245,184,0,0.6)]">
                  {t('Events', 'featuredBadge')}
                </span>
              </div>
            </div>

            {/* Texte droit */}
            <div className="w-full lg:flex-1 min-w-0 text-white flex flex-col justify-center p-6 md:p-10 bg-gradient-to-br from-[#0B1B3D]/80 to-[#0B1B3D]/40 backdrop-blur-md">
              {/* Accent bar titre */}
              <div className="flex gap-1 mb-4">
                <span className="h-1 w-8 rounded-full bg-yellow" />
                <span className="h-1 w-4 rounded-full bg-orange" />
                <span className="h-1 w-2 rounded-full bg-red" />
              </div>

              <h1 className="text-white mb-4 text-4xl md:text-5xl xl:text-6xl leading-none drop-shadow-lg">
                CULTURA<br/>PALOPS<br/>SUIÇA 2026
              </h1>

              <p className="font-body text-base md:text-lg opacity-80 mb-5 leading-relaxed">
                {t('Events', 'featuredText')}
              </p>

              {/* Infos box */}
              <div className="flex flex-col gap-3 mb-5 font-body font-semibold bg-white/5 p-4 md:p-5 rounded-[1.5rem] border border-white/10 w-full max-w-sm">
                <div className="flex items-center gap-3 text-white">
                  <MapPin size={18} className="text-yellow shrink-0" />
                  <span className="text-sm md:text-base">{t('Events', 'festivalCity')}</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <Ticket size={18} className="text-orange shrink-0" />
                  <span className="text-sm md:text-base">{t('Events', 'festivalPass')}</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <Calendar size={18} className="text-green shrink-0" />
                  <span className="text-sm md:text-base">{t('Events', 'festivalDate')}</span>
                </div>
              </div>

              <Button
                variant="primary"
                className="bg-orange hover:bg-yellow hover:text-deep text-white text-base px-8 py-3.5 shadow-[0_10px_30px_rgba(232,117,26,0.6)] font-bold rounded-full w-full max-w-sm transition-all"
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

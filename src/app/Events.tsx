import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { FadeIn } from './components/FadeIn';
import { FadeInGroup, FadeInItem } from './components/FadeInStagger';
import { MapPin, Ticket, Calendar, Clock, Phone, Info } from 'lucide-react';
import { useLanguage } from './contexts/LanguageContext';
import {
  Trumpet, Confetti, Guitar, MusicNotes, KentePattern, CapeVerdeIslands
} from './components/Decorations';
import { CapeVerdeStars } from './components/CulturalMotifs';
import { events, formatEventDate } from '../data/events';
import type { Event } from '../data/events';
import { EventModal } from './components/EventModal';

export const Events = () => {
  const { t, lang } = useLanguage();
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const featured   = events.find((e) => e.featured);
  const upcoming   = events.filter((e) => !e.featured && !e.past);
  const pastEvents = events.filter((e) => e.past);

  return (
    <div className="w-full bg-brand-bg min-h-screen pb-20">

      {/* ── HERO : ÉVÉNEMENT VEDETTE ─────────────────────────────────────── */}
      {featured && (
        <section className="relative overflow-hidden bg-deep">
          {/* Décorations */}
          <CapeVerdeStars className="hidden md:block absolute -top-20 -left-20 text-white opacity-10 w-[600px] h-[600px] pointer-events-none z-0 animate-[spin_60s_linear_infinite]" />
          <CapeVerdeIslands className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-[0.05] w-[800px] h-[500px] pointer-events-none z-0" />
          <KentePattern className="absolute inset-0 text-white opacity-[0.06] pointer-events-none z-0" />
          <Confetti className="absolute inset-0 text-orange opacity-10 pointer-events-none z-0" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-orange/25 blur-[120px] pointer-events-none z-0" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-yellow/15 blur-[100px] pointer-events-none z-0" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-6">
            <div className="flex flex-col lg:flex-row gap-0 items-stretch rounded-[2.5rem] border-2 border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden">

              {/* Bande PALOP */}
              <div className="flex lg:flex-col h-2 lg:h-auto lg:w-2 shrink-0">
                {['#1A5CB5','#E8620A','#F5B800','#2D7A5E','#4A7FD4'].map((c) => (
                  <div key={c} className="flex-1" style={{ backgroundColor: c }} />
                ))}
              </div>

              {/* Flyer / photo */}
              <div className="w-full lg:w-[42%] shrink-0 relative min-h-[280px] lg:min-h-[520px]">
                {featured.image ? (
                  <img
                    src={featured.image}
                    alt={featured.title[lang]}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-orange/30 to-primary/30 flex items-center justify-center">
                    <span className="text-white/30 font-display text-4xl">Photo à venir</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0B1B3D]/70 pointer-events-none" />
                <div className="absolute bottom-5 left-5">
                  <span className="bg-yellow text-deep px-4 py-1.5 rounded-full font-body font-bold text-xs uppercase tracking-widest shadow-[0_0_15px_rgba(247,209,22,0.5)]">
                    {t('Events', 'featuredBadge')}
                  </span>
                </div>
              </div>

              {/* Contenu */}
              <div className="w-full lg:flex-1 text-white flex flex-col justify-center p-6 md:p-10 bg-gradient-to-br from-[#0B1B3D]/80 to-[#0B1B3D]/40 backdrop-blur-md">
                <div className="flex gap-1 mb-5">
                  <span className="h-1 w-8 rounded-full bg-yellow" />
                  <span className="h-1 w-4 rounded-full bg-orange" />
                  <span className="h-1 w-2 rounded-full bg-red" />
                </div>

                <h1 className="text-white font-display text-4xl md:text-5xl xl:text-6xl leading-none drop-shadow-lg mb-4">
                  {featured.title[lang]}
                </h1>

                <p className="font-body text-base md:text-lg text-white/75 mb-6 leading-relaxed max-w-md">
                  {featured.description?.[lang]}
                </p>

                {/* Infos */}
                <div className="flex flex-col gap-3 mb-6 font-body font-semibold bg-white/5 p-4 md:p-5 rounded-[1.5rem] border border-white/10 w-full max-w-sm">
                  <div className="flex items-center gap-3 text-white">
                    <Calendar size={17} className="text-yellow shrink-0" />
                    <span className="text-sm">{formatEventDate(featured.date, lang)}</span>
                  </div>
                  {featured.time && (
                    <div className="flex items-center gap-3 text-white">
                      <Clock size={17} className="text-orange shrink-0" />
                      <span className="text-sm">{featured.time}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-3 text-white">
                    <MapPin size={17} className="text-green shrink-0" />
                    <div>
                      <span className="text-sm block">{featured.locationDetail ?? featured.location}</span>
                    </div>
                  </div>
                  {featured.priceCHF && (
                    <div className="flex items-center gap-3 text-white">
                      <Ticket size={17} className="text-yellow shrink-0" />
                      <span className="text-sm font-bold">Billet : {featured.priceCHF} CHF</span>
                    </div>
                  )}
                </div>

                {/* Artistes */}
                {featured.artists && featured.artists.length > 0 && (
                  <div className="mb-6">
                    <p className="font-body text-white/50 text-[10px] uppercase tracking-widest mb-2">{t('Events', 'artistsSection')}</p>
                    <p className="font-body text-white/85 text-base leading-relaxed">
                      {featured.artists.join(' · ')}
                    </p>
                  </div>
                )}

                {/* Boutons */}
                <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
                  {featured.contacts && featured.contacts[0] && (
                    <a
                      href={featured.contacts[0].href}
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-green hover:bg-green/80 text-white font-body font-bold text-sm px-5 py-3.5 rounded-full shadow-[0_8px_20px_rgba(45,122,94,0.4)] transition-all"
                    >
                      <Phone size={16} />
                      {featured.contacts[0].number}
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedEvent(featured)}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-orange hover:bg-yellow hover:text-deep text-white font-body font-bold text-sm px-5 py-3.5 rounded-full shadow-[0_8px_20px_rgba(232,117,26,0.4)] transition-all"
                  >
                    <Info size={16} />
                    {t('Events', 'seeDetails')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Bande PALOP séparateur */}
      <div className="flex h-1.5 w-full">
        {['#003893','#E8751A','#F7D116','#1A6B3C','#0B1B3D'].map((c) => (
          <div key={c} className="flex-1" style={{ backgroundColor: c }} />
        ))}
      </div>

      {/* ── ÉVÉNEMENTS À VENIR ───────────────────────────────────────────── */}
      {upcoming.length > 0 && (
        <section className="px-4 md:px-8 max-w-7xl mx-auto mt-16">
          <FadeIn>
            <div className="flex items-center gap-4 mb-10">
              <span className="w-8 h-px bg-primary/40 shrink-0" />
              <h2 className="text-primary text-3xl md:text-4xl font-display">{t('Events', 'upcomingTitle')}</h2>
            </div>
          </FadeIn>

          <FadeInGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.12}>
            {upcoming.map((event) => (
              <FadeInItem key={event.id}>
                <UpcomingCard event={event} lang={lang} onOpen={() => setSelectedEvent(event)} />
              </FadeInItem>
            ))}
          </FadeInGroup>
        </section>
      )}

      {/* ── ÉVÉNEMENTS PASSÉS ────────────────────────────────────────────── */}
      {pastEvents.length > 0 && (
        <section className="px-4 md:px-8 max-w-7xl mx-auto mt-16">
          <FadeIn>
            <div className="flex items-center gap-4 mb-10">
              <span className="w-8 h-px bg-brand-text/20 shrink-0" />
              <h2 className="text-brand-text/50 text-3xl md:text-4xl font-display">{t('Events', 'pastTitle')}</h2>
            </div>
          </FadeIn>

          <FadeInGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.1}>
            {pastEvents.map((event) => (
              <FadeInItem key={event.id}>
                <PastCard event={event} lang={lang} />
              </FadeInItem>
            ))}
          </FadeInGroup>
        </section>
      )}

      {/* ── MODAL DÉTAIL ─────────────────────────────────────────────────── */}
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          lang={lang}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
};

/* ── Carte événement à venir ─────────────────────────────────────────────── */
const UpcomingCard = ({
  event,
  lang,
  onOpen,
}: {
  event: (typeof events)[number];
  lang: string;
  onOpen: () => void;
}) => {
  const { t } = useLanguage();
  return (
  <div className="group bg-white rounded-[2rem] overflow-hidden border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] md:hover:shadow-[0_16px_36px_rgba(0,0,0,0.10)] transition-[transform,box-shadow] duration-500 ease-out md:hover:-translate-y-1 flex flex-col">
    {/* Image ou placeholder */}
    <div className="relative h-52 overflow-hidden bg-deep">
      {event.image ? (
        <img src={event.image} alt={event.title[lang as 'fr']} loading="lazy" className="w-full h-full object-cover object-top" />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-deep/80 flex items-center justify-center">
          <span className="text-white/30 font-display text-2xl text-center px-4">{event.title[lang as 'fr']}</span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <span className="absolute top-4 right-4 bg-orange text-white font-body font-bold text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full">
        {event.tag === 'festival' ? t('Events', 'tagFestival') : event.tag === 'charite' ? t('Events', 'tagCharite') : event.tag}
      </span>
    </div>

    <div className="p-6 flex flex-col flex-1">
      <h3 className="font-display text-brand-text text-xl leading-snug mb-4">{event.title[lang as 'fr']}</h3>
      <div className="mt-auto space-y-2 text-sm font-body text-brand-text/60 mb-5">
        <div className="flex items-center gap-2.5">
          <Calendar size={14} className="text-orange shrink-0" />
          {formatEventDate(event.date, lang as 'fr')}
          {event.time && <span className="text-brand-text/40">· {event.time}</span>}
        </div>
        <div className="flex items-center gap-2.5">
          <MapPin size={14} className="text-primary shrink-0" />
          {event.location}
        </div>
        {event.priceCHF && (
          <div className="flex items-center gap-2.5">
            <Ticket size={14} className="text-yellow shrink-0" />
            <span className="font-semibold text-brand-text">{event.priceCHF} CHF</span>
          </div>
        )}
      </div>

      {/* Boutons action */}
      <div className="flex gap-2">
        {event.contacts && event.contacts[0] && (
          <a
            href={event.contacts[0].href}
            className="flex-1 flex items-center justify-center gap-1.5 bg-green/10 hover:bg-green/20 border border-green/30 text-green font-body font-semibold text-xs px-3 py-2.5 rounded-xl transition-colors"
          >
            <Phone size={13} />
            {t('Events', 'callBtn')}
          </a>
        )}
        <button
          onClick={onOpen}
          className="flex-1 flex items-center justify-center gap-1.5 bg-primary/10 hover:bg-primary/20 border border-primary/20 text-primary font-body font-semibold text-xs px-3 py-2.5 rounded-xl transition-colors"
        >
          <Info size={13} />
          {t('Events', 'seeDetailsShort')}
        </button>
      </div>
    </div>
  </div>
  );
};

/* ── Carte événement passé ───────────────────────────────────────────────── */
const PastCard = ({ event, lang }: { event: (typeof events)[number]; lang: string }) => {
  const { t } = useLanguage();
  return (
  <div className="group bg-white/50 rounded-[2rem] overflow-hidden border border-black/5 flex flex-col opacity-70 hover:opacity-90 transition-opacity duration-300">
    <div className="relative h-44 overflow-hidden bg-brand-text/5">
      {event.image ? (
        <img src={event.image} alt={event.title[lang as 'fr']} loading="lazy" className="w-full h-full object-cover grayscale" />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-brand-text/20 font-display text-xl text-center px-4">{event.title[lang as 'fr']}</span>
        </div>
      )}
      <span className="absolute top-4 right-4 bg-brand-text/20 text-brand-text font-body font-bold text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full">
        {t('Events', 'pastBadge')}
      </span>
    </div>
    <div className="p-5">
      <h3 className="font-display text-brand-text/70 text-lg leading-snug mb-3">{event.title[lang as 'fr']}</h3>
      <div className="flex items-center gap-2 text-sm font-body text-brand-text/40">
        <Calendar size={13} className="shrink-0" />
        {formatEventDate(event.date, lang as 'fr')}
      </div>
      {!event.image && (
        <p className="mt-3 text-xs font-body text-brand-text/40 italic">{t('Events', 'photosComingSoon')}</p>
      )}
    </div>
  </div>
  );
};

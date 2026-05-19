import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { SEO } from './components/SEO';
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

  // Aujourd'hui à minuit — référence pour classer les événements automatiquement
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const isPast = (e: Event) => e.past || new Date(e.date) < today;

  // Événements passés : flag explicite OU date dépassée
  const pastEvents = events
    .filter(isPast)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // plus récent en premier

  // Tous les événements à venir triés par date
  const allUpcoming = events
    .filter((e) => !isPast(e))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  // Vedette : événement explicitement marqué featured, sinon le prochain à venir
  const featured = allUpcoming.find((e) => e.featured) ?? allUpcoming[0] ?? null;

  // Les autres à venir (hors vedette)
  const upcoming = allUpcoming.filter((e) => e !== featured);

  const seoData = {
    fr: { title: 'Événements & Agenda', description: "Retrouvez tous les événements culturels de Batuku & Cultura en Suisse Romande : festivals, concerts, ventes de charité et rassemblements cap-verdiens et PALOP." },
    pt: { title: 'Eventos & Agenda', description: "Encontre todos os eventos culturais da Batuku & Cultura na Suíça Romanda: festivais, concertos, vendas de caridade e encontros cabo-verdianos e PALOP." },
    en: { title: 'Events & Agenda', description: "Find all cultural events by Batuku & Cultura in French-speaking Switzerland: festivals, concerts, charity sales and Cape Verdean and PALOP gatherings." },
  }[lang as 'fr' | 'pt' | 'en'] ?? { title: 'Événements & Agenda', description: '' };

  const SITE_URL = 'https://www.batuku-cultura.ch';
  const publishableEvents = [...(featured ? [featured] : []), ...upcoming];
  const eventJsonLd = {
    '@context': 'https://schema.org',
    '@graph': publishableEvents.map((e) => ({
      '@type': 'Event',
      name: e.title[lang as 'fr' | 'pt' | 'en'],
      startDate: e.time ? `${e.date}T${e.time.split('–')[0].trim().replace('h', ':')}:00` : e.date,
      ...(e.time && { endDate: `${e.date}T${e.time.split('–')[1]?.trim().replace('h', ':') ?? '23:59'}:00` }),
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: {
        '@type': 'Place',
        name: e.locationDetail ?? e.location,
        address: { '@type': 'PostalAddress', addressLocality: e.location, addressCountry: 'CH' },
      },
      ...(e.image && { image: `${SITE_URL}${e.image}` }),
      description: e.description?.[lang as 'fr' | 'pt' | 'en'] ?? '',
      organizer: { '@type': 'Organization', name: 'Batuku & Cultura', url: SITE_URL },
      ...(e.priceCHF && {
        offers: { '@type': 'Offer', price: e.priceCHF, priceCurrency: 'CHF', availability: 'https://schema.org/InStock' },
      }),
      ...(e.artists && e.artists.length > 0 && {
        performer: e.artists.map((a) => ({ '@type': 'Person', name: a })),
      }),
      url: `${SITE_URL}/events`,
    })),
  };

  return (
    <div className="w-full bg-brand-bg min-h-screen pb-20">
      <SEO title={seoData.title} description={seoData.description} path="events" lang={lang} breadcrumbs={[{ name: seoData.title, path: 'events' }]} />
      {publishableEvents.length > 0 && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(eventJsonLd)}</script>
        </Helmet>
      )}

      {/* ── HERO : ÉVÉNEMENT VEDETTE ─────────────────────────────────────── */}
      {featured ? (
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
                  /* ── Panneau "pas encore d'affiche" ── */
                  <div className="w-full h-full relative flex flex-col items-center justify-center overflow-hidden bg-[#081526]">

                    {/* Fond : motif kente très subtil */}
                    <KentePattern className="absolute inset-0 text-yellow opacity-[0.06] pointer-events-none" />

                    {/* Halos de lumière */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-40 bg-orange/10 blur-[80px] rounded-full" />
                    <div className="absolute bottom-0 right-0 w-48 h-48 bg-yellow/8 blur-[60px] rounded-full" />

                    {/* Barre PALOP top */}
                    <div className="absolute top-0 inset-x-0 flex h-[3px]">
                      {['#1A5CB5','#E8620A','#F5B800','#2D7A5E','#4A7FD4'].map((c) => (
                        <div key={c} className="flex-1" style={{ backgroundColor: c }} />
                      ))}
                    </div>

                    {/* Instruments en coins — silhouettes */}
                    <Trumpet    className="absolute -top-2 -left-2 w-28 h-28 text-orange/[0.12] rotate-[-25deg] pointer-events-none" />
                    <Guitar     className="absolute -bottom-4 -right-4 w-36 h-36 text-yellow/[0.10] rotate-[20deg] pointer-events-none" />
                    <MusicNotes className="absolute top-6 right-4 w-14 h-14 text-white/[0.08] pointer-events-none" />
                    <Trumpet    className="absolute bottom-8 left-2 w-16 h-16 text-yellow/[0.09] rotate-[30deg] pointer-events-none" />

                    {/* Contenu central */}
                    <div className="relative z-10 flex flex-col items-center gap-4 px-8 text-center">
                      {/* Cercle décoratif avec icône */}
                      <div className="relative w-20 h-20 flex items-center justify-center">
                        {/* Cercle extérieur animé */}
                        <div className="absolute inset-0 rounded-full border border-yellow/20 animate-[ping_3s_ease-in-out_infinite]" />
                        <div className="absolute inset-1 rounded-full border border-orange/25" />
                        <div className="w-14 h-14 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center backdrop-blur-sm">
                          <span className="text-yellow/70 text-2xl leading-none select-none">♫</span>
                        </div>
                      </div>

                      {/* Texte */}
                      <div className="flex flex-col gap-1.5">
                        <p className="text-white font-display text-2xl leading-snug">
                          Affiche en cours
                        </p>
                        <p className="text-orange/80 font-display text-2xl leading-snug">
                          de création
                        </p>
                        <p className="text-white/35 font-body text-[11px] uppercase tracking-[0.2em] mt-1">
                          Bientôt disponible
                        </p>
                      </div>

                      {/* Mini barre PALOP */}
                      <div className="flex gap-1 mt-1">
                        {['#1A5CB5','#E8620A','#F5B800','#2D7A5E','#4A7FD4'].map((c) => (
                          <div key={c} className="w-4 h-[2px] rounded-full" style={{ backgroundColor: c, opacity: 0.6 }} />
                        ))}
                      </div>
                    </div>

                    {/* Barre PALOP bottom */}
                    <div className="absolute bottom-0 inset-x-0 flex h-[3px]">
                      {['#1A5CB5','#E8620A','#F5B800','#2D7A5E','#4A7FD4'].map((c) => (
                        <div key={c} className="flex-1" style={{ backgroundColor: c }} />
                      ))}
                    </div>
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

                {featured.description?.[lang] && (
                  <p className="font-body text-base md:text-lg text-white/75 mb-6 leading-relaxed max-w-md">
                    {featured.description[lang]}
                  </p>
                )}

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
      ) : (
        /* ── PLACEHOLDER : aucun événement à venir ─────────────────────── */
        <section className="relative overflow-hidden bg-[#081526] min-h-[600px] flex items-center">

          {/* Fond texturé */}
          <KentePattern className="absolute inset-0 text-white opacity-[0.03] pointer-events-none z-0" />

          {/* Halos */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-orange/10 blur-[120px] rounded-full pointer-events-none z-0" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-yellow/8 blur-[100px] rounded-full pointer-events-none z-0" />
          <div className="absolute bottom-0 right-0 w-[350px] h-[250px] bg-primary/20 blur-[100px] rounded-full pointer-events-none z-0" />

          {/* Étoiles Cap-Vert en rotation lente */}
          <CapeVerdeStars className="hidden md:block absolute -top-40 -left-40 text-white opacity-[0.04] w-[700px] h-[700px] pointer-events-none z-0 animate-[spin_90s_linear_infinite]" />

          {/* Instruments aux coins — grands et transparents */}
          <Trumpet    className="hidden lg:block absolute -top-6 -left-6 w-52 h-52 text-orange/[0.08] -rotate-12 pointer-events-none z-0" />
          <Guitar     className="hidden lg:block absolute -bottom-8 -left-8 w-56 h-56 text-yellow/[0.07] rotate-6 pointer-events-none z-0" />
          <MusicNotes className="hidden lg:block absolute top-10 -right-4 w-44 h-44 text-white/[0.05] pointer-events-none z-0" />
          <Trumpet    className="hidden lg:block absolute -bottom-4 -right-4 w-48 h-48 text-orange/[0.07] rotate-[20deg] pointer-events-none z-0" />

          {/* Contenu */}
          <div className="relative z-10 w-full max-w-3xl mx-auto px-6 py-20 flex flex-col items-center text-center gap-7">

            {/* 5 dots PALOP */}
            <div className="flex items-center gap-3">
              {['#1A5CB5','#E8620A','#F5B800','#2D7A5E','#4A7FD4'].map((c) => (
                <div key={c} className="w-3 h-3 rounded-full shadow-[0_0_8px_currentColor]" style={{ backgroundColor: c }} />
              ))}
            </div>

            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-yellow/15 text-yellow border border-yellow/25 font-body font-bold text-[11px] uppercase tracking-[0.15em] px-5 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow animate-pulse" />
              {t('Events', 'comingSoonBadge')}
            </span>

            {/* Titre avec accent couleur */}
            <div className="flex flex-col gap-1">
              <h1 className="text-white font-display text-5xl md:text-7xl leading-none tracking-tight drop-shadow-lg">
                {t('Events', 'comingSoonTitle').split('…')[0]}
              </h1>
              <span className="text-orange font-display text-5xl md:text-7xl leading-none tracking-tight">…</span>
            </div>

            {/* Ligne décorative */}
            <div className="flex items-center gap-3 w-full max-w-xs">
              <div className="flex-1 h-px bg-white/10" />
              <div className="flex gap-1">
                {['#1A5CB5','#E8620A','#F5B800','#2D7A5E','#4A7FD4'].map((c) => (
                  <div key={c} className="w-5 h-[2px] rounded-full" style={{ backgroundColor: c }} />
                ))}
              </div>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            {/* Texte */}
            <p className="text-white/55 font-body text-base md:text-lg max-w-sm leading-relaxed">
              {t('Events', 'comingSoonText')}
            </p>

            {/* Bouton */}
            <NavLink
              to="/contact"
              className="group inline-flex items-center gap-3 bg-orange hover:bg-yellow text-white hover:text-deep font-body font-bold text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-[0_8px_32px_rgba(232,117,26,0.4)] hover:shadow-[0_12px_40px_rgba(247,209,22,0.35)]"
            >
              {t('Events', 'modalContactFormBtn')}
            </NavLink>
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
              <FadeInItem key={event.id} className="h-full">
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
              <FadeInItem key={event.id} className="h-full">
                <PastCard event={event} lang={lang} onOpen={() => setSelectedEvent(event)} />
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
        <img src="/Sections_fonds/fond cartes sans images.png" alt="" aria-hidden="true" loading="lazy" className="w-full h-full object-cover object-center" />
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
const PastCard = ({
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
  <div
    className="group h-full bg-white rounded-[2rem] overflow-hidden border border-black/8 shadow-[0_4px_20px_rgb(0,0,0,0.06)] flex flex-col cursor-pointer transition-[transform,box-shadow] duration-300 md:hover:-translate-y-1 md:hover:shadow-[0_12px_30px_rgba(0,0,0,0.10)]"
    onClick={onOpen}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOpen(); }}
  >
    <div className="relative h-44 shrink-0 overflow-hidden bg-brand-text/10">
      {event.image ? (
        <img src={event.image} alt={event.title[lang as 'fr']} loading="lazy" className="w-full h-full object-cover grayscale-[60%] group-hover:grayscale-0 transition-[filter] duration-500" />
      ) : (
        <img src="/Sections_fonds/fond cartes sans images.png" alt="" aria-hidden="true" loading="lazy" className="w-full h-full object-cover object-center grayscale-[40%] opacity-60" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      <span className="absolute top-4 right-4 bg-brand-text/70 text-white font-body font-bold text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full">
        {t('Events', 'pastBadge')}
      </span>
    </div>
    <div className="p-5 flex flex-col flex-1">
      <h3 className="font-display text-brand-text text-lg leading-snug mb-3">{event.title[lang as 'fr']}</h3>
      <div className="flex items-center gap-2 text-sm font-body text-brand-text/60">
        <Calendar size={13} className="text-orange shrink-0" />
        {formatEventDate(event.date, lang as 'fr')}
      </div>
      <div className="mt-auto pt-4">
        <span className="inline-flex items-center gap-1.5 text-xs font-body font-semibold text-primary/60 group-hover:text-primary transition-colors duration-200">
          <Info size={12} />
          {t('Events', 'seeDetailsShort')}
        </span>
      </div>
    </div>
  </div>
  );
};

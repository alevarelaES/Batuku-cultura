import React from 'react';
import { FadeIn } from './components/FadeIn';
import { Button } from './components/Button';
import { ArrowRight, PlayCircle, Calendar, MapPin } from 'lucide-react';
import {
  Djembe,
  Guitar, MusicNotes, Trumpet
} from './components/Decorations';
import { HeroSection } from './components/HeroSection';
import { useLanguage } from './contexts/LanguageContext';
import { NavLink } from 'react-router';
import { events, formatEventDate } from '../data/events';

const BATUKU_IMG = "https://images.unsplash.com/photo-1581536678606-3a35fecc8fc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80";

const MUSIC_GENRES: { key: string; descKey: string; Icon: React.FC<{ className?: string }>; bgClass: string; iconClass: string; badgeKey: string }[] = [
  { key: 'mornaTitle', descKey: 'mornaDesc', Icon: MusicNotes, bgClass: 'bg-primary', iconClass: 'text-primary', badgeKey: 'UNESCO 2019' },
  { key: 'batukuTitle2', descKey: 'batukuDesc2', Icon: Djembe, bgClass: 'bg-red', iconClass: 'text-red', badgeKey: 'Santiago' },
  { key: 'funaTitle', descKey: 'funaDesc', Icon: Guitar, bgClass: 'bg-yellow', iconClass: 'text-yellow', badgeKey: 'badgeFreedom' },
  { key: 'coladTitle', descKey: 'coladDesc', Icon: Trumpet, bgClass: 'bg-orange', iconClass: 'text-orange', badgeKey: 'badgeParty' },
];

export const Home = () => {
  const { t, lang } = useLanguage();

  const upcomingEvents = events.filter((e) => !e.featured);

  return (
    <div className="w-full relative">

      {/* 1. HERO */}
      <HeroSection />

      {/* 2. IDENTITÉ CAP-VERDIENNE */}
      <section className="relative overflow-hidden py-20 px-6 bg-gradient-to-b from-brand-bg via-white to-orange/5">
        {/* Soft Background Globs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Gemini background: gold instruments & geometric motifs */}
        <img
          src="/Sections_fonds/notre_mission_section_fond.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-0"
          style={{ opacity: 0.55 }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              {/* Left Text */}
              <div className="flex-1">
                <span className="inline-flex items-center gap-3 font-body font-medium uppercase tracking-[0.3em] text-primary/80 text-sm mb-6">
                  <span className="w-8 h-px bg-primary/40 shrink-0"></span>
                  Notre Mission
                </span>
                <h2 className="text-brand-text text-5xl md:text-6xl font-display leading-[1.1] mb-6 font-light">
                  {t('Home', 'capVertSection')}
                </h2>
                <p className="font-body text-brand-text/70 text-lg leading-relaxed mb-8">
                  {t('Home', 'capVertText')}
                </p>
                <div className="relative p-7 rounded-[2rem] bg-white/60 backdrop-blur-sm border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                  <div className="absolute -top-4 -left-2 text-6xl text-orange opacity-20 font-serif">"</div>
                  <p className="text-xl md:text-2xl font-body font-light italic text-brand-text mb-3 relative z-10 leading-snug">
                    {t('Home', 'cesariaQuote')}
                  </p>
                  <p className="font-body font-medium tracking-widest uppercase text-xs text-brand-text/60">
                    — {t('Home', 'cesariaSub')}
                  </p>
                </div>
              </div>

              {/* Right Grid (4 Genres) */}
              <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-5 relative">
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[200px] bg-orange/10 blur-[80px] rounded-full z-0 pointer-events-none"></div>

                {MUSIC_GENRES.map((genre, idx) => (
                  <FadeIn key={idx} delay={idx * 0.08} className="relative z-10">
                    <div className="group bg-white/70 backdrop-blur-md rounded-[2rem] p-6 flex flex-col items-start shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(232,117,26,0.1)] border border-white/80 transition-all duration-500 hover:-translate-y-1.5 h-full min-h-[200px]">
                      <div className="flex items-center justify-between w-full mb-5 relative">
                        <div className={`absolute inset-0 opacity-10 rounded-full blur-xl transition-opacity duration-300 group-hover:opacity-20 ${genre.bgClass}`}></div>
                        <genre.Icon className={`w-9 h-9 ${genre.iconClass} relative z-10 transition-transform duration-500 group-hover:scale-110`} />
                        <span className="text-brand-text/40 text-[10px] font-bold uppercase tracking-widest">
                          {genre.badgeKey.startsWith('badge') ? t('Home', genre.badgeKey) : genre.badgeKey}
                        </span>
                      </div>
                      <h3 className="w-full text-2xl font-display leading-tight mb-2 text-brand-text group-hover:text-orange transition-colors duration-300">
                        {t('Home', genre.key)}
                      </h3>
                      <p className="w-full font-body text-sm text-brand-text/60 leading-relaxed">
                        {t('Home', genre.descKey)}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. BATUKU SPOTLIGHT */}
      <section className="bg-gradient-to-br from-[#E2EBE5] to-[#F1EDE4] py-20 px-6 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-green/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-yellow/10 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Cape Verde flag — fades from left (low opacity) to fully invisible on the right */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            src="/flags/flag-cape-verde.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-left"
            style={{
              opacity: 0.22,
              maskImage: 'linear-gradient(to right, black 0%, black 20%, transparent 80%)',
              WebkitMaskImage: 'linear-gradient(to right, black 0%, black 20%, transparent 80%)',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-14 relative z-10">
          {/* Left: Photo */}
          <div className="w-full md:w-[42%] order-2 md:order-1 relative flex justify-center">
            <FadeIn>
              <div className="relative group w-full max-w-[380px] aspect-[3/4]">
                <div className="absolute -inset-6 bg-green/20 rounded-[4rem] blur-[30px] opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
                <div className="relative w-full h-full rounded-t-[10rem] rounded-b-[2rem] overflow-hidden bg-white shadow-2xl p-2 pb-[4.5rem]">
                  <img src={BATUKU_IMG} alt="Groupe Batuku" className="w-full h-full object-cover rounded-t-[9rem] rounded-b-[1.5rem] brightness-105" />
                  <NavLink to="/batuku" className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-white/80 backdrop-blur-md rounded-full pl-3 pr-5 py-2.5 shadow-xl hover:scale-105 transition-transform border border-white">
                    <PlayCircle size={28} className="text-green shrink-0" />
                    <span className="font-body font-bold text-sm text-brand-text whitespace-nowrap">Découvrir le Batuku</span>
                  </NavLink>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: Text */}
          <div className="w-full md:w-[58%] order-1 md:order-2">
            <FadeIn delay={0.15}>
              <span className="inline-flex items-center gap-3 font-body font-medium uppercase tracking-[0.3em] text-green/80 text-sm mb-5">
                <span className="w-2.5 h-2.5 rounded-full bg-green shrink-0"></span>
                {t('Home', 'batukuSubtitle')} — Santiago
              </span>
              <h2 className="mb-6 text-4xl md:text-6xl font-display leading-[1.1] font-light text-brand-text">
                {t('Home', 'batukuTitle')}
              </h2>
              <p className="mb-8 text-base font-body leading-relaxed text-brand-text/70">
                {t('Home', 'batukuText')}
              </p>
              <NavLink to="/batuku">
                <Button className="bg-green text-white font-body font-medium text-base py-3.5 px-8 rounded-full shadow-[0_10px_25px_rgba(26,107,60,0.2)] hover:bg-[#155A32] transition-all hover:-translate-y-0.5">
                  {t('Home', 'batukuBtn')} →
                </Button>
              </NavLink>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. NOS COULEURS — PALOP NATIONS (Editorial asymmetric grid) */}
      <section className="bg-brand-bg py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange/5 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Gemini background: African pattern circles */}
        <img
          src="/Sections_fonds/Nos Origines.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-0"
          style={{ opacity: 0.45 }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            {/* Section header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <span className="inline-flex items-center gap-3 font-body font-medium uppercase tracking-[0.3em] text-brand-text/40 text-sm mb-3">
                  <span className="w-8 h-px bg-brand-text/20 shrink-0"></span>
                  Nos Origines
                </span>
                <h2 className="text-brand-text text-4xl md:text-6xl font-display font-light leading-none">
                  5 Nations,<br />
                  <span className="text-primary">1 Langue.</span>
                </h2>
              </div>
              <p className="font-body text-brand-text/50 text-base max-w-xs leading-relaxed md:text-right">
                Les pays lusophones d'Afrique, unis par une langue et mille rythmes.
              </p>
            </div>

            {/* Asymmetric editorial grid */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-4">

              {/* CAP-VERT — Featured tall card */}
              <NavLink to="/culture" className="group relative overflow-hidden rounded-[2rem] min-h-[420px] lg:min-h-[520px] flex flex-col justify-end p-8 md:p-10">
                {/* Gradient background using CV flag colors: deep blue → soft red stripe → yellow accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#003893] via-[#0052CC] to-[#0B1B3D]"></div>
                {/* Red band accent */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[3px] bg-gradient-to-r from-[#CE1126]/0 via-[#CE1126]/60 to-[#CE1126]/0"></div>
                {/* Yellow star cluster accent */}
                <div className="absolute top-8 right-8 flex flex-wrap gap-1.5 w-20">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-yellow/70"></div>
                  ))}
                </div>
                {/* Warm glow */}
                <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-primary/30 rounded-full blur-[80px] opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>

                <div className="relative z-10">
                  <span className="inline-block bg-yellow/20 backdrop-blur border border-yellow/30 text-yellow text-[10px] font-bold uppercase tracking-[0.25em] px-3 py-1.5 rounded-full mb-6">
                    Notre Berceau
                  </span>
                  <h3 className="font-display font-light text-white text-5xl md:text-6xl leading-none mb-3">
                    Cap-Vert
                  </h3>
                  <p className="font-body text-white/60 text-sm leading-relaxed max-w-xs">
                    Archipel de l'Atlantique. Berceau de la Morna, du Batuku, de la Coladeira.
                  </p>
                  <div className="mt-8 flex items-center gap-3 text-white/50 font-body font-medium text-xs uppercase tracking-widest group-hover:text-white/80 transition-colors">
                    Explorer la culture
                    <span className="w-5 h-px bg-current transition-all group-hover:w-10"></span>
                  </div>
                </div>
              </NavLink>

              {/* Right 2x2 grid */}
              <div className="grid grid-cols-2 grid-rows-2 gap-4">

                {/* ANGOLA */}
                <NavLink to="/culture" className="group relative overflow-hidden rounded-[1.8rem] flex flex-col justify-end p-6 min-h-[200px] lg:min-h-[248px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a0a] via-[#3d0a0a] to-[#0a0a0a]"></div>
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#CC092F] to-[#CC092F]/50"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F9D61B] to-[#F9D61B]/30"></div>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-10 text-7xl font-display text-[#CC092F]">A</div>
                  <div className="relative z-10">
                    <h3 className="font-display font-light text-white text-3xl leading-none mb-1">Angola</h3>
                    <p className="font-body text-white/40 text-xs uppercase tracking-widest">Kizomba · Semba</p>
                  </div>
                </NavLink>

                {/* GUINÉE-BISSAU */}
                <NavLink to="/culture" className="group relative overflow-hidden rounded-[1.8rem] flex flex-col justify-end p-6 min-h-[200px] lg:min-h-[248px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0d1f0d] via-[#0d3d0d] to-[#0a0a0a]"></div>
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#CE1126] via-[#F7D116] to-[#009A44]"></div>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-10 text-7xl font-display text-[#009A44]">G</div>
                  <div className="relative z-10">
                    <h3 className="font-display font-light text-white text-2xl leading-none mb-1">Guinée-Bissau</h3>
                    <p className="font-body text-white/40 text-xs uppercase tracking-widest">Gumbe · Tina</p>
                  </div>
                </NavLink>

                {/* MOZAMBIQUE */}
                <NavLink to="/culture" className="group relative overflow-hidden rounded-[1.8rem] flex flex-col justify-end p-6 min-h-[200px] lg:min-h-[248px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a0d] via-[#0a2e19] to-[#050d08]"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#009A44] via-[#FFD100] to-[#009A44]/50"></div>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-10 text-7xl font-display text-[#009A44]">M</div>
                  <div className="relative z-10">
                    <h3 className="font-display font-light text-white text-3xl leading-none mb-1">Mozambique</h3>
                    <p className="font-body text-white/40 text-xs uppercase tracking-widest">Marrabenta</p>
                  </div>
                </NavLink>

                {/* SÃO TOMÉ */}
                <NavLink to="/culture" className="group relative overflow-hidden rounded-[1.8rem] flex flex-col justify-end p-6 min-h-[200px] lg:min-h-[248px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1a1000] via-[#2e1f00] to-[#0a0a0a]"></div>
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#12AD2B] via-[#FFCD00] to-[#12AD2B]/50"></div>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-10 text-6xl font-display text-[#FFCD00]">ST</div>
                  <div className="relative z-10">
                    <h3 className="font-display font-light text-white text-2xl leading-none mb-1">São Tomé & Príncipe</h3>
                    <p className="font-body text-white/40 text-xs uppercase tracking-widest">Puíta · Ússua</p>
                  </div>
                </NavLink>

              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 5. UPCOMING EVENTS */}
      <section className="bg-gradient-to-br from-[#0B1B3D] to-[#040A18] py-20 px-6 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-orange/10 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <div className="flex flex-col md:flex-row items-end justify-between mb-14 gap-8">
              <div>
                <span className="inline-flex items-center gap-3 font-body font-medium uppercase tracking-[0.3em] text-orange/80 text-sm mb-3">
                  Agenda
                </span>
                <h2 className="text-white text-4xl md:text-6xl font-display leading-tight font-light">
                  À Venir
                </h2>
              </div>
              <NavLink to="/events" className="group flex items-center gap-3 text-white/70 hover:text-white font-body font-medium tracking-wide text-sm">
                Voir tous les événements
                <span className="bg-white/10 p-2.5 rounded-full group-hover:bg-orange transition-colors">
                  <ArrowRight size={16} />
                </span>
              </NavLink>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {upcomingEvents.map((event, idx) => (
                <FadeIn key={event.id} delay={idx * 0.1}>
                  <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden group hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 hover:-translate-y-1.5 flex flex-col">
                    <div className="relative h-56 overflow-hidden p-2.5 pb-0">
                      <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
                        <img src={event.image} alt={event.title[lang]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 brightness-90 saturate-50 group-hover:saturate-100" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/80 via-transparent to-transparent opacity-60"></div>
                      </div>
                      <div className="absolute top-7 right-7 bg-white/20 backdrop-blur-md border border-white/30 text-white font-body font-medium px-3 py-1 rounded-full text-xs uppercase tracking-widest">
                        Event
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-display font-light text-white text-2xl leading-snug mb-5">{event.title[lang]}</h3>
                      <div className="mt-auto space-y-2.5 font-body text-white/50 text-sm">
                        <div className="flex items-center gap-3 pb-2.5 border-b border-white/10">
                          <span className="bg-white/10 p-1.5 rounded-full shrink-0"><Calendar size={13} className="text-orange" /></span>
                          {formatEventDate(event.date, lang)}
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="bg-white/10 p-1.5 rounded-full shrink-0"><MapPin size={13} className="text-primary" /></span>
                          {event.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};
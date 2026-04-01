import React from 'react';
import { NavLink } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full min-h-screen bg-brand-bg overflow-hidden flex flex-col justify-center pt-24 pb-16">
      
      {/* --- BACKGROUND: SUNSET GLOW --- */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange/10 rounded-full blur-[120px] opacity-80 pointer-events-none translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] opacity-60 pointer-events-none -translate-x-1/4 translate-y-1/4"></div>
      
      {/* Background texture: Gemini-generated instrument pattern */}
      <img
        src="/Sections_fonds/hero_fond.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-0"
        style={{ opacity: 0.7 }}
      />

      {/* --- MAIN CONTENT: 2-column layout --- */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* LEFT COLUMN: text — NO items-start so text takes full available width */}
        <div className="w-full lg:w-[55%] flex flex-col text-left">
          
          <span className="font-body text-sm uppercase tracking-[0.4em] font-medium text-orange/80 mb-6 animate-[fade-in-up_0.8s_ease-out_both] flex items-center gap-3">
            <span className="w-8 h-px bg-orange/40 shrink-0"></span>
            PALOP Suisse Romande
          </span>
          
          {/* Title block — items-start OK here because h1 are block-level and naturally full width */}
          <div className="flex flex-col animate-[fade-in-up_1s_ease-out_0.2s_both]">
            <h1 className="font-display text-[4rem] md:text-[5.5rem] lg:text-[7.5rem] leading-[0.85] text-brand-text tracking-tight mb-2">
              BATUKU
            </h1>
            <h1 className="font-display text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] leading-[1] text-orange">
              <span className="font-light italic">&</span> CULTURA
            </h1>
          </div>
          
          {/* Text block — critical: NO items-start, paragraphs need to stretch */}
          <div className="mt-8 flex flex-col animate-[fade-in-up_1.2s_ease-out_0.4s_both]">
            <h2 className="font-body text-xl md:text-2xl font-semibold text-brand-text/80 mb-4">
              Association Culturelle Cap-Verdienne
            </h2>
            <p className="font-body text-brand-text/70 text-lg md:text-xl font-normal max-w-lg mb-6 leading-relaxed">
              {t('Home', 'heroSubtitle')}
            </p>
            <p className="font-body text-lg md:text-xl font-light text-primary italic border-l-2 border-primary/20 pl-4 py-1 max-w-md">
              "A cultura não se explica. Vive-se."
            </p>
          </div>

          {/* CTAs — items-start HERE so buttons don't stretch full width */}
          <div className="mt-10 flex flex-wrap gap-4 animate-[fade-in-up_1.4s_ease-out_0.6s_both]">
            <NavLink to="/events">
              <button className="bg-orange text-white font-body font-medium text-base md:text-lg px-8 py-4 rounded-[2rem] transition-all hover:bg-orange/90 hover:shadow-[0_10px_30px_rgba(232,117,26,0.3)] hover:-translate-y-1 flex items-center gap-2">
                Rejoindre la communauté <span className="opacity-70">→</span>
              </button>
            </NavLink>
            <NavLink to="/about">
              <button className="bg-white/50 backdrop-blur-sm text-brand-text border border-brand-text/10 font-body font-medium text-base md:text-lg px-8 py-4 rounded-[2rem] transition-all hover:bg-white hover:shadow-xl">
                Découvrir
              </button>
            </NavLink>
          </div>

        </div>

        {/* RIGHT COLUMN: Photo */}
        <div className="w-full lg:w-[45%] flex justify-center animate-[fade-in-up_1.3s_ease-out_0.5s_both]">
          <div className="relative w-full max-w-[500px] aspect-[4/5] group">
            <div className="absolute -inset-4 bg-orange/20 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-white shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-orange/20 z-10 mix-blend-overlay pointer-events-none"></div>
              <img 
                src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1200&auto=format&fit=crop" 
                alt="Communauté Batuku & Cultura" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-white shadow-lg">
                <span className="font-display text-2xl mb-1 block drop-shadow-md">La Communauté</span>
                <span className="font-body text-sm font-medium opacity-90 block">Un espace de partage au quotidien.</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Soft PALOP color strip at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 flex z-30 opacity-80">
        <div className="h-full flex-1 bg-green"></div>
        <div className="h-full flex-1 bg-red"></div>
        <div className="h-full flex-1 bg-yellow"></div>
        <div className="h-full flex-1 bg-primary"></div>
        <div className="h-full flex-1 bg-orange"></div>
      </div>

    </section>
  );
};

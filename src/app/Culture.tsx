import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FadeIn } from './components/FadeIn';
import { PatternBg, CapeVerdeIslands } from './components/Decorations';
import { MotifDrum, MotifTribal, MotifIcons, CapeVerdeStars } from './components/CulturalMotifs';
import { countriesData, SubTabId } from './data/cultureData';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { useLanguage } from './contexts/LanguageContext';

export const Culture = () => {
  const { t, lang } = useLanguage();
  const [activeCountryId, setActiveCountryId] = useState<string>('cap-vert');
  const [activeSubTab, setActiveSubTab] = useState<SubTabId>('history');

  const subTabs: { id: SubTabId; label: string }[] = [
    { id: 'history', label: t('Culture', 'history') },
    { id: 'culture', label: t('Culture', 'musicDance') },
    { id: 'gastronomy', label: t('Culture', 'gastronomy') },
  ];

  const country = countriesData.find((c) => c.id === activeCountryId) || countriesData[0];
  const section = country[activeSubTab];

  return (
    <div className="w-full min-h-screen relative bg-brand-bg flex flex-col font-body">
      {/* Pattern de fond global */}
      <PatternBg className={`opacity-5 fixed inset-0 z-0 pointer-events-none ${country.textColor}`} />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-primary py-20 px-4 text-center relative overflow-hidden">
        <CapeVerdeStars className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-10 w-[600px] h-[600px] z-0 pointer-events-none animate-[spin_60s_linear_infinite]" />
        <div
          className="absolute inset-0 opacity-20 pointer-events-none z-0"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)',
          }}
        />
        <CapeVerdeIslands className="absolute top-0 right-10 text-white opacity-[0.05] w-[400px] h-[250px] pointer-events-none z-0 rotate-[15deg]" />
        <div className="relative z-10">
          <h1 className="font-display text-accent text-5xl md:text-7xl mb-3 drop-shadow-md">
            {t('Culture', 'pageTitle')}
          </h1>
          <p className="font-body text-white/90 text-lg italic">
            {t('Culture', 'pageSubtitle')}
          </p>
        </div>
      </section>

      {/* ── ONGLETS PAYS (sticky) ─────────────────────────────────── */}
      <div className="sticky top-[4.5rem] z-40 bg-white/80 backdrop-blur-xl border-b border-white shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto overflow-x-auto scrollbar-hide">
          <div className="flex min-w-max justify-start md:justify-center p-3 sm:p-4 gap-2 sm:gap-4 md:px-8">
            {countriesData.map((c) => {
              const isActive = activeCountryId === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => {
                    setActiveCountryId(c.id);
                    setActiveSubTab('history');
                  }}
                  className={`px-6 sm:px-8 py-2 md:py-3 rounded-full font-body font-bold text-sm sm:text-base tracking-widest transition-all whitespace-nowrap uppercase shadow-sm hover:-translate-y-0.5 border border-white/50 ${
                    isActive
                      ? 'text-white shadow-md'
                      : 'text-brand-text/70 bg-white/40 hover:bg-white hover:text-brand-text'
                  }`}
                  style={
                    isActive
                      ? { backgroundColor: c.color, borderColor: c.color }
                      : {}
                  }
                >
                  {c.name[lang]}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── CONTENU PAYS ─────────────────────────────────────────── */}
      <div className="flex-grow relative bg-gradient-to-b from-brand-bg via-brand-bg to-[#f4f4f6]">

        {/* ── SOUS-ONGLETS ─────────────────────────────────────────── */}
        <div id="culture-subtabs" className="max-w-5xl mx-auto pt-10 pb-6 px-4 relative z-10">
          <div className="flex flex-wrap justify-center gap-3 bg-white/40 backdrop-blur-lg p-2 rounded-[2rem] border border-white/60 shadow-sm w-fit mx-auto">
            {subTabs.map((tab) => {
              const isActive = activeSubTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSubTab(tab.id)}
                  className="px-6 py-2.5 rounded-full font-body font-bold text-sm md:text-base transition-all shadow-sm"
                  style={
                    isActive
                      ? { backgroundColor: country.color, color: country.color === '#F5B800' ? '#1A1A2A' : '#fff' }
                      : { backgroundColor: 'transparent', color: '#555' }
                  }
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── SECTION CONTENU ──────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${country.id}-${activeSubTab}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-6xl mx-auto py-8 px-4 md:px-8 relative z-10"
          >
            {/* Titre de section */}
            <div className="mb-12 text-center md:text-left">
              <div
                className="font-body text-sm font-bold tracking-widest uppercase mb-4 flex items-center justify-center md:justify-start gap-2"
                style={{ color: country.color }}
              >
                {country.name[lang]} — {subTabs.find(t => t.id === activeSubTab)?.label}
              </div>
              <h2
                className="font-display text-5xl md:text-6xl lg:text-7xl mb-6 leading-none"
                style={{ color: country.color }}
              >
                {section.title[lang]}
              </h2>
              <div className="flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start">
                <div
                  className="h-1 w-20 rounded-full"
                  style={{ backgroundColor: country.color }}
                />
                <p className="font-body text-gray-500 text-lg italic">
                  {section.subtitle[lang]}
                </p>
              </div>
            </div>

            {/* Layout 2 colonnes */}
            <div className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-start mb-16 ${activeSubTab === 'culture' ? 'lg:flex-row-reverse' : ''}`}>
              {/* Texte */}
              <div className="flex-1 min-w-0 w-full space-y-6">
                {section.text[lang].split('\n\n').map((para, i) => (
                  <p key={i} className="font-body text-gray-700 text-lg md:text-xl leading-relaxed">
                    {para}
                  </p>
                ))}

                {/* Citation */}
                {section.quote && (
                  <div
                    className="mt-8 p-6 rounded-2xl italic shadow-sm"
                    style={{
                      backgroundColor: country.color + '15',
                      borderLeft: `6px solid ${country.color}`,
                    }}
                  >
                    <p
                      className="font-body text-xl"
                      style={{ color: country.color === '#F5B800' ? '#1A1A2A' : country.color }}
                    >
                      {section.quote[lang]}
                    </p>
                  </div>
                )}
              </div>

              {/* Image */}
              <div className="flex-1 min-w-0 w-full relative group">
                <div
                  className="absolute -inset-4 rounded-[40px] opacity-20 transition-transform group-hover:scale-105 duration-500"
                  style={{ backgroundColor: country.color }}
                />
                <div
                  className="relative overflow-hidden rounded-[32px] shadow-2xl"
                  style={{ border: `6px solid ${country.color}` }}
                >
                  <ImageWithFallback
                    src={section.image}
                    alt={section.imageAlt}
                    className="object-cover w-full h-[400px] md:h-[500px] hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>
            </div>

            {/* Facts cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {section.facts.map((fact, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div
                    className="bg-white/60 backdrop-blur-md border border-white rounded-[2rem] p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_10px_40px_rgb(0,0,0,0.08)] transition-all h-full flex flex-col justify-center items-center text-center hover:-translate-y-1 relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: country.color }} />
                    <div
                      className="font-body text-sm font-bold tracking-widest uppercase mb-3 opacity-90"
                      style={{ color: country.color }}
                    >
                      {fact.label[lang]}
                    </div>
                    <div className="font-body font-bold text-brand-text text-xl">
                      {fact.value[lang]}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Navigation entre sous-onglets */}
            <div className="flex justify-between items-center pt-8 border-t border-black/5">
              <button
                onClick={() => {
                  const idx = subTabs.findIndex(t => t.id === activeSubTab);
                  if (idx > 0) {
                    setActiveSubTab(subTabs[idx - 1].id);
                    const el = document.getElementById('culture-subtabs');
                    if (el) {
                      const y = el.getBoundingClientRect().top + window.scrollY - 100;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }
                }}
                disabled={activeSubTab === 'history'}
                className="font-body font-semibold text-sm md:text-base px-6 py-3 rounded-full transition-all disabled:opacity-30"
                style={{ color: country.color, border: `2px solid ${country.color}` }}
              >
                {t('Culture', 'prev')}
              </button>

              {/* Indicateur */}
              <div className="flex gap-3">
                {subTabs.map((tab) => (
                  <div
                    key={tab.id}
                    className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: activeSubTab === tab.id ? country.color : '#ddd',
                      transform: activeSubTab === tab.id ? 'scale(1.5)' : 'scale(1)',
                    }}
                  />
                ))}
              </div>

              <button
                onClick={() => {
                  const idx = subTabs.findIndex(t => t.id === activeSubTab);
                  if (idx < subTabs.length - 1) {
                    setActiveSubTab(subTabs[idx + 1].id);
                    const el = document.getElementById('culture-subtabs');
                    if (el) {
                      const y = el.getBoundingClientRect().top + window.scrollY - 100;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }
                }}
                disabled={activeSubTab === 'gastronomy'}
                className="font-body font-semibold text-sm md:text-base px-6 py-3 rounded-full transition-all disabled:opacity-30 text-white"
                style={{ backgroundColor: country.color }}
              >
                {t('Culture', 'next')}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── NAVIGATION PAYS ──────────────────────────────────────── */}
        <div
          className="py-16 px-4 md:px-12 relative z-10 mt-10 transition-colors duration-500 rounded-t-[3rem] border-t border-white/50 shadow-[0_-10px_40px_rgba(0,0,0,0.02)]"
          style={{ backgroundColor: country.color + '0C' }}
        >
          <div className="max-w-6xl mx-auto">
            <p className="font-display text-4xl text-center mb-12"
              style={{ color: country.color }}>
              {t('Culture', 'exploreTitle')}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
              {countriesData.map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    setActiveCountryId(c.id);
                    setActiveSubTab('history');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="rounded-[2rem] p-6 text-center transition-all hover:-translate-y-2 shadow-sm hover:shadow-xl bg-white/40 backdrop-blur-sm border border-white/60"
                  style={
                    activeCountryId === c.id
                      ? { backgroundColor: c.color, color: '#fff' }
                      : { color: c.color }
                  }
                >
                  <div className="font-body font-bold text-sm md:text-base tracking-widest uppercase">{c.name[lang]}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

import React, { useEffect, useRef, useState } from 'react';
import { SEO } from './components/SEO';
import { motion, AnimatePresence } from 'motion/react';
import { FadeIn } from './components/FadeIn';
import { PatternBg, CapeVerdeIslands } from './components/Decorations';
import { CapeVerdeStars } from './components/CulturalMotifs';
import { countriesData, SubTabId } from './data/cultureData';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { useLanguage } from './contexts/LanguageContext';

export const Culture = () => {
  const { t, lang } = useLanguage();
  const [activeCountryId, setActiveCountryId] = useState<string>('cap-vert');
  const [activeSubTab, setActiveSubTab] = useState<SubTabId>('history');
  const contentRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const [showFloatingNav, setShowFloatingNav] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowFloatingNav(!entry.isIntersecting),
      { threshold: 0 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  // Lire le hash de l'URL pour pré-sélectionner un pays et scroller vers le contenu
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;
    const matched = countriesData.find((c) => c.id === hash);
    if (!matched) return;
    setActiveCountryId(matched.id);
    setActiveSubTab('history');
    // Laisser le temps au DOM de se mettre à jour avant de scroller
    const timer = setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  const subTabs: { id: SubTabId; label: string }[] = [
    { id: 'history', label: t('Culture', 'history') },
    { id: 'culture', label: t('Culture', 'musicDance') },
    { id: 'gastronomy', label: t('Culture', 'gastronomy') },
  ];

  const country = countriesData.find((c) => c.id === activeCountryId) || countriesData[0];
  const section = country[activeSubTab];

  // São Tomé (#002654) est trop sombre sur fond dark — on utilise une couleur d'affichage plus lumineuse
  const getDisplayColor = (c: typeof country) =>
    c.color === '#002654' ? '#4A7FD4' : c.color;

  const selectCountry = (id: string) => {
    setActiveCountryId(id);
    setActiveSubTab('history');
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  const seoData = {
    fr: { title: 'Cultura dos PALOP', description: "5 pays, 5 histoires, une même langue. Explorez les cultures du Cap-Vert, Angola, Guinée-Bissau, Mozambique et São Tomé & Príncipe avec Batuku & Cultura." },
    pt: { title: 'Cultura dos PALOP', description: "5 países, 5 histórias, uma mesma língua. Explore as culturas de Cabo Verde, Angola, Guiné-Bissau, Moçambique e São Tomé & Príncipe com Batuku & Cultura." },
    en: { title: 'Cultura dos PALOP', description: "5 countries, 5 stories, one language. Explore the cultures of Cape Verde, Angola, Guinea-Bissau, Mozambique and São Tomé & Príncipe with Batuku & Cultura." },
  }[lang as 'fr' | 'pt' | 'en'] ?? { title: 'Cultura dos PALOP', description: '' };

  return (
    <div className="w-full min-h-screen relative bg-brand-bg flex flex-col font-body">
      <SEO title={seoData.title} description={seoData.description} path="culture" lang={lang} breadcrumbs={[{ name: seoData.title, path: 'culture' }]} />
      <PatternBg className={`opacity-5 fixed inset-0 z-0 pointer-events-none ${country.textColor}`} />

      {/* ── HERO + SÉLECTEUR PAYS ─────────────────────────────── */}
      <section ref={heroRef} className="relative bg-deep pt-24 pb-16 px-4 overflow-hidden flex flex-col items-center">
        <CapeVerdeStars className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-[0.07] w-[900px] h-[900px] z-0 pointer-events-none animate-[spin_90s_linear_infinite]" />
        <CapeVerdeIslands className="absolute top-0 right-0 text-white opacity-[0.04] w-[500px] h-[300px] pointer-events-none z-0 rotate-[10deg]" />

        <div className="relative z-10 text-center mb-12">
          <span className="inline-block font-body text-xs font-bold tracking-[0.3em] uppercase text-white/40 mb-4">
            {t('Culture', 'palopBadge')}
          </span>
          <h1 className="font-display text-white text-5xl md:text-7xl mb-4 drop-shadow-md">
            {t('Culture', 'pageTitle')}
          </h1>
          <p className="font-body text-white/60 text-lg italic">
            {t('Culture', 'pageSubtitle')}
          </p>
        </div>

        {/* Cards pays */}
        <div className="relative z-10 w-full max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-3">
          {countriesData.map((c, idx) => {
            const isActive = activeCountryId === c.id;
            const isLastOdd = idx === countriesData.length - 1 && countriesData.length % 2 !== 0;
            return (
              <button
                key={c.id}
                onClick={() => selectCountry(c.id)}
                className={`group relative rounded-2xl px-4 py-8 text-center transition-all duration-300 hover:-translate-y-1 overflow-hidden border-2 cursor-pointer ${isLastOdd ? 'col-span-2 md:col-span-1' : ''}`}
                style={
                  isActive
                    ? { backgroundColor: c.color, borderColor: c.color }
                    : { borderColor: `${getDisplayColor(c)}80`, backgroundColor: `${getDisplayColor(c)}18` }
                }
              >
                {/* Code watermark */}
                <span
                  className="absolute inset-0 flex items-center justify-center font-display text-[4.5rem] font-bold pointer-events-none select-none leading-none"
                  style={{ color: isActive ? 'rgba(255,255,255,0.12)' : `${getDisplayColor(c)}30` }}
                >
                  {c.code}
                </span>
                <span
                  className="relative font-display text-sm md:text-base font-bold tracking-widest uppercase block"
                  style={{ color: isActive ? '#fff' : getDisplayColor(c) }}
                >
                  {c.name[lang]}
                </span>
                <span
                  className="relative block mt-3 text-xs font-body font-medium transition-all duration-300"
                  style={{ color: isActive ? 'rgba(255,255,255,0.7)' : `${getDisplayColor(c)}90` }}
                >
                  {isActive ? t('Culture', 'selectedLabel') : t('Culture', 'exploreArrow')}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ── CONTENU PAYS ─────────────────────────────────────────── */}
      <div ref={contentRef} className="flex-grow relative bg-gradient-to-b from-brand-bg via-brand-bg to-[#f4f4f6] scroll-mt-20">

        {/* ── SOUS-ONGLETS ─────────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto pt-10 pb-6 px-4 relative z-10">
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
                    className="object-cover w-full h-[400px] md:h-[500px]"
                  />
                </div>
              </div>
            </div>

            {/* Facts cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {section.facts.map((fact, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="bg-white/60 backdrop-blur-md border border-white rounded-[2rem] p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_10px_40px_rgb(0,0,0,0.08)] transition-all h-full flex flex-col justify-center items-center text-center hover:-translate-y-1 relative overflow-hidden">
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

            {/* Navigation sous-onglets */}
            <div className="flex justify-between items-center pt-8 border-t border-black/5 mb-16">
              <button
                onClick={() => {
                  const idx = subTabs.findIndex(t => t.id === activeSubTab);
                  if (idx > 0) {
                    setActiveSubTab(subTabs[idx - 1].id);
                    setTimeout(() => contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
                  }
                }}
                disabled={activeSubTab === 'history'}
                className="cursor-pointer font-body font-semibold text-sm md:text-base px-6 py-3 rounded-full border-2 transition-all disabled:opacity-30 disabled:cursor-default hover:-translate-x-1"
                style={{ color: country.color, borderColor: country.color }}
              >
                ← {t('Culture', 'prev')}
              </button>

              <div className="flex gap-2">
                {subTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveSubTab(tab.id)}
                    className="w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer"
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
                    setTimeout(() => contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
                  }
                }}
                disabled={activeSubTab === 'gastronomy'}
                className="cursor-pointer font-body font-semibold text-sm md:text-base px-6 py-3 rounded-full transition-all disabled:opacity-30 disabled:cursor-default hover:translate-x-1 text-white"
                style={{ backgroundColor: country.color }}
              >
                {t('Culture', 'next')} →
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* ── FLOATING COUNTRY NAV ─────────────────────────────── */}
      <AnimatePresence>
        {showFloatingNav && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.25 }}
            className="hidden lg:block fixed right-4 top-1/2 -translate-y-1/2 z-50 group"
          >
            <div className="bg-deep/90 backdrop-blur-md rounded-2xl p-2.5 flex flex-col gap-1.5 border border-white/10 shadow-2xl">
              {countriesData.map((c) => {
                const isActive = activeCountryId === c.id;
                const dc = getDisplayColor(c);
                return (
                  <button
                    key={c.id}
                    onClick={() => selectCountry(c.id)}
                    title={c.name[lang]}
                    className="flex items-center gap-0 group-hover:gap-2.5 rounded-xl px-1.5 group-hover:px-3 py-2 transition-all duration-300 cursor-pointer hover:bg-white/10"
                  >
                    <div
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0 transition-all duration-300"
                      style={{
                        backgroundColor: isActive ? dc : 'transparent',
                        border: `2px solid ${dc}`,
                        boxShadow: isActive ? `0 0 8px ${dc}80` : 'none',
                      }}
                    />
                    <span
                      className="font-body text-xs font-bold tracking-widest uppercase whitespace-nowrap overflow-hidden max-w-0 opacity-0 group-hover:max-w-[96px] group-hover:opacity-100 transition-all duration-300"
                      style={{ color: isActive ? '#fff' : dc }}
                    >
                      {c.name[lang]}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

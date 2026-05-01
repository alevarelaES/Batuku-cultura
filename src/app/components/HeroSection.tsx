import { motion, useScroll, useTransform } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { useRef } from 'react';

const IS_MOBILE = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;

const TITLE = 'BATUKU';

const letterVariant = {
  hidden:  { opacity: 0, y: 56 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const subtitleVariant = {
  hidden:  { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.9, ease: 'easeOut' } },
};

const bottomVariant = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 1.15, ease: 'easeOut' } },
};

export const HeroSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax only on desktop
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const flagParallax  = useTransform(scrollYProgress, [0, 1], IS_MOBILE ? [0, 0] : [0, 120]);
  const contentParallax = useTransform(scrollYProgress, [0, 1], IS_MOBILE ? [0, 0] : [0, -60]);

  const gradientStyle = {
    fontSize: 'clamp(2.8rem, 14vw, 22rem)',
    background: 'linear-gradient(120deg, #F7D116 0%, #E8751A 38%, #CE1126 72%, #E8751A 100%)',
    WebkitBackgroundClip: 'text' as const,
    WebkitTextFillColor: 'transparent' as const,
    backgroundClip: 'text' as const,
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden flex flex-col"
      style={{ background: '#08111F', marginTop: '-5rem', minHeight: 'calc(100vh + 5rem)' }}
    >
      {/* ── BACKGROUND ── */}

      {/* Drapeau Cap-Vert — parallax sur desktop */}
      <motion.img
        src="/flags/Flag_of_Cape_Verde.svg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-right pointer-events-none"
        style={{
          opacity: 0.2,
          zIndex: 2,
          y: flagParallax,
          maskImage: 'linear-gradient(to left, black 0%, black 45%, transparent 80%)',
          WebkitMaskImage: 'linear-gradient(to left, black 0%, black 45%, transparent 80%)',
        }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 3,
          background: `
            radial-gradient(ellipse 70% 60% at 75% 55%, rgba(232,117,26,0.15) 0%, transparent 65%),
            radial-gradient(ellipse 55% 70% at 8% 85%, rgba(0,56,147,0.3) 0%, transparent 55%),
            linear-gradient(115deg, rgba(8,17,31,0.92) 0%, rgba(8,17,31,0.45) 55%, rgba(8,17,31,0.65) 100%)
          `,
        }}
      />

      {/* ── MAIN CONTENT ── */}
      <motion.div
        className="relative flex flex-col px-8 md:px-14 lg:px-20"
        style={{ zIndex: 10, minHeight: '100vh', paddingTop: '5rem', paddingBottom: '3rem', y: contentParallax }}
      >
        {/* BATUKU — centré verticalement */}
        <div className="flex-1 flex flex-col justify-center">
          <p
            className="font-body font-semibold uppercase mb-3 ml-1"
            style={{ fontSize: 'clamp(0.6rem, 1.1vw, 0.85rem)', color: 'rgba(255,255,255,0.38)', letterSpacing: '0.22em' }}
          >
            {t('Home', 'assocSubtitle')}
          </p>

          {/* ── TITLE ── */}
          {IS_MOBILE ? (
            /* Mobile: plain text, no JS animation */
            <h1
              className="font-display font-bold leading-[0.82] tracking-tight select-none hero-title"
              style={gradientStyle}
            >
              {TITLE}
            </h1>
          ) : (
            /* Desktop: letter-by-letter reveal */
            <h1
              className="font-display font-bold leading-[0.82] tracking-tight select-none hero-title"
              style={gradientStyle}
              aria-label={TITLE}
            >
              {TITLE.split('').map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariant}
                  initial="hidden"
                  animate="visible"
                  style={{ display: 'inline-block' }}
                >
                  {char}
                </motion.span>
              ))}
            </h1>
          )}

          {/* ── SUBTITLE & CULTURA ── */}
          {IS_MOBILE ? (
            <div className="flex items-baseline gap-3 mt-1 ml-1">
              <span
                className="font-display font-extralight italic leading-none"
                style={{ fontSize: 'clamp(0.9rem, 3vw, 5rem)', color: 'rgba(255,255,255,0.18)' }}
              >&amp;</span>
              <span
                className="font-display font-light leading-none tracking-wide"
                style={{ fontSize: 'clamp(1.3rem, 5vw, 7.5rem)', color: 'rgba(255,255,255,0.16)' }}
              >CULTURA</span>
            </div>
          ) : (
            <motion.div
              className="flex items-baseline gap-3 mt-1 ml-1"
              variants={subtitleVariant}
              initial="hidden"
              animate="visible"
            >
              <span
                className="font-display font-extralight italic leading-none"
                style={{ fontSize: 'clamp(0.9rem, 3vw, 5rem)', color: 'rgba(255,255,255,0.18)' }}
              >&amp;</span>
              <span
                className="font-display font-light leading-none tracking-wide"
                style={{ fontSize: 'clamp(1.3rem, 5vw, 7.5rem)', color: 'rgba(255,255,255,0.16)' }}
              >CULTURA</span>
            </motion.div>
          )}
        </div>

        {/* BAS — description + citation */}
        {IS_MOBILE ? (
          <div className="flex items-end justify-between gap-8">
            <div className="flex flex-col gap-1 max-w-sm">
              <p className="font-body font-semibold text-base" style={{ color: 'rgba(255,255,255,0.72)' }}>
                {t('Home', 'cultAssocLabel')}
              </p>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.36)' }}>
                {t('Home', 'heroSubtitle')}
              </p>
            </div>
            <p className="hidden md:block font-body text-sm italic" style={{ color: '#F7D116', opacity: 0.58 }}>
              {t('Home', 'heroSlogan')}
            </p>
          </div>
        ) : (
          <motion.div
            className="flex items-end justify-between gap-8"
            variants={bottomVariant}
            initial="hidden"
            animate="visible"
          >
            <div className="flex flex-col gap-1 max-w-sm">
              <p className="font-body font-semibold text-base" style={{ color: 'rgba(255,255,255,0.72)' }}>
                {t('Home', 'cultAssocLabel')}
              </p>
              <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.36)' }}>
                {t('Home', 'heroSubtitle')}
              </p>
            </div>
            <p className="hidden md:block font-body text-sm italic" style={{ color: '#F7D116', opacity: 0.58 }}>
              {t('Home', 'heroSlogan')}
            </p>
          </motion.div>
        )}

      </motion.div>

      {/* BOTTOM — bande PALOP */}
      <div className="absolute bottom-0 left-0 right-0 flex" style={{ height: 4, zIndex: 20 }}>
        <div className="flex-1" style={{ background: '#1A6B3C' }} />
        <div className="flex-1" style={{ background: '#CE1126' }} />
        <div className="flex-1" style={{ background: '#F7D116' }} />
        <div className="flex-1" style={{ background: '#003893' }} />
        <div className="flex-1" style={{ background: '#E8751A' }} />
      </div>
    </section>
  );
};

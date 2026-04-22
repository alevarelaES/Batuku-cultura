import { useLanguage } from '../contexts/LanguageContext';

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section
      className="relative w-full overflow-hidden flex flex-col"
      style={{ background: '#08111F', marginTop: '-5rem', minHeight: 'calc(100vh + 5rem)' }}
    >
      {/* ── BACKGROUND ── */}

      {/* Drapeau Cap-Vert — demi-droite, plus visible */}
      <img
        src="/flags/flag-cape-verde.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-right pointer-events-none"
        style={{
          opacity: 0.2,
          zIndex: 2,
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
      <div
        className="relative flex flex-col px-8 md:px-14 lg:px-20"
        style={{ zIndex: 10, minHeight: '100vh', paddingTop: '5rem', paddingBottom: '3rem' }}
      >
        {/* BATUKU — flex-1 + items-center = centré verticalement */}
        <div className="flex-1 flex flex-col justify-center animate-[fade-in-up_0.9s_ease-out_0.1s_both]">
          <p
            className="font-body font-semibold uppercase mb-3 ml-1"
            style={{ fontSize: 'clamp(0.6rem, 1.1vw, 0.85rem)', color: 'rgba(255,255,255,0.38)', letterSpacing: '0.22em' }}
          >
            Association Batuku &amp; Cultura — PALOP · Suisse Romande
          </p>

          <h1
            className="font-display font-bold leading-[0.82] tracking-tight select-none"
            style={{
              fontSize: 'clamp(5rem, 16vw, 22rem)',
              background: 'linear-gradient(120deg, #F7D116 0%, #E8751A 38%, #CE1126 72%, #E8751A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 50px rgba(232,117,26,0.28))',
            }}
          >
            BATUKU
          </h1>

          <div className="flex items-baseline gap-3 mt-1 ml-1 animate-[fade-in-up_1.1s_ease-out_0.3s_both]">
            <span
              className="font-display font-extralight italic leading-none"
              style={{ fontSize: 'clamp(1.2rem, 3.5vw, 5rem)', color: 'rgba(255,255,255,0.18)' }}
            >
              &amp;
            </span>
            <span
              className="font-display font-light leading-none tracking-wide"
              style={{ fontSize: 'clamp(1.8rem, 5.5vw, 7.5rem)', color: 'rgba(255,255,255,0.16)' }}
            >
              CULTURA
            </span>
          </div>
        </div>

        {/* BAS — description + citation, sans boutons */}
        <div className="flex items-end justify-between gap-8 animate-[fade-in-up_1.3s_ease-out_0.5s_both]">

          <div className="flex flex-col gap-1 max-w-sm">
            <p className="font-body font-semibold text-base" style={{ color: 'rgba(255,255,255,0.72)' }}>
              Association Culturelle Cap-Verdienne
            </p>
            <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.36)' }}>
              {t('Home', 'heroSubtitle')}
            </p>
          </div>

          <p className="hidden md:block font-body text-sm italic" style={{ color: '#F7D116', opacity: 0.58 }}>
            "A cultura não se explica. Vive-se."
          </p>
        </div>

        {/* SCROLL INDICATOR — centré, subtil */}
        <div className="flex justify-center mt-6 animate-[fade-in-up_1.6s_ease-out_0.8s_both]">
          <div
            className="flex justify-center items-start pt-1.5 rounded-full"
            style={{ width: 22, height: 36, border: '1.5px solid rgba(255,255,255,0.22)' }}
          >
            <div
              className="rounded-full"
              style={{
                width: 3,
                height: 6,
                background: 'rgba(255,255,255,0.45)',
                animation: 'scroll-bounce 1.8s ease-in-out infinite',
              }}
            />
          </div>
        </div>
      </div>

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

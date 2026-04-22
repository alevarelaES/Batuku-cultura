import React from 'react';
import { FadeIn } from './components/FadeIn';
import {
  PatternBg,
  Confetti,
  CarnivalMask,
  CapeVerdeIslands,
  OceanWave,
  Guitar,
} from './components/Decorations';
import { useLanguage } from './contexts/LanguageContext';
import { MapPin, Calendar, Heart, Flame, Sparkles } from 'lucide-react';

const teamData = [
  { name: 'Ercelina Correia Garcia',        roleKey: 'rolePresidente',             img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=256&h=256&fit=facearea&facepad=2&q=80', color: 'bg-primary' },
  { name: 'Emilita Mendes Stevens',         roleKey: 'roleVicePresidente',         img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=256&h=256&fit=facearea&facepad=2&q=80', color: 'bg-orange' },
  { name: 'Carla Sofia Lopes De Oliveira',  roleKey: 'roleTresoriereSecretaire',   img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=256&h=256&fit=facearea&facepad=2&q=80', color: 'bg-yellow' },
  { name: 'Maria dos Anjos Freitas Cruz',   roleKey: 'roleRespCulinaire',          img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=256&h=256&fit=facearea&facepad=2&q=80', color: 'bg-green' },
  { name: 'Helder Correia Garcia',          roleKey: 'roleRespOrganisation',       img: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=256&h=256&fit=facearea&facepad=2&q=80', color: 'bg-deep' },
  { name: 'Maria Paula Lopes Monteiro Vaz', roleKey: 'roleRespSante',              img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=256&h=256&fit=facearea&facepad=2&q=80', color: 'bg-primary' },
  { name: 'Maria José Furtado',             roleKey: 'roleRespEvenements',         img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=256&h=256&fit=facearea&facepad=2&q=80', color: 'bg-orange' },
  { name: 'Monica Josefa (Nelcy)',          roleKey: 'roleCommunicationDigitale',  img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=256&h=256&fit=facearea&facepad=2&q=80', color: 'bg-green', extern: true },
  { name: 'Kelton Lamine Correia Garcia',   roleKey: 'roleIntervenantMusical',     img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=256&h=256&fit=facearea&facepad=2&q=80', color: 'bg-yellow', extern: true },
];

export const About = () => {
  const { t } = useLanguage();
  const values = t('About', 'values').split(',');
  const activities = t('About', 'activities').split(',');

  const palopPills = [
    { abbr: 'CPV', nameKey: 'palopCv',  color: 'bg-primary', star: true },
    { abbr: 'ANG', nameKey: 'palopAng', color: 'bg-red' },
    { abbr: 'GNB', nameKey: 'palopGnb', color: 'bg-yellow text-brand-text' },
    { abbr: 'MOZ', nameKey: 'palopMoz', color: 'bg-green' },
    { abbr: 'STP', nameKey: 'palopStp', color: 'bg-deep border border-white/20' },
  ];

  return (
    <div className="w-full relative bg-brand-bg">
      <PatternBg className="text-primary opacity-[0.03] fixed inset-0 z-0 pointer-events-none" />

      {/* ─── SECTION 1 : HERO IDENTITÉ OFFICIELLE ─── */}
      <section className="bg-primary relative overflow-hidden pt-16 pb-0">
        {/* Illustration de fond — subtile, bords seulement */}
        <img
          src="/Sections_fonds/fond qui sommes nous .png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          style={{
            opacity: 0.15,
            mixBlendMode: 'screen',
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mb-10">
          <FadeIn>
            <div className="mb-6 flex justify-center">
              <img
                src="/logo/logo4.jpg"
                alt="Logo Batuku & Cultura"
                className="h-24 w-24 rounded-full object-cover ring-2 ring-white/40 shadow-[0_0_24px_rgba(247,209,22,0.35)]"
                loading="lazy"
              />
            </div>

            <h1 className="text-white text-5xl md:text-7xl font-display mb-4 leading-tight drop-shadow-sm">
              {t('About', 'associationFull')}
            </h1>
            <p className="font-body text-orange text-lg tracking-[0.2em] uppercase mb-8 font-medium">
              {t('About', 'associationSub')}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 font-body text-white/80 text-sm bg-black/10 inline-flex px-8 py-3 rounded-full backdrop-blur-sm">
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-orange" />
                Grand'Rue 36, 1530 Payerne
              </span>
              <span className="w-1 h-1 rounded-full bg-white/30 hidden sm:block"></span>
              <span className="flex items-center gap-2">
                <Calendar size={16} className="text-orange" />
                {t('About', 'founded')}
              </span>
            </div>
          </FadeIn>
        </div>
        <OceanWave className="w-full text-brand-bg h-12 md:h-16 pointer-events-none" />
      </section>

      {/* ─── SECTION 2 : HISTOIRE & IDENTITÉ (CONDENSÉE) ─── */}
      <section className="py-12 md:py-16 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <FadeIn className="h-full">
            <div className="bg-deep h-full rounded-[2rem] p-8 md:p-10 shadow-xl relative overflow-hidden flex flex-col justify-center">
              <Confetti className="absolute inset-0 text-orange opacity-5 pointer-events-none" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-orange/20 border border-orange/30 px-3 py-1.5 rounded-full mb-5">
                  <span className="w-2 h-2 rounded-full bg-orange inline-block shrink-0" />
                  <span className="font-body font-bold text-orange text-[10px] tracking-[0.2em] uppercase">
                    Payerne · 2025
                  </span>
                </div>
                <h2 className="text-orange text-3xl md:text-4xl font-display mb-4 leading-tight">
                  {t('About', 'historyTitle')}
                </h2>
                <div className="border-l-2 border-orange pl-4 mb-5">
                  <p className="font-display text-white text-xl tracking-wide leading-snug">
                    {t('About', 'historyTagline')}
                  </p>
                </div>
                <p className="font-body text-white/90 text-lg md:text-xl font-medium leading-relaxed mb-3">
                  {t('About', 'historyText1')}
                </p>
                <p className="font-body text-white/80 text-base md:text-lg font-medium leading-relaxed">
                  {t('About', 'historyText2')}
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="h-full">
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full flex flex-col justify-center border border-brand-text/5 relative overflow-hidden">
              <PatternBg className="text-primary opacity-5 absolute inset-0" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <span className="font-display text-primary text-lg font-bold tracking-wider">CPV</span>
                </div>
                <h2 className="text-brand-text text-3xl md:text-4xl font-display mb-4 leading-tight">
                  {t('About', 'capVertTitle')}
                </h2>
                <p className="font-body text-brand-text/90 text-lg md:text-xl font-medium leading-relaxed mb-6">
                  {t('About', 'capVertText')}
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Batuku', 'Morna', 'Funaná', 'Coladeira', 'Morabeza', 'Santiago'].map((kw, i) => (
                    <span
                      key={i}
                      className="bg-primary/5 text-primary font-body font-medium px-3 py-1.5 rounded-full text-[13px] border border-primary/10"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── SECTION 3 : TRANSMISSION & MISSION (REDESIGNED: FLUID & PREMIUM) ─── */}
      <section className="bg-gradient-to-b from-deep via-[#0A1731] to-deep text-white py-24 px-6 relative overflow-hidden">
        {/* Soft glowing ambient orbs */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-orange/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none"></div>
        
        <CarnivalMask className="absolute -bottom-10 right-0 text-white opacity-[0.03] w-96 h-96 rotate-[-15deg] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <div className="text-center max-w-4xl mx-auto mb-16">
              <span className="inline-flex items-center gap-3 font-body font-medium uppercase tracking-[0.3em] text-orange/80 text-sm mb-6">
                <span className="w-8 h-px bg-orange/40 shrink-0"></span>
                Notre Raison d'Être
              </span>
              <h2 className="text-white text-5xl md:text-6xl font-display mb-6 leading-tight drop-shadow-md">
                {t('About', 'transmissionTitle')}
              </h2>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 px-10 py-5 rounded-full inline-block shadow-2xl">
                <p className="font-body font-normal text-white/90 text-xl md:text-2xl tracking-wide italic">
                  "{t('About', 'transmissionTagline')}"
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              {/* Box 1: Mission */}
              <div className="group bg-gradient-to-b from-white/10 to-white/5 hover:from-white/15 hover:to-white/10 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange/20 rounded-full blur-3xl group-hover:bg-orange/30 transition-colors duration-500"></div>
                <h3 className="text-2xl font-display text-white mb-4 relative z-10">{t('About', 'missionTitle')}</h3>
                <p className="text-base md:text-lg font-body font-light text-white/80 leading-relaxed mb-4 relative z-10">
                  {t('About', 'missionText1')}
                </p>
                <p className="text-base md:text-lg font-body font-light text-white/80 leading-relaxed relative z-10">
                  {t('About', 'missionText2')}
                </p>
              </div>
              
              {/* Box 2: Transmission */}
              <div className="group bg-gradient-to-b from-white/10 to-white/5 hover:from-white/15 hover:to-white/10 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors duration-500"></div>
                <h3 className="text-2xl font-display text-white mb-4 relative z-10">Transmission</h3>
                <p className="text-base md:text-lg font-body font-light text-white/80 leading-relaxed mb-6 relative z-10 flex-1">
                  {t('About', 'transmissionText1')} {t('About', 'transmissionText2')}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                  {palopPills.map((p, i) => (
                    <div key={i} className={`${p.color} px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs uppercase font-bold tracking-widest shadow-lg`}>
                      {p.abbr}
                    </div>
                  ))}
                </div>
              </div>

              {/* Box 3: Activités & Valeurs */}
              <div className="group bg-gradient-to-b from-white/10 to-white/5 hover:from-white/15 hover:to-white/10 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow/20 rounded-full blur-3xl group-hover:bg-yellow/30 transition-colors duration-500"></div>
                <h3 className="text-2xl font-display text-white mb-6 relative z-10">Activités & Valeurs</h3>
                <div className="space-y-3 mb-6 relative z-10 flex-1">
                  {activities.map((act, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-white/90 text-sm md:text-base font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow shrink-0 group-hover:scale-150 transition-transform" />
                      <span className="leading-snug">{act.trim()}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {values.map((val, idx) => (
                    <span key={idx} className="bg-white/5 border border-white/20 text-white/80 px-3 py-1.5 rounded-lg text-xs uppercase tracking-widest font-bold backdrop-blur-sm group-hover:bg-white/10 transition-colors">
                      {val.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── SECTION 5 : L'ÉQUIPE (CONDENSÉE) ─── */}
      <section className="py-16 md:py-20 px-6 relative z-10 bg-brand-bg">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-primary text-4xl md:text-5xl font-display leading-tight">
              {t('About', 'teamTitle')}
            </h2>
            <div className="w-16 h-1 bg-orange mx-auto mt-4 rounded-full" />
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {teamData.map((member, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center bg-white rounded-[24px] p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-xl transition-all border border-black/5"
              >
                <div className={`w-24 h-24 md:w-28 md:h-28 rounded-full p-1.5 mb-4 ${member.color} bg-opacity-20`}>
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full border-2 border-white"
                  />
                </div>
                <h3 className="text-brand-text mb-1 text-lg md:text-xl font-medium text-center font-display leading-snug">
                  {member.name}
                </h3>
                <p className="font-body text-orange font-semibold text-sm md:text-base text-center uppercase tracking-wider mb-2">
                  {t('About', member.roleKey)}
                </p>
                {member.extern && (
                  <span className="bg-brand-bg text-brand-text/60 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase border border-black/5">
                    {t('About', 'extern')}
                  </span>
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ─── SECTION 6 : VISION FINALE ─── */}
      <section className="bg-deep py-20 px-6 relative overflow-hidden">
        <Confetti className="absolute inset-0 text-white opacity-5 pointer-events-none" />

        <FadeIn className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-white text-3xl md:text-4xl font-display leading-tight mb-4 drop-shadow-sm">
            {t('About', 'visionQuote')}
          </p>
          <p className="font-body text-white/50 text-xs tracking-[0.2em] uppercase mb-10">
            {t('About', 'visionAttrib')}
          </p>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-8 py-6 inline-block shadow-lg">
            <p className="font-display text-orange text-xl md:text-2xl tracking-wide">
              {t('About', 'visionFinalQuote')}
            </p>
          </div>
        </FadeIn>
      </section>
    </div>
  );
};

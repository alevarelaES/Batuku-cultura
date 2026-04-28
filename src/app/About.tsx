import React from 'react';
import { FadeInGroup, FadeInItem } from './components/FadeInStagger';
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

// pos = objectPosition CSS value, tuned per photo
const teamData = [
  { name: 'Ercelina Correia Garcia',        roleKey: 'rolePresidente',            img: '/membres/Ercelina%20Correia%20Garcia.jpeg',             accent: '#003893', pos: 'center 15%' },
  { name: 'Emilita Mendes Stevens',         roleKey: 'roleVicePresidente',        img: '/membres/Emilita%20Mendes%20Stevens.jpeg',              accent: '#E8751A', pos: 'center 25%' },
  { name: 'Carla Sofia Lopes De Oliveira',  roleKey: 'roleTresoriereSecretaire',  img: '/membres/Carla%20lopes%20Oliveira.jpeg',                accent: '#F7D116', pos: 'center 20%' },
  { name: 'Helder Correia Garcia',          roleKey: 'roleRespOrganisation',      img: '/membres/Helder%20Correia%20Garcia.jpeg',               accent: '#003893', pos: 'center 15%' },
  { name: 'Maria Paula Lopes Monteiro Vaz', roleKey: 'roleRespSante',             img: '/membres/Maria%20Paula%20Lopes%20Monteiro%20Vaz.jpeg',  accent: '#CE1126', pos: 'center 20%' },
  { name: 'Monica Gomes',                   roleKey: 'roleRespImageCoordination', img: '/membres/Monica%20gomes.jpeg',                          accent: '#1A6B3C', pos: 'center 20%', extern: true },
  { name: 'DJ Smile',                       roleKey: 'roleIngenieurSonDJ',        img: '/membres/DJ%20Smile.jpeg',                              accent: '#F7D116', pos: 'center 20%', extern: true },
];

interface MemberCardProps {
  member: typeof teamData[number];
  label: string;
}

const MemberCard = ({ member, label }: MemberCardProps) => (
  <div
    className="group relative rounded-2xl overflow-hidden cursor-default transition-[transform,box-shadow] duration-500 ease-out md:hover:-translate-y-1.5 md:hover:shadow-[0_16px_36px_rgba(0,0,0,0.28)]"
    style={{ background: '#0D1B2E' }}
  >
    <div className="relative aspect-[3/4] overflow-hidden">
      <img
        src={member.img}
        alt={member.name}
        loading="lazy"
        className="w-full h-full object-cover"
        style={{ objectPosition: member.pos }}
      />
      {/* Gradient bas uniquement */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, #0D1B2E 0%, #0D1B2E 12%, rgba(13,27,46,0.35) 38%, transparent 58%)',
        }}
      />
    </div>

    {/* Infos */}
    <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
      <div className="w-8 h-[3px] rounded-full mb-2" style={{ background: member.accent }} />
      <h3 className="text-white font-display text-sm md:text-base leading-snug mb-0.5">
        {member.name}
      </h3>
      <p className="font-body font-semibold text-[10px] md:text-xs uppercase tracking-widest" style={{ color: member.accent }}>
        {label}
      </p>
    </div>

    {/* Bordure colorée au survol */}
    <div
      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{ boxShadow: `inset 0 0 0 2px ${member.accent}` }}
    />
  </div>
);

export const About = () => {
  const { t } = useLanguage();
  const values = t('About', 'values').split(',');
  const activities = t('About', 'activities').split(',');

  const palopPills = [
    { abbr: 'CPV', nameKey: 'palopCv',  color: 'bg-primary', flag: '/flags/flag-cape-verde.jpg' },
    { abbr: 'ANG', nameKey: 'palopAng', color: 'bg-red',     flag: '/flags/flag-angola.jpg' },
    { abbr: 'GNB', nameKey: 'palopGnb', color: 'bg-yellow text-brand-text', flag: '/flags/flag-guinea-bissau.jpg' },
    { abbr: 'MOZ', nameKey: 'palopMoz', color: 'bg-green',   flag: '/flags/flag-mozambique.jpg' },
    { abbr: 'STP', nameKey: 'palopStp', color: 'bg-deep border border-white/20', flag: '/flags/flag-sao-tome-principe.jpg' },
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
          loading="lazy"
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
                    {t('About', 'payerneYear')}
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
          <FadeIn className="text-center max-w-4xl mx-auto mb-16">
            <span className="inline-flex items-center gap-3 font-body font-medium uppercase tracking-[0.3em] text-orange/80 text-sm mb-6">
              <span className="w-8 h-px bg-orange/40 shrink-0"></span>
              {t('About', 'reasonLabel')}
            </span>
            <h2 className="text-white text-5xl md:text-6xl font-display mb-6 leading-tight drop-shadow-md">
              {t('About', 'transmissionTitle')}
            </h2>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 px-10 py-5 rounded-full inline-block shadow-2xl">
              <p className="font-body font-normal text-white/90 text-xl md:text-2xl tracking-wide italic">
                "{t('About', 'transmissionTagline')}"
              </p>
            </div>
          </FadeIn>

          <FadeInGroup className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch" stagger={0.12}>
            {/* Box 1: Mission */}
            <FadeInItem>
              <div className="group bg-gradient-to-b from-white/10 to-white/5 hover:from-white/15 hover:to-white/10 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-[transform,box-shadow] duration-500 ease-out md:hover:-translate-y-1.5 relative overflow-hidden flex flex-col h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange/20 rounded-full blur-3xl group-hover:bg-orange/30 transition-colors duration-500"></div>
                <h3 className="text-2xl font-display text-white mb-4 relative z-10">{t('About', 'missionTitle')}</h3>
                <p className="text-base md:text-lg font-body font-light text-white/80 leading-relaxed mb-4 relative z-10">
                  {t('About', 'missionText1')}
                </p>
                <p className="text-base md:text-lg font-body font-light text-white/80 leading-relaxed relative z-10">
                  {t('About', 'missionText2')}
                </p>
              </div>
            </FadeInItem>

            {/* Box 2: Transmission */}
            <FadeInItem>
              <div className="group bg-gradient-to-b from-white/10 to-white/5 hover:from-white/15 hover:to-white/10 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-[transform,box-shadow] duration-500 ease-out md:hover:-translate-y-1.5 relative overflow-hidden flex flex-col h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors duration-500"></div>
                <h3 className="text-2xl font-display text-white mb-4 relative z-10">{t('About', 'transmissionBoxTitle')}</h3>
                <p className="text-base md:text-lg font-body font-light text-white/80 leading-relaxed mb-6 relative z-10 flex-1">
                  {t('About', 'transmissionText1')} {t('About', 'transmissionText2')}
                </p>
                <div className="flex flex-wrap gap-3 mt-auto relative z-10">
                  {palopPills.map((p, i) => (
                    <div key={i} className="flex items-center gap-2.5 bg-white/10 hover:bg-white/18 border border-white/25 px-3 py-2 rounded-full shadow-lg transition-colors">
                      <img src={p.flag} alt={p.abbr} loading="lazy" className="w-7 h-7 rounded-full object-cover shrink-0 ring-2 ring-white/40 shadow-md" />
                      <span className="text-white/90 text-xs uppercase font-bold tracking-widest">{p.abbr}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInItem>

            {/* Box 3: Activités & Valeurs */}
            <FadeInItem>
              <div className="group bg-gradient-to-b from-white/10 to-white/5 hover:from-white/15 hover:to-white/10 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-[transform,box-shadow] duration-500 ease-out md:hover:-translate-y-1.5 relative overflow-hidden flex flex-col h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow/20 rounded-full blur-3xl group-hover:bg-yellow/30 transition-colors duration-500"></div>
                <h3 className="text-2xl font-display text-white mb-6 relative z-10">{t('About', 'activitiesValuesBoxTitle')}</h3>
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
            </FadeInItem>
          </FadeInGroup>
        </div>
      </section>

      {/* ─── SECTION 5 : L'ÉQUIPE ─── */}
      <section className="py-16 md:py-20 relative z-10 bg-brand-bg">
        <FadeIn>
          <div className="text-center mb-10 px-6">
            <h2 className="text-primary text-4xl md:text-5xl font-display leading-tight">
              {t('About', 'teamTitle')}
            </h2>
            <div className="w-16 h-1 bg-orange mx-auto mt-4 rounded-full" />
          </div>

          {/* ── MOBILE : carousel horizontal scroll-snap ── */}
          <div
            className="md:hidden flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory pl-6"
            style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
          >
            {teamData.map((member, idx) => (
              <div key={idx} className="snap-start shrink-0 w-[68vw] max-w-[240px]">
                <MemberCard member={member} label={t('About', member.roleKey)} />
              </div>
            ))}
            {/* Spacer fin de liste */}
            <div className="shrink-0 w-2" />
          </div>

          {/* ── DESKTOP : grille ── */}
          <FadeInGroup className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 max-w-6xl mx-auto px-6" stagger={0.07}>
            {teamData.map((member, idx) => (
              <FadeInItem key={idx}>
                <MemberCard member={member} label={t('About', member.roleKey)} />
              </FadeInItem>
            ))}
          </FadeInGroup>
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

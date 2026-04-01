import React from 'react';
import { FadeIn } from './components/FadeIn';
import {
  PatternBg,
  Confetti,
  CarnivalMask,
  CapeVerdeIslands,
  OceanWave,
  FeatherLarge,
  Guitar,
  MusicNotes,
} from './components/Decorations';
import { MotifDrum, MotifIcons, MotifGuitar, MotifTribal } from './components/CulturalMotifs';
import { useLanguage } from './contexts/LanguageContext';
import { MapPin, Calendar, Award } from 'lucide-react';

const teamData = [
  { name: 'Ercelina Correia Garcia',        roleKey: 'rolePresidente',             img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=256&h=256&fit=facearea&facepad=2&q=80', color: 'bg-primary' },
  { name: 'Emilita Mendes Stevens',         roleKey: 'roleVicePresidente',         img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=256&h=256&fit=facearea&facepad=2&q=80', color: 'bg-cv' },
  { name: 'Carla Sofia Lopes De Oliveira',  roleKey: 'roleTresoriereSecretaire',   img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=256&h=256&fit=facearea&facepad=2&q=80', color: 'bg-accent' },
  { name: 'Maria dos Anjos Freitas Cruz',   roleKey: 'roleRespCulinaire',          img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=256&h=256&fit=facearea&facepad=2&q=80', color: 'bg-nature' },
  { name: 'Helder Correia Garcia',          roleKey: 'roleRespOrganisation',       img: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=256&h=256&fit=facearea&facepad=2&q=80', color: 'bg-deep' },
  { name: 'Maria Paula Lopes Monteiro Vaz', roleKey: 'roleRespSante',              img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=256&h=256&fit=facearea&facepad=2&q=80', color: 'bg-primary' },
  { name: 'Maria José Furtado',             roleKey: 'roleRespEvenements',         img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=256&h=256&fit=facearea&facepad=2&q=80', color: 'bg-cv' },
  { name: 'Monica Josefa (Nelcy)',          roleKey: 'roleCommunicationDigitale',  img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=256&h=256&fit=facearea&facepad=2&q=80', color: 'bg-nature', extern: true },
  { name: 'Kelton Lamine Correia Garcia',   roleKey: 'roleIntervenantMusical',     img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=256&h=256&fit=facearea&facepad=2&q=80', color: 'bg-accent', extern: true },
];

export const About = () => {
  const { t } = useLanguage();
  const values = t('About', 'values').split(',');
  const activities = t('About', 'activities').split(',');

  const palopPills = [
    { abbr: 'CPV', nameKey: 'palopCv',  color: 'bg-cv', star: true },
    { abbr: 'ANG', nameKey: 'palopAng', color: 'bg-primary' },
    { abbr: 'GNB', nameKey: 'palopGnb', color: 'bg-accent text-deep' },
    { abbr: 'MOZ', nameKey: 'palopMoz', color: 'bg-nature' },
    { abbr: 'STP', nameKey: 'palopStp', color: 'bg-deep border border-white/20' },
  ];

  return (
    <div className="w-full relative bg-brand-bg">
      <PatternBg className="text-primary opacity-5 fixed inset-0 z-0" />

      {/* ─── SECTION 1 : HERO IDENTITÉ OFFICIELLE ─── */}
      <section className="bg-cv relative overflow-hidden pt-20 pb-0">
        <CapeVerdeIslands className="absolute right-0 top-1/2 -translate-y-1/2 text-white opacity-[0.08] w-[700px] h-[440px] pointer-events-none" />
        <Guitar className="absolute bottom-10 left-1/4 text-white opacity-[0.07] w-16 h-32 pointer-events-none rotate-[10deg]" />
        <MusicNotes className="absolute top-10 right-1/4 text-white opacity-[0.05] w-48 h-48 pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-xl">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-4 bg-white/15 border border-white/20 px-6 py-3 rounded-full mb-8 backdrop-blur-sm">
                <span className="w-3 h-3 rounded-full bg-accent inline-block shrink-0" />
                <span className="font-body font-bold text-white text-sm tracking-[0.3em] uppercase">
                  {t('About', 'legalType')}
                </span>
              </div>

              <h1 className="text-accent text-center text-5xl md:text-7xl drop-shadow-xl mb-2 leading-tight">
                {t('About', 'associationFull')}
              </h1>
              <p className="font-body text-white/70 text-xl tracking-[0.2em] uppercase mb-8">
                {t('About', 'associationSub')}
              </p>

              {/* Infos légales */}
              <div className="flex flex-wrap items-center justify-center gap-6 font-body text-white/60 text-sm">
                <span className="flex items-center gap-2">
                  <MapPin size={16} className="text-accent" />
                  Grand'Rue 36, 1530 Payerne (VD), Suisse
                </span>
                <span className="flex items-center gap-2">
                  <Calendar size={16} className="text-accent" />
                  {t('About', 'founded')}
                </span>
                <span className="flex items-center gap-2">
                  <Award size={16} className="text-accent" />
                  {t('About', 'legalType')}
                </span>
              </div>
            </div>
          </FadeIn>
        </div>

        <OceanWave className="w-full text-brand-bg h-20 pointer-events-none" />
      </section>

      {/* ─── SECTION 2 : NOTRE HISTOIRE ─── */}
      <section className="py-section px-4 md:px-xl max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            {/* Carte histoire */}
            <div className="bg-deep rounded-[40px] p-10 shadow-2xl relative overflow-hidden">
              <PatternBg className="text-white opacity-5 absolute inset-0" />
              <Confetti className="absolute inset-0 text-accent opacity-10 pointer-events-none" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-3 bg-accent/20 border border-accent/30 px-4 py-2 rounded-full mb-6">
                  <span className="w-2 h-2 rounded-full bg-accent inline-block shrink-0" />
                  <span className="font-body font-bold text-accent text-xs tracking-[0.25em] uppercase">
                    Payerne · Canton de Vaud · 2025
                  </span>
                </div>
                <h2 className="text-accent text-4xl mb-4 leading-tight">
                  {t('About', 'historyTitle')}
                </h2>
                {/* Tagline signature */}
                <div className="border-l-4 border-accent pl-5 mb-8">
                  <p className="font-display text-white text-2xl tracking-wide leading-tight">
                    {t('About', 'historyTagline')}
                  </p>
                </div>
                <p className="font-body text-white/85 text-lg leading-relaxed mb-4">
                  {t('About', 'historyText1')}
                </p>
                <p className="font-body text-white/70 text-base leading-relaxed">
                  {t('About', 'historyText2')}
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            {/* Identité cap-verdienne */}
            <div className="bg-cv p-10 rounded-[40px] shadow-2xl relative overflow-hidden border-4 border-cv/30">
              <CapeVerdeIslands className="absolute -right-10 -bottom-5 text-white opacity-[0.08] w-[400px] h-[250px] pointer-events-none" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <span className="font-display text-white text-xl tracking-wider">CPV</span>
                </div>
                <h2 className="text-white text-4xl mb-6 leading-tight">{t('About', 'capVertTitle')}</h2>
                <p className="font-body text-white/90 text-lg leading-relaxed">
                  {t('About', 'capVertText')}
                </p>
                <div className="flex flex-wrap gap-3 mt-8">
                  {['Batuku', 'Morna', 'Funaná', 'Coladeira', 'Morabeza', 'Santiago'].map((kw, i) => (
                    <span
                      key={i}
                      className="bg-white/20 text-white font-body font-bold px-4 py-2 rounded-full text-sm border border-white/30 backdrop-blur-sm"
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

      {/* ─── SECTION 3 : TRANSMISSION VIVANTE ─── */}
      <section className="bg-deep py-20 px-4 md:px-xl relative overflow-hidden">
        <Confetti className="absolute inset-0 text-accent opacity-10 pointer-events-none" />
        <CarnivalMask className="absolute -bottom-10 -right-10 text-accent opacity-10 w-80 h-80 rotate-[-15deg] pointer-events-none" />
        
        <FadeIn className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-accent text-5xl md:text-6xl mb-6 leading-tight">
              {t('About', 'transmissionTitle')}
            </h2>
            {/* Tagline centrale */}
            <div className="inline-block bg-accent/10 border border-accent/30 px-8 py-4 rounded-[20px] mb-8">
              <p className="font-display text-white text-2xl md:text-3xl tracking-wide leading-snug">
                {t('About', 'transmissionTagline')}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-[30px] border border-white/10">
              <p className="font-body text-white/85 text-lg leading-relaxed">
                {t('About', 'transmissionText1')}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-[30px] border border-white/10">
              <p className="font-body text-white/85 text-lg leading-relaxed">
                {t('About', 'transmissionText2')}
              </p>
              {/* PALOPs pill strip */}
              <div className="flex flex-wrap gap-3 mt-6">
                {palopPills.map((p, i) => (
                  <div
                    key={i}
                    className={`${p.color} text-white font-body font-bold px-3 py-1.5 rounded-full flex items-center gap-2 text-xs shadow ${p.star ? 'ring-2 ring-accent ring-offset-1 ring-offset-deep' : ''}`}
                  >
                    <span className="w-4 h-4 rounded-full bg-white/25 flex items-center justify-center text-[10px] font-display shrink-0">
                      {p.abbr.slice(0, 1)}
                    </span>
                    <span className="tracking-wider uppercase">{t('About', p.nameKey)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ─── SECTION 4 : MISSION ─── */}
      <section className="py-section px-4 md:px-xl max-w-7xl mx-auto relative z-10">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Mission */}
            <div className="bg-white/90 backdrop-blur-md p-10 rounded-[30px] shadow-xl border-l-8 border-primary">
              <h2 className="text-primary mb-6 text-4xl leading-tight">{t('About', 'missionTitle')}</h2>
              <p className="font-body opacity-90 text-lg leading-relaxed mb-4 font-medium text-text">
                {t('About', 'missionText1')}
              </p>
              <p className="font-body opacity-80 text-lg leading-relaxed font-medium text-text">
                {t('About', 'missionText2')}
              </p>
            </div>

            {/* Activités & Valeurs */}
            <div className="space-y-6">
              <div className="bg-white/90 backdrop-blur-md p-10 rounded-[30px] shadow-xl border-l-8 border-cv">
                <h2 className="text-cv mb-6 text-4xl leading-tight">{t('About', 'activitiesTitle')}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activities.map((act, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 bg-cv/5 border border-cv/15 rounded-2xl px-4 py-3"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-cv shrink-0" />
                      <span className="font-body font-medium text-text/80 text-sm leading-snug">
                        {act.trim()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Valeurs */}
              <div className="bg-primary p-8 rounded-[30px] shadow-xl relative overflow-hidden">
                <PatternBg className="text-deep opacity-10" />
                <div className="relative z-10">
                  <h2 className="text-white mb-6 text-4xl drop-shadow-md">{t('About', 'valuesTitle')}</h2>
                  <div className="flex flex-wrap gap-3">
                    {values.map((val, idx) => (
                      <span
                        key={idx}
                        className="bg-accent text-deep px-5 py-2.5 rounded-full font-body font-bold text-lg shadow-[0_5px_15px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform cursor-default"
                      >
                        {val.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ─── SECTION 5 : L'ÉQUIPE ─── */}
      <section className="py-section px-4 md:px-xl relative z-10 bg-brand-bg overflow-hidden">
        <FadeIn className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-primary text-5xl md:text-6xl leading-tight">
              {t('About', 'teamTitle')}
            </h2>
            <div className="w-24 h-1.5 bg-accent mx-auto mt-4 rounded-full" />
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
            {teamData.map((member, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center group bg-white/60 backdrop-blur-sm p-8 rounded-[40px] shadow-lg hover:shadow-2xl transition-all hover:-translate-y-4 border border-white"
              >
                <div
                  className={`w-[160px] h-[160px] rounded-full p-2 mb-6 ${member.color} shadow-xl group-hover:scale-110 transition-transform duration-500`}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full border-4 border-white"
                  />
                </div>
                <h3 className="text-text mb-2 text-2xl text-center leading-tight">{member.name}</h3>
                <div className="flex flex-col items-center gap-2">
                  <p className="font-body text-primary font-bold text-lg uppercase tracking-wider text-center">
                    {t('About', member.roleKey)}
                  </p>
                  {member.extern && (
                    <span className="bg-deep/10 text-deep px-3 py-1 rounded-full text-xs font-bold uppercase">
                      {t('About', 'extern')}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ─── SECTION 6 : VISION FINALE ─── */}
      <section className="bg-cv py-24 px-4 md:px-xl relative overflow-hidden">
        <CapeVerdeIslands className="absolute right-0 top-1/2 -translate-y-1/2 text-white opacity-[0.06] w-[700px] h-[440px] pointer-events-none" />
        <Confetti className="absolute inset-0 text-white opacity-20 pointer-events-none" />

        <FadeIn className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Citation vision */}
          <div className="mb-12">
            <p className="text-white text-4xl md:text-5xl font-display leading-tight tracking-wide mb-6 drop-shadow-sm">
              {t('About', 'visionQuote')}
            </p>
            <p className="font-body text-white/60 text-sm tracking-[0.2em] uppercase">
              {t('About', 'visionAttrib')}
            </p>
          </div>

          {/* Séparateur */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-16 bg-white/30" />
            <span className="w-2 h-2 rounded-full bg-accent inline-block" />
            <div className="h-px w-16 bg-white/30" />
          </div>

          {/* Phrase finale signature */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-[30px] px-10 py-8 inline-block shadow-2xl">
            <p className="font-display text-accent text-3xl md:text-4xl tracking-wide leading-snug">
              {t('About', 'visionFinalQuote')}
            </p>
          </div>
        </FadeIn>
      </section>
    </div>
  );
};
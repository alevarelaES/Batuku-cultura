import { useTranslations } from 'next-intl'
import { teamMembers } from '@/lib/data'

export default function AboutPage() {
  const t = useTranslations('About')

  const values = [
    { key: 'value1', color: 'bg-primary/10 text-primary border-primary/30' },
    { key: 'value2', color: 'bg-cv/10 text-cv border-cv/30' },
    { key: 'value3', color: 'bg-nature/10 text-nature border-nature/30' },
    { key: 'value4', color: 'bg-deep/10 text-deep border-deep/30' },
    { key: 'value5', color: 'bg-accent/20 text-deep border-accent/40' },
  ] as const

  const missions = [
    { icon: '🎵', title: 'Promouvoir', desc: 'Les cultures cap-verdiennes et des pays PALOP', color: 'border-l-primary' },
    { icon: '💃', title: 'Transmettre', desc: 'Traditions, musique, danse et gastronomie', color: 'border-l-cv' },
    { icon: '🤝', title: 'Intégrer', desc: 'Favoriser le vivre-ensemble et le respect', color: 'border-l-nature' },
    { icon: '⭐', title: 'Valoriser', desc: 'Les talents artistiques de la diaspora', color: 'border-l-deep' },
  ]

  return (
    <div className="w-full">

      {/* ── HERO PAGE ────────────────────────────────────────────── */}
      <section className="bg-primary py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 african-pattern opacity-20 pointer-events-none" />
        <div className="relative z-10">
          <h1 className="font-display text-accent text-6xl md:text-8xl text-shadow-lg">
            {t('pageTitle')}
          </h1>
        </div>
      </section>

      {/* ── MISSION & VALEURS ────────────────────────────────────── */}
      <section className="bg-brand-bg section-padding px-4 md:px-12">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Mission */}
            <div className="bg-white rounded-card p-8 shadow-card border-l-4 border-primary">
              <h2 className="font-display text-primary text-3xl mb-6">{t('missionTitle')}</h2>
              <p className="font-body text-brand-text/80 leading-relaxed mb-4">{t('missionText1')}</p>
              <p className="font-body text-brand-text/80 leading-relaxed">{t('missionText2')}</p>

              {/* 4 piliers mission */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                {missions.map((m) => (
                  <div key={m.title} className={`bg-brand-bg rounded-lg p-3 border-l-4 ${m.color}`}>
                    <div className="text-lg mb-1">{m.icon}</div>
                    <div className="font-body font-semibold text-sm text-brand-text">{m.title}</div>
                    <div className="font-body text-xs text-brand-text/60 mt-1">{m.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Valeurs */}
            <div className="bg-primary rounded-card p-8 shadow-card african-pattern">
              <h2 className="font-display text-accent text-3xl mb-6">{t('valuesTitle')}</h2>
              <div className="flex flex-wrap gap-3">
                {values.map((v) => (
                  <span
                    key={v.key}
                    className="font-body font-semibold text-sm px-4 py-2 rounded-pill bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-colors"
                  >
                    {t(v.key)}
                  </span>
                ))}
              </div>

              {/* Activités */}
              <div className="mt-8 space-y-2">
                {[
                  'Événements culturels et concerts live',
                  'Ateliers de danse (Batuku, traditions africaines)',
                  'Activités culinaires et gastronomiques',
                  'Rencontres interculturelles',
                  'Projets éducatifs et sociaux',
                ].map((activity) => (
                  <div key={activity} className="flex items-center gap-3 text-white/85 font-body text-sm">
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    {activity}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ÉQUIPE ───────────────────────────────────────────────── */}
      <section className="bg-white section-padding px-4 md:px-12">
        <div className="container-wide">
          <h2 className="font-display text-primary text-4xl md:text-5xl text-center mb-12">
            {t('teamTitle')}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className={`bg-brand-bg rounded-card p-6 text-center shadow-card hover:shadow-hero transition-shadow ${member.isExternal ? 'opacity-75' : ''}`}
              >
                {/* Avatar */}
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${member.color} flex items-center justify-center mx-auto mb-4 text-white font-display text-2xl`}>
                  {member.initials}
                </div>
                <div className="font-body font-semibold text-brand-text text-sm leading-tight mb-1">
                  {member.name}
                </div>
                <div className="font-body text-primary text-xs font-medium uppercase tracking-wide">
                  {member.role}
                </div>
                {member.isExternal && (
                  <span className="inline-block mt-2 font-body text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-pill">
                    Externe
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISION ───────────────────────────────────────────────── */}
      <section className="bg-accent section-padding px-4 md:px-12 relative overflow-hidden">
        <div className="absolute top-4 left-8 font-display text-deep/10 text-[200px] leading-none select-none pointer-events-none">
          "
        </div>
        <div className="container-wide relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="font-display text-deep text-3xl md:text-5xl leading-tight mb-6">
            {t('visionQuote')}
          </h2>
          <p className="font-body font-semibold text-deep/70 tracking-widest text-sm uppercase">
            {t('visionAttrib')}
          </p>
        </div>
      </section>

    </div>
  )
}

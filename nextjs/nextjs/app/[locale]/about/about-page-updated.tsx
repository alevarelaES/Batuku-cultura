import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { ArrowRight } from 'lucide-react'
import { teamMembers } from '@/lib/data'

export default function AboutPage() {
  const t = useTranslations('About')

  const values = [
    { label: 'Respect', color: '#1A5CB5' },
    { label: 'Solidarité', color: '#E8620A' },
    { label: 'Transmission', color: '#2D7A5E' },
    { label: 'Diversité', color: '#5C2D82' },
    { label: 'Engagement', color: '#F5B800' },
  ]

  const missions = [
    { icon: '🎵', title: 'Promouvoir', desc: 'Les cultures capverdiennes et des pays PALOP' },
    { icon: '💃', title: 'Transmettre', desc: 'Les traditions à travers la musique, la danse et la gastronomie' },
    { icon: '🤝', title: 'Favoriser', desc: 'L\'intégration, le vivre-ensemble et le respect des cultures' },
    { icon: '🌍', title: 'Créer', desc: 'Des espaces d\'échange entre les communautés' },
    { icon: '⭐', title: 'Valoriser', desc: 'Les talents artistiques issus de la diaspora' },
  ]

  const activities = [
    { icon: '🎤', text: 'Des événements culturels et concerts live' },
    { icon: '💃', text: 'Des ateliers de danse (Batuku, traditions africaines)' },
    { icon: '🍽️', text: 'Des activités culinaires et découvertes gastronomiques' },
    { icon: '🌐', text: 'Des rencontres interculturelles' },
    { icon: '📚', text: 'Des projets éducatifs et sociaux' },
  ]

  return (
    <div className="w-full">

      {/* ── HERO PAGE ────────────────────────────────────────────── */}
      <section className="bg-primary py-20 px-4 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)',
          }}
        />
        <div className="relative z-10">
          <h1 className="font-display text-accent text-6xl md:text-8xl mb-4"
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
            Qui sommes-nous
          </h1>
          <p className="font-body text-white/80 text-lg max-w-2xl mx-auto italic">
            Une association culturelle à but non lucratif basée dans le canton de Vaud, en Suisse.
          </p>
        </div>
      </section>

      {/* ── NOTRE HISTOIRE ───────────────────────────────────────── */}
      <section className="bg-brand-bg section-padding px-4 md:px-12">
        <div className="container-wide max-w-3xl mx-auto text-center">
          <h2 className="font-display text-primary text-4xl md:text-5xl mb-8">Notre histoire</h2>

          <div className="space-y-5 font-body text-brand-text/80 text-lg leading-relaxed">
            <p className="text-xl font-semibold text-brand-text">
              Batuku & Cultura n'est pas seulement une association.<br />
              C'est une histoire de cœur, de racines et de transmission.
            </p>
            <p>
              Derrière ce projet, il y a des femmes, des parcours, des cultures…
              mais surtout une volonté profonde : ne pas laisser disparaître ce qui nous a construites.
            </p>
            <p>
              Nous sommes issues de cultures riches, vivantes, fortes — celles du Cap-Vert et des pays africains
              de langue portugaise. Des cultures faites de musique, de danse, de partage, de résilience et d'histoire.
            </p>
            <p>
              Mais en vivant en Suisse, loin de nos terres d'origine, une question s'est imposée à nous :<br />
              <em className="text-primary font-medium">comment transmettre cette richesse à nos enfants ? comment la faire vivre ici ?</em>
            </p>
            <p className="text-xl font-semibold text-brand-text">
              C'est de cette réflexion qu'est née l'Association Batuku & Cultura.
            </p>
          </div>
        </div>
      </section>

      {/* ── TRANSMISSION VIVANTE ─────────────────────────────────── */}
      <section className="bg-primary section-padding px-4 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)',
          }}
        />
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-accent text-4xl md:text-5xl mb-6">
                Une transmission vivante
              </h2>
              <div className="space-y-4 font-body text-white/85 text-lg leading-relaxed">
                <p>
                  <strong className="text-accent">Le Batuku, au cœur de notre identité, n'est pas seulement une danse.</strong><br />
                  C'est une voix. Une mémoire. Une force.
                </p>
                <p>
                  À travers lui, nous racontons des histoires, nous libérons des émotions,
                  nous rassemblons les générations.
                </p>
                <p>
                  Notre association est née de ce besoin de transmettre — aux jeunes, aux familles,
                  à la diaspora, mais aussi à toutes les personnes curieuses de découvrir une culture authentique.
                </p>
              </div>
            </div>

            {/* Bloc "Créer du lien" */}
            <div className="bg-white/10 rounded-card p-8 backdrop-blur">
              <h3 className="font-display text-accent text-2xl mb-4">Créer du lien, créer du sens</h3>
              <div className="space-y-3 font-body text-white/80">
                <p>Batuku & Cultura est un espace de rencontre.</p>
                <p>Un lieu où les cultures se croisent, se respectent et s'enrichissent.</p>
                <p>Un lieu où l'on partage bien plus que des événements : on partage des émotions, des valeurs, une vision.</p>
                <div className="mt-4 p-4 bg-accent/20 rounded-lg border-l-4 border-accent">
                  <p className="font-body font-semibold text-white italic">
                    "Nous croyons profondément que la culture est un pont.<br />
                    Un pont entre les peuples, entre les générations, entre les histoires."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION ──────────────────────────────────────────────── */}
      <section className="bg-white section-padding px-4 md:px-12">
        <div className="container-wide">
          <h2 className="font-display text-primary text-4xl md:text-5xl text-center mb-4">
            Notre mission
          </h2>
          <p className="font-body text-brand-text/60 text-center mb-10 max-w-xl mx-auto">
            Notre association s'engage à promouvoir, valoriser et transmettre les cultures PALOP
            et à créer des ponts culturels avec la Suisse.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {missions.map((m, i) => (
              <div
                key={m.title}
                className="bg-brand-bg rounded-card p-6 border-t-4 hover:shadow-card transition-shadow"
                style={{ borderTopColor: values[i % values.length].color }}
              >
                <div className="text-2xl mb-3">{m.icon}</div>
                <div
                  className="font-display text-xl mb-2"
                  style={{ color: values[i % values.length].color }}
                >
                  {m.title}
                </div>
                <p className="font-body text-brand-text/70 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACTIVITÉS ────────────────────────────────────────────── */}
      <section className="bg-brand-bg section-padding px-4 md:px-12">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-primary text-4xl md:text-5xl mb-6">
                Nos activités
              </h2>
              <p className="font-body text-brand-text/70 mb-6">
                Nous organisons régulièrement des événements et activités pour faire vivre les cultures PALOP en Suisse romande.
              </p>
              <div className="space-y-3">
                {activities.map((a) => (
                  <div key={a.text} className="flex items-start gap-3 bg-white rounded-lg p-3 shadow-card">
                    <span className="text-xl flex-shrink-0">{a.icon}</span>
                    <span className="font-body text-brand-text/80 text-sm leading-relaxed">{a.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Valeurs */}
            <div>
              <h2 className="font-display text-primary text-4xl md:text-5xl mb-6">
                Nos valeurs
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {values.map((v) => (
                  <div
                    key={v.label}
                    className="flex items-center gap-4 bg-white rounded-card p-4 shadow-card"
                  >
                    <div
                      className="w-3 h-12 rounded-full flex-shrink-0"
                      style={{ backgroundColor: v.color }}
                    />
                    <span
                      className="font-display text-2xl"
                      style={{ color: v.color }}
                    >
                      {v.label}
                    </span>
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
          <div className="text-center mb-4">
            <h2 className="font-display text-primary text-4xl md:text-5xl mb-3">
              Un projet porté avec le cœur
            </h2>
            <p className="font-body text-brand-text/60 max-w-2xl mx-auto">
              Ce projet est porté par une équipe engagée, humaine et déterminée.
              Des femmes qui donnent de leur temps, de leur énergie et de leur passion
              pour construire quelque chose de beau, de vrai et de durable.
            </p>
          </div>

          <div className="text-center mb-10">
            <span className="font-body text-sm text-brand-text/50 italic">
              Chaque événement, chaque répétition, chaque moment partagé est le reflet de cet engagement.
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className={`bg-brand-bg rounded-card p-5 text-center shadow-card hover:shadow-hero transition-shadow ${member.isExternal ? 'opacity-70' : ''}`}
              >
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${member.color} flex items-center justify-center mx-auto mb-3 text-white font-display text-2xl`}
                >
                  {member.initials}
                </div>
                <div className="font-body font-semibold text-brand-text text-sm leading-tight mb-1">
                  {member.name}
                </div>
                <div className="font-body text-primary text-xs font-medium uppercase tracking-wide">
                  {member.role}
                </div>
                {member.isExternal && (
                  <span className="inline-block mt-2 font-body text-xs bg-gray-100 text-gray-400 px-2 py-0.5 rounded-pill">
                    Collaborateur externe
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISION FINALE ────────────────────────────────────────── */}
      <section className="bg-deep section-padding px-4 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)',
          }}
        />
        <div className="container-wide relative z-10 text-center max-w-3xl mx-auto">
          <div className="space-y-6 font-body">
            <h2 className="font-display text-accent text-4xl md:text-5xl">
              Plus qu'une association… une famille
            </h2>
            <div className="text-white/80 text-xl leading-relaxed space-y-2">
              <p className="font-semibold text-white">Batuku & Cultura, c'est une énergie.</p>
              <p>C'est une identité. C'est une maison.</p>
              <p>Une maison où chacun peut trouver sa place.</p>
              <p>Une maison où la culture se vit, se ressent et se partage.</p>
            </div>

            <div className="bg-white/10 rounded-card p-8 mt-6">
              <p className="font-body text-accent text-lg italic font-medium mb-2">
                "La culture ne doit pas rester enfermée.<br />
                Elle doit vivre. Respirer. Vibrer."
              </p>
              <p className="font-body text-white/50 text-sm">— Et c'est exactement ce que nous faisons.</p>
            </div>

            <div className="pt-4">
              <p className="font-display text-white/70 text-xl mb-6">
                Batuku & Cultura — une culture qui se vit, pas seulement qui se regarde.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent text-deep font-body font-bold px-8 py-4 rounded-pill hover:bg-white transition-all shadow-glow"
              >
                Rejoindre la famille
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

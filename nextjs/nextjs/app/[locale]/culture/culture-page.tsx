'use client'

import { useState } from 'react'
import Image from 'next/image'
import { countriesData, type CountryTab } from '@/lib/countriesData'

type SubTab = 'history' | 'culture' | 'gastronomy'

const subTabs: { id: SubTab; label: string; icon: string }[] = [
  { id: 'history', label: 'Histoire', icon: '📜' },
  { id: 'culture', label: 'Culture & Musique', icon: '🎵' },
  { id: 'gastronomy', label: 'Gastronomie', icon: '🍽️' },
]

export default function CulturePage() {
  const [activeCountry, setActiveCountry] = useState<string>('cap-vert')
  const [activeSubTab, setActiveSubTab] = useState<SubTab>('history')

  const country = countriesData.find((c) => c.id === activeCountry)!
  const section = country[activeSubTab]

  return (
    <div className="w-full">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-primary py-20 px-4 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)',
          }}
        />
        <div className="relative z-10">
          <h1 className="font-display text-accent text-5xl md:text-7xl mb-3"
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.4)' }}>
            Cultura dos PALOP
          </h1>
          <p className="font-body text-white/80 text-lg italic">
            5 pays, 5 histoires, une même langue, une même énergie
          </p>
        </div>
      </section>

      {/* ── ONGLETS PAYS (sticky) ─────────────────────────────────── */}
      <div className="sticky top-0 z-40 bg-white shadow-md">
        <div className="container-wide overflow-x-auto">
          <div className="flex min-w-max">
            {countriesData.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  setActiveCountry(c.id)
                  setActiveSubTab('history')
                }}
                className={`flex items-center gap-2 px-5 py-4 font-body font-semibold text-sm transition-all whitespace-nowrap border-b-3 ${
                  activeCountry === c.id
                    ? 'text-white border-b-4'
                    : 'text-gray-500 hover:text-gray-800 border-transparent'
                }`}
                style={
                  activeCountry === c.id
                    ? { backgroundColor: c.color, borderBottomColor: c.color }
                    : {}
                }
              >
                <span className="text-base">{c.flag}</span>
                {c.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── CONTENU PAYS ─────────────────────────────────────────── */}
      <div
        className="min-h-screen relative"
        style={{ backgroundColor: '#FDF0DC' }}
      >
        {/* Grand sigle en filigrane */}
        <div
          className="fixed top-1/2 right-4 -translate-y-1/2 font-display leading-none select-none pointer-events-none hidden lg:block"
          style={{
            fontSize: '280px',
            color: country.color,
            opacity: 0.04,
            zIndex: 0,
          }}
        >
          {country.code}
        </div>

        {/* ── SOUS-ONGLETS ─────────────────────────────────────────── */}
        <div className="container-wide pt-8 pb-4 relative z-10">
          <div className="flex flex-wrap gap-3">
            {subTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full font-body font-semibold text-sm transition-all"
                style={
                  activeSubTab === tab.id
                    ? { backgroundColor: country.color, color: country.color === '#F5B800' ? '#1A1A2A' : '#fff' }
                    : { backgroundColor: '#fff', color: '#555', border: `1.5px solid ${country.color}40` }
                }
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── SECTION CONTENU ──────────────────────────────────────── */}
        <div className="container-wide py-8 relative z-10">

          {/* Titre de section */}
          <div className="mb-10">
            <div
              className="font-body text-xs font-bold tracking-widest uppercase mb-3 flex items-center gap-2"
              style={{ color: country.color }}
            >
              <span>{country.flag}</span>
              {country.name} — {subTabs.find(t => t.id === activeSubTab)?.label}
            </div>
            <h2
              className="font-display text-4xl md:text-6xl mb-3"
              style={{ color: country.color }}
            >
              {section.title}
            </h2>
            <div className="flex items-center gap-4">
              <div
                className="h-1 w-20 rounded-full"
                style={{ backgroundColor: country.color }}
              />
              <p className="font-body text-gray-500 text-sm italic">
                {section.subtitle}
              </p>
            </div>
          </div>

          {/* Layout 2 colonnes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">

            {/* Texte */}
            <div className="space-y-4">
              {section.text.split('\n\n').map((para, i) => (
                <p key={i} className="font-body text-gray-700 text-base leading-relaxed">
                  {para}
                </p>
              ))}

              {/* Citation */}
              {section.quote && (
                <div
                  className="mt-6 p-5 rounded-card italic"
                  style={{
                    backgroundColor: country.color + '15',
                    borderLeft: `4px solid ${country.color}`,
                  }}
                >
                  <p
                    className="font-body text-base"
                    style={{ color: country.color === '#F5B800' ? '#1A1A2A' : country.color }}
                  >
                    {section.quote}
                  </p>
                </div>
              )}
            </div>

            {/* Image */}
            <div className="relative">
              <div
                className="absolute -inset-3 rounded-[32px] opacity-30"
                style={{ backgroundColor: country.color }}
              />
              <div
                className="relative overflow-hidden rounded-[24px] shadow-xl"
                style={{ border: `4px solid ${country.color}` }}
              >
                <Image
                  src={section.image}
                  alt={section.imageAlt}
                  width={640}
                  height={420}
                  className="object-cover w-full hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Facts cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {section.facts.map((fact) => (
              <div
                key={fact.label}
                className="bg-white rounded-card p-5 shadow-card hover:shadow-hero transition-shadow"
                style={{ borderTop: `3px solid ${country.color}` }}
              >
                <div className="text-2xl mb-2">{fact.icon}</div>
                <div
                  className="font-body text-xs font-bold tracking-widest uppercase mb-1"
                  style={{ color: country.color }}
                >
                  {fact.label}
                </div>
                <div className="font-body font-semibold text-gray-800 text-sm">
                  {fact.value}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation entre sous-onglets */}
          <div className="flex justify-between items-center pt-6 border-t border-gray-200">
            <button
              onClick={() => {
                const idx = subTabs.findIndex(t => t.id === activeSubTab)
                if (idx > 0) setActiveSubTab(subTabs[idx - 1].id)
              }}
              disabled={activeSubTab === 'history'}
              className="flex items-center gap-2 font-body font-semibold text-sm px-4 py-2 rounded-pill transition-all disabled:opacity-30"
              style={{ color: country.color, border: `1.5px solid ${country.color}` }}
            >
              ← Précédent
            </button>

            {/* Indicateur */}
            <div className="flex gap-2">
              {subTabs.map((tab) => (
                <div
                  key={tab.id}
                  className="w-2 h-2 rounded-full transition-all"
                  style={{
                    backgroundColor: activeSubTab === tab.id ? country.color : '#ddd',
                    transform: activeSubTab === tab.id ? 'scale(1.3)' : 'scale(1)',
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => {
                const idx = subTabs.findIndex(t => t.id === activeSubTab)
                if (idx < subTabs.length - 1) setActiveSubTab(subTabs[idx + 1].id)
              }}
              disabled={activeSubTab === 'gastronomy'}
              className="flex items-center gap-2 font-body font-semibold text-sm px-4 py-2 rounded-pill transition-all disabled:opacity-30 text-white"
              style={{ backgroundColor: country.color }}
            >
              Suivant →
            </button>
          </div>
        </div>

        {/* ── NAVIGATION PAYS ──────────────────────────────────────── */}
        <div
          className="py-12 px-4 md:px-12 relative z-10"
          style={{ backgroundColor: country.color + '10' }}
        >
          <div className="container-wide">
            <p className="font-display text-2xl text-center mb-6"
              style={{ color: country.color }}>
              Explorer les autres pays
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {countriesData.map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    setActiveCountry(c.id)
                    setActiveSubTab('history')
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  className="rounded-card p-4 text-center transition-all hover:scale-105"
                  style={
                    activeCountry === c.id
                      ? { backgroundColor: c.color, color: '#fff' }
                      : { backgroundColor: '#fff', color: c.color, border: `2px solid ${c.color}30` }
                  }
                >
                  <div className="text-2xl mb-1">{c.flag}</div>
                  <div className="font-display text-sm tracking-wide">{c.name}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

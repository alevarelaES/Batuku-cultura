import React from 'react';

// ─── PLUMES VECTORIELLES ───────────────────────────────────────────────────────

export const FeatherLarge = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M40.1,168.4C26.5,123.6,56.3,55.1,114.7,28.6C148.9,13.1,180.3,16,180.3,16C180.3,16,155.8,5.1,123.7,18.4C83.3,34.9,43.2,74.9,40.1,168.4Z" opacity="0.4"/>
    <path d="M40.1,168.4C50.2,143.5,85.6,90.4,180.3,16C180.3,16,170.8,50.1,135.1,89C97.4,130,40.1,168.4,40.1,168.4Z"/>
    <path d="M50.2,148.8L35.6,135.1M80.1,105.7L62.6,83.8M115.1,70.5L103.4,46.4" stroke="currentColor" strokeWidth="2" strokeOpacity="0.5" fill="none"/>
    <circle cx="170" cy="30" r="4" fill="currentColor" />
    <circle cx="150" cy="15" r="3" fill="currentColor" opacity="0.6"/>
  </svg>
);

export const FeatherMedium = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 150 150" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M75,142.5C22.5,120,15,60,75,7.5C135,60,127.5,120,75,142.5Z" opacity="0.5"/>
    <path d="M75,142.5C37.5,105,45,60,75,7.5C105,60,112.5,105,75,142.5Z" />
    <path d="M75,142.5L75,7.5" stroke="var(--color-brand-bg, #FDF0DC)" strokeWidth="3" fill="none"/>
    <path d="M75,105L45,82.5M75,75L52.5,52.5M75,45L60,30M75,105L105,82.5M75,75L97.5,52.5M75,45L90,30" stroke="var(--color-brand-bg, #FDF0DC)" strokeWidth="2.5" fill="none"/>
  </svg>
);

export const FeatherSmall = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20,80 C5,55 30,15 85,15 C60,25 60,70 20,80 Z" opacity="0.7"/>
    <path d="M20,80 C35,65 55,45 85,15" stroke="var(--color-brand-bg, #FDF0DC)" strokeWidth="2" fill="none"/>
    <circle cx="85" cy="15" r="3" />
  </svg>
);

// ─── FEUILLES TROPICALES ──────────────────────────────────────────────────────

export const LeafPalm = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 150 150" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M75,142.5C60,105,45,60,75,7.5C105,60,90,105,75,142.5Z" opacity="0.3"/>
    <path d="M75,142.5L75,7.5M75,120L30,97.5M75,97.5L22.5,67.5M75,75L30,45M75,52.5L45,22.5M75,120L120,97.5M75,97.5L127.5,67.5M75,75L120,45M75,52.5L105,22.5" stroke="currentColor" strokeWidth="3" fill="none"/>
  </svg>
);

export const LeafMonstera = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 120 120" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M60,6 C96,6 114,36 108,66 C96,60 84,66 90,84 C102,90 96,114 60,114 C24,114 18,90 30,84 C36,66 24,60 12,66 C6,36 24,6 60,6 Z" />
    <circle cx="42" cy="42" r="5" fill="var(--color-brand-bg, #FDF0DC)"/>
    <circle cx="78" cy="54" r="6" fill="var(--color-brand-bg, #FDF0DC)"/>
    <circle cx="54" cy="78" r="4" fill="var(--color-brand-bg, #FDF0DC)"/>
    <path d="M60,114 L60,30 M60,80 L35,65 M60,65 L85,50" stroke="var(--color-brand-bg, #FDF0DC)" strokeWidth="2.5" fill="none"/>
  </svg>
);

// ─── MOTIFS GÉOMÉTRIQUES AFRICAINS ────────────────────────────────────────────

export const PatternBg = ({ className = '' }: { className?: string }) => (
  <div className={`absolute inset-0 pointer-events-none ${className}`}>
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="african-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M40,0 L80,40 L40,80 L0,40 Z" fill="none" stroke="currentColor" strokeWidth="4"/>
          <path d="M20,20 L60,60 M20,60 L60,20" stroke="currentColor" strokeWidth="3" opacity="0.7"/>
          <circle cx="40" cy="20" r="4" fill="currentColor"/>
          <circle cx="40" cy="60" r="4" fill="currentColor"/>
          <circle cx="20" cy="40" r="4" fill="currentColor"/>
          <circle cx="60" cy="40" r="4" fill="currentColor"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#african-pattern)"/>
    </svg>
  </div>
);

export const MosaicPattern = ({ className = '' }: { className?: string }) => (
  <div className={`absolute inset-0 pointer-events-none ${className}`}>
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="mosaic-pattern" width="120" height="120" patternUnits="userSpaceOnUse">
          <circle cx="30" cy="30" r="20" fill="currentColor" opacity="0.5"/>
          <rect x="70" y="10" width="40" height="40" fill="currentColor" opacity="0.3"/>
          <path d="M10,110 L50,110 L30,70 Z" fill="currentColor" opacity="0.8"/>
          <circle cx="90" cy="90" r="15" fill="none" stroke="currentColor" strokeWidth="6" opacity="0.6"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#mosaic-pattern)"/>
    </svg>
  </div>
);

// Motif Kente (tissu africain géométrique)
export const KentePattern = ({ className = '' }: { className?: string }) => (
  <div className={`absolute inset-0 pointer-events-none ${className}`}>
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="kente-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="20" height="20" fill="currentColor" opacity="0.15"/>
          <rect x="20" y="20" width="20" height="20" fill="currentColor" opacity="0.15"/>
          <rect x="40" y="40" width="20" height="20" fill="currentColor" opacity="0.15"/>
          <path d="M0,30 L60,30 M30,0 L30,60" stroke="currentColor" strokeWidth="1.5" opacity="0.25"/>
          <path d="M10,10 L20,20 M40,40 L50,50 M10,50 L20,40 M40,20 L50,10" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#kente-pattern)"/>
    </svg>
  </div>
);

// ─── CONFETTI / DÉCORATIFS ────────────────────────────────────────────────────

export const Confetti = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={`absolute pointer-events-none ${className}`} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20,20 Q40,10 50,30 Q30,40 20,20" />
    <circle cx="150" cy="40" r="8" />
    <path d="M180,150 L160,180 L190,190 Z" />
    <circle cx="40" cy="160" r="5" />
    <path d="M80,100 Q110,80 120,110 Q90,130 80,100" opacity="0.6"/>
    <rect x="155" y="110" width="12" height="12" transform="rotate(30 161 116)" opacity="0.5"/>
    <circle cx="95" cy="25" r="6" opacity="0.4"/>
    <path d="M10,80 L25,65 L10,50 Z" opacity="0.6"/>
  </svg>
);

// ─── INSTRUMENTS DE MUSIQUE ───────────────────────────────────────────────────

export const Djembe = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 120 120" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M30,12 Q60,0 90,12 L84,54 Q60,66 36,54 Z" />
    <path d="M42,60 Q60,72 78,60 L72,108 Q60,114 48,108 Z" />
    <path d="M30,12 L42,60 M90,12 L78,60 M48,12 L54,60 M72,12 L66,60" stroke="var(--color-brand-bg, #FDF0DC)" strokeWidth="2" fill="none"/>
    <path d="M36,24 Q60,36 84,24" stroke="var(--color-brand-bg, #FDF0DC)" strokeWidth="2" fill="none"/>
    <ellipse cx="60" cy="12" rx="30" ry="8" opacity="0.4"/>
  </svg>
);

export const Trumpet = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 120 120" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M102,60 Q120,24 120,12 L108,12 Q102,42 78,54 L24,54 C12,54 12,66 24,66 L78,66 Q102,78 108,108 L120,108 Q120,96 102,60 Z" />
    <rect x="42" y="36" width="5" height="18" />
    <rect x="54" y="36" width="5" height="18" />
    <rect x="66" y="36" width="5" height="18" />
    <path d="M24,54 C6,54 6,66 24,66" fill="none" stroke="var(--color-brand-bg, #FDF0DC)" strokeWidth="3"/>
    <circle cx="44.5" cy="30" r="4" />
    <circle cx="56.5" cy="30" r="4" />
    <circle cx="68.5" cy="30" r="4" />
    <path d="M110,20 Q125,18 130,12 M110,30 Q128,28 130,22" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3"/>
  </svg>
);

// Guitare acoustique africaine
export const Guitar = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 80 180" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    {/* Corps bas (grande caisse) */}
    <ellipse cx="40" cy="135" rx="34" ry="40"/>
    {/* Corps haut (petite caisse) */}
    <ellipse cx="40" cy="78" rx="24" ry="28"/>
    {/* Taille (échancrures latérales) */}
    <rect x="6" y="98" width="8" height="20" rx="4" fill="var(--color-brand-bg, #FDF0DC)" opacity="0.5"/>
    <rect x="66" y="98" width="8" height="20" rx="4" fill="var(--color-brand-bg, #FDF0DC)" opacity="0.5"/>
    {/* Manche */}
    <rect x="35" y="18" width="10" height="55" rx="3"/>
    {/* Tête de guitare */}
    <rect x="32" y="4" width="16" height="16" rx="4"/>
    {/* Mécaniques */}
    <circle cx="32" cy="7" r="3"/>
    <circle cx="32" cy="14" r="3"/>
    <circle cx="48" cy="7" r="3"/>
    <circle cx="48" cy="14" r="3"/>
    {/* Rosace (sound hole) */}
    <circle cx="40" cy="128" r="12" fill="none" stroke="var(--color-brand-bg, #FDF0DC)" strokeWidth="2.5"/>
    <circle cx="40" cy="128" r="7" fill="none" stroke="var(--color-brand-bg, #FDF0DC)" strokeWidth="1.5" opacity="0.5"/>
    {/* Cordes */}
    <line x1="37" y1="18" x2="37" y2="165" stroke="var(--color-brand-bg, #FDF0DC)" strokeWidth="1.2" opacity="0.5"/>
    <line x1="40" y1="18" x2="40" y2="165" stroke="var(--color-brand-bg, #FDF0DC)" strokeWidth="1.5" opacity="0.5"/>
    <line x1="43" y1="18" x2="43" y2="165" stroke="var(--color-brand-bg, #FDF0DC)" strokeWidth="1.2" opacity="0.5"/>
    {/* Sillet de tête */}
    <rect x="35" y="18" width="10" height="3" rx="1" fill="var(--color-brand-bg, #FDF0DC)"/>
    {/* Chevalet */}
    <rect x="32" y="160" width="16" height="5" rx="2" fill="var(--color-brand-bg, #FDF0DC)" opacity="0.6"/>
    {/* Frettes */}
    <line x1="35" y1="30" x2="45" y2="30" stroke="var(--color-brand-bg, #FDF0DC)" strokeWidth="1.5" opacity="0.4"/>
    <line x1="35" y1="42" x2="45" y2="42" stroke="var(--color-brand-bg, #FDF0DC)" strokeWidth="1.5" opacity="0.4"/>
    <line x1="35" y1="54" x2="45" y2="54" stroke="var(--color-brand-bg, #FDF0DC)" strokeWidth="1.5" opacity="0.4"/>
    <line x1="35" y1="63" x2="45" y2="63" stroke="var(--color-brand-bg, #FDF0DC)" strokeWidth="1.5" opacity="0.4"/>
  </svg>
);

// Notes de musique (noires + croches liées)
export const MusicNotes = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 200 180" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    {/* Noire 1 */}
    <ellipse cx="32" cy="148" rx="16" ry="11" transform="rotate(-18 32 148)"/>
    <line x1="47" y1="142" x2="47" y2="65" stroke="currentColor" strokeWidth="5"/>
    {/* Croches liées */}
    <ellipse cx="100" cy="138" rx="16" ry="11" transform="rotate(-18 100 138)"/>
    <line x1="115" y1="132" x2="115" y2="60" stroke="currentColor" strokeWidth="5"/>
    <ellipse cx="148" cy="126" rx="16" ry="11" transform="rotate(-18 148 126)"/>
    <line x1="163" y1="120" x2="163" y2="60" stroke="currentColor" strokeWidth="5"/>
    {/* Ligature des croches */}
    <path d="M115,60 L163,60" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
    {/* Hampes des croches (drapeaux) */}
    {/* Small floating note */}
    <ellipse cx="170" cy="45" rx="11" ry="7" transform="rotate(-18 170 45)" opacity="0.4"/>
    <line x1="181" y1="40" x2="181" y2="8" stroke="currentColor" strokeWidth="3.5" opacity="0.4"/>
    <path d="M181,8 Q198,12 190,24" stroke="currentColor" strokeWidth="3.5" fill="none" opacity="0.4"/>
    {/* Petite noire ornementale */}
    <ellipse cx="20" cy="38" rx="9" ry="6" transform="rotate(-15 20 38)" opacity="0.3"/>
    <line x1="29" y1="34" x2="29" y2="10" stroke="currentColor" strokeWidth="3" opacity="0.3"/>
    {/* Points musicaux */}
    <circle cx="58" cy="165" r="5" opacity="0.3"/>
    <circle cx="80" cy="155" r="4" opacity="0.2"/>
    <circle cx="183" cy="148" r="4" opacity="0.25"/>
  </svg>
);

// ─── MASQUE CARNAVAL ──────────────────────────────────────────────────────────

export const CarnivalMask = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 200 100" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M10,50 C10,20 40,10 70,30 C90,45 110,45 130,30 C160,10 190,20 190,50 C190,80 150,90 100,90 C50,90 10,80 10,50 Z" />
    <circle cx="60" cy="50" r="15" fill="var(--color-brand-bg, #FDF0DC)" />
    <circle cx="140" cy="50" r="15" fill="var(--color-brand-bg, #FDF0DC)" />
    <path d="M30,20 Q15,0 0,10 M170,20 Q185,0 200,10" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.5"/>
  </svg>
);

// ─── GASTRONOMIE ─────────────────────────────────────────────────────────────

export const GastronomyIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 80 80" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    {/* Assiette */}
    <circle cx="40" cy="44" r="30" opacity="0.15"/>
    <circle cx="40" cy="44" r="30" fill="none" stroke="currentColor" strokeWidth="3.5" opacity="0.9"/>
    <circle cx="40" cy="44" r="20" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
    {/* Fourchette gauche */}
    <line x1="16" y1="8" x2="16" y2="26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="12" y1="8" x2="12" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="20" y1="8" x2="20" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12,18 Q16,22 20,18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="16" y1="22" x2="16" y2="40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Couteau droit */}
    <line x1="64" y1="8" x2="64" y2="40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M64,8 Q72,14 68,22 Q64,26 64,26" fill="currentColor" opacity="0.8"/>
  </svg>
);

// ─── ARCHIPEL CAP-VERT ────────────────────────────────────────────────────────
// Silhouette simplifiée des 10 îles du Cap-Vert

export const CapeVerdeIslands = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 320 200" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    {/* Îles du Vent (Barlavento) — nord-ouest */}
    {/* Santo Antão */}
    <ellipse cx="38" cy="58" rx="28" ry="16" transform="rotate(-10 38 58)" opacity="0.9"/>
    {/* São Vicente */}
    <ellipse cx="78" cy="50" rx="18" ry="11" transform="rotate(-5 78 50)" opacity="0.9"/>
    {/* Santa Luzia (uninhabited) */}
    <ellipse cx="104" cy="56" rx="9" ry="6" opacity="0.6"/>
    {/* São Nicolau */}
    <ellipse cx="140" cy="62" rx="20" ry="11" transform="rotate(8 140 62)" opacity="0.9"/>
    {/* Sal */}
    <ellipse cx="188" cy="50" rx="11" ry="22" transform="rotate(-5 188 50)" opacity="0.85"/>
    {/* Boa Vista */}
    <ellipse cx="230" cy="70" rx="22" ry="16" transform="rotate(5 230 70)" opacity="0.9"/>

    {/* Îles Sous-le-Vent (Sotavento) — sud-est */}
    {/* Maio */}
    <ellipse cx="222" cy="118" rx="13" ry="18" transform="rotate(2 222 118)" opacity="0.8"/>
    {/* Santiago (la plus grande — île principale) */}
    <path d="M148,108 Q162,100 175,112 Q182,130 178,155 Q165,170 150,165 Q135,155 136,135 Q138,115 148,108 Z" opacity="0.95"/>
    {/* Point de Santiago → Praia, capitale */}
    <circle cx="162" cy="152" r="5" opacity="0.5"/>
    {/* Fogo (volcanique — légèrement conique) */}
    <path d="M95,128 Q110,115 124,126 Q128,145 118,162 Q105,170 94,160 Q86,144 95,128 Z" opacity="0.9"/>
    {/* Brava */}
    <ellipse cx="68" cy="158" rx="14" ry="11" transform="rotate(-8 68 158)" opacity="0.8"/>

    {/* Lignes de connexion légères entre les îles (routes maritimes) */}
    <path d="M66,58 L88,50 M96,56 L120,62 M158,62 L177,52 M199,56 L208,66" 
          stroke="currentColor" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.25" fill="none"/>
    <path d="M208,80 L216,110 M186,140 L175,118 M142,130 L118,132" 
          stroke="currentColor" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.25" fill="none"/>

    {/* Points de villes importantes */}
    <circle cx="80" cy="50" r="3" opacity="0.4"/>
    {/* Label "Santiago" discret */}
    <text x="162" y="182" textAnchor="middle" fontSize="11" opacity="0.4" fontFamily="sans-serif">Santiago</text>
  </svg>
);

// ─── VAGUE OCÉANIQUE ──────────────────────────────────────────────────────────

export const OceanWave = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 400 100" className={className} fill="currentColor" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,50 C40,20 80,80 120,50 C160,20 200,80 240,50 C280,20 320,80 360,50 C380,35 390,42 400,50 L400,100 L0,100 Z" opacity="0.6"/>
    <path d="M0,65 C50,35 100,85 150,65 C200,45 250,85 300,65 C340,50 370,60 400,65 L400,100 L0,100 Z" opacity="0.4"/>
  </svg>
);

// ─── DRAPEAU CAP-VERT (SVG stylisé) ──────────────────────────────────────────

export const CapeVerdeFlag = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 120 80" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Bandes horizontales : bleu, blanc, rouge, blanc, bleu */}
    <rect x="0" y="0" width="120" height="80" fill="#003893"/>
    <rect x="0" y="32" width="120" height="8" fill="#CE1126"/>
    <rect x="0" y="28" width="120" height="4" fill="white"/>
    <rect x="0" y="40" width="120" height="4" fill="white"/>
    {/* Cercle des 10 étoiles */}
    {[0,1,2,3,4,5,6,7,8,9].map(i => {
      const angle = (i / 10) * Math.PI * 2 - Math.PI / 2;
      const cx = 40 + Math.cos(angle) * 16;
      const cy = 40 + Math.sin(angle) * 16;
      return <polygon key={i} points={`${cx},${cy-4} ${cx+1.5},${cy-1} ${cx+4},${cy-1} ${cx+2},${cy+1} ${cx+3},${cy+4} ${cx},${cy+2} ${cx-3},${cy+4} ${cx-2},${cy+1} ${cx-4},${cy-1} ${cx-1.5},${cy-1}`} fill="#F5B800"/>;
    })}
  </svg>
);
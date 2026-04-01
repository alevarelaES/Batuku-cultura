import React, { CSSProperties } from 'react';

interface AssetProps {
  className?: string;
  style?: CSSProperties;
}

/**
 * Organic Blobs
 */
export const Blob1 = ({ className = '', style }: AssetProps) => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <path fill="currentColor" d="M42.7,-68.8C54,-61.8,61.9,-49,68.8,-35.8C75.7,-22.6,81.5,-9,80.7,4.3C80,17.6,72.6,30.7,63.1,41.4C53.6,52.1,42.1,60.4,29.3,66.6C16.5,72.8,2.4,76.9,-11.3,77.2C-25.1,77.5,-38.5,74,-49.3,66.2C-60.1,58.4,-68.3,46.3,-73.4,32.8C-78.5,19.3,-80.5,4.4,-77.2,-9.3C-73.9,-23,-65.3,-35.5,-54.6,-45.3C-43.9,-55.1,-31.1,-62.2,-18.3,-66.6C-5.5,-71,7.2,-72.7,19.3,-70.5C31.4,-68.3,42.7,-68.3,42.7,-68.8Z" transform="translate(100 100)" />
  </svg>
);

export const Blob2 = ({ className = '', style }: AssetProps) => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <path fill="currentColor" d="M37,-60.7C48.6,-53.2,59,-43.3,66.9,-31.1C74.8,-18.9,80.2,-4.4,79.2,9.8C78.2,24,70.8,37.9,60.1,48.5C49.4,59.1,35.4,66.4,20.8,69.5C6.2,72.6,-9,71.5,-23.1,66.9C-37.2,62.3,-50.2,54.2,-61.1,42.9C-72,31.6,-80.8,17.1,-82.3,1.6C-83.8,-13.9,-78.1,-30.4,-67.2,-42.6C-56.3,-54.8,-40.2,-62.7,-25.2,-64.8C-10.2,-66.9,3.7,-63.2,16.8,-59.8C29.9,-56.4,42.2,-53.3,37,-60.7Z" transform="translate(100 100)" />
  </svg>
);

export const WaveDivider = ({ className = '', style }: AssetProps) => (
  <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className={`w-full h-auto ${className}`} style={style}>
    <path fill="currentColor" d="M0,256L48,245.3C96,235,192,213,288,181.3C384,149,480,107,576,112C672,117,768,171,864,197.3C960,224,1056,224,1152,197.3C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
  </svg>
);

/**
 * Memphis Patterns
 */
export const DotsPattern = ({ className = '', style }: AssetProps) => (
  <svg width="100" height="100" viewBox="0 0 100 100" className={className} style={style}>
    <g fill="currentColor">
      <circle cx="10" cy="10" r="4" />
      <circle cx="30" cy="10" r="4" />
      <circle cx="50" cy="10" r="4" />
      <circle cx="70" cy="10" r="4" />
      <circle cx="90" cy="10" r="4" />
      <circle cx="10" cy="30" r="4" />
      <circle cx="30" cy="30" r="4" />
      <circle cx="50" cy="30" r="4" />
      <circle cx="70" cy="30" r="4" />
      <circle cx="90" cy="30" r="4" />
      <circle cx="10" cy="50" r="4" />
      <circle cx="30" cy="50" r="4" />
      <circle cx="50" cy="50" r="4" />
      <circle cx="70" cy="50" r="4" />
      <circle cx="90" cy="50" r="4" />
      <circle cx="10" cy="70" r="4" />
      <circle cx="30" cy="70" r="4" />
      <circle cx="50" cy="70" r="4" />
      <circle cx="70" cy="70" r="4" />
      <circle cx="90" cy="70" r="4" />
    </g>
  </svg>
);

export const MusicNote1 = ({ className = '', style }: AssetProps) => (
  <svg width="40" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
    <path d="M9 18V5l12-2v13" />
    <path d="M9 9l12-2" />
    <circle cx="6" cy="18" r="3" fill="currentColor" />
    <circle cx="18" cy="16" r="3" fill="currentColor" />
  </svg>
);

/**
 * Outline Vectors: Instruments (subtle background texture vibe)
 */
export const VectorCavaquinho = ({ className = '', style }: AssetProps) => (
  <svg viewBox="0 0 100 240" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {/* Body */}
    <path d="M50 120 C 80 120, 90 150, 90 190 C 90 230, 70 240, 50 240 C 30 240, 10 230, 10 190 C 10 150, 20 120, 50 120 Z" />
    <path d="M50 80 C 70 80, 75 100, 75 120 C 75 120, 25 120, 25 120 C 25 100, 30 80, 50 80 Z" />
    {/* Sound hole */}
    <circle cx="50" cy="160" r="14" />
    {/* Neck */}
    <rect x="42" y="10" width="16" height="70" />
    {/* Headstock */}
    <rect x="38" y="0" width="24" height="20" rx="2" />
    {/* Strings */}
    <line x1="44" y1="20" x2="44" y2="180" strokeWidth="1" />
    <line x1="48" y1="20" x2="48" y2="180" strokeWidth="1" />
    <line x1="52" y1="20" x2="52" y2="180" strokeWidth="1" />
    <line x1="56" y1="20" x2="56" y2="180" strokeWidth="1" />
  </svg>
);

export const VectorFerrinho = ({ className = '', style }: AssetProps) => (
  <svg viewBox="0 0 40 200" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {/* Iron Bar */}
    <rect x="15" y="10" width="10" height="180" rx="5" />
    {/* Ridges */}
    {Array.from({length: 15}).map((_, i) => (
      <line key={i} x1="15" y1={30 + i * 9} x2="25" y2={30 + i * 9} strokeWidth="2" />
    ))}
    {/* Scraper abstract line */}
    <path d="M5 50 L 35 60 M 35 60 L 25 70" />
  </svg>
);

export const VectorCimboa = ({ className = '', style }: AssetProps) => (
  <svg viewBox="0 0 80 260" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {/* Gourd resonator outline */}
    <circle cx="40" cy="200" r="25" />
    <path d="M20 200 Q 40 180 60 200" strokeWidth="2" />
    {/* Neck */}
    <line x1="40" y1="10" x2="40" y2="175" />
    <line x1="30" y1="20" x2="50" y2="20" />
    {/* Bow */}
    <path d="M10 240 Q 60 140 70 80" />
    <line x1="15" y1="230" x2="60" y2="85" />
  </svg>
);

export const VectorConga = ({ className = '', style }: AssetProps) => (
  <svg viewBox="0 0 80 120" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {/* Body outline */}
    <path d="M20 10 L 60 10 C 70 10 75 40 70 100 L 10 100 C 5 40 10 10 20 10 Z" />
    {/* Top head */}
    <ellipse cx="40" cy="10" rx="20" ry="10" />
    <ellipse cx="40" cy="100" rx="30" ry="8" />
    {/* Tuning lines */}
    <path d="M 25 15 L 15 100 M 40 15 L 40 100 M 55 15 L 65 100" strokeDasharray="5,5" strokeWidth="1" />
  </svg>
);

export const FloraLeaf = ({ className = '', style }: AssetProps) => (
  <svg viewBox="0 0 100 100" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10,90 C10,40 50,10 90,10 C50,10 10,50 10,90 Z" />
    <path d="M10,90 C50,90 90,50 90,10" strokeDasharray="4,4" />
  </svg>
);

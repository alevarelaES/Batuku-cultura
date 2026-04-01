import React from 'react';

const drumImg = 'https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?w=400&q=80';
const iconsImg = 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=400&q=80';
const guitarImg = 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&q=80';
const tribalImg = 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=400&q=80';

export const MotifDrum = ({ className = '' }: { className?: string }) => (
  <img src={drumImg} alt="Drum motif" className={`object-contain ${className}`} aria-hidden="true" />
);

export const MotifIcons = ({ className = '' }: { className?: string }) => (
  <img src={iconsImg} alt="African icons motif" className={`object-contain ${className}`} aria-hidden="true" />
);

export const MotifGuitar = ({ className = '' }: { className?: string }) => (
  <img src={guitarImg} alt="Guitar motif" className={`object-contain ${className}`} aria-hidden="true" />
);

export const MotifTribal = ({ className = '' }: { className?: string }) => (
  <img src={tribalImg} alt="Tribal elements motif" className={`object-contain ${className}`} aria-hidden="true" />
);

export const CapeVerdeStars = ({ className = '' }: { className?: string }) => {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      {Array.from({ length: 10 }).map((_, i) => {
        // SVG circle starts at 3 o'clock, we want 12 o'clock, so -90 deg (-PI/2)
        const angle = (i * 36 - 90) * (Math.PI / 180);
        // Radius of circle of stars is 75
        const cx = 100 + 75 * Math.cos(angle);
        const cy = 100 + 75 * Math.sin(angle);
        return (
          <path
            key={i}
            d="M 0 -10 L 2.245 -3.09 L 9.51 -3.09 L 3.633 1.18 L 5.878 8.09 L 0 3.82 L -5.878 8.09 L -3.633 1.18 L -9.51 -3.09 L -2.245 -3.09 Z"
            transform={`translate(${cx}, ${cy}) rotate(0) scale(1.5)`}
          />
        );
      })}
    </svg>
  );
};

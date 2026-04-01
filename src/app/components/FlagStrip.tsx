import React from 'react';

// 5 PALOP country colors — Cap-Vert, Angola, Guinée-Bissau, Mozambique, São Tomé
const PALOP_COLORS = ['#1A5CB5', '#E8620A', '#F5B800', '#2D7A5E', '#002654'];

export const FlagStrip = () => (
  <div className="w-full flex" style={{ height: '4px' }}>
    {PALOP_COLORS.map((color, i) => (
      <div key={i} className="flex-1 h-full" style={{ backgroundColor: color }} />
    ))}
  </div>
);

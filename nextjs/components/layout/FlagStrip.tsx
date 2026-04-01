import React from 'react';

export const FlagStrip = () => {
  const flags = [
    { code: "AGO", color: "bg-primary" }, // Angola (Rouge/Orange)
    { code: "CPV", color: "bg-cv" },      // Cap-Vert (Bleu)
    { code: "GNB", color: "bg-accent" },  // Guinée-Bissau (Jaune/Rouge/Vert)
    { code: "MOZ", color: "bg-nature" },  // Mozambique (Vert)
    { code: "STP", color: "bg-deep" },    // São Tomé (Violet/Sombre)
  ];

  return (
    <div className="absolute bottom-0 left-0 w-full flex h-2 z-50">
      {flags.map((flag, index) => (
        <div key={index} className={`flex-1 ${flag.color}`}></div>
      ))}
    </div>
  );
};
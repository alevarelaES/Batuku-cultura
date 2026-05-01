import React from 'react';
import { Djembe, Guitar, MusicNotes, Trumpet } from '../app/components/Decorations';

export const getMusicGenres = () => [
  { key: 'mornaTitle', descKey: 'mornaDesc', Icon: MusicNotes, color: 'bg-cv', textColor: 'text-white', badgeKey: 'UNESCO 2019' },
  { key: 'batukuTitle2', descKey: 'batukuDesc2', Icon: Djembe, color: 'bg-primary', textColor: 'text-white', badgeKey: 'Santiago' },
  { key: 'funaTitle', descKey: 'funaDesc', Icon: Guitar, color: 'bg-nature', textColor: 'text-white', badgeKey: 'badgeFreedom' },
  { key: 'coladTitle', descKey: 'coladDesc', Icon: Trumpet, color: 'bg-accent', textColor: 'text-brand-text', badgeKey: 'badgeParty' },
];

export const getPalopsData = (lang: string) => [
  {
    name: lang === 'pt' ? 'Cabo Verde' : lang === 'en' ? 'Cape Verde' : 'Cap-Vert',
    abbr: 'CPV',
    featured: true,
    accent: '#1A5CB5',
    flag: '/flags/Flag_of_Cape_Verde.svg.png',
    height: 'h-[460px]',
    width: 'lg:w-[360px] w-[300px]',
    translate: 'lg:translate-y-0',
    visual: (
      <div className="w-full h-full bg-[#1A5CB5] relative flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNMCAwTDggOFpNOCAwTDAgOFoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')]"></div>
        <div className="w-full h-12 bg-white flex flex-col justify-between absolute top-1/2 -translate-y-1/2">
          <div className="w-full h-3 bg-[#CC2200] absolute top-1/2 -translate-y-1/2"></div>
        </div>
        <div className="w-40 h-40 border border-[#D4AF37] rounded-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 border-dashed border-4 opacity-70 pointer-events-none"></div>
        <h3 className="text-white font-display text-4xl lg:text-5xl z-10 font-bold uppercase tracking-widest bg-[#1A5CB5] px-6 py-3 border-4 border-white shadow-[8px_8px_0px_rgba(0,0,0,1)] transform -rotate-6">Cap-Vert</h3>
      </div>
    )
  },
  {
    name: 'Angola',
    abbr: 'ANG',
    featured: false,
    accent: '#E8620A',
    flag: '/flags/Flag_of_Angola.svg.png',
    height: 'h-[340px]',
    width: 'lg:w-[250px] w-[220px]',
    translate: 'lg:translate-y-16',
    visual: (
      <div className="w-full h-full relative flex flex-col">
        <div className="flex-1 bg-[#CC2200]"></div>
        <div className="flex-1 bg-[#101015]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 border-[12px] border-[#D4AF37] rounded-full border-b-transparent rotate-45 flex items-center justify-center">
           <div className="w-8 h-8 bg-[#D4AF37] transform -rotate-45" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
        </div>
      </div>
    )
  },
  {
    name: lang === 'pt' ? 'Guiné-Bissau' : lang === 'en' ? 'Guinea-Bissau' : 'Guinée-Bissau',
    abbr: 'GNB',
    featured: false,
    accent: '#D4AF37',
    flag: '/flags/Flag_of_Guinea-Bissau.svg.png',
    height: 'h-[360px]',
    width: 'lg:w-[250px] w-[220px]',
    translate: 'lg:-translate-y-2',
    visual: (
      <div className="w-full h-full relative flex">
        <div className="w-1/3 h-full bg-[#CC2200] flex items-center justify-center relative z-10 shadow-r-lg">
           <div className="w-10 h-10 bg-[#101015]" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
        </div>
        <div className="w-2/3 h-full flex flex-col">
          <div className="flex-1 bg-[#D4AF37]"></div>
          <div className="flex-1 bg-[#2D7A5E]"></div>
        </div>
      </div>
    )
  },
  {
    name: lang === 'pt' ? 'Moçambique' : 'Mozambique',
    abbr: 'MOZ',
    featured: false,
    accent: '#2D7A5E',
    flag: '/flags/Flag_of_Mozambique.svg.png',
    height: 'h-[300px]',
    width: 'lg:w-[250px] w-[220px]',
    translate: 'lg:-translate-y-12',
    visual: (
      <div className="w-full h-full relative flex flex-col justify-between">
        <div className="absolute top-0 left-0 w-0 h-0 border-y-[150px] border-y-transparent border-l-[120px] border-l-[#CC2200] z-10 flex items-center justify-start">
           <div className="w-8 h-8 bg-[#D4AF37] -ml-[90px]" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
        </div>
        <div className="h-[30%] bg-[#2D7A5E]"></div>
        <div className="h-[5%] bg-white"></div>
        <div className="h-[30%] bg-[#101015]"></div>
        <div className="h-[5%] bg-white"></div>
        <div className="h-[30%] bg-[#D4AF37]"></div>
      </div>
    )
  },
  {
    name: lang === 'pt' ? 'São Tomé e Príncipe' : lang === 'en' ? 'São Tomé & Príncipe' : 'São Tomé & Príncipe',
    abbr: 'STP',
    featured: false,
    accent: '#5C2D82',
    flag: '/flags/Flag_of_São_Tomé_and_Príncipe.svg.png',
    height: 'h-[260px]',
    width: 'lg:w-[250px] w-[220px]',
    translate: 'lg:translate-y-12',
    visual: (
      <div className="w-full h-full relative flex flex-col justify-between">
        <div className="absolute top-0 left-0 w-0 h-0 border-y-[130px] border-y-transparent border-l-[100px] border-l-[#CC2200] z-10"></div>
        <div className="h-[30%] bg-[#2D7A5E]"></div>
        <div className="h-[40%] bg-[#D4AF37] flex justify-center items-center gap-4 pl-12 lg:pl-8">
           <div className="w-8 h-8 bg-[#101015]" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
           <div className="w-8 h-8 bg-[#101015]" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div>
        </div>
        <div className="h-[30%] bg-[#2D7A5E]"></div>
      </div>
    )
  }
];

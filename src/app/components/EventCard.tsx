import React from 'react';
import { MapPin } from 'lucide-react';

interface EventCardProps {
  image: string;
  date: string;
  title: string;
  location: string;
  badges: string[];
}

export const EventCard = ({ image, date, title, location, badges }: EventCardProps) => {
  return (
    <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,56,147,0.12)] transition-all duration-500 flex flex-col cursor-pointer group border border-black/5 relative h-full">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
      
      {/* Image Block: Edge-to-edge layout */}
      <div className="h-[260px] md:h-[280px] w-full overflow-hidden relative z-10">
        <div className="absolute inset-0 bg-brand-text/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {/* Badges on top right of image */}
        <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
          {badges.map((badge, idx) => (
            <span key={idx} className="bg-white/95 backdrop-blur-md text-primary px-4 py-1.5 rounded-full text-[11px] font-bold font-body uppercase tracking-[0.15em] shadow-sm">
              {badge}
            </span>
          ))}
        </div>
      </div>
      
      {/* Content Block */}
      <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10 bg-white">
        {/* Date */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-5 bg-primary rounded-full"></div>
          <p className="font-body font-bold text-primary/80 text-xs md:text-sm tracking-widest uppercase">{date}</p>
        </div>
        
        {/* Title */}
        <h3 className="text-brand-text font-display text-2xl md:text-[1.75rem] line-clamp-3 leading-[1.2] group-hover:text-primary transition-colors mb-2">{title}</h3>
        
        {/* Location Footer (pushed to bottom) */}
        <div className="flex items-center gap-3 text-brand-text/60 text-sm md:text-base font-body font-medium mt-auto pt-6 border-t border-black/5">
          <MapPin size={18} className="text-primary/70 shrink-0" />
          <span className="truncate">{location}</span>
        </div>
      </div>
    </div>
  );
};
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
    <div className="bg-white/90 backdrop-blur-sm rounded-[30px] overflow-hidden shadow-xl hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(232,98,10,0.2)] transition-all duration-300 flex flex-col cursor-pointer group border-2 border-white/50 relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity z-0"></div>
      
      <div className="h-[250px] w-full overflow-hidden relative z-10 m-2 rounded-[22px]">
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
          {badges.map((badge, idx) => (
            <span key={idx} className="bg-white/90 backdrop-blur-md text-primary px-4 py-1.5 rounded-full text-xs font-bold font-body uppercase tracking-widest shadow-md">
              {badge}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-8 flex flex-col gap-4 flex-grow relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-2 h-8 bg-primary rounded-full"></div>
          <p className="font-body font-bold text-primary tracking-wide">{date}</p>
        </div>
        
        <h3 className="text-text text-3xl line-clamp-2 leading-tight group-hover:text-primary transition-colors">{title}</h3>
        
        <div className="flex items-center gap-2 text-text opacity-70 text-base font-body font-medium mt-auto pt-4">
          <MapPin size={20} className="text-accent" />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
};
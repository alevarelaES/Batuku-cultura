import React, { useEffect } from 'react';
import { X, Calendar, Clock, MapPin, Ticket, Phone, ChevronRight } from 'lucide-react';
import { NavLink } from 'react-router';
import type { Event } from '../../data/events';
import { formatEventDate } from '../../data/events';
import type { Lang } from '../translations';
import { useLanguage } from '../contexts/LanguageContext';

interface Props {
  event: Event;
  lang: Lang;
  onClose: () => void;
}

export const EventModal = ({ event, lang, onClose }: Props) => {
  const { t } = useLanguage();
  // Fermer avec Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-6"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={onClose} />

      {/* Contenu modal */}
      <div className="relative z-10 w-full md:max-w-5xl max-h-[92vh] md:max-h-[88vh] bg-[#0B1B3D] rounded-t-[2.5rem] md:rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-[0_40px_100px_rgba(0,0,0,0.6)]">

        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          aria-label={t('Events', 'modalCloseBtn')}
        >
          <X size={18} className="text-white" />
        </button>

        {/* ── GAUCHE : galerie d'images ── */}
        <div className="w-full md:w-[48%] shrink-0 overflow-y-auto flex flex-col gap-2 p-3 bg-black/20 max-h-[45vh] md:max-h-full">
          {event.gallery?.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${event.title[lang]} — visuel ${i + 1}`}
              loading={i === 0 ? 'eager' : 'lazy'}
              className="w-full rounded-xl object-cover"
            />
          ))}
        </div>

        {/* ── DROITE : infos ── */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 flex flex-col gap-5">

          {/* Titre */}
          <div>
            <span className="inline-block bg-orange/20 text-orange font-body font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              {t('Events', 'featuredBadge')}
            </span>
            <h2 className="text-white font-display text-2xl md:text-3xl leading-tight">
              {event.title[lang]}
            </h2>
          </div>

          {/* Infos clés */}
          <div className="bg-white/5 rounded-2xl p-4 space-y-3 border border-white/10">
            <InfoRow icon={<Calendar size={15} className="text-yellow" />} text={formatEventDate(event.date, lang)} />
            {event.time && (
              <InfoRow icon={<Clock size={15} className="text-orange" />} text={`${t('Events', 'modalProgrammeLabel')} : ${event.time}`} />
            )}
            {event.afterParty && (
              <InfoRow icon={<Clock size={15} className="text-purple-400" />} text={`${t('Events', 'modalAfterPartyLabel')} : ${event.afterParty}`} />
            )}
            <InfoRow icon={<MapPin size={15} className="text-green shrink-0" />} text={event.locationDetail ?? event.location} />
            {event.priceCHF && (
              <InfoRow icon={<Ticket size={15} className="text-yellow" />} text={`${event.priceCHF} CHF`} bold />
            )}
          </div>

          {/* Note tarif */}
          {event.priceNote && (
            <p className="text-white/50 text-xs font-body leading-relaxed border-l-2 border-orange/40 pl-3 italic">
              {event.priceNote}
            </p>
          )}

          {/* Artistes */}
          {event.artists && event.artists.length > 0 && (
            <div>
              <p className="text-white/40 text-[10px] uppercase tracking-widest font-body mb-3">
                {t('Events', 'modalArtistsLabel')}
              </p>
              <div className="flex flex-wrap gap-2">
                {event.artists.map((a) => (
                  <span
                    key={a}
                    className="bg-white/8 border border-white/15 text-white/85 font-body text-xs px-3 py-1.5 rounded-full"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Contacts téléphoniques */}
          {event.contacts && event.contacts.length > 0 && (
            <div>
              <p className="text-white/40 text-[10px] uppercase tracking-widest font-body mb-3">
                {t('Events', 'modalInfoReservations')}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {event.contacts.map((c) => (
                  <a
                    key={c.href}
                    href={c.href}
                    className="flex items-center gap-2.5 bg-green/15 hover:bg-green/25 border border-green/30 rounded-xl px-3 py-2.5 transition-colors group"
                  >
                    <Phone size={14} className="text-green shrink-0" />
                    <div>
                      <p className="text-white/50 text-[9px] uppercase tracking-widest font-body leading-none mb-0.5">{c.label}</p>
                      <p className="text-white font-body font-semibold text-xs">{c.number}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Bouton formulaire */}
          <NavLink
            to="/contact"
            onClick={onClose}
            className="mt-auto flex items-center justify-center gap-2 bg-orange hover:bg-yellow hover:text-deep text-white font-body font-bold text-sm px-6 py-3.5 rounded-full transition-all shadow-[0_8px_24px_rgba(232,117,26,0.4)] w-full"
          >
            {t('Events', 'modalContactFormBtn')}
            <ChevronRight size={16} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

const InfoRow = ({ icon, text, bold }: { icon: React.ReactNode; text: string; bold?: boolean }) => (
  <div className="flex items-start gap-3">
    <span className="mt-0.5 shrink-0">{icon}</span>
    <span className={`text-sm font-body leading-snug ${bold ? 'text-white font-bold' : 'text-white/80'}`}>
      {text}
    </span>
  </div>
);

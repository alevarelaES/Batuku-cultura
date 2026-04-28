import type { Lang } from '../app/translations';

export type EventTag = 'festival' | 'danse' | 'atelier' | 'gastronomie' | 'charite';

export type EventContact = { label: string; number: string; href: string };

export type Event = {
  id: string;
  title: Record<Lang, string>;
  date: string; // ISO
  time?: string;
  afterParty?: string;
  location: string;
  locationDetail?: string;
  priceCHF?: number;
  priceNote?: string;
  tag: EventTag;
  featured?: boolean;
  past?: boolean;
  image?: string;
  gallery?: string[];   // images pour le modal de détail
  description?: Record<Lang, string>;
  artists?: string[];
  contacts?: EventContact[];
  countries?: Array<'angola' | 'capvert' | 'bissau' | 'mozambique' | 'santome'>;
};

export const events: Event[] = [
  // ── ÉVÉNEMENT PASSÉ ──────────────────────────────────────────────────────
  {
    id: 'vente-charite-avril-2026',
    title: {
      fr: 'Vente de Charité',
      pt: 'Venda de Caridade',
      en: 'Charity Sale',
    },
    date: '2026-04-18',
    location: 'Payerne, VD',
    tag: 'charite',
    past: true,
    // image: '/evenements/vente-charite.jpg', // ← à ajouter quand photos reçues
    description: {
      fr: 'Première vente de charité organisée par l\'Association Batuku & Cultura pour soutenir nos projets culturels.',
      pt: 'Primeira venda de caridade organizada pela Associação Batuku & Cultura para apoiar os nossos projetos culturais.',
      en: 'First charity sale organised by the Batuku & Cultura Association to support our cultural projects.',
    },
    countries: ['capvert', 'angola', 'bissau', 'mozambique', 'santome'],
  },

  // ── ÉVÉNEMENT VEDETTE — 2 MAI ─────────────────────────────────────────────
  {
    id: 'cultura-palops-mai-2026',
    title: {
      fr: 'Cultura PALOPs Suiça — 1ère Édition',
      pt: 'Cultura PALOPs Suíça — 1ª Edição',
      en: 'Cultura PALOPs Switzerland — 1st Edition',
    },
    date: '2026-05-02',
    time: '14h30 – 23h30',
    location: 'Sédeilles, VD',
    locationDetail: 'Route de Romond 9, 1554 Sédeilles',
    priceCHF: 49,
    tag: 'festival',
    featured: true,
    image: '/evenements/evenement%20cultura%20palop/evenement%20cultura%20palops.jpeg',
    gallery: [
      '/evenements/evenement%20cultura%20palop/evenement%20cultura%20palops.jpeg',
      '/evenements/evenement%20cultura%20palop/evenement%20cultura%20palops%202.jpeg',
      '/evenements/evenement%20cultura%20palop/evenements_resume1.webp',
      '/evenements/evenement%20cultura%20palop/evenements_resume2.webp',
      '/evenements/evenement%20cultura%20palop/evenements_resume3.webp',
      '/evenements/evenement%20cultura%20palop/evenements_resume4.webp',
    ],
    afterParty: '00h00 – 03h00',
    priceNote: 'Comprend une variété de plats typiques des pays PALOP (boissons exclues).',
    contacts: [
      { label: 'SÛ',      number: '079 965 03 54', href: 'tel:+41799650354' },
      { label: 'LITA',    number: '079 617 53 87', href: 'tel:+41796175387' },
      { label: 'HELDER',  number: '076 456 94 19', href: 'tel:+41764569419' },
      { label: 'SILVANA', number: '079 120 49 26', href: 'tel:+41791204926' },
    ],
    description: {
      fr: 'La première grande édition de la Cultura PALOPs Suiça — une journée de musique live, danse traditionnelle, gastronomie et culture des 5 pays lusophones d\'Afrique.',
      pt: 'A primeira grande edição da Cultura PALOPs Suíça — um dia de música ao vivo, dança tradicional, gastronomia e cultura dos 5 países lusófonos de África.',
      en: 'The first major edition of Cultura PALOPs Switzerland — a day of live music, traditional dance, gastronomy and culture from the 5 Lusophone African countries.',
    },
    artists: [
      'Princezito', 'Kev Gaita', 'Nito Freire', 'Riba D\'hora',
      'Batukaderas Panu Terra', 'Batukaderas Franco Tarrafal',
      'Batukaderas NG Nha Balila', 'Enzo', 'Sorriso Di Buzina',
      'Grupo Guapos', 'DJ Michel', 'DJ Smile',
      'Nuno Landim & Ivone', 'Orador Afrocentrado',
    ],
    countries: ['capvert', 'angola', 'bissau', 'mozambique', 'santome'],
  },

  // ── ÉVÉNEMENT FUTUR — 10 OCTOBRE ─────────────────────────────────────────
  {
    id: 'evenement-octobre-2026',
    title: {
      fr: 'Événement Octobre — Thème à venir',
      pt: 'Evento Outubro — Tema em breve',
      en: 'October Event — Theme coming soon',
    },
    date: '2026-10-10',
    location: 'Sédeilles, VD',
    tag: 'festival',
    countries: ['capvert', 'angola', 'bissau', 'mozambique', 'santome'],
  },
];

const localeMap: Record<Lang, string> = {
  fr: 'fr-FR',
  pt: 'pt-PT',
  en: 'en-GB',
};

export function formatEventDate(isoDate: string, lang: Lang): string {
  return new Intl.DateTimeFormat(localeMap[lang], {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(isoDate));
}

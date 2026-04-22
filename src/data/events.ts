import type { Lang } from '../app/translations';

export type EventTag = 'festival' | 'danse' | 'atelier' | 'gastronomie';

export type Event = {
  id: string;
  title: Record<Lang, string>;
  date: string; // ISO
  location: string;
  priceCHF?: number;
  tag: EventTag;
  featured?: boolean;
  image?: string;
  countries?: Array<'angola' | 'capvert' | 'bissau' | 'mozambique' | 'santome'>;
};

const MUSIC_IMG =
  'https://images.unsplash.com/photo-1672856181212-b5b5a0065a08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80';
const DANCE_IMG =
  'https://images.unsplash.com/photo-1772268337010-03e52e5b9a11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80';
const GALA_IMG =
  'https://images.unsplash.com/photo-1696236930810-5bd7ea978369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80';
const FESTIVAL_IMG =
  'https://images.unsplash.com/photo-1581536678606-3a35fecc8fc5?w=1080&q=80';

export const events: Event[] = [
  {
    id: 'festival-2026',
    title: {
      fr: 'Cultura PALOPs Suiça 2026',
      pt: 'Cultura PALOPs Suíça 2026',
      en: 'Cultura PALOPs Switzerland 2026',
    },
    date: '2026-07-20',
    location: 'Payerne, VD — Suisse',
    priceCHF: 49,
    tag: 'festival',
    featured: true,
    image: FESTIVAL_IMG,
    countries: ['angola', 'capvert', 'bissau', 'mozambique', 'santome'],
  },
  {
    id: 'kizomba-2026',
    title: {
      fr: 'Nuit Kizomba & Semba',
      pt: 'Noite Kizomba & Semba',
      en: 'Kizomba & Semba Night',
    },
    date: '2026-10-12',
    location: 'Lausanne, CH',
    tag: 'danse',
    image: MUSIC_IMG,
    countries: ['angola', 'capvert'],
  },
  {
    id: 'workshop-batuku-2026',
    title: {
      fr: 'Workshop Batuku',
      pt: 'Workshop Batuku',
      en: 'Batuku Workshop',
    },
    date: '2026-11-05',
    location: 'Genève, CH',
    tag: 'atelier',
    image: DANCE_IMG,
    countries: ['capvert'],
  },
  {
    id: 'gala-2026',
    title: {
      fr: 'Dîner de Gala PALOPs',
      pt: 'Jantar de Gala PALOPs',
      en: 'PALOPs Gala Dinner',
    },
    date: '2026-12-15',
    location: 'Payerne, CH',
    tag: 'gastronomie',
    image: GALA_IMG,
    countries: ['angola', 'capvert', 'bissau', 'mozambique', 'santome'],
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

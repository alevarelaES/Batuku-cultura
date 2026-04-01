// ─── Équipe ───────────────────────────────────────────────────────────────────
export interface TeamMember {
  id: string
  name: string
  role: string
  roleKey: string
  isExternal?: boolean
  color: string
  initials: string
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Ercelina Correia Garcia',
    role: 'Présidente',
    roleKey: 'presidente',
    color: 'bg-primary',
    initials: 'EC',
  },
  {
    id: '2',
    name: 'Emilita Mendes Stevens',
    role: 'Vice-présidente',
    roleKey: 'vicePresidente',
    color: 'bg-cv',
    initials: 'EM',
  },
  {
    id: '3',
    name: 'Carla Sofia Lopes De Oliveira',
    role: 'Trésorière / Secrétaire',
    roleKey: 'tresoriere',
    color: 'bg-nature',
    initials: 'CL',
  },
  {
    id: '4',
    name: 'Maria dos Anjos Freitas Cruz',
    role: 'Resp. Culinaire',
    roleKey: 'culinaire',
    color: 'bg-accent',
    initials: 'MF',
  },
  {
    id: '5',
    name: 'Helder Correia Garcia',
    role: 'Resp. Organisation',
    roleKey: 'organisation',
    color: 'bg-primary',
    initials: 'HC',
  },
  {
    id: '6',
    name: 'Maria Paula Lopes Monteiro Vaz',
    role: 'Resp. Santé',
    roleKey: 'sante',
    color: 'bg-nature',
    initials: 'MP',
  },
  {
    id: '7',
    name: 'Maria José Furtado',
    role: 'Resp. Événements',
    roleKey: 'evenements',
    color: 'bg-deep',
    initials: 'MJ',
  },
  {
    id: '8',
    name: 'Monica Josefa (Nelcy)',
    role: 'Communication Digitale',
    roleKey: 'communication',
    isExternal: true,
    color: 'bg-gray-400',
    initials: 'MN',
  },
  {
    id: '9',
    name: 'Kelton Lamine Correia Garcia',
    role: 'Intervenant Musical',
    roleKey: 'musical',
    isExternal: true,
    color: 'bg-gray-400',
    initials: 'KG',
  },
]

// ─── Pays PALOP ───────────────────────────────────────────────────────────────
export interface PalopCountry {
  id: string
  nameKey: string
  code: string
  color: string
  textColor: string
  music: string
  gastronomy: string
  musicDetail: string
  gastronomyDetail: string
}

export const palopCountries: PalopCountry[] = [
  {
    id: 'angola',
    nameKey: 'angola',
    code: 'AGO',
    color: 'bg-primary',
    textColor: 'text-white',
    music: 'Kizomba, Semba, Kuduro',
    gastronomy: 'Muamba, Calulu, Funje',
    musicDetail: "Kizomba, Semba, Kuduro... L'Angola est une puissance musicale mondiale. Sa gastronomie riche inclut le Muamba de Galinha.",
    gastronomyDetail: "La gastronomie angolaise est riche et parfumée. Le Muamba de Galinha, le Calulu et le Funje sont des incontournables.",
  },
  {
    id: 'capvert',
    nameKey: 'capvert',
    code: 'CPV',
    color: 'bg-cv',
    textColor: 'text-white',
    music: 'Batuku, Morna, Funana',
    gastronomy: 'Cachupa, Caldo de Peixe',
    musicDetail: "Archipel du rythme, berceau de la Morna mélancolique, de la Coladeira joyeuse, du Funana effréné et du Batuku résilient.",
    gastronomyDetail: "La Cachupa, ragoût mijoté à base de maïs, de haricots et de viandes ou poissons, est le plat national.",
  },
  {
    id: 'guinee-bissau',
    nameKey: 'guineeBissau',
    code: 'GNB',
    color: 'bg-accent',
    textColor: 'text-deep',
    music: 'Gumbe, Tiesura',
    gastronomy: 'Caldo de Mancarra',
    musicDetail: "Le Gumbe résonne dans les rues de Bissau, unifiant les nombreuses ethnies du pays. Chaque danse est un récit traditionnel puissant.",
    gastronomyDetail: "Terre de contrastes, sa cuisine utilise abondamment l'arachide et les fruits de mer. Le Caldo de Mancarra est une expérience culinaire inoubliable.",
  },
  {
    id: 'mozambique',
    nameKey: 'mozambique',
    code: 'MOZ',
    color: 'bg-nature',
    textColor: 'text-white',
    music: 'Marrabenta, Timbila',
    gastronomy: 'Matapa, Piri-Piri',
    musicDetail: "La danse Marrabenta est le pouls de Maputo. Les percussions Timbila en bois résonnent comme le cœur de cette nation côtière.",
    gastronomyDetail: "Influencée par l'océan Indien, la cuisine excelle avec le Matapa, un plat onctueux aux feuilles de manioc, cacahuètes et lait de coco.",
  },
  {
    id: 'sao-tome',
    nameKey: 'saoTome',
    code: 'STP',
    color: 'bg-deep',
    textColor: 'text-white',
    music: 'Ússua, Puxa',
    gastronomy: 'Calulu, Feijoada',
    musicDetail: "Îles de cacao au milieu de l'océan, la musique sãotoméenne comme le Tchiloli ou l'Ússua est douce, théâtrale et poétique.",
    gastronomyDetail: "Le Calulu, plat traditionnel complexe qui mijote pendant des heures avec des herbes fraîches, du poisson fumé et de l'huile de palme.",
  },
]

// ─── Événements ───────────────────────────────────────────────────────────────
export interface Event {
  id: string
  title: string
  date: string
  location: string
  category: string
  categoryColor: string
  image?: string
}

export const upcomingEvents: Event[] = [
  {
    id: '1',
    title: 'Nuit Kizomba & Semba',
    date: '12 Octobre 2026',
    location: 'Lausanne, CH',
    category: 'Danse',
    categoryColor: 'bg-cv text-white',
  },
  {
    id: '2',
    title: 'Workshop Batuku',
    date: '05 Novembre 2026',
    location: 'Genève, CH',
    category: 'Atelier',
    categoryColor: 'bg-nature text-white',
  },
  {
    id: '3',
    title: 'Dîner de Gala PALOPs',
    date: '15 Décembre 2026',
    location: 'Payerne, CH',
    category: 'Gastronomie',
    categoryColor: 'bg-accent text-deep',
  },
]

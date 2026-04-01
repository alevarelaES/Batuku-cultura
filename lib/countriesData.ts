export interface CountryTab {
  id: string
  name: string
  namePt: string
  nameEn: string
  code: string
  color: string
  bgColor: string
  textColor: string
  borderColor: string
  lightBg: string
  flag: string
  history: CountrySection
  culture: CountrySection
  gastronomy: CountrySection
}

export interface CountrySection {
  title: string
  subtitle: string
  text: string
  image: string
  imageAlt: string
  facts: Fact[]
  quote?: string
}

export interface Fact {
  icon: string
  label: string
  value: string
}

export const countriesData: CountryTab[] = [
  {
    id: 'cap-vert',
    name: 'Cap-Vert',
    namePt: 'Cabo Verde',
    nameEn: 'Cape Verde',
    code: 'CPV',
    color: '#1A5CB5',
    bgColor: 'bg-cv',
    textColor: 'text-cv',
    borderColor: 'border-cv',
    lightBg: 'bg-blue-50',
    flag: '🇨🇻',
    history: {
      title: 'Une naissance au carrefour des mondes',
      subtitle: 'Découvert en 1456 · Indépendant depuis 1975',
      text: `L'archipel du Cap-Vert, découvert inhabité par des navigateurs portugais et génois vers 1456, est devenu l'un des premiers territoires colonisés en Afrique subsaharienne. Sa position stratégique en Atlantique en fit un carrefour majeur du commerce triangulaire, brassant populations africaines, européennes et plus tard brésiliennes.

Cette rencontre forcée entre cultures a engendré une identité créole unique — la "crioulidade" — qui imprègne encore aujourd'hui chaque aspect de la vie cap-verdienne. Après 500 ans de colonisation portugaise, le Cap-Vert accède à l'indépendance le 5 juillet 1975, sous la direction du PAIGC de Luis Cabral.

Malgré ses ressources naturelles limitées et ses sécheresses récurrentes, l'archipel est devenu l'un des États africains les plus stables et les mieux gouvernés, avec un IDH parmi les plus élevés d'Afrique.`,
      image: 'https://images.unsplash.com/photo-1580019542155-247062e19ce4?w=700&q=80',
      imageAlt: 'Paysage du Cap-Vert',
      facts: [
        { icon: '📅', label: 'Indépendance', value: '5 juillet 1975' },
        { icon: '🏝️', label: 'Îles habitées', value: '10 îles principales' },
        { icon: '👥', label: 'Population', value: '550 000 habitants' },
      ],
      quote: '"Sodade" — la nostalgie créole qui unit les Cap-Verdiens du monde entier.',
    },
    culture: {
      title: 'La Morna, âme d\'un peuple',
      subtitle: 'Patrimoine UNESCO depuis 2019',
      text: `La musique est l'âme du Cap-Vert. La Morna, rendue célèbre mondialement par la "Diva aux pieds nus" Cesária Évora, est un genre mélancolique qui exprime la "sodade" — ce sentiment de nostalgie teinté d'amour et de désir. Inscrite au patrimoine immatériel de l'UNESCO en 2019, elle est au Cap-Vert ce que le tango est à l'Argentine.

Le Batuku, notre danse ancestrale née sur l'île de Santiago, est l'un des genres les plus anciens. Pratiqué en cercle par les femmes, il mêle percussions et chants polyphoniques dans un rituel de transmission communautaire. Le Funaná, longtemps interdit par l'Église catholique pour son caractère trop "africain" et sensuel, s'est imposé comme symbole de résistance culturelle.

La Coladeira, plus rythmée et joyeuse, et le Colá Zouk, fusion moderne avec le zouk antillais, complètent ce panorama musical exceptionnel. Des artistes comme Mayra Andrade, Elida Almeida et Sara Tavares perpétuent cette richesse dans le monde entier.`,
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=700&q=80',
      imageAlt: 'Musique et danse cap-verdienne',
      facts: [
        { icon: '🎵', label: 'Genre phare', value: 'Morna (UNESCO 2019)' },
        { icon: '💃', label: 'Danse emblème', value: 'Batuku de Santiago' },
        { icon: '🎸', label: 'Instrument', value: 'Cavaquinho & Violon' },
      ],
      quote: '"A morna é a alma de Cabo Verde" — La morna est l\'âme du Cap-Vert.',
    },
    gastronomy: {
      title: 'La Cachupa, âme de la cuisine',
      subtitle: 'Fusion africaine, portugaise et atlantique',
      text: `La gastronomie cap-verdienne est un reflet fidèle de son histoire de métissage. La Cachupa, plat national par excellence, est un ragoût longuement mijoté de maïs, haricots noirs, patates douces, manioc et viandes ou poissons selon les ressources. Elle se déguste le matin revisitée avec œufs et chorizo — la "cachupa guisada".

Les produits de la mer tiennent une place centrale : mérous, thons, langoustes et poulpes sont grillés, marinés ou en sauce. Le "Caldo de Peixe", bouillon de poisson aux légumes et épices, est une soupe réconfortante incontournable. Le "Pastel com Diablo Dentro" — littéralement "gâteau avec le diable dedans" — est une spécialité de thon frais et légumes en pâte croustillante.

Pour les occasions festives, le Cuscuz de maïs pilé cuit et le Churrasco (viandes grillées) animent les tables. Les fruits tropicaux — mangues, papayes, goyaves — concluent chaque repas.`,
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=700&q=80',
      imageAlt: 'Gastronomie cap-verdienne',
      facts: [
        { icon: '🍲', label: 'Plat national', value: 'Cachupa Rica' },
        { icon: '🐟', label: 'Spécialité', value: 'Caldo de Peixe' },
        { icon: '🥐', label: 'Street food', value: 'Pastel com Diablo' },
      ],
      quote: '"Cachupa é vida" — La cachupa, c\'est la vie.',
    },
  },

  {
    id: 'angola',
    name: 'Angola',
    namePt: 'Angola',
    nameEn: 'Angola',
    code: 'AGO',
    color: '#E8620A',
    bgColor: 'bg-primary',
    textColor: 'text-primary',
    borderColor: 'border-primary',
    lightBg: 'bg-orange-50',
    flag: '🇦🇴',
    history: {
      title: 'Du Royaume Kongo à l\'indépendance',
      subtitle: 'Colonisé en 1575 · Indépendant depuis 1975',
      text: `L'Angola, avant l'arrivée des Portugais en 1575, était le territoire de puissants royaumes africains, notamment le Royaume Kongo au nord et le Royaume Ndongo au centre. Ces civilisations avaient développé des structures politiques sophistiquées, des arts et des traditions qui demeurent vivaces aujourd'hui.

La colonisation portugaise imposa un régime de traite négrière massif — des millions d'Angolais furent déportés au Brésil, où leurs traditions culturelles donnèrent naissance à des danses comme la Samba. Après une longue guerre d'indépendance (1961-1975), l'Angola accède à la liberté le 11 novembre 1975, suivi d'une guerre civile dévastatrice qui ne prendra fin qu'en 2002.

Pays le plus riche en pétrole et diamants d'Afrique subsaharienne, l'Angola est en pleine reconstruction et s'affirme comme une puissance économique continentale.`,
      image: 'https://images.unsplash.com/photo-1590736969596-c427ba7b4bed?w=700&q=80',
      imageAlt: 'Angola paysage et culture',
      facts: [
        { icon: '📅', label: 'Indépendance', value: '11 novembre 1975' },
        { icon: '💎', label: 'Ressources', value: 'Pétrole & Diamants' },
        { icon: '👥', label: 'Population', value: '35 millions' },
      ],
      quote: '"O Pensador" — La sculpture Tchokwe, symbole de la sagesse ancestrale angolaise.',
    },
    culture: {
      title: 'Kizomba, Semba & Kuduro',
      subtitle: 'Des rythmes qui ont conquis le monde',
      text: `La musique angolaise est une force mondiale. Le Semba, né dans les années 1940 dans les quartiers populaires de Luanda, est la musique-mère. Son nom signifie "nombril contre nombril" en Kimbundu — une référence au contact intime de la danse. Le Semba a directement influencé la Samba brésilienne.

La Kizomba, apparue dans les années 1980 et signifiant "fête" en Kimbundu, est l'évolution sensuelle du Semba mêlée au Zouk antillais. Surnommée "tango africain", elle est aujourd'hui dansée dans le monde entier et reconnue comme patrimoine culturel angolais depuis 2024. Le Kuduro, né dans les années 1990 dans les quartiers de Luanda, est une musique électronique et acrobatique qui exprime l'énergie des nouvelles générations.

Le Carnaval de Luanda, chaque février, est l'une des plus grandes fêtes d'Afrique — c'est d'ailleurs des esclaves angolais déportés au Brésil que serait né le Carnaval de Rio de Janeiro.`,
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=700&q=80',
      imageAlt: 'Danse Kizomba Angola',
      facts: [
        { icon: '💃', label: 'Danse mondiale', value: 'Kizomba (patrimoine 2024)' },
        { icon: '🎵', label: 'Précurseur', value: 'Semba → Samba brésilienne' },
        { icon: '🎉', label: 'Fête', value: 'Carnaval de Luanda' },
      ],
      quote: '"Kizomba" signifie "fête" en Kimbundu — une danse qui unit les peuples.',
    },
    gastronomy: {
      title: 'La richesse de la table angolaise',
      subtitle: 'Saveurs africaines et influences atlantiques',
      text: `La cuisine angolaise est un trésor de saveurs, ancrée dans les traditions des nombreux groupes ethniques du pays. La Muamba de Galinha — poulet mijoté dans l'huile de palme avec okra et épices — est le plat emblématique par excellence. Sa couleur dorée et son parfum envoûtant en font l'incontournable des grandes tables.

Le Funje, bouillie de farine de manioc d'une texture veloutée, est la base de l'alimentation. Servi avec presque tout, il remplace le pain ou le riz dans de nombreux foyers. Le Calulu, ragoût de poisson fumé ou de viande aux légumes et huile de palme, révèle la sophistication de la cuisine traditionnelle Mbundu.

La cuisine du littoral, autour de Luanda, valorise les produits de la mer : crevettes géantes, crabes, thiof. Le marché de Futungo de Belas est le meilleur endroit pour découvrir les saveurs locales avec les instruments et les sons des musiciens de rue.`,
      image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=700&q=80',
      imageAlt: 'Gastronomie angolaise',
      facts: [
        { icon: '🍗', label: 'Plat signature', value: 'Muamba de Galinha' },
        { icon: '🌿', label: 'Base', value: 'Funje (farine de manioc)' },
        { icon: '🐟', label: 'Spécialité', value: 'Calulu de Peixe' },
      ],
      quote: 'L\'huile de palme est l\'âme de la cuisine angolaise — rouge, parfumée, essentielle.',
    },
  },

  {
    id: 'guinee-bissau',
    name: 'Guinée-Bissau',
    namePt: 'Guiné-Bissau',
    nameEn: 'Guinea-Bissau',
    code: 'GNB',
    color: '#F5B800',
    bgColor: 'bg-accent',
    textColor: 'text-deep',
    borderColor: 'border-accent',
    lightBg: 'bg-yellow-50',
    flag: '🇬🇼',
    history: {
      title: 'La résistance de l\'Amílcar Cabral',
      subtitle: 'Colonisée au XVe siècle · Indépendante depuis 1974',
      text: `La Guinée-Bissau, avant la colonisation, était un territoire peuplé de nombreuses ethnies — Balantes, Fulas, Mandingas, Manjaques — vivant en semi-autonomie avec leurs propres royaumes et traditions. Les Portugais l'intégrèrent dès le XVe siècle dans leur réseau commercial, notamment pour la traite des esclaves.

Amílcar Cabral, l'une des grandes figures intellectuelles et révolutionnaires africaines, fonda le PAIGC en 1956 et mena une guerre de libération exemplaire. Son assassinat en 1973 n'empêcha pas l'indépendance, proclamée le 24 septembre 1973 — un an avant la révolution des Œillets au Portugal — et reconnue le 10 septembre 1974.

Malgré une instabilité politique chronique, le pays conserve une vitalité culturelle remarquable, portée par ses nombreuses ethnies et son exceptionnelle biodiversité maritime.`,
      image: 'https://images.unsplash.com/photo-1504945005722-33670dcaf685?w=700&q=80',
      imageAlt: 'Guinée-Bissau paysage et culture',
      facts: [
        { icon: '📅', label: 'Indépendance', value: '24 septembre 1973' },
        { icon: '🌊', label: 'Archipel', value: 'Îles Bijagós (UNESCO)' },
        { icon: '🎭', label: 'Ethnies', value: '30+ groupes ethniques' },
      ],
      quote: '"A luta continua" — Le combat continue, slogan hérité d\'Amílcar Cabral.',
    },
    culture: {
      title: 'Le Gumbe et les rythmes Bijagós',
      subtitle: 'Une diversité ethnique unique',
      text: `La Guinée-Bissau possède l'une des cultures les plus riches et les moins connues d'Afrique occidentale. Avec plus de 30 groupes ethniques, chacun avec ses propres langues, rituels et expressions artistiques, le pays est un conservatoire vivant des traditions africaines.

Le Gumbe, genre musical phare, résonne dans les rues de Bissau et les villages du pays. Né du mélange des traditions Balante avec des influences caribéennes, il se caractérise par ses percussions de djembés et ses chants polyphoniques. Chaque ethnie possède ses propres danses cérémonielles : les Bijagós de l'archipel éponyme pratiquent des rituels de passage où la danse est sacrée.

Les masques et sculptures traditionnelles, notamment ceux des Bijagós, sont reconnus dans les musées du monde entier pour leur puissance artistique. Le Carnaval de Bissau et les fêtes de récolte animées de tambours et de danses traditionnelles sont des moments de communion collective irremplaçables.`,
      image: 'https://images.unsplash.com/photo-1499678329028-101435549a4e?w=700&q=80',
      imageAlt: 'Culture Guinée-Bissau',
      facts: [
        { icon: '🥁', label: 'Rythme', value: 'Gumbe — fusion afro-caraïbe' },
        { icon: '🎭', label: 'Art sacré', value: 'Masques Bijagós' },
        { icon: '🌴', label: 'Archipel', value: 'Îles Bijagós — UNESCO' },
      ],
      quote: 'Les îles Bijagós — un sanctuaire naturel et culturel au cœur de l\'Atlantique.',
    },
    gastronomy: {
      title: 'La cuisine de l\'arachide et de la mer',
      subtitle: 'Saveurs intenses de l\'Afrique de l\'Ouest',
      text: `La gastronomie de la Guinée-Bissau est fortement influencée par ses traditions agricoles et maritimes. L'arachide, cultivée en abondance, est l'ingrédient central de nombreux plats. Le Caldo de Mancarra — bouillon d'arachide avec légumes, poisson ou viande — est la préparation la plus emblématique, relevée de piments et d'épices locales.

Les fruits de mer tiennent une place d'honneur dans la cuisine côtière : crevettes, crabes et poissons frais sont préparés avec du riz, du manioc et des légumes. Les mangues, corossols et baobabs apportent leurs saveurs acidulées aux préparations et aux boissons locales.

La sauce palme, à base d'huile de palme rouge, accompagne de nombreux plats traditionnels. Le riz est la base de l'alimentation pour les ethnies côtières, tandis que le mil et le sorgho dominent dans les régions intérieures peuplées par les Fulas et les Mandingues.`,
      image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=700&q=80',
      imageAlt: 'Gastronomie Guinée-Bissau',
      facts: [
        { icon: '🥜', label: 'Ingrédient roi', value: 'Arachide — base de tout' },
        { icon: '🦐', label: 'Spécialité', value: 'Caldo de Mancarra' },
        { icon: '🌾', label: 'Céréales', value: 'Riz, Mil, Sorgho' },
      ],
      quote: 'La cuisine bissau-guinéenne — simple, généreuse et profondément africaine.',
    },
  },

  {
    id: 'mozambique',
    name: 'Mozambique',
    namePt: 'Moçambique',
    nameEn: 'Mozambique',
    code: 'MOZ',
    color: '#2D7A5E',
    bgColor: 'bg-nature',
    textColor: 'text-nature',
    borderColor: 'border-nature',
    lightBg: 'bg-green-50',
    flag: '🇲🇿',
    history: {
      title: 'Entre l\'Inde et l\'Afrique',
      subtitle: 'Colonisé en 1498 · Indépendant depuis 1975',
      text: `Le Mozambique, avant l'arrivée de Vasco de Gama en 1498, était une région prospère animée par les réseaux commerciaux swahili reliant l'Afrique à l'Inde et à l'Arabie. Les cités-États côtières comme Sofala et Mozambique échangeaient or, ivoire et épices avec les marchands arabes et indiens.

La colonisation portugaise (1505-1975) fut l'une des plus longues d'Afrique. La guerre d'indépendance menée par le FRELIMO (1964-1974) se conclut par l'indépendance le 25 juin 1975. Une guerre civile dévastatrice (1977-1992) laissa le pays exsangue avant un processus de paix exemplaire.

Aujourd'hui, le Mozambique révèle ses richesses naturelles — gaz naturel, côtes paradisiaques, biodiversité exceptionnelle — tout en préservant sa mosaïque de cultures bantoues enrichies d'influences swahili, arabes et indiennes.`,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
      imageAlt: 'Mozambique côte et culture',
      facts: [
        { icon: '📅', label: 'Indépendance', value: '25 juin 1975' },
        { icon: '🌊', label: 'Côte', value: '2 500 km de littoral' },
        { icon: '🌍', label: 'Langues', value: '30+ langues bantoues' },
      ],
      quote: 'Le Mozambique — où les routes commerciales de l\'Inde rencontrent l\'âme africaine.',
    },
    culture: {
      title: 'Marrabenta, Timbila et l\'art de vivre Makonde',
      subtitle: 'Une fusion unique d\'influences bantoues et swahili',
      text: `La culture mozambicaine est une fascinante mosaïque d'influences africaines, arabes, indiennes et portugaises. La Marrabenta, née à Maputo dans les années 1930, est le genre musical national — un rythme endiablé qui raconte la vie urbaine avec ses joies et ses peines sous la colonisation. L'artiste Pedro Raimundo en est le père fondateur.

La Timbila, instrument de percussion à lames de bois du peuple Chopi, est inscrite au patrimoine immatériel de l'UNESCO. Ces orchestres de xylophones produisent une musique d'une complexité remarquable, accompagnant les cérémonies et danses rituelles. Les sculptures Makonde, avec leur bois d'ébène travaillé en représentations humaines enchevêtrées, sont parmi les plus recherchées au monde.

Le Ngalanga (danse d'initiation) et les cérémonies Nyau (masques sacrés) témoignent de la profondeur des traditions spirituelles mozambicaines.`,
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=700&q=80',
      imageAlt: 'Culture Mozambique danse',
      facts: [
        { icon: '🎵', label: 'Musique nationale', value: 'Marrabenta de Maputo' },
        { icon: '🥁', label: 'UNESCO', value: 'Timbila Chopi' },
        { icon: '🎨', label: 'Art mondial', value: 'Sculptures Makonde' },
      ],
      quote: '"Timbila" — les xylophones Chopi, voix des ancêtres du Mozambique.',
    },
    gastronomy: {
      title: 'Les saveurs de l\'Océan Indien',
      subtitle: 'Fruits de mer, piri-piri et influences swahili',
      text: `La cuisine mozambicaine est profondément marquée par sa côte de 2 500 km et ses échanges millénaires avec l'Océan Indien. Les crevettes géantes du Mozambique — "camarão gigante" — sont réputées dans le monde entier. Grillées au charbon et servies avec du piri-piri maison, elles sont l'expérience culinaire ultime.

Le Matapa est le plat national — feuilles de manioc pilées avec arachides, noix de coco et crevettes. Sa texture crémeuse et ses arômes complexes témoignent de la sophistication de la cuisine bantoue. La sauce piri-piri mozambicaine, mélange de piments, ail et citron, est l'une des plus fameuses d'Afrique et a influencé la cuisine portugaise et mondiale.

Le poisson et les fruits de mer — thiof, mérou, calmar, crabe — se cuisinent à la braise, en curry avec lait de coco, ou en ragoût. Le riz est la base, souvent cuit au lait de coco dans les régions côtières.`,
      image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=700&q=80',
      imageAlt: 'Gastronomie Mozambique',
      facts: [
        { icon: '🦐', label: 'Spécialité monde', value: 'Camarão Gigante' },
        { icon: '🍃', label: 'Plat national', value: 'Matapa aux feuilles' },
        { icon: '🌶️', label: 'Sauce emblème', value: 'Piri-Piri Mozambicain' },
      ],
      quote: 'Les crevettes du Mozambique — une légende culinaire de l\'Océan Indien.',
    },
  },

  {
    id: 'sao-tome',
    name: 'São Tomé',
    namePt: 'São Tomé e Príncipe',
    nameEn: 'São Tomé and Príncipe',
    code: 'STP',
    color: '#5C2D82',
    bgColor: 'bg-deep',
    textColor: 'text-deep',
    borderColor: 'border-deep',
    lightBg: 'bg-purple-50',
    flag: '🇸🇹',
    history: {
      title: 'Les îles du milieu du monde',
      subtitle: 'Découvertes en 1470 · Indépendantes depuis 1975',
      text: `São Tomé-et-Príncipe, minuscule archipel volcanique dans le Golfe de Guinée, fut découvert inhabité par les Portugais en 1470. Situé presque exactement sur l'équateur — d'où son surnom "les îles du milieu du monde" — il devint rapidement l'une des premières plantations de canne à sucre d'Afrique, exploitée par des esclaves du continent.

Son histoire est marquée par la traite négrière et la culture des "roças" — grandes plantations coloniales de cacao et café dont les architectures imposantes sont aujourd'hui classées. C'est de São Tomé que partirent certains des premiers négriers vers le Brésil, créant des liens culturels profonds avec ce pays.

L'indépendance est proclamée le 12 juillet 1975. Aujourd'hui, l'archipel cherche à valoriser son extraordinaire patrimoine naturel — forêt tropicale primaire, oiseaux endémiques — et son cacao de qualité mondiale, rebaptisé "chocolate de São Tomé".`,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=80',
      imageAlt: 'São Tomé paysage volcanique',
      facts: [
        { icon: '📅', label: 'Indépendance', value: '12 juillet 1975' },
        { icon: '🌍', label: 'Position', value: 'Sur l\'équateur' },
        { icon: '🍫', label: 'Richesse', value: 'Cacao Premium mondial' },
      ],
      quote: '"Ilhas do Meio do Mundo" — Les îles du milieu du monde, entre deux hémisphères.',
    },
    culture: {
      title: 'Ússua, Puxa et Tchiloli',
      subtitle: 'Un carrefour de cultures luso-africaines',
      text: `São Tomé-et-Príncipe a développé une culture métisse d'une richesse exceptionnelle, fusion des traditions africaines des nombreux peuples esclaves avec l'héritage portugais et les influences brésiliennes et créoles.

Le Tchiloli est la manifestation culturelle la plus unique de l'île — une représentation théâtrale en plein air, vêtue de costumes médiévaux portugais, qui raconte l'histoire de Charlemagne. Mêlant portugais archaïque et créole, cet art populaire millénaire est inscrit au patrimoine immatériel de l'UNESCO. L'Ússua et le Puxa sont des genres musicaux locaux aux rythmes sensuels et mélancoliques.

L'Auto de Floripes, autre théâtre populaire unique, met en scène le combat entre Chrétiens et Maures dans une version créolisée. Ces traditions théâtrales hybrides n'existent nulle part ailleurs sur terre. Le Danço Congo, danse rituelle héritée des esclaves du Royaume Kongo, est pratiqué lors des fêtes religieuses.`,
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=700&q=80',
      imageAlt: 'Culture São Tomé spectacle',
      facts: [
        { icon: '🎭', label: 'UNESCO', value: 'Tchiloli — théâtre unique' },
        { icon: '🎵', label: 'Musique locale', value: 'Ússua & Puxa' },
        { icon: '🥁', label: 'Danse rituelle', value: 'Danço Congo' },
      ],
      quote: 'Le Tchiloli — Charlemagne parlant créole sous les palmiers équatoriaux.',
    },
    gastronomy: {
      title: 'Le cacao, les roças et les saveurs tropicales',
      subtitle: 'Cuisine insulaire aux influences multiples',
      text: `La cuisine de São Tomé-et-Príncipe est une délicieuse fusion de saveurs africaines, portugaises et tropicales. Le Calulu, plat national, est un ragoût complexe préparé pendant des heures : poisson fumé ou viande mijotent avec des herbes sauvages, des légumes-feuilles, de l'huile de palme et des épices. Chaque famille a sa recette secrète transmise de génération en génération.

Le cacao de São Tomé est reconnu comme l'un des meilleurs du monde — grand cru de chocolat aux arômes floraux et fruités, cultivé dans les anciennes roças coloniales. Les chocolatiers belges et suisses se le disputent. La Feijoada sãotomense, haricots noirs aux viandes fumées, est la fête du dimanche.

Les fruits tropicaux en abondance — bananes, papayes, ananas, maracujas — se retrouvent dans les jus frais, les desserts et les préparations salées. Le poisson grillé aux bananes plantain reste la simplicité à son sommet.`,
      image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=700&q=80',
      imageAlt: 'Gastronomie São Tomé cacao',
      facts: [
        { icon: '🍫', label: 'Trésor mondial', value: 'Cacao Grand Cru' },
        { icon: '🍲', label: 'Plat national', value: 'Calulu de Peixe' },
        { icon: '🌺', label: 'Spécialité', value: 'Feijoada sãotomense' },
      ],
      quote: 'Le chocolat de São Tomé — le meilleur d\'Afrique, cultivé depuis 500 ans.',
    },
  },
]

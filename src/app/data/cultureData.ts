import type { Lang } from '../translations';

export type SubTabId = 'history' | 'culture' | 'gastronomy';

/** Texte multilingue */
type ML = Record<Lang, string>;

export interface Fact {
  label: ML;
  value: ML;
}

export interface CountrySection {
  title: ML;
  subtitle: ML;
  text: ML;
  image: string;
  imageAlt: string;
  facts: Fact[];
  quote?: ML;
}

export interface CountryTab {
  id: string;
  name: ML;
  code: string;
  color: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
  history: CountrySection;
  culture: CountrySection;
  gastronomy: CountrySection;
}

export const countriesData: CountryTab[] = [
  /* ═══════════════════════════════════════════════════════════
     CAP-VERT / CABO VERDE / CAPE VERDE
  ═══════════════════════════════════════════════════════════ */
  {
    id: 'cap-vert',
    name: {
      fr: 'Cap-Vert',
      pt: 'Cabo Verde',
      en: 'Cape Verde',
    },
    code: 'CPV',
    color: '#1A5CB5',
    bgColor: 'bg-cv',
    textColor: 'text-cv',
    borderColor: 'border-cv',

    history: {
      title: {
        fr: 'Une naissance au carrefour des mondes',
        pt: 'Um nascimento na encruzilhada dos mundos',
        en: 'Born at the crossroads of worlds',
      },
      subtitle: {
        fr: 'Découvert en 1456 · Indépendant depuis 1975',
        pt: 'Descoberto em 1456 · Independente desde 1975',
        en: 'Discovered in 1456 · Independent since 1975',
      },
      text: {
        fr: `L'archipel du Cap-Vert, découvert inhabité par des navigateurs portugais et génois vers 1456, est devenu l'un des premiers territoires colonisés en Afrique subsaharienne. Sa position stratégique en Atlantique en fit un carrefour majeur du commerce triangulaire, brassant populations africaines, européennes et plus tard brésiliennes.\n\nCette rencontre forcée entre cultures a engendré une identité créole unique — la "crioulidade" — qui imprègne encore aujourd'hui chaque aspect de la vie cap-verdienne. Après 500 ans de colonisation portugaise, le Cap-Vert accède à l'indépendance le 5 juillet 1975, sous la direction du PAIGC de Luis Cabral.\n\nMalgré ses ressources naturelles limitées et ses sécheresses récurrentes, l'archipel est devenu l'un des États africains les plus stables et les mieux gouvernés, avec un IDH parmi les plus élevés d'Afrique.`,
        pt: `O arquipélago de Cabo Verde, descoberto desabitado por navegadores portugueses e genoveses por volta de 1456, tornou-se um dos primeiros territórios colonizados na África subsaariana. A sua posição estratégica no Atlântico fez dele um importante cruzamento do comércio triangular, misturando populações africanas, europeias e mais tarde brasileiras.\n\nEste encontro forçado entre culturas gerou uma identidade crioula única — a "crioulidade" — que ainda hoje impregna todos os aspectos da vida cabo-verdiana. Após 500 anos de colonização portuguesa, Cabo Verde alcançou a independência a 5 de julho de 1975, sob a liderança do PAIGC de Luís Cabral.\n\nApesar dos seus recursos naturais limitados e das secas recorrentes, o arquipélago tornou-se um dos estados africanos mais estáveis e bem governados, com um IDH entre os mais altos de África.`,
        en: `The Cape Verde archipelago, discovered uninhabited by Portuguese and Genoese navigators around 1456, became one of the first colonized territories in sub-Saharan Africa. Its strategic position in the Atlantic made it a major crossroads of the triangular trade, blending African, European and later Brazilian populations.\n\nThis forced encounter between cultures gave rise to a unique Creole identity — "crioulidade" — which still permeates every aspect of Cape Verdean life today. After 500 years of Portuguese colonization, Cape Verde gained independence on July 5, 1975, under the leadership of the PAIGC of Luís Cabral.\n\nDespite its limited natural resources and recurring droughts, the archipelago has become one of Africa's most stable and well-governed states, with one of the highest Human Development Index scores on the continent.`,
      },
      image: '/about%20par%20pays/histoire/cap%20vert/43402808.jpg',
      imageAlt: 'Paysage du Cap-Vert',
      facts: [
        {
          label: { fr: 'Indépendance', pt: 'Independência', en: 'Independence' },
          value: { fr: '5 juillet 1975', pt: '5 de julho de 1975', en: 'July 5, 1975' },
        },
        {
          label: { fr: 'Îles habitées', pt: 'Ilhas habitadas', en: 'Inhabited islands' },
          value: { fr: '10 îles principales', pt: '10 ilhas principais', en: '10 main islands' },
        },
        {
          label: { fr: 'Population', pt: 'População', en: 'Population' },
          value: { fr: '550 000 habitants', pt: '550 000 habitantes', en: '550,000 inhabitants' },
        },
      ],
      quote: {
        fr: '"Sodade" — la nostalgie créole qui unit les Cap-Verdiens du monde entier.',
        pt: '"Sodade" — a nostalgia crioula que une os cabo-verdianos de todo o mundo.',
        en: '"Sodade" — the Creole longing that unites Cape Verdeans around the world.',
      },
    },

    culture: {
      title: {
        fr: "La Morna, âme d'un peuple",
        pt: 'A Morna, alma de um povo',
        en: 'Morna, the soul of a people',
      },
      subtitle: {
        fr: 'Patrimoine UNESCO depuis 2019',
        pt: 'Património UNESCO desde 2019',
        en: 'UNESCO Heritage since 2019',
      },
      text: {
        fr: `La musique est l'âme du Cap-Vert. La Morna, rendue célèbre mondialement par la "Diva aux pieds nus" Cesária Évora, est un genre mélancolique qui exprime la "sodade" — ce sentiment de nostalgie teinté d'amour et de désir. Inscrite au patrimoine immatériel de l'UNESCO en 2019, elle est au Cap-Vert ce que le tango est à l'Argentine.\n\nLe Batuku, notre danse ancestrale née sur l'île de Santiago, est l'un des genres les plus anciens. Pratiqué en cercle par les femmes, il mêle percussions et chants polyphoniques dans un rituel de transmission communautaire. Le Funaná, longtemps interdit par l'Église catholique pour son caractère trop "africain" et sensuel, s'est imposé comme symbole de résistance culturelle.\n\nLa Coladeira, plus rythmée et joyeuse, et le Colá Zouk, fusion moderne avec le zouk antillais, complètent ce panorama musical exceptionnel. Des artistes comme Mayra Andrade, Elida Almeida et Sara Tavares perpétuent cette richesse dans le monde entier.`,
        pt: `A música é a alma de Cabo Verde. A Morna, tornada famosa mundialmente pela "Diva dos Pés Descalços" Cesária Évora, é um género melancólico que exprime a "sodade" — esse sentimento de nostalgia tingido de amor e desejo. Inscrita no Património Imaterial da UNESCO em 2019, é para Cabo Verde o que o tango é para a Argentina.\n\nO Batuku, a nossa dança ancestral nascida na ilha de Santiago, é um dos géneros mais antigos. Praticado em círculo pelas mulheres, combina percussão e cantos polifónicos num ritual de transmissão comunitária. O Funaná, proibido durante muito tempo pela Igreja Católica por ser demasiado "africano" e sensual, afirmou-se como símbolo de resistência cultural.\n\nA Coladeira, mais ritmada e alegre, e o Colá Zouk, fusão moderna com o zouk antilhano, completam este panorama musical excecional. Artistas como Mayra Andrade, Elida Almeida e Sara Tavares perpetuam esta riqueza em todo o mundo.`,
        en: `Music is the soul of Cape Verde. Morna, made world-famous by the "Barefoot Diva" Cesária Évora, is a melancholic genre expressing "sodade" — that feeling of nostalgia tinged with love and longing. Listed as UNESCO Intangible Heritage in 2019, it is to Cape Verde what tango is to Argentina.\n\nBatuku, our ancestral dance born on the island of Santiago, is one of the oldest genres. Performed in a circle by women, it blends percussion and polyphonic singing in a ritual of communal transmission. Funaná, long banned by the Catholic Church for being too "African" and sensual, became a powerful symbol of cultural resistance.\n\nColadeira, more rhythmic and joyful, and Colá Zouk, a modern fusion with Antillean zouk, complete this exceptional musical panorama. Artists such as Mayra Andrade, Elida Almeida and Sara Tavares carry this richness throughout the world.`,
      },
      image: '/about%20par%20pays/musique%20et%20dance/cap%20vert/musiquetraditionnellecap-vert.jpg',
      imageAlt: 'Musique et danse cap-verdienne',
      facts: [
        {
          label: { fr: 'Genre phare', pt: 'Género principal', en: 'Flagship genre' },
          value: { fr: 'Morna (UNESCO 2019)', pt: 'Morna (UNESCO 2019)', en: 'Morna (UNESCO 2019)' },
        },
        {
          label: { fr: 'Danse emblème', pt: 'Dança emblema', en: 'Emblem dance' },
          value: { fr: 'Batuku de Santiago', pt: 'Batuku de Santiago', en: 'Batuku of Santiago' },
        },
        {
          label: { fr: 'Instrument', pt: 'Instrumento', en: 'Instrument' },
          value: { fr: 'Cavaquinho & Violon', pt: 'Cavaquinho & Violino', en: 'Cavaquinho & Violin' },
        },
      ],
      quote: {
        fr: '"A morna é a alma de Cabo Verde" — La morna est l\'âme du Cap-Vert.',
        pt: '"A morna é a alma de Cabo Verde" — A morna é a alma de Cabo Verde.',
        en: '"A morna é a alma de Cabo Verde" — Morna is the soul of Cape Verde.',
      },
    },

    gastronomy: {
      title: {
        fr: 'La Cachupa, âme de la cuisine',
        pt: 'A Cachupa, alma da cozinha',
        en: 'Cachupa, the heart of the kitchen',
      },
      subtitle: {
        fr: 'Fusion africaine, portugaise et atlantique',
        pt: 'Fusão africana, portuguesa e atlântica',
        en: 'African, Portuguese and Atlantic fusion',
      },
      text: {
        fr: `La gastronomie cap-verdienne est un reflet fidèle de son histoire de métissage. La Cachupa, plat national par excellence, est un ragoût longuement mijoté de maïs, haricots noirs, patates douces, manioc et viandes ou poissons selon les ressources. Elle se déguste le matin revisitée avec œufs et chorizo — la "cachupa guisada".\n\nLes produits de la mer tiennent une place centrale : mérous, thons, langoustes et poulpes sont grillés, marinés ou en sauce. Le "Caldo de Peixe", bouillon de poisson aux légumes et épices, est une soupe réconfortante incontournable. Le "Pastel com Diablo Dentro" — littéralement "gâteau avec le diable dedans" — est une spécialité de thon frais et légumes en pâte croustillante.\n\nPour les occasions festives, le Cuscuz de maïs pilé cuit et le Churrasco (viandes grillées) animent les tables. Les fruits tropicaux — mangues, papayes, goyaves — concluent chaque repas.`,
        pt: `A gastronomia cabo-verdiana é um reflexo fiel da sua história de mestiçagem. A Cachupa, prato nacional por excelência, é um guisado cozinhado lentamente com milho, feijão preto, batata-doce, mandioca e carnes ou peixe conforme os recursos. Degusta-se de manhã revisitada com ovos e chouriço — a "cachupa guisada".\n\nOs produtos do mar ocupam um lugar central: garoupas, atum, lagosta e polvo são grelhados, marinados ou em molho. O "Caldo de Peixe", caldo de peixe com legumes e especiarias, é uma sopa reconfortante incontornável. O "Pastel com Diabo Dentro" — literalmente "bolo com o diabo dentro" — é uma especialidade de atum fresco e legumes em massa estaladiça.\n\nPara as ocasiões festivas, o Cuscuz de milho pilado cozido e o Churrasco (carnes grelhadas) animam as mesas. As frutas tropicais — mangas, papaias, goiabas — encerram cada refeição.`,
        en: `Cape Verdean gastronomy is a true reflection of its history of cultural mixing. Cachupa, the national dish par excellence, is a long-simmered stew of corn, black beans, sweet potatoes, cassava and meat or fish depending on available resources. It is enjoyed in the morning revisited with eggs and chorizo — the "cachupa guisada".\n\nSeafood holds a central place: grouper, tuna, lobster and octopus are grilled, marinated or served in sauce. "Caldo de Peixe", a fish broth with vegetables and spices, is an essential comfort soup. "Pastel com Diabo Dentro" — literally "pastry with the devil inside" — is a specialty of fresh tuna and vegetables in crispy dough.\n\nFor festive occasions, pounded corn Cuscuz and Churrasco (grilled meats) enliven the table. Tropical fruits — mangoes, papayas, guavas — conclude every meal.`,
      },
      image: '/about%20par%20pays/gastronomie/cap%20vert/cachupa-sal-cabo-verde-1.png',
      imageAlt: 'Gastronomie cap-verdienne',
      facts: [
        {
          label: { fr: 'Plat national', pt: 'Prato nacional', en: 'National dish' },
          value: { fr: 'Cachupa Rica', pt: 'Cachupa Rica', en: 'Cachupa Rica' },
        },
        {
          label: { fr: 'Spécialité', pt: 'Especialidade', en: 'Specialty' },
          value: { fr: 'Caldo de Peixe', pt: 'Caldo de Peixe', en: 'Caldo de Peixe' },
        },
        {
          label: { fr: 'Street food', pt: 'Street food', en: 'Street food' },
          value: { fr: 'Pastel com Diablo', pt: 'Pastel com Diabo', en: 'Pastel com Diabo' },
        },
      ],
      quote: {
        fr: '"Cachupa é vida" — La cachupa, c\'est la vie.',
        pt: '"Cachupa é vida" — A cachupa é a vida.',
        en: '"Cachupa é vida" — Cachupa is life.',
      },
    },
  },

  /* ═══════════════════════════════════════════════════════════
     ANGOLA
  ═══════════════════════════════════════════════════════════ */
  {
    id: 'angola',
    name: {
      fr: 'Angola',
      pt: 'Angola',
      en: 'Angola',
    },
    code: 'AGO',
    color: '#E8620A',
    bgColor: 'bg-primary',
    textColor: 'text-primary',
    borderColor: 'border-primary',

    history: {
      title: {
        fr: "Du Royaume Kongo à l'indépendance",
        pt: 'Do Reino do Congo à independência',
        en: 'From the Kongo Kingdom to independence',
      },
      subtitle: {
        fr: 'Colonisé en 1575 · Indépendant depuis 1975',
        pt: 'Colonizado em 1575 · Independente desde 1975',
        en: 'Colonized in 1575 · Independent since 1975',
      },
      text: {
        fr: `L'Angola, avant l'arrivée des Portugais en 1575, était le territoire de puissants royaumes africains, notamment le Royaume Kongo au nord et le Royaume Ndongo au centre. Ces civilisations avaient développé des structures politiques sophistiquées, des arts et des traditions qui demeurent vivaces aujourd'hui.\n\nLa colonisation portugaise imposa un régime de traite négrière massif — des millions d'Angolais furent déportés au Brésil, où leurs traditions culturelles donnèrent naissance à des danses comme la Samba. Après une longue guerre d'indépendance (1961-1975), l'Angola accède à la liberté le 11 novembre 1975, suivi d'une guerre civile dévastatrice qui ne prendra fin qu'en 2002.\n\nPays le plus riche en pétrole et diamants d'Afrique subsaharienne, l'Angola est en pleine reconstruction et s'affirme comme une puissance économique continentale.`,
        pt: `Angola, antes da chegada dos portugueses em 1575, era o território de poderosos reinos africanos, nomeadamente o Reino do Congo a norte e o Reino Ndongo ao centro. Estas civilizações desenvolveram estruturas políticas sofisticadas, artes e tradições que permanecem vivas hoje em dia.\n\nA colonização portuguesa impôs um regime de tráfico negreiro massivo — milhões de angolanos foram deportados para o Brasil, onde as suas tradições culturais deram origem a danças como a Samba. Após uma longa guerra de independência (1961-1975), Angola alcançou a liberdade a 11 de novembro de 1975, seguida de uma guerra civil devastadora que só terminaria em 2002.\n\nO país mais rico em petróleo e diamantes da África subsaariana, Angola está em plena reconstrução e afirma-se como uma potência económica continental.`,
        en: `Angola, before the arrival of the Portuguese in 1575, was the territory of powerful African kingdoms, notably the Kongo Kingdom in the north and the Ndongo Kingdom in the center. These civilizations had developed sophisticated political structures, arts and traditions that remain vibrant today.\n\nPortuguese colonization imposed a regime of massive slave trading — millions of Angolans were deported to Brazil, where their cultural traditions gave rise to dances such as Samba. After a long war of independence (1961–1975), Angola gained freedom on November 11, 1975, followed by a devastating civil war that would only end in 2002.\n\nThe richest country in oil and diamonds in sub-Saharan Africa, Angola is in full reconstruction and is establishing itself as a continental economic power.`,
      },
      image: '/about%20par%20pays/histoire/angola/decouvrez-l-angola-en-video-01.jpg',
      imageAlt: 'Angola paysage et culture',
      facts: [
        {
          label: { fr: 'Indépendance', pt: 'Independência', en: 'Independence' },
          value: { fr: '11 novembre 1975', pt: '11 de novembro de 1975', en: 'November 11, 1975' },
        },
        {
          label: { fr: 'Ressources', pt: 'Recursos', en: 'Resources' },
          value: { fr: 'Pétrole & Diamants', pt: 'Petróleo & Diamantes', en: 'Oil & Diamonds' },
        },
        {
          label: { fr: 'Population', pt: 'População', en: 'Population' },
          value: { fr: '35 millions', pt: '35 milhões', en: '35 million' },
        },
      ],
      quote: {
        fr: '"O Pensador" — La sculpture Tchokwe, symbole de la sagesse ancestrale angolaise.',
        pt: '"O Pensador" — A escultura Tchokwe, símbolo da sabedoria ancestral angolana.',
        en: '"O Pensador" — The Tchokwe sculpture, symbol of ancestral Angolan wisdom.',
      },
    },

    culture: {
      title: {
        fr: 'Kizomba, Semba & Kuduro',
        pt: 'Kizomba, Semba & Kuduro',
        en: 'Kizomba, Semba & Kuduro',
      },
      subtitle: {
        fr: 'Des rythmes qui ont conquis le monde',
        pt: 'Ritmos que conquistaram o mundo',
        en: 'Rhythms that conquered the world',
      },
      text: {
        fr: `La musique angolaise est une force mondiale. Le Semba, né dans les années 1940 dans les quartiers populaires de Luanda, est la musique-mère. Son nom signifie "nombril contre nombril" en Kimbundu — une référence au contact intime de la danse. Le Semba a directement influencé la Samba brésilienne.\n\nLa Kizomba, apparue dans les années 1980 et signifiant "fête" en Kimbundu, est l'évolution sensuelle du Semba mêlée au Zouk antillais. Surnommée "tango africain", elle est aujourd'hui dansée dans le monde entier et reconnue comme patrimoine culturel angolais depuis 2024. Le Kuduro, né dans les années 1990 dans les quartiers de Luanda, est une musique électronique et acrobatique qui exprime l'énergie des nouvelles générations.\n\nLe Carnaval de Luanda, chaque février, est l'une des plus grandes fêtes d'Afrique — c'est d'ailleurs des esclaves angolais déportés au Brésil que serait né le Carnaval de Rio de Janeiro.`,
        pt: `A música angolana é uma força mundial. O Semba, nascido nos anos 1940 nos bairros populares de Luanda, é a música-mãe. O seu nome significa "umbigo contra umbigo" em Kimbundu — uma referência ao contacto íntimo da dança. O Semba influenciou diretamente o Samba brasileiro.\n\nA Kizomba, surgida nos anos 1980 e significando "festa" em Kimbundu, é a evolução sensual do Semba misturado com o Zouk antilhano. Apelidada de "tango africano", é hoje dançada em todo o mundo e reconhecida como património cultural angolano desde 2024. O Kuduro, nascido nos anos 1990 nos bairros de Luanda, é uma música eletrónica e acrobática que exprime a energia das novas gerações.\n\nO Carnaval de Luanda, cada fevereiro, é uma das maiores festas de África — foi aliás dos escravos angolanos deportados para o Brasil que terá nascido o Carnaval do Rio de Janeiro.`,
        en: `Angolan music is a global force. Semba, born in the 1940s in the working-class neighborhoods of Luanda, is the mother music. Its name means "navel to navel" in Kimbundu — a reference to the intimate contact of the dance. Semba directly influenced Brazilian Samba.\n\nKizomba, which emerged in the 1980s meaning "party" in Kimbundu, is the sensual evolution of Semba blended with Antillean Zouk. Nicknamed the "African tango," it is now danced worldwide and recognized as Angolan cultural heritage since 2024. Kuduro, born in the 1990s in the neighborhoods of Luanda, is an electronic and acrobatic music expressing the energy of new generations.\n\nLuanda's Carnaval, every February, is one of the greatest celebrations in Africa — it is said that the Rio de Janeiro Carnival was born from the traditions of Angolan slaves deported to Brazil.`,
      },
      image: '/about%20par%20pays/musique%20et%20dance/angola/Aux-racines-de-la-kizomba-la-danse-angolaise-qui-seduit-le-monde.jpg',
      imageAlt: 'Danse Kizomba Angola',
      facts: [
        {
          label: { fr: 'Danse mondiale', pt: 'Dança mundial', en: 'World dance' },
          value: { fr: 'Kizomba (patrimoine 2024)', pt: 'Kizomba (património 2024)', en: 'Kizomba (heritage 2024)' },
        },
        {
          label: { fr: 'Précurseur', pt: 'Precursor', en: 'Precursor' },
          value: { fr: 'Semba → Samba brésilienne', pt: 'Semba → Samba brasileira', en: 'Semba → Brazilian Samba' },
        },
        {
          label: { fr: 'Fête', pt: 'Festa', en: 'Celebration' },
          value: { fr: 'Carnaval de Luanda', pt: 'Carnaval de Luanda', en: 'Luanda Carnival' },
        },
      ],
      quote: {
        fr: '"Kizomba" signifie "fête" en Kimbundu — une danse qui unit les peuples.',
        pt: '"Kizomba" significa "festa" em Kimbundu — uma dança que une os povos.',
        en: '"Kizomba" means "party" in Kimbundu — a dance that unites peoples.',
      },
    },

    gastronomy: {
      title: {
        fr: 'La richesse de la table angolaise',
        pt: 'A riqueza da mesa angolana',
        en: 'The richness of the Angolan table',
      },
      subtitle: {
        fr: 'Saveurs africaines et influences atlantiques',
        pt: 'Sabores africanos e influências atlânticas',
        en: 'African flavours and Atlantic influences',
      },
      text: {
        fr: `La cuisine angolaise est un trésor de saveurs, ancrée dans les traditions des nombreux groupes ethniques du pays. La Muamba de Galinha — poulet mijoté dans l'huile de palme avec okra et épices — est le plat emblématique par excellence. Sa couleur dorée et son parfum envoûtant en font l'incontournable des grandes tables.\n\nLe Funje, bouillie de farine de manioc d'une texture veloutée, est la base de l'alimentation. Servi avec presque tout, il remplace le pain ou le riz dans de nombreux foyers. Le Calulu, ragoût de poisson fumé ou de viande aux légumes et huile de palme, révèle la sophistication de la cuisine traditionnelle Mbundu.\n\nLa cuisine du littoral, autour de Luanda, valorise les produits de la mer : crevettes géantes, crabes, thiof. Le marché de Futungo de Belas est le meilleur endroit pour découvrir les saveurs locales.`,
        pt: `A cozinha angolana é um tesouro de sabores, enraizada nas tradições dos numerosos grupos étnicos do país. A Muamba de Galinha — frango cozinhado no azeite de palma com quiabo e especiarias — é o prato emblemático por excelência. A sua cor dourada e o seu aroma envolvente tornam-na incontornável nas grandes mesas.\n\nO Funje, papa de farinha de mandioca de textura aveludada, é a base da alimentação. Servido com quase tudo, substitui o pão ou o arroz em muitos lares. O Calulu, guisado de peixe fumado ou de carne com legumes e azeite de palma, revela a sofisticação da cozinha tradicional Mbundu.\n\nA cozinha do litoral, em torno de Luanda, valoriza os produtos do mar: camarões gigantes, caranguejos e robalo. O mercado de Futungo de Belas é o melhor lugar para descobrir os sabores locais.`,
        en: `Angolan cuisine is a treasure of flavors, rooted in the traditions of the country's many ethnic groups. Muamba de Galinha — chicken simmered in palm oil with okra and spices — is the emblematic dish par excellence. Its golden color and mesmerizing aroma make it unmissable at great tables.\n\nFunje, a velvet-textured cassava flour porridge, is the dietary staple. Served with almost everything, it replaces bread or rice in many households. Calulu, a stew of smoked fish or meat with vegetables and palm oil, reveals the sophistication of traditional Mbundu cooking.\n\nThe coastal cuisine around Luanda celebrates seafood: giant shrimp, crabs and sea bass. The Futungo de Belas market is the best place to discover local flavors.`,
      },
      image: '/about%20par%20pays/gastronomie/angola/maxresdefault.jpg',
      imageAlt: 'Gastronomie angolaise',
      facts: [
        {
          label: { fr: 'Plat signature', pt: 'Prato assinatura', en: 'Signature dish' },
          value: { fr: 'Muamba de Galinha', pt: 'Muamba de Galinha', en: 'Muamba de Galinha' },
        },
        {
          label: { fr: 'Base', pt: 'Base', en: 'Staple' },
          value: { fr: 'Funje (farine de manioc)', pt: 'Funje (farinha de mandioca)', en: 'Funje (cassava flour)' },
        },
        {
          label: { fr: 'Spécialité', pt: 'Especialidade', en: 'Specialty' },
          value: { fr: 'Calulu de Peixe', pt: 'Calulu de Peixe', en: 'Calulu de Peixe' },
        },
      ],
      quote: {
        fr: "L'huile de palme est l'âme de la cuisine angolaise — rouge, parfumée, essentielle.",
        pt: 'O azeite de palma é a alma da cozinha angolana — vermelho, perfumado, essencial.',
        en: 'Palm oil is the soul of Angolan cuisine — red, fragrant, essential.',
      },
    },
  },

  /* ═══════════════════════════════════════════════════════════
     GUINÉE-BISSAU / GUINÉ-BISSAU / GUINEA-BISSAU
  ═══════════════════════════════════════════════════════════ */
  {
    id: 'guinee-bissau',
    name: {
      fr: 'Guinée-Bissau',
      pt: 'Guiné-Bissau',
      en: 'Guinea-Bissau',
    },
    code: 'GNB',
    color: '#F5B800',
    bgColor: 'bg-accent',
    textColor: 'text-deep',
    borderColor: 'border-accent',

    history: {
      title: {
        fr: "La résistance d'Amílcar Cabral",
        pt: 'A resistência de Amílcar Cabral',
        en: "Amílcar Cabral's resistance",
      },
      subtitle: {
        fr: 'Colonisée au 15e siècle · Indépendante depuis 1974',
        pt: 'Colonizada no século 15 · Independente desde 1974',
        en: 'Colonized in the 15th century · Independent since 1974',
      },
      text: {
        fr: `La Guinée-Bissau, avant la colonisation, était un territoire peuplé de nombreuses ethnies — Balantes, Fulas, Mandingas, Manjaques — vivant en semi-autonomie avec leurs propres royaumes et traditions. Les Portugais l'intégrèrent dès le 15e siècle dans leur réseau commercial, notamment pour la traite des esclaves.\n\nAmílcar Cabral, l'une des grandes figures intellectuelles et révolutionnaires africaines, fonda le PAIGC en 1956 et mena une guerre de libération exemplaire. Son assassinat en 1973 n'empêcha pas l'indépendance, proclamée le 24 septembre 1973 — un an avant la révolution des Œillets au Portugal — et reconnue le 10 septembre 1974.\n\nMalgré une instabilité politique chronique, le pays conserve une vitalité culturelle remarquable, portée par ses nombreuses ethnies et son exceptionnelle biodiversité maritime.`,
        pt: `A Guiné-Bissau, antes da colonização, era um território habitado por numerosas etnias — Balantas, Fulas, Mandingas, Manjacos — vivendo em semi-autonomia com os seus próprios reinos e tradições. Os Portugueses integraram-na desde o século 15 na sua rede comercial, nomeadamente para o tráfico de escravos.\n\nAmílcar Cabral, uma das grandes figuras intelectuais e revolucionárias africanas, fundou o PAIGC em 1956 e conduziu uma guerra de libertação exemplar. O seu assassínio em 1973 não impediu a independência, proclamada a 24 de setembro de 1973 — um ano antes da Revolução dos Cravos em Portugal — e reconhecida a 10 de setembro de 1974.\n\nApesar de uma instabilidade política crónica, o país mantém uma vitalidade cultural notável, sustentada pelas suas numerosas etnias e pela sua excecional biodiversidade marítima.`,
        en: `Guinea-Bissau, before colonization, was a territory inhabited by many ethnic groups — Balantas, Fulas, Mandingas, Manjacos — living in semi-autonomy with their own kingdoms and traditions. The Portuguese incorporated it from the 15th century into their trade network, notably for the slave trade.\n\nAmílcar Cabral, one of the great African intellectual and revolutionary figures, founded the PAIGC in 1956 and led an exemplary war of liberation. His assassination in 1973 did not prevent independence, proclaimed on September 24, 1973 — one year before the Carnation Revolution in Portugal — and recognized on September 10, 1974.\n\nDespite chronic political instability, the country maintains remarkable cultural vitality, driven by its many ethnic groups and exceptional maritime biodiversity.`,
      },
      image: '/about%20par%20pays/histoire/Guin%C3%A9%20Bissau/election-guinee-bissau.png',
      imageAlt: 'Guinée-Bissau paysage et culture',
      facts: [
        {
          label: { fr: 'Indépendance', pt: 'Independência', en: 'Independence' },
          value: { fr: '24 septembre 1973', pt: '24 de setembro de 1973', en: 'September 24, 1973' },
        },
        {
          label: { fr: 'Archipel', pt: 'Arquipélago', en: 'Archipelago' },
          value: { fr: 'Îles Bijagós (UNESCO)', pt: 'Ilhas Bijagós (UNESCO)', en: 'Bijagós Islands (UNESCO)' },
        },
        {
          label: { fr: 'Ethnies', pt: 'Etnias', en: 'Ethnic groups' },
          value: { fr: '30+ groupes ethniques', pt: '30+ grupos étnicos', en: '30+ ethnic groups' },
        },
      ],
      quote: {
        fr: '"A luta continua" — Le combat continue, slogan hérité d\'Amílcar Cabral.',
        pt: '"A luta continua" — A luta continua, slogan herdado de Amílcar Cabral.',
        en: '"A luta continua" — The struggle continues, slogan inherited from Amílcar Cabral.',
      },
    },

    culture: {
      title: {
        fr: 'Le Gumbe et les rythmes Bijagós',
        pt: 'O Gumbe e os ritmos Bijagós',
        en: 'Gumbe and the Bijagós rhythms',
      },
      subtitle: {
        fr: 'Une diversité ethnique unique',
        pt: 'Uma diversidade étnica única',
        en: 'A unique ethnic diversity',
      },
      text: {
        fr: `La Guinée-Bissau possède l'une des cultures les plus riches et les moins connues d'Afrique occidentale. Avec plus de 30 groupes ethniques, chacun avec ses propres langues, rituels et expressions artistiques, le pays est un conservatoire vivant des traditions africaines.\n\nLe Gumbe, genre musical phare, résonne dans les rues de Bissau et les villages du pays. Né du mélange des traditions Balante avec des influences caribéennes, il se caractérise par ses percussions de djembés et ses chants polyphoniques. Chaque ethnie possède ses propres danses cérémonielles : les Bijagós de l'archipel éponyme pratiquent des rituels de passage où la danse est sacrée.\n\nLes masques et sculptures traditionnelles, notamment ceux des Bijagós, sont reconnus dans les musées du monde entier pour leur puissance artistique. Le Carnaval de Bissau et les fêtes de récolte animées de tambours et de danses traditionnelles sont des moments de communion collective irremplaçables.`,
        pt: `A Guiné-Bissau possui uma das culturas mais ricas e menos conhecidas da África Ocidental. Com mais de 30 grupos étnicos, cada um com as suas próprias línguas, rituais e expressões artísticas, o país é um conservatório vivo das tradições africanas.\n\nO Gumbe, género musical de referência, ressoa nas ruas de Bissau e nas aldeias do país. Nascido da mistura das tradições Balanta com influências caribenhas, caracteriza-se pelas suas percussões de djembé e os seus cantos polifónicos. Cada etnia possui as suas próprias danças cerimoniais: os Bijagós do arquipélago homónimo praticam rituais de passagem onde a dança é sagrada.\n\nAs máscaras e esculturas tradicionais, nomeadamente as dos Bijagós, são reconhecidas nos museus de todo o mundo pela sua força artística. O Carnaval de Bissau e as festas de colheita animadas por tambores e danças tradicionais são momentos de comunhão coletiva insubstituíveis.`,
        en: `Guinea-Bissau has one of the richest and least known cultures in West Africa. With more than 30 ethnic groups, each with their own languages, rituals and artistic expressions, the country is a living conservatory of African traditions.\n\nGumbe, the flagship musical genre, resonates in the streets of Bissau and villages across the country. Born from the blend of Balanta traditions with Caribbean influences, it is characterized by djembe percussion and polyphonic singing. Each ethnic group has its own ceremonial dances: the Bijagós of the eponymous archipelago practice rites of passage where dance is sacred.\n\nTraditional masks and sculptures, especially those of the Bijagós, are recognized in museums around the world for their artistic power. The Bissau Carnival and harvest festivals enlivened by drums and traditional dances are irreplaceable moments of collective communion.`,
      },
      image: '/about%20par%20pays/musique%20et%20dance/Guin%C3%A9%20Bissau/Cultura%20Guinea-Bissau-ts1723549288.jpg',
      imageAlt: 'Culture Guinée-Bissau',
      facts: [
        {
          label: { fr: 'Rythme', pt: 'Ritmo', en: 'Rhythm' },
          value: { fr: 'Gumbe — fusion afro-caraïbe', pt: 'Gumbe — fusão afro-caraíba', en: 'Gumbe — Afro-Caribbean fusion' },
        },
        {
          label: { fr: 'Art sacré', pt: 'Arte sagrada', en: 'Sacred art' },
          value: { fr: 'Masques Bijagós', pt: 'Máscaras Bijagós', en: 'Bijagós Masks' },
        },
        {
          label: { fr: 'Archipel', pt: 'Arquipélago', en: 'Archipelago' },
          value: { fr: 'Îles Bijagós — UNESCO', pt: 'Ilhas Bijagós — UNESCO', en: 'Bijagós Islands — UNESCO' },
        },
      ],
      quote: {
        fr: "Les îles Bijagós — un sanctuaire naturel et culturel au cœur de l'Atlantique.",
        pt: 'As ilhas Bijagós — um santuário natural e cultural no coração do Atlântico.',
        en: 'The Bijagós Islands — a natural and cultural sanctuary in the heart of the Atlantic.',
      },
    },

    gastronomy: {
      title: {
        fr: "La cuisine de l'arachide et de la mer",
        pt: 'A cozinha do amendoim e do mar',
        en: 'The cuisine of peanuts and the sea',
      },
      subtitle: {
        fr: "Saveurs intenses de l'Afrique de l'Ouest",
        pt: 'Sabores intensos da África Ocidental',
        en: 'Intense flavors of West Africa',
      },
      text: {
        fr: `La gastronomie de la Guinée-Bissau est fortement influencée par ses traditions agricoles et maritimes. L'arachide, cultivée en abondance, est l'ingrédient central de nombreux plats. Le Caldo de Mancarra — bouillon d'arachide avec légumes, poisson ou viande — est la préparation la plus emblématique, relevée de piments et d'épices locales.\n\nLes fruits de mer tiennent une place d'honneur dans la cuisine côtière : crevettes, crabes et poissons frais sont préparés avec du riz, du manioc et des légumes. Les mangues, corossols et baobabs apportent leurs saveurs acidulées aux préparations et aux boissons locales.\n\nLa sauce palme, à base d'huile de palme rouge, accompagne de nombreux plats traditionnels. Le riz est la base de l'alimentation pour les ethnies côtières, tandis que le mil et le sorgho dominent dans les régions intérieures.`,
        pt: `A gastronomia da Guiné-Bissau é fortemente influenciada pelas suas tradições agrícolas e marítimas. O amendoim, cultivado em abundância, é o ingrediente central de muitos pratos. O Caldo de Mancarra — caldo de amendoim com legumes, peixe ou carne — é a preparação mais emblemática, temperada com pimentos e especiarias locais.\n\nOs frutos do mar ocupam um lugar de honra na cozinha costeira: camarões, caranguejos e peixe fresco são preparados com arroz, mandioca e legumes. As mangas, fruta-pão e baobabs trazem os seus sabores ácidos às preparações e às bebidas locais.\n\nO molho de palma, à base de azeite de palma vermelho, acompanha muitos pratos tradicionais. O arroz é a base da alimentação para as etnias costeiras, enquanto o milho miúdo e o sorgo dominam nas regiões do interior.`,
        en: `Guinea-Bissau's gastronomy is strongly influenced by its agricultural and maritime traditions. Peanuts, cultivated in abundance, are the central ingredient in many dishes. Caldo de Mancarra — peanut broth with vegetables, fish or meat — is the most emblematic preparation, seasoned with local chillies and spices.\n\nSeafood holds a place of honor in coastal cuisine: shrimp, crabs and fresh fish are prepared with rice, cassava and vegetables. Mangoes, soursops and baobabs bring their tangy flavors to local preparations and drinks.\n\nPalm sauce, based on red palm oil, accompanies many traditional dishes. Rice is the dietary staple for coastal ethnic groups, while millet and sorghum dominate in the interior regions.`,
      },
      image: '/about%20par%20pays/gastronomie/Guin%C3%A9%20Bissau/caldo-de-mancarra-frango.png',
      imageAlt: 'Gastronomie Guinée-Bissau',
      facts: [
        {
          label: { fr: 'Ingrédient roi', pt: 'Ingrediente rei', en: 'King ingredient' },
          value: { fr: 'Arachide — base de tout', pt: 'Amendoim — base de tudo', en: 'Peanut — the basis of everything' },
        },
        {
          label: { fr: 'Spécialité', pt: 'Especialidade', en: 'Specialty' },
          value: { fr: 'Caldo de Mancarra', pt: 'Caldo de Mancarra', en: 'Caldo de Mancarra' },
        },
        {
          label: { fr: 'Céréales', pt: 'Cereais', en: 'Cereals' },
          value: { fr: 'Riz, Mil, Sorgho', pt: 'Arroz, Milho miúdo, Sorgo', en: 'Rice, Millet, Sorghum' },
        },
      ],
      quote: {
        fr: 'La cuisine bissau-guinéenne — simple, généreuse et profondément africaine.',
        pt: 'A cozinha da Guiné-Bissau — simples, generosa e profundamente africana.',
        en: 'Guinean cuisine — simple, generous and deeply African.',
      },
    },
  },

  /* ═══════════════════════════════════════════════════════════
     MOZAMBIQUE / MOÇAMBIQUE
  ═══════════════════════════════════════════════════════════ */
  {
    id: 'mozambique',
    name: {
      fr: 'Mozambique',
      pt: 'Moçambique',
      en: 'Mozambique',
    },
    code: 'MOZ',
    color: '#2D7A5E',
    bgColor: 'bg-nature',
    textColor: 'text-nature',
    borderColor: 'border-nature',

    history: {
      title: {
        fr: "Entre l'Inde et l'Afrique",
        pt: 'Entre a Índia e a África',
        en: 'Between India and Africa',
      },
      subtitle: {
        fr: 'Colonisé en 1498 · Indépendant depuis 1975',
        pt: 'Colonizado em 1498 · Independente desde 1975',
        en: 'Colonized in 1498 · Independent since 1975',
      },
      text: {
        fr: `Le Mozambique, avant l'arrivée de Vasco de Gama en 1498, était une région prospère animée par les réseaux commerciaux swahili reliant l'Afrique à l'Inde et à l'Arabie. Les cités-États côtières comme Sofala et Mozambique échangeaient or, ivoire et épices avec les marchands arabes et indiens.\n\nLa colonisation portugaise (1505-1975) fut l'une des plus longues d'Afrique. La guerre d'indépendance menée par le FRELIMO (1964-1974) se conclut par l'indépendance le 25 juin 1975. Une guerre civile dévastatrice (1977-1992) laissa le pays exsangue avant un processus de paix exemplaire.\n\nAujourd'hui, le Mozambique révèle ses richesses naturelles — gaz naturel, côtes paradisiaques, biodiversité exceptionnelle — tout en préservant sa mosaïque de cultures bantoues enrichies d'influences swahili, arabes et indiennes.`,
        pt: `Moçambique, antes da chegada de Vasco da Gama em 1498, era uma região próspera animada pelas redes comerciais suaíli que ligavam a África à Índia e à Arábia. As cidades-estado costeiras como Sofala e Moçambique trocavam ouro, marfim e especiarias com os comerciantes árabes e indianos.\n\nA colonização portuguesa (1505-1975) foi uma das mais longas de África. A guerra de independência conduzida pela FRELIMO (1964-1974) culminou com a independência a 25 de junho de 1975. Uma guerra civil devastadora (1977-1992) deixou o país exangue antes de um processo de paz exemplar.\n\nHoje, Moçambique revela as suas riquezas naturais — gás natural, costas paradisíacas, biodiversidade excecional — preservando ao mesmo tempo a sua mosaico de culturas bantu enriquecidas de influências suaíli, árabes e indianas.`,
        en: `Mozambique, before the arrival of Vasco da Gama in 1498, was a prosperous region animated by Swahili trade networks linking Africa to India and Arabia. Coastal city-states such as Sofala and Mozambique traded gold, ivory and spices with Arab and Indian merchants.\n\nPortuguese colonization (1505–1975) was one of the longest in Africa. The war of independence led by FRELIMO (1964–1974) concluded with independence on June 25, 1975. A devastating civil war (1977–1992) left the country exhausted before an exemplary peace process.\n\nToday, Mozambique reveals its natural wealth — natural gas, paradise coastlines, exceptional biodiversity — while preserving its mosaic of Bantu cultures enriched by Swahili, Arab and Indian influences.`,
      },
      image: '/about%20par%20pays/histoire/Mozambique/Mozambique.jpg',
      imageAlt: 'Mozambique côte et culture',
      facts: [
        {
          label: { fr: 'Indépendance', pt: 'Independência', en: 'Independence' },
          value: { fr: '25 juin 1975', pt: '25 de junho de 1975', en: 'June 25, 1975' },
        },
        {
          label: { fr: 'Côte', pt: 'Costa', en: 'Coastline' },
          value: { fr: '2 500 km de littoral', pt: '2 500 km de litoral', en: '2,500 km of coastline' },
        },
        {
          label: { fr: 'Langues', pt: 'Línguas', en: 'Languages' },
          value: { fr: '30+ langues bantoues', pt: '30+ línguas bantu', en: '30+ Bantu languages' },
        },
      ],
      quote: {
        fr: "Le Mozambique — où les routes commerciales de l'Inde rencontrent l'âme africaine.",
        pt: 'Moçambique — onde as rotas comerciais da Índia encontram a alma africana.',
        en: 'Mozambique — where the trade routes of India meet the African soul.',
      },
    },

    culture: {
      title: {
        fr: "Marrabenta, Timbila et l'art de vivre Makonde",
        pt: 'Marrabenta, Timbila e a arte de viver Makonde',
        en: 'Marrabenta, Timbila and the Makonde way of life',
      },
      subtitle: {
        fr: "Une fusion unique d'influences bantoues et swahili",
        pt: 'Uma fusão única de influências bantu e suaíli',
        en: 'A unique fusion of Bantu and Swahili influences',
      },
      text: {
        fr: `La culture mozambicaine est une fascinante mosaïque d'influences africaines, arabes, indiennes et portugaises. La Marrabenta, née à Maputo dans les années 1930, est le genre musical national — un rythme endiablé qui raconte la vie urbaine avec ses joies et ses peines sous la colonisation. L'artiste Pedro Raimundo en est le père fondateur.\n\nLa Timbila, instrument de percussion à lames de bois du peuple Chopi, est inscrite au patrimoine immatériel de l'UNESCO. Ces orchestres de xylophones produisent une musique d'une complexité remarquable, accompagnant les cérémonies et danses rituelles. Les sculptures Makonde, avec leur bois d'ébène travaillé en représentations humaines enchevêtrées, sont parmi les plus recherchées au monde.\n\nLe Ngalanga (danse d'initiation) et les cérémonies Nyau (masques sacrés) témoignent de la profondeur des traditions spirituelles mozambicaines.`,
        pt: `A cultura moçambicana é um fascinante mosaico de influências africanas, árabes, indianas e portuguesas. A Marrabenta, nascida em Maputo nos anos 1930, é o género musical nacional — um ritmo vibrante que conta a vida urbana com as suas alegrias e tristezas sob a colonização. O artista Pedro Raimundo é o seu pai fundador.\n\nA Timbila, instrumento de percussão de lâminas de madeira do povo Chopi, está inscrita no Património Imaterial da UNESCO. Estas orquestras de xilofones produzem uma música de notável complexidade, acompanhando as cerimónias e danças rituais. As esculturas Makonde, com o seu ébano trabalhado em representações humanas entrelaçadas, estão entre as mais procuradas do mundo.\n\nO Ngalanga (dança de iniciação) e as cerimónias Nyau (máscaras sagradas) testemunham a profundidade das tradições espirituais moçambicanas.`,
        en: `Mozambican culture is a fascinating mosaic of African, Arab, Indian and Portuguese influences. Marrabenta, born in Maputo in the 1930s, is the national musical genre — a wild rhythm that tells of urban life with its joys and sorrows under colonization. The artist Pedro Raimundo is its founding father.\n\nTimbila, a wooden-blade percussion instrument of the Chopi people, is listed on UNESCO's Intangible Heritage. These xylophone orchestras produce music of remarkable complexity, accompanying ceremonies and ritual dances. Makonde sculptures, with their ebony wood carved into intertwined human representations, are among the most sought-after in the world.\n\nNgalanga (initiation dance) and Nyau ceremonies (sacred masks) bear witness to the depth of Mozambican spiritual traditions.`,
      },
      image: '/about%20par%20pays/musique%20et%20dance/Mozambique/Marrabenta.png',
      imageAlt: 'Culture Mozambique danse',
      facts: [
        {
          label: { fr: 'Musique nationale', pt: 'Música nacional', en: 'National music' },
          value: { fr: 'Marrabenta de Maputo', pt: 'Marrabenta de Maputo', en: 'Marrabenta of Maputo' },
        },
        {
          label: { fr: 'UNESCO', pt: 'UNESCO', en: 'UNESCO' },
          value: { fr: 'Timbila Chopi', pt: 'Timbila Chopi', en: 'Timbila Chopi' },
        },
        {
          label: { fr: 'Art mondial', pt: 'Arte mundial', en: 'World art' },
          value: { fr: 'Sculptures Makonde', pt: 'Esculturas Makonde', en: 'Makonde Sculptures' },
        },
      ],
      quote: {
        fr: '"Timbila" — les xylophones Chopi, voix des ancêtres du Mozambique.',
        pt: '"Timbila" — os xilofones Chopi, voz dos antepassados de Moçambique.',
        en: '"Timbila" — the Chopi xylophones, voice of the ancestors of Mozambique.',
      },
    },

    gastronomy: {
      title: {
        fr: "Les saveurs de l'Océan Indien",
        pt: 'Os sabores do Oceano Índico',
        en: 'The flavors of the Indian Ocean',
      },
      subtitle: {
        fr: 'Fruits de mer, piri-piri et influences swahili',
        pt: 'Frutos do mar, piri-piri e influências suaíli',
        en: 'Seafood, piri-piri and Swahili influences',
      },
      text: {
        fr: `La cuisine mozambicaine est profondément marquée par sa côte de 2 500 km et ses échanges millénaires avec l'Océan Indien. Les crevettes géantes du Mozambique — "camarão gigante" — sont réputées dans le monde entier. Grillées au charbon et servies avec du piri-piri maison, elles sont l'expérience culinaire ultime.\n\nLe Matapa est le plat national — feuilles de manioc pilées avec arachides, noix de coco et crevettes. Sa texture crémeuse et ses arômes complexes témoignent de la sophistication de la cuisine bantoue. La sauce piri-piri mozambicaine, mélange de piments, ail et citron, est l'une des plus fameuses d'Afrique et a influencé la cuisine portugaise et mondiale.\n\nLe poisson et les fruits de mer — thiof, mérou, calmar, crabe — se cuisinent à la braise, en curry avec lait de coco, ou en ragoût. Le riz est la base, souvent cuit au lait de coco dans les régions côtières.`,
        pt: `A cozinha moçambicana é profundamente marcada pelos seus 2 500 km de costa e pelas suas trocas milenares com o Oceano Índico. Os camarões gigantes de Moçambique — "camarão gigante" — são famosos em todo o mundo. Grelhados ao carvão e servidos com piri-piri caseiro, são a experiência culinária definitiva.\n\nO Matapa é o prato nacional — folhas de mandioca piladas com amendoins, coco e camarão. A sua textura cremosa e os seus aromas complexos testemunham a sofisticação da cozinha bantu. O molho piri-piri moçambicano, mistura de pimentos, alho e limão, é um dos mais famosos de África e influenciou a cozinha portuguesa e mundial.\n\nO peixe e os frutos do mar — robalo, garoupa, lula, caranguejo — são cozinhados na brasa, em caril com leite de coco, ou em guisado. O arroz é a base, muitas vezes cozinhado em leite de coco nas regiões costeiras.`,
        en: `Mozambican cuisine is deeply shaped by its 2,500 km coastline and its millennia of trade with the Indian Ocean. Mozambique's giant prawns — "camarão gigante" — are world-famous. Grilled over charcoal and served with homemade piri-piri, they are the ultimate culinary experience.\n\nMatapa is the national dish — pounded cassava leaves with peanuts, coconut and shrimp. Its creamy texture and complex aromas bear witness to the sophistication of Bantu cooking. Mozambican piri-piri sauce, a blend of chillies, garlic and lemon, is one of the most famous in Africa and has influenced Portuguese and world cuisine.\n\nFish and seafood — sea bass, grouper, squid, crab — are cooked on the grill, in curry with coconut milk, or as a stew. Rice is the staple, often cooked in coconut milk in coastal regions.`,
      },
      image: '/about%20par%20pays/gastronomie/Mozambique/P1018787.png',
      imageAlt: 'Gastronomie Mozambique',
      facts: [
        {
          label: { fr: 'Spécialité monde', pt: 'Especialidade mundial', en: 'World specialty' },
          value: { fr: 'Camarão Gigante', pt: 'Camarão Gigante', en: 'Giant Prawns' },
        },
        {
          label: { fr: 'Plat national', pt: 'Prato nacional', en: 'National dish' },
          value: { fr: 'Matapa aux feuilles', pt: 'Matapa de folhas', en: 'Matapa leaf stew' },
        },
        {
          label: { fr: 'Sauce emblème', pt: 'Molho emblema', en: 'Emblem sauce' },
          value: { fr: 'Piri-Piri Mozambicain', pt: 'Piri-Piri Moçambicano', en: 'Mozambican Piri-Piri' },
        },
      ],
      quote: {
        fr: "Les crevettes du Mozambique — une légende culinaire de l'Océan Indien.",
        pt: 'Os camarões de Moçambique — uma lenda culinária do Oceano Índico.',
        en: "Mozambique's prawns — a culinary legend of the Indian Ocean.",
      },
    },
  },

  /* ═══════════════════════════════════════════════════════════
     SÃO TOMÉ-ET-PRÍNCIPE
  ═══════════════════════════════════════════════════════════ */
  {
    id: 'sao-tome',
    name: {
      fr: 'São Tomé',
      pt: 'São Tomé',
      en: 'São Tomé',
    },
    code: 'STP',
    color: '#002654',
    bgColor: 'bg-deep',
    textColor: 'text-deep',
    borderColor: 'border-deep',

    history: {
      title: {
        fr: 'Les îles du milieu du monde',
        pt: 'As ilhas do meio do mundo',
        en: 'The islands at the middle of the world',
      },
      subtitle: {
        fr: 'Découvertes en 1470 · Indépendantes depuis 1975',
        pt: 'Descobertas em 1470 · Independentes desde 1975',
        en: 'Discovered in 1470 · Independent since 1975',
      },
      text: {
        fr: `São Tomé-et-Príncipe, minuscule archipel volcanique dans le Golfe de Guinée, fut découvert inhabité par les Portugais en 1470. Situé presque exactement sur l'équateur — d'où son surnom "les îles du milieu du monde" — il devint rapidement l'une des premières plantations de canne à sucre d'Afrique, exploitée par des esclaves du continent.\n\nSon histoire est marquée par la traite négrière et la culture des "roças" — grandes plantations coloniales de cacao et café dont les architectures imposantes sont aujourd'hui classées. C'est de São Tomé que partirent certains des premiers négriers vers le Brésil, créant des liens culturels profonds avec ce pays.\n\nL'indépendance est proclamée le 12 juillet 1975. Aujourd'hui, l'archipel cherche à valoriser son extraordinaire patrimoine naturel — forêt tropicale primaire, oiseaux endémiques — et son cacao de qualité mondiale, rebaptisé "chocolate de São Tomé".`,
        pt: `São Tomé e Príncipe, minúsculo arquipélago vulcânico no Golfo da Guiné, foi descoberto desabitado pelos portugueses em 1470. Situado quase exatamente no equador — daí o seu apelido "as ilhas do meio do mundo" — tornou-se rapidamente uma das primeiras plantações de cana-de-açúcar de África, explorada por escravos do continente.\n\nA sua história é marcada pelo tráfico negreiro e pela cultura das "roças" — grandes plantações coloniais de cacau e café cujas arquiteturas imponentes são hoje classificadas. Foi de São Tomé que partiram alguns dos primeiros negreiros para o Brasil, criando laços culturais profundos com esse país.\n\nA independência é proclamada a 12 de julho de 1975. Hoje, o arquipélago procura valorizar o seu extraordinário património natural — floresta tropical primária, aves endémicas — e o seu cacau de qualidade mundial, rebatizado "chocolate de São Tomé".`,
        en: `São Tomé and Príncipe, a tiny volcanic archipelago in the Gulf of Guinea, was discovered uninhabited by the Portuguese in 1470. Located almost exactly on the equator — hence its nickname "the islands at the middle of the world" — it quickly became one of the first sugar cane plantations in Africa, worked by enslaved people from the continent.\n\nIts history is marked by the slave trade and the culture of "roças" — large colonial cocoa and coffee plantations whose imposing architecture is now listed as heritage. It was from São Tomé that some of the first slave ships departed for Brazil, creating deep cultural ties with that country.\n\nIndependence was proclaimed on July 12, 1975. Today, the archipelago seeks to showcase its extraordinary natural heritage — primary tropical rainforest, endemic birds — and its world-class cocoa, rebranded as "chocolate de São Tomé."`,
      },
      image: '/about%20par%20pays/histoire/sao%20tom%C3%A9/sourires-enfants-sao-tome.jpg',
      imageAlt: 'São Tomé paysage volcanique',
      facts: [
        {
          label: { fr: 'Indépendance', pt: 'Independência', en: 'Independence' },
          value: { fr: '12 juillet 1975', pt: '12 de julho de 1975', en: 'July 12, 1975' },
        },
        {
          label: { fr: 'Position', pt: 'Posição', en: 'Position' },
          value: { fr: "Sur l'équateur", pt: 'No equador', en: 'On the equator' },
        },
        {
          label: { fr: 'Richesse', pt: 'Riqueza', en: 'Wealth' },
          value: { fr: 'Cacao Premium mondial', pt: 'Cacau Premium mundial', en: 'World Premium Cocoa' },
        },
      ],
      quote: {
        fr: '"Ilhas do Meio do Mundo" — Les îles du milieu du monde, entre deux hémisphères.',
        pt: '"Ilhas do Meio do Mundo" — As ilhas do meio do mundo, entre dois hemisférios.',
        en: '"Ilhas do Meio do Mundo" — The islands at the middle of the world, between two hemispheres.',
      },
    },

    culture: {
      title: {
        fr: 'Ússua, Puxa et Tchiloli',
        pt: 'Ússua, Puxa e Tchiloli',
        en: 'Ússua, Puxa and Tchiloli',
      },
      subtitle: {
        fr: 'Un carrefour de cultures luso-africaines',
        pt: 'Uma encruzilhada de culturas luso-africanas',
        en: 'A crossroads of Luso-African cultures',
      },
      text: {
        fr: `São Tomé-et-Príncipe a développé une culture métisse d'une richesse exceptionnelle, fusion des traditions africaines des nombreux peuples esclaves avec l'héritage portugais et les influences brésiliennes et créoles.\n\nLe Tchiloli est la manifestation culturelle la plus unique de l'île — une représentation théâtrale en plein air, vêtue de costumes médiévaux portugais, qui raconte l'histoire de Charlemagne. Mêlant portugais archaïque et créole, cet art populaire millénaire est inscrit au patrimoine immatériel de l'UNESCO. L'Ússua et le Puxa sont des genres musicaux locaux aux rythmes sensuels et mélancoliques.\n\nL'Auto de Floripes, autre théâtre populaire unique, met en scène le combat entre Chrétiens et Maures dans une version créolisée. Ces traditions théâtrales hybrides n'existent nulle part ailleurs sur terre. Le Danço Congo, danse rituelle héritée des esclaves du Royaume Kongo, est pratiqué lors des fêtes religieuses.`,
        pt: `São Tomé e Príncipe desenvolveu uma cultura mestiça de riqueza excecional, fusão das tradições africanas dos numerosos povos escravizados com a herança portuguesa e as influências brasileiras e crioulas.\n\nO Tchiloli é a manifestação cultural mais única da ilha — uma representação teatral ao ar livre, com trajes medievais portugueses, que conta a história de Carlos Magno. Misturando português arcaico e crioulo, esta arte popular milenar está inscrita no Património Imaterial da UNESCO. O Ússua e o Puxa são géneros musicais locais com ritmos sensuais e melancólicos.\n\nO Auto de Floripes, outro teatro popular único, encena o combate entre Cristãos e Mouros numa versão crioulizada. Estas tradições teatrais híbridas não existem em nenhum outro lugar do mundo. O Danço Congo, dança ritual herdada dos escravos do Reino do Congo, é praticado durante as festas religiosas.`,
        en: `São Tomé and Príncipe has developed a creole culture of exceptional richness, fusing the African traditions of the many enslaved peoples with the Portuguese heritage and Brazilian and Creole influences.\n\nTchiloli is the island's most unique cultural manifestation — an outdoor theatrical performance, dressed in medieval Portuguese costumes, recounting the story of Charlemagne. Blending archaic Portuguese and Creole, this thousand-year-old folk art is listed on UNESCO's Intangible Heritage. Ússua and Puxa are local musical genres with sensual and melancholic rhythms.\n\nAuto de Floripes, another unique folk theater, stages the battle between Christians and Moors in a Creolized version. These hybrid theatrical traditions exist nowhere else on earth. Danço Congo, a ritual dance inherited from the enslaved people of the Kongo Kingdom, is practiced during religious festivals.`,
      },
      image: '/about%20par%20pays/musique%20et%20dance/sao%20tom%C3%A9/danc3a7a.jpg',
      imageAlt: 'Culture São Tomé spectacle',
      facts: [
        {
          label: { fr: 'UNESCO', pt: 'UNESCO', en: 'UNESCO' },
          value: { fr: 'Tchiloli — théâtre unique', pt: 'Tchiloli — teatro único', en: 'Tchiloli — unique theater' },
        },
        {
          label: { fr: 'Musique locale', pt: 'Música local', en: 'Local music' },
          value: { fr: 'Ússua & Puxa', pt: 'Ússua & Puxa', en: 'Ússua & Puxa' },
        },
        {
          label: { fr: 'Danse rituelle', pt: 'Dança ritual', en: 'Ritual dance' },
          value: { fr: 'Danço Congo', pt: 'Danço Congo', en: 'Danço Congo' },
        },
      ],
      quote: {
        fr: 'Le Tchiloli — Charlemagne parlant créole sous les palmiers équatoriaux.',
        pt: 'O Tchiloli — Carlos Magno a falar crioulo debaixo das palmeiras equatoriais.',
        en: 'Tchiloli — Charlemagne speaking Creole under the equatorial palm trees.',
      },
    },

    gastronomy: {
      title: {
        fr: 'Le cacao, les roças et les saveurs tropicales',
        pt: 'O cacau, as roças e os sabores tropicais',
        en: 'Cocoa, the roças and tropical flavors',
      },
      subtitle: {
        fr: 'Cuisine insulaire aux influences multiples',
        pt: 'Cozinha insular com múltiplas influências',
        en: 'Island cuisine with multiple influences',
      },
      text: {
        fr: `La cuisine de São Tomé-et-Príncipe est une délicieuse fusion de saveurs africaines, portugaises et tropicales. Le Calulu, plat national, est un ragoût complexe préparé pendant des heures : poisson fumé ou viande mijotent avec des herbes sauvages, des légumes-feuilles, de l'huile de palme et des épices. Chaque famille a sa recette secrète transmise de génération en génération.\n\nLe cacao de São Tomé est reconnu comme l'un des meilleurs du monde — grand cru de chocolat aux arômes floraux et fruités, cultivé dans les anciennes roças coloniales. Les chocolatiers belges et suisses se le disputent. La Feijoada sãotomense, haricots noirs aux viandes fumées, est la fête du dimanche.\n\nLes fruits tropicaux en abondance — bananes, papayes, ananas, maracujas — se retrouvent dans les jus frais, les desserts et les préparations salées. Le poisson grillé aux bananes plantain reste la simplicité à son sommet.`,
        pt: `A cozinha de São Tomé e Príncipe é uma deliciosa fusão de sabores africanos, portugueses e tropicais. O Calulu, prato nacional, é um guisado complexo preparado durante horas: peixe fumado ou carne cozinham com ervas silvestres, legumes-folha, azeite de palma e especiarias. Cada família tem a sua receita secreta transmitida de geração em geração.\n\nO cacau de São Tomé é reconhecido como um dos melhores do mundo — grand cru de chocolate com aromas florais e frutados, cultivado nas antigas roças coloniais. Os chocolateiros belgas e suíços disputam-no. A Feijoada sãotomense, feijão preto com carnes fumadas, é a festa de domingo.\n\nAs frutas tropicais em abundância — bananas, papaias, ananás, maracujás — encontram-se nos sumos frescos, nas sobremesas e nas preparações salgadas. O peixe grelhado com banana da terra continua a ser a simplicidade no seu auge.`,
        en: `The cuisine of São Tomé and Príncipe is a delicious fusion of African, Portuguese and tropical flavors. Calulu, the national dish, is a complex stew prepared for hours: smoked fish or meat simmers with wild herbs, leafy greens, palm oil and spices. Each family has its own secret recipe passed down from generation to generation.\n\nSão Tomé cocoa is recognized as one of the best in the world — a grand cru chocolate with floral and fruity aromas, grown in the old colonial roças. Belgian and Swiss chocolatiers compete for it. Feijoada sãotomense, black beans with smoked meats, is the Sunday celebration.\n\nAbundant tropical fruits — bananas, papayas, pineapples, passion fruits — appear in fresh juices, desserts and savory preparations. Grilled fish with plantain remains the pinnacle of simplicity.`,
      },
      image: '/about%20par%20pays/gastronomie/sao%20tom%C3%A9/Calulu.jpg',
      imageAlt: 'Gastronomie São Tomé cacao',
      facts: [
        {
          label: { fr: 'Trésor mondial', pt: 'Tesouro mundial', en: 'World treasure' },
          value: { fr: 'Cacao Grand Cru', pt: 'Cacau Grand Cru', en: 'Grand Cru Cocoa' },
        },
        {
          label: { fr: 'Plat national', pt: 'Prato nacional', en: 'National dish' },
          value: { fr: 'Calulu de Peixe', pt: 'Calulu de Peixe', en: 'Calulu de Peixe' },
        },
        {
          label: { fr: 'Spécialité', pt: 'Especialidade', en: 'Specialty' },
          value: { fr: 'Feijoada sãotomense', pt: 'Feijoada sãotomense', en: 'São Tomé Feijoada' },
        },
      ],
      quote: {
        fr: "Le chocolat de São Tomé — le meilleur d'Afrique, cultivé depuis 500 ans.",
        pt: 'O chocolate de São Tomé — o melhor de África, cultivado há 500 anos.',
        en: "São Tomé chocolate — the best in Africa, grown for 500 years.",
      },
    },
  },
];

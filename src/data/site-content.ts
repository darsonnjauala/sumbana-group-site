export interface ProductItem {
  id: string;
  name: string;
  price: string;
  category: string;
  description: string;
  image: string;
  specs: string[];
}

export interface SpatialRoom {
  id: string;
  tabLabel: string;
  title: string;
  description: string;
  image: string;
  caption: string;
  highlights: string[];
}

export interface LookbookItem {
  id: string;
  title: string;
  location: string;
  category: string;
  image: string;
  aspect: "portrait" | "landscape" | "square";
}

export interface MomentTrigger {
  id: string;
  number: string;
  scenario: string;
  question: string;
  solution: string;
  highlight: string;
}

export const SITE_DATA = {
  brand: {
    name: "Sumbana Group",
    logoImage: "/images/logo.jpg",
    tagline: "Design de Interiores & Marcenaria Sob Medida",
    subtagline: "Transformamos espaços com tecnologia, proteção e estética.",
    address: "Av. Milagre Mabote, Maputo, Moçambique",
    city: "Maputo",
    country: "Moçambique",
    phone: "+258 87 144 6779",
    whatsappUrl: "https://wa.me/258871446779",
    instagramUrl: "https://www.instagram.com/sumbana.group/",
    instagramHandle: "@sumbana.group",
  },

  nav: [
    { label: "Obras", href: "#lookbook" },
    { label: "Ambientes", href: "#ambientes" },
    { label: "Peças", href: "#catalogo" },
    { label: "Método", href: "#metodo" },
    { label: "Engenharia", href: "#engenharia" },
    { label: "Showroom", href: "#showroom" },
  ],

  hero: {
    eyebrow: "Atelier de Interiores & Alta Marcenaria • Maputo",
    title: "Transformamos metros quadrados em ambientes extraordinários.",
    description:
      "Planeamento profissional de espaços, mobiliário de autor sob medida e soluções chave-na-mão. Do render 3D à instalação de cortinados, marcenaria e proteção perimetral na Grande Maputo.",
    ctaPrimary: "Pedir Orçamento",
    ctaSecondary: "Ver Obras",
    heroImage: "/images/suite-master-clean.jpg",
    heroVideo: "/videos/suite-master.mp4",
    heroImageCaption: "Suíte Residencial • Maputo (Design e Execução Sumbana Group)",
  },

  manifesto: {
    eyebrow: "Filosofia de Interiores",
    quote:
      "O design de interiores transforma ambientes comuns em espaços elegantes, funcionais e personalizados. Com planeamento profissional, você aproveita melhor o espaço, evita gastos desnecessários e valoriza o seu imóvel.",
    author: "Sumbana Group",
    pillars: [
      {
        number: "01",
        title: "Aproveitamento Total",
        desc: "Cada centímetro é planeado para a sua circulação real, eliminando cantos mortos e móveis desproporcionais.",
      },
      {
        number: "02",
        title: "Zero Gastos Inúteis",
        desc: "Visualização em 3D e medições técnicas antes de produzir evitam compras erradas e retrabalhos caros de obra.",
      },
      {
        number: "03",
        title: "Valorização Real",
        desc: "Um imóvel com interiores assinados e marcenaria de alto nível eleva imediatamente o valor patrimonial para venda ou arrendamento.",
      },
    ],
  },

  moments: [
    {
      id: "casa-nova",
      number: "01",
      scenario: "Casa Nova ou Entrega de Chaves",
      question: "Entrou numa vivenda ou apartamento com paredes nuas?",
      solution:
        "Desenhamos o projeto completo e entregamos a casa pronta a habitar: salas, quartos, cortinados e iluminação em harmonia total.",
      highlight: "Solução Chave-na-Mão",
    },
    {
      id: "renovacao",
      number: "02",
      scenario: "Renovação de Espaço Cansado",
      question: "Fios espalhados pela sala e sofás desgastados?",
      solution:
        "Substituímos a desordem por móveis sob medida com passagem oculta de fios, sofás Chiffone e cortinados do teto ao chão.",
      highlight: "Transformação Sem Obras",
    },
    {
      id: "arrendamento",
      number: "03",
      scenario: "Imóvel para Arrendamento",
      question: "Quer arrendar a diplomatas e expatriados pelo valor máximo?",
      solution:
        "Espaços com assinatura de design e mobília duradoura alugam mais rápido e garantem rendimentos superiores no mercado de Maputo.",
      highlight: "Retorno Imediato de Investimento",
    },
  ],

  lookbook: [
    {
      id: "obra-suite",
      title: "Suíte Master Contemporânea",
      location: "Maputo",
      category: "Quartos & Iluminação",
      image: "/images/suite-master.jpg",
      aspect: "portrait",
    },
    {
      id: "obra-living",
      title: "Living & Sala de Estar Acolhedora",
      location: "Maputo",
      category: "Estar & Tapeçaria",
      image: "/images/living-room.jpg",
      aspect: "landscape",
    },
    {
      id: "obra-dining",
      title: "Sala de Jantar em Madeira Nobre",
      location: "Maputo",
      category: "Jantar & Convívio",
      image: "/images/dining-table.jpg",
      aspect: "square",
    },
    {
      id: "obra-curtains",
      title: "Cortinados de Teto com Caimento Alinhado",
      location: "Maputo",
      category: "Vestuário de Janelas",
      image: "/images/cortinados-detalhe.jpg",
      aspect: "portrait",
    },
    {
      id: "obra-mirror",
      title: "Espelho Orgânico com Retroiluminação LED",
      location: "Showroom Av. Milagre Mabote",
      category: "Curadoria & Decoração",
      image: "/images/espelho-organico.jpg",
      aspect: "square",
    },
    {
      id: "obra-security",
      title: "Proteção Perimetral Integrada de Vivenda",
      location: "Mapulene",
      category: "Segurança de Muros",
      image: "/images/vedacao-eletrica.jpg",
      aspect: "landscape",
    },
  ],

  spatialRooms: [
    {
      id: "salas",
      tabLabel: "Salas de Estar",
      title: "Salas de Estar & Living",
      description:
        "O coração social da residência. Desenhamos sofás curvos ou modulares de alta densidade, mesas de centro orgânicas e painéis em madeira nobre.",
      image: "/images/living-room.jpg",
      caption: "Composição de sala de estar completa com estofados e tapete coordenado.",
      highlights: [
        "Sofás Chiffone com tecidos nobres e toque aveludado",
        "Racks suspensos com gestão invisível de cabos e tecnologia",
        "Composição de iluminação indireta quente e mesas de apoio",
      ],
    },
    {
      id: "quartos",
      tabLabel: "Quartos & Suítes",
      title: "Quartos & Suítes de Descanso",
      description:
        "O refúgio de intimidade. Camas estofadas com cabeceiras personalizadas até ao teto, mesas de cabeceira integradas e controle absoluto de luminosidade.",
      image: "/images/suite-master.jpg",
      caption: "Suíte executiva com iluminação cênica de sanca e cortinado blackout.",
      highlights: [
        "Cabeceiras sob medida com almofadados ergonómicos",
        "Sancas de luz quente para leitura e relaxamento",
        "Cortinados blackout de alta vedação para sono profundo",
      ],
    },
    {
      id: "jantar",
      tabLabel: "Salas de Jantar",
      title: "Salas de Jantar & Convívio",
      description:
        "O ponto de encontro da casa. Mesas em madeira nobre e metal estruturado com cadeiras de estofamento ergonómico para longas refeições em família.",
      image: "/images/dining-table.jpg",
      caption: "Mesa de jantar de 6 lugares com acabamento encerado e proporção limpa.",
      highlights: [
        "Capacidade sob medida (6, 8 ou 10 lugares)",
        "Madeiras selecionadas resistentes ao clima tropical",
        "Cadeiras coordenadas com tecido de fácil limpeza",
      ],
    },
    {
      id: "janelas",
      tabLabel: "Janelas & Cortinados",
      title: "Vestuário de Janelas & Persianas",
      description:
        "Luz na medida certa e privacidade total. Cortinados e persianas sob medida com medição profissional no local, caimento contínuo e tecidos nobres.",
      image: "/images/persianas-montagem.jpg",
      caption: "Montagem técnica de persianas com alinhamento milimétrico.",
      highlights: [
        "Instalação com régua de nível do teto ao chão",
        "Tecidos fluidos, linho rústico e tecidos corta-luz",
        "Opção de motorização silenciosa para controlo por interruptor",
      ],
    },
  ],

  catalog: [
    {
      id: "conjunto-marta",
      name: "Conjunto Marta",
      price: "75.000 MT",
      category: "Estar Completo",
      image: "/images/conjunto-marta.jpg",
      description: "Conjunto completo de sala por encomenda. Ergonomia sofisticada, proporção generosa e acabamento de alta-costura.",
      specs: ["Disponível por encomenda", "Madeira tratada e espuma D33", "Tecidos personalizáveis"],
    },
    {
      id: "sofa-chiffone",
      name: "Sofá Chiffone",
      price: "65.000 MT",
      category: "Estofados de Luxo",
      image: "/images/sofa-chiffone.jpg",
      description: "Mais do que um sofá confortável, uma experiência de relaxamento e elegância para salas amplas.",
      specs: ["Linhas imponentes", "Toque aveludado resistente", "Cores neutras e terrosas"],
    },
    {
      id: "corner-living",
      name: "Conjunto Canto Living",
      price: "32.000 MT",
      category: "Cantos & Leitura",
      image: "/images/living-room.jpg",
      description: "Mesa de canto, candeeiro de apoio e poltrona ergonómica — o equilíbrio perfeito para criar um recanto acolhedor.",
      specs: ["Poltrona de leitura", "Mesa de apoio e candeeiro", "Design escultural"],
    },
    {
      id: "mesa-jantar-6",
      name: "Mesa de Jantar 6 Lugares",
      price: "16.200 MT",
      category: "Jantar & Reunião",
      image: "/images/dining-table.jpg",
      description: "Mesa de jantar contemporânea estruturada para refeições memoráveis em família ou recepção de amigos.",
      specs: ["Capacidade 6 lugares", "Tampo em acabamento nobre", "Estrutura firme e esbelta"],
    },
    {
      id: "espelho-led",
      name: "Espelho Orgânico LED",
      price: "8.900 MT",
      category: "Curadoria & Decoração",
      image: "/images/espelho-organico.jpg",
      description: "Espelho de contorno orgânico fluido com retroiluminação LED quente. Transforma qualquer hall ou sala num cenário.",
      specs: ["Formato orgânico fluido", "Fita LED quente embutida", "Sensação de profundidade"],
    },
    {
      id: "cortinados-luxo",
      name: "Cortinados Sob Medida",
      price: "Sob Medição",
      category: "Vestuário de Janelas",
      image: "/images/cortinados-detalhe.jpg",
      description: "Cortinados com pregas perfeitas e tecido de alta densidade. Medição no local e acabamento impecável.",
      specs: ["Medição técnica no local", "Opção blackout ou linho", "Instalação profissional"],
    },
  ],

  method: [
    {
      step: "01",
      title: "Briefing & Medição",
      desc: "Visitamos o seu espaço em Maputo para avaliar a planta, a luz solar e recolher as medidas exatas da parede.",
    },
    {
      step: "02",
      title: "Conceituação & 3D",
      desc: "Apresentamos a proposta visual com a distribuição dos móveis, paleta de cores e acabamentos antes de cortar qualquer madeira.",
    },
    {
      step: "03",
      title: "Fabrico no Atelier",
      desc: "Nossos artesãos e carpinteiros produzem as peças sob medida com controlo rigoroso de estofamento e marcenaria.",
    },
    {
      step: "04",
      title: "Montagem Chave-na-Mão",
      desc: "Equipa própria instala os móveis, fixa os cortinados com alinhamento milimétrico, limpa o espaço e entrega o ambiente pronto.",
    },
  ],

  engineering: {
    eyebrow: "Engenharia Integrada Turnkey",
    title: "Tecnologia e Proteção em Harmonia com o Interior",
    desc: "Para que o cliente não precise de contratar fornecedores desconexos que danificam acabamentos ou deixam cabos expostos:",
    solutions: [
      {
        title: "Cortinados e Persianas Motorizadas",
        desc: "Acionamento suave e silencioso através de interruptores de parede de design minimalista ou controle no smartphone.",
        image: "/images/cortinados-detalhe.jpg",
      },
      {
        title: "Vedação Elétrica de Precisão para Muros",
        desc: "Instalação de cerca elétrica de alta segurança que respeita a arquitetura da vivenda e protege a família com acabamento impecável (caso real executado em Mapulene).",
        image: "/images/vedacao-eletrica.jpg",
      },
      {
        title: "CCTV e Vigilância Discreta",
        desc: "Câmaras posicionadas estrategicamente nos pontos de entrada sem cablagem externa aparente ou impacto visual agressivo.",
        image: "/images/persianas-montagem.jpg",
      },
    ],
  },

  showroom: {
    eyebrow: "Espaço Físico em Maputo",
    title: "Visite o Nosso Showroom",
    desc: "Experimente o conforto dos estofados, sinta o toque dos tecidos de cortinados e converse diretamente com a nossa equipa sobre o seu espaço.",
    address: "Av. Milagre Mabote, Maputo",
    hours: "Segunda a Sábado, das 08h30 às 17h30",
    ctaLocation: "Como Chegar",
    ctaAppointment: "Agendar Visita",
  },
};

// ============================================
// LOUV OS — Client Data
// Edit this file to add/remove real clients
// ============================================

export const clients = [
  {
    id: 'ie-browser',
    name: 'Internet',
    icon: '🌐',
    iconType: 'emoji', // 'emoji' | 'image' | 'svg'
    iconSrc: null, // URL for image icons
    url: 'https://louv.agency',
    description: 'Navegá por el portfolio de LOUV y descubrí nuestros proyectos.',
    services: ['Portfolio', 'Proyectos'],
    isSpecial: true, // Special icons (not clients)
  },
  {
    id: 'urban-wear',
    name: 'Urban Wear',
    icon: '👕',
    iconType: 'emoji',
    url: 'https://urbanwear.com',
    description: 'Marca de streetwear urbano. Diseñamos su e-commerce completo con catálogo dinámico y sistema de pagos integrado.',
    services: ['Diseño Web', 'E-commerce', 'Branding'],
  },
  {
    id: 'cafe-roma',
    name: 'Café Roma',
    icon: '☕',
    iconType: 'emoji',
    url: 'https://caferoma.com',
    description: 'Cadena de cafeterías premium. Landing page con menú interactivo, reservas online y presencia en redes.',
    services: ['Diseño Web', 'Redes Sociales', 'Ads'],
  },
  {
    id: 'neon-fitness',
    name: 'Neon Fitness',
    icon: '💪',
    iconType: 'emoji',
    url: 'https://neonfitness.com',
    description: 'Gimnasio boutique. App de turnos, web con planes de entrenamiento y campaña de ads en Meta + Google.',
    services: ['Software', 'Diseño Web', 'Ads'],
  },
  {
    id: 'aurora-beauty',
    name: 'Aurora Beauty',
    icon: '💄',
    iconType: 'emoji',
    url: 'https://aurorabeauty.com',
    description: 'Línea de cosméticos naturales. Tienda online con checkout express y branding completo de la marca.',
    services: ['E-commerce', 'Branding', 'Identidad'],
  },
  {
    id: 'tech-nova',
    name: 'TechNova',
    icon: '🚀',
    iconType: 'emoji',
    url: 'https://technova.io',
    description: 'Startup de tecnología. Dashboard interno, landing B2B y gestión de campañas SEM/SEO.',
    services: ['Software', 'Diseño Web', 'Ads'],
  },
  {
    id: 'verde-organico',
    name: 'Verde Orgánico',
    icon: '🌿',
    iconType: 'emoji',
    url: 'https://verdeorganico.com',
    description: 'Tienda de productos orgánicos. E-commerce sustentable con delivery integrado y contenido para Instagram.',
    services: ['E-commerce', 'Redes Sociales', 'Branding'],
  },
  {
    id: 'studio-arc',
    name: 'Studio ARC',
    icon: '🏗️',
    iconType: 'emoji',
    url: 'https://studioarc.com',
    description: 'Estudio de arquitectura. Portfolio 3D, sistema de presupuestos online y branding institucional.',
    services: ['Diseño Web', 'Software', 'Identidad'],
  },
  {
    id: 'beats-records',
    name: 'Beats Records',
    icon: '🎵',
    iconType: 'emoji',
    url: 'https://beatsrecords.com',
    description: 'Sello discográfico independiente. Plataforma de streaming, landing de artistas y gestión de redes.',
    services: ['Software', 'Diseño Web', 'Redes Sociales'],
  },
  {
    id: 'mi-pc',
    name: 'Mi PC',
    icon: '🖥️',
    iconType: 'emoji',
    url: null,
    description: null,
    services: [],
    isSpecial: true,
    action: 'about',
  },
  {
    id: 'papelera',
    name: 'Papelera',
    icon: '🗑️',
    iconType: 'emoji',
    url: null,
    description: null,
    services: [],
    isSpecial: true,
    action: 'recycle',
  },
];

export const services = {
  web: {
    title: '🌐 Diseño & Desarrollo Web',
    description: 'Creamos sitios web premium que convierten visitantes en clientes. Desde landing pages hasta plataformas e-commerce complejas.',
    features: [
      'Diseño UI/UX personalizado',
      'Desarrollo responsive (mobile-first)',
      'E-commerce con pasarelas de pago',
      'SEO técnico y optimización',
      'CMS headless & Jamstack',
      'Animaciones & micro-interacciones',
    ]
  },
  software: {
    title: '💻 Gestión de Software',
    description: 'Desarrollo de software a medida para automatizar y escalar tu negocio.',
    features: [
      'Apps web & mobile',
      'Dashboards & paneles admin',
      'APIs & integraciones',
      'Bases de datos & backend',
      'Automatizaciones & bots',
      'Soporte técnico continuo',
    ]
  },
  ads: {
    title: '📢 Gestión de Ads',
    description: 'Campañas de publicidad digital que maximizan tu ROI en todas las plataformas.',
    features: [
      'Google Ads (SEM/PPC)',
      'Meta Ads (Facebook & Instagram)',
      'TikTok Ads',
      'Retargeting & remarketing',
      'A/B testing & optimización',
      'Reportes mensuales detallados',
    ]
  },
  branding: {
    title: '🎨 Branding & Identidad Visual',
    description: 'Construimos la identidad visual que define tu marca y la hace inolvidable.',
    features: [
      'Logo & sistema visual',
      'Paleta de colores & tipografía',
      'Manual de marca completo',
      'Packaging & merchandising',
      'Papelería corporativa',
      'Brandbook digital',
    ]
  },
  social: {
    title: '📱 Redes Sociales',
    description: 'Contenido estratégico que conecta con tu audiencia y construye comunidad.',
    features: [
      'Estrategia de contenido',
      'Diseño de posts & stories',
      'Gestión de comunidad',
      'Calendario editorial',
      'Análisis & métricas',
      'Colaboraciones & influencers',
    ]
  },
};

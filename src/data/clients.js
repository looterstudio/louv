// ============================================
// LOUV OS — Client Data
// Edit this file to add/remove real clients
// ============================================

export const clients = [
  {
    id: 'ie-browser',
    name: 'Internet',
    icon: '🌐',
    iconType: 'emoji',
    iconSrc: null,
    url: 'https://louv.agency',
    description: 'Browse the LOUV portfolio and discover our projects.',
    services: ['Portfolio', 'Projects'],
    isSpecial: true,
  },
  {
    id: 'urban-wear',
    name: 'Urban Wear',
    icon: '👕',
    iconType: 'emoji',
    url: 'https://urbanwear.com',
    description: 'Urban streetwear brand. We designed their full e-commerce with dynamic catalog and integrated payment system.',
    services: ['Web Design', 'E-commerce', 'Branding'],
  },
  {
    id: 'cafe-roma',
    name: 'Café Roma',
    icon: '☕',
    iconType: 'emoji',
    url: 'https://caferoma.com',
    description: 'Premium coffee chain. Landing page with interactive menu, online reservations, and social media presence.',
    services: ['Web Design', 'Social Media', 'Ads'],
  },
  {
    id: 'neon-fitness',
    name: 'Neon Fitness',
    icon: '💪',
    iconType: 'emoji',
    url: 'https://neonfitness.com',
    description: 'Boutique gym. Booking app, website with training plans, and Meta + Google ads campaign.',
    services: ['Software', 'Web Design', 'Ads'],
  },
  {
    id: 'aurora-beauty',
    name: 'Aurora Beauty',
    icon: '💄',
    iconType: 'emoji',
    url: 'https://aurorabeauty.com',
    description: 'Natural cosmetics line. Online store with express checkout and full brand identity.',
    services: ['E-commerce', 'Branding', 'Identity'],
  },
  {
    id: 'tech-nova',
    name: 'TechNova',
    icon: '🚀',
    iconType: 'emoji',
    url: 'https://technova.io',
    description: 'Tech startup. Internal dashboard, B2B landing page, and SEM/SEO campaign management.',
    services: ['Software', 'Web Design', 'Ads'],
  },
  {
    id: 'verde-organico',
    name: 'Verde Organic',
    icon: '🌿',
    iconType: 'emoji',
    url: 'https://verdeorganic.com',
    description: 'Organic products store. Sustainable e-commerce with integrated delivery and Instagram content.',
    services: ['E-commerce', 'Social Media', 'Branding'],
  },
  {
    id: 'studio-arc',
    name: 'Studio ARC',
    icon: '🏗️',
    iconType: 'emoji',
    url: 'https://studioarc.com',
    description: 'Architecture studio. 3D portfolio, online quote system, and corporate brand identity.',
    services: ['Web Design', 'Software', 'Identity'],
  },
  {
    id: 'beats-records',
    name: 'Beats Records',
    icon: '🎵',
    iconType: 'emoji',
    url: 'https://beatsrecords.com',
    description: 'Independent record label. Streaming platform, artist landing pages, and social media management.',
    services: ['Software', 'Web Design', 'Social Media'],
  },
  {
    id: 'mi-pc',
    name: 'My Computer',
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
    name: 'Recycle Bin',
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
    title: '🌐 Web Design & Development',
    description: 'We create premium websites that turn visitors into customers. From landing pages to complex e-commerce platforms.',
    features: [
      'Custom UI/UX design',
      'Responsive development (mobile-first)',
      'E-commerce with payment gateways',
      'Technical SEO & optimization',
      'Headless CMS & Jamstack',
      'Animations & micro-interactions',
    ]
  },
  software: {
    title: '💻 Software Development',
    description: 'Custom software solutions to automate and scale your business.',
    features: [
      'Web & mobile apps',
      'Dashboards & admin panels',
      'APIs & integrations',
      'Databases & backend',
      'Automations & bots',
      'Ongoing technical support',
    ]
  },
  ads: {
    title: '📢 Ads Management',
    description: 'Digital advertising campaigns that maximize your ROI across all platforms.',
    features: [
      'Google Ads (SEM/PPC)',
      'Meta Ads (Facebook & Instagram)',
      'TikTok Ads',
      'Retargeting & remarketing',
      'A/B testing & optimization',
      'Detailed monthly reports',
    ]
  },
  branding: {
    title: '🎨 Branding & Visual Identity',
    description: 'We build the visual identity that defines your brand and makes it unforgettable.',
    features: [
      'Logo & visual system',
      'Color palette & typography',
      'Complete brand manual',
      'Packaging & merchandising',
      'Corporate stationery',
      'Digital brandbook',
    ]
  },
  social: {
    title: '📱 Social Media',
    description: 'Strategic content that connects with your audience and builds community.',
    features: [
      'Content strategy',
      'Post & stories design',
      'Community management',
      'Editorial calendar',
      'Analytics & metrics',
      'Collaborations & influencers',
    ]
  },
};

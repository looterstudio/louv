// ============================================
// LOUVRE OS — Desktop
// Every icon is a shortcut. Edit here to add clients.
// ============================================

export const clients = [
  // ── system
  { id: 'internet', name: 'Internet', icon: '🌐', iconType: 'image', iconSrc: 'icons/ie.png', iconFallback: 'icons/globe.svg', description: 'The Looter browser. Coming soon.', services: [], isSpecial: true, action: 'about' },
  { id: 'louv', name: 'LOUVRE', icon: '♥', iconType: 'image', iconSrc: 'louvre-logo.svg', isSpecial: true, action: 'about' },
  { id: 'mi-pc', name: 'My Computer', icon: '🖥️', iconType: 'image', iconSrc: 'icons/computer.svg', isSpecial: true, action: 'about' },
  { id: 'papelera', name: 'Recycle Bin', icon: '🗑️', iconType: 'image', iconSrc: 'icons/bin.svg', isSpecial: true, action: 'recycle' },
  // ── games (they never open, like the good old days)
  { id: 'vice-city', name: 'Vice City', icon: '🌴', iconType: 'image', iconSrc: 'icons/vicecity.png', isSpecial: true, action: 'game' },
  { id: 'tibia', name: 'Tibia', icon: '⚔️', iconType: 'image', iconSrc: 'icons/tibia.png', isSpecial: true, action: 'game' },
  // ── clients (placeholders until the real ones land)
  { id: 'urban-wear', name: 'Urban Wear', icon: '👕', iconType: 'folder', url: 'https://urbanwear.com', description: 'Urban streetwear brand. Full e-commerce with dynamic catalog and integrated payments.', services: ['Website', 'E-commerce', 'Branding'] },
  { id: 'cafe-roma', name: 'Café Roma', icon: '☕', iconType: 'folder', url: 'https://caferoma.com', description: 'Premium coffee chain. Landing page with interactive menu, reservations, and social media.', services: ['Website', 'Social', 'Ads'] },
  { id: 'neon-fitness', name: 'Neon Fitness', icon: '💪', iconType: 'folder', url: 'https://neonfitness.com', description: 'Boutique gym. Booking app, website with training plans, Meta + Google ads.', services: ['Software', 'Website', 'Ads'] },
  { id: 'aurora-beauty', name: 'Aurora Beauty', icon: '💄', iconType: 'folder', url: 'https://aurorabeauty.com', description: 'Natural cosmetics. Online store with express checkout and full brand identity.', services: ['E-commerce', 'Branding'] },
  { id: 'tech-nova', name: 'TechNova', icon: '🚀', iconType: 'folder', url: 'https://technova.io', description: 'Tech startup. Internal dashboard, B2B landing, SEM/SEO campaigns.', services: ['Software', 'Website', 'Ads'] },
  { id: 'verde-organico', name: 'Verde Organic', icon: '🌿', iconType: 'folder', url: 'https://verdeorganic.com', description: 'Organic food brand. Packaging, identity, and a store that ships.', services: ['Branding', 'E-commerce'] },
  { id: 'studio-arc', name: 'Studio ARC', icon: '🏗️', iconType: 'folder', url: 'https://studioarc.com', description: 'Architecture studio. Portfolio site and social content.', services: ['Website', 'Social'] },
  { id: 'beats-records', name: 'Beats Records', icon: '🎵', iconType: 'folder', url: 'https://beatsrecords.com', description: 'Independent label. Release pages, visuals, and launch ads.', services: ['Branding', 'Ads', 'Social'] },
];

export const services = {
  web: { title: '🌐 Websites', description: 'Landing pages, stores, and full sites. Designed to look like a real company and built to convert.', items: ['Landing pages', 'E-commerce', 'Web apps', 'SEO and speed', 'Hosting and domains'] },
  software: { title: '💻 Software', description: 'Custom software, automation, and AI. The things that make a business run without you.', items: ['Dashboards', 'Automation', 'AI agents', 'APIs and integrations', 'Mobile apps'] },
  ads: { title: '📢 Ads', description: 'Meta, Google, TikTok. Campaigns with a budget, a target, and a number at the end.', items: ['Meta Ads', 'Google Ads', 'TikTok Ads', 'Creatives', 'Analytics and reporting'] },
  branding: { title: '🎨 Branding', description: 'Name, logo, identity, voice. The part people remember.', items: ['Logo and identity', 'Brand book', 'Packaging', 'Art direction', 'Naming'] },
  social: { title: '📱 Social', description: 'Content that looks like it costs money. Instagram, TikTok, X.', items: ['Content strategy', 'Design and video', 'Community', 'Growth', 'Launches'] },
};

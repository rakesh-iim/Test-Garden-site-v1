export const IMAGES = {
  hero: "https://images.unsplash.com/uploads/1411901100260f56b39b9/ab70b250?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  blueprints: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
  project1: "https://images.unsplash.com/photo-1577566997011-307e150970dc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  project2: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
  project3: "https://images.unsplash.com/photo-1546580594-a64816022c1b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  landscaper: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?q=80&w=1200&auto=format&fit=crop",
  foliage: "https://images.unsplash.com/photo-1444392061186-9fc38f84f726?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
};

export const TESTIMONIALS = [
  {
    quote: "VerdantCraft completely revitalized our property. The balance of vibrant greenery and pristine stonework feels like a private luxury resort. Truly professional.",
    name: "Sarah Jenkins",
    location: "The Oaks",
    avatar: "https://i.pravatar.cc/150?img=44"
  },
  {
    quote: "Their attention to detail is unmatched. Our lawn has never looked healthier, and the seasonal cleanups make a world of difference. Incredible team.",
    name: "Michael Chen",
    location: "Pine Valley",
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    quote: "The hardscaping team transformed our backyard into a stunning entertainment space. Highly recommend their expertise to anyone looking to upgrade.",
    name: "Elena Rodriguez",
    location: "Highland Estates",
    avatar: "https://i.pravatar.cc/150?img=5"
  }
];

export const PORTFOLIO_ITEMS = [
  { 
    id: "oasis-estate",
    title: "The Oasis Estate", 
    category: "Complete redesign & installation", 
    img: IMAGES.project1,
    description: "A complete overhaul of a traditional property into a modern outdoor oasis. This project involved extensive grading, the installation of mature tropical specimens, and a comprehensive hardscaping package including a travertine pool deck and custom water features. The result is a seamless transition between indoor and outdoor living spaces.",
    location: "Paradise Valley",
    year: "2023",
    services: ["Garden Design", "Hardscaping", "Lawn Care"]
  },
  { 
    id: "botanical-pathways",
    title: "Botanical Pathways", 
    category: "Hardscaping & Tropical Planting", 
    img: IMAGES.project2,
    description: "Transforming an underutilized backyard into an immersive botanical walkthrough. We utilized natural stone pavers set amidst vibrant, low-maintenance tropical foliage. The pathways are designed to encourage exploration and provide multiple secluded seating areas.",
    location: "Highland Estates",
    year: "2024",
    services: ["Hardscaping", "Garden Design"]
  },
  { 
    id: "modern-zen",
    title: "Modern Zen", 
    category: "Minimalist Rock Garden", 
    img: IMAGES.hero,
    description: "A minimalist approach to landscaping focusing on tranquility and clean lines. This project features raked gravel, strategically placed boulders, and selective use of architectural plants to create a calming, meditative environment that requires minimal maintenance.",
    location: "Urban Core",
    year: "2023",
    services: ["Garden Design", "Seasonal Cleanup"]
  },
  { 
    id: "azure-retreat",
    title: "Azure Retreat", 
    category: "Poolside integration & maintenance", 
    img: IMAGES.project3,
    description: "Enhancing an existing pool area with lush, colorful plantings that provide privacy without obstructing the view. We selected salt-tolerant species and designed a custom irrigation system to ensure year-round vibrancy.",
    location: "Coastal Ridge",
    year: "2022",
    services: ["Garden Design", "Lawn Care"]
  },
  { 
    id: "urban-jungle",
    title: "Urban Jungle", 
    category: "Vertical Gardens & Balcony", 
    img: IMAGES.landscaper,
    description: "Maximizing limited space by utilizing vertical surfaces. This project transformed a barren concrete courtyard into a lush, multi-layered environment using custom trellises, hanging planters, and varied textures.",
    location: "Downtown",
    year: "2024",
    services: ["Garden Design"]
  },
  { 
    id: "verdant-slopes",
    title: "Verdant Slopes", 
    category: "Terrace Landscaping", 
    img: IMAGES.foliage,
    description: "Addressing a challenging sloped property by creating functional, terraced levels. We installed retaining walls using locally sourced stone and planted each level with drought-resistant native species to control erosion and provide visual interest.",
    location: "The Hills",
    year: "2023",
    services: ["Hardscaping", "Garden Design"]
  },
];

export const LATEST_PROJECTS = [
  {
    id: "hero-estates",
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    title: 'HERO ESTATES',
    colSpan: 'sm:col-span-2 lg:col-span-2',
    category: 'Commercial Landscaping',
    description: "A sprawling estate requiring a sophisticated, low-maintenance approach to its extensive grounds. This multi-acre property features expansive lawns, strategic privacy plantings, and formal garden structures.",
    location: "Hero City",
    year: "2023",
    services: ["Commercial Landscaping", "Estate Design"],
  },
  {
    id: "dlf-botanicals",
    img: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80',
    title: 'DLF BOTANICALS',
    colSpan: 'sm:col-span-1 lg:col-span-1',
    category: 'Botanical Garden',
    description: "A meticulously curated collection of exotic and native species, designed to adapt and thrive. This botanical sanctuary incorporates diverse microclimates within a unified landscape design.",
    location: "DLF Phase 2",
    year: "2022",
    services: ["Botanical Garden", "Native Planting"],
  },
  {
    id: "dhampur-gardens",
    img: 'https://plus.unsplash.com/premium_photo-1661962494793-c686adb46619?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'DHAMPUR GARDENS',
    colSpan: 'sm:col-span-1 lg:col-span-1',
    category: 'Estate Design',
    description: "Creating a seamless blend of modern geometry and organic forms, Dhampur Gardens offers a refreshing take on traditional estate landscaping.",
    location: "Dhampur",
    year: "2024",
    services: ["Estate Design", "Water Features"],
  },
  {
    id: "pioneer-urban",
    img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
    title: 'PIONEER URBAN',
    colSpan: 'sm:col-span-2 lg:col-span-2',
    category: 'Urban Renewal',
    description: "A transformative project situated in the heart of the city, bringing green, breathable spaces to an otherwise concrete-heavy environment.",
    location: "Pioneer Square",
    year: "2023",
    services: ["Urban Renewal", "Vertical Gardens"],
  },
  {
    id: "amway-greens",
    img: 'https://images.unsplash.com/photo-1734079692147-c6fc9438a2d0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'AMWAY GREENS',
    colSpan: 'sm:col-span-1 lg:col-span-1',
    category: 'Corporate Campus',
    description: "Focusing on employee wellness, this corporate campus was revamped to include meditation zones, shaded walking paths, and expansive gathering lawns.",
    location: "Amway Campus",
    year: "2021",
    services: ["Corporate Campus", "Wellness Gardens"],
  },
  {
    id: "the-indian-garden",
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    title: 'THE INDIAN GARDEN',
    colSpan: 'sm:col-span-1 lg:col-span-1',
    category: 'Heritage Restoration',
    description: "A restoration project reviving historical landscaping principles with modern, drought-resistant varieties. It pays homage to classical Indian garden architecture.",
    location: "Heritage District",
    year: "2020",
    services: ["Heritage Restoration", "Drought-Resistant"],
  },
  {
    id: "sumadhura",
    img: 'https://images.unsplash.com/photo-1681465766418-6474cfdcbb3c?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'SUMADHURA',
    colSpan: 'sm:col-span-1 lg:col-span-1',
    category: 'Residential Complex',
    description: "A luxury residential complex designed to feel like a high-end resort, complete with cascading water features, communal fire pits, and lush perimeter planting.",
    location: "Sumadhura Heights",
    year: "2023",
    services: ["Residential Complex", "Feature Lighting"],
  },
  {
    id: "campari-group",
    img: 'https://images.unsplash.com/photo-1645526629357-16bbd762c8d5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'CAMPARI GROUP',
    colSpan: 'sm:col-span-1 lg:col-span-2',
    category: 'Commercial HQ',
    description: "Sleek, minimalist lines that complement the ultra-modern architecture of the Campari Group headquarters, emphasizing sustainability and low environmental impact.",
    location: "Tech Park",
    year: "2024",
    services: ["Commercial HQ", "Sustainable Landscaping"],
  },
  {
    id: "verdant-vistas",
    img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&q=80',
    title: 'VERDANT VISTAS',
    colSpan: 'sm:col-span-2 lg:col-span-1',
    category: 'Master Planning',
    description: "A large-scale master planning project that balances ecological preservation with active recreational zones. It features interconnected greenways and restored wetland areas.",
    location: "New Township",
    year: "2025",
    services: ["Master Planning", "Ecological Preservation"],
  }
];

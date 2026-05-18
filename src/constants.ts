export const IMAGES = {
  hero: "https://images.unsplash.com/uploads/1411901100260f56b39b9/ab70b250?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  blueprints: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
  project1: "https://images.unsplash.com/photo-1558904541-efa843a96f0f?q=80&w=1200&auto=format&fit=crop",
  project2: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
  project3: "https://images.unsplash.com/photo-1576013551627-119711606d21?q=80&w=1200&auto=format&fit=crop",
  landscaper: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?q=80&w=1200&auto=format&fit=crop",
  foliage: "https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?q=80&w=1200&auto=format&fit=crop"
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

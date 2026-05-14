import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const projects = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    title: 'HERO ESTATES',
    colSpan: 'md:col-span-2',
    category: 'Commercial Landscaping',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80',
    title: 'DLF BOTANICALS',
    colSpan: 'md:col-span-1',
    category: 'Botanical Garden',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1441924921617-640a3dd9aa51?w=800&q=80',
    title: 'DHAMPUR GARDENS',
    colSpan: 'md:col-span-1',
    category: 'Estate Design',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
    title: 'PIONEER URBAN',
    colSpan: 'md:col-span-2',
    category: 'Urban Renewal',
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1496664445371-fd7acaddcc6d?w=800&q=80',
    title: 'AMWAY GREENS',
    colSpan: 'md:col-span-1',
    category: 'Corporate Campus',
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    title: 'THE INDIAN GARDEN',
    colSpan: 'md:col-span-1',
    category: 'Heritage Restoration',
  },
  {
    id: 7,
    img: 'https://images.unsplash.com/photo-1501004318641-b3fae3308d1e?w=800&q=80',
    title: 'SUMADHURA',
    colSpan: 'md:col-span-1',
    category: 'Residential Complex',
  },
  {
    id: 8,
    img: 'https://images.unsplash.com/photo-1510627498534-707ae68c5b16?w=800&q=80',
    title: 'CAMPARI GROUP',
    colSpan: 'md:col-span-2',
    category: 'Commercial HQ',
  },
  {
    id: 9,
    img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&q=80',
    title: 'VERDANT VISTAS',
    colSpan: 'md:col-span-1',
    category: 'Master Planning',
  }
];

export const Projects = () => {
  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-6">
      <div className="mb-12">
        <Link to="/" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary font-medium mb-6 transition-colors">
          <ArrowLeft size={18} />
          Back to Home
        </Link>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl font-display font-bold mb-6">Our landscapes in action</h1>
          <p className="text-xl text-on-surface-variant">
            Explore our recently completed projects showcasing our expertise in transforming outdoor and commercial spaces into vibrant, high-energy sanctuaries.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
            className={`relative group overflow-hidden bg-surface-container-low rounded-xl h-[400px] ${project.colSpan === 'md:col-span-2' ? 'lg:col-span-2 md:col-span-2' : ''}`}
          >
            <img 
              src={project.img} 
              alt={project.title} 
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end">
              <p className="text-white/80 font-medium text-sm tracking-wider uppercase mb-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-150">
                {project.category}
              </p>
              <h3 className="text-white font-display font-bold text-2xl md:text-3xl tracking-wide opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

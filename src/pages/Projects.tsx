import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const projects = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    title: 'HERO ESTATES',
    colSpan: 'sm:col-span-2 lg:col-span-2',
    category: 'Commercial Landscaping',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80',
    title: 'DLF BOTANICALS',
    colSpan: 'sm:col-span-1 lg:col-span-1',
    category: 'Botanical Garden',
  },
  {
    id: 3,
    img: 'https://plus.unsplash.com/premium_photo-1661962494793-c686adb46619?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'DHAMPUR GARDENS',
    colSpan: 'sm:col-span-1 lg:col-span-1',
    category: 'Estate Design',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
    title: 'PIONEER URBAN',
    colSpan: 'sm:col-span-2 lg:col-span-2',
    category: 'Urban Renewal',
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1734079692147-c6fc9438a2d0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'AMWAY GREENS',
    colSpan: 'sm:col-span-1 lg:col-span-1',
    category: 'Corporate Campus',
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    title: 'THE INDIAN GARDEN',
    colSpan: 'sm:col-span-1 lg:col-span-1',
    category: 'Heritage Restoration',
  },
  {
    id: 7,
    img: 'https://images.unsplash.com/photo-1681465766418-6474cfdcbb3c?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'SUMADHURA',
    colSpan: 'sm:col-span-1 lg:col-span-1',
    category: 'Residential Complex',
  },
  {
    id: 8,
    img: 'https://images.unsplash.com/photo-1645526629357-16bbd762c8d5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'CAMPARI GROUP',
    colSpan: 'sm:col-span-1 lg:col-span-2',
    category: 'Commercial HQ',
  },
  {
    id: 9,
    img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&q=80',
    title: 'VERDANT VISTAS',
    colSpan: 'sm:col-span-2 lg:col-span-1',
    category: 'Master Planning',
  }
];

export const Projects = () => {
  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-6">
      <Helmet>
        <title>Our Projects</title>
        <meta name="description" content="Explore our featured landscaping projects. See how Urban Oasis transforms urban spaces into lush green sanctuaries with tailored design and resilient planting." />
        <meta name="keywords" content="landscaping projects, case studies, urban garden design projects, tailored landscaping" />
      </Helmet>
      <div className="mb-12">
        <Link to="/" className="inline-flex items-center gap-2 text-primary font-medium hover:underline mb-8 hover:text-primary-container transition-colors">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
            className={`relative group overflow-hidden bg-surface-container-low rounded-xl h-[400px] ${project.colSpan}`}
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

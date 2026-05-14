import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    title: 'HERO ESTATES',
    colSpan: 'md:col-span-2',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80',
    title: 'DLF BOTANICALS',
    colSpan: 'md:col-span-1',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1441924921617-640a3dd9aa51?w=800&q=80',
    title: 'DHAMPUR GARDENS',
    colSpan: 'md:col-span-1',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
    title: 'PIONEER URBAN',
    colSpan: 'md:col-span-2',
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1496664445371-fd7acaddcc6d?w=800&q=80',
    title: 'AMWAY GREENS',
    colSpan: 'md:col-span-1',
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    title: 'THE INDIAN GARDEN',
    colSpan: 'md:col-span-1',
  },
  {
    id: 7,
    img: 'https://images.unsplash.com/photo-1501004318641-b3fae3308d1e?w=800&q=80',
    title: 'SUMADHURA',
    colSpan: 'md:col-span-1',
  },
  {
    id: 8,
    img: 'https://images.unsplash.com/photo-1510627498534-707ae68c5b16?w=800&q=80',
    title: 'CAMPARI GROUP',
    colSpan: 'md:col-span-2',
  },
  {
    id: 9,
    img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&q=80',
    title: 'VERDANT VISTAS',
    colSpan: 'md:col-span-1',
  }
];

export const LandscapesInAction = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Our landscapes in action</h2>
        <p className="text-lg text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
          Estates designed for scale, complexity, and growth. Each project reflects the expertise of <strong className="text-on-surface">landscape designers</strong> for outdoor environments, balancing form, function, and identity.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
            className={`relative group overflow-hidden bg-surface-container-low h-[300px] md:h-[420px] ${project.colSpan}`}
          >
            <img 
              src={project.img} 
              alt={project.title} 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-white font-display font-bold text-xl md:text-2xl tracking-wider">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 flex justify-center">
        <Link 
          to="/projects" 
          className="bg-[#141414] hover:bg-black text-white w-full sm:w-[500px] py-4 rounded-md font-medium text-center flex items-center justify-center transition-colors"
        >
          See all projects &rarr;
        </Link>
      </div>
    </section>
  );
};

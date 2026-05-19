import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    title: 'HERO ESTATES',
    colSpan: 'sm:col-span-2 lg:col-span-2',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80',
    title: 'DLF BOTANICALS',
    colSpan: 'sm:col-span-1 lg:col-span-1',
  },
  {
    id: 3,
    img: 'https://plus.unsplash.com/premium_photo-1661962494793-c686adb46619?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'DHAMPUR GARDENS',
    colSpan: 'sm:col-span-1 lg:col-span-1',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
    title: 'PIONEER URBAN',
    colSpan: 'sm:col-span-2 lg:col-span-2',
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1734079692147-c6fc9438a2d0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'AMWAY GREENS',
    colSpan: 'sm:col-span-1 lg:col-span-1',
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    title: 'THE INDIAN GARDEN',
    colSpan: 'sm:col-span-1 lg:col-span-1',
  },
  {
    id: 7,
    img: 'https://images.unsplash.com/photo-1681465766418-6474cfdcbb3c?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'SUMADHURA',
    colSpan: 'sm:col-span-1 lg:col-span-1',
  },
  {
    id: 8,
    img: 'https://images.unsplash.com/photo-1645526629357-16bbd762c8d5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'CAMPARI GROUP',
    colSpan: 'sm:col-span-1 lg:col-span-2',
  },
  {
    id: 9,
    img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&q=80',
    title: 'VERDANT VISTAS',
    colSpan: 'sm:col-span-2 lg:col-span-1',
  }
];

export const LandscapesInAction = () => {
  return (
    <section className="py-24 w-full max-w-[1600px] mx-auto px-6 md:px-12 xl:px-24">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {projects.slice(0, 7).map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
            className={`relative group overflow-hidden bg-surface-container-low rounded-2xl h-[300px] md:h-[400px] ${project.colSpan}`}
          >
            <img 
              src={project.img} 
              alt={project.title} 
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-white font-montserrat font-bold text-xl md:text-2xl tracking-wider">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 flex justify-center">
        <Link 
          to="/projects" 
          className="relative overflow-hidden group bg-[#141414] text-white w-full sm:w-[500px] py-4 rounded-md font-medium text-center flex items-center justify-center shadow-sm transition-transform duration-300 hover:shadow-lg hover:scale-[1.03] hover:-translate-y-0.5"
        >
          <span className="absolute inset-0 w-full h-full bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[0.5s] ease-[cubic-bezier(0.8,0,0.2,1)] z-0"></span>
          <span className="relative z-10 group-hover:text-[#141414] transition-colors duration-[0.5s] flex items-center gap-1">See all projects &rarr;</span>
        </Link>
      </div>
    </section>
  );
};

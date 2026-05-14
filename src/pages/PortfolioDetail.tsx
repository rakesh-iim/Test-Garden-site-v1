import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PORTFOLIO_ITEMS } from '../constants';
import { ArrowLeft, ExternalLink, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const PortfolioDetail = () => {
  const { itemId } = useParams<{ itemId: string }>();
  const project = PORTFOLIO_ITEMS.find((item) => item.id === itemId);

  if (!project) {
    return (
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-display font-bold mb-4">Project Not Found</h1>
        <p className="text-on-surface-variant mb-8">The project you are looking for does not exist or has been removed.</p>
        <Link to="/portfolio" className="inline-flex items-center gap-2 bg-primary-container text-on-primary font-bold px-6 py-3 rounded-full hover-lift shadow-lg">
          <ArrowLeft size={20} />
          Back to Portfolio
        </Link>
      </div>
    );
  }

  // Find related projects (e.g., matching category or services, but for simplicity just pick next 2)
  const currentIndex = PORTFOLIO_ITEMS.findIndex((item) => item.id === itemId);
  const relatedProjects = [
    PORTFOLIO_ITEMS[(currentIndex + 1) % PORTFOLIO_ITEMS.length],
    PORTFOLIO_ITEMS[(currentIndex + 2) % PORTFOLIO_ITEMS.length]
  ];

  return (
    <div className="pt-20 pb-24">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] w-full bg-surface-container-low mb-16">
        <img 
          src={project.img} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
          <div className="max-w-7xl mx-auto px-6 pb-12 w-full">
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium mb-6 transition-colors">
              <ArrowLeft size={18} />
              Back to Portfolio
            </Link>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-bold text-white mb-4 shadow-black/10 drop-shadow-lg"
            >
              {project.title}
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap gap-4 text-white/90 font-medium"
            >
              <span className="flex items-center gap-1.5 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full">
                <MapPin size={16} /> {project.location}
              </span>
              <span className="flex items-center gap-1.5 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full">
                <Calendar size={16} /> Completed {project.year}
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-display font-bold mb-6 text-on-surface">About The Project</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
              {project.description}
            </p>
            
            <h3 className="text-2xl font-display font-bold mb-6 text-on-surface">Key Services Provided</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {project.services.map((service, idx) => (
                <li key={idx} className="flex items-center gap-3 bg-surface-container-low p-4 rounded-xl border border-surface-container-highest">
                  <CheckCircle2 className="text-primary-container shrink-0" size={24} />
                  <span className="font-semibold text-on-surface">{service}</span>
                </li>
              ))}
            </ul>

            {/* A placeholder for more images if available, we'll just show the hero image again to simulate gallery */}
            <h3 className="text-2xl font-display font-bold mb-6 text-on-surface">Project Gallery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-surface-container-low">
                <img src={project.img} alt={`${project.title} detail`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden bg-surface-container-low">
                <img src={project.img} alt={`${project.title} alternate view`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 [filter:contrast(1.1)_brightness(0.9)]" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-surface-container-lowest p-8 rounded-3xl ambient-shadow sticky top-24 border border-surface-container-highest/50"
          >
            <h3 className="text-xl font-display font-bold mb-6 text-on-surface">Project Details</h3>
            <div className="space-y-6 mb-8">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">Category</div>
                <div className="font-medium text-on-surface">{project.category}</div>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">Location</div>
                <div className="font-medium text-on-surface">{project.location}</div>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">Completion</div>
                <div className="font-medium text-on-surface">{project.year}</div>
              </div>
            </div>
            
            <div className="pt-6 border-t border-surface-container-highest">
              <h4 className="font-display font-bold mb-4">Like what you see?</h4>
              <Link to="/contact" className="flex items-center justify-center gap-2 w-full bg-primary-container text-on-primary font-bold py-4 rounded-xl hover-lift shadow-md">
                Start Your Project
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Related Projects Section */}
      <div className="max-w-7xl mx-auto px-6 mt-24 pt-16 border-t border-surface-container-low">
        <h2 className="text-3xl font-display font-bold mb-8 text-on-surface">More From Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {relatedProjects.map((rel) => (
            <Link key={rel.id} to={`/portfolio/${rel.id}`} className="group block">
              <div className="relative overflow-hidden rounded-2xl aspect-video mb-4 bg-surface-container-low">
                <img 
                  src={rel.img} 
                  alt={rel.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute bottom-4 right-4 bg-white text-on-surface rounded-full p-3 transform translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 shadow-xl">
                  <ExternalLink size={20} />
                </div>
              </div>
              <h3 className="text-xl font-display font-bold group-hover:text-primary transition-colors">{rel.title}</h3>
              <p className="text-on-surface-variant font-medium">{rel.category}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

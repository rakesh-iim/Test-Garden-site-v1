import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_ITEMS } from '../constants';
import { Facebook, Twitter, Linkedin, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Gallery = () => {
  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <span className="inline-block bg-primary-container/10 text-primary-container font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
          Gallery
        </span>
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Recent Transformations</h1>
        <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
          A glimpse into the lush, vibrant environments we've cultivated for our clients. Every project is uniquely tailored to the estate's architecture.
        </p>
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
          hidden: {}
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {PORTFOLIO_ITEMS.map((it, i) => (
          <motion.div 
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="group w-full"
          >
            <Link to={`/gallery/${it.id}`} className="block cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-6 ambient-shadow bg-black/10">
                <img 
                  src={it.img} 
                  alt={it.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 delay-100">
                    <button className="p-2 bg-white/20 hover:bg-primary rounded-full backdrop-blur-md text-white transition-colors" aria-label="Share on Twitter" onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.origin + `/gallery/${it.id}`)}&text=${encodeURIComponent(`Check out ${it.title}`)}`, '_blank', 'noopener,noreferrer'); }}>
                      <Twitter size={16} />
                    </button>
                    <button className="p-2 bg-white/20 hover:bg-primary rounded-full backdrop-blur-md text-white transition-colors" aria-label="Share on Facebook" onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.origin + `/gallery/${it.id}`)}`, '_blank', 'noopener,noreferrer'); }}>
                      <Facebook size={16} />
                    </button>
                    <button className="p-2 bg-white/20 hover:bg-primary rounded-full backdrop-blur-md text-white transition-colors" aria-label="Share on LinkedIn" onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.origin + `/gallery/${it.id}`)}&title=${encodeURIComponent(it.title)}`, '_blank', 'noopener,noreferrer'); }}>
                      <Linkedin size={16} />
                    </button>
                  </div>
                  <h3 className="text-white text-2xl font-display font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">{it.title}</h3>
                  <p className="text-white/80 font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-150 mb-3">{it.category}</p>
                  
                  <div className="flex items-center gap-4 text-white/90 text-sm font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200">
                    {it.location && (
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-primary-fixed" />
                        {it.location}
                      </span>
                    )}
                    {it.year && (
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-primary-fixed" />
                        {it.year}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors duration-300">{it.title}</h3>
              <p className="text-on-surface-variant font-medium mb-4">{it.category}</p>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

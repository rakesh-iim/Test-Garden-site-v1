import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trees, ChevronLeft, ChevronRight } from 'lucide-react';
import { IMAGES, TESTIMONIALS } from '../constants';

export const AboutUs = () => {
  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-on-surface">About Us</h1>
        <p className="text-xl text-on-surface-variant max-w-3xl leading-relaxed">
          Rooted in quality, we have been cultivating lush, high-end environments for over a decade. Our passion for organic precision ensures that every project we touch thrives.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-4xl font-display font-bold mb-6">Our Philosophy</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              We don't just plant; we orchestrate ecosystems. From initial concept to final execution, our design team works tirelessly to bridge the gap between nature and architecture. Our approach is founded on sustainable practices and breathtaking aesthetics.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ staggerChildren: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-surface-container-lowest p-8 rounded-2xl ambient-shadow border-l-4 border-primary"
            >
              <div className="text-5xl font-display font-extrabold text-primary-container mb-2">15+</div>
              <div className="font-bold text-on-surface-variant text-sm uppercase tracking-wider">Years Cultivating</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-surface-container-lowest p-8 rounded-2xl ambient-shadow border-l-4 border-secondary"
            >
              <div className="text-5xl font-display font-extrabold text-secondary mb-2">500</div>
              <div className="font-bold text-on-surface-variant text-sm uppercase tracking-wider">Estates Managed</div>
            </motion.div>
          </motion.div>
        </div>

        <div className="relative h-[650px]">
          <img 
            src={IMAGES.landscaper} 
            alt="Professional landscaper" 
            className="absolute left-0 top-0 w-[85%] h-[80%] object-cover rounded-2xl ambient-shadow z-10"
          />
          <img 
            src={IMAGES.foliage} 
            alt="Lush foliage" 
            className="absolute right-0 bottom-0 w-2/3 h-2/3 object-cover rounded-2xl shadow-2xl border-[12px] border-surface z-20"
          />
        </div>
      </div>
    </div>
  );
};

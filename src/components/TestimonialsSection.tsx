import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trees, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <span className="inline-block bg-secondary/10 text-secondary font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
          Stories
        </span>
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Client Stories</h1>
        <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
          See what our clients have to say about the lush escapes we've built for them.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-tertiary-container text-white p-10 md:p-14 rounded-3xl shadow-xl relative overflow-hidden"
        >
          <div className="absolute -right-8 -bottom-8 opacity-10 rotate-12">
            <Trees size={240} strokeWidth={1} />
          </div>
          
          <div className="flex justify-between items-center mb-10 relative z-10 w-full">
            <h3 className="text-2xl font-display font-bold text-white">Testimonial</h3>
            <div className="flex gap-2">
              <button onClick={prevTestimonial} className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm cursor-pointer" aria-label="Previous testimonial">
                <ChevronLeft size={24} />
              </button>
              <button onClick={nextTestimonial} className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm cursor-pointer" aria-label="Next testimonial">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="relative z-10 min-h-[250px] flex flex-col justify-between">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentTestimonial}
                custom={direction}
                initial={(d: number) => ({ opacity: 0, x: d > 0 ? 50 : -50, scale: 0.95 })}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={(d: number) => ({ opacity: 0, x: d > 0 ? -50 : 50, scale: 0.95 })}
                transition={{ duration: 0.5, type: 'spring', bounce: 0.3 }}
                className="flex flex-col h-full justify-between gap-6"
              >
                <p className="text-xl md:text-2xl italic text-white/95 leading-relaxed font-serif">
                  "{TESTIMONIALS[currentTestimonial].quote}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <img 
                    src={TESTIMONIALS[currentTestimonial].avatar} 
                    alt={TESTIMONIALS[currentTestimonial].name} 
                    loading="lazy"
                    className="w-16 h-16 rounded-full border-4 border-white/20 object-cover bg-white/10"
                  />
                  <div>
                    <div className="font-bold text-base tracking-widest uppercase text-white">{TESTIMONIALS[currentTestimonial].name}</div>
                    <div className="text-sm text-white/70 font-medium tracking-wider">{TESTIMONIALS[currentTestimonial].location}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
        
        <div className="flex flex-col gap-6">
          {TESTIMONIALS.map((test, index) => (
             <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-black/5"
            >
              <p className="text-on-surface-variant italic mb-4">"{test.quote}"</p>
              <div className="flex items-center gap-3">
                  <img 
                    src={test.avatar} 
                    alt={test.name} 
                    loading="lazy"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-sm text-on-surface">{test.name}</div>
                    <div className="text-xs text-on-surface-variant font-medium">{test.location}</div>
                  </div>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { LeadGen } from '../components/LeadGen';

export const ContactUs = () => {
  return (
    <div className="pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center pt-12 pb-8 max-w-3xl mx-auto px-6"
      >
        <span className="inline-block bg-primary-container/10 text-primary-container font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
          Contact
        </span>
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Let's Cultivate Something Beautiful</h1>
      </motion.div>
      <LeadGen simplified={false} />
    </div>
  );
};

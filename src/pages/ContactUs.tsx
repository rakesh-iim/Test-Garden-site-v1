import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { LeadGen } from '../components/LeadGen';

export const ContactUs = () => {
  return (
    <div className="pt-20">
      <Helmet>
        <title>Contact Us</title>
        <meta name="description" content="Get in touch with MrGardenr to discuss your next landscaping project. Request a quote for your Terrace, Balcony, Penthouse, or Office green space today." />
        <meta name="keywords" content="contact mrgardenr, landscaping quote, request garden design, hire a landscaper" />
      </Helmet>
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

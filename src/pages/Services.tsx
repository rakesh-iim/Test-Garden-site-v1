import React from 'react';
import { motion } from 'motion/react';
import { Palette, Sprout, Grid2X2, Leaf, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../constants';
import { Link } from 'react-router-dom';

export const Services = () => {
  const services = [
    {
      title: "Garden Design",
      desc: "Expertly curated layouts that balance saturated botanical tones with pristine structures. We work closely with clients to understand their vision and translate it into a living masterpiece.",
      icon: Palette,
      color: "bg-primary-container/10",
      textColor: "text-primary-container",
      image: IMAGES.blueprints
    },
    {
      title: "Lawn Care",
      desc: "Precision mowing, aeration, and fertilization to maintain a vibrant, high-energy green canvas. Our comprehensive care schedules keep your grass thriving year-round.",
      icon: Sprout,
      color: "bg-primary-container",
      textColor: "text-on-primary",
      theme: "dark"
    },
    {
      title: "Hardscaping",
      desc: "Structurally sound stonework, pathways, retaining walls, and patios that provide architectural \"breathing room\" amidst organic elements.",
      icon: Grid2X2,
      color: "bg-secondary-container/30",
      textColor: "text-on-secondary-container"
    },
    {
      title: "Seasonal Cleanup",
      desc: "Rigorous maintenance to clear debris, prune dead elements, and prepare your landscape for optimal growth in the upcoming season.",
      icon: Leaf,
      color: "bg-tertiary-container/10",
      textColor: "text-tertiary-container",
    }
  ];

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <span className="inline-block bg-primary-container/10 text-primary-container font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
          What We Do
        </span>
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Our Services</h1>
        <p className="text-xl text-on-surface-variant max-w-3xl leading-relaxed">
          From full masterplans to meticulous maintenance, our services are tailored to create and preserve the integrity of your landscape.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((s, i) => (
          <motion.div 
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`rounded-2xl overflow-hidden shadow-lg ${s.theme === 'dark' ? 'bg-primary-container text-white' : 'bg-surface-container-lowest text-on-surface'}`}
          >
            {s.image && (
              <div className="h-48 w-full">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
              </div>
            )}
            <div className="p-8">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm
                ${s.theme === 'dark' ? 'bg-white/20' : s.color} ${s.textColor}`}>
                <s.icon size={28} />
              </div>
              <h3 className={`text-3xl font-display font-bold mb-4 ${s.theme === 'dark' ? 'text-white' : 'text-on-surface'}`}>{s.title}</h3>
              <p className={`text-lg leading-relaxed mb-8 ${s.theme === 'dark' ? 'text-white/80' : 'text-on-surface-variant'}`}>{s.desc}</p>
              
              <ul className="space-y-3 mb-8">
                {[1, 2, 3].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className={s.theme === 'dark' ? 'text-primary-fixed' : 'text-primary-container'} />
                    <span className={s.theme === 'dark' ? 'text-white/90' : 'text-on-surface-variant'}>Premium offering detail {item}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/contact" className={`inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full transition-colors ${s.theme === 'dark' ? 'bg-white text-primary-container hover:bg-white/90' : 'bg-surface border border-secondary text-secondary hover:bg-primary-container/5'}`}>
                Request {s.title}
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

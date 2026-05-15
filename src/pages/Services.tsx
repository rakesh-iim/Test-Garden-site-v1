import React from 'react';
import { motion } from 'motion/react';
import { Palette, Sprout, Grid2X2, Leaf, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../constants';
import { Link } from 'react-router-dom';

export const Services = () => {
  const services = [
    {
      title: "Terrace Transformation",
      desc: "Turn your underutilized rooftop or terrace into a sky-high sanctuary. We design bespoke urban gardens with custom planters, optimal drainage, and resilient planting schemes.",
      icon: Palette,
      color: "bg-primary-container/10",
      textColor: "text-primary-container",
      image: IMAGES.blueprints
    },
    {
      title: "Balcony Makeover",
      desc: "Maximize limited space with vertical gardens, custom-built seating, and curated container planting to create a lush, intimate retreat right outside your door.",
      icon: Sprout,
      color: "bg-primary-container/10",
      textColor: "text-primary-container",
      image: IMAGES.project3
    },
    {
      title: "Penthouse Transformation",
      desc: "Elevate your penthouse exteriors with luxury landscaping, incorporating architectural stonework, dynamic lighting, and elegant, wind-resilient flora.",
      icon: Grid2X2,
      color: "bg-primary-container/10",
      textColor: "text-primary-container",
      image: IMAGES.project2
    },
    {
      title: "Institute Green Space",
      desc: "Develop vibrant, low-maintenance green spaces for educational or corporate campuses, establishing outdoor areas that inspire collaboration and provide a natural haven.",
      icon: Leaf,
      color: "bg-primary-container/10",
      textColor: "text-primary-container",
      image: IMAGES.foliage
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
            className={`rounded-2xl overflow-hidden shadow-lg bg-surface-container-lowest text-on-surface`}
          >
            {s.image && (
              <div className="h-48 w-full">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
              </div>
            )}
            <div className="p-8">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm ${s.color} ${s.textColor}`}>
                <s.icon size={28} />
              </div>
              <h3 className={`text-3xl font-display font-bold mb-4 text-on-surface`}>{s.title}</h3>
              <p className={`text-lg leading-relaxed mb-8 text-on-surface-variant`}>{s.desc}</p>
              
              <ul className="space-y-3 mb-8">
                {[1, 2, 3].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-primary-container" />
                    <span className="text-on-surface-variant">Premium offering detail {item}</span>
                  </li>
                ))}
              </ul>
              
              <Link to={`/contact?service=${encodeURIComponent(s.title)}`} className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-full transition-colors bg-primary-container text-on-primary hover-lift shadow-lg hover:shadow-xl mt-4">
                Request a Quote
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

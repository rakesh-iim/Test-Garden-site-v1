import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Palette, Sprout, Grid2X2, Leaf, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../constants';
import { Link } from 'react-router-dom';

export const Services = () => {
  const services = [
    {
      id: "terrace-transformation",
      title: "Terrace Transformation",
      desc: "Turn your underutilized rooftop or terrace into a sky-high sanctuary. We design bespoke urban gardens with custom planters, optimal drainage, and resilient planting schemes.",
      icon: Palette,
      color: "bg-primary-container/10",
      textColor: "text-primary-container",
      image: "https://images.unsplash.com/photo-1600607688066-890987f18a86?auto=format&fit=crop&q=80"
    },
    {
      id: "balcony-makeover",
      title: "Balcony Makeover",
      desc: "Maximize limited space with vertical gardens, custom-built seating, and curated container planting to create a lush, intimate retreat right outside your door.",
      icon: Sprout,
      color: "bg-primary-container/10",
      textColor: "text-primary-container",
      image: "https://images.unsplash.com/photo-1746553618662-2965b5a4ef8d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "penthouse-transformation",
      title: "Penthouse Transformation",
      desc: "Elevate your penthouse exteriors with luxury landscaping, incorporating architectural stonework, dynamic lighting, and elegant, wind-resilient flora.",
      icon: Grid2X2,
      color: "bg-primary-container/10",
      textColor: "text-primary-container",
      image: "https://images.unsplash.com/photo-1643271529376-fb122b7e36a0?q=80&w=1315&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "office-landscaping",
      title: "Office Landscaping",
      desc: "Develop vibrant, low-maintenance green spaces for educational or corporate campuses, establishing outdoor areas that inspire collaboration and provide a natural haven.",
      icon: Leaf,
      color: "bg-primary-container/10",
      textColor: "text-primary-container",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="pt-24 pb-20 w-full max-w-[1600px] mx-auto px-6 md:px-12 xl:px-24">
      <Helmet>
        <title>Our Landscaping Services | MrGardenr</title>
        <meta name="description" content="Discover our specialized landscaping services including Terrace Transformation, Balcony Makeovers, Penthouse Transformations, and Office Landscaping." />
        <meta name="keywords" content="landscape design, terrace transformation, balcony makeover, penthouse transformation, office landscaping, urban garden, custom planters, vertical gardens" />
      </Helmet>
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
            className={`rounded-2xl overflow-hidden shadow-lg bg-surface-container-lowest text-on-surface group`}
          >
            {s.image && (
              <Link to={`/services/${s.id}`} className="block h-48 w-full relative overflow-hidden">
                <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white font-bold tracking-wider uppercase text-sm border-2 border-white px-6 py-2 rounded-full backdrop-blur-md hover:bg-white hover:text-primary transition-colors">
                    View Details
                  </span>
                </div>
              </Link>
            )}
            <div className="p-8">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm ${s.color} ${s.textColor}`}>
                <s.icon size={28} />
              </div>
              <h3 className={`text-3xl font-display font-bold mb-4 text-on-surface`}>
                <Link to={`/services/${s.id}`} className="hover:text-primary transition-colors">
                  {s.title}
                </Link>
              </h3>
              <p className={`text-lg leading-relaxed mb-6 text-on-surface-variant`}>{s.desc}</p>
              
              <Link to={`/contact?service=${encodeURIComponent(s.title)}`} className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-full transition-colors bg-primary-container text-on-primary hover-lift shadow-lg hover:shadow-xl mb-8">
                Request a Quote
              </Link>

              <ul className="space-y-3">
                {[1, 2, 3].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-primary-container" />
                    <span className="text-on-surface-variant">Premium offering detail {item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ArrowRight, Palette, Sprout, Grid2X2, Leaf, Chrome as ChevronRight, Trees, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES, TESTIMONIALS } from '../constants';
import { LeadGen } from '../components/LeadGen';
import { LandscapesInAction } from '../components/LandscapesInAction';
import { TestimonialsSection } from '../components/TestimonialsSection';

import { ClientMarquee } from '../components/ClientMarquee';
import { StoreLocator } from '../components/StoreLocator';

const Hero = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <header ref={ref} className="relative pt-20 overflow-hidden bg-surface-container-low min-h-[90vh] flex items-center">
      <motion.div style={{ y }} className="absolute inset-0 z-0 scale-[1.2] origin-top">
        <img 
          src={IMAGES.hero} 
          alt="Lush garden" 
          loading="lazy"
          className="w-full h-full object-cover opacity-80 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-black/40" />
      </motion.div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 xl:px-24">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block bg-secondary-container text-on-secondary-container text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
            Premium Landscaping Services
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold text-on-surface mb-6 leading-[1.1] tracking-tight">
            Crafting Nature's <br />
            <span className="text-primary-container">Masterpieces</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant mb-10 leading-relaxed font-medium max-w-xl">
            Transform your outdoor space into a vibrant, high-energy sanctuary. We blend professional precision with organic vitality to create tropical environments that breathe.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact#book" className="relative overflow-hidden group bg-primary-container text-on-primary font-bold px-8 py-4 rounded-full flex items-center gap-3 w-fit shadow-lg border border-transparent transition-transform duration-300 hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1">
              <span className="absolute inset-0 w-full h-full bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[0.5s] ease-[cubic-bezier(0.8,0,0.2,1)] z-0"></span>
              <span className="relative z-10 group-hover:text-primary-container transition-colors duration-[0.5s]">Get a Free Quote</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:text-primary-container transition-all duration-[0.5s] group-hover:translate-x-1" />
            </Link>
            <Link to="/gallery" className="relative overflow-hidden group border-2 border-secondary text-secondary font-bold px-8 py-4 rounded-full transition-transform duration-300 hover:shadow-xl hover:scale-[1.03] hover:-translate-y-1 w-fit text-center">
              <span className="absolute inset-0 w-full h-full bg-secondary origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-[0.5s] ease-[cubic-bezier(0.8,0,0.2,1)] z-0"></span>
              <span className="relative z-10 group-hover:text-surface transition-colors duration-[0.5s]">View Gallery</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

const Expertise = () => {
  const services = [
    {
      title: "Terrace Transformation",
      id: "terrace-transformation",
      desc: "Turn your underutilized rooftop or terrace into a sky-high sanctuary. We design bespoke urban gardens with custom planters, optimal drainage, and resilient planting schemes.",
      icon: Palette,
      color: "bg-primary-container/10",
      textColor: "text-primary-container",
      large: true,
      image: "https://images.unsplash.com/photo-1600607688066-890987f18a86?auto=format&fit=crop&q=80"
    },
    {
      title: "Balcony Makeover",
      id: "balcony-makeover",
      desc: "Maximize limited space with vertical gardens, custom-built seating, and curated container planting to create a lush, intimate retreat right outside your door.",
      icon: Sprout,
      color: "bg-primary-container",
      textColor: "text-on-primary",
      theme: "magnetic"
    },
    {
      title: "Penthouse Transformation",
      id: "penthouse-transformation",
      desc: "Elevate your penthouse exteriors with luxury landscaping, incorporating architectural stonework, dynamic lighting, and elegant, wind-resilient flora.",
      icon: Grid2X2,
      color: "bg-secondary-container/30",
      textColor: "text-on-secondary-container"
    },
    {
      title: "Office Landscaping",
      id: "office-landscaping",
      desc: "Develop vibrant, low-maintenance green spaces for educational or corporate campuses, establishing outdoor areas that inspire collaboration and provide a natural haven.",
      icon: Leaf,
      color: "bg-tertiary-container/10",
      textColor: "text-tertiary-container",
      border: "border-t-4 border-tertiary-container"
    }
  ];

  return (
    <section className="py-24 w-full max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Expertise</h2>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
          Comprehensive landscaping solutions designed to cultivate vibrant, healthy, and structurally sound environments.
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
        className="grid grid-cols-1 md:grid-cols-12 gap-6"
      >
        {services.map((s, i) => (
          <motion.div 
            key={s.title}
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
            }}
            whileHover={{ y: -8, scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 25 } }}
            className={`
              ${s.large ? 'md:col-span-8' : i === 1 ? 'md:col-span-4' : 'md:col-span-6'}
              rounded-2xl p-8 ambient-shadow relative overflow-hidden group transition-colors duration-500
              ${s.theme === 'dark' ? 'bg-primary hover:bg-secondary text-white shadow-lg' : s.theme === 'magnetic' ? 'bg-primary-container text-on-primary shadow-lg' : 'bg-surface-container-lowest hover:bg-surface-container text-on-surface hover:shadow-xl border border-surface-container-low'}
              ${s.border || ''}
            `}
          >
            {s.theme === 'magnetic' && (
              <span className="absolute inset-0 w-full h-full bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[0.5s] ease-[cubic-bezier(0.8,0,0.2,1)] z-0"></span>
            )}
            {s.image && (
              <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <img src={s.image} loading="lazy" alt="" className="w-full h-full object-cover" />
              </div>
            )}
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6
                  ${s.theme === 'dark' ? 'bg-white/20' : s.theme === 'magnetic' ? 'bg-white/20 group-hover:bg-primary-container/10 transition-colors duration-[0.5s]' : s.color} ${s.theme === 'magnetic' ? 'text-on-primary' : s.textColor}`}>
                  <s.icon className={`w-6 h-6 transform transition-transform duration-300 group-hover:scale-110 ${s.theme === 'magnetic' ? 'group-hover:text-primary-container transition-colors duration-[0.5s]' : ''}`} />
                </div>
                <h3 className={`text-2xl font-display font-bold mb-3 ${s.theme === 'dark' ? 'text-white' : s.theme === 'magnetic' ? 'text-on-primary group-hover:text-primary-container transition-colors duration-[0.5s]' : 'text-on-surface group-hover:text-primary transition-colors'}`}>{s.title}</h3>
                <p className={`${s.theme === 'dark' ? 'text-white/80 group-hover:text-white transition-colors' : s.theme === 'magnetic' ? 'text-on-primary/90 group-hover:text-primary-container/90 transition-colors duration-[0.5s]' : 'text-on-surface-variant group-hover:text-on-surface transition-colors'} mb-6 leading-relaxed`}>
                  {s.desc}
                </p>
              </div>
              <Link to={`/services/${s.id}`} className={`flex items-center gap-1 font-bold text-sm ${s.theme === 'dark' ? 'text-white hover:text-white/80' : s.theme === 'magnetic' ? 'text-on-primary group-hover:text-primary-container transition-colors duration-[0.5s]' : 'text-primary-container group-hover:text-primary'} hover:underline group-hover:gap-2 transition-all`}>
                Learn more <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = 'hidden';
    // Simulate loading time for the splash screen
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'unset';
    }, 2000);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-surface flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center justify-center"
            >
              <img 
                src="/logo.png" 
                alt="MrGardenr Logo" 
                className="w-48 sm:w-64 h-auto object-contain mix-blend-multiply [clip-path:inset(0_0_20%_0)]" 
              />
              <motion.div 
                className="w-48 h-1 bg-surface-container-highest rounded-full overflow-hidden mt-8"
              >
                <motion.div 
                  className="h-full bg-primary"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Helmet>
        <title>MrGardenr | Expert Landscape Design & Transformation</title>
        <meta name="description" content="MrGardenr provides professional landscaping services. Specializing in high-end terrace transformations, balcony makeovers, and commercial office landscaping." />
        <meta name="keywords" content="expert landscape design, urban landscaping, terrace transformations, bespoke outdoor spaces, landscaping services" />
      </Helmet>
      
      <div id="home">
        <Hero />
      </div>
      
      <div id="services" className="bg-surface relative z-10">
        <Expertise />
      </div>
      
      <div id="projects" className="bg-surface-container-lowest border-y border-black/5 dark:border-white/5 relative z-10">
        <LandscapesInAction />
      </div>
      
      <div id="testimonials" className="bg-surface relative z-10">
        <TestimonialsSection />
      </div>
      
      <div className="bg-surface-container-low border-y border-black/5 dark:border-white/5 relative z-10">
        <ClientMarquee />
      </div>
      
      <div id="contact" className="bg-surface relative z-10">
        <StoreLocator />
        <LeadGen simplified={true} />
      </div>
    </>
  );
};

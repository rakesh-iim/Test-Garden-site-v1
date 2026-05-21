import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle2, ChevronRight, Leaf, Maximize, Sun, Shield, Droplets, TreeDeciduous, TreePine, Home, Compass } from 'lucide-react';
import ServiceBooking from '../../components/ServiceBooking';
import { HowItWorks } from '../../components/HowItWorks';
import { ServiceTestimonials } from '../../components/ServiceTestimonials';

export const BalconyMakeover = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  const features = [
    { title: "Custom Vertical Gardens", desc: "Space-saving living walls tailored to your sun exposure.", icon: Leaf },
    { title: "Smart Irrigation", desc: "Automated, hidden drip systems for low-maintenance care.", icon: Droplets },
    { title: "Premium Planters", desc: "Lightweight, weather-resistant materials for modern appeal.", icon: Maximize },
    { title: "Privacy Screens", desc: "Natural bamboo or climbing plants to shield from neighbors.", icon: Shield },
  ];
  

  return (
    <div className="bg-surface relative overflow-hidden">
      <Helmet>
        <title>Balcony Makeover | Premium Landscaping | MrGardenr</title>
        <meta name="description" content="Maximize your apartment balcony with custom vertical gardens, built-in seating, and curated container planting to create a lush, intimate retreat." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-end pb-24 overflow-hidden bg-black">
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0 opacity-80">
          <img src="/images/service-balcony.webp" alt="Luxury balcony garden" fetchpriority="high" decoding="async" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>
        </motion.div>
        
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 xl:px-24 flex flex-col md:flex-row gap-8 justify-between items-end">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <button 
              onClick={() => navigate(-1)} 
              className="group flex items-center gap-2 text-white/80 hover:text-primary mb-6 font-bold uppercase tracking-widest text-sm transition-colors"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Go Back
            </button>
            <div className="flex items-center gap-2 text-white/80 mb-6 text-sm font-bold uppercase tracking-widest">
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight size={14} />
              <span className="text-primary">Balcony Makeover</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
              Small spaces. <br/>
              <span className="text-primary italic">Infinite beauty.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-medium max-w-2xl">
              Turn your compact outdoor area into a lush, private sanctuary. We specialize in vertical designs that maximize space and tranquility.
            </p>
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="#book-now" className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-5 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group whitespace-nowrap">
              Start Your Makeover
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Deep Dive Content Section */}
      <section className="py-24 relative z-10 bg-surface">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-on-surface leading-tight">
                An Extension of Your <span className="text-primary">Living Space</span>
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                No balcony is too small for a green transformation. Our design philosophy focuses on extending your interior aesthetic to the outdoors, creating a seamless flow that makes your entire home feel larger and more connected to nature.
              </p>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                By utilizing vertical space, hanging installations, and custom railing planters, we keep your floor space open for seating and movement while surrounding you with vibrant, air-purifying foliage.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative aspect-square md:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <img src="/images/project-1.webp" alt="Detailed balcony greenery" loading="lazy" decoding="async" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row-reverse mb-24">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8 lg:pl-12"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-on-surface leading-tight">
                Engineered for <span className="text-primary">Urban Limits</span>
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                Urban balconies come with unique challenges: strict weight limits, high winds, and unpredictable microclimates. Our engineering background ensures every design is safe and sustainable.
              </p>
              <ul className="space-y-4">
                {[
                  "Ultra-lightweight potting mediums that reduce structural load by 60%.",
                  "Wind-resilient plant selection tailored for high-rise environments.",
                  "Self-contained drainage systems to protect your flooring and downstairs neighbors."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-on-surface-variant font-medium">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative aspect-square md:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <img src="/images/project-3.webp" alt="Urban balcony engineering" loading="lazy" decoding="async" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-bl from-primary/20 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="py-24 bg-surface-container-lowest relative">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 xl:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-4">Premium Inclusions</h2>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">Every balcony makeover is equipped with high-end features designed for longevity and low maintenance.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-surface p-8 rounded-[2rem] shadow-sm border border-black/5 dark:border-white/5 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-14 h-14 rounded-2xl bg-primary-container/20 text-primary-container flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <f.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-on-surface mb-3 relative z-10">{f.title}</h3>
                <p className="text-on-surface-variant relative z-10 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />
      
      <ServiceTestimonials />

      {/* Book Now Section */}
      <section id="book-now" className="relative py-24 bg-[#0b1612] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/booking-bg.webp" alt="Lush foliage background" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1612] via-[#0b1612]/90 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-display font-bold text-white leading-tight">
                Ready for your <br />
                <span className="text-primary-container italic">Balcony Makeover?</span>
              </h2>
              <p className="text-xl text-white/80 max-w-lg leading-relaxed">
                Schedule a consultation today and let our experts design a customized oasis just steps from your living room. 
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <h4 className="text-3xl font-bold text-white mb-2">100+</h4>
                  <p className="text-white/70 font-medium">Balconies Transformed</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <h4 className="text-3xl font-bold text-white mb-2">5 Star</h4>
                  <p className="text-white/70 font-medium">Customer Ratings</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ServiceBooking className="w-full lg:max-w-xl shadow-[0_8px_40px_rgba(0,0,0,0.3)] border-white/10 backdrop-blur-xl bg-surface/95 mx-0 lg:ml-auto rounded-[2.5rem]" />
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

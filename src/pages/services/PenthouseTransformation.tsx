import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle2, ChevronRight, Wind, ShieldCheck, Gem, Sparkles, Droplets, Leaf, TreeDeciduous, TreePine } from 'lucide-react';
import ServiceBooking from '../../components/ServiceBooking';
import { HowItWorks } from '../../components/HowItWorks';
import { ServiceTestimonials } from '../../components/ServiceTestimonials';

export const PenthouseTransformation = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);

  const features = [
    { title: "Architectural Stonework", desc: "Custom travertine and luxury stone paving.", icon: Gem },
    { title: "Specimen Trees", desc: "Mature, architectural flora craned in for immediate impact.", icon: Wind },
    { title: "Bespoke Water Features", desc: "Sleek, integrated pools and reflection ponds.", icon: Droplets },
    { title: "Smart Automation", desc: "App-controlled lighting, heating, and irrigation.", icon: Sparkles },
  ];

  return (
    <div className="bg-surface relative overflow-hidden">
      <Helmet>
        <title>Luxury Penthouse Landscaping | Premium Landscaping | MrGardenr</title>
        <meta name="description" content="Elevate your penthouse exteriors with luxury landscaping, incorporating architectural stonework, dynamic lighting, and elegant flora." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-end pb-24 overflow-hidden bg-black">
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0 opacity-80">
          <img src="/images/service-penthouse.webp" alt="Penthouse landscape" fetchpriority="high" decoding="async" className="w-full h-full object-cover" />
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
              <span className="text-primary">Penthouse</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
              Ultra-luxury <br/>
              <span className="text-primary italic">elevation.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-medium max-w-2xl">
              Craft exteriors that rival your interiors. We engineer structural landscapes with premium stonework and bespoke water features.
            </p>
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="#book-now" className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-5 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group whitespace-nowrap">
              Commission Project
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
                An Extension of <span className="text-primary">Excellence</span>
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                Our penthouse transformation service is tailored specifically for high-end luxury requirements, where architecture and nature blend seamlessly.
              </p>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                We view the outdoor terrace not just as an add-on, but as the crowning jewel of your residence. By matching interior sightlines and utilizing premium imported materials, we ensure the transition from inside to out is flawlessly executed.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative aspect-square md:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <img src="/images/latest-dlf-botanicals.webp" alt="Luxury penthouse architecture" loading="lazy" decoding="async" className="w-full h-full object-cover" />
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
                Engineered for the <span className="text-primary">Elements</span>
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                High-altitude gardening introduces severe wind shear, intense sun exposure, and strict structural weight capacities. Our horticultural engineers mitigate these risks flawlessly.
              </p>
              <ul className="space-y-4">
                {[
                  "Rigorous structural load assessments and weight distribution strategies.",
                  "Wind-baffling planting designs and resilient glass balustrades.",
                  "Fully automated micro-drip irrigation and architectural lighting."
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
              <img src="/images/latest-sumadhura.webp" alt="Penthouse elements" loading="lazy" decoding="async" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-bl from-primary/20 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="py-24 bg-surface-container-lowest relative">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 xl:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-4">Uncompromising Quality</h2>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">Every penthouse project features ultra-premium materials and smart home integration.</p>
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
                <div className="w-14 h-14 rounded-2xl bg-primary/20 text-on-surface flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {typeof f.icon === 'function' ? <f.icon /> : <f.icon size={28} />}
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
      <section id="book-now" className="relative py-24 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/booking-bg.webp" alt="Penthouse background" className="w-full h-full object-cover opacity-10 mix-blend-luminosity grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-transparent"></div>
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
                Commission your <br />
                <span className="text-primary italic">Skyline Retreat.</span>
              </h2>
              <p className="text-xl text-white/80 max-w-lg leading-relaxed">
                Connect with our principal landscape architects to begin drafting the blueprint for your ultimate penthouse exterior.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <h4 className="text-3xl font-bold text-white mb-2">Exclusive</h4>
                  <p className="text-white/70 font-medium">Bespoke Design</p>
                </div>
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <h4 className="text-3xl font-bold text-white mb-2">Discreet</h4>
                  <p className="text-white/70 font-medium">White-Glove Service</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ServiceBooking className="w-full lg:max-w-xl shadow-[0_8px_40px_rgba(0,0,0,0.5)] border-white/10 backdrop-blur-xl bg-surface/95 mx-0 lg:ml-auto rounded-[2.5rem]" />
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

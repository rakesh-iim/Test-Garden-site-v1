import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle2, ChevronRight, Wind, ShieldCheck, Gem, Sparkles, Droplets, Leaf, TreeDeciduous, TreePine } from 'lucide-react';
import ServiceBooking from '../../components/ServiceBooking';

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
  
  const process = [
    { step: "Architectural Collaboration", desc: "We work directly with your interior designer and structural engineer." },
    { step: "Microclimate Curation", desc: "Selecting robust, wind-resistant flora capable of thriving at elevation." },
    { step: "White-Glove Fabrication", desc: "Custom sourcing of premium Italian ceramics, lighting, and stonework." },
    { step: "Zero-Defect Delivery", desc: "Meticulous installation with comprehensive site protection protocols." }
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
              className="group flex items-center gap-2 text-white/80 hover:text-secondary-container mb-6 font-bold uppercase tracking-widest text-sm transition-colors"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Go Back
            </button>
            <div className="flex items-center gap-2 text-white/80 mb-6 text-sm font-bold uppercase tracking-widest">
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight size={14} />
              <span className="text-secondary-container">Penthouse</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
              Ultra-luxury <br/>
              <span className="text-secondary-container italic">elevation.</span>
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
            <a href="#book-now" className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-8 py-5 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group whitespace-nowrap">
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
                An Extension of <span className="text-secondary-container">Excellence</span>
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
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary-container/20 to-transparent"></div>
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
                    <CheckCircle2 className="text-secondary-container shrink-0 mt-1" size={20} />
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
                <div className="absolute inset-0 bg-gradient-to-br from-secondary-container/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-14 h-14 rounded-2xl bg-secondary-container/20 text-on-surface flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {typeof f.icon === 'function' ? <f.icon /> : <f.icon size={28} />}
                </div>
                <h3 className="text-xl font-bold text-on-surface mb-3 relative z-10">{f.title}</h3>
                <p className="text-on-surface-variant relative z-10 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 relative overflow-hidden bg-surface">
        {/* Background Image Backdrop with Premium Transparency and Effects */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.06] dark:opacity-[0.04] grayscale contrast-125 transition-all duration-500 pointer-events-none"
          style={{ backgroundImage: `url('/images/service-penthouse.webp')` }}
        />
        {/* Soft Premium Gradients to fade image edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface/80 to-surface pointer-events-none" />
        
        {/* Ambient Radial Glows */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary-container/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
        
        {/* Grid Overlay for Subtle Architectural Feel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
        
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 xl:px-24 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-secondary-container font-bold tracking-widest uppercase text-sm mb-3 block">Methodology</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-on-surface">
                Our Executive Process
              </h2>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-secondary-container/5 before:via-secondary-container/20 before:to-secondary-container/5">
              {process.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative flex items-center group"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-surface bg-secondary-container text-on-secondary-container font-bold shadow-lg shrink-0 z-10 transition-transform duration-500 group-hover:scale-125 group-hover:shadow-secondary-container/50 md:absolute md:left-1/2 md:-translate-x-1/2">
                    {idx + 1}
                  </div>
                  <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-[2rem] bg-surface-container-lowest shadow-md border border-black/5 dark:border-white/5 relative overflow-hidden ml-6 md:ml-0 group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300 ${idx % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                    <div className="absolute -right-4 -bottom-4 text-6xl font-display font-black text-black/5 dark:text-white/5 group-hover:text-secondary-container/10 transition-colors duration-500">
                      0{idx + 1}
                    </div>
                    <h4 className="text-xl font-bold text-on-surface mb-2 relative z-10">{step.step}</h4>
                    <p className="text-on-surface-variant leading-relaxed relative z-10 text-base">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
                <span className="text-secondary-container italic">Skyline Retreat.</span>
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

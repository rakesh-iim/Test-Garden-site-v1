import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle2, ChevronRight, Leaf, Users, Building, Droplets, Sun } from 'lucide-react';
import ServiceBooking from '../../components/ServiceBooking';

export const OfficeLandscaping = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);

  const features = [
    { title: "Collaborative Zones", desc: "Outdoor seating and meeting areas designed for focus and teamwork.", icon: Users },
    { title: "Biophilic Design", desc: "Seamless integration of indoor and outdoor plant life.", icon: Building },
    { title: "Drought-Tolerant Plants", desc: "Low-maintenance native species that thrive in corporate settings.", icon: Sun },
    { title: "Smart Irrigation", desc: "Water-efficient drip systems tailored to large-scale campuses.", icon: Droplets },
  ];
  
  const process = [
    { step: "Campus Assessment", desc: "We evaluate pedestrian flow, sunlight, and corporate culture." },
    { step: "Biophilic Strategy", desc: "Designing green corridors, living walls, and shaded meeting hubs." },
    { step: "Sustainable Installation", desc: "Implementing smart water management and low-maintenance flora." },
    { step: "Ongoing Maintenance", desc: "Providing regular care to ensure year-round vibrancy and health." }
  ];

  return (
    <div className="bg-surface relative overflow-hidden">
      <Helmet>
        <title>Office & Corporate Landscaping | Premium Landscaping | MrGardenr</title>
        <meta name="description" content="Develop vibrant, low-maintenance green spaces for corporate campuses that inspire collaboration and boost employee morale." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-end pb-24 overflow-hidden bg-black">
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0 opacity-80">
          <img src="/images/service-office.webp" alt="Corporate office landscaping" className="w-full h-full object-cover" />
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
              className="group flex items-center gap-2 text-white/80 hover:text-[#3b82f6] mb-6 font-bold uppercase tracking-widest text-sm transition-colors"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Go Back
            </button>
            <div className="flex items-center gap-2 text-white/80 mb-6 text-sm font-bold uppercase tracking-widest">
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight size={14} />
              <span className="text-[#3b82f6]">Office Landscaping</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
              Green minds. <br/>
              <span className="text-[#3b82f6] italic">Great work.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-medium max-w-2xl">
              Transform corporate campuses into vibrant hubs of productivity. We design low-maintenance green spaces that inspire collaboration.
            </p>
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="#book-now" className="inline-flex items-center gap-2 bg-[#3b82f6] text-white px-8 py-5 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group whitespace-nowrap">
              Partner With Us
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
                Enhance Morale & <span className="text-[#3b82f6]">Productivity</span>
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                Modern workspaces require more than just desks and screens. Integrating biophilic design into corporate environments has been proven to reduce stress, improve air quality, and boost overall employee morale.
              </p>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                From striking entrance landscapes that impress visiting clients to serene courtyards that offer employees a mental reset, our corporate landscaping services balance aesthetic impact with practical, low-maintenance longevity.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative aspect-square md:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <img src="/images/latest-amway.webp" alt="Corporate courtyard landscaping" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#3b82f6]/20 to-transparent"></div>
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
                Sustainable & <span className="text-primary">Scalable</span>
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                Corporate landscaping must be scalable and sustainable. We prioritize water conservation and resilient native planting to ensure your campus looks pristine year-round with minimal intervention.
              </p>
              <ul className="space-y-4">
                {[
                  "Smart irrigation systems that adapt to local weather patterns.",
                  "Drought-resistant flora that reduces long-term water consumption.",
                  "Comprehensive maintenance plans tailored to commercial properties."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-on-surface-variant font-medium">
                    <CheckCircle2 className="text-[#3b82f6] shrink-0 mt-1" size={20} />
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
              <img src="/images/latest-campari.webp" alt="Sustainable corporate landscaping" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-bl from-primary/20 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="py-24 bg-surface-container-lowest relative">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 xl:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-on-surface mb-4">Corporate Inclusions</h2>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">Our office landscaping services include premium features designed for high-traffic environments.</p>
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
                <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-14 h-14 rounded-2xl bg-[#3b82f6]/10 text-[#3b82f6] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <f.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-on-surface mb-3 relative z-10">{f.title}</h3>
                <p className="text-on-surface-variant relative z-10 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 relative overflow-hidden bg-surface">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#3b82f6]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 xl:px-24 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-[#3b82f6] font-bold tracking-widest uppercase text-sm mb-3 block">Methodology</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-on-surface">
                Our Corporate Process
              </h2>
            </div>
            
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-[#3b82f6]/5 before:via-[#3b82f6]/20 before:to-[#3b82f6]/5">
              {process.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative flex items-center group"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-surface bg-[#3b82f6] text-white font-bold shadow-lg shrink-0 z-10 transition-transform duration-500 group-hover:scale-125 group-hover:shadow-[#3b82f6]/50 md:absolute md:left-1/2 md:-translate-x-1/2">
                    {idx + 1}
                  </div>
                  <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-[2rem] bg-surface-container-lowest shadow-md border border-black/5 dark:border-white/5 relative overflow-hidden ml-6 md:ml-0 group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300 ${idx % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                    <div className="absolute -right-4 -bottom-4 text-8xl font-display font-black text-black/5 dark:text-white/5 group-hover:text-[#3b82f6]/10 transition-colors duration-500">
                      0{idx + 1}
                    </div>
                    <h4 className="text-2xl font-bold text-on-surface mb-3 relative z-10">{step.step}</h4>
                    <p className="text-on-surface-variant leading-relaxed relative z-10 text-lg">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Book Now Section */}
      <section id="book-now" className="relative py-24 bg-[#081017] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/booking-bg.webp" alt="Corporate background" className="w-full h-full object-cover opacity-10 mix-blend-luminosity grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#081017] via-[#081017]/90 to-transparent"></div>
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
                Transform your <br />
                <span className="text-[#3b82f6] italic">Corporate Campus.</span>
              </h2>
              <p className="text-xl text-white/80 max-w-lg leading-relaxed">
                Partner with us to create a landscape that reflects your brand's excellence and commitment to sustainability.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <h4 className="text-3xl font-bold text-white mb-2">50+</h4>
                  <p className="text-white/70 font-medium">Corporate Clients</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <h4 className="text-3xl font-bold text-white mb-2">1M+</h4>
                  <p className="text-white/70 font-medium">Sq. Ft. Landscaped</p>
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

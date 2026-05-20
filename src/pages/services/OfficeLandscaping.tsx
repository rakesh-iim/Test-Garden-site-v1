import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight, Leaf } from 'lucide-react';

export const OfficeLandscaping = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  const features = [
    "Low-maintenance corporate planting designs",
    "Outdoor collaborative zones and seating",
    "Hardy, climate-appropriate flora",
    "Sustainable water management systems",
    "Biophilic design integration indoors and outdoors"
  ];
  
  const benefits = [
    "Boosts employee morale and productivity via biophilia",
    "Creates striking entryways for visiting clients",
    "Reduces campus ambient temperatures",
    "Demonstrates a corporate commitment to sustainability"
  ];
  
  const process = [
    { step: "Corporate Consultation", desc: "Understanding the company culture, brand, and target usage." },
    { step: "Flow & Function Design", desc: "Strategizing seating, shade, and low-maintenance green corridors." },
    { step: "Sustainable Setup", desc: "Implementing smart irrigation and native plant integration." },
    { step: "Ongoing Care", desc: "Establishing a regular maintenance cadence for year-round beauty." }
  ];

  return (
    <div className="bg-surface relative overflow-hidden">
      <Helmet>
        <title>Office Landscaping | MrGardenr</title>
        <meta name="description" content="Develop vibrant, low-maintenance green spaces for corporate campuses, establishing outdoor areas that inspire collaboration." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-end pb-24 overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img src="/images/service-office.webp" alt="Office landscape" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"></div>
        </motion.div>
        
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 xl:px-24 flex flex-col md:flex-row gap-8 justify-between items-end">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 text-white/80 mb-4 text-sm font-bold uppercase tracking-widest">
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight size={14} />
              <span className="text-[#3b82f6] text-white">Office Landscaping</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
              Green minds, <span className="text-[#3b82f6] italic">great work.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium">
              Develop vibrant, low-maintenance green spaces for corporate campuses that inspire collaboration and provide a natural haven.
            </p>
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/contact?service=Office+Landscaping" className="inline-flex items-center gap-2 bg-[#3b82f6] text-white px-8 py-5 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group whitespace-nowrap">
              Partner With Us
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 relative z-10 bg-surface">
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Content */}
            <div className="lg:col-span-8">
              <div className="prose prose-lg dark:prose-invert max-w-none text-on-surface-variant font-medium leading-relaxed mb-16">
                <p className="text-2xl text-on-surface leading-normal mb-8">
                  Transform corporate or educational environments with purposeful green spaces that enhance well-being, reduce stress, and boost productivity. 
                </p>
                <p>
                  Our office landscaping service balances aesthetic appeal with low-maintenance requirements. We design cohesive, robust landscapes that create collaborative outdoor areas, peaceful retreats, and impressive entryways. From sustainable water management to biophilic indoor-outdoor transitions, we align our designs with your corporate identity and sustainability goals.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                <div className="bg-surface-container-low p-10 rounded-[2rem] shadow-sm">
                  <h3 className="text-2xl font-display font-bold mb-6 text-on-surface">What's Included</h3>
                  <ul className="space-y-4">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-on-surface-variant font-medium">
                        <CheckCircle2 className="text-[#3b82f6] shrink-0 mt-1" size={24} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-[#3b82f6]/5 border border-[#3b82f6]/10 p-10 rounded-[2rem]">
                  <h3 className="text-2xl font-display font-bold mb-6 text-on-surface">Key Benefits</h3>
                  <ul className="space-y-6">
                    {benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-on-surface-variant font-medium">
                        <div className="w-8 h-8 rounded-full bg-[#3b82f6]/20 text-[#3b82f6] flex items-center justify-center font-bold shrink-0">{idx + 1}</div>
                        <span className="pt-1">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

            {/* Sidebar Sticky */}
            <div className="lg:col-span-4 max-lg:hidden">
              <div className="sticky top-32 p-8 rounded-[2rem] bg-surface-container-high shadow-lg border border-black/5 dark:border-white/5">
                <img src="/images/service-office-home.webp" alt="Corporate layout" className="w-full h-48 object-cover rounded-2xl mb-6 shadow-inner" />
                <h3 className="text-2xl font-display font-bold mb-4 text-on-surface">Corporate Landscaping</h3>
                <p className="text-on-surface-variant mb-6 font-medium">Schedule a site visit to evaluate your campus's potential.</p>
                <Link to="/contact?service=Office+Landscaping" className="flex items-center justify-center gap-2 w-full bg-[#3b82f6] text-white px-6 py-4 rounded-xl font-bold shadow-md hover:bg-[#3b82f6]/90 transition-colors">
                  Contact Us Today
                </Link>
              </div>
            </div>

          </div>
          
          <div className="mt-24 max-w-5xl mx-auto">
            <div className="text-center mb-16 relative">
              <span className="text-[#3b82f6] font-bold tracking-widest uppercase text-sm mb-3 block">Methodology</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-on-surface">
                Our Process
              </h2>
            </div>
            
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#3b82f6]/20 before:to-transparent">
              {process.map((step, idx) => (
                <div key={idx} className="relative flex items-center group">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-surface bg-[#3b82f6] text-white font-bold text-sm shrink-0 z-10 transition-transform group-hover:scale-110 md:absolute md:left-1/2 md:-translate-x-1/2">
                    {idx + 1}
                  </div>
                  <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-4rem)] bg-surface-container-lowest p-6 md:p-8 rounded-[2rem] shadow-sm border border-black/5 dark:border-white/5 relative overflow-hidden ml-6 md:ml-0 group-hover:shadow-md transition-shadow ${idx % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                    <div className="absolute top-0 right-0 p-6 text-6xl font-display font-black text-black/5 dark:text-white/5 group-hover:text-[#3b82f6]/10 transition-colors">
                      0{idx + 1}
                    </div>
                    <h4 className="text-xl font-bold text-on-surface mb-3 relative z-10">{step.step}</h4>
                    <p className="text-on-surface-variant leading-relaxed relative z-10">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight, Leaf } from 'lucide-react';

export const TerraceTransformation = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  const features = [
    "Custom, weather-resistant planters",
    "Specialized rooftop drainage solutions",
    "Wind and sun-resilient planting schemes",
    "Built-in seating and lounge areas",
    "Integrated ambient lighting"
  ];
  
  const benefits = [
    "Increases property value and appeal",
    "Creates a private, open-air entertainment area",
    "Improves urban biodiversity and air quality",
    "Provides natural thermal insulation for the building"
  ];
  
  const process = [
    { step: "Initial Vision", desc: "Detailed consultation focusing on your style, space requirements, and budget." },
    { step: "Structural Check", desc: "Evaluating load capacities, wind exposure, and water access points." },
    { step: "Design Blueprint", desc: "Custom 3D rendering and planting palette selection." },
    { step: "Execution", desc: "Seamless installation of hardscaping, planters, and vegetation." }
  ];

  return (
    <div className="bg-surface relative overflow-hidden">
      <Helmet>
        <title>Terrace Transformation | MrGardenr</title>
        <meta name="description" content="Turn your underutilized rooftop or terrace into a sky-high sanctuary. We design bespoke urban gardens with custom planters and resilient planting schemes." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-end pb-24 overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1600607688066-890987f18a86?auto=format&fit=crop&q=80" alt="Lush terrace garden" className="w-full h-full object-cover" />
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
              <span className="text-primary text-white">Terrace Transformation</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
              Elevate your <span className="text-primary-container italic">urban view.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium">
              Turn your underutilized rooftop or terrace into a sky-high sanctuary. We design bespoke urban gardens.
            </p>
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/contact?service=Terrace+Transformation" className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-5 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group whitespace-nowrap">
              Start Your Transformation
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
                  Terraces present a unique opportunity to create a private oasis elevated above the city bustles. Our terrace transformation service encompasses an end-to-end design and installation process that takes your outdoor space from concrete slab to an immersive green sanctuary.
                </p>
                <p>
                  We understand that rooftop environments are uniquely challenging. High winds, intense sun exposure, and strict structural weight limits define the space. Our expert team navigates these complexities, utilizing lightweight soils, wind-baffling plant structures, and advanced irrigation to ensure your garden thrives year-round.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                <div className="bg-surface-container-low p-10 rounded-[2rem] shadow-sm">
                  <h3 className="text-2xl font-display font-bold mb-6 text-on-surface">What's Included</h3>
                  <ul className="space-y-4">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-on-surface-variant font-medium">
                        <CheckCircle2 className="text-primary shrink-0 mt-1" size={24} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-primary/5 border border-primary/10 p-10 rounded-[2rem]">
                  <h3 className="text-2xl font-display font-bold mb-6 text-on-surface">Key Benefits</h3>
                  <ul className="space-y-6">
                    {benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-on-surface-variant font-medium">
                        <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold shrink-0">{idx + 1}</div>
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
                <img src="/images/hero-main.webp" alt="Terrace design" className="w-full h-48 object-cover rounded-2xl mb-6 shadow-inner" />
                <h3 className="text-2xl font-display font-bold mb-4 text-on-surface">Ready to upgrade?</h3>
                <p className="text-on-surface-variant mb-6 font-medium">Schedule a free consultation and let's discuss your terrace's true potential.</p>
                <Link to="/contact?service=Terrace+Transformation" className="flex items-center justify-center gap-2 w-full bg-primary text-on-primary px-6 py-4 rounded-xl font-bold shadow-md hover:bg-primary/90 transition-colors">
                  Contact Us Today
                </Link>
              </div>
            </div>

          </div>
          
          <div className="mt-24 max-w-5xl mx-auto">
            <div className="text-center mb-16 relative">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block">Methodology</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-on-surface">
                Our Process
              </h2>
            </div>
            
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent">
              {process.map((step, idx) => (
                <div key={idx} className="relative flex items-center group">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-surface bg-primary text-on-primary font-bold text-sm shrink-0 z-10 transition-transform group-hover:scale-110 md:absolute md:left-1/2 md:-translate-x-1/2">
                    {idx + 1}
                  </div>
                  <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-4rem)] bg-surface-container-lowest p-6 md:p-8 rounded-[2rem] shadow-sm border border-black/5 dark:border-white/5 relative overflow-hidden ml-6 md:ml-0 group-hover:shadow-md transition-shadow ${idx % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                    <div className="absolute top-0 right-0 p-6 text-6xl font-display font-black text-black/5 dark:text-white/5 group-hover:text-primary/10 transition-colors">
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

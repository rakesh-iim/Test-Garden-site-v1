import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import ServiceBooking from '../components/ServiceBooking';
import { IMAGES } from '../constants';
import { Leaf, CheckCircle2 } from 'lucide-react';

export const Booking = () => {
  return (
    <div className="pt-20 bg-surface">
      <Helmet>
        <title>Book a Consultation</title>
        <meta name="description" content="Book an expert landscape consultation with MrGardenr. Transform your outdoor spaces with our professional design and styling advice." />
        <meta name="keywords" content="book consultation, landscaping consultation, hire landscaper, garden styling advice" />
      </Helmet>
      
      <div className="min-h-[calc(100vh-80px)] py-12 lg:py-24 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 hidden lg:block rounded-l-[4rem]"></div>
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left side content & Image */}
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, ease: "easeOut" }}
               className="space-y-10"
            >
              <div>
                 <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold px-4 py-2 rounded-full mb-8 tracking-wide uppercase text-sm shadow-sm backdrop-blur-sm">
                   <Leaf className="w-4 h-4" />
                   Book a Consultation
                 </span>
                 <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-display font-bold mb-6 text-on-surface leading-[1.1] tracking-tight">
                   Cultivate your <br className="hidden md:block" /> <span className="text-primary italic">perfect</span> space.
                 </h1>
                 <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
                   Ready to bring breathing room and lush vitality to your landscape? Schedule an expert consultation and let our design team cultivate your vision into reality.
                 </p>
                 
                 <div className="mt-8 space-y-4 max-w-md">
                    {['Personalized styling advice', 'Precise site measurements', 'Tailored plant selection'].map((feature, i) => (
                      <div key={i} className="flex items-center gap-4 text-on-surface font-medium">
                        <div className="bg-primary/10 p-1.5 rounded-full shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                        </div>
                        {feature}
                      </div>
                    ))}
                 </div>
              </div>

              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] max-w-xl hidden md:block group">
                 <img src={IMAGES.project1} alt="Landscaping transformation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                 <div className="absolute bottom-8 left-8 right-8">
                    <p className="text-white font-medium text-lg lg:text-xl leading-snug">"The team completely transformed our space into a lush oasis. Best decision we've made."</p>
                    <p className="text-white/70 mt-3 font-semibold tracking-wide uppercase text-sm">— Sarah Jenkins</p>
                 </div>
              </div>
            </motion.div>

            {/* Right side form */}
            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
               className="relative"
            >
               {/* Decorative blob behind the form */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/10 to-secondary/10 blur-[80px] rounded-full -z-10"></div>
               
               <ServiceBooking className="w-full lg:max-w-xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] border-white/50 backdrop-blur-xl bg-surface/90 mx-auto lg:mx-0" />
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};

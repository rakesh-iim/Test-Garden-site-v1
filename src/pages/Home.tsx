import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Palette, Sprout, Grid2X2, Leaf, Chrome as ChevronRight, Trees, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES, TESTIMONIALS } from '../constants';
import { LeadGen } from '../components/LeadGen';
import { LandscapesInAction } from '../components/LandscapesInAction';

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
          className="w-full h-full object-cover opacity-80 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
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
            <Link to="/contact" className="bg-primary-container text-on-primary font-bold px-8 py-4 rounded-full hover-lift shadow-lg flex items-center gap-3 w-fit">
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/portfolio" className="border-2 border-secondary text-secondary font-bold px-8 py-4 rounded-full hover:bg-secondary/5 transition-colors w-fit text-center">
              View Portfolio
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
      title: "Garden Design",
      desc: "Expertly curated layouts that balance saturated botanical tones with pristine structures, ensuring a premium feel tailored to your estate.",
      icon: Palette,
      color: "bg-primary-container/10",
      textColor: "text-primary-container",
      large: true,
      image: IMAGES.blueprints
    },
    {
      title: "Lawn Care",
      desc: "Precision mowing, aeration, and fertilization to maintain a vibrant, high-energy green canvas.",
      icon: Sprout,
      color: "bg-primary-container",
      textColor: "text-on-primary",
      theme: "dark"
    },
    {
      title: "Hardscaping",
      desc: "Structurally sound stonework, pathways, and patios that provide architectural \"breathing room\" amidst organic elements.",
      icon: Grid2X2,
      color: "bg-secondary-container/30",
      textColor: "text-on-secondary-container"
    },
    {
      title: "Seasonal Cleanup",
      desc: "Rigorous maintenance to clear debris and prepare your landscape for optimal growth in the upcoming season.",
      icon: Leaf,
      color: "bg-tertiary-container/10",
      textColor: "text-tertiary-container",
      border: "border-t-4 border-tertiary-container"
    }
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
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
              rounded-2xl p-8 ambient-shadow relative overflow-hidden group transition-colors duration-300
              ${s.theme === 'dark' ? 'bg-primary-container hover:bg-primary-container/80 text-white shadow-lg' : 'bg-surface-container-lowest hover:bg-surface-container text-on-surface hover:shadow-xl border border-surface-container-low'}
              ${s.border || ''}
            `}
          >
            {s.image && (
              <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <img src={s.image} alt="" className="w-full h-full object-cover" />
              </div>
            )}
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6
                  ${s.theme === 'dark' ? 'bg-white/20' : s.color} ${s.textColor}`}>
                  <s.icon className="w-6 h-6 transform transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className={`text-2xl font-display font-bold mb-3 ${s.theme === 'dark' ? 'text-white' : 'text-on-surface group-hover:text-primary transition-colors'}`}>{s.title}</h3>
                <p className={`${s.theme === 'dark' ? 'text-white/80 group-hover:text-white transition-colors' : 'text-on-surface-variant group-hover:text-on-surface transition-colors'} mb-6 leading-relaxed`}>
                  {s.desc}
                </p>
              </div>
              {!s.theme && (
                <Link to="/services" className={`flex items-center gap-1 font-bold text-sm ${s.theme === 'dark' ? 'text-white hover:text-white/80' : 'text-primary-container group-hover:text-primary'} hover:underline group-hover:gap-2 transition-all`}>
                  Learn more <ChevronRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export const Home = () => {
  return (
    <>
      <Hero />
      <Expertise />
      <div className="max-w-7xl mx-auto px-6">
        <hr className="border-t border-black/10 dark:border-white/10" />
      </div>
      <LandscapesInAction />
      <LeadGen simplified={true} />
    </>
  );
};

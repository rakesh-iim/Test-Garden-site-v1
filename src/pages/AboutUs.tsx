import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useInView } from 'motion/react';
import { Trees } from 'lucide-react';
import { IMAGES } from '../constants';

const AnimatedCounter = ({ value, duration = 2, suffix = '' }: { value: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (inView) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * value));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export const AboutUs = () => {
  return (
    <div className="pt-24 pb-20 w-full max-w-[1600px] mx-auto px-6 md:px-12 xl:px-24">
      <Helmet>
        <title>About Us</title>
        <meta name="description" content="Learn about MrGardenr, our expert team passionate about crafting bespoke botanical environments. From luxury penthouse transformations to low-maintenance office green spaces." />
        <meta name="keywords" content="about mrgardenr, landscaping experts, botanical environments, garden designers, professional landscapers" />
      </Helmet>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <span className="inline-block bg-primary-container/10 text-primary-container font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
          Heritage of Excellence
        </span>
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-on-surface">About Us</h1>
        <p className="text-xl text-on-surface-variant max-w-3xl leading-relaxed">
          Rooted in quality, we have been cultivating lush, high-end environments for over a decade. Our passion for organic precision ensures that every project we touch thrives.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-4xl font-display font-bold mb-6">Our Philosophy</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              We don't just plant; we orchestrate ecosystems. From initial concept to final execution, our design team works tirelessly to bridge the gap between nature and architecture. Our approach is founded on sustainable practices and breathtaking aesthetics.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ staggerChildren: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-surface-container-lowest p-8 rounded-2xl ambient-shadow border-l-4 border-primary"
            >
              <div className="text-5xl font-display font-extrabold text-primary-container mb-2">
                <AnimatedCounter value={15} suffix="+" />
              </div>
              <div className="font-bold text-on-surface-variant text-sm uppercase tracking-wider">Years Cultivating</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-surface-container-lowest p-8 rounded-2xl ambient-shadow border-l-4 border-secondary"
            >
              <div className="text-5xl font-display font-extrabold text-secondary mb-2">
                <AnimatedCounter value={500} />
              </div>
              <div className="font-bold text-on-surface-variant text-sm uppercase tracking-wider">Estates Managed</div>
            </motion.div>
          </motion.div>
        </div>

        <div className="relative h-[650px]">
          <img 
            src={IMAGES.landscaper} 
            alt="Professional landscaper" 
            loading="lazy"
            className="absolute left-0 top-0 w-[85%] h-[80%] object-cover rounded-2xl ambient-shadow z-10"
          />
          <img 
            src={IMAGES.foliage} 
            alt="Lush foliage" 
            loading="lazy"
            className="absolute right-0 bottom-0 w-2/3 h-2/3 object-cover rounded-2xl shadow-2xl border-[12px] border-surface z-20"
          />
        </div>
      </div>
    </div>
  );
};


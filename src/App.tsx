/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Palette, 
  Sprout, 
  Grid2X2, 
  Leaf, 
  CheckCircle2, 
  ChevronRight,
  Trees,
  Instagram,
  Facebook,
  Phone
} from 'lucide-react';

const IMAGES = {
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRipzO4KkBUjQTirdxY65V8eDoIum6ZsUcQI7DxD34uXuAV3Yx3HdLB36X93bCpgKfT7i0dj7uytzaymv78DL2MMBxQukHyDxHV3InMp7j191-4jJpyn1eeeBdiHqkGpyU8nRXUh8HlE7v4g0TD_wZBZsVL_OfaW4W0aeZkquWZ51w8Sip4EVpHhk5lPFcpE4vwxyF3-27ByZT4PsY3G6IfVdFUW1lAyP621jeWP_mqEWES3nNtwMbaHFX2UMcta2wQF7UrEd2leZc",
  blueprints: "https://lh3.googleusercontent.com/aida-public/AB6AXuApe4T_G0d8R64MHZYlAsDbp4chKV_OuoIir-grs-6jpIkLd_AP9Su7g6jfHbAS7hAFhJj_FLXsGgjd0gUQ25eWJZR0L3oNbI7YP4v4bwVmnZlgmGCBxiU6cpSdatP4vxgFdwEzM14djmVbsOkNvZR7y5w-eOkwxZ6HHuUJnzxlATD70iei2IFvH8GTJFWd7yUBZFb1BXyfTlWXlv-alm8PjDdZDTsuggCVDHxxSVRGpLtMYwaGkMMF07qqcLHcc0eiz7yCR1TaKTuM",
  project1: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5VdLDWCDnXrdGxxXyj5Nsft93YbC1dDvZ0dgI9uR63zXmABRh_wgzC4vuW_V8DhZV-pkGjWU6Bi8gE0vYEkpGA98yhmQshSSCel7h3PhkUeVwgBmxzcqcnG-qujnX1QAuH2zSg5oQK96vjlfD4HOxrjFSynfQ1HvYkdWdMTyLYkYmeVuz8Fs9BI5LIm-aFoVfKjnEszclsueuFZoWQWWSQdraKTkLpuqdz1iWKq54zVXg1FO21KbHaztm3rJ9Wyl1tCNVIPgOUzas",
  project2: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrXQgkdscPLb8hQREuPqWA4gGxMfOpsmohXQ7rPZhTbjip-a5Gp9AB_9CZ_dWkx5FqvL8bItyRS_B-Frd8k6SNGFBY1_yqrBmoJNMQTD6EBdR_oNoPlgKYMPS_trMH9gnzAT1jHBG2hjOrq6Y6y5RXFoSuTZ8ReC3_C6vPXxtjaquHo8taB1mi3Z_7dq-1JIammrJdLATkK9YQApPijQGZKB-5XV3W8K4Anul3GmwjpY4Ws_wAFvC8Tfaa6TV1r2RHifASaGReKjpz",
  project3: "https://lh3.googleusercontent.com/aida-public/AB6AXuCI23cPAnvP5bOrTNh8M8LYR643uK2SJNWPdxsxqPVtodvQ7GxeL7qCm4O2UPE3zuYI52J6s2gx-6gSRZLIPXLumUhY6IcnPMnZ0ROa6wz3lC08GE_uBy1h5LU7wWoZwLCnVtBZIJDxyOTr3sXMt57VLx03H3QyUTU8ZxyY1b-4ib2oQemu8pyUa7HSQtUvIcRmT9A5s7fMTjZVGlR3DM4_J_yXuCG7gLtGGfF5HYyvggcm8j-73AuUekaKz_lrQt8fgKCziDWo4S9A",
  landscaper: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjhbTc7X8I9afZ7vMcII9amVVMl419zwYwGqIQ6_o3lCxqwXEaYfwaFAhPahcFaY159W2yh6VJ7Sdv-9HtLPK6BKoiJr46NrrUF6MnmFCCfwtvtE2p7fSX9IU0yMUO7ZsCTlpwmHFjjVR_UTwpaYmBUWf5l2bgBkh-eAR9UUI-D9eMzWRF3gwX_41QJZKznnLjpi0hNrbwCM8eYDoZDCOFZItbmX4fpDX8zm4luTq4BJeb9SP_k1kpK90LmatWDL6AI4ufHk4hdNPW",
  foliage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgSFfRZHY4FsGbYLELd6sqSCiSua7E1w2aihP6E3Jsaf37vWn5Yqo6fod-PRTGL9M90IZJSUPw35CP42-HTDHu-PVt9NYCg7xQCZCNKWs5bvlreIzJ9yhWOyCbnIg4lay0DAU6oEjEx1ngmrAYJdd2oZUVaUVqm1_UIFfzAesx4sPfTFD5Mht0FEl7MfYOmmXGFMRAi1kiVeryzCKR6ioFRGekIlAJ3wc8xFELozb74n6It1DeHrNuSM4oq7-rF9jRhJFi5DQN5XqY"
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Trees className="text-primary w-8 h-8" />
          <span className="font-display text-2xl font-bold text-primary tracking-tight">VerdantCraft</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {['Services', 'Portfolio', 'About', 'Testimonials'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="bg-primary-container text-on-primary px-6 py-2.5 rounded-full font-semibold text-sm hover-lift">
            Get a Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface border-t border-surface-container-highest overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {['Services', 'Portfolio', 'About', 'Testimonials'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-semibold text-on-surface"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="bg-primary-container text-on-primary px-6 py-3 rounded-full font-semibold mt-2">
                Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <header className="relative pt-20 overflow-hidden bg-surface-container-low min-h-[90vh] flex items-center">
    <div className="absolute inset-0 z-0">
      <img 
        src={IMAGES.hero} 
        alt="Lush garden" 
        className="w-full h-full object-cover opacity-80 mix-blend-multiply"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent" />
    </div>

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
          <button className="bg-primary-container text-on-primary font-bold px-8 py-4 rounded-full hover-lift shadow-lg flex items-center gap-3">
            Get a Free Quote
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="border-2 border-secondary text-secondary font-bold px-8 py-4 rounded-full hover:bg-secondary/5 transition-colors">
            View Portfolio
          </button>
        </div>
      </motion.div>
    </div>
  </header>
);

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
    <section id="services" className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Expertise</h2>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
          Comprehensive landscaping solutions designed to cultivate vibrant, healthy, and structurally sound environments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {services.map((s, i) => (
          <motion.div 
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`
              ${s.large ? 'md:col-span-8' : i === 1 ? 'md:col-span-4' : 'md:col-span-6'}
              rounded-2xl p-8 ambient-shadow hover-lift relative overflow-hidden group
              ${s.theme === 'dark' ? 'bg-primary-container text-white' : 'bg-surface-container-lowest text-on-surface'}
              ${s.border || ''}
            `}
          >
            {s.image && (
              <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 group-hover:opacity-20 transition-opacity">
                <img src={s.image} alt="" className="w-full h-full object-cover" />
              </div>
            )}
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 
                  ${s.theme === 'dark' ? 'bg-white/20' : s.color} ${s.textColor}`}>
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">{s.title}</h3>
                <p className={`${s.theme === 'dark' ? 'text-on-primary-container/90' : 'text-on-surface-variant'} mb-6`}>
                  {s.desc}
                </p>
              </div>
              {!s.theme && (
                <a href="#" className="flex items-center gap-1 font-bold text-sm text-primary-container hover:underline group-hover:gap-2 transition-all">
                  Learn more <ChevronRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Projects = () => {
  const items = [
    { title: "The Oasis Estate", category: "Complete redesign & installation", img: IMAGES.project1, offset: false },
    { title: "Botanical Pathways", category: "Hardscaping & Tropical Planting", img: IMAGES.project2, offset: true },
    { title: "Azure Retreat", category: "Poolside integration & maintenance", img: IMAGES.project3, offset: false },
  ];

  return (
    <section id="portfolio" className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Recent Transformations</h2>
            <p className="text-lg text-on-surface-variant max-w-xl">A glimpse into the lush, vibrant environments we've cultivated for our clients.</p>
          </div>
          <button className="text-primary-container font-bold border-b-2 border-primary-container pb-1 hover:text-primary transition-colors">
            View Full Gallery
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((it, i) => (
            <motion.div 
              key={it.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group cursor-pointer ${it.offset ? 'md:mt-12' : ''}`}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-6 ambient-shadow">
                <img 
                  src={it.img} 
                  alt={it.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <span className="text-white text-xs font-bold bg-primary/80 px-3 py-1 rounded-full backdrop-blur-sm">
                    {i === 2 ? 'Ongoing' : 'Completed ' + (2023 + i % 2)}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-display font-bold mb-2">{it.title}</h3>
              <p className="text-on-surface-variant font-medium">{it.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => (
  <section id="about" className="py-24 max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Rooted in Quality</h2>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Our commitment to organic vitality and structural precision is reflected in our track record. We don't just plant; we orchestrate ecosystems.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-surface-container-lowest p-8 rounded-2xl ambient-shadow border-l-4 border-primary">
            <div className="text-5xl font-display font-extrabold text-primary-container mb-2">15+</div>
            <div className="font-bold text-on-surface-variant text-sm uppercase tracking-wider">Years Cultivating</div>
          </div>
          <div className="bg-surface-container-lowest p-8 rounded-2xl ambient-shadow border-l-4 border-secondary">
            <div className="text-5xl font-display font-extrabold text-secondary mb-2">500</div>
            <div className="font-bold text-on-surface-variant text-sm uppercase tracking-wider">Estates Managed</div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-tertiary-container text-white p-10 rounded-2xl shadow-lg relative overflow-hidden mt-4"
        >
          <div className="absolute -right-8 -bottom-8 opacity-10 rotate-12">
            <Trees size={180} strokeWidth={1} />
          </div>
          <h3 className="text-2xl font-display font-bold mb-4 relative z-10">Client Stories</h3>
          <p className="text-lg italic text-white/90 mb-8 relative z-10 leading-relaxed">
            "VerdantCraft completely revitalized our property. The balance of vibrant greenery and pristine stonework feels like a private luxury resort. Truly professional."
          </p>
          <div className="font-bold text-sm tracking-widest uppercase relative z-10 opacity-80">
            — Sarah Jenkins, The Oaks
          </div>
        </motion.div>
      </div>

      <div className="relative h-[650px] hidden md:block">
        <motion.img 
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          src={IMAGES.landscaper} 
          alt="Professional landscaper" 
          className="absolute right-0 top-0 w-[85%] h-[80%] object-cover rounded-2xl ambient-shadow z-10"
        />
        <motion.img 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          src={IMAGES.foliage} 
          alt="Lush foliage" 
          className="absolute left-0 bottom-0 w-2/3 h-2/3 object-cover rounded-2xl shadow-2xl border-[12px] border-surface z-20"
        />
      </div>
    </div>
  </section>
);

const LeadGen = () => (
  <section className="py-24 bg-secondary text-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Start Your Project Today</h2>
        <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-lg font-medium">
          Ready to bring breathing room and lush vitality to your landscape? Our design team is ready to consult with you.
        </p>
        <ul className="space-y-6">
          {[
            "Customized Design Plans",
            "Professional Execution",
            "Ongoing Maintenance Options"
          ].map((text) => (
            <li key={text} className="flex items-center gap-4 group">
              <div className="bg-white/10 p-2 rounded-full group-hover:bg-primary-fixed transition-colors">
                <CheckCircle2 className="text-primary-fixed w-6 h-6" />
              </div>
              <span className="text-lg font-semibold">{text}</span>
            </li>
          ))}
        </ul>
      </div>

      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="bg-surface rounded-3xl p-10 ambient-shadow text-on-surface"
      >
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">First Name</label>
              <input 
                type="text" 
                placeholder="Jane" 
                className="w-full bg-surface-container-low border-b-2 border-secondary focus:border-primary-container px-4 py-3 rounded-t-lg transition-all outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Last Name</label>
              <input 
                type="text" 
                placeholder="Doe" 
                className="w-full bg-surface-container-low border-b-2 border-secondary focus:border-primary-container px-4 py-3 rounded-t-lg transition-all outline-none"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Email Address</label>
            <input 
              type="email" 
              placeholder="jane@example.com" 
              className="w-full bg-surface-container-low border-b-2 border-secondary focus:border-primary-container px-4 py-3 rounded-t-lg transition-all outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Service of Interest</label>
            <select className="w-full bg-surface-container-low border-b-2 border-secondary focus:border-primary-container px-4 py-3 rounded-t-lg transition-all outline-none appearance-none cursor-pointer">
              <option>Garden Design</option>
              <option>Lawn Care</option>
              <option>Hardscaping</option>
              <option>Seasonal Cleanup</option>
            </select>
          </div>
          <button className="w-full bg-primary-container text-on-primary font-bold py-5 rounded-full hover-lift shadow-xl text-lg mt-4">
            Request Consultation
          </button>
        </form>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-surface-container-highest py-20 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center gap-2 mb-6">
          <Trees className="text-primary w-8 h-8" />
          <span className="font-display text-2xl font-extrabold text-on-surface tracking-tight">VerdantCraft</span>
        </div>
        <p className="text-on-surface-variant max-w-sm mb-8 leading-relaxed font-medium">
          Cultivating premium outdoor spaces with organic vitality and professional precision since 2008.
        </p>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all shadow-sm">
            <Instagram size={20} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all shadow-sm">
            <Facebook size={20} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all shadow-sm">
            <Phone size={20} />
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h4 className="font-bold text-sm uppercase tracking-widest text-on-surface mb-2">Resources</h4>
        {['Maintenance Tips', 'Pruning Guide', 'Seasonal Care', 'Contact Us'].map(l => (
          <a key={l} href="#" className="text-on-surface-variant hover:text-primary transition-colors font-medium">{l}</a>
        ))}
      </div>

      <div className="flex flex-col justify-between items-start md:items-end">
        <div className="hidden md:block" />
        <p className="text-sm text-on-surface-variant font-medium text-left md:text-right">
          © {new Date().getFullYear()} VerdantCraft Landscaping.<br /> 
          All rights reserved worldwide.
        </p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="selection:bg-primary-container selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <Projects />
        <SocialProof />
        <LeadGen />
      </main>
      <Footer />
    </div>
  );
}

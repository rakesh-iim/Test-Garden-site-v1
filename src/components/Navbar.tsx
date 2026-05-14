import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Testimonials', path: '/testimonials' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-14 sm:h-16 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="MrGardenr Logo" className="h-12 sm:h-14 scale-[2.8] sm:scale-[3.2] origin-left object-contain w-auto mix-blend-multiply [clip-path:inset(0_0_25%_0)] translate-y-1 sm:translate-y-2 -translate-x-12 sm:-translate-x-14" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              className={`text-sm font-semibold hover:text-primary transition-colors ${location.pathname === item.path ? 'text-primary' : 'text-on-surface-variant'}`}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/contact" className="bg-primary-container text-on-primary px-6 py-2.5 rounded-full font-semibold text-sm hover-lift text-center">
            Book a Visit
          </Link>
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
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path}
                  className={`text-lg font-semibold ${location.pathname === item.path ? 'text-primary' : 'text-on-surface'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsOpen(false)} className="bg-primary-container text-on-primary px-6 py-3 rounded-full font-semibold mt-2 text-center text-base block">
                Book a Visit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

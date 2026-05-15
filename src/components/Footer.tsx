import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Phone } from 'lucide-react';

export const Footer = () => (
  <footer className="bg-surface-container-highest/95 backdrop-blur-md py-4 md:py-6 px-6 border-t border-black/5 shadow-[0_-4px_25px_rgba(0,0,0,0.1)]">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
        <div className="flex items-center gap-2 md:mr-10">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="MrGardenr Logo" loading="lazy" className="h-12 sm:h-14 scale-[1.8] sm:scale-[2.2] origin-center md:origin-left object-contain w-auto mix-blend-multiply [clip-path:inset(0_0_25%_0)] translate-y-1 sm:translate-y-1 -translate-x-1 sm:-translate-x-3" />
          </Link>
        </div>
        <div className="hidden md:block w-px h-6 bg-black/10 mx-2" />
        <p className="text-sm text-on-surface-variant font-medium hidden lg:block">
          © {new Date().getFullYear()} MrGardenr.
        </p>
      </div>

      <div className="flex items-center justify-center gap-4 md:gap-8 hide-scrollbar overflow-x-auto w-full md:w-auto">
        <Link to="/services" className="text-sm text-on-surface-variant hover:text-primary transition-colors font-medium whitespace-nowrap">Services</Link>
        <Link to="/about" className="text-sm text-on-surface-variant hover:text-primary transition-colors font-medium whitespace-nowrap">About Us</Link>
        <Link to="/gallery" className="text-sm text-on-surface-variant hover:text-primary transition-colors font-medium whitespace-nowrap">Gallery Showcase</Link>
        <Link to="/privacy" className="text-sm text-on-surface-variant hover:text-primary transition-colors font-medium whitespace-nowrap">Privacy Policy</Link>
        <Link to="/terms" className="text-sm text-on-surface-variant hover:text-primary transition-colors font-medium whitespace-nowrap">Terms of Service</Link>
      </div>

      <div className="flex items-center justify-center gap-4">
        <div className="flex gap-3">
          <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary hover:bg-primary hover:text-white hover:scale-110 hover:-translate-y-1 hover:shadow-md transition-all duration-300 shadow-sm" aria-label="Instagram">
            <Instagram size={20} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary hover:bg-primary hover:text-white hover:scale-110 hover:-translate-y-1 hover:shadow-md transition-all duration-300 shadow-sm" aria-label="Facebook">
            <Facebook size={20} />
          </a>
        </div>
        <Link to="/contact" className="flex items-center gap-2 bg-primary-container text-on-primary px-5 py-2.5 rounded-full font-bold text-sm hover:scale-105 hover:shadow-lg transition-all duration-300 shadow-sm">
          <Phone size={16} />
          <span className="hidden sm:inline">Contact Us</span>
        </Link>
      </div>
    </div>
  </footer>
);

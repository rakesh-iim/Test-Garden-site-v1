import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_ITEMS } from '../constants';
import { Facebook, Twitter, Linkedin, MapPin, Calendar, Maximize2, X, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const getOptimizedSrcSet = (url: string) => {
  if (!url.includes('unsplash.com')) return undefined;
  try {
    const baseUrl = url.split('?')[0];
    const params = new URLSearchParams(url.split('?')[1]);
    params.set('auto', 'format');
    params.set('fit', 'crop');
    params.set('q', '80');
    
    const sizes = [400, 800, 1200];
    return sizes.map(w => {
      params.set('w', w.toString());
      return `${baseUrl}?${params.toString()} ${w}w`;
    }).join(', ');
  } catch (e) {
    return undefined;
  }
};

const getHighResUrl = (url: string) => {
  if (!url.includes('unsplash.com')) return url;
  try {
    const baseUrl = url.split('?')[0];
    const params = new URLSearchParams(url.split('?')[1]);
    params.set('auto', 'format');
    params.set('fit', 'crop');
    params.set('q', '90');
    params.set('w', '2000');
    return `${baseUrl}?${params.toString()}`;
  } catch (e) {
    return url;
  }
};

const ImageWithBlurUp = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const getTinyUrl = (url: string) => {
    if (!url.includes('unsplash.com')) return url;
    try {
      const baseUrl = url.split('?')[0];
      const params = new URLSearchParams(url.split('?')[1] || '');
      params.set('auto', 'format');
      params.set('fit', 'crop');
      params.set('q', '20');
      params.set('w', '40');
      return `${baseUrl}?${params.toString()}`;
    } catch {
      return url;
    }
  };

  return (
    <>
      <img
        src={getTinyUrl(src)}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 blur-xl scale-110 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <img
        src={src}
        srcSet={getOptimizedSrcSet(src)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        className={`relative z-10 w-full h-full object-cover transition-all duration-700 ${className || ''} ${
          isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-md scale-105'
        }`}
      />
    </>
  );
};

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isFiltering, setIsFiltering] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);

  const categories = ["All", ...Array.from(new Set(PORTFOLIO_ITEMS.flatMap(item => item.services)))];

  const handleCategoryChange = (category: string) => {
    if (category === activeCategory) return;
    setIsFiltering(true);
    setActiveCategory(category);
    // Simulate processing time for smoother perceived performance
    setTimeout(() => {
      setIsFiltering(false);
    }, 600);
  };

  const openModal = (e: React.MouseEvent, imgSrc: string) => {
    e.preventDefault();
    e.stopPropagation();
    setIsImageLoading(true);
    setSelectedImage(imgSrc);
  };

  const filteredItems = PORTFOLIO_ITEMS.filter(it => 
    activeCategory === "All" || it.services.includes(activeCategory)
  );

  return (
    <div className="pt-24 pb-20 w-full max-w-[1600px] mx-auto px-6 md:px-12 xl:px-24 relative">
      <Helmet>
        <title>Project Gallery</title>
        <meta name="description" content="Browse the MrGardenr portfolio. View stunning before and afters of our Terrace Transformations, Balcony Makeovers, Penthouse Gardens, and Office Landscaping." />
        <meta name="keywords" content="landscaping gallery, mrgardenr portfolio, garden design photos, terrace transformation examples, balcony makeover pictures, penthouse garden design" />
      </Helmet>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <span className="inline-block bg-primary-container/10 text-primary-container font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
          Gallery
        </span>
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Recent Transformations</h1>
        <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
          A glimpse into the lush, vibrant environments we've cultivated for our clients. Every project is uniquely tailored to the estate's architecture.
        </p>
      </motion.div>

      {/* Filter Options */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-wrap gap-3 mb-10"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeCategory === category 
                ? 'bg-primary text-on-primary shadow-md transform scale-105' 
                : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface border border-transparent'
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      <AnimatePresence mode="wait">
        {isFiltering ? (
          <motion.div 
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex justify-center items-center py-32 w-full"
          >
            <div className="flex flex-col items-center gap-4">
              <Loader2 className="w-10 h-10 text-primary animate-spin" />
              <p className="text-on-surface-variant font-medium animate-pulse">Loading amazing projects...</p>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="gallery"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
              hidden: {}
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((it, i) => (
              <motion.div 
                key={it.id || i}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
                }}
                className="group w-full"
              >
                <Link to={`/gallery/${it.id}`} className="block cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-6 ambient-shadow bg-surface-container-low">
                    {/* Placeholder while image lazy loads initially */}
                    <div className="absolute inset-0 bg-surface-container/50 animate-pulse" />
                    
                    <ImageWithBlurUp 
                      src={it.img} 
                      alt={it.title} 
                      className="group-hover:scale-110" 
                    />
                    
                    <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                      <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 delay-100">
                        <button 
                          className="p-2 bg-white/20 hover:bg-primary rounded-full backdrop-blur-md text-white transition-colors" 
                          aria-label="View Full Image" 
                          onClick={(e) => openModal(e, it.img)}
                        >
                          <Maximize2 size={16} />
                        </button>
                        <button className="p-2 bg-white/20 hover:bg-primary rounded-full backdrop-blur-md text-white transition-colors" aria-label="Share on Twitter" onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.origin + `/gallery/${it.id}`)}&text=${encodeURIComponent(`Check out ${it.title}`)}`, '_blank', 'noopener,noreferrer'); }}>
                          <Twitter size={16} />
                        </button>
                        <button className="p-2 bg-white/20 hover:bg-primary rounded-full backdrop-blur-md text-white transition-colors" aria-label="Share on Facebook" onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.origin + `/gallery/${it.id}`)}`, '_blank', 'noopener,noreferrer'); }}>
                          <Facebook size={16} />
                        </button>
                        <button className="p-2 bg-white/20 hover:bg-primary rounded-full backdrop-blur-md text-white transition-colors" aria-label="Share on LinkedIn" onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.origin + `/gallery/${it.id}`)}&title=${encodeURIComponent(it.title)}`, '_blank', 'noopener,noreferrer'); }}>
                          <Linkedin size={16} />
                        </button>
                      </div>
                      <h3 className="text-white text-2xl font-display font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">{it.title}</h3>
                      <p className="text-white/80 font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-150 mb-3">{it.category}</p>
                      
                      <div className="flex items-center gap-4 text-white/90 text-sm font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200">
                        {it.location && (
                          <span className="flex items-center gap-1.5">
                            <MapPin size={14} className="text-primary-fixed" />
                            {it.location}
                          </span>
                        )}
                        {it.year && (
                          <span className="flex items-center gap-1.5">
                            <Calendar size={14} className="text-primary-fixed" />
                            {it.year}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors duration-300">{it.title}</h3>
                  <p className="text-on-surface-variant font-medium mb-4">{it.category}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/20 hover:bg-white/20 p-2 rounded-full transition-colors z-50"
              onClick={() => setSelectedImage(null)}
            >
              <X size={28} />
            </button>
            <div 
              className="relative w-full max-w-6xl max-h-[90vh] flex flex-col justify-center items-center" 
              onClick={e => e.stopPropagation()}
            >
              {isImageLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <Loader2 className="w-12 h-12 text-primary animate-spin" />
                  <span className="text-white/80 font-medium tracking-wide">Loading hi-res image...</span>
                </div>
              )}
              <motion.img 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: isImageLoading ? 0.95 : 1, opacity: isImageLoading ? 0 : 1 }}
                transition={{ duration: 0.4 }}
                src={selectedImage ? getHighResUrl(selectedImage) : undefined} 
                alt="Expanded view" 
                decoding="async"
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                onLoad={() => setIsImageLoading(false)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


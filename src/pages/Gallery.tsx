import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_ITEMS } from '../constants';
import { Facebook, Instagram, MapPin, Calendar, Maximize2, X, Loader2 } from 'lucide-react';

// ✏️ UPDATE YOUR SOCIAL MEDIA DETAILS HERE:
const SOCIAL_CONFIG = {
  // Replace with your WhatsApp number (with country code, no + or spaces)
  whatsappNumber: '919876543210',
  // Replace with your Instagram username (without @)
  instagramUsername: 'mrgardenr',
};
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
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 blur-xl scale-110 ${isLoaded ? 'opacity-0' : 'opacity-100'
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
        className={`relative z-10 w-full h-full object-cover transition-all duration-700 ${className || ''} ${isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-md scale-105'
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
    }, 100);
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
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 active:scale-95 ${activeCategory === category
              ? 'bg-primary text-on-primary shadow-md transform scale-105'
              : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface border border-transparent hover:scale-105 hover:-translate-y-0.5 hover:shadow-sm'
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
              visible: { transition: { staggerChildren: 0.05 } },
              hidden: {}
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {filteredItems.map((it, i) => (
              <motion.div
                key={it.id || i}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } }
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
                      className="group-hover:scale-105"
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
                        <button className="p-2 bg-white/20 hover:bg-primary rounded-full backdrop-blur-md text-white transition-colors" aria-label="Share on X" onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(`https://x.com/intent/tweet?url=${encodeURIComponent(window.location.origin + `/gallery/${it.id}`)}&text=${encodeURIComponent(`Check out ${it.title}`)}`, '_blank', 'noopener,noreferrer'); }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                        </button>
                        <button className="p-2 bg-white/20 hover:bg-primary rounded-full backdrop-blur-md text-white transition-colors" aria-label="Share on Facebook" onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.origin + `/gallery/${it.id}`)}`, '_blank', 'noopener,noreferrer'); }}>
                          <Facebook size={16} />
                        </button>
                        <button className="p-2 bg-white/20 hover:bg-primary rounded-full backdrop-blur-md text-white transition-colors" aria-label="Share on Instagram" onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(`https://www.instagram.com/${SOCIAL_CONFIG.instagramUsername}/`, '_blank', 'noopener,noreferrer'); }}>
                          <Instagram size={16} />
                        </button>
                        <button className="p-2 bg-white/20 hover:bg-primary rounded-full backdrop-blur-md text-white transition-colors" aria-label="Share on WhatsApp" onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(`https://wa.me/${SOCIAL_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Check out this project: ${it.title} - ${window.location.origin}/gallery/${it.id}`)}`, '_blank', 'noopener,noreferrer'); }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                        </button>
                      </div>
                      <div className="flex items-center gap-4 text-white/90 text-sm font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
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


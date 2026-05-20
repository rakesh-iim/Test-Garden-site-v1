import React from 'react';
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { IMAGES } from '../constants';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export const SERVICES_DATA = {
  "terrace-transformation": {
    title: "Terrace Transformation",
    desc: "Turn your underutilized rooftop or terrace into a sky-high sanctuary. We design bespoke urban gardens with custom planters, optimal drainage, and resilient planting schemes.",
    fullDesc: "Terraces present a unique opportunity to create a private oasis elevated above the city bustles. Our terrace transformation service encompasses an end-to-end design and installation process that takes your outdoor space from concrete slab to an immersive green sanctuary.",
    seoDesc: "Discover expert terrace landscaping and transformation services. We specialize in designing bespoke rooftop gardens, offering ultimate urban outdoor living spaces.",
    keywords: "terrace landscaping, rooftop gardens, urban outdoor living, sky garden design, urban terrace makeover",
    features: [
      "Custom, weather-resistant planters",
      "Specialized rooftop drainage solutions",
      "Wind and sun-resilient planting schemes",
      "Built-in seating and lounge areas",
      "Integrated ambient lighting"
    ],
    image: "https://images.unsplash.com/photo-1600607688066-890987f18a86?auto=format&fit=crop&q=80"
  },
  "balcony-makeover": {
    title: "Balcony Makeover",
    desc: "Maximize limited space with vertical gardens, custom-built seating, and curated container planting to create a lush, intimate retreat right outside your door.",
    fullDesc: "No balcony is too small for a green transformation. We specialize in space-saving designs that bring nature closer to your living space without compromising on walking areas or views. Through the use of vertical elements and tailored pots, we turn bare balconies into vibrant extensions of your home.",
    seoDesc: "Discover balcony makeovers that maximize space with vertical gardens and custom seating. Create a lush, intimate retreat right outside your door.",
    keywords: "balcony makeover, vertical gardens, small space landscaping, apartment balcony design, balcony planting",
    features: [
      "Custom vertical garden installations",
      "Compact and functional built-in storage/seating",
      "Premium, lightweight containers",
      "Micro-irrigation system setups",
      "Privacy screens and climbing plants"
    ],
    image: "https://images.unsplash.com/photo-1746553618662-2965b5a4ef8d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  "penthouse-transformation": {
    title: "Penthouse Transformation",
    desc: "Elevate your penthouse exteriors with luxury landscaping, incorporating architectural stonework, dynamic lighting, and elegant, wind-resilient flora.",
    fullDesc: "Our penthouse transformation service is tailored for high-end luxury requirements. We understand the specific microclimates of high-rise living and use engineered solutions for structural loads, high winds, and intense sun exposure, combined with unparalleled aesthetic design using premium materials.",
    seoDesc: "Elevate your penthouse exteriors with our luxury landscaping services. We incorporate architectural stonework, dynamic lighting, and wind-resilient flora.",
    keywords: "penthouse landscaping, luxury outdoor design, high-rise gardens, architectural stonework, penthouse garden design",
    features: [
      "Engineered structural load assessments",
      "Luxury hardscaping and stonework",
      "Mature, wind-resistant specimen trees",
      "Custom architectural water features",
      "Smart-controlled irrigation and lighting"
    ],
    image: "https://images.unsplash.com/photo-1643271529376-fb122b7e36a0?q=80&w=1315&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  "office-landscaping": {
    title: "Office Landscaping",
    desc: "Develop vibrant, low-maintenance green spaces for educational or corporate campuses, establishing outdoor areas that inspire collaboration and provide a natural haven.",
    fullDesc: "Transform corporate or educational environments with purposeful green spaces that enhance well-being and productivity. Our office landscaping service balances aesthetic appeal with low-maintenance requirements, creating collaborative outdoor areas, peaceful retreats, and impressive entryways.",
    seoDesc: "Enhance your corporate environment with office landscaping. We create vibrant, low-maintenance green spaces that inspire collaboration and employee well-being.",
    keywords: "office landscaping, corporate green spaces, commercial landscape design, biophilic office design, sustainable campus landscaping",
    features: [
      "Low-maintenance corporate planting designs",
      "Outdoor collaborative zones and seating",
      "Hardy, climate-appropriate flora",
      "Sustainable water management systems",
      "Biophilic design integration indoors and outdoors"
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
  }
};

export const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = serviceId ? SERVICES_DATA[serviceId as keyof typeof SERVICES_DATA] : null;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="pt-32 pb-20 w-full max-w-[1600px] mx-auto px-6 md:px-12 xl:px-24">
      <Helmet>
        <title>{service.title} | MrGardenr</title>
        <meta name="description" content={service.seoDesc || service.desc} />
        {service.keywords && <meta name="keywords" content={service.keywords as string} />}
      </Helmet>

      <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-primary font-medium hover:underline mb-8 hover:text-primary-container transition-colors">
        <ArrowLeft size={20} /> Go back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl"
        >
          <img src={service.image} alt={service.title} loading="lazy" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-on-surface">{service.title}</h1>
          <p className="text-xl text-on-surface-variant leading-relaxed mb-6">
            {service.desc}
          </p>
          <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
            {service.fullDesc}
          </p>
          
          <h3 className="text-2xl font-bold mb-6 text-on-surface">What's Included</h3>
          <ul className="space-y-4 mb-10">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="text-primary-container shrink-0 mt-1" size={24} />
                <span className="text-lg text-on-surface-variant">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to={`/contact?service=${encodeURIComponent(service.title)}`} className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-full transition-colors bg-primary-container text-on-primary hover-lift shadow-lg font-display tracking-wide uppercase text-sm">
              Request a Quote
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Building2, Phone, Mail, Clock, Navigation } from 'lucide-react';

const locations = [
  {
    id: 'ahmedabad',
    city: 'Ahmedabad',
    address: 'MrGardenr, SG Highway, Ahmedabad, Gujarat 380015',
    phone: '+91-9761655546',
    email: 'hello@mrgardenr.in',
    hours: 'Mon - Sat: 10:00 AM - 7:00 PM',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.74862600498!2d72.43965!3d23.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000',
    directionsLink: 'https://maps.google.com/?q=Ahmedabad+Gujarat'
  },
  {
    id: 'surat',
    city: 'Surat',
    address: 'MrGardenr, Vesu, Surat, Gujarat 395007',
    phone: '+91-9761655546',
    email: 'hello@mrgardenr.in',
    hours: 'Mon - Sat: 10:00 AM - 7:00 PM',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238570.26178714498!2d72.7519!3d21.1702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000001',
    directionsLink: 'https://maps.google.com/?q=Surat+Gujarat'
  },
  {
    id: 'vadodara',
    city: 'Vadodara',
    address: 'Mr Gardenr, Vishwas Colony, Jetalpur Road, Vadodara, Gujarat 390007',
    phone: '+91-9761655546',
    email: 'hello@mrgardenr.in',
    hours: 'Mon - Sat: 10:00 AM - 7:00 PM',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.29918117!2d73.1812!3d22.3072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0x1f9e4f1b7c9c26d1!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000002',
    directionsLink: 'https://www.google.com/maps/search/Mr+Gardenr+Vadodara'
  },
  {
    id: 'bangalore',
    city: 'Bangalore',
    address: 'MrGardenr, HSR Layout, Bangalore, Karnataka 560102',
    phone: '+91-9761655546',
    email: 'hello@mrgardenr.in',
    hours: 'Mon - Sat: 10:00 AM - 7:00 PM',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.23476138!2d77.3500!3d12.9538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000003',
    directionsLink: 'https://www.google.com/maps/search/Mr+Gardenr+HSR+Layout+Bangalore'
  }
];

export const StoreLocator = () => {
  const [activeTab, setActiveTab] = useState(locations[0].id);

  const activeLocation = locations.find(loc => loc.id === activeTab);

  return (
    <section className="py-24 bg-surface" id="locations">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 xl:px-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary-container/10 text-primary-container font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
            Find Us
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Our Store Locations</h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            Visit us at any of our offices across India for a personalized consultation.
          </p>
        </motion.div>

        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {locations.map(loc => (
            <button
              key={loc.id}
              onClick={() => setActiveTab(loc.id)}
              className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold transition-all duration-300 border-2 ${
                activeTab === loc.id
                  ? 'bg-primary border-primary text-white shadow-[0_4px_20px_rgba(0,104,62,0.35)]'
                  : 'bg-white border-surface-container-highest text-on-surface hover:border-primary hover:text-primary hover:bg-primary/5'
              }`}
            >
              <MapPin className={`w-4 h-4 ${activeTab === loc.id ? 'text-white' : 'text-primary'}`} />
              {loc.city}
            </button>
          ))}
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            {activeLocation && (
              <motion.div
                key={activeLocation.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] bg-white rounded-3xl overflow-hidden shadow-xl border border-surface-container-low"
              >
                <div className="relative min-h-[380px] lg:min-h-full bg-surface-container-low">
                  <iframe
                    src={activeLocation.mapSrc}
                    className="absolute inset-0 w-full h-full border-none"
                    allowFullScreen
                    loading="lazy"
                    title={`${activeLocation.city} Location Map`}
                  ></iframe>
                </div>
                
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 w-fit">
                    <Building2 className="w-4 h-4" />
                    {activeLocation.city} Office
                  </div>
                  
                  <h3 className="font-display text-3xl font-bold text-on-surface mb-6">
                    {activeLocation.city}
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3 text-on-surface-variant">
                      <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{activeLocation.address}</span>
                    </div>
                    <div className="flex items-start gap-3 text-on-surface-variant">
                      <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <a href={`tel:${activeLocation.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-primary font-medium transition-colors">
                        {activeLocation.phone}
                      </a>
                    </div>
                    <div className="flex items-start gap-3 text-on-surface-variant">
                      <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{activeLocation.email}</span>
                    </div>
                    <div className="flex items-start gap-3 text-on-surface-variant">
                      <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{activeLocation.hours}</span>
                    </div>
                  </div>
                  
                  <a
                    href={activeLocation.directionsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-primary-container text-on-primary font-bold px-6 py-3 rounded-xl hover:bg-primary-container/90 transition-colors w-fit mt-2"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { Gallery } from './pages/Gallery';
import { GalleryDetail } from './pages/GalleryDetail';
import { ContactUs } from './pages/ContactUs';
import { Projects } from './pages/Projects';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  React.useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};

export default function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | MrGardenr" defaultTitle="MrGardenr">
        <meta name="description" content="Transform your outdoor spaces into lush sanctuaries. MrGardenr specializes in Terrace Transformation, Balcony Makeovers, Penthouse Transformations, and Office Landscaping." />
        <meta name="keywords" content="landscape design, mrgardenr, terrace landscaping, balcony makeover, penthouse garden, office landscaping" />
      </Helmet>
      <BrowserRouter>
        <div className="selection:bg-primary-container selection:text-white">
          <ScrollToTop />
          <Navbar />
          <main className="min-h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:serviceId" element={<ServiceDetail />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/gallery/:itemId" element={<GalleryDetail />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
            </Routes>
          </main>
          <Footer />
          <BackToTop />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

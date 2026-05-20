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

const Home = React.lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const AboutUs = React.lazy(() => import('./pages/AboutUs').then(module => ({ default: module.AboutUs })));
const Services = React.lazy(() => import('./pages/Services').then(module => ({ default: module.Services })));
const TerraceTransformation = React.lazy(() => import('./pages/services/TerraceTransformation').then(module => ({ default: module.TerraceTransformation })));
const BalconyMakeover = React.lazy(() => import('./pages/services/BalconyMakeover').then(module => ({ default: module.BalconyMakeover })));
const PenthouseTransformation = React.lazy(() => import('./pages/services/PenthouseTransformation').then(module => ({ default: module.PenthouseTransformation })));
const OfficeLandscaping = React.lazy(() => import('./pages/services/OfficeLandscaping').then(module => ({ default: module.OfficeLandscaping })));
const Gallery = React.lazy(() => import('./pages/Gallery').then(module => ({ default: module.Gallery })));
const GalleryDetail = React.lazy(() => import('./pages/GalleryDetail').then(module => ({ default: module.GalleryDetail })));
const ContactUs = React.lazy(() => import('./pages/ContactUs').then(module => ({ default: module.ContactUs })));
const Booking = React.lazy(() => import('./pages/Booking').then(module => ({ default: module.Booking })));
const Projects = React.lazy(() => import('./pages/Projects').then(module => ({ default: module.Projects })));
const ProjectDetail = React.lazy(() => import('./pages/ProjectDetail').then(module => ({ default: module.ProjectDetail })));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy').then(module => ({ default: module.PrivacyPolicy })));
const TermsOfService = React.lazy(() => import('./pages/TermsOfService').then(module => ({ default: module.TermsOfService })));

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
            <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div></div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/terrace-transformation" element={<TerraceTransformation />} />
                <Route path="/services/balcony-makeover" element={<BalconyMakeover />} />
                <Route path="/services/penthouse-transformation" element={<PenthouseTransformation />} />
                <Route path="/services/office-landscaping" element={<OfficeLandscaping />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/gallery/:itemId" element={<GalleryDetail />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:projectId" element={<ProjectDetail />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
              </Routes>
            </React.Suspense>
          </main>
          <Footer />
          <BackToTop />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

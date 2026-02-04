import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEO from './components/SEO';
import AboutPage from './pages/AboutPage';
import { getOrganizationSchema } from './utils/seo';

import ServiceDetail from './pages/ServiceDetail';
import ServicesPage from './pages/ServicesPage';
import SolutionsPage from './pages/SolutionsPage';
import SolutionDetail from './pages/SolutionDetail';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';
import CareersPage from './pages/CareersPage';
import AffiliatesPage from './pages/AffiliatesPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import CookiePolicyPage from './pages/CookiePolicyPage';

// Home Page Component
const HomePage = () => (
  <>
    <SEO
      url="/"
      schema={getOrganizationSchema()}
    />
    <Hero />
    <About />
    <Services />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-background">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/solutions/:slug" element={<SolutionDetail />} />
          <Route path="/our-partner" element={<ResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/affiliates" element={<AffiliatesPage />} />
          <Route path="/terms-conditions" element={<TermsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

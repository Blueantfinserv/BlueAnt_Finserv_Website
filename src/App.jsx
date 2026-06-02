import React, { Suspense, lazy } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import "./styles/App.css";

// Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import StickyWhatsApp from "./components/StickyWhatsApp";
import ConsultationModal from "./components/ConsultationModal";
import { ErrorBoundary } from "./components/ErrorBoundary";

// Direct Homepage Import
import Landing from "./pages/Landing";

// Lazy Loaded Pages
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const CalculatorPage = lazy(() => import("./pages/CalculatorPage"));
const Careers = lazy(() => import("./pages/Careers"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const ResourcesPage = lazy(() => import("./pages/ResourcesPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));

// About Sub-pages
const CompanyPage = lazy(() => import("./pages/About/CompanyPage"));
const MissionPage = lazy(() => import("./pages/About/MissionPage"));
const TeamPage = lazy(() => import("./pages/About/TeamPage"));
const ImpactStoriesPage = lazy(() => import("./pages/About/ImpactStoriesPage"));

// Service Sub-pages
const WealthCreationPage = lazy(() => import("./pages/Services/WealthCreationPage"));
const WealthProtectionPage = lazy(() => import("./pages/Services/WealthProtectionPage"));
const WealthPreservationPage = lazy(() => import("./pages/Services/WealthPreservationPage"));
const StockMarketServicesPage = lazy(() => import("./pages/Services/StockMarketServicesPage"));

const LoadingFallback = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-white/70 backdrop-blur-xl fixed inset-0 z-[9999] transition-all duration-500">
    <div className="relative flex flex-col items-center">
      <div className="absolute inset-0 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
      
      <img 
        src={`${import.meta.env.BASE_URL}blueAnt.png`} 
        alt="Blueant Loading" 
        className="h-14 mb-8 relative z-10"
        style={{ animation: 'float 3s ease-in-out infinite' }}
      />
      
      <div className="w-48 h-1 bg-slate-100 rounded-full overflow-hidden relative z-10 shadow-inner">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-[#00afef] to-blue-500 w-full"
          style={{ 
            backgroundSize: '200% 100%',
            animation: 'gradientMove 1.5s ease-in-out infinite'
          }}
        ></div>
      </div>
      
      <span className="mt-5 text-[10px] font-black text-slate-400 tracking-[0.25em] uppercase relative z-10">
        Loading...
      </span>
    </div>
  </div>
);

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Navbar />

      <Suspense fallback={<LoadingFallback />}>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about/company" element={<CompanyPage />} />
            <Route path="/about/mission" element={<MissionPage />} />
            <Route path="/about/team" element={<TeamPage />} />
            <Route path="/about/stories" element={<ImpactStoriesPage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/services/wealth-creation" element={<WealthCreationPage />} />
            <Route path="/services/wealth-protection" element={<WealthProtectionPage />} />
            <Route path="/services/wealth-preservation" element={<WealthPreservationPage />} />
            <Route path="/services/stock-market-services" element={<StockMarketServicesPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/calculators" element={<CalculatorPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/faq" element={<FAQPage />} />
            {/* Debug 404 Route */}
            <Route path="*" element={<div className="flex items-center justify-center min-h-screen bg-red-500 text-white text-3xl font-bold">404 - Route Not Found: Check URL</div>} />
          </Routes>
        </ErrorBoundary>
      </Suspense>

      <StickyWhatsApp />
      <ConsultationModal />
      <Footer />
    </HashRouter>
  );
}

export default App;
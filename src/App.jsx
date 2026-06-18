import React, { Suspense, lazy } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";

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
const ComingSoon = lazy(() => import("./pages/ComingSoon"));

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
  <div className="flex items-center justify-center min-h-screen bg-white">
    <div className="animate-spin rounded-full h-12 w-12 border-4 border-slate-100 border-t-[#00afef]"></div>
  </div>
);

/**
 * Resets the ErrorBoundary automatically when the user navigates to a
 * different route. Without this, a crashed page would keep showing the
 * error UI even after the user clicks a navbar link to another page.
 */
const LocationAwareErrorBoundary = ({ children }) => {
  const location = useLocation();
  // Changing the key unmounts + remounts ErrorBoundary, clearing any error state
  return <ErrorBoundary key={location.pathname}>{children}</ErrorBoundary>;
};

const ConditionalFooter = () => {
  const location = useLocation();
  const hiddenPaths = ['/about', '/services', '/resources', '/careers', '/coming-soon'];
  
  if (hiddenPaths.includes(location.pathname)) {
    return null;
  }
  return <Footer />;
};

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Navbar />

      {/* ErrorBoundary is OUTSIDE Suspense so it catches both lazy-load
          failures and runtime errors inside pages. It auto-resets on
          every route change via LocationAwareErrorBoundary. */}
      <LocationAwareErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
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
            <Route path="/coming-soon" element={<ComingSoon />} />
            {/* Debug 404 Route */}
            <Route path="*" element={<div className="flex items-center justify-center min-h-screen bg-red-500 text-white text-3xl font-bold">404 - Route Not Found: Check URL</div>} />
          </Routes>
        </Suspense>
      </LocationAwareErrorBoundary>

      <StickyWhatsApp />
      <ConsultationModal />
      <ConditionalFooter />
    </HashRouter>
  );
}

export default App;
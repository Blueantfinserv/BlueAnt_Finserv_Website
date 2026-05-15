import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/App.css";

// Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import StickyWhatsApp from "./components/StickyWhatsApp";
import ConsultationModal from "./components/ConsultationModal";

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

// Loading Fallback
const LoadingFallback = () => (
  <div
    style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f7f9fc",
    }}
  >
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter basename="/BlueAnt_Finserv_Website">
      <ScrollToTop />
      <Navbar />

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
        </Routes>
      </Suspense>

      <StickyWhatsApp />
      <ConsultationModal />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
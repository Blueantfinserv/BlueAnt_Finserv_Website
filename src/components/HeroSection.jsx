import React from "react";
import { Link } from "react-router-dom";
import { openConsultationModal } from "./ConsultationModal";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-overlay">
      <div className="hero-footer-row">
        <div className="hero-badge">🇮🇳 Trusted Since 2012</div>
        <Link to="#" onClick={(e) => { e.preventDefault(); openConsultationModal(); }} className="hero-btn hero-btn-primary">
          Get Personalized Guidance
        </Link>
        <span className="hero-trust-pill">✅ AMFI Registered</span>
        <span className="hero-trust-pill">✅ RBI Compliant</span>
        <span className="hero-trust-pill">✅ 4600+ Investors</span>
      </div>
    </div>
  );
}

export default HeroSection;

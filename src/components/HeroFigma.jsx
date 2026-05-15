import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/HeroFigma.css";

import { openConsultationModal } from "./ConsultationModal";

function HeroFigma() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  return (
    <section className="hf-section">
      <div className="hf-container">
        <div className="hf-content">
          {/* Left Column: Text & CTAs */}
          <div className="hf-left" data-aos="fade-right">
            <div className="hf-top-badge" data-aos="fade-down" data-aos-delay="200">
              <span className="hf-star">⭐</span>
              <span>Trusted by 10,000+ investors across India</span>
            </div>

            <h1 className="hf-headline">
              Build Wealth with <br />
              <span className="hf-headline-accent">Discipline, Patience & Planning</span>
            </h1>
 
            <p className="hf-subtext" data-aos="fade-up" data-aos-delay="300">
              Plan your wealth with disciplined SIP investments, suitable 
              insurance solutions, and investment support — transparent 
              process and aligned with AMFI & IRDAI regulations.
            </p>

            <div className="hf-ctas" data-aos="fade-up" data-aos-delay="400">
              <button onClick={openConsultationModal} className="hf-btn-primary">
                Start Investing <span className="hf-arrow">→</span>
              </button>
              <a 
                href="https://wa.me/+919990218899?text=Hi%2C%20I%20need%20financial%20advice" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hf-btn-outline-link"
                style={{ textDecoration: 'none' }}
              >
                <button className="hf-btn-outline">
                  Talk to Expert
                </button>
              </a>
            </div>

            <div className="hf-micro-trust" data-aos="fade-up" data-aos-delay="500">
              <span>✔ No hidden charges</span>
              <span className="hf-dot">•</span>
              <span>✔ Transparent investment process</span>
              <span className="hf-dot">•</span>
              <span>✔ Regulation-aligned</span>
            </div>

            <div className="hf-trust-cards">
              {[
                { icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>, title: "AMFI Registered", sub: "ARN: 129543", color: "blue" },
                { icon: <circle cx="12" cy="12" r="10"></circle>, title: "10,000+ Users", sub: "Trusted Platform", color: "red" },
                { icon: <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>, title: "4.9/5 Rating", sub: "Highly Rated", color: "purple" }
              ].map((card, i) => (
                <div key={i} className="hf-trust-card" data-aos="fade-up" data-aos-delay={600 + (i * 100)}>
                  <div className={`hf-card-icon ${card.color}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {card.icon}
                      {card.color === 'red' && <path d="M12 8v4"></path>}
                      {card.color === 'red' && <path d="M12 16h.01"></path>}
                      {card.color === 'purple' && <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>}
                    </svg>
                  </div>
                  <div className="hf-card-info">
                    <strong>{card.title}</strong>
                    <span>{card.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: High-Fidelity Mockup */}
          <div className="hf-right" data-aos="zoom-in-left" data-aos-delay="200">
            <div className="hf-mockup-frame">
              {/* Sidebar */}
              <div className="hf-mockup-sidebar">
                <div className="hf-sidebar-logo">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
                </div>
                <div className="hf-sidebar-menu">
                  <div className="hf-menu-item active">DASH</div>
                  <div className="hf-menu-item">INVEST</div>
                  <div className="hf-menu-item">TRADE</div>
                  <div className="hf-menu-item">LOANS</div>
                </div>
              </div>

              {/* Main Content */}
              <div className="hf-mockup-content">
                <div className="hf-content-header">
                  <div>
                    <span className="hf-label-mini">Financial Goal</span>
                    <h4 className="hf-value-main animate-pulse-slow">Retirement Goal Set</h4>
                  </div>
                  <div className="hf-header-right">
                    <span className="hf-label-mini">Status</span>
                    <span className="hf-status-green">Account Verified</span>
                  </div>
                </div>

                <div className="hf-goal-center">
                  <div className="hf-circle-progress animate-spin-slow">
                    <div className="hf-circle-text">ON TRACK</div>
                  </div>
                  <div className="hf-goal-stats">
                    <div className="hf-stat-row">
                      <span className="hf-label-mini">Active SIP Plan</span>
                      <strong className="hf-status-green">SIP Active</strong>
                    </div>
                    <div className="hf-stat-row">
                      <span className="hf-label-mini">Monthly Investment Plan</span>
                      <strong className="hf-white">Systematic Plan</strong>
                    </div>
                  </div>
                </div>

                <div className="hf-content-footer">
                  <div className="hf-footer-card hover-lift">
                    <span className="hf-label-mini">Insurance Policy</span>
                    <strong className="hf-status-green">Coverage Active</strong>
                  </div>
                  <div className="hf-footer-card hover-lift">
                    <span className="hf-label-mini">Coverage Type</span>
                    <strong className="hf-white">Comprehensive</strong>
                  </div>
                </div>
              </div>

              {/* Advisor Floating Box */}
              <div className="hf-advisor-box animate-float">
                <span className="hf-advisor-dot animate-ping-custom"></span>
                <div className="hf-advisor-text">
                  <p>Advisor</p>
                  <strong>Available</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroFigma;

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/HeroFigma.css";

import { openConsultationModal } from "./ConsultationModal";

function HeroFigma() {
  const [showCta, setShowCta] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 450,
      once: true,
      offset: 60,
      throttleDelay: 99,
      debounceDelay: 50,
      disable: false,
    });

    const timer = setTimeout(() => {
      setShowCta(true);
    }, 850); // Matches the paragraph's AOS delay (300) + duration (450) + slight buffer

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hf-section">
      <div className="hf-container">
        <div className="hf-content">
          {/* Left Column: Text & CTAs */}
          <div className="hf-left" data-aos="fade-right">
            <div className="hf-top-badge" data-aos="fade-down" data-aos-delay="200">
              <span className="hf-star">⭐</span>
              <span>Trusted by 3,000+ families across India</span>
            </div>

            <div className="hf-dynamic-headline-group">
              <h1 className="hf-dynamic-headline hf-headline-sm">
                <span className="hf-text-white">Clarity</span>
                <div className="hf-glowing-dash"></div>
              </h1>
              <h1 className="hf-dynamic-headline hf-headline-md">
                <span className="hf-text-white">Creates</span>
                <div className="hf-glowing-dash"></div>
              </h1>
              <h1 className="hf-dynamic-headline hf-headline-lg">
                <div className="hf-wealth-wrapper">
                  <span className="hf-text-wealth">Wealth</span>
                  <div className="hf-wealth-glow-line"></div>
                </div>
                <div className="hf-glowing-dash"></div>
              </h1>
            </div>

            <p className="hf-subtext" data-aos="fade-up" data-aos-delay="300" style={{ lineHeight: '1.2' }}>
              <strong style={{ color: '#ffffff', fontWeight: '600', display: 'block', marginBottom: '4px' }}>When money decisions are clear, life feels more confident.</strong>
              <span style={{ fontSize: '14px', display: 'block', lineHeight: '1.4' }}>Blueant helps families build that clarity with discipline, thoughtful <br /> protection, and long-term financial confidence.</span>
            </p>

            {showCta && (
              <div className="hf-ctas hf-cta-animate" style={{ marginTop: '30px' }}>
                <button onClick={openConsultationModal} className="hf-btn-primary">
                  Start a Conversation <span className="hf-arrow">→</span>
                </button>
              </div>
            )}


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
                  <div className="hf-menu-item active">DASHBOARD</div>
                  <div className="hf-menu-item">INVEST</div>
                  <div className="hf-menu-item">LOANS</div>
                </div>
              </div>

              {/* Main Content */}
              <div className="hf-mockup-content">
                <div className="hf-content-header">
                  <div>
                    <span className="hf-label-mini">Financial Goal</span>
                    <h4 className="hf-value-main animate-pulse-slow">Your Wealth Journey</h4>
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
                    <strong className="hf-status-green">Person Coverage Active</strong>
                  </div>
                </div>
              </div>

              {/* Advisor Floating Box */}
              <div className="hf-advisor-box animate-float">
                <span className="hf-advisor-dot animate-ping-custom"></span>
                <div className="hf-advisor-text">
                  <p>Support</p>
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

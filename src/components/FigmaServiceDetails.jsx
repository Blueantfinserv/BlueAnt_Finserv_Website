import React from "react";
import "./FigmaServiceDetails.css";

const services = [
  {
    id: "sip",
    pill: "Build Wealth Systematically",
    pillColor: "#0ea5e9",
    title: "Grow Your Wealth the Smart Way",
    description: "Invest regularly and build long-term wealth with simple and guided plans.",
    stats: [],
    features: [
      { title: "Build wealth step by step", desc: "" },
      { title: "Expert-managed investments", desc: "" },
      { title: "Hassle-free monthly investing", desc: "" },
      { title: "Withdraw anytime", desc: "" }
    ],
    buttonText: "Start Investing Now",
    secondaryButtonText: "Talk to Advisor",
    buttonColor: "#0ea5e9",
    trustText: "Trusted by Indian families for long-term wealth planning",
    image: "indian_sip_clean.png", // Using clean modern lifestyle fintech image
    reverse: false,
    bg: "gradient"
  },
  {
    id: "insurance",
    pill: "Protect What Matters Most",
    pillColor: "#10b981",
    title: "Comprehensive Insurance Solutions",
    description: "Secure your family's future and protect your assets with our comprehensive insurance portfolio. From life and health coverage to vehicle and property insurance, we offer customized solutions from India's most trusted insurance providers, all IRDAI approved.",
    stats: [
      { value: "98.5%", label: "Claim Settlement", subLabel: "Industry leading" },
      { value: "₹2Cr", label: "Max Coverage", subLabel: "Life protection" },
      { value: "25+", label: "Partners", subLabel: "Insurance providers" }
    ],
    features: [
      { title: "Term Life Insurance", desc: "Up to ₹2Cr coverage with premiums starting at ₹500/month" },
      { title: "Health Insurance", desc: "Family floater plans covering pre & post hospitalization, OPD" },
      { title: "Tax Benefits", desc: "Deductions up to ₹1.5L under 80C + ₹25K under 80D" },
      { title: "Rider Options", desc: "Add accidental death, waiver of premium, critical illness riders" }
    ],
    buttonText: "Get Started Now",
    buttonColor: "#10b981",
    image: "security sliders.jpg", // Using existing image
    reverse: true,
    bg: "light"
  },
  {
    id: "loans",
    pill: "Quick Approval, Minimal Documentation",
    pillColor: "#d946ef",
    title: "Fast & Flexible Loan Solutions",
    description: "Get instant access to funds when you need them most. Whether it's for personal needs, business expansion, home purchase, or education, our digital-first loan process ensures quick approvals within 24 hours with competitive interest rates starting from 8.5% p.a.",
    stats: [
      { value: "8.5%", label: "Interest Rate", subLabel: "Starting p.a." },
      { value: "₹5Cr", label: "Max Loan", subLabel: "Home loans" },
      { value: "24hrs", label: "Approval Time", subLabel: "For personal loans" }
    ],
    features: [
      { title: "Personal Loans", desc: "Unsecured loans up to ₹25 Lakhs with flexible repayment" },
      { title: "Business Loans", desc: "Working capital and term loans for SMEs" },
      { title: "Home Loans", desc: "Long-term housing finance with lowest EMI options" },
      { title: "Loan Against Mutual Funds", desc: "Instant overdraft facility against your MF portfolio" }
    ],
    buttonText: "Get Started Now",
    buttonColor: "#d946ef",
    image: "security sliders.jpg", // Using clean image
    reverse: false
  },
  {
    id: "stock",
    pill: "Expert Research, Zero Brokerage",
    pillColor: "#f97316",
    title: "Advanced Stock Trading Platform",
    description: "Trade like a pro with our advanced stock trading platform. Get access to real-time market data, technical charts, expert research reports, and personalized advisory. Zero brokerage on equity delivery and flat ₹20/order on Intraday & F&O.",
    stats: [
      { value: "₹0", label: "Brokerage", subLabel: "On equity delivery" },
      { value: "₹20", label: "Flat Fee", subLabel: "Intraday & F&O" },
      { value: "50+", label: "Research Reports", subLabel: "Daily stock ideas" }
    ],
    features: [
      { title: "Expert Advisory", desc: "Daily trading calls, short-term ideas, and long-term picks" },
      { title: "Advanced Charting", desc: "TradingView charts with 100+ indicators" },
      { title: "Margin Trading", desc: "Get up to 4x margin on 500+ approved stocks" },
      { title: "Algo Trading API", desc: "Build and deploy your own automated trading strategies" }
    ],
    buttonText: "Get Started Now",
    buttonColor: "#f97316",
    image: "security sliders.jpg", // Using clean image
    reverse: true,
    bg: "light"
  }
];

import { openConsultationModal } from "./ConsultationModal";

function FigmaServiceDetails() {
  return (
    <>
      {services.map((svc) => (
        <section className={`fsd-section ${svc.bg === "light" ? "fsd-bg-light" : svc.bg === "gradient" ? "fsd-bg-gradient" : ""}`} key={svc.id}>
          <div className={`fsd-inner ${svc.reverse ? "fsd-reverse" : ""}`}>
            
            <div className="fsd-image-col">
              <img src={svc.image} alt={svc.title} className="fsd-image" loading="lazy" decoding="async" />
            </div>

            <div className="fsd-content-col">
              <span className="fsd-pill" style={{ background: svc.pillColor }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px'}}>
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
                {svc.pill}
              </span>

              <h2 className="fsd-title">{svc.title}</h2>
              <p className="fsd-desc">{svc.description}</p>

              {svc.stats && svc.stats.length > 0 && (
                <div className="fsd-stats">
                  {svc.stats.map((stat, i) => (
                    <div className="fsd-stat-box" key={i}>
                      <div className="fsd-stat-val">{stat.value}</div>
                      <div className="fsd-stat-label">{stat.label}</div>
                      <div className="fsd-stat-sub">{stat.subLabel}</div>
                    </div>
                  ))}
                </div>
              )}

              <div className="fsd-features">
                {svc.features.map((feat, i) => (
                  <div className={`fsd-feature ${!feat.desc ? 'fsd-feature-single' : ''}`} key={i}>
                    <div className="fsd-feat-icon" style={{ color: svc.pillColor }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <div className="fsd-feat-content">
                      <h4 className="fsd-feat-title" style={!feat.desc ? { margin: 0, alignSelf: 'center', fontSize: '1rem', color: '#1e293b' } : {}}>{feat.title}</h4>
                      {feat.desc && <p className="fsd-feat-desc">{feat.desc}</p>}
                    </div>
                  </div>
                ))}
              </div>

              {(svc.buttonText || svc.secondaryButtonText) && (
                <div className="fsd-actions-wrapper">
                  <div className="fsd-buttons">
                    {svc.buttonText && (
                      <button onClick={openConsultationModal} className="fsd-btn" style={{ background: svc.buttonColor }}>
                        {svc.buttonText} <span style={{marginLeft: '4px'}}>→</span>
                      </button>
                    )}
                    {svc.secondaryButtonText && (
                      <button onClick={openConsultationModal} className="fsd-btn fsd-btn-outline" style={{ borderColor: svc.buttonColor, color: svc.buttonColor }}>
                        {svc.secondaryButtonText}
                      </button>
                    )}
                  </div>
                  {svc.trustText && (
                    <div className="fsd-trust-text">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px', color: '#10b981'}}>
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                      {svc.trustText}
                    </div>
                  )}
                </div>
              )}
            </div>

          </div>
        </section>
      ))}
    </>
  );
}

export default FigmaServiceDetails;

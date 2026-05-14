import React from "react";
import "./WhyChooseUs.css";

const features = [
  {
    title: "100% Compliant",
    badge: "SEBI & IRDAI Registered",
    desc: "Fully regulated by SEBI for investments and IRDAI for insurance. Your money is safe.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="wcu-icon-gradient">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="url(#grad1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="url(#grad1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "50+ Experts",
    badge: "SEBI Certified Advisors",
    desc: "Get personalized guidance from experienced investment advisors with 10+ years exp.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="wcu-icon-gradient">
        <defs>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="url(#grad2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="7" r="4" stroke="url(#grad2)" strokeWidth="2"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="url(#grad2)" strokeWidth="2"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="url(#grad2)" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: "256-bit",
    badge: "Bank-Grade Security",
    desc: "256-bit SSL encryption, 2FA, and secure payment gateways protect your data.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="wcu-icon-gradient">
        <defs>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#d946ef" />
          </linearGradient>
        </defs>
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="url(#grad3)" strokeWidth="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="url(#grad3)" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: "<2 min",
    badge: "24/7 Customer Support",
    desc: "Multi-language support via phone, chat, and email. Avg response under 2 mins.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="wcu-icon-gradient">
        <defs>
          <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
        </defs>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="url(#grad4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "15+",
    badge: "Award-Winning Platform",
    desc: "Best Financial Services App 2025, Forbes Top FinTech, ET Excellence Award.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="wcu-icon-gradient">
        <defs>
          <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        <circle cx="12" cy="8" r="7" stroke="url(#grad5)" strokeWidth="2"/>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" stroke="url(#grad5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "60 sec",
    badge: "Instant Processing",
    desc: "AI-powered automation for instant account opening, loan approvals, and trades.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="wcu-icon-gradient">
        <defs>
          <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="url(#grad6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Live",
    badge: "Real-Time Analytics",
    desc: "Advanced portfolio tracking, performance analysis, and reports in real-time.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="wcu-icon-gradient">
        <defs>
          <linearGradient id="grad7" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fb7185" />
            <stop offset="100%" stopColor="#db2777" />
          </linearGradient>
        </defs>
        <path d="M3 3v18h18" stroke="url(#grad7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" stroke="url(#grad7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "100+",
    badge: "Free Education",
    desc: "Access 100+ articles, webinars, and courses on investing and planning.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="wcu-icon-gradient">
        <defs>
          <linearGradient id="grad8" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="url(#grad8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="url(#grad8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "4.9 ★",
    badge: "Mobile App Rating",
    desc: "Trade and invest on-the-go with our award-winning iOS and Android apps.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="wcu-icon-gradient">
        <defs>
          <linearGradient id="grad9" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2dd4bf" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="url(#grad9)" strokeWidth="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18" stroke="url(#grad9)" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
  }
];

const stats = [
  { value: "", label: "Assets Under Management across 500+ cities in India", icon: "🌐" },
  { value: "", label: "Client satisfaction rate with 12,000+ verified reviews", icon: "💎" },
  { value: "18+ Years", label: "Of excellence in financial services and wealth management", icon: "🏆" }
];

const WhyChooseUs = () => {
  return (
    <section className="wcu-section">
      <div className="wcu-container">
        
        {/* Section Header */}
        <div className="wcu-header" data-aos="fade-up">
          <div className="wcu-pill">
            <span>🛡️ Why Highly Invested Trust Us</span>
          </div>
          <h2 className="wcu-heading">
            Industry Leading <br />
            <span className="wcu-heading-gradient">Features & Benefits</span>
          </h2>
          <p className="wcu-subheading">
            Experience the perfect blend of cutting-edge technology, regulatory compliance, and personalized service that sets us apart.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="wcu-grid">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="wcu-card"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="wcu-card-top-right">{feature.title}</div>
              <div className="wcu-icon-badge">
                {feature.icon}
              </div>
              <h3 className="wcu-card-title">{feature.badge}</h3>
              <p className="wcu-card-desc">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="wcu-stats-grid">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="wcu-stat-card"
              data-aos="fade-up"
              data-aos-delay={(features.length + i) * 100}
            >
              <div className="wcu-stat-icon">{stat.icon}</div>
              <div className="wcu-stat-value">{stat.value}</div>
              <p className="wcu-stat-label">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;

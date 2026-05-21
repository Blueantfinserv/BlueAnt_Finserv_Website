import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ShieldCheck, UserCheck, TrendingUp, Clock, Users, Award, MapPin, ArrowRight } from "lucide-react";
import "../styles/AboutPreview.css";

const AboutPreview = () => {
  const bulletPoints = [
    { text: "Disciplined investment approach" },
    { text: "Transparent investment process" },
    { text: "Long-term wealth planning" },
    { text: "AMFI & IRDAI aligned guidance" },
  ];

  const stats = [
    {
      icon: <Clock className="w-5 h-5" />,
      number: "13+ Years",
      label: "Blueant Legacy",
      desc: "Delivering 13+ years of Blueant legacy.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      number: "3,000+",
      label: "Happy Families",
      desc: "Empowering households with investment support.",
    },
    {
      icon: <Award className="w-5 h-5" />,
      number: "50+",
      label: "Expert Team service",
      desc: "Dedicated professionals guiding your wealth journey.",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      number: "Pan-India",
      label: "Presence",
      desc: "Serving clients efficiently across 200+ pincodes nationwide.",
    },
  ];

  return (
    <section className="about-section animate-section-fade-up">
      {/* LUXURY BACKGROUND DEPTH: Subtle Ambient Light */}
      <div className="about-ambient-glow">
        <div className="about-ambient-light-1"></div>
        <div className="about-ambient-light-2"></div>
      </div>
      
      <div className="about-container">
        
        {/* TOP CONTENT WRAPPER: Balanced Columns & controlled whitespace */}
        <div className="about-wrapper">
          
          {/* Left Content Position: Strictly aligned to container edge */}
          <div data-aos="fade-right" className="about-left">
            
            {/* 1. Badge: Ultra-Modern Fintech Label */}
            <div className="about-badge">
              <span className="about-badge-dot"></span>
              About Blueant
            </div>
            
            {/* 2. Heading: Tighter Typography Hierarchy */}
            <h2 className="about-heading">
              <span className="block mb-1">Built on Trust.</span>
              <span className="about-heading-accent">Driven by Discipline.</span>
            </h2>
            
            {/* 3. Paragraph: Compact and Readable */}
            <p className="about-description">
              At BlueAnt Finserv, we believe in one simple philosophy — <span className="about-text-highlight">“We don’t sell, we educate.”</span>
              <br /><br />
              We empower individuals and families with <span className="about-text-bold">disciplined SIP investments</span>, personalized financial planning, and a transparent investment process to build long-term wealth with confidence.
            </p>

            {/* 4. Features Grid: Clean 2-column checklist */}
            <div className="features-grid">
              {bulletPoints.map((point, i) => (
                <div key={i} className="feature-item">
                  <div className="feature-icon-wrapper">
                    <CheckCircle2 className="feature-icon" />
                  </div>
                  <span className="feature-text">{point.text}</span>
                </div>
              ))}
            </div>

            {/* 5. CTA Button: Placed exactly above cards section */}
            <Link to="/about" className="cta-btn">
              <span>Explore Our Legacy</span>
              <ArrowRight className="cta-btn-arrow" />
            </Link>
          </div>

          {/* Right Visual/Illustration Column */}
          <div className="about-image-wrapper">
            {/* Center Radial Halo Glow */}
            <div className="about-image-halo"></div>
            
            {/* Circular Glass Frame */}
            <div className="about-video-frame" data-aos="zoom-in" data-aos-delay="200">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                src={`${import.meta.env.BASE_URL}Video.mp4`}
                className="about-video"
              >
              </video>
              <div className="about-video-overlay"></div>
            </div>

            {/* Premium Floating Badges: Balanced Coordinates (3 Badges) */}
            <div className="badge-top-left">
              <div className="floating-tag-icon-wrapper floating-tag-icon-blue">
                <UserCheck className="w-3 h-3" />
              </div>
              <div className="floating-tag-info">
                <span className="floating-tag-title">Client-Centric</span>
                <span className="floating-tag-subtitle">Advisory Services</span>
              </div>
            </div>

            <div className="badge-middle-right">
              <div className="floating-tag-icon-wrapper floating-tag-icon-indigo">
                <TrendingUp className="w-3 h-3" />
              </div>
              <div className="floating-tag-info">
                <span className="floating-tag-title">Expert Growth</span>
                <span className="floating-tag-subtitle">Financial Excellence</span>
              </div>
            </div>

            <div className="badge-bottom-left">
              <div className="floating-tag-icon-wrapper floating-tag-icon-emerald">
                <ShieldCheck className="w-3 h-3" />
              </div>
              <div className="floating-tag-info">
                <span className="floating-tag-title">Transparent Process</span>
                <span className="floating-tag-subtitle">Regulation-aligned</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider Spacing between main content grid and stats section */}
        <div className="about-divider"></div>

        {/* STATS SECTION: Premium Elevate Cards Grid */}
        <div className="stats-section">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div 
                key={i} 
                data-aos="fade-up" 
                data-aos-delay={i * 100}
                className="stat-card"
              >
                <div className="stat-card-icon-wrapper">
                  {stat.icon}
                </div>
                <div className="stat-card-main">
                  <h4 className="stat-card-number">
                    {stat.number}
                  </h4>
                  <p className="stat-card-label">
                    {stat.label}
                  </p>
                </div>
                <p className="stat-card-desc">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;

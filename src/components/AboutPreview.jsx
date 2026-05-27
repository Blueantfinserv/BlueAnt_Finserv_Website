import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ShieldCheck, UserCheck, TrendingUp, Clock, Users, Award, MapPin, ArrowRight } from "lucide-react";
import "../styles/AboutPreview.css";

const AboutPreview = () => {
  const bulletPoints = [
    { text: "Disciplined investment approach" },
    { text: "Transparent investment process" },
    { text: "Long-term wealth planning" },

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
          <div className="about-image-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={`${import.meta.env.BASE_URL}2.png`} alt="Core Values" className="w-full max-w-[500px] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
          </div>
        </div>


      </div>
    </section>
  );
};

export default AboutPreview;

import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ShieldCheck, UserCheck, TrendingUp, Clock, Users, Award, MapPin, ArrowRight } from "lucide-react";
import ValuesDiagram from "./ValuesDiagram";
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
              <span className="block mb-1">Calm Decisions.</span>
              <span className="about-heading-accent">Steady Steps.</span>
            </h2>

            <div className="about-description-container">
              <h3 className="about-subtitle">
                The BlueAnt Way to <span className="about-text-highlight">Meaningful Wealth.</span>
              </h3>
              
              <div className="about-paragraphs">
                <p>
                  At BlueAnt Finserv, we believe meaningful wealth is built through discipline, consistency, and thoughtful financial decisions — not shortcuts.
                </p>
                <p>
                  Inspired by the steadiness of the blue sky and the discipline of an ant, we help individuals and families build long-term financial confidence with trust, clarity, and steady progress.
                </p>
                <p>
                  Through disciplined SIP investments, transparent financial guidance, and personalized wealth planning, we focus on creating lasting value for every financial journey.
                </p>
              </div>

              <div className="about-slogan-box">
                <div className="slogan-line">Steadiness of Blue.</div>
                <div className="slogan-line">Discipline of an Ant.</div>
                <div className="slogan-highlight">The Quiet Strength Behind Lasting Wealth.</div>
              </div>
            </div>

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
            <ValuesDiagram />
          </div>
        </div>


      </div>
    </section>
  );
};

export default AboutPreview;

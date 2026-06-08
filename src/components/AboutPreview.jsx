import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ShieldCheck, UserCheck, TrendingUp, Clock, Users, Award, MapPin, ArrowRight } from "lucide-react";
import ValuesDiagram from "./ValuesDiagram";
import "../styles/AboutPreview.css";

const AboutPreview = () => {

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
          <div className="about-left">

            {/* PART 1 */}
            <div data-aos="fade-right" data-aos-duration="1200" data-aos-easing="ease-out-cubic" data-aos-once="true">
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
            </div>

            <div className="about-description-container">
              {/* PART 2 */}
              <div data-aos="fade-right" data-aos-delay="300" data-aos-duration="1200" data-aos-easing="ease-out-cubic" data-aos-once="true">
                <h3 className="about-subtitle">
                  The BlueAnt Way to <span className="about-text-highlight">Meaningful Wealth Without Shortcuts.</span>
                </h3>
                
                <div className="about-paragraphs">
                  <p>
                    Inspired by the steadiness of the blue sky and the discipline of an ant, we help individuals and families build long-term financial confidence with trust, clarity, and steady progress.
                  </p>
                  <p>
                    Through disciplined SIP investments, transparent financial guidance, and personalized wealth planning, we focus on creating lasting value for every financial journey.
                  </p>
                </div>
              </div>

              {/* PART 3 */}
              <div data-aos="fade-right" data-aos-delay="600" data-aos-duration="1200" data-aos-easing="ease-out-cubic" data-aos-once="true">
                <div className="about-slogan-box">
                  <div className="slogan-line">Steadiness of Blue.</div>
                  <div className="slogan-line">Discipline of an Ant.</div>
                  <div className="slogan-highlight">The Quiet Strength Behind Lasting Wealth.</div>
                </div>
              </div>
            </div>

            {/* PART 3 (CTA) */}
            <div data-aos="fade-right" data-aos-delay="600" data-aos-duration="1200" data-aos-easing="ease-out-cubic" data-aos-once="true">
              <Link to="/about" className="cta-btn">
                <span>Explore Our Legacy</span>
                <ArrowRight className="cta-btn-arrow" />
              </Link>
            </div>
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
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";

import { 
  Clock, Users, Award, CheckCircle, TrendingUp, 
  ArrowRight, Shield, BarChart3, Quote, Sparkles,
  Wallet, Star
} from "lucide-react";

import "../../styles/AboutPage.css";

const CompanyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000, once: true });
  }, []);

  const reveal = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const stats = [
    { icon: <Clock />, end: 13, suffix: "+", label: "Years Blueant Legacy", sub: "Delivering 13+ years of Blueant legacy." },
    { icon: <Users />, end: 3000, suffix: "+", label: "Happy Families", sub: "Empowering households with investment support." },
    { icon: <Award />, end: 50, suffix: "+", label: "Expert Team service", sub: "Dedicated professionals guiding your wealth journey." },
    { icon: <Wallet />, end: 200, suffix: "+", label: "Pan-India Presence", sub: "Serving clients efficiently across 200+ pincodes nationwide." },
  ];

  return (
    <div className="company-body font-outfit min-h-screen overflow-hidden">
      <main className="flex flex-col">
        
        {/* 1. HERO SECTION - INDUSTRY POLISHED */}
        <section className="company-hero">
          <div className="company-container">
            <div className="hero-grid-layout">
              
              {/* LEFT CONTENT */}
              <motion.div initial="hidden" animate="visible" variants={stagger} className="hero-text-block" data-aos="fade-up">
                
                {/* TOP BADGE */}
                <motion.div variants={reveal} className="hero-top-badge">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Elite Financial Guidance</span>
                </motion.div>
 
                <motion.h1 variants={reveal} className="company-hero-title">
                  Designing Financial <br />
                  <span className="text-gradient-blue">Clarity</span> for Modern India
                </motion.h1>

                <motion.p variants={reveal} className="hero-description">
                  Blueant Finserv delivers research-driven financial guidance focused on structured planning and informed decision-making. We combine deep market understanding with disciplined processes to help families navigate their financial goals with confidence.
                </motion.p>

                {/* MODERN TRUST ROW */}
                <motion.div variants={reveal} className="hero-trust-row">
                  <div className="trust-rating-box">
                    <div className="trust-stars">
                      {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                    </div>
                    <span className="trust-score">4.9/5 Rating</span>
                  </div>
                  <div className="trust-divider"></div>
                  <div className="trust-avatars">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="trust-avatar">
                        <Users className="w-4 h-4 text-slate-400" />
                      </div>
                    ))}
                    <span className="trust-text">Trusted by 3,000+ Families</span>
                  </div>
                </motion.div>

                {/* CLEAN FEATURES GRID */}
                <motion.div variants={reveal} className="hero-features-grid">
                  {[
                    "Research-Oriented Approach", 
                    "AMFI Registered", 
                    "Compliance-Focused", 
                    "Digital-First Experience"
                  ].map((text, i) => (
                    <div key={i} className="hero-feature-item">
                      <CheckCircle className="w-4.5 h-4.5 text-emerald-500" />
                      <span>{text}</span>
                    </div>
                  ))}
                </motion.div>

                <motion.div variants={reveal} className="hero-cta-group">
                  <button 
                    onClick={() => window.dispatchEvent(new Event('open-consultation-modal'))}
                    className="btn-primary-premium"
                  >
                    Start Investing <ArrowRight className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => {
                      const viewSec = document.getElementById("our-perspective-section");
                      if (viewSec) viewSec.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="btn-secondary-glass"
                  >
                    Our Philosophy
                  </button>
                </motion.div>
              </motion.div>

              {/* RIGHT IMAGE SECTION - PREMIUM CARD FRAME */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1.2, ease: "easeOut" }} 
                className="hero-image-container hidden lg:flex"
                data-aos="fade-left"
              >
                <div className="premium-image-card">
                  {/* Decorative corner accents */}
                  <div className="card-accent top-left"></div>
                  <div className="card-accent bottom-right"></div>
                  
                  <img 
                    src={`${import.meta.env.BASE_URL}ant_3d_coins.png`} 
                    alt="Blueant Wealth" 
                    className="hero-main-img-clean" 
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. STATS SECTION - COMPACT INDUSTRY STYLE */}
        <section id="our-perspective-section" className="company-section pt-0">
          <div className="company-container">
            {/* Perspective Header */}
            <div className="text-center mb-16" data-aos="fade-up">
              <span className="text-blue-600 font-black text-[11px] uppercase tracking-[4px] mb-3 inline-block">Our Perspective</span>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">The Blueant Approach</h2>
            </div>

            <div className="stats-section">
              <div className="stats-grid">
                {stats.map((stat, idx) => (
                  <motion.div key={idx} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="stat-card">
                    <h4 className="stat-num-xl">
                      <CountUp end={stat.end} duration={3} enableScrollSpy scrollSpyOnce />
                      {stat.suffix}
                    </h4>
                    <p className="stat-label-premium" style={{ fontSize: '15px', marginBottom: '8px' }}>{stat.label}</p>
                    <p className="stat-desc-refined font-bold" style={{ fontSize: '12.5px', color: '#64748b' }}>{stat.sub}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. IDENTITY SECTION (BLUE / ANT) */}
        <section className="company-section">
          <div className="company-container">
            <div className="text-center" style={{ marginBottom: '56px' }}>
              <span className="text-blue-600 font-black text-[11px] uppercase tracking-[4px] mb-3 inline-block">The Meaning Behind Blueant</span>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">A Name Inspired by <br /> Trust, Discipline & Consistency</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="identity-card-premium ic-blue group">
                <div className="ic-bg-icon">
                  <Shield />
                </div>
                <div className="ic-header">
                  <div className="ic-icon-wrapper blue-glow">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="ic-title blue-text-gradient">BLUE</h3>
                </div>
                <p className="ic-desc">
                  Blue represents <strong className="text-slate-900">clarity, trust, professionalism, stability, and transparency</strong>.
                </p>
                <div className="quote-area-refined blue-quote">
                  <p>
                    In finance, these values reflect the importance of thoughtful planning, structured processes, and long-term financial awareness. Our approach emphasizes clarity and informed decision-making at every stage of the financial journey.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="identity-card-premium ic-ant group">
                <div className="ic-bg-icon">
                  <TrendingUp />
                </div>
                <div className="ic-header">
                  <div className="ic-icon-wrapper slate-glow">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="ic-title slate-text-gradient">ANT</h3>
                </div>
                <p className="ic-desc">
                  Ants symbolize <strong className="text-slate-900">consistency, patience, teamwork, discipline, and collective progress</strong>.
                </p>
                <div className="quote-area-refined slate-quote">
                  <p>
                    Their ability to build sustainably through small, continuous efforts reflects the philosophy behind long-term financial planning and disciplined wealth creation.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="analogy-banner-premium">
              <p>
                “Meaningful financial growth is built through consistency, informed choices, and disciplined long-term thinking.”
              </p>
              <div className="analogy-cta-pill">
                Small Steps. Lasting Progress.
              </div>
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default CompanyPage;

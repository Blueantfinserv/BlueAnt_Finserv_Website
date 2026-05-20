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
    { icon: <Clock />, end: 12, suffix: "+", label: "Years of Industry Understanding", sub: "Built through continuous learning, evolving market understanding, and client-focused financial guidance." },
    { icon: <Users />, end: 2600, suffix: "+", label: "Families Across India", sub: "Supporting individuals and families with structured financial awareness and planning-oriented solutions." },
    { icon: <Award />, end: 50, suffix: "+", label: "Experienced Financial Professionals", sub: "A collaborative team focused on simplifying financial concepts and investment understanding." },
    { icon: <Wallet />, end: 25, suffix: "+", label: "Pan-India Reach", sub: "Serving clients across multiple cities and regions through digital and relationship-driven engagement." },
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
                <motion.div variants={reveal} className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/80 backdrop-blur-md text-blue-600 rounded-full border border-blue-50 shadow-sm mb-6 w-fit">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span className="text-[9px] font-black uppercase tracking-[2.5px]">Elite Financial Guidance</span>
                </motion.div>
 
                <motion.h1 variants={reveal} className="company-hero-title">
                  Designing Financial <br />
                  Clarity for Modern India
                </motion.h1>

                <motion.p variants={reveal} className="hero-description">
                  Blueant Finserv delivers research-driven financial guidance focused on structured planning, long-term thinking, and informed decision-making. Our approach combines financial understanding, disciplined processes, and client-focused support designed to help individuals and families navigate evolving financial goals with greater confidence.
                </motion.p>

                {/* TRUST SECTION - HORIZONTAL REFINED */}
                <motion.div variants={reveal} className="rating-section-horizontal pb-6 border-b border-slate-100/60 mb-6">
                  <div className="avatar-group-refined -space-x-3 scale-90 origin-left">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-9 h-9 rounded-full border-2 border-white bg-slate-50 flex items-center justify-center shadow-sm overflow-hidden">
                        <Users className="w-5 h-5 text-slate-300" />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 ml-1">
                    <div className="flex text-amber-400">
                      {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-2.5 h-2.5 fill-current" />)}
                    </div>
                    <span className="text-[#0f172a] font-black text-[12px]">4.9/5</span>
                  </div>
                  <div className="h-3.5 w-px bg-slate-200"></div>
                  <p className="text-[#5b6475] text-[10.5px] font-black tracking-tight text-blue-600">
                    Trusted Financial Learning & Guidance Platform
                  </p>
                </motion.div>

                {/* Rated Highly Caption */}
                <motion.p variants={reveal} className="text-[#5b6475] text-[11.5px] font-bold tracking-tight mb-6 flex items-center gap-1">
                  <span>⭐ Rated highly by clients across India for financial awareness and structured support.</span>
                </motion.p>

                <motion.div variants={reveal} className="hero-badges">
                  {[
                    "Research-Oriented Approach", 
                    "AMFI Registered", 
                    "Compliance-Focused Practices", 
                    "Digital-First Experience", 
                    "Nationwide Client Network"
                  ].map((text, i) => (
                    <div key={i} className="trust-chip">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span>{text}</span>
                    </div>
                  ))}
                </motion.div>

                <motion.div variants={reveal} className="hero-cta-group">
                  <button 
                    onClick={() => {
                      const modalBtn = document.getElementById("start-investing-btn") || document.querySelector('[data-consultation-btn]');
                      if (modalBtn) modalBtn.click();
                    }}
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

              {/* RIGHT IMAGE SECTION - PREMIUM DEPTH */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 1.2, ease: "easeOut" }} 
                className="hero-image-card hidden lg:block"
                data-aos="zoom-in"
              >
                <img 
                  src={`${import.meta.env.BASE_URL}ant_3d_coins.png`} 
                  alt="Blueant Wealth" 
                  className="hero-main-img" 
                />
                
                {/* FLOATING ICONS */}
                <div className="floating-icon fi-tr"><TrendingUp className="w-7 h-7 text-blue-500" /></div>
                <div className="floating-icon fi-ml"><BarChart3 className="w-7 h-7 text-indigo-500" /></div>
                <div className="floating-icon fi-br"><Shield className="w-7 h-7 text-emerald-500" /></div>
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
            <div className="text-center mb-10">
              <span className="text-blue-600 font-black text-[11px] uppercase tracking-[4px] mb-3 inline-block">The Meaning Behind Blueant</span>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">A Name Inspired by <br /> Trust, Discipline & Consistency</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="identity-card-premium ic-blue">
                <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">BLUE</h3>
                <p className="text-lg text-[#5b6475] leading-relaxed font-medium">
                  Blue represents <strong>clarity, trust, professionalism, stability, and transparency</strong>.
                </p>
                <div className="quote-area-refined">
                  <p className="text-[14px] text-slate-500 leading-relaxed italic">
                    In finance, these values reflect the importance of thoughtful planning, structured processes, and long-term financial awareness. Our approach emphasizes clarity and informed decision-making at every stage of the financial journey.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="identity-card-premium ic-ant">
                <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">ANT</h3>
                <p className="text-lg text-[#5b6475] leading-relaxed font-medium">
                  Ants symbolize <strong>consistency, patience, teamwork, discipline, and collective progress</strong>.
                </p>
                <div className="quote-area-refined">
                  <p className="text-[14px] text-slate-500 leading-relaxed italic">
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

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
    { icon: <Clock />, end: 12, suffix: "+", label: "Years", sub: "Legacy of growth" },
    { icon: <Users />, end: 10000, suffix: "+", label: "Families", sub: "Nationwide trust" },
    { icon: <Award />, end: 10, suffix: "+", label: "Experts", sub: "Top-tier advisors" },
    { icon: <Wallet />, end: 25, suffix: "+", label: "States", sub: "Pan-India reach" },
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
                  <span className="text-[9px] font-black uppercase tracking-[2.5px]">Elite Financial Advisory</span>
                </motion.div>

                <motion.h1 variants={reveal} className="company-hero-title">
                  Designing Your <br />
                  Financial Future.
                </motion.h1>

                <motion.p variants={reveal} className="hero-description">
                  Blueant Finserv is more than an advisory; we are the <strong>architects of wealth</strong>. We transform disciplined strategies into enduring legacies for families nationwide.
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
                  <p className="text-[#5b6475] text-[10px] font-bold tracking-tight opacity-75">Trusted by 10,000+ families across India</p>
                </motion.div>

                <motion.div variants={reveal} className="flex flex-wrap gap-3 mb-9">
                  {["AMFI Registered", "SEBI Compliant", "Nationwide Presence"].map((text, i) => (
                    <div key={i} className="trust-chip">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span>{text}</span>
                    </div>
                  ))}
                </motion.div>

                <motion.div variants={reveal} className="flex flex-wrap gap-5">
                  <button className="btn-primary-premium">
                    Start Investing <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="btn-secondary-glass">
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
                
                {/* FLOATING ICONS (ONLY 3) */}
                <div className="floating-icon fi-tr"><TrendingUp className="w-7 h-7 text-blue-500" /></div>
                <div className="floating-icon fi-ml"><BarChart3 className="w-7 h-7 text-indigo-500" /></div>
                <div className="floating-icon fi-br"><Shield className="w-7 h-7 text-emerald-500" /></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. STATS SECTION - COMPACT INDUSTRY STYLE */}
        <section className="company-section">
          <div className="company-container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <motion.div key={idx} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="stat-card-premium">
                  <h4 className="stat-num-xl">
                    <CountUp end={stat.end} duration={3} enableScrollSpy scrollSpyOnce />
                    {stat.suffix}
                  </h4>
                  <p className="stat-label-premium">{stat.label}</p>
                  <p className="stat-desc-refined font-bold">{stat.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. IDENTITY SECTION (BLUE / ANT) */}
        <section className="company-section">
          <div className="company-container">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-black text-[11px] uppercase tracking-[4px] mb-3 inline-block">The Foundation</span>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">A Name Rooted in <br /> Purpose and Progress</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="identity-card-premium ic-blue">
                <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">BLUE</h3>
                <p className="text-lg text-[#5b6475] leading-relaxed font-medium">
                  A color known for its <strong>trust, stillness, care, credibility, calmness, and professionalism</strong>.
                </p>
                <div className="quote-area-refined">
                  <p className="text-[14px] text-slate-500 leading-relaxed italic">
                    In the world of finance, blue reflects stability, transparency, and reliability—qualities that define our approach to delivering long-term solutions.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="identity-card-premium ic-ant">
                <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">ANT</h3>
                <p className="text-lg text-[#5b6475] leading-relaxed font-medium">
                  A creature known for its <strong>focus, discipline, persistence, teamwork, and strategic thinking</strong>.
                </p>
                <div className="quote-area-refined">
                  <p className="text-[14px] text-slate-500 leading-relaxed italic">
                    Ants embody dedication and unity—core traits that mirror our commitment to helping clients build enduring wealth through structured planning.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="analogy-banner-premium">
              <p>
                "Just like Ants build mighty colonies with one grain at a time, we can create your Financial Empire by taking small and smart steps with Blueant."
              </p>
              <div className="analogy-cta-pill">
                Small Steps. Big Future!
              </div>
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default CompanyPage;

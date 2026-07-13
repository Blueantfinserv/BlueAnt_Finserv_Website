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
        
        {/* 0. PRECIZE HERO SECTION */}
        <section className="relative w-full min-h-[90vh] lg:min-h-[100vh] flex items-center justify-center overflow-hidden bg-[#030408]">
          
          {/* Deep Base Layer */}
          <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,#0a0d1a_0%,#030408_100%)]"></div>
          
          {/* Volumetric Light Blooms (Behind Image) */}
          <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-[#0e1736] rounded-full mix-blend-screen filter blur-[120px] opacity-60 z-0 pointer-events-none"></div>
          <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-[#080d24] rounded-full mix-blend-screen filter blur-[150px] opacity-80 z-0 pointer-events-none"></div>
          
          <div className="max-w-[1280px] w-full mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            {/* Left Content */}
            <div className="flex flex-col items-start text-left w-full lg:w-1/2 relative z-20" data-aos="fade-right">
              <h1 className="text-white mb-12 leading-[1.2]" style={{ fontFamily: "'Times New Roman', Times, serif", fontSize: 'clamp(2.25rem, 4vw, 3.6rem)', letterSpacing: '0.5px', fontWeight: '400', textShadow: '0 4px 30px rgba(0,0,0,0.8)' }}>
                Your Trusted Partner in <br /> Financial Growth
              </h1>
              <p className="text-[#a0aabf] text-[15px] lg:text-[17px] mb-10 leading-[1.7] max-w-[550px]" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8)' }}>
                BlueAnt Finserv is a trusted financial services company focused on expert guidance, personalized wealth solutions, and an unwavering client-first approach.
              </p>
              <p className="text-[#808a9f] text-[14px] lg:text-[15px] mb-16 leading-[1.7] max-w-[550px]">
                Built on integrity and transparency, we foster long-term relationships that empower clients to make informed financial decisions with absolute confidence.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="precize-reserve-btn relative shadow-[0_0_40px_rgba(255,255,255,0.1)] flex items-center justify-center" style={{ margin: 0, height: '51px', fontSize: '13.5px', padding: '0 28px' }}>
                  Explore Our Journey
                </button>
                <button className="precize-reserve-btn relative shadow-[0_0_40px_rgba(255,255,255,0.1)] bg-transparent border border-[rgba(255,255,255,0.2)] text-white hover:bg-[rgba(255,255,255,0.05)] flex items-center justify-center" style={{ margin: 0, background: 'transparent', height: '51px', fontSize: '13.5px', padding: '0 28px' }}>
                  Contact Our Team
                </button>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative flex justify-center lg:justify-end w-full lg:w-1/2 mt-12 lg:mt-0 z-10" data-aos="fade-left" style={{ perspective: '1200px' }}>
              <motion.img 
                src={`${import.meta.env.BASE_URL}blueant_phone_mockup_colorful.png`} 
                alt="BlueAnt Finserv Colorful Feature Cards Mockup" 
                className="w-full max-w-[360px] lg:max-w-[460px] h-auto object-contain lg:translate-y-8 drop-shadow-2xl" 
                style={{ 
                  WebkitMaskImage: 'radial-gradient(circle at 60% 50%, black 45%, transparent 75%)', 
                  maskImage: 'radial-gradient(circle at 60% 50%, black 45%, transparent 75%)',
                  opacity: 0.95,
                  transformStyle: 'preserve-3d'
                }}
                animate={{
                  y: [0, -20, 0],
                  rotateX: [5, -5, 5],
                  rotateY: [-10, 10, -10]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                onError={(e) => { e.target.onerror = null; e.target.src = `${import.meta.env.BASE_URL}phone-mockup-precize.png`; }}
              />
            </div>
          </div>

          {/* Cinematic Front Lighting & Haze (Over Image to blend edges) */}
          <div className="absolute top-[20%] right-[-5%] w-[800px] h-[800px] bg-[#142352] rounded-full mix-blend-screen filter blur-[160px] opacity-40 z-20 pointer-events-none"></div>
          <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-[#1d3275] rounded-full mix-blend-screen filter blur-[140px] opacity-30 z-20 pointer-events-none"></div>
          
          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#010204_100%)] opacity-90 z-30 pointer-events-none"></div>
        </section>

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

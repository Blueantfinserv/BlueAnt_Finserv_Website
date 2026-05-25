import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Shield, Check, Award, BookOpen, HeartHandshake, ShieldCheck, Heart, Activity, Layers } from "lucide-react";
import { openConsultationModal } from "../../components/ConsultationModal";
import "../../styles/WealthProtectionPage.css";
import "../../styles/WealthCreationPage.css";

const WealthProtectionPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="wpp-wrapper pt-20 font-outfit overflow-x-hidden">
      <main>
        {/* Hero Section */}
        <section className="wpp-hero">
          <div className="wpp-hero-glow"></div>
          <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <div className="w-full lg:w-1/2" data-aos="fade-right">
                <div className="wpp-badge mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse"></span>
                  <span>Risk Awareness & Financial Protection Education</span>
                </div>
                <h1 className="wpp-hero-title text-5xl lg:text-7xl font-black mb-6">
                  Wealth <br />
                  <span>Protection.</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-2xl mb-8">
                  Protecting wealth begins with understanding risk, financial preparedness, and long-term structural planning. Our educational approach focuses on helping individuals evaluate financial vulnerabilities, understand protection frameworks, and strengthen decision-making through research-driven guidance.
                </p>
                
                {/* Secure Info Widget */}
                <div className="wcp-hero-widget mt-8" data-aos="zoom-in" data-aos-delay="200">
                  <div className="wcp-widget-icon" style={{ background: 'rgba(16, 185, 129, 0.12)', color: '#34d399' }}>
                    <Shield size={22} />
                  </div>
                  <div className="wcp-widget-content">
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-500">Structured Protection Learning</span>
                    <h4 style={{ marginTop: '2px' }}>Understanding Risk Hedging Frameworks</h4>
                    <p>Explore the math of family security buffers, emergency liquidity reserves, and defensive asset allocations. Learn how proper risk insulation prevents equity liquidation during market corrections.</p>
                  </div>
                </div>
              </div>

              {/* Hero Image - Top Right */}
              <div className="w-full lg:w-1/2 mt-12 lg:mt-0" data-aos="fade-left" data-aos-delay="300">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group w-full aspect-[4/3] lg:aspect-[16/10]">
                  <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-600/10 transition-colors duration-500 z-10 pointer-events-none"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80" 
                    alt="Wealth Protection" 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:brightness-95"
                  />
                  <div className="absolute top-6 right-6 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg z-20">
                    <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Insurance Advisory Section */}
        <section className="wpp-advisory-section">
          <div className="wpp-section-glow"></div>
          
          <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
              
              {/* Left Column: Educational Risk Pillars */}
              <div data-aos="fade-right">
                <div className="wpp-shield-icon mb-8">
                  <Shield size={32} />
                </div>
                
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                  Education-Focused <br />
                  <span className="text-emerald-400">Risk Understanding</span>
                </h2>
                
                <p className="text-lg text-slate-400 leading-relaxed font-medium mb-4">
                  At <strong>Blueant Finserv</strong>, we focus on financial awareness and structured learning designed to help individuals better understand risk management concepts, coverage structures, and portfolio protection approaches.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed font-medium">
                  We believe financial protection should be approached through clarity, analysis, and informed evaluation rather than product-driven conversations.
                </p>
              </div>
              
              {/* Right Column: Fiduciary Guarantee & Stat Glass Card */}
              <div className="relative" data-aos="fade-left">
                <div className="wpp-glass-card">
                  <div className="absolute -top-1/4 -right-1/4 w-72 h-72 bg-emerald-500/5 rounded-full blur-[60px] pointer-events-none"></div>
                  
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-wider mb-6">
                    <HeartHandshake size={10} />
                    <span>Independent Financial Guidance</span>
                  </div>
                  
                  <h3 className="text-3xl font-black text-white mb-6 leading-snug">
                    “We don’t sell, we educate.”
                  </h3>
                  
                  <p className="text-base text-slate-400 leading-relaxed mb-6 font-medium">
                    Our approach is centered around financial understanding, portfolio awareness, and educational support designed to help individuals assess existing financial structures with greater clarity and confidence.
                  </p>

                  <div className="space-y-4 mb-2">
                    <h4 className="text-xs font-black uppercase tracking-wider text-emerald-400 mb-2">What We Focus On</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        "Risk-awareness education",
                        "Coverage structure understanding",
                        "Financial preparedness frameworks",
                        "Portfolio review guidance",
                        "Long-term financial continuity",
                        "Research-oriented resources"
                      ].map((focusItem, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-emerald-500/[0.04] hover:border-emerald-500/[0.15] transition duration-300">
                          <Check size={14} className="text-emerald-400 shrink-0" />
                          <span className="text-[11.5px] font-bold text-slate-300">{focusItem}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
            </div>

            {/* Interactive Grid of 4 Pillars */}
            <div className="mb-12" data-aos="fade-up">
              <div className="max-w-3xl mb-12">
                <h3 className="text-3xl font-black text-white mb-3">Core Areas of Financial Protection Learning</h3>
                <p className="text-slate-400 text-base leading-relaxed font-medium">Our primary educational modules walk you through key risk metrics to prepare your portfolio for high-stress economic corrections.</p>
              </div>
              
              <div className="wpp-pillars-grid">
                {[
                  {
                    title: "Income Protection Understanding",
                    desc: "Learn the fundamentals of financial continuity planning, family financial dependency considerations, and long-term income replacement concepts.",
                    icon: Shield,
                    color: "text-emerald-400 bg-emerald-500/10",
                    progress: "90%",
                    level: "Foundational",
                    badgeClass: "badge-foundational"
                  },
                  {
                    title: "Medical Preparedness Awareness",
                    desc: "Understand healthcare-related financial planning concepts, emergency preparedness structures, and the importance of maintaining financial stability during unexpected situations.",
                    icon: Heart,
                    color: "text-rose-400 bg-rose-500/10",
                    progress: "65%",
                    level: "Critical Exposure",
                    badgeClass: "badge-intermediate"
                  },
                  {
                    title: "Coverage Structure Evaluation",
                    desc: "Explore policy structures, coverage terminology, exclusions, riders, and common areas individuals often overlook while evaluating financial protection frameworks.",
                    icon: Activity,
                    color: "text-cyan-400 bg-cyan-500/10",
                    progress: "45%",
                    level: "Advanced Auditing",
                    badgeClass: "badge-intermediate"
                  },
                  {
                    title: "Asset Protection Frameworks",
                    desc: "Understand approaches related to safeguarding financial assets, managing liabilities, and maintaining long-term portfolio stability during changing economic conditions.",
                    icon: Layers,
                    color: "text-indigo-400 bg-indigo-500/10",
                    progress: "20%",
                    level: "Structural Safety",
                    badgeClass: "badge-advanced"
                  }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="wpp-pillar-card group relative">
                      {/* Floating Level Badge in Top Right */}
                      <div className="absolute top-6 right-6">
                        <span className={`wcp-track-badge ${item.badgeClass}`} style={{ fontSize: '9px', padding: '3px 8px', borderRadius: '6px' }}>{item.level}</span>
                      </div>
                      
                      <div className={`wpp-pillar-icon-box ${item.color}`}>
                        <Icon size={22} />
                      </div>
                      <h4 className="text-xl font-black text-white mb-3">{item.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed mb-6">{item.desc}</p>
                      
                      {/* Interactive Syllabus Progress Bar */}
                      <div className="wcp-progress-bar-wrapper">
                        <div className="wcp-progress-bar-labels">
                          <span>Syllabus Depth</span>
                          <span>{item.progress} Covered</span>
                        </div>
                        <div className="wcp-progress-bar-track" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                          <div className="wcp-progress-bar-fill" style={{ width: item.progress, background: 'linear-gradient(90deg, #10b981, #34d399)' }}></div>
                        </div>
                      </div>

                      <div className="wcp-syllabus-meta" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-black">Structured Module</span>
                        <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Research Session</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

        {/* New Section: Fiduciary Audit Blueprint */}
        <section className="wpp-blueprint-section">
          <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
            <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
              <span className="text-emerald-400 text-xs font-black uppercase tracking-widest bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20">Financial Stability Framework</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mt-6 mb-6 leading-tight">
                Understanding Protection-Oriented <br />
                <span>Financial Planning</span>
              </h2>
              <p className="text-base md:text-lg text-slate-400 leading-relaxed font-medium">
                Our educational modules focus on helping individuals evaluate how different financial preparedness structures contribute to long-term portfolio resilience and financial continuity.
              </p>
            </div>

            <div className="wpp-blueprint-grid">
              {[
                {
                  num: "Phase 01",
                  title: "Emergency Reserve Planning",
                  desc: "Learn the importance of maintaining accessible financial reserves and liquidity-focused planning during uncertain market or personal situations."
                },
                {
                  num: "Phase 02",
                  title: "Inflation & Lifestyle Planning",
                  desc: "Understand how inflation, lifestyle changes, and evolving financial responsibilities can influence long-term financial planning decisions."
                },
                {
                  num: "Phase 03",
                  title: "Existing Structure Review",
                  desc: "Explore ways to review financial arrangements, identify overlaps, and better understand existing financial protection structures through educational analysis."
                }
              ].map((step, idx) => (
                <div key={idx} className="wpp-blueprint-card" data-aos="fade-up" data-aos-delay={idx * 150}>
                  <span className="wpp-blueprint-num">{step.num}</span>
                  <h3 className="text-xl font-black text-white mb-4">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Customized Fiduciary Educational CTA Section */}
        <section className="wcp-section" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)' }}>
          <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
            <div className="wcp-cta-card" data-aos="fade-up">
              {/* Premium background grid mesh and ambient radial glows */}
              <div className="wcp-cta-grid-pattern"></div>
              <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
              
              <div className="wcp-cta-grid">
                {/* Left Column: Explore Syllabus details */}
                <div>
                  <div className="wcp-learning-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-6">
                    <Award size={12} />
                    <span>Your Financial Learning Partner</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                    Strengthen Your Understanding <br />
                    <span>of Financial Protection</span>
                  </h2>
                  <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed">
                    Access educational resources, structured financial literacy sessions, and research-driven learning frameworks designed to support informed financial decision-making.
                  </p>
                  
                  <div className="space-y-4">
                    <h4 style={{ color: '#93c5fd', fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '16px' }}>What You Can Explore</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Financial literacy learning sessions",
                        "Risk-awareness frameworks",
                        "Portfolio understanding concepts",
                        "Long-term planning education",
                        "Digital-first learning experience",
                        "Simplified educational guidance"
                      ].map((exploreItem, idx) => (
                        <div key={idx} className="flex items-center gap-3 wcp-feature-item">
                          <div className="w-5 h-5 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center flex-shrink-0 wcp-feature-icon">
                            <Check size={10} strokeWidth={3} />
                          </div>
                          <span className="text-xs font-bold text-slate-300">{exploreItem}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Independent Action Card */}
                <div>
                  <div className="wcp-cta-glass-card">
                    <h3>Learn. Understand. Evaluate Independently.</h3>
                    <p>
                      Develop financial awareness through structured educational resources focused on clarity, financial preparedness, and informed long-term thinking.
                    </p>
                    <div className="space-y-4">
                      <button 
                        onClick={openConsultationModal}
                        className="wcp-learning-btn w-full py-4 px-6 text-white font-black rounded-2xl transition duration-300 text-center text-sm uppercase tracking-wider block"
                      >
                        Start Learning Journey
                      </button>
                      <p className="text-[10px] text-center text-slate-400 font-bold">
                        Pure Fiduciary Mandate • No hidden distribution commissions
                      </p>
                    </div>

                    <div className="flex items-center gap-4 mt-8 pt-6" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                        <Shield size={20} strokeWidth={2.5} />
                      </div>
                      <div>
                        <div className="text-white font-black text-sm tracking-wide">AMFI Registered Distributor</div>
                        <div className="text-slate-400 text-xs font-bold tracking-wider mt-1">ARN: 129543</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WealthProtectionPage;

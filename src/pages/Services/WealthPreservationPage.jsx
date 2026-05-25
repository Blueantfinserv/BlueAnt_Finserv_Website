import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Shield, Check, Award, HeartHandshake, ShieldCheck, Heart, Landmark, Target, FileText, Wallet, Layers, Activity } from "lucide-react";
import { openConsultationModal } from "../../components/ConsultationModal";
import "../../styles/WealthPreservationPage.css";
import "../../styles/WealthCreationPage.css";

const WealthPreservationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="wpr-wrapper pt-20 font-outfit">
      <main>
        {/* Hero Section */}
        <section className="wpr-hero">
          <div className="wpr-hero-glow"></div>
          <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <div className="w-full lg:w-1/2" data-aos="fade-right">
                <div className="wpr-badge mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#c084fc] animate-pulse"></span>
                  <span>Stability & Legacy Planning Education</span>
                </div>
                <h1 className="wpr-hero-title text-5xl lg:text-7xl font-black mb-6">
                  Wealth <br />
                  <span>Preservation.</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-2xl mb-8">
                  Wealth preservation is not only about growing assets — it is about sustaining financial stability, strengthening long-term continuity, and creating structured frameworks designed for future generations. At Blueant Finserv, our educational approach focuses on helping individuals understand legacy planning, capital stability, financial continuity, and preservation-oriented decision-making through research-driven learning frameworks.
                </p>

                {/* Secure Info Widget */}
                <div className="wcp-hero-widget mt-8" data-aos="zoom-in" data-aos-delay="200" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', color: '#ffffff' }}>
                  <div className="wcp-widget-icon" style={{ background: 'rgba(139, 92, 246, 0.12)', color: '#c084fc', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
                    <Landmark size={22} />
                  </div>
                  <div className="wcp-widget-content">
                    <span className="text-[10px] font-black uppercase tracking-wider text-purple-400">Stability & Legacy Planning Education</span>
                    <h4 style={{ marginTop: '2px', color: '#ffffff' }}>Building Financial Continuity with Clarity</h4>
                    <p style={{ color: '#94a3b8' }}>Long-term wealth preservation requires disciplined planning, structural awareness, and informed financial understanding. Our learning-oriented approach explores how thoughtful asset structures, risk-aware allocation, and long-term planning frameworks preserve stability.</p>
                  </div>
                </div>
              </div>

              {/* Hero Image - Top Right */}
              <div className="w-full lg:w-1/2 mt-12 lg:mt-0 lg:-mt-28" data-aos="fade-left" data-aos-delay="300">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group w-full aspect-[4/3] lg:aspect-[16/10]">
                  <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-600/10 transition-colors duration-500 z-10 pointer-events-none"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80" 
                    alt="Wealth Preservation" 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:brightness-95"
                  />
                  <div className="absolute top-6 right-6 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg z-20">
                    <Landmark className="w-7 h-7 text-purple-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advisory Section */}
        <section className="wpr-advisory-section">
          <div className="wpr-section-glow"></div>
          
          <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
              
              {/* Left Column: Educational Preservation Pillars */}
              <div data-aos="fade-right">
                <div className="wpr-shield-icon mb-8">
                  <Landmark size={32} />
                </div>
                
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                  Education-First <br />
                  <span className="text-purple-400">Wealth Preservation</span>
                </h2>
                
                <p className="text-lg text-slate-400 leading-relaxed font-medium mb-4">
                  Our focus remains centered on financial understanding, portfolio awareness, and educational guidance designed to help individuals evaluate preservation-oriented financial structures independently.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed font-medium">
                  We believe wealth preservation should be approached through clarity, discipline, and informed long-term thinking rather than product-driven recommendations.
                </p>
              </div>
              
              {/* Right Column: Fiduciary Guarantee & Stat Glass Card */}
              <div className="relative" data-aos="fade-left">
                <div className="wpr-glass-card">
                  <div className="absolute -top-1/4 -right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-[60px] pointer-events-none"></div>
                  
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-full text-[10px] font-black uppercase tracking-wider mb-6">
                    <HeartHandshake size={10} />
                    <span>Pure Fiduciary Mandate</span>
                  </div>
                  
                  <h3 className="text-3xl font-black text-white mb-6 leading-snug">
                    “We don’t sell, we educate.”
                  </h3>
                  
                  <p className="text-base text-slate-400 leading-relaxed mb-6 font-medium">
                    At Blueant Finserv, our educational approach is designed to help individuals assess legacy structures and tax-efficiency strategies. We don't sell trust products or insurance—we educate you to preserve what you have built.
                  </p>

                  <div className="space-y-4 mb-2">
                    <h4 className="text-xs font-black uppercase tracking-wider text-purple-400 mb-2">What We Focus On</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        "Legacy planning awareness",
                        "Estate structure understanding",
                        "Tax-efficiency education",
                        "Long-term capital stability concepts",
                        "Portfolio continuity frameworks",
                        "Research-oriented preservation learning"
                      ].map((focusItem, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-purple-500/[0.04] hover:border-purple-500/[0.15] transition duration-300">
                          <Check size={14} className="text-purple-400 shrink-0" />
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
                <h3 className="text-3xl font-black text-white mb-3">Core Areas of Wealth Preservation Learning</h3>
                <p className="text-slate-400 text-base leading-relaxed font-medium">Our primary educational modules walk you through key risk metrics to prepare your portfolio for high-stress economic corrections.</p>
              </div>
              
              <div className="wpr-pillars-grid">
                {[
                  {
                    title: "Retirement & Financial Continuity Understanding",
                    desc: "Explore long-term financial sustainability concepts, lifestyle continuity planning, and structured approaches designed to support evolving financial priorities over time.",
                    icon: Target,
                    color: "text-purple-400 bg-purple-500/10",
                    progress: "85%",
                    level: "Capital Compounder",
                    badgeClass: "badge-foundational"
                  },
                  {
                    title: "Legacy & Estate Awareness",
                    desc: "Understand foundational concepts related to estate structures, succession planning, generational asset continuity, and organized financial transition frameworks.",
                    icon: Heart,
                    color: "text-rose-400 bg-rose-500/10",
                    progress: "60%",
                    level: "Fiduciary Succession",
                    badgeClass: "badge-intermediate"
                  },
                  {
                    title: "Tax-Efficiency Concepts",
                    desc: "Learn about financial structuring approaches, tax-awareness principles, and compliance-oriented planning frameworks designed to support long-term financial organization.",
                    icon: FileText,
                    color: "text-cyan-400 bg-cyan-500/10",
                    progress: "40%",
                    level: "Advanced Shielding",
                    badgeClass: "badge-intermediate"
                  },
                  {
                    title: "Stability-Oriented Allocation Frameworks",
                    desc: "Explore conservative allocation concepts, capital stability approaches, liquidity awareness, and preservation-focused portfolio understanding.",
                    icon: Wallet,
                    color: "text-indigo-400 bg-indigo-500/10",
                    progress: "15%",
                    level: "Sovereign Security",
                    badgeClass: "badge-advanced"
                  }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="wpr-pillar-card group relative">
                      {/* Floating Level Badge in Top Right */}
                      <div className="absolute top-6 right-6">
                        <span className={`wcp-track-badge ${item.badgeClass}`} style={{ fontSize: '9px', padding: '3px 8px', borderRadius: '6px' }}>{item.level}</span>
                      </div>
                      
                      <div className={`wpr-pillar-icon-box ${item.color}`}>
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
                          <div className="wcp-progress-bar-fill" style={{ width: item.progress, background: 'linear-gradient(90deg, #a78bfa, #7c3aed)' }}></div>
                        </div>
                      </div>

                      <div className="wcp-syllabus-meta" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span className="text-[10px] uppercase tracking-wider text-purple-400 font-black">Structured Module</span>
                        <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Research Session</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

        {/* Generational Continuity Framework Section */}
        <section className="wpr-blueprint-section">
          <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16">
            <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
              <span className="text-purple-400 text-xs font-black uppercase tracking-widest bg-purple-500/10 px-4 py-1.5 rounded-full border border-purple-500/20">Generational Continuity Framework</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mt-6 mb-6 leading-tight">
                Understanding Long-Term <br />
                <span>Asset Preservation</span>
              </h2>
              <p className="text-base md:text-lg text-slate-400 leading-relaxed font-medium">
                Our educational modules focus on helping individuals better understand how structured planning frameworks contribute to financial continuity, organized asset management, and long-term portfolio resilience.
              </p>
            </div>

            <div className="wpr-blueprint-grid">
              {[
                {
                  num: "Phase 01",
                  title: "Financial Continuity Planning",
                  desc: "Learn how structured financial planning frameworks support long-term family preparedness, evolving responsibilities, and future-oriented decision-making."
                },
                {
                  num: "Phase 02",
                  title: "Estate Structure Education",
                  desc: "Explore the role of succession frameworks, ownership structures, and organized financial documentation in maintaining clarity across generations."
                },
                {
                  num: "Phase 03",
                  title: "Preservation-Oriented Portfolio Review",
                  desc: "Understand how reviewing financial arrangements, allocation structures, and long-term planning approaches can contribute to maintaining financial balance and continuity."
                }
              ].map((step, idx) => (
                <div key={idx} className="wpr-blueprint-card" data-aos="fade-up" data-aos-delay={idx * 150}>
                  <span className="wpr-blueprint-num">{step.num}</span>
                  <h3 className="text-xl font-black text-white mb-4">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Educational CTA Section */}
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
                    <span>of Wealth Preservation</span>
                  </h2>
                  <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed">
                    Access educational resources, structured financial literacy sessions, and research-driven learning frameworks focused on legacy awareness, long-term planning, and financial continuity.
                  </p>
                  
                  <div className="space-y-4">
                    <h4 style={{ color: '#93c5fd', fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '16px' }}>What You Can Explore</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Legacy planning education",
                        "Estate structure awareness",
                        "Preservation-focused portfolio understanding",
                        "Financial continuity frameworks",
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
                    <h3>Learn. Understand. Preserve with Clarity.</h3>
                    <p>
                      Develop long-term financial awareness through structured educational resources focused on stability, continuity, and informed generational planning.
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

export default WealthPreservationPage;

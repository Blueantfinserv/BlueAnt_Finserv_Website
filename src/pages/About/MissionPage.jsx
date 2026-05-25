import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Target, Eye, Check, Shield, TrendingUp, Rocket, Users, Scale, Lock, GraduationCap, Clock, Star, BadgeCheck, FileText } from "lucide-react";
import "../../styles/AboutPage.css";

const MissionPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white font-outfit pt-36 overflow-x-hidden">
      <main className="flex flex-col">
        {/* MISSION & VISION SECTION - INDUSTRY LEVEL FINTECH UI */}
        <div className="section-wrapper about-belief-wrapper relative bg-[radial-gradient(circle_at_top_left,#eef4ff_0%,#f8fbff_40%,#ffffff_100%)]">
          {/* Ambient Lighting & Floating Finance Icons */}
          <div className="bg-animation-layer absolute inset-0 overflow-hidden pointer-events-none z-0">
             <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-blue-100/15 blur-[120px] rounded-full animate-pulse-slow"></div>
             <div className="absolute bottom-[10%] right-[10%] w-[450px] h-[450px] bg-indigo-50/15 blur-[100px] rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
             <div className="absolute top-[20%] right-[15%] opacity-[0.03] text-blue-900 animate-float-slow"><TrendingUp size={120} /></div>
             <div className="absolute bottom-[20%] left-[10%] opacity-[0.03] text-blue-900 animate-float-slow" style={{ animationDelay: '3s' }}><Shield size={100} /></div>
             <div className="absolute top-[60%] right-[30%] opacity-[0.03] text-blue-900 animate-float-slow" style={{ animationDelay: '1.5s' }}><Rocket size={80} /></div>
          </div>
          
          <section id="mission-vision" className="mission-vision-section beliefSection scroll-mt-[90px]">
            <div className="container mx-auto px-6 lg:px-12 max-w-[1140px] relative z-10">
              
               {/* Header Section */}
              <div className="text-center mb-10 lg:mb-12 flex flex-col items-center" data-aos="fade-up">
                 {/* Ultra-Modern Fintech Label */}
                <div className="client-philosophy-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/50 backdrop-blur-xl border border-blue-200/50 shadow-sm text-blue-700 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.3em] mb-6 hover:bg-white hover:shadow-md transition-all duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse shadow-[0_0_8px_rgba(37,99,235,0.6)]"></span>
                  CLIENT-FIRST PHILOSOPHY
                </div>
                <h2 className="mission-vision-title">
                  Mission & Vision
                </h2>
                <div className="title-glow-line"></div>
              </div>

              {/* Split Cards Container */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mb-12">
                {/* Mission Card */}
                <div className="mission-vision-card mission-card-hover" data-aos="fade-right">
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Header Row */}
                    <div className="flex items-start justify-between mb-6 gap-4 flex-wrap sm:flex-nowrap">
                      <div className="icon-box-3d mission-icon-box -mt-10">
                        <Target className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600 stroke-[2]" />
                      </div>
                      
                      {/* Quote Badge */}
                      <div className="quote-badge-pill mission-quote-pill">
                        <Target className="w-3.5 h-3.5 text-blue-500 mr-2 opacity-70" />
                        <span className="font-bold tracking-wider">We don't sell, we educate</span>
                      </div>
                    </div>
                    
                    <h3 className="text-[28px] sm:text-[32px] font-black text-[#0f172a] mb-3 tracking-tight">Our Mission</h3>
                    
                    <p className="text-slate-600 text-[16px] sm:text-[17px] leading-[1.7] font-medium flex-grow">
                      Blueant Finserv is committed to building a <span className="highlight-pill mission-highlight">financially robust community</span> where individuals attain mass riches through informed decisions.
                    </p>
                    
                    {/* Education Indicator */}
                    <div className="mt-5 flex items-center gap-2 text-[14px] font-bold text-blue-600">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>Empowering through knowledge</span>
                    </div>
                  </div>
                </div>

                {/* Vision Card */}
                <div className="mission-vision-card vision-card-hover" data-aos="fade-left" data-aos-delay="100">
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Header Row */}
                    <div className="flex items-start justify-between mb-6 gap-4 flex-wrap sm:flex-nowrap">
                      <div className="icon-box-3d vision-icon-box -mt-10">
                        <Eye className="w-7 h-7 sm:w-8 sm:h-8 text-red-500 stroke-[2]" />
                      </div>
                      
                      {/* Quote Badge */}
                      <div className="quote-badge-pill vision-quote-pill">
                        <Eye className="w-3.5 h-3.5 text-red-400 mr-2 opacity-70" />
                        <span className="font-bold tracking-wider">We don't push, we guide</span>
                      </div>
                    </div>
                    
                    <h3 className="text-[28px] sm:text-[32px] font-black text-[#0f172a] mb-3 tracking-tight">Our Vision</h3>
                    
                    <p className="text-slate-600 text-[16px] sm:text-[17px] leading-[1.7] font-medium flex-grow">
                      We envision a future where financial literacy is accessible to all. Our goal is to guide clients toward <span className="highlight-pill vision-highlight">absolute stability</span> and financial freedom.
                    </p>
                    
                    {/* Trust Indicator */}
                    <div className="mt-5 flex items-center gap-2 text-[14px] font-bold text-red-500">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>Committed to your long-term success</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Trust & Compliance Section - Industry Level */}
              <div className="flex flex-col items-center justify-center pt-8 mb-[60px] relative" data-aos="fade-up" data-aos-delay="200">
                <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">Industry Recognised & Compliant</p>
                
                {/* Compliance Chips */}
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                  {[
                    { text: 'SEBI Compliant', icon: Shield, color: 'text-emerald-500', bg: 'bg-emerald-50' },
                    { text: 'AMFI Registered', icon: BadgeCheck, color: 'text-blue-500', bg: 'bg-blue-50' },
                    { text: 'Client-First Advisory', icon: Users, color: 'text-indigo-500', bg: 'bg-indigo-50' }
                  ].map((chip, idx) => (
                    <div key={idx} className="compliance-chip">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${chip.bg}`}>
                        <chip.icon className={`w-3 h-3 ${chip.color}`} strokeWidth={2.5} />
                      </div>
                      <span className="text-[12px] font-bold text-slate-700">{chip.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Premium Section Divider */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-slate-300/70 to-transparent"></div>
          </section>
        </div>

        {/* CORE VALUES - DIAGRAM SECTION */}
        <section id="core-values" className="py-12 lg:py-16 bg-[#f8fafc] relative overflow-hidden z-10 pt-0 mt-10">
          {/* Subtle Fintech Dot-Grid & Blur Background */}
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.3 }}></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/80 via-transparent to-white/80 pointer-events-none"></div>
          
          {/* Tiny Floating Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
             <div className="absolute top-[30%] left-[5%] w-[300px] h-[300px] bg-blue-100/40 blur-[100px] rounded-full"></div>
             <div className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] bg-indigo-100/40 blur-[120px] rounded-full"></div>
             <div className="absolute top-[25%] left-[20%] opacity-[0.05] text-blue-900"><Target size={40} /></div>
             <div className="absolute bottom-[35%] right-[25%] opacity-[0.05] text-indigo-900"><Scale size={50} /></div>
          </div>
          
          <div className="container mx-auto px-6 lg:px-12 max-w-[1100px] relative z-10">
            
            <div className="text-center mb-8 lg:mb-10" data-aos="fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50/80 backdrop-blur-md text-cyan-700 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.3em] mb-4 border border-cyan-200/60 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.6)]"></span>
                OUR BELIEFS
              </div>
              <h2 className="text-[36px] sm:text-[44px] lg:text-[52px] font-extrabold leading-[1.05] tracking-[-1px] text-[#0f172a] drop-shadow-sm">
                Core <span className="bg-gradient-to-r from-[#0f172a] to-blue-600 bg-clip-text text-transparent">Values</span>
              </h2>
              <p className="text-slate-500 font-medium text-[15px] sm:text-[17px] mt-3 mb-4">Principles That Drive Every Financial Decision</p>
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full shadow-[0_0_10px_rgba(6,182,212,0.4)]"></div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-0 values-section-wrapper">
              
              {/* Center Circle - Premium Glassmorphism */}
              <div className="relative z-10 flex items-center justify-center shrink-0 mb-4 lg:mb-0" data-aos="zoom-in">
                 {/* Outer animated holographic dashboard ring */}
                 <div className="values-hub-outer"></div>
                 {/* Outer glowing ring */}
                 <div className="values-hub-outer-glow"></div>
                 
                 <div className="values-hub-core group">
                   {/* Inner subtle noise/blob */}
                   <div className="absolute top-[-20%] right-[-20%] w-32 h-32 bg-rose-200/40 rounded-full blur-2xl group-hover:scale-110 transition-transform"></div>
                   <div className="absolute bottom-[-20%] left-[-20%] w-32 h-32 bg-cyan-200/40 rounded-full blur-2xl group-hover:scale-110 transition-transform"></div>
                   
                   <Star className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-500 mb-2 drop-shadow-sm group-hover:rotate-12 transition-transform duration-500" strokeWidth={2.5} />
                   <h3 className="text-2xl sm:text-3xl font-black text-[#0f172a] text-center leading-[1.1] tracking-tight">
                     CORE<br/>VALUES
                   </h3>
                 </div>
              </div>

              {/* SVG Connecting Lines (Desktop only) with smooth curves and animations */}
              <div className="hidden lg:block w-32 h-[560px] relative z-0 shrink-0 -ml-4 mr-4" data-aos="fade-in" data-aos-delay="200">
                 <svg width="100%" height="100%" viewBox="0 0 100 560" preserveAspectRatio="none" style={{ filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.8))' }}>
                    <path d="M 0 280 C 40 280, 20 40, 100 40" fill="none" stroke="#f43f5e" strokeWidth="1.5" className="animate-dash-flow opacity-80 val-path-0" />
                    <path d="M 0 280 C 40 280, 30 136, 100 136" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="animate-dash-flow opacity-80 val-path-1" style={{animationDelay: '0.2s'}} />
                    <path d="M 0 280 C 40 280, 30 232, 100 232" fill="none" stroke="#eab308" strokeWidth="1.5" className="animate-dash-flow opacity-80 val-path-2" style={{animationDelay: '0.4s'}} />
                    <path d="M 0 280 C 40 280, 30 328, 100 328" fill="none" stroke="#8b5cf6" strokeWidth="1.5" className="animate-dash-flow opacity-80 val-path-3" style={{animationDelay: '0.6s'}} />
                    <path d="M 0 280 C 40 280, 30 424, 100 424" fill="none" stroke="#f97316" strokeWidth="1.5" className="animate-dash-flow opacity-80 val-path-4" style={{animationDelay: '0.8s'}} />
                    <path d="M 0 280 C 40 280, 20 520, 100 520" fill="none" stroke="#10b981" strokeWidth="1.5" className="animate-dash-flow opacity-80 val-path-5" style={{animationDelay: '1s'}} />
                 </svg>
              </div>

              {/* Values List - Premium Cards */}
              <div className="flex flex-col gap-4 w-full lg:w-auto relative z-10 flex-grow max-w-[600px]">
                {[
                  { icon: Users, themeClass: 'card-client-first', colorClass: 'bg-gradient-to-br from-rose-50 to-rose-100', borderClass: 'border-rose-200/50', textClass: 'text-rose-500', title: 'Client First', desc: 'Customers interests above everything else.' },
                  { icon: Scale, themeClass: 'card-conflict-free', colorClass: 'bg-gradient-to-br from-blue-50 to-blue-100', borderClass: 'border-blue-200/50', textClass: 'text-blue-600', title: 'Conflict-Free Advice', desc: 'Providing impartial, unbiased advice.' },
                  { icon: Lock, themeClass: 'card-confidentiality', colorClass: 'bg-gradient-to-br from-amber-50 to-amber-100', borderClass: 'border-amber-200/50', textClass: 'text-amber-500', title: 'Confidentiality & Trust', desc: 'Protecting client data with utmost integrity.' },
                  { icon: GraduationCap, themeClass: 'card-education', colorClass: 'bg-gradient-to-br from-indigo-50 to-indigo-100', borderClass: 'border-indigo-200/50', textClass: 'text-indigo-500', title: 'Financial Education', desc: 'Empowering clients to make informed decisions.' },
                  { icon: Clock, themeClass: 'card-service', colorClass: 'bg-gradient-to-br from-orange-50 to-orange-100', borderClass: 'border-orange-200/50', textClass: 'text-orange-500', title: 'Efficient Service', desc: 'Delivering timely and responsive support.' },
                  { icon: TrendingUp, themeClass: 'card-freedom', colorClass: 'bg-gradient-to-br from-emerald-50 to-emerald-100', borderClass: 'border-emerald-200/50', textClass: 'text-emerald-500', title: 'Financial Freedom', desc: 'Guiding clients toward long-term goals.' },
                ].map((item, idx) => (
                  <div key={idx} className={`values-item-card ${item.themeClass}`} data-aos="fade-up" data-aos-delay={idx * 50}>
                    {/* Icon Container with subtle glow */}
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shrink-0 ${item.colorClass} border border-white shadow-[inset_0_2px_5px_rgba(255,255,255,0.7)] group-hover:scale-105 transition-transform duration-300 relative overflow-hidden z-10`}>
                      <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <item.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${item.textClass} drop-shadow-sm relative z-10`} strokeWidth={2.5} />
                    </div>
                    {/* Text Container */}
                    <div className="flex flex-col justify-center relative z-10">
                      <span className="text-[15px] sm:text-[17px] font-bold text-slate-800 leading-tight mb-1 group-hover:text-[#0f172a] transition-colors">{item.title}</span>
                      <span className="text-[13px] sm:text-[14px] font-[500] text-slate-500 leading-tight">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      </main>
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.1); opacity: 0.35; }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-pulse-slow { animation: pulse-slow 10s infinite ease-in-out; }
        .animate-float-slow { animation: float-slow 8s infinite ease-in-out; }
        .animate-dash-flow { stroke-dasharray: 6 6; animation: dash-flow 20s linear infinite; }
        @keyframes dash-flow { to { stroke-dashoffset: -1000; } }
      `}</style>
    </div>
  );
};

export default MissionPage;

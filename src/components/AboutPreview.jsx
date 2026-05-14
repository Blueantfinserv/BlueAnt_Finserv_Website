import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ShieldCheck, UserCheck, TrendingUp, Clock, Users, Award, MapPin, ArrowRight } from "lucide-react";

const AboutPreview = () => {
  const bulletPoints = [
    { text: "Disciplined investment approach", icon: <CheckCircle2 className="w-4 h-4 text-emerald-500" /> },
    { text: "Transparent financial advisory", icon: <CheckCircle2 className="w-4 h-4 text-emerald-500" /> },
    { text: "Long-term wealth planning", icon: <CheckCircle2 className="w-4 h-4 text-emerald-500" /> },
    { text: "SEBI & IRDAI aligned guidance", icon: <CheckCircle2 className="w-4 h-4 text-emerald-500" /> },
  ];

  const stats = [
    {
      icon: <Clock className="w-5 h-5 text-blue-600" />,
      number: "12+ Years",
      label: "Industry Excellence",
      desc: "Delivering consistent financial growth since 2012.",
    },
    {
      icon: <Users className="w-5 h-5 text-indigo-600" />,
      number: "15,000+",
      label: "Happy Families",
      desc: "Empowering households with smart wealth strategies.",
    },
    {
      icon: <Award className="w-5 h-5 text-purple-600" />,
      number: "Expert",
      label: "Advisory Team",
      desc: "Dedicated professionals guiding your wealth journey.",
    },
    {
      icon: <MapPin className="w-5 h-5 text-blue-600" />,
      number: "Pan-India",
      label: "Presence",
      desc: "Seamless support across 25+ states in India.",
    },
  ];

  return (
    <section className="relative pt-[52px] pb-[38px] bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(248,250,255,0.96))] backdrop-blur-[12px] overflow-hidden flex flex-col justify-center border-t border-slate-100 animate-section-fade-up">
      {/* 1. LUXURY BACKGROUND DEPTH: Subtle Ambient Light */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-[420px] h-[420px] bg-blue-100/20 blur-[140px] rounded-full -z-10 animate-pulse-slow"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[380px] h-[380px] bg-blue-100/30 blur-[120px] rounded-full opacity-60"></div>
        <div className="absolute top-[30%] right-[10%] w-[450px] h-[450px] bg-indigo-100/20 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-cyan-100/20 blur-[120px] rounded-full animate-float-3d"></div>
      </div>
      
      {/* MASTER SECTION ALIGNMENT: matched to Hero (1280px + 40px padding) */}
      <div className="max-w-[1280px] mx-auto px-10 w-full relative z-20 flex flex-col justify-center">
        
        {/* TOP CONTENT WRAPPER: grid-cols-2 + matched gap (80px) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[80px] items-center justify-center">
          
          {/* Left Content Position: Strictly aligned to container edge with matched widths */}
          <div data-aos="fade-right" className="w-full flex flex-col items-center lg:items-start text-center lg:text-left max-w-[560px] mx-auto lg:mx-0 self-center justify-center lg:-mt-3">
            {/* TOP BADGE: Ultra-Modern Fintech Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50/80 backdrop-blur-md text-blue-600 text-[10px] font-extrabold uppercase tracking-[0.3em] mb-4 border border-blue-100/60 shadow-[0_4px_20px_rgba(37,99,235,0.06)] self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
              ABOUT BLUEANT
            </div>
            
            <h2 className="text-[38px] lg:text-[58px] font-extrabold leading-[0.98] tracking-[-0.05em] mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] block mb-1">
                Built on Trust.
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2563EB] to-[#7C3AED]">
                Driven by Discipline.
              </span>
            </h2>
            
            <div className="relative mb-4 group">
              <p className="text-[17px] text-slate-600 font-semibold leading-[1.7] max-w-[560px]">
                At BlueAnt Finserv, we believe in one simple philosophy — <span className="text-blue-600 font-black italic">“We don’t sell, we educate.”</span>
                <br /><br />
                We empower individuals and families with <span className="text-slate-900 font-black border-b-2 border-blue-100">disciplined SIP investments</span>, personalized financial planning, and transparent advisory services to build <span className="text-slate-900 font-black">long-term wealth</span> with confidence.
              </p>
            </div>

            {/* Feature Grid: Enterprise Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-6 w-full">
              {bulletPoints.map((point, i) => (
                <div key={i} className="group flex items-center gap-3 h-[56px] px-[18px] rounded-[18px] bg-white/72 backdrop-blur-[10px] border border-slate-200/70 hover:bg-white hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(37,99,235,0.10)] hover:border-blue-200/18 transition-all duration-300">
                  <div className="w-[34px] h-[34px] shrink-0 rounded-xl bg-white border border-slate-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors stroke-[2.5]" />
                  </div>
                  <span className="text-slate-800 font-bold text-[14px] tracking-tight group-hover:text-blue-700 transition-colors">{point.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button: Magnetic Fintech Style */}
            <Link
              to="/about"
              className="relative w-[280px] h-[58px] bg-[#0f172a] text-white rounded-[16px] font-bold text-[14px] flex items-center justify-center gap-4 hover:bg-[#1e293b] hover:-translate-y-[3px] shadow-[0_10px_30px_rgba(8,15,40,0.22)] active:scale-[0.98] transition-all duration-300 group self-center lg:self-start overflow-hidden border border-white/5"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-white/10 to-indigo-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="relative z-10 uppercase tracking-[0.08em]">Explore Our Legacy</span>
              <div className="relative z-10 w-5 h-5 rounded-full bg-blue-600/20 flex items-center justify-center group-hover:bg-blue-600 group-hover:rotate-[360deg] transition-all duration-500 shadow-sm">
                <ArrowRight className="w-3 h-3 text-blue-400 group-hover:text-white transition-colors" />
              </div>
            </Link>
          </div>

          {/* Right Visual Alignment: items-center + mx-auto */}
          <div className="w-full relative flex items-center justify-center lg:justify-center mx-auto lg:ml-[30px] lg:-ml-10 scale-[0.88] lg:-mt-5 animate-float-slow" data-aos="zoom-in" data-aos-delay="200">
            {/* Cinematic Halo Glow - Premium Fintech Radial Gradient */}
            <div className="absolute w-[120%] aspect-square bg-[radial-gradient(circle,rgba(59,130,246,0.08),transparent_72%)] blur-[80px] rounded-full -z-10 animate-pulse-slow"></div>
            
            {/* Main Circle Frame with Enhanced Glassmorphism and Cinematic Shadow */}
            <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[440px] lg:h-[440px] xl:w-[480px] xl:h-[480px] rounded-full border-[10px] border-white/45 shadow-[0_45px_130px_rgba(37,99,235,0.18),inset_0_0_50px_rgba(37,99,235,0.05),0_30px_80px_rgba(59,130,246,0.12)] bg-white/75 backdrop-blur-[20px] z-10 group animate-float-premium perspective-[2000px] overflow-hidden [filter:drop-shadow(0_18px_28px_rgba(255,184,0,0.18))_drop-shadow(0_25px_50px_rgba(59,130,246,0.12))]">
              {/* High-Performance 3D Video */}
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-contain transition-transform duration-[2000ms] ease-out"
              >
                <source src="/Video.mp4" type="video/mp4" />
              </video>

              {/* Glassmorphic Inset Shadow Overlay */}
              <div className="absolute inset-0 rounded-full border-[2px] border-white/40 pointer-events-none z-10 shadow-[inset_0_0_30px_rgba(255,255,255,0.6)]"></div>
            </div>

            {/* ELEGANT HIERARCHY BADGES: Glassmorphic Upgrade */}
            <div className="absolute top-[8%] left-[4%] h-[52px] px-3.5 bg-white/72 backdrop-blur-[14px] border border-white/45 rounded-xl shadow-[0_12px_28px_rgba(15,23,42,0.08)] flex items-center gap-3 z-30 animate-float-premium group cursor-default hover:-translate-y-1 hover:bg-white transition-all duration-500 [animation-delay:0.5s]">
              <div className="w-[34px] h-[34px] bg-gradient-to-br from-blue-50 to-stone-100 text-blue-600 rounded-lg flex items-center justify-center shadow-inner group-hover:rotate-12 transition-transform shrink-0">
                <UserCheck className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-[#0f172a] uppercase tracking-wider leading-tight">Client-Centric</span>
                <span className="text-[7.5px] font-bold text-slate-400 uppercase mt-0.5 tracking-[0.05em] whitespace-nowrap">Advisory Services</span>
              </div>
            </div>

            <div className="absolute right-[-3%] top-[40%] h-[52px] px-3.5 bg-white/72 backdrop-blur-[14px] border border-white/45 rounded-xl shadow-[0_12px_28px_rgba(15,23,42,0.08)] flex items-center gap-3 z-30 animate-float-premium group cursor-default hover:-translate-y-1 hover:bg-white transition-all duration-500 [animation-delay:1s]">
              <div className="w-[34px] h-[34px] bg-gradient-to-br from-blue-50 to-indigo-100 text-blue-600 rounded-lg flex items-center justify-center shadow-inner group-hover:rotate-12 transition-transform shrink-0">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-[#0f172a] uppercase tracking-wider leading-tight">Expert Growth</span>
                <span className="text-[7.5px] font-bold text-slate-400 uppercase mt-0.5 tracking-[0.05em] whitespace-nowrap">Financial Excellence</span>
              </div>
            </div>

            <div className="absolute left-[1%] bottom-[12%] h-[52px] px-3.5 bg-white/72 backdrop-blur-[14px] border border-white/45 rounded-xl shadow-[0_12px_28px_rgba(15,23,42,0.08)] flex items-center gap-3 z-30 animate-float-premium group cursor-default hover:-translate-y-1 hover:bg-white transition-all duration-500 [animation-delay:1.5s]">
              <div className="w-[34px] h-[34px] bg-gradient-to-br from-emerald-50 to-cyan-100 text-emerald-500 rounded-lg flex items-center justify-center shadow-inner group-hover:rotate-12 transition-transform shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-[#0f172a] uppercase tracking-wider leading-tight">Secure Vault</span>
                <span className="text-[7.5px] font-bold text-slate-400 uppercase mt-0.5 tracking-[0.05em] whitespace-nowrap">SEBI Compliant</span>
              </div>
            </div>
          </div>
        </div>

        {/* STATS SECTION ALIGNMENT: Final Perfect Card Size */}
        <div className="relative z-10 mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[22px] items-center text-center border-t border-slate-200/50 pt-6">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              data-aos="fade-up" 
              data-aos-delay={i * 100}
              className="bg-white/90 backdrop-blur-2xl h-[180px] p-[18px] rounded-[28px] border border-slate-200/50 shadow-[0_4px_20px_rgba(15,23,42,0.02)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.1)] hover:border-blue-200/50 hover:-translate-y-1.5 transition-all duration-500 flex flex-col items-center text-center justify-center group gap-1.5"
            >
              <div className="flex flex-col items-center w-full gap-1.5">
                <div className="w-9 h-9 bg-gradient-to-br from-blue-50 to-stone-100 text-blue-600 rounded-xl flex items-center justify-center shadow-inner group-hover:from-blue-600 group-hover:to-slate-800 group-hover:text-white transition-all duration-500">
                  <div className="scale-90 group-hover:scale-100 transition-transform duration-500">
                    {stat.icon}
                  </div>
                </div>
                <div>
                  <h4 className="text-[20px] font-black text-[#0f172a] mb-0.5 tracking-tighter flex items-center justify-center gap-2">
                    {stat.number}
                    <span className="w-2 h-0.5 bg-blue-600 rounded-full group-hover:w-6 transition-all duration-500"></span>
                  </h4>
                  <p className="text-blue-600 font-bold text-[10px] uppercase tracking-widest leading-none">
                    {stat.label}
                  </p>
                </div>
              </div>
              <p className="text-slate-500 text-[13px] leading-[1.5] font-medium max-w-[190px] mx-auto mt-2.5">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float-premium {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float-3d-premium {
          0%, 100% { 
            transform: perspective(2000px) rotateX(0deg) rotateY(0deg) scale(1); 
            box-shadow: 0 45px 130px rgba(37,99,235,0.18);
          }
          50% { 
            transform: perspective(2000px) rotateX(3deg) rotateY(-3deg) scale(1.02);
            box-shadow: 0 70px 150px rgba(37,99,235,0.25);
          }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.1); opacity: 0.35; }
        }
        @keyframes sectionFadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-section-fade-up { animation: sectionFadeUp 1s ease forwards; }
        .animate-float-premium { animation: float-premium 5s infinite ease-in-out; }
        .animate-float-3d-premium { animation: float-3d-premium 12s infinite ease-in-out; }
        .animate-pulse-slow { animation: pulse-slow 10s infinite ease-in-out; }
        .animate-float-slow { animation: float-slow 6s infinite ease-in-out; }
      `}</style>
    </section>
  );
};

export default AboutPreview;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative w-full pt-32 lg:pt-40 pb-16 lg:pb-24 bg-white overflow-hidden">
      {/* Background Decorative Accent - More subtle & premium */}
      <div className="absolute top-0 right-0 w-[45%] h-full bg-slate-50/80 -z-10 rounded-bl-[200px] lg:rounded-bl-[400px]"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -z-10 animate-pulse"></div>

      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-12" data-aos="fade-right">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-white text-[#00afef] rounded-full border border-blue-100 shadow-xl shadow-blue-900/5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00afef] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00afef]"></span>
              </span>
              <span className="text-[11px] font-black uppercase tracking-[0.3em]">India's Trusted Growth Partner</span>
            </div>

            <h1 
              className="text-6xl md:text-8xl lg:text-[7rem] font-black leading-[0.95] tracking-tighter"
              style={{ color: '#0f172a' }}
            >
              Building Your <br />
              <span style={{ color: '#00afef' }}>Financial</span> Empire.
            </h1>

            <p className="text-xl md:text-2xl text-slate-500 max-w-lg font-medium leading-relaxed">
              Expert guidance in SIP, Insurance, Loans, and Taxes. We help you take small, smart steps today to secure a powerful financial future tomorrow.
            </p>

            <div className="flex flex-wrap items-center gap-4 md:gap-8">
              <button 
                style={{ backgroundColor: '#0f172a', padding: '20px 56px', borderRadius: '9999px', color: 'white' }}
                className="text-[13px] font-black uppercase tracking-[0.2em] transition-all shadow-[0_20px_50px_-10px_rgba(15,23,42,0.3)] hover:-translate-y-1.5 active:scale-95"
              >
                Get Started Now
              </button>
              <button 
                style={{ backgroundColor: 'white', padding: '20px 56px', borderRadius: '9999px', color: '#0f172a', border: '2px solid #f1f5f9' }}
                className="text-[13px] font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-4 shadow-xl shadow-slate-200/50 hover:-translate-y-1.5 active:scale-95"
              >
                Our Services
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-10 pt-10 border-t border-slate-100">
              <div className="flex -space-x-5">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-16 h-16 rounded-full border-[6px] border-white bg-slate-100 overflow-hidden shadow-2xl transition-transform hover:scale-110 hover:z-10">
                    <img src={`https://i.pravatar.cc/150?u=${i+60}`} alt="Investor" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="space-y-1">
                <p className="font-black text-[#0f172a] text-3xl tracking-tighter">4,600+</p>
                <p className="text-slate-400 font-bold text-[11px] uppercase tracking-[0.2em]">Active Investors Across India</p>
              </div>
            </div>
          </div>

          {/* Visual Content - Larger & More Impactful */}
          <div className="w-full lg:w-1/2 relative" data-aos="fade-left">
            <div className="absolute inset-0 bg-[#00afef]/10 rounded-[100px] lg:rounded-[150px] rotate-6 scale-95 blur-[100px] -z-10"></div>
            <div className="relative rounded-[80px] lg:rounded-[120px] overflow-hidden shadow-[0_80px_150px_-30px_rgba(15,23,42,0.4)] border-[16px] border-white group">
              <img 
                src={`${import.meta.env.BASE_URL}first slider.jpg`} 
                alt="Financial Growth" 
                className="w-full h-full object-cover aspect-[4/5] lg:aspect-[5/6] group-hover:scale-110 transition-transform duration-1000" 
                fetchpriority="high"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-12 left-12 right-12 p-10 bg-white/10 backdrop-blur-2xl rounded-[50px] border border-white/20 shadow-2xl">
                <p className="text-white text-2xl font-bold italic leading-tight tracking-tight">"Discipline today, Financial Freedom tomorrow."</p>
                <div className="flex items-center gap-4 mt-6">
                  <div className="w-16 h-1.5 bg-[#00afef] rounded-full"></div>
                  <span className="text-[#00afef] text-[12px] font-black tracking-[0.3em] uppercase">The Blueant Philosophy</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

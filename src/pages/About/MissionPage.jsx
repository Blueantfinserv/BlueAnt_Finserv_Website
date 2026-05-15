import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Target, Eye, Check, Shield, TrendingUp, Rocket } from "lucide-react";
import "../../styles/AboutPage.css";

const MissionPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white font-outfit pt-20">
      <main className="flex flex-col">
        {/* MISSION & VISION SECTION */}
        <div className="about-belief-wrapper">
          <section className="mission-section beliefSection py-28 relative overflow-hidden bg-[#f8fafc]">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="text-center mb-20" data-aos="fade-up">
                <span className="text-[#00afef] font-black text-xs uppercase tracking-widest mb-4 inline-block">OUR PURPOSE</span>
                <h2 className="text-4xl lg:text-5xl font-black text-[#0f172a] mb-6">Mission & Vision</h2>
                <div className="w-24 h-1.5 bg-[#00afef] mx-auto rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
                {/* Mission Card */}
                <div className="bg-white p-10 lg:p-16 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-all duration-500 relative group" data-aos="fade-right">
                  <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-10 text-[#00afef] group-hover:scale-110 transition-transform duration-500"><Target size={40} strokeWidth={2.5} /></div>
                  <h3 className="text-3xl font-black text-[#0f172a] mb-6 tracking-tight">Our Mission</h3>
                  <p className="text-slate-400 font-bold text-sm uppercase tracking-widest mb-4 italic">"We don't sell, we educate."</p>
                  <p className="text-slate-500 text-lg leading-relaxed">
                    Blueant Finserv is committed to building a <span className="text-[#0f172a] font-bold">financially robust community</span> where individuals attain mass riches through informed decisions.
                  </p>
                </div>
                {/* Vision Card */}
                <div className="bg-white p-10 lg:p-16 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-all duration-500 relative group" data-aos="fade-left">
                  <div className="w-20 h-20 bg-red-50 rounded-2xl flex items-center justify-center mb-10 text-[#ed3237] group-hover:scale-110 transition-transform duration-500"><Eye size={40} strokeWidth={2.5} /></div>
                  <h3 className="text-3xl font-black text-[#0f172a] mb-6 tracking-tight">Our Vision</h3>
                  <p className="text-slate-400 font-bold text-sm uppercase tracking-widest mb-4 italic">"We don't push, we guide."</p>
                  <p className="text-slate-500 text-lg leading-relaxed">
                    We envision a future where financial literacy is accessible to all. Our goal is to guide clients toward <span className="text-[#0f172a] font-bold">absolute stability</span> and financial freedom.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* COMPANY PHILOSOPHY */}
        <div className="about-belief-wrapper" style={{ background: '#ffffff' }}>
          <section className="beliefSection py-28 border-t border-slate-100">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                <div data-aos="fade-right">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-8 h-[2px] bg-blue-600" />
                    <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Our Philosophy</span>
                  </div>
                  <h2 className="text-4xl lg:text-[48px] font-black text-[#0F172A] leading-[1.1] mb-8">
                    Built on Trust. <br />
                    Guided by <span className="text-blue-600">Education.</span>
                  </h2>
                  <p className="text-[#64748b] text-xl leading-relaxed mb-8">
                    At Blueant Finserv, we believe in a simple yet powerful philosophy: <strong>"We don't sell, we educate."</strong> 
                    Our team empowers families to build long-term stability through disciplined SIP investments and 
                    personalized financial planning, ensuring every decision is informed and confident.
                  </p>
                  <div className="space-y-4">
                    {["Disciplined investment approach", "Long-term wealth planning", "Transparent financial advisory"].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0"><Check className="w-4 h-4 text-blue-600 stroke-[3px]" /></div>
                        <span className="text-[#0F172A] font-bold text-[16px]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div data-aos="zoom-in" className="relative">
                  <div className="relative w-full aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white bg-white z-10">
                    <video src={`${import.meta.env.BASE_URL}Video.mp4`} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-md border border-gray-100 py-4 px-8 rounded-2xl shadow-xl z-20 flex items-center gap-3">
                     <span className="text-2xl">🎓</span>
                     <span className="text-[14px] font-black text-[#0F172A] uppercase tracking-wide">We Educate</span>
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-md border border-gray-100 py-4 px-8 rounded-2xl shadow-xl z-20 flex items-center gap-3">
                     <span className="text-2xl">🛡️</span>
                     <span className="text-[14px] font-black text-[#0F172A] uppercase tracking-wide">Secure</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* CORE VALUES SECTION */}
        <div className="about-belief-wrapper">
          <section className="beliefSection bg-slate-50 py-28 border-t border-slate-100">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="text-center mb-20" data-aos="fade-up">
                <span className="text-[#00afef] font-black text-xs uppercase tracking-widest mb-4 inline-block">OUR BELIEFS</span>
                <h2 className="text-4xl lg:text-5xl font-black text-[#0f172a] mb-6">Core Values</h2>
                <div className="w-24 h-1.5 bg-[#00afef] mx-auto rounded-full"></div>
              </div>
              <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {[
                  { title: "Confidentiality & Trust", desc: "Protecting client data with absolute integrity.", icon: <Shield /> },
                  { title: "Financial Education", desc: "Empowering clients to make informed decisions.", icon: <TrendingUp /> },
                  { title: "Efficient Service", desc: "Delivering timely and responsive support.", icon: <Rocket /> },
                  { title: "Financial Freedom", desc: "Guiding clients toward long-term stability.", icon: <Eye /> }
                ].map((value, i) => (
                  <div key={i} className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm transition-all duration-300 flex flex-col h-full" data-aos="fade-up" data-aos-delay={i * 100}>
                    <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-8 text-[#00afef] shadow-sm">{value.icon}</div>
                    <h4 className="text-2xl font-bold text-[#0f172a] mb-4">{value.title}</h4>
                    <p className="text-slate-500 text-base leading-relaxed">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default MissionPage;

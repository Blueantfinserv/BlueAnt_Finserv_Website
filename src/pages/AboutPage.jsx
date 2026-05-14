import React, { useEffect } from "react";
import TeamSection from "../components/TeamSection";
import ImpactStories from "../components/ImpactStories";
import AOS from "aos";
import "aos/dist/aos.css";
import { Check, Target, Eye, Rocket, Shield, TrendingUp, Clock, Users, Award, MapPin } from "lucide-react";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000, once: true });
  }, []);

  const stats = [
    {
      icon: <Clock className="w-5 h-5 text-blue-600" />,
      number: "12+ Years",
      label: "Industry Excellence",
      sub: "Delivering consistent financial growth since 2012.",
    },
    {
      icon: <Users className="w-5 h-5 text-blue-600" />,
      number: "50,000+",
      label: "Happy Families",
      sub: "Empowering households with smart wealth strategies nationwide.",
    },
    {
      icon: <Award className="w-5 h-5 text-blue-600" />,
      number: "10+",
      label: "Expert Advisors",
      sub: "Dedicated professionals guiding your wealth journey with care.",
    },
    {
      icon: <MapPin className="w-5 h-5 text-blue-600" />,
      number: "Pan-India",
      label: "Presence",
      sub: "Seamless financial support across 25+ states in India.",
    },
  ];

  return (
    <div className="bg-white font-outfit selection:bg-blue-100">
      <main className="flex flex-col">
        
        {/* 1. HERO / INTRO SECTION */}
        <section id="hero" className="w-full bg-slate-50 py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[45%] h-full bg-blue-50/50 rounded-bl-[200px] -z-0"></div>
          <div className="container mx-auto relative z-10 px-6 lg:px-12">
            <div className="max-w-4xl mb-32" data-aos="fade-right">
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-white text-[#00afef] rounded-full border border-blue-100 shadow-sm mb-10">
                <span className="w-2 h-2 rounded-full bg-[#00afef] animate-pulse"></span>
                <span className="text-xs font-black uppercase tracking-widest">Corporate Profile</span>
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-[#0f172a] leading-[0.95] tracking-tighter mb-10">
                Architecting <br />
                <span className="text-[#00afef]">Financial Legacies.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl leading-relaxed">
                Blueant Finserv is a premier financial advisory firm dedicated to the art of disciplined investing and long-term wealth creation.
              </p>
            </div>

            {/* Part B: Company Identity (BLUEant Meaning) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" id="overview">
              <div data-aos="fade-right" className="flex flex-col justify-center">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-[#00afef] text-xs font-black uppercase tracking-widest rounded-full border border-blue-100 mb-4">OUR IDENTITY</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-[#0f172a] mb-8 leading-tight">
                  <span className="text-[#00afef]">BLUE</span><span className="text-red-500">ant</span>: <span className="text-2xl md:text-3xl font-bold">A Name Rooted in Purpose</span>
                </h2>
                <div className="space-y-6 mb-8">
                  <p className="text-[#64748b] leading-relaxed text-lg">
                    <strong className="text-[#00afef]">BLUE:</strong> Represents trustworthiness, reliability, calmness, and professionalism.
                  </p>
                  <p className="text-[#64748b] leading-relaxed text-lg">
                    <strong className="text-red-500">ANT:</strong> Symbolizes focus, discipline, persistence, and strategic thinking.
                  </p>
                  <p className="text-[#64748b] leading-relaxed text-lg mt-6">
                    Just like Ants build mighty colonies grain by grain, we help you create a financial empire through smart, consistent steps.
                  </p>
                </div>
              </div>
              <div className="relative flex justify-center lg:justify-end items-center" data-aos="fade-left">
                <div className="relative w-full max-w-[500px]">
                  <div className="absolute inset-0 bg-blue-50/50 rounded-full blur-3xl transform scale-110"></div>
                  <img src={`${import.meta.env.BASE_URL}ant_3d_coins.png`} alt="Blueant Identity" className="relative z-10 w-full h-auto object-contain drop-shadow-2xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. STATS & OVERVIEW SECTION */}
        <section className="bg-white py-28 border-t border-[#f1f5f9]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100} className="bg-white rounded-2xl p-8 shadow-[0_8px_25px_rgba(0,0,0,0.06)] border border-slate-50 hover:shadow-[0_18px_40px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">{stat.icon}</div>
                  <h4 className="text-3xl font-black text-[#0F172A] mb-2 leading-none">{stat.number}</h4>
                  <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-3">{stat.label}</p>
                  <p className="text-[#64748b] text-[14px] leading-relaxed font-medium">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. MISSION & VISION SECTION */}
        <section id="mission" className="w-full bg-slate-50 py-28 border-t border-slate-100">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-20" data-aos="fade-up">
              <span className="text-[#00afef] font-black text-xs uppercase tracking-widest mb-4 inline-block">OUR PURPOSE</span>
              <h2 className="text-4xl lg:text-5xl font-black text-[#0f172a] mb-6">Mission & Vision</h2>
              <div className="w-24 h-1.5 bg-[#00afef] mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-12 rounded-[2.5rem] border border-slate-100 flex flex-col h-full shadow-sm" data-aos="fade-up">
                <div className="w-20 h-20 bg-blue-100 rounded-3xl flex items-center justify-center mb-10"><Target className="w-10 h-10 text-[#00afef]" /></div>
                <h3 className="text-3xl font-black text-[#0f172a] mb-6">Our Mission</h3>
                <p className="text-xl text-slate-600 leading-relaxed italic mb-6">"We don't sell, we educate."</p>
                <p className="text-lg text-slate-600 leading-relaxed">Blueant Finserv is committed to creating a <strong>financially educated community</strong> where individuals utilize every rupee through informed decisions.</p>
              </div>
              <div className="bg-white p-12 rounded-[2.5rem] border border-slate-100 flex flex-col h-full shadow-sm" data-aos="fade-up" data-aos-delay="200">
                <div className="w-20 h-20 bg-red-100 rounded-3xl flex items-center justify-center mb-10"><Eye className="w-10 h-10 text-red-500" /></div>
                <h3 className="text-3xl font-black text-[#0f172a] mb-6">Our Vision</h3>
                <p className="text-xl text-slate-600 leading-relaxed italic mb-6">"We don't push, we guide."</p>
                <p className="text-lg text-slate-600 leading-relaxed">We envision a future where <strong>financial security is accessible to all</strong>. Our goal is to guide clients toward absolute stability and financial freedom.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. COMPANY PHILOSOPHY */}
        <section id="philosophy" className="w-full bg-white py-28 border-t border-slate-100">
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

        {/* 5. CORE VALUES SECTION */}
        <section id="values" className="w-full bg-slate-50 py-28 border-t border-slate-100">
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

        {/* 6. TEAM SECTION */}
        <section id="team" className="w-full bg-white py-28 border-t border-slate-100">
          <TeamSection />
        </section>

        {/* 7. TESTIMONIAL SECTION */}
        <section id="testimonials" className="w-full bg-slate-50 py-28 border-t border-slate-100">
          <div className="container mx-auto px-6 lg:px-12">
            <ImpactStories />
          </div>
        </section>

      </main>
    </div>
  );
};

export default AboutPage;

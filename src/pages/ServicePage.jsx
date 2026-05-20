import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ServicesCards from "../components/ServicesCards";
import DetailedServices from "../components/DetailedServices";
import CTASection from "../components/CTASection";
import { openConsultationModal } from "../components/ConsultationModal";

const ServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="service-page font-outfit selection:bg-blue-100">
      {/* Hero Section */}
      <div className="relative h-[500px] lg:h-[650px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}financial_planning_hero_1778128026138.png`} 
            alt="Financial Solutions Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/70 to-transparent"></div>
        </div>

        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10 w-full">
          <div className="max-w-2xl" data-aos="fade-right">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-blue-600/20 backdrop-blur-md text-white rounded-full border border-blue-500/30 shadow-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              <span className="text-xs font-black uppercase tracking-widest">Our Solutions</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-8">
              Expert <br />
              <span className="text-blue-400">Financial Advice.</span>
            </h1>
            <p className="text-xl text-slate-300 font-medium mb-10 leading-relaxed max-w-lg">
              We help you see the big picture and create a plan tailored to your life goals with professionally guided strategies.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={openConsultationModal} className="px-10 py-5 bg-blue-600 text-white rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-[#0f172a] transition-all shadow-xl shadow-blue-600/20 active:scale-95">
                Talk to an Advisor
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust & Stats Bar */}
      <section className="bg-white border-b border-slate-100 relative z-20 -mt-12 mx-6 lg:mx-12 rounded-[2rem] shadow-xl">
        <div className="max-w-[1280px] mx-auto px-10 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex items-center gap-6" data-aos="fade-up">
              <div className="text-5xl font-black text-[#0f172a]">4.9<span className="text-blue-600 text-3xl">/5</span></div>
              <div>
                <div className="flex text-yellow-400 mb-1 text-sm">
                  {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                </div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Client Satisfaction Rating</div>
              </div>
            </div>
            <div className="h-12 w-px bg-slate-100 hidden lg:block"></div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-20">
              <div data-aos="fade-up" data-aos-delay="100">
                <div className="text-2xl font-black text-[#0f172a]">13+ Years</div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Experience</div>
              </div>
              <div data-aos="fade-up" data-aos-delay="200">
                <div className="text-2xl font-black text-[#0f172a]">5000+</div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Families Served</div>
              </div>
              <div data-aos="fade-up" data-aos-delay="300" className="hidden md:block">
                <div className="text-2xl font-black text-[#0f172a]">98%</div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Retention</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Grid (Hub) */}
      <div className="bg-slate-50 py-24">
        <ServicesCards />
      </div>

      {/* Intro Text */}
      <section className="py-24 bg-white overflow-hidden">
         <div className="max-w-[1280px] mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-[#0f172a] mb-8 leading-tight">
               Simplifying Complexity <br />
               <span className="text-blue-600">For You.</span>
            </h2>
            <p className="text-xl text-slate-500 max-w-4xl mx-auto leading-relaxed font-medium">
               At Blueant Finserv, our suite of specialized financial solutions is engineered to cut through market noise and deliver absolute clarity. Whether you are navigating intricate tax regulations, designing lifelong legacy plans, building an optimized stock portfolio, or securing structured loan facilities, our expert advisors work tirelessly to simplify the complexities of wealth management.
            </p>
         </div>
      </section>

      {/* Detailed Services Overview */}
      <div className="bg-slate-50 py-24 border-t border-slate-100">
        <DetailedServices />
      </div>

      {/* Footer Map & CTA */}
      <div className="mt-24">
         <CTASection />
      </div>

      <div className="w-full h-[400px] mt-24">
        <iframe
          src="https://maps.google.com/maps?q=28.6280253,77.3788567&z=17&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  );
};

export default ServicePage;

import React, { useEffect } from "react";
import FAQ from "../components/FAQ";
import CTASection from "../components/CTASection";
import AOS from "aos";
import "aos/dist/aos.css";

const FAQPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white font-outfit overflow-x-hidden selection:bg-blue-100">
      <main>
        {/* Hero Section */}
        <section className="relative pt-48 pb-24 bg-slate-50 overflow-hidden">
          <div className="absolute top-0 right-0 w-[40%] h-full bg-indigo-50/50 rounded-bl-[200px] -z-0"></div>
          <div className="container relative z-10">
            <div className="max-w-4xl" data-aos="fade-right">
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-white text-indigo-500 rounded-full border border-indigo-100 shadow-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                <span className="text-xs font-black uppercase tracking-widest">Help Center</span>
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-[#0f172a] leading-[0.95] tracking-tighter mb-8">
                Questions? <br />
                <span className="text-indigo-500">Answered.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl leading-relaxed">
                Find answers to common questions about SIP, Mutual Funds, Insurance, and Loans. We're here to help you understand your investments.
              </p>
            </div>
          </div>
        </section>

        <FAQ />
        
        <CTASection />
      </main>
    </div>
  );
};

export default FAQPage;

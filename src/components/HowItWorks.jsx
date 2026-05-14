import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const steps = [
  {
    num: "01",
    tag: "2 minutes",
    title: "Register & KYC",
    desc: "Create your secure account and complete paperless Aadhaar e-verification instantly.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    num: "02",
    tag: "15 minutes",
    title: "Plan Your Finances",
    desc: "Share your goals and risk appetite. Our experts build a personalized wealth strategy.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    num: "03",
    tag: "5 minutes",
    title: "Start Investing",
    desc: "Set up auto-pay for your SIPs, buy insurance, or execute your first trade seamlessly.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    num: "04",
    tag: "Ongoing",
    title: "Track & Grow",
    desc: "Monitor your portfolio 24/7, get real-time alerts, and watch your wealth compound.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

import { openConsultationModal } from "./ConsultationModal";

function HowItWorks() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="section bg-white overflow-hidden">
      <div className="container">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DBEAFE] mb-6">
            <span className="text-[#2563EB] font-bold text-sm tracking-wide">Step-by-Step Guide</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0F172A] mb-6">
            How WealthHub Works
          </h2>
          <p className="text-lg text-[#475569] leading-relaxed">
            Your journey to financial independence starts here. A seamless, paperless, and expert-guided process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>
          
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="relative bg-white rounded-3xl p-8 group hover:-translate-y-2 transition-all duration-300 border border-slate-100 shadow-sm hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <div className="flex flex-col items-start text-left">
                <div className="flex items-center justify-between w-full mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    {step.icon}
                  </div>
                  <span className="text-5xl font-black text-slate-100 group-hover:text-blue-50 transition-colors">
                    {step.num}
                  </span>
                </div>
                
                <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full mb-4 group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors">
                  ⏱ {step.tag}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-sky-500 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between shadow-2xl shadow-blue-500/20" data-aos="fade-up">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h3 className="text-3xl font-black text-white mb-3">Ready to Get Started?</h3>
            <p className="text-blue-100 text-lg font-medium">
              Join 50,000+ investors who are currently building wealth with WealthHub. Open your account in less than 2 minutes and start investing today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <button onClick={openConsultationModal} className="bg-white text-blue-600 hover:bg-slate-50 px-8 py-4 rounded-full font-bold shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
              Create Free Account →
            </button>
            <button onClick={openConsultationModal} className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold transition-all">
              Talk to an Advisor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

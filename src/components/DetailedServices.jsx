import React from "react";

const detailedServices = [
  {
    id: "wealth-creation",
    badge: "Strategic SIP & Mutual Fund Solutions",
    title: "SIP & Mutual Funds",
    desc: "Accelerate your financial journey with professionally guided SIPs, diversified mutual funds, and personalized wealth-building strategies tailored to your long-term goals.",
    stats: [
      { label: "Avg. Returns", value: "12-15%" },
      { label: "Min. Investment", value: "₹500" },
      { label: "Fund Options", value: "500+" }
    ],
    features: [
      { title: "Systematic Investment Plans (SIPs)", desc: "Automated monthly investments for disciplined long-term wealth accumulation." },
      { title: "Mutual Fund Portfolio Planning", desc: "Expert selection of equity, debt, and hybrid funds tailored to your risk profile." },
      { title: "Wealth Growth Strategies", desc: "Advanced asset allocation techniques to maximize risk-adjusted returns." },
      { title: "Future Goal Investments", desc: "Targeted planning for major life milestones like education and home purchase." }
    ],
    buttonText: "Start Investing Now →",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80",
    iconSvg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />,
    theme: "blue",
    bgColor: "bg-blue-500",
    textColor: "text-blue-600",
    lightBg: "bg-blue-50",
    shadowClass: "shadow-blue-500/30",
    reverse: false
  },
  {
    id: "wealth-protection",
    badge: "Comprehensive Life & Health Protection",
    title: "Insurance Advisory",
    desc: "Protect your income, health, and future legacy with comprehensive term life and health insurance planning solutions.",
    stats: [
      { label: "Claims Settled", value: "98.5%" },
      { label: "Coverage", value: "Up to ₹2Cr" },
      { label: "Partners", value: "25+" }
    ],
    features: [
      { title: "Term Life Insurance", desc: "High life cover with low premiums starting at ₹499/month" },
      { title: "Health Insurance", desc: "Family floater plans covering pre/post hospitalization costs" },
      { title: "Critical Illness", desc: "Lump sum payout for 30+ critical illnesses including cancer" },
      { title: "Quick Claims", desc: "100% claim assistance with cashless hospitalization network" }
    ],
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
    iconSvg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
    theme: "emerald",
    bgColor: "bg-emerald-500",
    textColor: "text-emerald-600",
    lightBg: "bg-emerald-50",
    shadowClass: "shadow-emerald-500/30",
    reverse: true
  },
  {
    id: "tax-retirement",
    badge: "Efficient Tax & Retirement Planning",
    title: "Tax & Retirement",
    desc: "Preserve and manage your wealth through retirement-focused strategies and tax-efficient financial planning.",
    stats: [
      { label: "Tax Savings", value: "Up to 1.5L" },
      { label: "Corpus Goal", value: "Targeted" },
      { label: "Expert Led", value: "100%" }
    ],
    features: [
      { title: "Tax Planning (80C/80D)", desc: "Maximize your tax savings through strategic investments and insurance." },
      { title: "Retirement Corpus Building", desc: "Plan your golden years with stable and consistent growth portfolios." },
      { title: "Pension & NPS Support", desc: "Expert guidance on National Pension Scheme and long-term pension plans." },
      { title: "Legacy Planning", desc: "Ensuring smooth wealth transfer to your future generations." }
    ],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    iconSvg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
    theme: "purple",
    bgColor: "bg-purple-500",
    textColor: "text-purple-600",
    lightBg: "bg-purple-50",
    shadowClass: "shadow-purple-500/30",
    reverse: false
  },
  {
    id: "stock-market-services",
    badge: "Expert Equity & Stock Guidance",
    title: "Stock Market Services",
    desc: "Explore equity investments, trading opportunities, and portfolio guidance with market expertise and research.",
    stats: [
      { label: "Delivery Brokerage", value: "₹0" },
      { label: "Research Daily", value: "Free" },
      { label: "Account Setup", value: "Instant" }
    ],
    features: [
      { title: "Zero Brokerage", desc: "₹0 brokerage on delivery trades, flat ₹20 for intraday" },
      { title: "Advanced Technical Charts", desc: "TradingView integration with 100+ technical indicators" },
      { title: "Daily Research Reports", desc: "Institutional-grade equity research, IPO analysis, and sector insights" },
      { title: "Margin Trading Facility", desc: "Up to 5x leverage on approved stocks for maximized opportunities" }
    ],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    iconSvg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />,
    theme: "orange",
    bgColor: "bg-orange-500",
    textColor: "text-orange-500",
    lightBg: "bg-orange-50",
    shadowClass: "shadow-orange-500/30",
    reverse: true
  }
];

import { openConsultationModal } from "./ConsultationModal";

const DetailedServices = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 mb-6">
            <span className="text-slate-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </span>
            <span className="text-slate-700 font-bold text-sm tracking-wide uppercase">Comprehensive Financial Services</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Tailored Solutions for <span className="text-blue-600">Every Life Stage</span>
          </h2>
          <p className="text-base text-slate-500 leading-relaxed font-medium">
            From building wealth through disciplined SIPs to protecting your legacy with insurance and expert stock guidance - we provide end-to-end solutions under one platform.
          </p>
        </div>

        {/* Alternating Services List */}
        <div className="space-y-32">
          {detailedServices.map((service, idx) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`flex flex-col ${service.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2" data-aos={service.reverse ? "fade-left" : "fade-right"}>
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group w-full aspect-[4/3] lg:aspect-[16/10]">
                  <div className={`absolute inset-0 ${service.bgColor} opacity-10 group-hover:opacity-0 transition-opacity duration-500 z-10 pointer-events-none`}></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg z-20">
                    <svg className={`w-6 h-6 ${service.textColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {service.iconSvg}
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2" data-aos={service.reverse ? "fade-right" : "fade-left"}>
                <div className={`inline-block px-4 py-2 rounded-full ${service.lightBg} ${service.textColor} text-xs font-bold uppercase tracking-wider mb-6`}>
                  {service.badge}
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-slate-500 text-lg leading-relaxed mb-8">
                  {service.desc}
                </p>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                  {service.stats.map((stat, i) => (
                    <div key={i} className="bg-white rounded-xl p-3 border border-slate-200 shadow-sm text-center lg:text-left flex flex-col justify-center">
                      <p className={`text-lg font-black ${service.textColor} mb-0.5 leading-none`}>{stat.value}</p>
                      <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wide">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Features List */}
                <ul className="space-y-4 fintech-subtitle">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className={`mt-1 w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center ${service.lightBg} ${service.textColor}`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-slate-900 font-bold text-sm mb-1">{feature.title}</h4>
                        <p className="text-slate-500 text-xs leading-relaxed">{feature.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="mt-8">
                  <button onClick={openConsultationModal} className={`${service.bgColor} hover:opacity-90 text-white px-8 py-4 rounded-xl font-bold tracking-wide text-sm shadow-lg ${service.shadowClass} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl inline-flex items-center justify-center gap-2`}>
                    {service.buttonText ? service.buttonText.replace(' →', '').replace(' ➔', '') : "Get Started Now"}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DetailedServices;

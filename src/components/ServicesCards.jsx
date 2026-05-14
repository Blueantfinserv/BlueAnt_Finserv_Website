import React from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { servicesSummary as services } from "../data/services";

const ServicesCards = () => {
  return (
    <section className="bg-[#f8fafc] mt-0 pt-5 pb-24 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span className="text-[#64748b] font-bold text-[11px] uppercase tracking-widest">
              Financial Solutions
            </span>
          </div>
          <h2 className="text-4xl lg:text-[42px] font-black text-[#0F172A] mb-5 leading-tight">
            Our Core <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-lg text-[#64748b] leading-relaxed max-w-[650px] font-medium">
            Discover our comprehensive suite of financial products designed to help you 
            invest, protect, and grow your wealth.
          </p>
        </div>

        {/* Services Grid - Fixed 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id} 
                title={service.tooltip}
                className="group bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 flex flex-col h-full relative overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="p-8 pb-4 flex-grow">
                  <div className="flex items-start justify-between mb-8">
                    <div className={`w-14 h-14 ${service.lightBg} ${service.themeColor} rounded-2xl flex items-center justify-center transition-transform group-hover:rotate-6 duration-300`}>
                      {Icon && <Icon className="w-6 h-6" />}
                    </div>
                    <span className={`inline-block px-3 py-1 rounded-lg ${service.lightBg} ${service.themeColor} text-[10px] font-black uppercase tracking-wider`}>
                      {service.stat}
                    </span>
                  </div>

                  <div className="mb-6">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                      {service.tag}
                    </div>
                    <h3 className="text-2xl font-black text-[#0F172A] mb-4 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[#64748b] text-sm leading-relaxed font-medium">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-50">
                    <ul className="space-y-3 mb-4">
                      {service.features?.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-[13px] font-bold text-slate-600">
                          <Check className={`w-4 h-4 ${service.themeColor} stroke-[3px]`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Clean Footer Link */}
                <div className="px-8 pb-8">
                  <Link 
                    to={service.link}
                    className={`flex items-center gap-2 font-bold text-sm ${service.themeColor} transition-all hover:gap-3`}
                  >
                    {service.ctaText || "Get Started"} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* 6px Pro Bottom Bar */}
                <div className={`h-1.5 w-full ${service.themeBg} opacity-80`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;

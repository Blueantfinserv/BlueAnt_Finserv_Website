import React from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { servicesSummary as services } from "../data/services";

const ServicesCards = () => {
  return (
    <section className="bg-[#f4f7fb] mt-0 relative overflow-hidden border-t border-slate-100" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
      {/* Modern dot grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px] opacity-30"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-300/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200/60 shadow-[0_2px_10px_rgba(0,0,0,0.03)] mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-blue-600 font-black text-[12px] uppercase tracking-[0.2em]">
              Financial Solutions
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[54px] font-black text-[#0f172a] mb-6 leading-[1.1] tracking-tight">
            Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 drop-shadow-sm">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-[700px] font-medium">
            Discover our comprehensive suite of financial products designed to help you 
            invest, protect, and grow your wealth.
          </p>
        </div>

        {/* Services Grid - Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id}
                className="group bg-white/80 backdrop-blur-md rounded-[32px] border-[1.5px] border-slate-200/50 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)] hover:-translate-y-3 transition-all duration-500 flex flex-col h-full relative overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                {/* Premium Glossy Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="p-8 pb-4 flex-grow relative z-10">
                  {/* Icon Area */}
                  <div className="mb-8">
                    <div className={`w-16 h-16 ${service.lightBg} ${service.themeColor} rounded-[20px] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-[10deg] shadow-sm`}>
                      {Icon && <Icon className="w-7 h-7" />}
                    </div>
                  </div>

                  {/* Text Content Area */}
                  <div className="mb-8">
                    <div className="flex flex-col items-start gap-3 mb-5">
                      <span className={`inline-block px-3 py-1.5 rounded-lg ${service.lightBg} ${service.themeColor} text-[10.5px] font-black uppercase tracking-[0.1em] shadow-sm`}>
                        {service.stat}
                      </span>
                      <div className="text-[11px] font-black text-slate-400/80 uppercase tracking-[0.2em] group-hover:text-blue-500/80 transition-colors">
                        {service.tag}
                      </div>
                    </div>
                    <h3 className="text-[26px] font-black text-[#0f172a] mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 text-[14.5px] leading-relaxed font-medium">
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
                <div className="px-8 pb-8 pt-2 relative z-10">
                  <Link 
                    to={service.link}
                    className={`inline-flex items-center gap-2 font-black text-[14.5px] ${service.themeColor} transition-all hover:gap-4`}
                  >
                    {service.ctaText || "Get Started"} <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                {/* Animated Bottom Bar */}
                <div className={`absolute bottom-0 left-0 h-1.5 w-full ${service.themeBg} opacity-80 group-hover:h-2 transition-all duration-300`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;

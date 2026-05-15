import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Shield, ArrowRight, Check } from "lucide-react";
import CTASection from "../../components/CTASection";

const WealthProtectionPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white font-outfit pt-20">
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-emerald-50 relative overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">
            <div className="max-w-3xl" data-aos="fade-right">
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-white text-emerald-600 rounded-full border border-emerald-100 shadow-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                <span className="text-xs font-black uppercase tracking-widest">Security Solutions</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-[#0f172a] leading-tight mb-8">
                Wealth <br />
                <span className="text-emerald-600">Protection.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed">
                Protect your income, health, and future with comprehensive insurance planning solutions designed for complete peace of mind.
              </p>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-600/5 rounded-bl-[300px] -z-0"></div>
        </section>

        {/* Insurance Advisory Section */}
        <section className="py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div data-aos="fade-right">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-8">
                  <Shield size={32} />
                </div>
                <h2 className="text-4xl font-black text-[#0f172a] mb-6">Insurance Advisory</h2>
                <p className="text-lg text-slate-500 leading-relaxed mb-8">
                  At <strong>Blueant Finserv</strong>, we understand that insurance isn’t a one-size-fits-all solution—it’s a personalized safety plan. Our insurance advisory services are designed to help you protect what matters most—your life, health, assets, and income.
                </p>
                <div className="space-y-6">
                  {[
                    { title: "Term Life Insurance", desc: "Financial security for your family's future." },
                    { title: "Health Insurance", desc: "Comprehensive coverage for medical emergencies." },
                    { title: "Critical Illness Cover", desc: "Lump sum protection against major illnesses." },
                    { title: "Asset Protection", desc: "Shield your valuable properties and assets." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 mt-1">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <div>
                         <h4 className="font-black text-[#0f172a]">{item.title}</h4>
                         <p className="text-slate-500 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative" data-aos="fade-left">
                 <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 shadow-xl relative overflow-hidden">
                    <h3 className="text-3xl font-black text-[#0f172a] mb-6 italic">"We don't push, we guide."</h3>
                    <p className="text-lg text-slate-500 leading-relaxed mb-8">
                       Our goal is to provide clarity and confidence, helping you choose the right mix of insurance products that align with your lifestyle and risk appetite.
                    </p>
                    <div className="p-8 bg-white rounded-3xl border border-emerald-50 shadow-sm">
                       <p className="text-emerald-600 font-black text-xl mb-2">98.5%</p>
                       <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Claims Settled Ratio</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
    </div>
  );
};

export default WealthProtectionPage;

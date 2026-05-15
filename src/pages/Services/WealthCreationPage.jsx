import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { TrendingUp, ArrowRight, Check } from "lucide-react";
import CTASection from "../../components/CTASection";

const WealthCreationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white font-outfit pt-20">
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-blue-50 relative overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">
            <div className="max-w-3xl" data-aos="fade-right">
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-white text-blue-600 rounded-full border border-blue-100 shadow-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                <span className="text-xs font-black uppercase tracking-widest">Growth Solutions</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-[#0f172a] leading-tight mb-8">
                Wealth <br />
                <span className="text-blue-600">Creation.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed">
                Accelerate your financial journey with professionally guided SIPs, diversified mutual funds, and personalized wealth-building strategies.
              </p>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 rounded-bl-[300px] -z-0"></div>
        </section>

        {/* Content Section - SIP */}
        <section className="py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div data-aos="fade-right">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                  <TrendingUp size={32} />
                </div>
                <h2 className="text-4xl font-black text-[#0f172a] mb-6">Systematic Investment Plans (SIP)</h2>
                <p className="text-lg text-slate-500 leading-relaxed mb-8">
                  At <strong>Blueant Finserv</strong>, we believe that wealth creation is a marathon, not a sprint. A Systematic Investment Plan (SIP) allows you to invest small, regular amounts in mutual funds, harnessing the immense power of compounding over time while reducing the impact of market volatility.
                </p>
                <div className="space-y-4 mb-10">
                  {[
                    "Rupee Cost Averaging",
                    "Disciplined Investing habit",
                    "Power of Compounding",
                    "High Flexibility in amounts"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span className="font-bold text-[#0f172a]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative" data-aos="fade-left">
                <div className="bg-slate-50 rounded-[3rem] p-12 border border-slate-100 shadow-xl">
                   <h3 className="text-2xl font-black text-[#0f172a] mb-6">Wealth Management</h3>
                   <p className="text-slate-500 mb-8 leading-relaxed">
                     Our portfolio advisory services are designed to create a roadmap for your financial freedom, ensuring that every asset is working toward your future.
                   </p>
                   <ul className="space-y-4 text-slate-500 font-medium">
                      <li>• Strategic asset allocation</li>
                      <li>• Dynamic portfolio rebalancing</li>
                      <li>• Tax-efficient investment planning</li>
                      <li>• Institutional-grade research</li>
                   </ul>
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

export default WealthCreationPage;

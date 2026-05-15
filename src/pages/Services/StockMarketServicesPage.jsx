import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CandlestickChart, ArrowRight, Check, BarChart3, LineChart, PieChart } from "lucide-react";
import CTASection from "../../components/CTASection";

const StockMarketServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white font-outfit pt-20">
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-orange-50 relative overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">
            <div className="max-w-3xl" data-aos="fade-right">
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-white text-orange-600 rounded-full border border-orange-100 shadow-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse"></span>
                <span className="text-xs font-black uppercase tracking-widest">Market Insights</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-[#0f172a] leading-tight mb-8">
                Market <br />
                <span className="text-orange-600">Services.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed">
                Explore equity investments, trading opportunities, and portfolio guidance with research-driven market expertise.
              </p>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-600/5 rounded-bl-[300px] -z-0"></div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div data-aos="fade-right">
                <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-8">
                  <CandlestickChart size={32} />
                </div>
                <h2 className="text-4xl font-black text-[#0f172a] mb-6">Equities & Trading</h2>
                <p className="text-lg text-slate-500 leading-relaxed mb-8">
                  At <strong>Blueant Finserv</strong>, we provide institutional-grade research and timely market insights to help you navigate the stock market with confidence. Whether you're a long-term investor or a trader, our platform is built for your success.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                  {[
                    { icon: <BarChart3 />, title: "Zero Delivery Brokerage", desc: "Maximize your long-term returns." },
                    { icon: <LineChart />, title: "Technical Analysis", desc: "Expert chart patterns & signals." },
                    { icon: <PieChart />, title: "Equity Research", desc: "In-depth fundamental reports." },
                    { icon: <TrendingUp />, title: "Portfolio Guidance", desc: "Professional stock selection." }
                  ].map((item, i) => (
                    <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <div className="text-orange-600 mb-3">{item.icon}</div>
                      <h4 className="font-black text-[#0f172a] text-sm mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-xs">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative" data-aos="fade-left">
                 <div className="bg-[#0f172a] p-12 rounded-[3rem] text-white overflow-hidden relative shadow-2xl">
                    <div className="relative z-10">
                       <h3 className="text-3xl font-black mb-6">Loan Support</h3>
                       <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                          Need liquidity without selling your stocks? We offer fast loan support against securities and other credit solutions to meet your immediate requirements.
                       </p>
                       <ul className="space-y-4">
                          {[
                            "Fast loan processing",
                            "Minimal documentation",
                            "Competitive interest rates",
                            "Stock-backed credit lines"
                          ].map((text, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-bold">
                               <div className="w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center shrink-0">
                                  <Check size={12} strokeWidth={4} />
                               </div>
                               {text}
                            </li>
                          ))}
                       </ul>
                    </div>
                    {/* Glow effect */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/20 rounded-full blur-[100px]"></div>
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

// Internal icon import for consistency
const TrendingUp = ({ size }) => (
  <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
);

export default StockMarketServicesPage;

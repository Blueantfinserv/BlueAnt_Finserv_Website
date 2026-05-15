import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Landmark, ArrowRight, Check, Target, Heart, FileText, Wallet } from "lucide-react";
import CTASection from "../../components/CTASection";

const WealthPreservationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sections = [
    {
      title: "Retirement Planning",
      desc: "Ensure your golden years are stress-free with a customized retirement corpus strategy.",
      icon: <Target className="text-purple-600" />,
    },
    {
      title: "Will & Legacy",
      desc: "Structured legacy planning to ensure your wishes are honored and loved ones are cared for.",
      icon: <Heart className="text-red-500" />,
    },
    {
      title: "Tax Planning",
      desc: "Stay compliant while maximizing deductions and minimizing your overall tax liability.",
      icon: <FileText className="text-blue-500" />,
    },
    {
      title: "Budget & Kids' Needs",
      desc: "Empowering families with smart budgeting and long-term planning for children's future.",
      icon: <Wallet className="text-emerald-500" />,
    }
  ];

  return (
    <div className="bg-white font-outfit pt-20">
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-purple-50 relative overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">
            <div className="max-w-3xl" data-aos="fade-right">
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-white text-purple-600 rounded-full border border-purple-100 shadow-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
                <span className="text-xs font-black uppercase tracking-widest">Stability Solutions</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-[#0f172a] leading-tight mb-8">
                Wealth <br />
                <span className="text-purple-600">Preservation.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed">
                Preserve and manage your wealth through retirement-focused and low-risk financial planning strategies designed for lasting stability.
              </p>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-purple-600/5 rounded-bl-[300px] -z-0"></div>
        </section>

        {/* Detailed Sections Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sections.map((section, i) => (
                <div key={i} className="p-10 rounded-[3rem] border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:border-purple-200 transition-all duration-500" data-aos="fade-up" data-aos-delay={i * 100}>
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                    {section.icon}
                  </div>
                  <h3 className="text-3xl font-black text-[#0f172a] mb-4">{section.title}</h3>
                  <p className="text-lg text-slate-500 leading-relaxed">{section.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Callout */}
        <section className="py-24 bg-[#0f172a] text-white">
           <div className="max-w-[1280px] mx-auto px-6 lg:px-12 text-center">
              <h2 className="text-4xl md:text-5xl font-black mb-8 italic">"We help you pass on more than just wealth."</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                 From Will registration to retirement annuities, our wealth preservation team ensures your lifelong hard work remains secure for generations to come.
              </p>
              <div className="w-24 h-1.5 bg-purple-600 mx-auto rounded-full"></div>
           </div>
        </section>

        <CTASection />
      </main>
    </div>
  );
};

export default WealthPreservationPage;

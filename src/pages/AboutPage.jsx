import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Building2, Target, Users2, Quote, ArrowRight } from "lucide-react";
import "../styles/AboutPage.css";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000, once: true });
  }, []);

  const aboutSections = [
    {
      title: "Company Overview",
      desc: "Our story, identity, and the meaning behind BLUEant.",
      icon: <Building2 className="w-8 h-8 text-blue-600" />,
      path: "/about/company",
      color: "bg-blue-50",
    },
    {
      title: "Mission & Vision",
      desc: "Our purpose, goals, and core values that drive us.",
      icon: <Target className="w-8 h-8 text-[#ed3237]" />,
      path: "/about/mission",
      color: "bg-red-50",
    },
    {
      title: "Our Team",
      desc: "Meet the experts architecting your financial future.",
      icon: <Users2 className="w-8 h-8 text-emerald-600" />,
      path: "/about/team",
      color: "bg-emerald-50",
    },
    {
      title: "Impact Stories",
      desc: "Real stories of financial transformation and success.",
      icon: <Quote className="w-8 h-8 text-purple-600" />,
      path: "/about/stories",
      color: "bg-purple-50",
    },
  ];

  return (
    <div className="bg-white font-outfit selection:bg-blue-100 min-h-screen pt-32 pb-24">
      <main className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-4xl mb-20" data-aos="fade-right">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-slate-50 text-[#00afef] rounded-full border border-blue-100 shadow-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-[#00afef] animate-pulse"></span>
            <span className="text-xs font-black uppercase tracking-widest">About Blueant</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-[#0f172a] leading-[0.95] tracking-tighter mb-8">
            Everything You Need <br />
            <span className="text-[#00afef]">To Know Us.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl leading-relaxed">
            Discover our identity, our mission, and the dedicated people who make Blueant Finserv your trusted financial partner.
          </p>
        </div>

        {/* Hub Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aboutSections.map((item, i) => (
            <Link 
              to={item.path} 
              key={i}
              className="group p-10 rounded-[2.5rem] border border-slate-100 bg-white hover:border-[#00afef] hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className={`w-20 h-20 ${item.color} rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500`}>
                {item.icon}
              </div>
              <h3 className="text-4xl font-black text-[#0f172a] mb-4">{item.title}</h3>
              <p className="text-lg text-slate-500 mb-10 max-w-sm leading-relaxed">{item.desc}</p>
              <div className="flex items-center gap-2 text-[#00afef] font-black uppercase tracking-widest text-sm">
                <span>View Section</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </div>
              
              {/* Decorative Background Element */}
              <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-slate-50 rounded-full group-hover:bg-blue-50/50 transition-colors -z-10"></div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AboutPage;

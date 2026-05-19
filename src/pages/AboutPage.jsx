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
      desc: "Unbiased Financial Guidance. We empower you to make data-driven compounding decisions with zero sales push.",
      icon: <Building2 className="w-6 h-6" />, // Reduced from w-7 h-7 to w-6 h-6 for compact scale
      path: "/about/company",
      iconColor: "icon-blue",
      cardColor: "card-blue",
    },
    {
      title: "Mission & Vision",
      desc: "Empowering self-directed compounding. We guide you to master long-term wealth rhythms with pure clarity.",
      icon: <Target className="w-6 h-6" />,
      path: "/about/mission",
      iconColor: "icon-red",
      cardColor: "card-red",
    },
    {
      title: "Our Team",
      desc: "Meet the expert educators and distribution architects guiding your long-term wealth creation journey.",
      icon: <Users2 className="w-6 h-6" />,
      path: "/about/team",
      iconColor: "icon-green",
      cardColor: "card-green",
    },
    {
      title: "Impact Stories",
      desc: "Real wealth growth journeys of families who mastered compounding and protected their dreams with us.",
      icon: <Quote className="w-6 h-6" />,
      path: "/about/stories",
      iconColor: "icon-purple",
      cardColor: "card-purple",
    },
  ];

  return (
    <div className="about-hub-section selection:bg-blue-100 min-h-screen pt-32 pb-24">
      {/* 
        Compressed from max-w-1280px to max-w-1160px & expanded horizontal pads 
        to px-8 md:px-16 lg:px-24. This forces robust, luxurious margins 
        on both the left and right sides of the entire layout.
      */}
      <main className="max-w-[1160px] mx-auto px-8 md:px-16 lg:px-24">
        
        {/* Upper Header section */}
        <div className="max-w-3xl mb-16" data-aos="fade-right">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/70 backdrop-blur text-[#00afef] rounded-full border border-blue-100/50 shadow-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-[#00afef] animate-pulse"></span>
            <span className="text-xs font-black uppercase tracking-widest">About Blueant</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-[#0f172a] leading-[0.95] tracking-tighter mb-8">
            Everything You Need <br />
            <span className="text-[#00afef]">To Know Us.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-xl leading-relaxed">
            Discover our identity, our education-driven mission, and the dedicated team making Blueant Finserv your premier wealth guidance partner.
          </p>
        </div>

        {/* Breathtaking High-Fidelity Hub Grid */}
        <div className="about-hub-grid">
          {aboutSections.map((item, i) => (
            <Link 
              to={item.path} 
              key={i}
              className={`about-hub-card ${item.cardColor}`}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {/* Upper Section */}
              <div>
                <div className={`about-hub-card-icon-box ${item.iconColor}`}>
                  {item.icon}
                </div>
                <h3 className="about-hub-card-title">{item.title}</h3>
                <p className="about-hub-card-desc">{item.desc}</p>
              </div>

              {/* Lower Section (Safe from bottom edge clipping) */}
              <div className="about-hub-card-action">
                <span>View Section</span>
                <ArrowRight className="w-5 h-5 about-hub-action-arrow" />
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AboutPage;

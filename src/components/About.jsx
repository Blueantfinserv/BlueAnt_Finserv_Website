import React from "react";
import { Link } from "react-router-dom";
import { Check, Clock, Users, Award, MapPin, ArrowRight } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: <Clock className="w-5 h-5 text-blue-600" />,
      number: "13+ Years",
      label: "Blueant Legacy",
      sub: "Delivering 13+ years of Blueant legacy.",
    },
    {
      icon: <Users className="w-5 h-5 text-blue-600" />,
      number: "3,000+",
      label: "Happy Families",
      sub: "Empowering households with investment support.",
    },
    {
      icon: <Award className="w-5 h-5 text-blue-600" />,
      number: "50+",
      label: "Expert Team service",
      sub: "Dedicated professionals guiding your wealth journey.",
    },
    {
      icon: <MapPin className="w-5 h-5 text-blue-600" />,
      number: "Pan-India",
      label: "Presence",
      sub: "Serving clients efficiently across 200+ pincodes nationwide.",
    },
  ];

  const features = [
    "Disciplined investment approach",
    "Long-term wealth planning",
    "Transparent financial advisory",
  ];

  const badges = [
    {
      text: "We Don't Sell, We Educate",
      icon: "🎓",
      pos: "top-8 -left-4 sm:-left-12",
    },
    {
      text: "Disciplined Guidance",
      icon: "📊",
      pos: "top-1/4 -right-4 sm:-right-8",
    },
    {
      text: "Transparent & Aligned",
      icon: "🛡️",
      pos: "bottom-12 -left-2 sm:-left-8",
    },
  ];

  return (
    <div className="about-stats-container">
      {/* ── About Us Section (Soft Gradient) ── */}
      <section className="mt-32 py-20 bg-gradient-to-b from-[#f8fafc] to-white border-t border-black/5 relative">
        <div className="max-w-[1200px] mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">

            {/* Left: Text Content */}
            <div data-aos="fade-right" className="pb-16 lg:pb-0">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px] bg-blue-600" />
                <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">
                  Our Mission
                </span>
              </div>

              <h2 className="text-4xl lg:text-[48px] font-black text-[#0F172A] leading-[1.1] mb-8">
                Built on Trust. <br />
                Guided by <span className="text-blue-600">Education.</span>
              </h2>

              <div className="text-[#64748b] text-lg leading-relaxed mb-8 max-w-[540px] space-y-4">
                <p>
                  At BlueAnt Finserv, we believe meaningful wealth is built through discipline, consistency, and thoughtful financial decisions — not shortcuts.
                </p>
                <p>
                  Inspired by the steadiness of the blue sky and the discipline of an ant, we help individuals and families build long-term financial confidence with trust, clarity, and steady progress.
                </p>
                <p>
                  Through disciplined SIP investments, transparent financial guidance, and personalized wealth planning, we focus on creating lasting value for every financial journey.
                </p>
              </div>

              <div className="space-y-4 mb-10">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-blue-600 stroke-[3px]" />
                    </div>
                    <span className="text-[#0F172A] font-bold text-[15px]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="group inline-flex items-center justify-center gap-2 bg-[#0F172A] hover:bg-[#1E293B] text-white px-5 py-2 rounded-lg font-bold text-sm transition-all duration-300 shadow-md mb-12 lg:mb-0 whitespace-nowrap w-fit"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Right: Visual Frame */}
            <div data-aos="zoom-in" className="flex justify-center lg:justify-end">
              <div className="relative w-[400px] h-[400px] sm:w-[460px] sm:h-[460px]">
                <div className="w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white bg-white relative z-10">
                  <video
                    src={`${import.meta.env.BASE_URL}Video.mp4`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>

                {badges.map((badge, idx) => (
                  <div
                    key={idx}
                    className={`absolute ${badge.pos} bg-white/90 backdrop-blur-md border border-gray-100 py-3.5 px-6 rounded-2xl shadow-xl z-20 hidden sm:flex items-center gap-3 transition-transform hover:scale-105 cursor-default`}
                  >
                    <span className="text-xl">{badge.icon}</span>
                    <span className="text-[13px] font-black text-[#0F172A] whitespace-nowrap uppercase tracking-wide">
                      {badge.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section >

      {/* ── Stats Section (White Background + Elevated Cards) ── */}
      < section className="bg-white pt-16 pb-20 mt-16 border-t border-[#f1f5f9]" >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="bg-white rounded-2xl p-6 shadow-[0_8px_25px_rgba(0,0,0,0.06)] border border-slate-50 hover:shadow-[0_18px_40px_rgba(0,0,0,0.12)] hover:-translate-y-[6px] transition-all duration-300 flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                  {stat.icon}
                </div>
                <h4 className="text-3xl font-black text-[#0F172A] mb-2 leading-none">
                  {stat.number}
                </h4>
                <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-3">
                  {stat.label}
                </p>
                <p className="text-[#64748b] text-[12px] leading-relaxed font-medium">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section >
    </div >
  );
};

export default About;

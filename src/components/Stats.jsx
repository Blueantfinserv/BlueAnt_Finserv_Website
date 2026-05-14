import React from "react";
import { useInView } from "react-intersection-observer";

const stats = [
  { title: "Assets Under Management", value: "2000", prefix: "₹", suffix: "Cr+", desc: "Across 500+ cities in India" },
  { title: "Client Satisfaction", value: "98.5", prefix: "", suffix: "%", desc: "12,000+ verified reviews" },
  { title: "Years of Excellence", value: "18", prefix: "", suffix: "+", desc: "In financial services" },
];

function Stats() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section className="py-20 bg-[#f7f9fc] overflow-hidden">
      <div className="container">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center lg:items-start space-y-4 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-baseline gap-1">
                <span className="text-3xl lg:text-5xl font-black text-blue-600">{stat.prefix}</span>
                <span className="text-5xl lg:text-7xl font-black tracking-tighter text-[#0b1f3a] transition-all duration-500 group-hover:text-blue-600 group-hover:scale-105 inline-block">
                  {stat.value}
                </span>
                <span className="text-3xl lg:text-5xl font-black text-blue-600">{stat.suffix}</span>
              </div>
              <div className="w-12 h-1 bg-blue-600 rounded-full transform origin-left group-hover:scale-x-125 transition-transform duration-500"></div>
              <div className="text-center lg:text-left space-y-1">
                <p className="text-[#0b1f3a] font-black text-base lg:text-lg uppercase tracking-widest">
                  {stat.title}
                </p>
                <p className="text-slate-500 font-medium text-sm">
                  {stat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;

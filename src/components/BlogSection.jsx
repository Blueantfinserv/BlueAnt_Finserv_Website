import React, { useEffect } from "react";
import { BookOpen, Sparkles, Clock } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const BlogSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="section bg-slate-50 py-16 md:py-24 overflow-hidden">
      <div className="container max-w-5xl mx-auto px-6">
        <div 
          className="bg-white rounded-3xl p-8 md:p-14 border border-slate-200/80 shadow-sm text-center flex flex-col items-center relative overflow-hidden"
          data-aos="fade-up"
        >
          {/* Subtle glow background */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-orange-100/50 via-blue-50/30 to-transparent rounded-full blur-2xl pointer-events-none -mr-20 -mt-20"></div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200/60 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-orange-500" />
            <span className="text-orange-600 font-bold text-xs uppercase tracking-widest">
              Insights &amp; Research
            </span>
          </div>

          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-white flex items-center justify-center shadow-lg shadow-orange-500/20 mb-6">
            <BookOpen className="w-8 h-8" strokeWidth={1.75} />
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Fresh Articles <span className="text-orange-500">Coming Soon</span>
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-slate-500 max-w-2xl leading-relaxed mb-6 font-medium">
            Our financial research team and certified advisors are crafting in-depth market analyses, wealth creation blueprints, and smart investment insights. Stay tuned!
          </p>

          {/* Status indicator */}
          <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider bg-slate-50 px-4 py-2 rounded-full border border-slate-200/60">
            <Clock className="w-3.5 h-3.5 text-orange-500" />
            <span>Publishing Soon</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

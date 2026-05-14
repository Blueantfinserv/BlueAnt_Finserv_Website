import React, { useEffect } from "react";
import BlogSection from "../components/BlogSection";
import CTASection from "../components/CTASection";
import AOS from "aos";
import "aos/dist/aos.css";

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white font-outfit overflow-x-hidden selection:bg-blue-100">
      <main>
        {/* Hero Section */}
        <section className="relative pt-48 pb-24 bg-slate-50 overflow-hidden">
          <div className="absolute top-0 right-0 w-[40%] h-full bg-orange-50/50 rounded-bl-[200px] -z-0"></div>
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">
            <div className="max-w-4xl" data-aos="fade-right">
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-white text-orange-500 rounded-full border border-orange-100 shadow-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                <span className="text-xs font-black uppercase tracking-widest">Financial Insights</span>
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-[#0f172a] leading-[0.95] tracking-tighter mb-8">
                Learn. Invest. <br />
                <span className="text-orange-500">Prosper.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl leading-relaxed">
                Expert articles, market updates, and financial strategies to help you make informed decisions for your wealth.
              </p>
            </div>
          </div>
        </section>

        <BlogSection />
        
        <CTASection />
      </main>
    </div>
  );
};

export default BlogPage;

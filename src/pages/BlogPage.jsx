import React, { useEffect } from "react";
import { Sparkles } from "lucide-react";

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-[calc(100vh-84px)] bg-[#f8fafc] font-outfit overflow-hidden flex flex-col items-center justify-center px-4 pt-36 pb-24 text-center selection:bg-blue-100">
      {/* Subtle decorative background glows */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-12 right-12 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
        {/* Subtle decorative badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white text-orange-500 rounded-full border border-orange-100 shadow-sm mb-8">
          <Sparkles className="w-4 h-4 text-orange-500" />
          <span className="text-xs font-black uppercase tracking-widest">Financial Insights</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#0f172a] leading-[0.95] tracking-tight mb-6">
          Coming <span className="text-[#00afef]">Soon</span>
        </h1>

        {/* Supporting text */}
        <p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed max-w-xl">
          We're working on something valuable. Our financial insights and articles will be available soon.
        </p>
      </div>
    </div>
  );
};

export default BlogPage;

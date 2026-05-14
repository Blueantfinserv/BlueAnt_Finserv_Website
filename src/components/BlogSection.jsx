import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BlogSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const blogs = [
    {
      id: 1,
      tag: "LOANS",
      title: "Home Loan Hack: Maximize Profit While Paying Off Your Loan",
      date: "May 2025",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      tag: "INVESTING",
      title: "SIP vs Gold: Common Mistakes Investors Make",
      date: "May 2025",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      tag: "WEALTH",
      title: "The Truth Behind FD vs Loan: Building Wealth Efficiently",
      date: "April 2025",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    }
  ];

  return (
    <section className="section bg-slate-50 overflow-hidden">
      <div className="container">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-4 md:gap-8 fintech-subtitle" data-aos="fade-up">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 mb-6">
              <span className="text-orange-600 font-bold text-xs uppercase tracking-widest">Insights & News</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Latest from the <span className="text-orange-500">Blog</span>
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 font-bold text-orange-500 hover:text-orange-600 transition-colors">
            View All Articles
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {blogs.map((blog, idx) => (
            <div 
              key={blog.id} 
              className="group cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="relative h-80 rounded-3xl overflow-hidden mb-6 shadow-md group-hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-800">
                  {blog.tag}
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-xs font-bold text-slate-400 mb-3 uppercase tracking-wider">
                <span>{blog.date}</span>
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                <span>5 Min Read</span>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-orange-500 transition-colors leading-snug">
                {blog.title}
              </h3>
              
              <div className="flex items-center gap-2 text-sm font-bold text-slate-600 group-hover:text-orange-500 transition-colors">
                Read More
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <button className="md:hidden mt-10 w-full flex items-center justify-center gap-2 font-bold text-orange-500 bg-orange-50 py-4 rounded-xl border border-orange-100">
          View All Articles
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>

      </div>
    </section>
  );
};

export default BlogSection;

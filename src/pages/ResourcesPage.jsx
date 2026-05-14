import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Image, Calculator, BookOpen, MessageCircle, ArrowRight } from "lucide-react";
import FAQ from "../components/FAQ";
import BlogSection from "../components/BlogSection";
import Youtube from "../components/Youtube";
import CTASection from "../components/CTASection";

const ResourcesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000, once: true });
  }, []);

  const resourceItems = [
    {
      title: "Gallery",
      desc: "Client moments, workshops, and our journey in pictures.",
      icon: <Image className="w-8 h-8 text-blue-500" />,
      path: "/gallery",
      color: "bg-blue-50",
    },
    {
      title: "Financial Calculators",
      desc: "SIP, EMI, and investment planning tools to help you decide.",
      icon: <Calculator className="w-8 h-8 text-emerald-500" />,
      path: "/calculators",
      color: "bg-emerald-50",
    },
    {
      title: "Blogs",
      desc: "Expert financial tips, investment strategies, and market insights.",
      icon: <BookOpen className="w-8 h-8 text-purple-500" />,
      path: "/blogs",
      color: "bg-purple-50",
    },
    {
      title: "FAQs",
      desc: "Common questions about SIP, insurance, and investments answered.",
      icon: <MessageCircle className="w-8 h-8 text-orange-500" />,
      path: "/faq",
      color: "bg-orange-50",
    },
  ];

  return (
    <div className="bg-white font-outfit overflow-x-hidden selection:bg-blue-100">
      <main>
        {/* Hero Section */}
        <section className="relative pt-48 pb-24 bg-slate-50 overflow-hidden">
          <div className="absolute top-0 right-0 w-[40%] h-full bg-blue/5 rounded-bl-[200px] -z-0"></div>
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">
            <div className="max-w-4xl" data-aos="fade-right">
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-white text-blue rounded-full border border-blue/10 shadow-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-blue animate-pulse"></span>
                <span className="text-xs font-black uppercase tracking-widest">Resources & Insights</span>
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-navy leading-[0.95] tracking-tighter mb-8">
                The Tools You <br />
                <span className="text-blue">Need to Succeed.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl leading-relaxed">
                From interactive calculators to expert insights, we provide the resources you need to make confident financial decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Commitment to Education */}
        <section className="py-16 bg-white border-b border-slate-100">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1" data-aos="fade-right">
                <h2 className="text-3xl font-black text-navy mb-4">Our Commitment to Financial Literacy</h2>
                <p className="text-lg text-slate-500 leading-relaxed">
                  We believe that an informed client is a confident client. That's why we've curated this collection of tools and insights to help you understand the mechanics of wealth creation.
                </p>
              </div>
              <div className="flex gap-8" data-aos="fade-left">
                <div className="text-center">
                  <div className="text-3xl font-black text-blue">10+</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Calculators</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-blue">100+</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Articles</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-blue">24/7</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Access</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resourceItems.map((item, i) => (
                <Link 
                  to={item.path} 
                  key={i}
                  className="group p-10 rounded-3xl border border-slate-100 bg-white hover:border-[#00afef] hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                    {item.icon}
                  </div>
                  <h3 className="text-3xl font-black text-[#0f172a] mb-4">{item.title}</h3>
                  <p className="text-lg text-slate-500 mb-8 max-w-sm">{item.desc}</p>
                  <div className="flex items-center gap-2 text-[#00afef] font-bold">
                    <span>Explore Now</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                  
                  {/* Decorative element */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-slate-50 rounded-full group-hover:bg-blue-50 transition-colors -z-10"></div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SIP Calculator Preview */}
        {/* SIP Calculator Preview */}
        <section className="py-24 bg-[#0f172a] rounded-[60px] mx-6 mb-24 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-400 rounded-full blur-[100px]"></div>
          </div>
          <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div data-aos="fade-right">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Plan Your Future with Our <span className="text-[#00afef]">SIP Calculator</span></h2>
                <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                  Calculate the potential growth of your investments and see how small regular savings can turn into a massive corpus over time.
                </p>
                <Link to="/calculators" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0f172a] rounded-full font-black uppercase tracking-widest hover:bg-[#00afef] hover:text-white transition-all">
                  Try SIP Calculator <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="relative" data-aos="zoom-in">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
                   <div className="space-y-6">
                      <div className="h-4 bg-white/10 rounded-full w-3/4"></div>
                      <div className="h-4 bg-white/10 rounded-full w-full"></div>
                      <div className="h-4 bg-white/10 rounded-full w-5/6"></div>
                      <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="h-24 bg-[#00afef]/20 rounded-2xl"></div>
                        <div className="h-24 bg-white/5 rounded-2xl"></div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Youtube Section */}
        <section className="py-24 bg-white">
          <Youtube />
        </section>

        {/* Blog Section */}
        <section className="py-24 bg-slate-50">
          <BlogSection />
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white">
          <FAQ />
        </section>

        <CTASection />
      </main>
    </div>
  );
};

export default ResourcesPage;

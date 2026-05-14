import React, { useEffect } from 'react';
import Gallery from "../components/Gallery";
import AOS from 'aos';
import 'aos/dist/aos.css';

const GalleryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white font-outfit overflow-x-hidden selection:bg-blue-100">

      
      <main>
        {/* Page Header / Hero */}
        <section className="relative pt-48 pb-24 bg-slate-50 overflow-hidden">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-[40%] h-full bg-blue-50/50 rounded-bl-[200px] -z-0"></div>
          
          <div className="container">
            <div className="max-w-4xl" data-aos="fade-right">
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-white text-[#00afef] rounded-full border border-blue-100 shadow-sm fintech-subtitle">
                <span className="w-2 h-2 rounded-full bg-[#00afef] animate-pulse"></span>
                <span className="text-xs font-black uppercase tracking-widest">Our Visual Portfolio</span>
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-[#0f172a] leading-[0.95] tracking-tighter fintech-subtitle">
                Moments That <br />
                <span className="text-[#00afef]">Define Us.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl leading-relaxed">
                Take a look at the milestones, events, and everyday excellence that shape Blueant Finserv. From workshops to corporate summits, we celebrate every step of our growth.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Component */}
        <Gallery />

        {/* Closing Quote / CTA */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="container">
            <div className="max-w-3xl mx-auto space-y-8" data-aos="zoom-in">
              <svg className="w-16 h-16 text-blue-100 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L14.017 3C14.017 1.89543 14.9124 1 16.017 1L19.017 1C20.6739 1 22.017 2.34315 22.017 4V15C22.017 17.7614 19.7784 20 17.017 20L16.017 20C14.9124 20 14.017 20.8954 14.017 22L14.017 21ZM2.017 21L2.017 18C2.017 16.8954 2.91243 16 4.017 16H7.017C7.56928 16 8.017 15.5523 8.017 15V9C8.017 8.44772 7.56928 8 7.017 8H4.017C2.91243 8 2.017 7.10457 2.017 6V3L2.017 3C2.017 1.89543 2.91243 1 4.017 1L7.017 1C8.67386 1 10.017 2.34315 10.017 4V15C10.017 17.7614 7.77858 20 5.017 20L4.017 20C2.91243 20 2.017 20.8954 2.017 22L2.017 21Z" />
              </svg>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight italic">
                "Small, disciplined steps today lead to mighty financial colonies tomorrow."
              </h2>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-1 bg-[#00afef] rounded-full"></div>
                <span className="text-slate-400 font-black uppercase tracking-widest text-xs">The Blueant Philosophy</span>
              </div>
            </div>
          </div>
        </section>
      </main>


    </div>
  );
};

export default GalleryPage;

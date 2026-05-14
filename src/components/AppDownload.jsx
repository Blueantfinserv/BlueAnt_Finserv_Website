import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AppDownload = () => {
  return (
    <section className="section bg-slate-50 relative overflow-hidden">
      <div className="container">
        
        <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] rounded-[40px] p-10 md:p-16 lg:p-24 flex flex-col lg:flex-row items-center justify-between shadow-2xl overflow-hidden relative" data-aos="fade-up">
          
          {/* Decorative Circles */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00afef]/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

          {/* Left Text */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 relative z-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#00afef] animate-pulse"></span>
              <span className="text-white font-bold text-xs uppercase tracking-[0.2em]">Mobile App</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6">
              CLICK. DOWNLOAD. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00afef] to-blue-400">GO!</span>
            </h2>
            
            <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed fintech-subtitle max-w-xl mx-auto lg:mx-0">
              Because smart investing starts with the right tools. Track your portfolio, execute trades, and consult experts on the go.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#" className="flex items-center justify-center gap-3 bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-2xl font-bold transition-all w-full sm:w-auto shadow-xl hover:-translate-y-1 group">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.523 15.3414C17.523 15.3414 19.3364 12.0163 19.4674 11.7547C19.8242 11.0371 19.4124 10.1558 18.6369 9.87877C17.9157 9.62095 17.0694 9.88092 16.634 10.5186L14.7302 13.3101C13.8821 13.0181 12.9669 13.0181 12.1188 13.3101L10.215 10.5186C9.77958 9.88092 8.93325 9.62095 8.21208 9.87877C7.43657 10.1558 7.02476 11.0371 7.38164 11.7547C7.51261 12.0163 9.32599 15.3414 9.32599 15.3414C6.26257 16.969 4.1481 20.0822 3.86475 23.6338H22.9842C22.7009 20.0822 20.5864 16.969 17.523 15.3414ZM8.84752 20.7188C8.16918 20.7188 7.61868 20.1683 7.61868 19.49C7.61868 18.8117 8.16918 18.2612 8.84752 18.2612C9.52586 18.2612 10.0764 18.8117 10.0764 19.49C10.0764 20.1683 9.52586 20.7188 8.84752 20.7188ZM18.0015 20.7188C17.3231 20.7188 16.7726 20.1683 16.7726 19.49C16.7726 18.8117 17.3231 18.2612 18.0015 18.2612C18.6798 18.2612 19.2303 18.8117 19.2303 19.49C19.2303 20.1683 18.6798 20.7188 18.0015 20.7188Z" />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-black tracking-widest text-slate-500">Get it on</p>
                  <p className="text-lg leading-none mt-0.5">Google Play</p>
                </div>
              </a>
              
              <a href="#" className="flex items-center justify-center gap-3 bg-transparent border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-bold transition-all w-full sm:w-auto hover:-translate-y-1">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.364 8.525c-.218-1.554 1.054-2.88 2.083-3.615-.658-.974-1.872-1.258-2.316-1.298-1.002-.102-1.956.59-2.472.59-.514 0-1.295-.572-2.115-.556-1.066.018-2.046.618-2.593 1.57-1.11 1.922-.284 4.774.803 6.34.532.766 1.155 1.622 1.986 1.593.803-.03 1.106-.52 2.073-.52.966 0 1.25.52 2.09.504.858-.016 1.393-.787 1.922-1.558.614-.89.866-1.752.88-1.796-.018-.008-1.68-.644-1.897-2.544H16.364v1.29zM15.115 4.382c.44-.53.738-1.272.657-2.012-.64.026-1.42.428-1.873.957-.406.47-.76 1.222-.663 1.95.714.056 1.442-.366 1.88-8.895z" />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-black tracking-widest text-slate-400">Download on the</p>
                  <p className="text-lg leading-none mt-0.5">App Store</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Image (Mockup) */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
            <div className="relative w-64 h-[500px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl flex items-center justify-center overflow-hidden transform rotate-[-5deg] hover:rotate-0 transition-transform duration-700">
              <img src="https://images.unsplash.com/photo-1616077168079-7e0908d0a536?auto=format&fit=crop&w=400&q=80" alt="App Interface" className="w-full h-full object-cover opacity-80" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00afef]/40 to-transparent mix-blend-overlay"></div>
              
              {/* Fake UI Elements */}
              <div className="absolute top-10 left-4 right-4 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <div className="flex justify-between items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#00afef]"></div>
                  <div className="w-16 h-2 rounded-full bg-white/20"></div>
                </div>
                <h3 className="text-white font-black text-2xl">₹18.5L</h3>
                <p className="text-emerald-400 text-xs font-bold">+12.5% Today</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppDownload;

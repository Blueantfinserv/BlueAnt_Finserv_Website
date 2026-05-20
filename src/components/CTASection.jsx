import React from "react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="section bg-white px-6">
      <div className="container">
        
        {/* Main Gradient Box */}
        <div className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-[40px] p-12 md:p-24 text-center shadow-2xl shadow-indigo-500/30 overflow-hidden" data-aos="zoom-in">
          
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm">
              <span className="text-white">⭐</span>
              <span className="text-white font-bold text-xs uppercase tracking-wider">Online Financial Partner</span>
            </div>

            {/* Headings */}
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
              Start Your Wealth Journey Today!
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto fintech-subtitle font-medium">
              Open your free account now and get exclusive benefits. Join 2,600+ investors who are already building their financial future with Blueant Finserv.
            </p>

            {/* 3 Pills */}
            <div className="flex flex-wrap justify-center gap-4 fintech-subtitle">
              {['₹0 Account Opening', '₹500 Trading Credit', 'Free Advisory Session'].map((pill, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                  <div className="w-5 h-5 rounded-full bg-emerald-400/20 flex items-center justify-center text-emerald-400">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white text-sm font-bold">{pill}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 fintech-subtitle w-full max-w-2xl mx-auto">
              <Link to="/contact" className="w-full sm:w-auto">
                <button className="bg-white text-indigo-600 hover:bg-slate-50 px-12 py-5 rounded-full font-black text-lg shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl flex items-center justify-center gap-2 w-full">
                  Open Free Account
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Link>
              <a 
                href="https://wa.me/+919990218899?text=Hi%2C%20I%20need%20financial%20advice" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto"
                style={{ textDecoration: 'none' }}
              >
                <button className="bg-transparent border-2 border-white/30 hover:bg-white/10 text-white px-12 py-5 rounded-full font-bold text-lg transition-all w-full sm:w-auto">
                  Talk to Expert
                </button>
              </a>
            </div>

            {/* Contact Info Row */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 md:gap-16 fintech-subtitle text-left">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-1">Call Us</p>
                  <p className="text-white font-black text-sm">1800-123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <p className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-1">Live Chat</p>
                  <p className="text-white font-black text-sm">24/7 Available</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-1">Email Us</p>
                  <p className="text-white font-black text-sm">support@blueant.com</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/10 mb-8"></div>

            {/* Bottom Avatars */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                <div className="w-10 h-10 rounded-full bg-blue-400 border-2 border-indigo-600 flex items-center justify-center text-white text-xs font-bold">RK</div>
                <div className="w-10 h-10 rounded-full bg-purple-400 border-2 border-indigo-600 flex items-center justify-center text-white text-xs font-bold">SM</div>
                <div className="w-10 h-10 rounded-full bg-emerald-400 border-2 border-indigo-600 flex items-center justify-center text-white text-xs font-bold">AP</div>
                <div className="w-10 h-10 rounded-full bg-orange-400 border-2 border-indigo-600 flex items-center justify-center text-white text-xs font-bold">2.6k+</div>
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-sm">Join 2,600+ Happy Investors</p>
                <p className="text-blue-200 text-xs">Rated 4.9/5 on Google & App Store</p>
              </div>
            </div>

          </div>
        </div>

        {/* 3 Bottom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8">
          <div className="bg-sky-50 rounded-2xl p-8 text-center flex flex-col items-center hover:-translate-y-1 transition-transform cursor-pointer border border-sky-100" data-aos="fade-up" data-aos-delay="100">
            <div className="w-12 h-12 rounded-full bg-sky-100 text-sky-500 flex items-center justify-center mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h4 className="text-slate-900 font-bold mb-2">Free Smart Planning</h4>
            <p className="text-slate-500 text-xs leading-relaxed">Our financial plans are 100% free with AI-powered recommendations.</p>
          </div>

          <div className="bg-purple-50 rounded-2xl p-8 text-center flex flex-col items-center hover:-translate-y-1 transition-transform cursor-pointer border border-purple-100" data-aos="fade-up" data-aos-delay="200">
            <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-500 flex items-center justify-center mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="text-slate-900 font-bold mb-2">Mobile-First Experience</h4>
            <p className="text-slate-500 text-xs leading-relaxed">Manage investments anytime, anywhere with our award-winning app.</p>
          </div>

          <div className="bg-emerald-50 rounded-2xl p-8 text-center flex flex-col items-center hover:-translate-y-1 transition-transform cursor-pointer border border-emerald-100" data-aos="fade-up" data-aos-delay="300">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-500 flex items-center justify-center mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h4 className="text-slate-900 font-bold mb-2">100% Secure & Safe</h4>
            <p className="text-slate-500 text-xs leading-relaxed">Bank-grade security with AMFI & IRDAI regulatory compliance.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CTASection;

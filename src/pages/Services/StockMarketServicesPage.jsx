import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { TrendingUp, Check, Award, Shield, BarChart3, LineChart, PieChart, Activity } from "lucide-react";
import "../../styles/WealthCreationPage.css"; // Reuse the proven CSS

const StockMarketServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="wcp-wrapper pt-20">
      <main>
        {/* Hero Section */}
        <section className="wcp-hero">
          <div className="wcp-grid-bg"></div>
          <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-16 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <div className="w-full lg:w-1/2" data-aos="fade-right">
                {/* Premium Fiduciary Focus Badge */}
                <div className="wcp-fiduciary-badge mb-6" style={{ color: '#ea580c', background: 'rgba(234, 88, 12, 0.04)', borderColor: 'rgba(234, 88, 12, 0.12)' }}>
                  <span className="wcp-live-dot" style={{ background: '#ea580c', boxShadow: '0 0 10px #ea580c' }}></span>
                  <span style={{ color: '#ea580c' }}>Research-Led Market Guidance • Investor Education • Long-Term Wealth Clarity</span>
                </div>
                
                <h1 className="wcp-title text-5xl lg:text-6xl font-black mb-6 leading-tight">
                  Navigate the Markets with <br />
                  <span className="wcp-title-gradient" style={{ background: 'linear-gradient(135deg, #f97316 0%, #d97706 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    Research-Driven Insights.
                  </span>
                </h1>
                
                <p className="wcp-desc text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mb-8">
                  At Blueant Finserv, we do not sell stocks or provide speculative trading tips. We help investors understand market behavior through disciplined research, investor education, and structured financial guidance designed for long-term confidence and informed decision-making.
                </p>

                {/* Secure Info Widget */}
                <div className="wcp-hero-widget mt-8" data-aos="zoom-in" data-aos-delay="200">
                  <div className="wcp-widget-icon" style={{ background: 'rgba(249, 115, 22, 0.06)', color: '#f97316', borderColor: 'rgba(249, 115, 22, 0.15)' }}>
                    <TrendingUp size={22} />
                  </div>
                  <div className="wcp-widget-content">
                    <span className="text-[10px] font-black uppercase text-orange-600 tracking-wider">Market Research & Investor Guidance</span>
                    <h4 style={{ marginTop: '2px' }}>Understanding Market Behavior</h4>
                    <p>Access high-quality market insights, equity research, sector analysis, and portfolio guidance designed to help investors make informed financial decisions with greater clarity and confidence.</p>
                  </div>
                </div>
              </div>

              {/* Hero Image - Top Right */}
              <div className="w-full lg:w-1/2 mt-12 lg:mt-0 lg:-mt-28" data-aos="fade-left" data-aos-delay="300">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group w-full aspect-[4/3] lg:aspect-[16/10]">
                  <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-600/10 transition-colors duration-500 z-10 pointer-events-none"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80" 
                    alt="Stock Market Services" 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:brightness-95"
                  />
                  <div className="absolute top-6 right-6 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg z-20">
                    <TrendingUp className="w-7 h-7 text-orange-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Core Equities & Trading Areas */}
        <section className="wcp-section wcp-section-dark">
          <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-10">
            <div className="wcp-section-header" data-aos="fade-up">
              <span className="wcp-section-subtitle" style={{ color: '#f97316' }}>Core Research & Guidance Areas</span>
              <h2 className="wcp-section-title">Equity Research & Market Insights</h2>
              <p className="wcp-section-desc">
                At Blueant Finserv, our focus is on empowering investors through research-backed financial understanding, strategic thinking, and long-term market awareness.
              </p>
            </div>

            <div className="wcp-card-grid">
              {/* Card 1 */}
              <div className="wcp-glass-card" data-aos="fade-up" data-aos-delay="100">
                <span className="wcp-glass-card-badge" style={{ color: '#f97316', background: 'rgba(249, 115, 22, 0.1)' }}>Research Area 01</span>
                <div className="wcp-card-icon-box" style={{ background: 'rgba(249, 115, 22, 0.05)', color: '#f97316', borderColor: 'rgba(249, 115, 22, 0.15)' }}>
                  <PieChart size={24} />
                </div>
                <h3 className="wcp-card-h3">Fundamental Research</h3>
                <p className="wcp-card-text">
                  Understand company financials, business models, management quality, and industry trends to evaluate long-term wealth creation opportunities responsibly.
                </p>
              </div>

              {/* Card 2 */}
              <div className="wcp-glass-card" data-aos="fade-up" data-aos-delay="200">
                <span className="wcp-glass-card-badge" style={{ color: '#3b82f6', background: 'rgba(59, 130, 246, 0.1)' }}>Research Area 02</span>
                <div className="wcp-card-icon-box" style={{ background: 'rgba(59, 130, 246, 0.05)', color: '#3b82f6', borderColor: 'rgba(59, 130, 246, 0.15)' }}>
                  <LineChart size={24} />
                </div>
                <h3 className="wcp-card-h3">Technical Market Insights</h3>
                <p className="wcp-card-text">
                  Learn market structure, price behavior, trend analysis, and technical indicators to better understand market sentiment and investor psychology.
                </p>
              </div>

              {/* Card 3 */}
              <div className="wcp-glass-card" data-aos="fade-up" data-aos-delay="300">
                <span className="wcp-glass-card-badge" style={{ color: '#10b981', background: 'rgba(16, 185, 129, 0.1)' }}>Research Area 03</span>
                <div className="wcp-card-icon-box" style={{ background: 'rgba(16, 185, 129, 0.05)', color: '#10b981', borderColor: 'rgba(16, 185, 129, 0.15)' }}>
                  <Activity size={24} />
                </div>
                <h3 className="wcp-card-h3">Sector & Economic Analysis</h3>
                <p className="wcp-card-text">
                  Gain insights into macroeconomic trends, sector performance, policy changes, and market cycles to build a more balanced investment perspective.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Investing vs Trading Comparison */}
        <section className="wcp-section">
          <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-10">
            <div className="wcp-split-container">
              {/* Left Column: Content */}
              <div data-aos="fade-right">
                <span className="wcp-section-subtitle" style={{ color: '#f97316' }}>Understanding Market Participation</span>
                <h2 className="wcp-section-title" style={{ fontSize: '36px', marginBottom: '24px' }}>
                  Long-Term Investing vs Active Trading
                </h2>
                <p className="wcp-section-desc" style={{ marginBottom: '36px', fontSize: '16.5px' }}>
                  The stock market offers different approaches depending on financial goals, risk appetite, and investment discipline. We help investors understand these approaches through education and research-driven guidance.
                </p>

                <div className="space-y-2">
                  <div className="wcp-check-item">
                    <div className="wcp-check-icon" style={{ background: 'rgba(249, 115, 22, 0.1)', color: '#f97316' }}>
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="wcp-check-title">Long-Term Wealth Building</h4>
                      <p className="wcp-check-desc">Focus on disciplined investing, quality businesses, diversification, and compounding strategies aimed at sustainable long-term financial growth.</p>
                    </div>
                  </div>

                  <div className="wcp-check-item">
                    <div className="wcp-check-icon" style={{ background: 'rgba(249, 115, 22, 0.1)', color: '#f97316' }}>
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="wcp-check-title">Market Awareness & Tactical Insights</h4>
                      <p className="wcp-check-desc">Understand short-term market movements, volatility cycles, and investor sentiment through structured technical and market analysis.</p>
                    </div>
                  </div>

                  <div className="wcp-check-item">
                    <div className="wcp-check-icon" style={{ background: 'rgba(249, 115, 22, 0.1)', color: '#f97316' }}>
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="wcp-check-title">Risk Awareness & Portfolio Discipline</h4>
                      <p className="wcp-check-desc">Learn the importance of asset allocation, diversification, risk management, and emotional discipline while participating in financial markets.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Comparison Table */}
              <div data-aos="fade-left">
                <div className="wcp-comparison-table-wrapper" style={{ borderColor: 'rgba(249, 115, 22, 0.1)' }}>
                  <div className="p-6 border-b border-slate-100">
                    <span className="wcp-section-subtitle" style={{ marginBottom: '4px', color: '#f97316' }}>Market Understanding Framework</span>
                    <h3 className="text-lg font-black text-slate-800">Investment Approach Comparison</h3>
                  </div>
                  
                  <table className="wcp-comparison-table">
                    <thead>
                      <tr>
                        <th>Factor</th>
                        <th style={{ color: '#10b981' }}>Long-Term Investing</th>
                        <th style={{ color: '#3b82f6' }}>Active Trading</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Time Horizon</td>
                        <td><span className="wcp-table-pill" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>Years</span></td>
                        <td><span className="wcp-table-pill" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>Short-Term</span></td>
                      </tr>
                      <tr>
                        <td>Primary Focus</td>
                        <td><span className="wcp-table-pill" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>Business Growth & Fundamentals</span></td>
                        <td><span className="wcp-table-pill" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>Market Trends & Price Action</span></td>
                      </tr>
                      <tr>
                        <td>Risk Profile</td>
                        <td><span className="wcp-table-pill" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>Moderate</span></td>
                        <td><span className="wcp-table-pill" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>Higher Volatility</span></td>
                      </tr>
                      <tr>
                        <td>Core Objective</td>
                        <td><span className="wcp-table-pill" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>Long-Term Wealth Creation</span></td>
                        <td><span className="wcp-table-pill" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>Tactical Market Participation</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Financial Learning Tracks */}
        <section className="wcp-section wcp-section-dark">
          <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-10">
            <div className="wcp-section-header" data-aos="fade-up">
              <span className="wcp-section-subtitle" style={{ color: '#f97316' }}>Investor Education Tracks</span>
              <h2 className="wcp-section-title">Financial Market Learning Programs</h2>
              <p className="wcp-section-desc">
                Build practical market understanding through structured educational modules focused on financial literacy, research interpretation, and investment awareness.
              </p>
            </div>

            <div className="wcp-syllabus-grid">
              {/* Track 1 */}
              <div className="wcp-syllabus-card" data-aos="fade-up" data-aos-delay="100">
                <span className="wcp-syllabus-num">01</span>
                <h3>Equity Market Fundamentals</h3>
                <p>
                  Understand how stock markets function, market participants, order types, indices, corporate actions, and the foundations of equity investing.
                </p>
                
                <div className="wcp-progress-bar-wrapper">
                  <div className="wcp-progress-bar-labels">
                    <span>Syllabus Depth</span>
                    <span style={{ color: '#f97316' }}>100% Complete</span>
                  </div>
                  <div className="wcp-progress-bar-track">
                    <div className="wcp-progress-bar-fill" style={{ width: '100%', background: '#f97316' }}></div>
                  </div>
                </div>

                <div className="wcp-syllabus-meta">
                  <span className="wcp-track-badge" style={{ background: 'rgba(249, 115, 22, 0.1)', color: '#f97316', borderColor: 'rgba(249, 115, 22, 0.2)' }}>Foundational</span>
                  <span className="text-slate-500 font-bold">Interactive Sessions</span>
                </div>
              </div>

              {/* Track 2 */}
              <div className="wcp-syllabus-card" data-aos="fade-up" data-aos-delay="200">
                <span className="wcp-syllabus-num">02</span>
                <h3>Technical & Chart Analysis</h3>
                <p>
                  Learn chart structures, candlestick behavior, moving averages, RSI, MACD, trend analysis, and market momentum interpretation.
                </p>
                
                <div className="wcp-progress-bar-wrapper">
                  <div className="wcp-progress-bar-labels">
                    <span>Syllabus Depth</span>
                    <span style={{ color: '#3b82f6' }}>80% Covered</span>
                  </div>
                  <div className="wcp-progress-bar-track">
                    <div className="wcp-progress-bar-fill" style={{ width: '80%', background: '#3b82f6' }}></div>
                  </div>
                </div>

                <div className="wcp-syllabus-meta">
                  <span className="wcp-track-badge" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', borderColor: 'rgba(59, 130, 246, 0.2)' }}>Intermediate</span>
                  <span className="text-slate-500 font-bold">Charting Case Studies</span>
                </div>
              </div>

              {/* Track 3 */}
              <div className="wcp-syllabus-card" data-aos="fade-up" data-aos-delay="300">
                <span className="wcp-syllabus-num">03</span>
                <h3>Advanced Market Concepts</h3>
                <p>
                  Explore derivatives awareness, hedging concepts, options basics, and portfolio risk understanding from an educational perspective.
                </p>
                
                <div className="wcp-progress-bar-wrapper">
                  <div className="wcp-progress-bar-labels">
                    <span>Syllabus Depth</span>
                    <span style={{ color: '#10b981' }}>45% Explored</span>
                  </div>
                  <div className="wcp-progress-bar-track">
                    <div className="wcp-progress-bar-fill" style={{ width: '45%', background: '#10b981' }}></div>
                  </div>
                </div>

                <div className="wcp-syllabus-meta">
                  <span className="wcp-track-badge" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', borderColor: 'rgba(16, 185, 129, 0.2)' }}>Advanced</span>
                  <span className="text-slate-500 font-bold">Live Market Execution</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Final Fiduciary & Action Block */}
        <section className="wcp-section" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)' }}>
          <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-10">
            <div className="wcp-cta-card" data-aos="fade-up">
              <div className="wcp-cta-grid-pattern"></div>
              <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[100px] pointer-events-none"></div>
              
              <div className="wcp-cta-grid">
                {/* Left Column: Educational Philosophy */}
                <div data-aos="fade-right">
                  <div className="wcp-learning-badge" style={{ background: 'rgba(249, 115, 22, 0.1)', color: '#f97316' }}>
                    <Award size={12} />
                    <span>Your Research & Financial Guidance Partner</span>
                  </div>
                  
                  <h2 className="wcp-section-title text-white">
                    Independent Market Understanding
                  </h2>
                  
                  <p className="wcp-section-desc text-slate-300">
                    Our approach is built on research, education, transparency, and investor-first guidance designed to help individuals make more informed financial decisions.
                  </p>

                  <div className="wcp-fiduciary-grid mt-10">
                    <div className="wcp-fiduciary-item">
                      <div className="wcp-fiduciary-icon" style={{ background: 'rgba(249, 115, 22, 0.1)', color: '#f97316' }}>
                        <Shield size={20} strokeWidth={2.5} />
                      </div>
                      <h4 className="text-white">Research-Driven Insights</h4>
                      <p className="text-slate-400">Access structured market research, sector insights, and educational financial content designed for informed investing.</p>
                    </div>
                    
                    <div className="wcp-fiduciary-item">
                      <div className="wcp-fiduciary-icon" style={{ background: 'rgba(249, 115, 22, 0.1)', color: '#f97316' }}>
                        <Activity size={20} strokeWidth={2.5} />
                      </div>
                      <h4 className="text-white">Investor-Centric Approach</h4>
                      <p className="text-slate-400">We focus on clarity, discipline, financial awareness, and long-term investor confidence instead of speculative recommendations.</p>
                    </div>
                  </div>
                </div>

                {/* Right Column: Glass Action Card */}
                <div data-aos="fade-left">
                  <div className="wcp-cta-glass-card">
                    <h3 className="text-white">Learn. Understand. Invest Responsibly.</h3>
                    <p className="text-slate-300">
                      Build stronger financial understanding through research-backed guidance focused on clarity, discipline, and informed market participation.
                    </p>
                    
                    <div className="space-y-4">
                      <button className="wcp-learning-btn w-full py-4 px-6 text-white font-black rounded-2xl transition duration-300 text-center text-sm uppercase tracking-wider block" style={{ background: 'linear-gradient(90deg, #f97316 0%, #ea580c 100%)' }}>
                        Start Your Financial Journey
                      </button>
                      <p className="text-[10px] text-center text-slate-400 font-bold">
                        Research-Based Guidance • Investor Education • Long-Term Financial Clarity
                      </p>
                    </div>

                    <div className="flex items-center gap-4 mt-8 pt-6" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                      <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 flex-shrink-0">
                        <Shield size={20} strokeWidth={2.5} />
                      </div>
                      <div>
                        <div className="text-white font-black text-sm tracking-wide">AMFI Registered Distributor</div>
                        <div className="text-slate-400 text-xs font-bold tracking-wider mt-1">ARN: 129543</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StockMarketServicesPage;

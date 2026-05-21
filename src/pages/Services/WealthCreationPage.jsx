import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { TrendingUp, ArrowRight, Check, Compass, Award, Shield, BookOpen, BarChart3, LineChart, HelpCircle } from "lucide-react";
import "../../styles/WealthCreationPage.css";
import { openConsultationModal } from "../../components/ConsultationModal";

const WealthCreationPage = () => {
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
            <div className="max-w-4xl" data-aos="fade-right">
              {/* Premium Fiduciary Focus Badge */}
              <div className="wcp-fiduciary-badge">
                <span className="wcp-live-dot"></span>
                <span>Purely Educational Approach • Research-Driven Insights • Independent Financial Learning</span>
              </div>
              
              <h1 className="wcp-title">
                Wealth Creation Through <br />
                <span className="wcp-title-gradient">Disciplined Financial Understanding.</span>
              </h1>
              
              <p className="wcp-desc">
                Build stronger financial decision-making with structured learning focused on long-term investing principles, portfolio balance, and cost-aware investment strategies. Our approach is centered around financial education designed to help individuals understand markets, investment structures, and wealth-building frameworks independently.
              </p>

              {/* Secure Info Widget */}
              <div className="wcp-hero-widget" data-aos="zoom-in" data-aos-delay="200">
                <div className="wcp-widget-icon">
                  <Shield size={22} />
                </div>
                <div className="wcp-widget-content">
                  <span className="text-[10px] font-black uppercase text-blue-600 tracking-wider">Structured Financial Learning</span>
                  <h4 style={{ marginTop: '2px' }}>Understanding Long-Term Investing Principles</h4>
                  <p>Explore how disciplined investing, consistency, and portfolio diversification contribute to long-term financial growth. Learn the fundamentals behind market participation, asset allocation, and sustainable investing habits.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Core Financial Education Areas */}
        <section className="wcp-section wcp-section-dark">
          <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-10">
            <div className="wcp-section-header" data-aos="fade-up">
              <span className="wcp-section-subtitle">Academic Principles</span>
              <h2 className="wcp-section-title">Core Financial Education Areas</h2>
              <p className="wcp-section-desc">
                Develop a balanced understanding of standard market frameworks, cost dynamics, and the psychological habits that govern compounding periods.
              </p>
            </div>

            <div className="wcp-card-grid">
              {/* Card 1 */}
              <div className="wcp-glass-card" data-aos="fade-up" data-aos-delay="100">
                <span className="wcp-glass-card-badge">Area 01</span>
                <div className="wcp-card-icon-box">
                  <BarChart3 size={24} />
                </div>
                <h3 className="wcp-card-h3">Investment Cost Awareness</h3>
                <p className="wcp-card-text">
                  Learn how investment-related charges, commissions, and expense structures influence portfolio efficiency over extended investment periods.
                </p>
              </div>

              {/* Card 2 */}
              <div className="wcp-glass-card" data-aos="fade-up" data-aos-delay="200">
                <span className="wcp-glass-card-badge">Area 02</span>
                <div className="wcp-card-icon-box">
                  <Compass size={24} />
                </div>
                <h3 className="wcp-card-h3">Portfolio Diversification</h3>
                <p className="wcp-card-text">
                  Understand how combining different asset classes can help create balanced portfolios aligned with varying market conditions and financial goals.
                </p>
              </div>

              {/* Card 3 */}
              <div className="wcp-glass-card" data-aos="fade-up" data-aos-delay="300">
                <span className="wcp-glass-card-badge">Area 03</span>
                <div className="wcp-card-icon-box">
                  <BookOpen size={24} />
                </div>
                <h3 className="wcp-card-h3">Investor Psychology & Market Behavior</h3>
                <p className="wcp-card-text">
                  Explore how emotional decision-making, market volatility, and behavioral patterns influence investment outcomes and long-term financial discipline.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Systematic Investing (Compounding Math Deep-Dive) */}
        <section className="wcp-section">
          <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-10">
            <div className="wcp-split-container">
              {/* Left Column: Educational Content */}
              <div data-aos="fade-right">
                <span className="wcp-section-subtitle">Systematic Investing Fundamentals</span>
                <h2 className="wcp-section-title" style={{ fontSize: '36px', marginBottom: '24px' }}>
                  Building Consistency Through SIPs
                </h2>
                <p className="wcp-section-desc" style={{ marginBottom: '36px', fontSize: '16.5px' }}>
                  Systematic investing encourages disciplined participation in markets through regular contributions over time, helping investors navigate different market cycles with greater consistency.
                </p>

                <div className="space-y-2">
                  <div className="wcp-check-item">
                    <div className="wcp-check-icon">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="wcp-check-title">Rupee Cost Averaging</h4>
                      <p className="wcp-check-desc">Understand how periodic investing works across changing market conditions and how averaging investment costs can support long-term investing discipline.</p>
                    </div>
                  </div>

                  <div className="wcp-check-item">
                    <div className="wcp-check-icon">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="wcp-check-title">Long-Term Compounding Concepts</h4>
                      <p className="wcp-check-desc">Learn how reinvestment and consistency influence portfolio development over extended durations and why time plays a significant role in investing journeys.</p>
                    </div>
                  </div>

                  <div className="wcp-check-item">
                    <div className="wcp-check-icon">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="wcp-check-title">Flexible Financial Planning</h4>
                      <p className="wcp-check-desc">Explore investment approaches that allow adaptability for changing financial priorities, liquidity preferences, and evolving life goals.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: High-Fidelity Side-by-Side Comparison Grid Table */}
              <div data-aos="fade-left">
                <div className="wcp-comparison-table-wrapper">
                  <div className="p-6 border-b border-slate-100">
                    <span className="wcp-section-subtitle" style={{ marginBottom: '4px' }}>Educational Comparison Framework</span>
                    <h3 className="text-lg font-black text-slate-800">Understanding Investment Structures</h3>
                  </div>
                  
                  <table className="wcp-comparison-table">
                    <thead>
                      <tr>
                        <th>Topic</th>
                        <th className="text-direct">Direct Plans</th>
                        <th className="text-regular">Regular Plans</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Distribution Model</td>
                        <td><span className="wcp-table-pill pill-direct">Direct Platform Access</span></td>
                        <td><span className="wcp-table-pill pill-regular">Advisor/Distributor-Based</span></td>
                      </tr>
                      <tr>
                        <td>Expense Structure</td>
                        <td><span className="wcp-table-pill pill-direct">Lower Expense Ratio</span></td>
                        <td><span className="wcp-table-pill pill-regular">Includes Distribution Costs</span></td>
                      </tr>
                      <tr>
                        <td>Investor Support Style</td>
                        <td><span className="wcp-table-pill pill-direct">Self-Directed Learning</span></td>
                        <td><span className="wcp-table-pill pill-regular">Assisted Distribution Model</span></td>
                      </tr>
                      <tr>
                        <td>Portfolio Control</td>
                        <td><span className="wcp-table-pill pill-direct">Independent Decision-Making</span></td>
                        <td><span className="wcp-table-pill pill-regular">Advisor-Assisted Decisions</span></td>
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
              <span className="wcp-section-subtitle">Financial Learning Tracks</span>
              <h2 className="wcp-section-title">Academic Financial Literacy Tracks</h2>
              <p className="wcp-section-desc">
                Invest in your greatest wealth generator—your own knowledge. Explore our curated portfolio management tracks.
              </p>
            </div>

            <div className="wcp-syllabus-grid">
              {/* Track 1 */}
              <div className="wcp-syllabus-card" data-aos="fade-up" data-aos-delay="100">
                <span className="wcp-syllabus-num">01</span>
                <h3>Mutual Fund Structure & Investment Basics</h3>
                <p>
                  Understand fund categories, expense ratios, direct and regular plans, SIP structures, and essential mutual fund concepts through simplified educational sessions.
                </p>
                
                {/* Completion Progress Bar */}
                <div className="wcp-progress-bar-wrapper">
                  <div className="wcp-progress-bar-labels">
                    <span>Syllabus Depth</span>
                    <span>100% Complete</span>
                  </div>
                  <div className="wcp-progress-bar-track">
                    <div className="wcp-progress-bar-fill" style={{ width: '100%' }}></div>
                  </div>
                </div>

                <div className="wcp-syllabus-meta">
                  <span className="wcp-track-badge badge-foundational">Foundational</span>
                  <span className="text-slate-500 font-bold">Interactive Learning Sessions</span>
                </div>
              </div>

              {/* Track 2 */}
              <div className="wcp-syllabus-card" data-aos="fade-up" data-aos-delay="200">
                <span className="wcp-syllabus-num">02</span>
                <h3>Portfolio Allocation & Asset Balance</h3>
                <p>
                  Explore diversification models, asset balancing concepts, market cycle behavior, and structured portfolio approaches for different financial objectives.
                </p>
                
                {/* Completion Progress Bar */}
                <div className="wcp-progress-bar-wrapper">
                  <div className="wcp-progress-bar-labels">
                    <span>Syllabus Depth</span>
                    <span>65% Covered</span>
                  </div>
                  <div className="wcp-progress-bar-track">
                    <div className="wcp-progress-bar-fill" style={{ width: '65%' }}></div>
                  </div>
                </div>

                <div className="wcp-syllabus-meta">
                  <span className="wcp-track-badge badge-intermediate">Intermediate</span>
                  <span className="text-slate-500 font-bold">Guided Educational Modules</span>
                </div>
              </div>

              {/* Track 3 */}
              <div className="wcp-syllabus-card" data-aos="fade-up" data-aos-delay="300">
                <span className="wcp-syllabus-num">03</span>
                <h3>Market Behavior & Investment Discipline</h3>
                <p>
                  Learn about market corrections, investing psychology, volatility understanding, and disciplined participation approaches during changing market conditions.
                </p>
                
                {/* Completion Progress Bar */}
                <div className="wcp-progress-bar-wrapper">
                  <div className="wcp-progress-bar-labels">
                    <span>Syllabus Depth</span>
                    <span>30% Covered</span>
                  </div>
                  <div className="wcp-progress-bar-track">
                    <div className="wcp-progress-bar-fill" style={{ width: '30%' }}></div>
                  </div>
                </div>

                <div className="wcp-syllabus-meta">
                  <span className="wcp-track-badge badge-advanced">Advanced</span>
                  <span className="text-slate-500 font-bold">Research-Based Sessions</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Customized Fiduciary Educational CTA Section */}
        <section className="wcp-section" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)' }}>
          <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-10">
            <div className="wcp-cta-card" data-aos="fade-up">
              {/* Premium background grid mesh and ambient radial glows */}
              <div className="wcp-cta-grid-pattern"></div>
              <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
              
              <div className="wcp-cta-grid">
                {/* Left Column: Explore Syllabus details */}
                <div>
                  <div className="wcp-learning-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-6">
                    <Award size={12} />
                    <span>Your Financial Learning Partner</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                    Strengthen your <br />
                    <span>understanding of investing.</span>
                  </h2>
                  <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed">
                    Access simplified educational guidance and research-oriented learning resources designed to foster long-term wealth compounding and cost-aware portfolio strategies.
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="text-xs font-black uppercase tracking-widest text-blue-400 mb-4">What You Can Explore</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Structured financial literacy sessions",
                        "Investment research insights",
                        "Portfolio understanding frameworks",
                        "Market behavior education",
                        "Digital-first learning experience",
                        "Secure and simplified onboarding process"
                      ].map((exploreItem, idx) => (
                        <div key={idx} className="flex items-center gap-3 wcp-feature-item">
                          <div className="w-5 h-5 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center flex-shrink-0 wcp-feature-icon">
                            <Check size={10} strokeWidth={3} />
                          </div>
                          <span className="text-xs font-bold text-slate-300">{exploreItem}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Independent Action Card */}
                <div>
                  <div className="wcp-cta-glass-card">
                    <h3>Learn. Understand. Decide Independently.</h3>
                    <p>
                      Develop financial awareness through educational resources focused on clarity, structure, and informed decision-making.
                    </p>
                    <div className="space-y-4">
                      <button 
                        onClick={openConsultationModal}
                        className="wcp-learning-btn w-full py-4 px-6 text-white font-black rounded-2xl transition duration-300 text-center text-sm uppercase tracking-wider block"
                      >
                        Start Learning Journey
                      </button>
                      <p className="text-[10px] text-center text-slate-400 font-bold">
                        Pure Fiduciary Mandate • No hidden distribution commissions
                      </p>
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

export default WealthCreationPage;

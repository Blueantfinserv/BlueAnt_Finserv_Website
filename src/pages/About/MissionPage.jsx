import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Target, Eye, Check, Shield, TrendingUp, Rocket, Users, Scale, Lock, GraduationCap, Clock, Star, BadgeCheck } from "lucide-react";
import "../../styles/AboutPage.css";

const LogoCarousel = () => {
  const [angleOffset, setAngleOffset] = useState(0);
  const [scaleFactor, setScaleFactor] = useState(1);
  const requestRef = useRef();

  useEffect(() => {
    let lastTime = performance.now();
    const animate = (time) => {
      const deltaTime = time - lastTime;
      lastTime = time;
      setAngleOffset(prev => prev - 0.0003 * deltaTime); // Slowed down from 0.0007
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 1100) {
        // Scale down proportionally for smaller screens
        setScaleFactor(Math.max(0.25, width / 1100));
      } else {
        setScaleFactor(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const logos = [
    {
      id: 'item1',
      baseSize: 130,
      element: <span className="text-[#bf57ff] font-bold text-[18px] text-center leading-tight tracking-tight relative z-10 antialiased drop-shadow-md">Goal Based<br/>Planning</span>
    },
    {
      id: 'item2',
      baseSize: 130,
      element: <span className="text-white font-bold text-[18px] text-center leading-tight tracking-tight relative z-10 antialiased drop-shadow-md">Financial<br/>Education</span>
    },
    {
      id: 'item3',
      baseSize: 130,
      element: <span className="text-[#ff6b00] font-extrabold text-[18px] text-center leading-tight tracking-wide relative z-10 antialiased drop-shadow-md">Expert<br/>Guidance</span>
    },
    {
      id: 'item4',
      baseSize: 130,
      glow: true,
      element: <span className="text-[#ff0000] font-black text-[18px] text-center leading-tight tracking-tighter relative z-10 drop-shadow-[0_4px_25px_rgba(255,0,0,0.8)] antialiased">Personalized<br/>Consultation</span>
    },
    {
      id: 'item5',
      baseSize: 130,
      element: <span className="text-[#00b0ff] font-bold text-[18px] text-center leading-tight tracking-wide relative z-10 antialiased drop-shadow-md">Financial<br/>Awareness</span>
    },
    {
      id: 'item6',
      baseSize: 130,
      element: <span className="text-[#ff3d00] font-bold text-[16px] text-center leading-tight tracking-tight relative z-10 antialiased drop-shadow-md">Smart Financial<br/>Planning</span>
    },
    {
      id: 'item7',
      baseSize: 130,
      element: <span className="text-white font-bold text-[18px] text-center leading-tight relative z-10 antialiased drop-shadow-md">Wealth<br/>Guidance</span>
    }
  ];

  // Perspective math configuration
  const tiltAngle = 75; // The 3D rotation of the podium
  const radiusX = 420; // Increased radius of the orbit circle
  const radiusY = radiusX * Math.cos(tiltAngle * (Math.PI / 180)); // Perfect perspective matching
  const hoverHeight = 40; // Base hover height above the podium

  return (
    <div 
      className="relative w-full min-h-screen lg:h-[90vh] flex flex-col items-center justify-center overflow-hidden py-24 lg:py-0" 
      style={{ backgroundColor: '#02040a' }} 
    >
      {/* Background Lighting Elements */}
      <div className="absolute top-[5%] left-[10%] w-[600px] h-[600px] bg-[#3b82f6] opacity-[0.08] blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[5%] right-[10%] w-[700px] h-[700px] bg-[#8b5cf6] opacity-[0.07] blur-[180px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.15)_0%,transparent_60%)] rounded-[50%] pointer-events-none"></div>

      {/* Header */}
      <div className="relative z-20 flex flex-col items-center mb-12 px-4 lg:absolute lg:top-[12%] lg:mb-0" data-aos="fade-down">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/30 backdrop-blur-md border border-blue-400/30 text-blue-300 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.3em] mb-4 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse shadow-[0_0_10px_rgba(96,165,250,1)]"></span>
          MISSION • VISION • VALUES
        </div>
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-black tracking-tight drop-shadow-[0_0_40px_rgba(255,255,255,0.15)] leading-tight max-w-4xl">
          Empowering Financial Decisions <br className="hidden md:block"/> Through <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Knowledge & Trust</span>
        </h2>
      </div>

      {/* Scene Container */}
      <div 
        className="relative w-full max-w-[1200px] flex flex-col items-center justify-center transition-all duration-300 mt-4 lg:mt-24"
        style={{ height: `${Math.max(350, 500 * scaleFactor)}px` }} 
      >
        
        {/* Scaled Wrapper */}
        <div 
          className="absolute flex items-center justify-center" 
          style={{ 
            width: '1000px', 
            height: '500px', 
            transform: `scale(${scaleFactor})`, 
            transformOrigin: 'center center' 
          }}
        >

          {/* 3D Holographic Podium */}
          <div className="absolute flex justify-center items-center w-full" style={{ top: '70%' }}>
            {/* True 3D projection base - perfectly circular so it becomes an ellipse on rotation */}
            <div className="relative -translate-y-1/2" style={{ width: '950px', height: '950px', perspective: '2000px' }}>
              <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d', transform: `rotateX(${tiltAngle}deg)` }}>
                
                {/* Outer Aura */}
                <div className="absolute inset-[-80px] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.35)_0%,transparent_70%)] blur-[40px] transform translateZ(-60px)"></div>
                
                {/* Layer 3 (Base) */}
                <div className="absolute inset-0 rounded-full border-[2px] border-[rgba(59,130,246,0.35)] shadow-[0_0_50px_rgba(59,130,246,0.4),inset_0_0_30px_rgba(59,130,246,0.2)] bg-[#02040d]" style={{ transform: 'translateZ(-60px)' }}></div>
                
                {/* Layer 2 (Middle Tier) */}
                <div className="absolute inset-[40px] rounded-full border-[2px] border-[rgba(96,165,250,0.5)] shadow-[0_0_40px_rgba(59,130,246,0.5),inset_0_0_30px_rgba(96,165,250,0.25)] bg-[#040713]" style={{ transform: 'translateZ(-30px)' }}></div>
                
                {/* Layer 1 (Surface) */}
                <div className="absolute inset-[80px] rounded-full border-[2px] border-[rgba(147,197,253,0.7)] shadow-[inset_0_0_80px_rgba(59,130,246,0.5),0_0_30px_rgba(147,197,253,0.6)] bg-[#070b1a] overflow-hidden" style={{ transform: 'translateZ(0px)' }}>
                  {/* Surface Core Light */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.4)_0%,transparent_70%)] rounded-full animate-pulse-slow"></div>
                  {/* Cyber Grid with Radial Mask to fade out smoothly at edges */}
                  <div 
                    className="absolute inset-0 bg-[linear-gradient(rgba(147,197,253,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(147,197,253,0.15)_1px,transparent_1px)] bg-[size:40px_40px]"
                    style={{ WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)' }}
                  ></div>
                </div>

                {/* Glowing Orbital Ring exactly where the spheres orbit */}
                <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-[2px] border-blue-400/50 shadow-[0_0_30px_rgba(96,165,250,0.6),inset_0_0_20px_rgba(96,165,250,0.4)] pointer-events-none" 
                  style={{ width: `${radiusX * 2}px`, height: `${radiusX * 2}px`, transform: 'translateZ(2px)' }}
                ></div>
                
              </div>
            </div>
          </div>

          {/* Orbiting Logos */}
          <div className="relative z-10 w-full h-[500px] flex items-center justify-center pointer-events-none">
            <div className="absolute" style={{ top: '70%', left: '50%' }}>
              {logos.map((logo, index) => {
                const total = logos.length;
                const baseAngle = (index / total) * Math.PI * 2;
                const currentAngle = baseAngle + angleOffset;
                
                const x = Math.cos(currentAngle) * radiusX;
                const y = Math.sin(currentAngle) * radiusY;
                
                const depthProgress = (y + radiusY) / (radiusY * 2); // 0 (back) to 1 (front)
                
                // Scale range from 0.75 (back) to 1.15 (front) for more uniform sizing
                const scale = 0.75 + depthProgress * 0.4;
                const zIndex = Math.round(depthProgress * 100);
                
                // Floating sine wave bobbing effect
                const bobbing = Math.sin(currentAngle * 4 + index) * 15;
                
                return (
                  <div 
                    key={logo.id} 
                    className="absolute flex flex-col items-center pointer-events-auto"
                    style={{
                      width: logo.baseSize,
                      height: logo.baseSize,
                      // Lift up by hoverHeight to sit above the podium surface
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y - hoverHeight}px)) scale(${scale})`,
                      zIndex: zIndex,
                    }}
                  >
                    {/* Sphere wrapper with bobbing */}
                    <div 
                      className={`w-full h-full premium-3d-sphere ${logo.glow ? 'center-glow-3d' : ''} group cursor-pointer`}
                      style={{ transform: `translateY(${bobbing}px)` }}
                    >
                      {/* Inner wrapper for hover pop effect */}
                      <div className="w-full h-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        {logo.element}
                      </div>
                    </div>
                    
                    {/* Projected Ground Shadow (Moves inversely to bobbing) */}
                    <div 
                      className="absolute w-[60%] h-[20%] bg-black rounded-[50%] pointer-events-none" 
                      style={{ 
                        bottom: `-${hoverHeight}px`, // Place firmly on the podium level
                        opacity: 0.3 + depthProgress * 0.4,
                        filter: `blur(${6 + depthProgress * 8}px)`,
                        transform: `scale(${1 - (bobbing / 30)})` // Shadow gets smaller as it bobs up
                      }}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Premium Dark Glassmorphism Sphere */
        .premium-3d-sphere {
          border-radius: 50%;
          background: radial-gradient(130% 130% at 30% 20%, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.8) 60%, rgba(2, 6, 23, 0.95) 100%);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 
            inset -15px -15px 30px rgba(0, 0, 0, 0.8),
            inset 10px 10px 30px rgba(255, 255, 255, 0.4),
            inset 0 0 20px rgba(147, 197, 253, 0.2),
            0 20px 40px rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          position: relative;
          z-index: 10;
        }
        
        /* Specular Highlight */
        .premium-3d-sphere::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 15%, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.1) 25%, transparent 50%);
          pointer-events: none;
          z-index: 20;
        }

        /* Inner glowing edge */
        .premium-3d-sphere::after {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 50%;
          background: linear-gradient(145deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.1) 30%, transparent 60%, rgba(255,255,255,0.4) 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        /* Aggressive red glow for OYO */
        .center-glow-3d {
          box-shadow: 
            inset -15px -15px 30px rgba(0, 0, 0, 0.9),
            inset 10px 10px 30px rgba(255, 255, 255, 0.4),
            inset 0 0 35px rgba(255, 0, 0, 0.4),
            0 0 60px rgba(255, 0, 0, 0.3),
            0 20px 40px rgba(0, 0, 0, 0.8);
          border: 1px solid rgba(255, 100, 100, 0.5);
        }
      `}</style>
    </div>
  );
};

const MissionPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-[#11141e] font-outfit pt-24 overflow-x-hidden">
      <main className="flex flex-col">
        <LogoCarousel />
        {/* MISSION & VISION SECTION - INDUSTRY LEVEL FINTECH UI */}
        <div className="section-wrapper about-belief-wrapper relative bg-[radial-gradient(circle_at_top_left,#eef4ff_0%,#f8fbff_40%,#ffffff_100%)]">
          {/* Ambient Lighting & Floating Finance Icons */}
          <div className="bg-animation-layer absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-blue-100/15 blur-[120px] rounded-full animate-pulse-slow"></div>
            <div className="absolute bottom-[10%] right-[10%] w-[450px] h-[450px] bg-indigo-50/15 blur-[100px] rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-[20%] right-[15%] opacity-[0.03] text-blue-900 animate-float-slow"><TrendingUp size={120} /></div>
            <div className="absolute bottom-[20%] left-[10%] opacity-[0.03] text-blue-900 animate-float-slow" style={{ animationDelay: '3s' }}><Shield size={100} /></div>
            <div className="absolute top-[60%] right-[30%] opacity-[0.03] text-blue-900 animate-float-slow" style={{ animationDelay: '1.5s' }}><Rocket size={80} /></div>
          </div>

          <section id="mission-vision" className="mission-vision-section beliefSection scroll-mt-[90px]">
            <div className="container mx-auto px-6 lg:px-12 max-w-[1140px] relative z-10">

              {/* Header Section */}
              <div className="text-center mb-10 lg:mb-12 flex flex-col items-center" data-aos="fade-up">
                {/* Ultra-Modern Fintech Label */}
                <div className="client-philosophy-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/50 backdrop-blur-xl border border-blue-200/50 shadow-sm text-blue-700 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.3em] mb-6 hover:bg-white hover:shadow-md transition-all duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse shadow-[0_0_8px_rgba(37,99,235,0.6)]"></span>
                  CLIENT-FIRST PHILOSOPHY
                </div>
                <h2 className="mission-vision-title">
                  Mission & Vision
                </h2>
                <div className="title-glow-line"></div>
              </div>

              {/* Split Cards Container */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mb-12">
                {/* Mission Card */}
                <div className="mission-vision-card mission-card-hover" data-aos="fade-right">
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Header Row */}
                    <div className="flex items-start justify-between mb-6 gap-4 flex-wrap sm:flex-nowrap">
                      <div className="icon-box-3d mission-icon-box -mt-10">
                        <Target className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600 stroke-[2]" />
                      </div>

                      {/* Quote Badge */}
                      <div className="quote-badge-pill mission-quote-pill">
                        <Target className="w-3.5 h-3.5 text-blue-500 mr-2 opacity-70" />
                        <span className="font-bold tracking-wider">We don't sell, we educate</span>
                      </div>
                    </div>

                    <h3 className="text-[28px] sm:text-[32px] font-black text-[#0f172a] mb-3 tracking-tight">Our Mission</h3>

                    <p className="text-slate-600 text-[16px] sm:text-[17px] leading-[1.7] font-medium flex-grow">
                      To empower individuals and families with practical financial knowledge, unbiased guidance, and technology-driven advisory so they can make confident and informed financial decisions throughout every stage of life.
                    </p>

                    {/* Education Indicator */}
                    <div className="mt-5 flex items-center gap-2 text-[14px] font-bold text-blue-600">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>Empowering through knowledge</span>
                    </div>
                  </div>
                </div>

                {/* Vision Card */}
                <div className="mission-vision-card vision-card-hover" data-aos="fade-left" data-aos-delay="100">
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Header Row */}
                    <div className="flex items-start justify-between mb-6 gap-4 flex-wrap sm:flex-nowrap">
                      <div className="icon-box-3d vision-icon-box -mt-10">
                        <Eye className="w-7 h-7 sm:w-8 sm:h-8 text-red-500 stroke-[2]" />
                      </div>

                      {/* Quote Badge */}
                      <div className="quote-badge-pill vision-quote-pill">
                        <Eye className="w-3.5 h-3.5 text-red-400 mr-2 opacity-70" />
                        <span className="font-bold tracking-wider">We don't push, we guide</span>
                      </div>
                    </div>

                    <h3 className="text-[28px] sm:text-[32px] font-black text-[#0f172a] mb-3 tracking-tight">Our Vision</h3>

                    <p className="text-slate-600 text-[16px] sm:text-[17px] leading-[1.7] font-medium flex-grow">
                      To become India's most trusted financial guidance platform by making financial education, awareness, and expert consultation simple, accessible, and meaningful for everyone.
                    </p>

                    {/* Trust Indicator */}
                    <div className="mt-5 flex items-center gap-2 text-[14px] font-bold text-red-500">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>Committed to your long-term success</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust & Compliance Section - Industry Level */}
              <div className="flex flex-col items-center justify-center pt-8 mb-[60px] relative" data-aos="fade-up" data-aos-delay="200">
                <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">Industry Recognised & Compliant</p>

                {/* Compliance Chips */}
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                  {[
                    { text: 'SEBI Compliant', icon: Shield, color: 'text-emerald-500', bg: 'bg-emerald-50' },
                    { text: 'AMFI Registered', icon: BadgeCheck, color: 'text-blue-500', bg: 'bg-blue-50' },
                    { text: 'Client-First Advisory', icon: Users, color: 'text-indigo-500', bg: 'bg-indigo-50' }
                  ].map((chip, idx) => (
                    <div key={idx} className="compliance-chip">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${chip.bg}`}>
                        <chip.icon className={`w-3 h-3 ${chip.color}`} strokeWidth={2.5} />
                      </div>
                      <span className="text-[12px] font-bold text-slate-700">{chip.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Premium Section Divider */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-slate-300/70 to-transparent"></div>
          </section>
        </div>

        {/* CORE VALUES - DIAGRAM SECTION */}
        <section id="core-values" className="py-12 lg:py-16 bg-[#f8fafc] relative overflow-hidden z-10 pt-0 mt-10">
          {/* Subtle Fintech Dot-Grid & Blur Background */}
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.3 }}></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/80 via-transparent to-white/80 pointer-events-none"></div>

          {/* Tiny Floating Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[30%] left-[5%] w-[300px] h-[300px] bg-blue-100/40 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] bg-indigo-100/40 blur-[120px] rounded-full"></div>
            <div className="absolute top-[25%] left-[20%] opacity-[0.05] text-blue-900"><Target size={40} /></div>
            <div className="absolute bottom-[35%] right-[25%] opacity-[0.05] text-indigo-900"><Scale size={50} /></div>
          </div>

          <div className="container mx-auto px-6 lg:px-12 max-w-[1100px] relative z-10">

            <div className="text-center mb-8 lg:mb-10" data-aos="fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50/80 backdrop-blur-md text-cyan-700 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.3em] mb-4 border border-cyan-200/60 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.6)]"></span>
                OUR BELIEFS
              </div>
              <h2 className="text-[36px] sm:text-[44px] lg:text-[52px] font-extrabold leading-[1.05] tracking-[-1px] text-[#0f172a] drop-shadow-sm">
                Our Core <span className="bg-gradient-to-r from-[#0f172a] to-blue-600 bg-clip-text text-transparent">Values</span>
              </h2>
              <p className="text-slate-500 font-medium text-[15px] sm:text-[17px] mt-3 mb-4 max-w-3xl mx-auto leading-relaxed">
                We believe financial success begins with knowledge. BlueAnt Finserv is committed to helping people understand their financial choices through education, awareness, and personalized guidance—not by selling financial products, but by empowering better decisions.
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full shadow-[0_0_10px_rgba(6,182,212,0.4)]"></div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-0 values-section-wrapper">

              {/* Center Circle - Premium Glassmorphism */}
              <div className="relative z-10 flex items-center justify-center shrink-0 mb-4 lg:mb-0" data-aos="zoom-in">
                {/* Outer animated holographic dashboard ring */}
                <div className="values-hub-outer"></div>
                {/* Outer glowing ring */}
                <div className="values-hub-outer-glow"></div>

                <div className="values-hub-core group">
                  {/* Inner subtle noise/blob */}
                  <div className="absolute top-[-20%] right-[-20%] w-32 h-32 bg-rose-200/40 rounded-full blur-2xl group-hover:scale-110 transition-transform"></div>
                  <div className="absolute bottom-[-20%] left-[-20%] w-32 h-32 bg-cyan-200/40 rounded-full blur-2xl group-hover:scale-110 transition-transform"></div>

                  <Star className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-500 mb-2 drop-shadow-sm group-hover:rotate-12 transition-transform duration-500" strokeWidth={2.5} />
                  <h3 className="text-2xl sm:text-3xl font-black text-[#0f172a] text-center leading-[1.1] tracking-tight">
                    CORE<br />VALUES
                  </h3>
                </div>
              </div>

              {/* SVG Connecting Lines (Desktop only) with smooth curves and animations */}
              <div className="hidden lg:block w-32 h-[560px] relative z-0 shrink-0 -ml-4 mr-4" data-aos="fade-in" data-aos-delay="200">
                <svg width="100%" height="100%" viewBox="0 0 100 560" preserveAspectRatio="none" style={{ filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.8))' }}>
                  <path d="M 0 280 C 40 280, 20 40, 100 40" fill="none" stroke="#f43f5e" strokeWidth="1.5" className="animate-dash-flow opacity-80 val-path-0" />
                  <path d="M 0 280 C 40 280, 30 136, 100 136" fill="none" stroke="#3b82f6" strokeWidth="1.5" className="animate-dash-flow opacity-80 val-path-1" style={{ animationDelay: '0.2s' }} />
                  <path d="M 0 280 C 40 280, 30 232, 100 232" fill="none" stroke="#eab308" strokeWidth="1.5" className="animate-dash-flow opacity-80 val-path-2" style={{ animationDelay: '0.4s' }} />
                  <path d="M 0 280 C 40 280, 30 328, 100 328" fill="none" stroke="#8b5cf6" strokeWidth="1.5" className="animate-dash-flow opacity-80 val-path-3" style={{ animationDelay: '0.6s' }} />
                  <path d="M 0 280 C 40 280, 30 424, 100 424" fill="none" stroke="#f97316" strokeWidth="1.5" className="animate-dash-flow opacity-80 val-path-4" style={{ animationDelay: '0.8s' }} />
                  <path d="M 0 280 C 40 280, 20 520, 100 520" fill="none" stroke="#10b981" strokeWidth="1.5" className="animate-dash-flow opacity-80 val-path-5" style={{ animationDelay: '1s' }} />
                </svg>
              </div>

              {/* Values List - Premium Cards */}
              <div className="flex flex-col gap-4 w-full lg:w-auto relative z-10 flex-grow max-w-[600px]">
                {[
                  { icon: Users, themeClass: 'card-client-first', colorClass: 'bg-gradient-to-br from-rose-50 to-rose-100', borderClass: 'border-rose-200/50', textClass: 'text-rose-500', title: 'Trust', desc: 'Building lasting relationships with confidence.' },
                  { icon: Scale, themeClass: 'card-conflict-free', colorClass: 'bg-gradient-to-br from-blue-50 to-blue-100', borderClass: 'border-blue-200/50', textClass: 'text-blue-600', title: 'Transparency', desc: 'Providing clear, unbiased advice.' },
                  { icon: GraduationCap, themeClass: 'card-education', colorClass: 'bg-gradient-to-br from-indigo-50 to-indigo-100', borderClass: 'border-indigo-200/50', textClass: 'text-indigo-500', title: 'Education', desc: 'Empowering clients to make informed decisions.' },
                  { icon: Lock, themeClass: 'card-confidentiality', colorClass: 'bg-gradient-to-br from-amber-50 to-amber-100', borderClass: 'border-amber-200/50', textClass: 'text-amber-500', title: 'Integrity', desc: 'Acting with honesty and strong moral principles.' },
                  { icon: TrendingUp, themeClass: 'card-freedom', colorClass: 'bg-gradient-to-br from-emerald-50 to-emerald-100', borderClass: 'border-emerald-200/50', textClass: 'text-emerald-500', title: 'Innovation', desc: 'Delivering modern financial solutions.' },
                  { icon: Clock, themeClass: 'card-service', colorClass: 'bg-gradient-to-br from-orange-50 to-orange-100', borderClass: 'border-orange-200/50', textClass: 'text-orange-500', title: 'Customer First', desc: 'Customers interests above everything else.' },
                ].map((item, idx) => (
                  <div key={idx} className={`values-item-card ${item.themeClass}`} data-aos="fade-up" data-aos-delay={idx * 50}>
                    {/* Icon Container with subtle glow */}
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shrink-0 ${item.colorClass} border border-white shadow-[inset_0_2px_5px_rgba(255,255,255,0.7)] group-hover:scale-105 transition-transform duration-300 relative overflow-hidden z-10`}>
                      <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <item.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${item.textClass} drop-shadow-sm relative z-10`} strokeWidth={2.5} />
                    </div>
                    {/* Text Container */}
                    <div className="flex flex-col justify-center relative z-10">
                      <span className="text-[15px] sm:text-[17px] font-bold text-slate-800 leading-tight mb-1 group-hover:text-[#0f172a] transition-colors">{item.title}</span>
                      <span className="text-[13px] sm:text-[14px] font-[500] text-slate-500 leading-tight">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      </main>
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.1); opacity: 0.35; }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-pulse-slow { animation: pulse-slow 10s infinite ease-in-out; }
        .animate-float-slow { animation: float-slow 8s infinite ease-in-out; }
        .animate-dash-flow { stroke-dasharray: 6 6; animation: dash-flow 20s linear infinite; }
        @keyframes dash-flow { to { stroke-dashoffset: -1000; } }
      `}</style>
    </div>
  );
};

export default MissionPage;

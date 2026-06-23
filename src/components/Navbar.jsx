import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { openConsultationModal } from "./ConsultationModal";
import "../styles/Navbar.css";

const dropdowns = {
  "About Us":[],
  Services: [
    { label: "Wealth Creation", desc: "Strategic investment solutions for long-term prosperity", path: "/services/wealth-creation", icon: "📈" },
    { label: "Wealth Protection", desc: "Secure your life, family, and financial goals", path: "/services/wealth-protection", icon: "🛡️" },
    { label: "Wealth Preservation", desc: "Maintain long-term financial stability and security", path: "/services/wealth-preservation", icon: "💰" },
    { label: "Stock Market Services", desc: "Research-driven market insights and investment support", path: "/services/stock-market-services", icon: "📊" },
  ],
  Resources: [
    { label: "Gallery", desc: "Our journey in pictures", path: "/gallery", icon: "🖼️" },
    { label: "Financial Calculators", desc: "SIP, EMI & more tools", path: "/calculators", icon: "🧮" },
    { label: "Blogs", desc: "Expert financial insights", path: "/blogs", icon: "📰" },
    { label: "FAQs", desc: "Common questions answered", path: "/faq", icon: "❓" },
  ],
  Careers: [
    { label: "Open Positions", desc: "Join our growing team", path: "/careers#positions", icon: "💼" },
    { label: "Life at BlueAnt", desc: "Culture & work environment", path: "/careers#life", icon: "🌱" },
  ],
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [loginHover, setLoginHover] = useState(false);
  const [loginSubMenu, setLoginSubMenu] = useState(null);
  const [mobileLoginExpanded, setMobileLoginExpanded] = useState(false);
  const [mobileLoginSubMenu, setMobileLoginSubMenu] = useState(null);
  const closeTimer = useRef(null);
  const loginCloseTimer = useRef(null);
  const scrolledRef = useRef(false);
  const loginRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const nextScrolled = window.scrollY > 20;
      if (nextScrolled !== scrolledRef.current) {
        scrolledRef.current = nextScrolled;
        setIsScrolled(nextScrolled);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    const handleClickOutside = (event) => {
      if (loginRef.current && !loginRef.current.contains(event.target)) {
        setLoginHover(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (name) => {
    clearTimeout(closeTimer.current);
    if (dropdowns[name]) setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/coming-soon" },
    { name: "Services", path: "/coming-soon" },
    { name: "Resources", path: "/coming-soon" },
    { name: "Careers", path: "/coming-soon" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 nav-bar-wrapper ${isScrolled ? "nav-bar-scrolled py-2" : "bg-white py-4"}`}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 flex items-center justify-between">

        {/* Logo */}
        <div className="nav-logo logo-wrapper flex items-center flex-shrink-0">
          <Link to="/" className="block">
            <img src={`${import.meta.env.BASE_URL}blueAnt.png`} alt="Blueant Logo" style={{ height: "36px", width: "auto", display: "block", objectFit: "contain" }} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => handleMouseEnter(link.name)}
              onMouseLeave={handleMouseLeave}
            >
              {link.hasDropdown ? (
                <button
                  type="button"
                  className="nav-link-desktop nav-link-button"
                >
                  <span>{link.name}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${activeDropdown === link.name ? "rotate-180 text-[#00afef]" : ""}`}
                  />
                </button>
              ) : (
                <Link
                  to={link.path}
                  className="nav-link-desktop"
                >
                  <span>{link.name}</span>
                </Link>
              )}

              {/* Dropdown Panel */}
              {link.hasDropdown && activeDropdown === link.name && (
                <div
                  className="nav-dropdown-card"
                  onMouseEnter={() => clearTimeout(closeTimer.current)}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Triangle pointer */}
                  <div className="nav-dropdown-pointer" />

                  <div className="relative z-10 flex flex-col gap-1">
                    {dropdowns[link.name]?.map((item) => (
                      <Link
                        key={item.label}
                        to={item.path}
                        state={item.state}
                        onClick={() => setActiveDropdown(null)}
                        className="nav-dropdown-item"
                      >
                        <span className="nav-dropdown-icon-wrapper">{item.icon}</span>
                        <div>
                          <div className="nav-dropdown-item-label">
                            {item.label}
                          </div>
                          <div className="nav-dropdown-item-desc">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button + Mobile Toggle */}
        <div className="flex items-center gap-4">
          {/* Desktop Login Dropdown */}
          <div 
            className="relative hidden lg:block" 
            ref={loginRef}
            onMouseEnter={() => { clearTimeout(loginCloseTimer.current); setLoginHover(true); }}
            onMouseLeave={() => { loginCloseTimer.current = setTimeout(() => setLoginHover(false), 150); }}
          >
            <button
              type="button"
              onClick={() => setLoginHover(!loginHover)}
              className="nav-cta-btn-3d flex items-center gap-2"
            >
              LOGIN 
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${loginHover ? "rotate-180" : ""}`} />
            </button>
            
            {loginHover && (
              <div 
                className="nav-dropdown-card" 
                style={{ right: 0, left: "auto", transform: "none", minWidth: "260px" }}
                onMouseEnter={() => clearTimeout(loginCloseTimer.current)}
                onMouseLeave={() => { loginCloseTimer.current = setTimeout(() => setLoginHover(false), 150); }}
              >
                <div className="nav-dropdown-pointer" style={{ left: "auto", right: "40px", transform: "rotate(45deg)" }} />
                
                <div className="relative z-10 flex flex-col gap-1">
                  
                  {/* Customer Login (Client Portal Direct Link) */}
                  <a 
                    href="https://blueantindia.investwell.app/app/#/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-dropdown-item cursor-pointer items-center transition-colors group"
                    onClick={() => setLoginHover(false)}
                  >
                    <div className="nav-dropdown-item-label m-0 group-hover:text-[#00afef] transition-colors">Portfolio Login</div>
                  </a>

                  {/* Employee Login */}
                  <div 
                    className="relative group"
                    onMouseEnter={() => setLoginSubMenu('employee')}
                    onMouseLeave={() => setLoginSubMenu(null)}
                  >
                    <div className="nav-dropdown-item cursor-pointer justify-between items-center">
                       <div className="nav-dropdown-item-label m-0">Employee Login</div>
                       <ChevronDown className="w-4 h-4 -rotate-90 text-slate-400 group-hover:text-[#00afef] transition-colors" />
                    </div>
                    {/* Submenu */}
                    {loginSubMenu === 'employee' && (
                      <div className="absolute top-0 right-full mr-2 w-48 bg-white/95 backdrop-blur-md rounded-[18px] border border-white/95 shadow-[0_25px_60px_rgba(15,23,42,0.08)] p-2 animate-[navFadeSlide_0.25s_ease-out]">
                         <a href="https://blueantfinserv.github.io/SALES_SM/" target="_blank" rel="noopener noreferrer" className="nav-dropdown-item py-2 px-3" onClick={() => setLoginHover(false)}>
                           <div className="nav-dropdown-item-label m-0">SM Login</div>
                         </a>
                         <a href="https://blueantfinserv.github.io/CRM-RM/" target="_blank" rel="noopener noreferrer" className="nav-dropdown-item py-2 px-3" onClick={() => setLoginHover(false)}>
                           <div className="nav-dropdown-item-label m-0">RM Login</div>
                         </a>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 relative z-[999]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`block w-6 h-[2px] transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} style={{ backgroundColor: '#0f172a' }} />
            <span className={`block w-6 h-[2px] transition-all ${isMenuOpen ? "opacity-0" : ""}`} style={{ backgroundColor: '#0f172a' }} />
            <span className={`block w-6 h-[2px] transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} style={{ backgroundColor: '#0f172a' }} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-100 shadow-xl px-6 py-4 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.name} className="border-b border-slate-50 last:border-0">
              <button
                className="w-full flex items-center justify-between py-4 text-left"
                onClick={() => {
                  if (link.hasDropdown) {
                    setMobileExpanded(mobileExpanded === link.name ? null : link.name);
                  } else {
                    navigate(link.path);
                    setIsMenuOpen(false);
                  }
                }}
              >
                <span className="font-black text-[15px] text-[#0F172A]">{link.name}</span>
                {link.hasDropdown && (
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileExpanded === link.name ? "rotate-180" : ""}`} />
                )}
              </button>

              {link.hasDropdown && mobileExpanded === link.name && (
                <div className="pb-3 pl-2 flex flex-col gap-1">
                  {dropdowns[link.name]?.map((item) => (
                    <Link
                      key={item.label}
                      to={item.path}
                      state={item.state}
                      onClick={() => { setIsMenuOpen(false); setMobileExpanded(null); }}
                      className="nav-dropdown-item"
                    >
                      <span className="nav-dropdown-icon-wrapper">{item.icon}</span>
                      <div>
                        <div className="nav-dropdown-item-label">{item.label}</div>
                        <div className="nav-dropdown-item-desc">{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile LOGIN Dropdown */}
          <div className="mt-4 border-t border-slate-100 pt-4 pb-4">
            <button
              onClick={() => setMobileLoginExpanded(!mobileLoginExpanded)}
              className="w-full flex items-center justify-between text-white py-3 px-5 rounded-[16px] shadow-lg shadow-slate-900/10 transition-all duration-300 active:scale-[0.98] bg-gradient-to-r from-[#0f172a] to-[#1e293b] hover:from-[#00afef] hover:to-[#2563eb]"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
                </div>
                <span className="font-black text-[12.5px] tracking-[0.08em] uppercase">LOGIN PORTAL</span>
              </div>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileLoginExpanded ? "rotate-180 text-[#00afef]" : "text-white/70"}`} />
            </button>
            
            {mobileLoginExpanded && (
              <div className="mt-4 flex flex-col gap-3 animate-[navFadeSlide_0.25s_ease-out]">
                
                {/* Mobile Customer Login (Client Portal Direct Link) */}
                <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-300">
                  <a 
                    href="https://blueantindia.investwell.app/app/#/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between p-4 bg-slate-50/50 hover:bg-slate-50 transition-colors group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#0f172a]/5 flex items-center justify-center border border-[#0f172a]/10 group-hover:bg-[#00afef]/10 transition-colors">
                        <span className="text-base">👥</span>
                      </div>
                      <span className="font-bold text-[14.5px] text-[#0F172A] group-hover:text-[#00afef] transition-colors">Portfolio Login</span>
                    </div>
                  </a>
                </div>

                {/* Mobile Employee Login */}
                <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-300">
                  <button 
                    className="w-full flex items-center justify-between p-4 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                    onClick={() => setMobileLoginSubMenu(mobileLoginSubMenu === 'employee' ? null : 'employee')}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#0f172a]/5 flex items-center justify-center border border-[#0f172a]/10">
                        <span className="text-base">💼</span>
                      </div>
                      <span className="font-bold text-[14.5px] text-[#0F172A]">Employee Login</span>
                    </div>
                    <ChevronDown className={`w-4.5 h-4.5 transition-transform duration-300 ${mobileLoginSubMenu === 'employee' ? "rotate-180 text-[#00afef]" : "text-slate-400"}`} />
                  </button>
                  {mobileLoginSubMenu === 'employee' && (
                    <div className="flex flex-col px-4 pb-4 pt-1 border-t border-slate-50 bg-white">
                      <a href="https://blueantfinserv.github.io/SALES_SM/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 py-3 text-[14px] text-slate-600 hover:text-[#00afef] hover:translate-x-1 transition-all font-medium" onClick={() => setIsMenuOpen(false)}>
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#00afef]"></div>
                        SM Login
                      </a>
                      <div className="h-[1px] w-full bg-slate-50"></div>
                      <a href="https://blueantfinserv.github.io/CRM-RM/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 py-3 text-[14px] text-slate-600 hover:text-[#00afef] hover:translate-x-1 transition-all font-medium" onClick={() => setIsMenuOpen(false)}>
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#00afef]"></div>
                        RM Login
                      </a>
                    </div>
                  )}
                </div>

              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

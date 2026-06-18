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
  const closeTimer = useRef(null);
  const scrolledRef = useRef(false);
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
    return () => window.removeEventListener("scroll", handleScroll);
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
          <Link
            to="#"
            onClick={(e) => { e.preventDefault(); openConsultationModal(); }}
            className="hidden lg:block nav-cta-btn-3d"
          >
            Get Personalized Guidance
          </Link>

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

          <Link
            to="#"
            onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); openConsultationModal(); }}
            className="mt-4 block text-center bg-[#0f172a] text-white py-3 px-6 rounded-full font-black text-[12px] tracking-widest uppercase hover:bg-[#00afef] transition-all"
          >
            Get Personalized Guidance
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

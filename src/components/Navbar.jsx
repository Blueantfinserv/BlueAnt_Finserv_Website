import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { openConsultationModal } from "./ConsultationModal";

const dropdowns = {
  "About Us": [
    { label: "Company Overview", desc: "Who we are & our story", path: "/about/company", icon: "🏢" },
    { label: "Mission & Vision", desc: "Our purpose and goals", path: "/about/mission", icon: "🎯" },
    { label: "Our Team", desc: "Meet the experts", path: "/about/team", icon: "👥" },
    { label: "Impact Stories", desc: "Client success journeys", path: "/about/stories", icon: "🌟" },
  ],
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
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
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
    { name: "About Us", path: "/about", hasDropdown: true },
    { name: "Services", path: "/services", hasDropdown: true },
    { name: "Resources", path: "/resources", hasDropdown: true },
    { name: "Careers", path: "/careers", hasDropdown: true },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 py-3 ${isScrolled ? "bg-white shadow-xl" : "bg-white"}`}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 flex items-center justify-between">

        {/* Logo */}
        <div className="flex flex-col items-center flex-shrink-0">
          <Link to="/" className="block">
            <img src={`${import.meta.env.BASE_URL}blueAnt.png`} alt="Blueant Logo" style={{ height: "26px", width: "auto", display: "block", objectFit: "contain" }} />
          </Link>
          <div style={{
            backgroundColor: "#FFD700", color: "#000000", fontSize: "8.5px", fontWeight: "900",
            padding: "3px 12px", borderRadius: "6px", marginTop: "1px", marginBottom: "-8px",
            border: "1px solid #EAB308", whiteSpace: "nowrap", letterSpacing: "0.02em", textAlign: "center"
          }}>
            AMFI REGISTERED MUTUAL FUND DISTRIBUTOR – ARN: 129543
          </div>
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
              <Link
                to={link.path}
                className="flex items-center gap-1 group"
                style={{ textDecoration: "none" }}
              >
                <span
                  className="group-hover:text-[#00afef] transition-colors"
                  style={{ color: "#000000", fontWeight: "900", fontSize: "14.5px" }}
                >
                  {link.name}
                </span>
                {link.hasDropdown && (
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${activeDropdown === link.name ? "rotate-180 text-[#00afef]" : ""}`}
                  />
                )}
              </Link>

              {/* Dropdown Panel */}
              {link.hasDropdown && activeDropdown === link.name && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 min-w-[280px] z-[200]"
                  onMouseEnter={() => clearTimeout(closeTimer.current)}
                  onMouseLeave={handleMouseLeave}
                  style={{ animation: "fadeSlideDown 0.18s ease" }}
                >
                  {/* Triangle pointer */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-slate-100 rotate-45" />

                  <div className="relative z-10 flex flex-col gap-1">
                    {dropdowns[link.name]?.map((item) => (
                      <Link
                        key={item.label}
                        to={item.path}
                        state={item.state}
                        onClick={() => setActiveDropdown(null)}
                        className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 transition-all group/item"
                      >
                        <span className="text-xl mt-0.5 shrink-0">{item.icon}</span>
                        <div>
                          <div className="text-[#0F172A] font-bold text-[13.5px] group-hover/item:text-[#00afef] transition-colors leading-tight">
                            {item.label}
                          </div>
                          <div className="text-slate-400 text-[11.5px] font-medium mt-0.5 leading-tight">
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
            style={{
              backgroundColor: "#0f172a", padding: "12px 30px", borderRadius: "9999px",
              color: "white", display: "block", textDecoration: "none",
              fontSize: "10.5px", fontWeight: "900", letterSpacing: "0.12em", textTransform: "uppercase"
            }}
            className="hidden lg:block hover:bg-[#00afef] transition-all shadow-lg active:scale-95 whitespace-nowrap"
          >
            Get Free Consultation
          </Link>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`block w-6 h-0.5 bg-slate-800 transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-slate-800 transition-all ${isMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-slate-800 transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-xl px-6 py-4 max-h-[80vh] overflow-y-auto">
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
                      className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 transition-all"
                    >
                      <span className="text-lg">{item.icon}</span>
                      <div>
                        <div className="text-[#0F172A] font-bold text-[13px]">{item.label}</div>
                        <div className="text-slate-400 text-[11px] font-medium">{item.desc}</div>
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
            Get Free Consultation
          </Link>
        </div>
      )}

      {/* Dropdown fade animation */}
      <style>{`
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateX(-50%) translateY(-6px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;

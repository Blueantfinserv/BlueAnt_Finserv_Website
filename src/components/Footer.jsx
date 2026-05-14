import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhoneAlt, FaEnvelope, FaGlobe, FaComments, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Resources", path: "/resources" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  const servicesLinks = [
    { name: "SIP Investment", path: "/services", state: { selectedIndex: 5 } },
    { name: "Insurance Advisory", path: "/services", state: { selectedIndex: 7 } },
    { name: "Stock Trading", path: "/services", state: { selectedIndex: 6 } },
    { name: "Tax Planning", path: "/services", state: { selectedIndex: 0 } },
    { name: "Mutual Funds", path: "/services", state: { selectedIndex: 5 } },
    { name: "Retirement Planning", path: "/services", state: { selectedIndex: 4 } },
  ];

  const socialLinks = [
    { 
      Icon: FaFacebookF, 
      url: "https://www.facebook.com/blueantindia/", 
      label: "Facebook", 
      baseStyle: "bg-gradient-to-br from-[#1877F2] to-[#0A5BD1] border-[#ffffff20] text-white shadow-[0_8px_16px_-4px_rgba(24,119,242,0.4)]", 
      hoverStyle: "hover:shadow-[0_12px_24px_-6px_rgba(24,119,242,0.6)] hover:scale-110" 
    },
    { 
      Icon: FaInstagram, 
      url: "https://www.instagram.com/blueantindia/", 
      label: "Instagram", 
      baseStyle: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] border-[#ffffff20] text-white shadow-[0_8px_16px_-4px_rgba(220,39,67,0.4)]", 
      hoverStyle: "hover:shadow-[0_12px_24px_-6px_rgba(220,39,67,0.6)] hover:scale-110" 
    },
    { 
      Icon: FaLinkedinIn, 
      url: "https://www.linkedin.com/in/rohit-raman-0aa69490/", 
      label: "LinkedIn", 
      baseStyle: "bg-gradient-to-br from-[#0A66C2] to-[#004182] border-[#ffffff20] text-white shadow-[0_8px_16px_-4px_rgba(10,102,194,0.4)]", 
      hoverStyle: "hover:shadow-[0_12px_24px_-6px_rgba(10,102,194,0.6)] hover:scale-110" 
    },
    { 
      Icon: FaTwitter, 
      url: "https://x.com/blueantfinserv", 
      label: "Twitter", 
      baseStyle: "bg-gradient-to-br from-[#222] to-[#000] border-[#ffffff20] text-white shadow-[0_8px_16px_-4px_rgba(255,255,255,0.1)]", 
      hoverStyle: "hover:shadow-[0_12px_24px_-6px_rgba(255,255,255,0.2)] hover:scale-110" 
    },
    { 
      Icon: FaYoutube, 
      url: "https://www.youtube.com/@RohitBlueant", 
      label: "YouTube", 
      baseStyle: "bg-gradient-to-br from-[#FF0000] to-[#B30000] border-[#ffffff20] text-white shadow-[0_8px_16px_-4px_rgba(255,0,0,0.4)]", 
      hoverStyle: "hover:shadow-[0_12px_24px_-6px_rgba(255,0,0,0.6)] hover:scale-110" 
    },
  ];

  return (
    <footer className="bg-[#050B17] text-white pt-10 pb-6 border-t border-white/5 font-outfit relative overflow-hidden">
      {/* Premium Background Decorations */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <style>{`
        @keyframes social-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .social-animate {
          animation: social-float 3s ease-in-out infinite;
        }
        .logo-glow:hover {
          filter: drop-shadow(0 0 15px rgba(0, 175, 239, 0.3));
        }
      `}</style>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr] gap-8 lg:gap-10 pb-10 items-start border-b border-white/5">
          
          {/* Column 1: Branding */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-[320px]">
            <Link to="/" className="inline-block transition-all duration-500 mb-1 logo-glow">
              <img src="/blueAnt.png" alt="Blueant Logo" className="h-5 md:h-6 w-auto object-contain" />
            </Link>
            <div className="bg-[#fbbf24] px-3 py-1 rounded-sm mb-3 inline-block">
              <span className="text-[#0f172a] text-[8px] font-black uppercase tracking-[1.5px] whitespace-nowrap">AMFI Registered Mutual Fund Distributor</span>
            </div>
            
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-6 h-px bg-gradient-to-r from-[#fbbf24] to-transparent"></div>
                <span className="text-[#fbbf24] text-[10px] font-black uppercase tracking-[3px]">Our Philosophy</span>
              </div>
              <p className="text-white/90 text-[16px] font-semibold italic leading-[1.4]">
                "We don't sell, we educate."
              </p>
            </div>
            
            <p className="text-white/60 text-[14px] leading-[1.6] font-medium tracking-wide">
              Blueant Finserv is a trusted financial advisory company delivering 
              comprehensive wealth management, insurance, and investment solutions 
              across India, managing your complete financial lifecycle.
            </p>
            
            <div className="flex gap-4 mt-6">
              {socialLinks.map(({ Icon, url, label, baseStyle, hoverStyle }, idx) => (
                <a 
                  key={idx} 
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 social-animate shadow-lg backdrop-blur-md ${baseStyle} ${hoverStyle}`}
                  style={{ animationDelay: `${idx * 0.4}s` }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white text-[12px] font-black uppercase tracking-[3px] mb-6 relative inline-block whitespace-nowrap">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-10 h-[2px] bg-gradient-to-r from-[#00afef] to-transparent hidden md:block"></span>
            </h3>
            <ul className="flex flex-col gap-3 items-center md:items-start">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/70 text-[14.5px] font-semibold hover:text-[#00afef] transition-all duration-300 flex items-center gap-3 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00afef] opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white text-[12px] font-black uppercase tracking-[3px] mb-6 relative inline-block whitespace-nowrap">
              Our Services
              <span className="absolute -bottom-2 left-0 w-10 h-[2px] bg-gradient-to-r from-[#00afef] to-transparent hidden md:block"></span>
            </h3>
            <ul className="flex flex-col gap-3 items-center md:items-start">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} state={link.state} className="text-white/70 text-[14.5px] font-semibold hover:text-[#00afef] transition-all duration-300 flex items-center gap-3 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00afef] opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white text-[12px] font-black uppercase tracking-[3px] mb-6 relative inline-block whitespace-nowrap">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-10 h-[2px] bg-gradient-to-r from-[#00afef] to-transparent hidden md:block"></span>
            </h3>
            <div className="flex flex-col gap-4 items-center md:items-start">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00afef] shrink-0 group-hover:bg-[#00afef] group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-xl">
                  <FaEnvelope size={16} />
                </div>
                <a href="mailto:info@blueantfinserv.com" className="text-white/80 text-[14px] font-semibold hover:text-[#00afef] transition-colors">
                  info@blueantfinserv.com
                </a>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00afef] shrink-0 group-hover:bg-[#00afef] group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-xl">
                  <FaPhoneAlt size={16} />
                </div>
                <a href="tel:+919990218899" className="text-white/80 text-[14px] font-semibold hover:text-[#00afef] transition-colors">
                  +91-9990218899
                </a>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00afef] shrink-0 group-hover:bg-[#00afef] group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-xl">
                  <FaGlobe size={16} />
                </div>
                <a href="https://www.blueantfinserv.com" target="_blank" rel="noreferrer" className="text-white/80 text-[14px] font-semibold hover:text-[#00afef] transition-colors">
                  www.blueantfinserv.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar Section */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-6 w-full">
          <p className="text-white/30 text-[13px] md:text-[14px] font-medium text-center md:text-left">
            © {currentYear} Blueant Finserv Pvt. Ltd. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <span className="text-[#64748B] text-[12px] font-black uppercase tracking-[3px] opacity-50">
              Financial Growth Partner
            </span>
            <div className="w-8 h-px bg-white/10 hidden md:block"></div>
          </div>
        </div>

      </div>
    </footer>

  );
};

export default Footer;

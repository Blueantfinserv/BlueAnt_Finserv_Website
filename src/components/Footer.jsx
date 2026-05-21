import React from "react";
import { Link } from "react-router-dom";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaYoutube 
} from "react-icons/fa";
import { 
  Link as LinkIcon, 
  Briefcase, 
  Phone, 
  Mail, 
  Globe, 
  TrendingUp, 
  ShieldCheck, 
  LineChart, 
  FileText, 
  PieChart, 
  Clock, 
  ShieldAlert,
  ArrowRight
} from "lucide-react";
import { openConsultationModal } from "./ConsultationModal";

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

  const socialLinks = [
    { Icon: FaFacebookF, url: "https://www.facebook.com/blueantindia/", label: "Facebook" },
    { Icon: FaInstagram, url: "https://www.instagram.com/blueantindia/", label: "Instagram" },
    { Icon: FaLinkedinIn, url: "https://www.linkedin.com/in/rohit-raman-0aa69490/", label: "LinkedIn" },
    { Icon: FaTwitter, url: "https://x.com/blueantfinserv", label: "Twitter" },
    { Icon: FaYoutube, url: "https://www.youtube.com/@RohitBlueant", label: "YouTube" },
  ];

  return (
    <footer className="footer font-outfit">
      
      {/* Background Top Right Glow Effect */}
      <div className="footer-glow-top-right"></div>

      <style>{`
        /* 1. PREMIUM BACKGROUND WITH COMPACT PADDING */
        .footer {
          background:
            radial-gradient(circle at top left, rgba(37,99,235,0.10), transparent 30%),
            radial-gradient(circle at bottom right, rgba(124,58,237,0.08), transparent 30%),
            #020617;
          position: relative;
          overflow: hidden;
          
          /* ✅ 1. REDUCE FOOTER HEIGHT FURTHER */
          padding-top: 32px;
          padding-bottom: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
        }

        /* 13. ADD SMALL GLOW EFFECT */
        .footer-glow-top-right {
          content: '';
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(rgba(59, 130, 246, 0.12), transparent 70%);
          top: -200px;
          right: -100px;
          pointer-events: none;
          z-index: 1;
        }

        /* ✅ 2. REDUCE COLUMN GAP & ALIGN-ITEMS START */
        .footer-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr 1.2fr 1fr;
          gap: 22px;
          max-width: 1240px;
          margin: 0 auto;
          
          /* ✅ 12. REDUCE CONTAINER PADDING */
          padding-left: 24px;
          padding-right: 24px;
          position: relative;
          z-index: 10;
          align-items: flex-start;
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1.1fr 0.9fr 1fr;
            gap: 18px;
          }
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }

        /* 10. ADD SUBTLE DIVIDERS */
        .footer-column {
          border-right: 1px solid rgba(255, 255, 255, 0.06);
          padding-right: 10px;
        }
        @media (max-width: 1024px) {
          .footer-column {
            border-right: none;
            padding-right: 0;
          }
        }

        /* ✅ 4. REDUCE LOGO SECTION SPACING */
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        /* ✅ 10. REDUCE HEADING SIZE SLIGHTLY & ✅ 6. ADD PREMIUM UNDERLINE */
        .footer-heading {
          font-size: 16px;
          line-height: 1.1;
          letter-spacing: -0.5px;
          font-weight: 800;
          color: #ffffff;
          text-transform: uppercase;
          margin-bottom: 12px;
          position: relative;
          display: inline-block;
        }
        .footer-heading::after {
          content: '';
          display: block;
          width: 50px;
          height: 3px;
          margin-top: 6px;
          border-radius: 20px;
          background: linear-gradient(90deg, #0ea5e9, #2563eb);
        }

        /* ✅ 5. REDUCE PARAGRAPH LINE HEIGHT & ✅ 11. IMPROVE TYPOGRAPHY */
        .footer p {
          color: #94a3b8;
          line-height: 1.45;
          font-size: 13.5px;
        }
        .footer li,
        .footer-links a,
        .footer-bottom-text {
          color: #94a3b8;
          line-height: 1.5;
          font-size: 13.5px;
        }

        /* ✅ 7. REDUCE QUICK LINKS GAP */
        .footer-links li {
          margin-bottom: 6px;
        }

        /* ✅ 6. REDUCE SERVICE LINK GAP */
        .footer-services {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        /* 7. BETTER LINK HOVER */
        .footer-links a {
          transition: all .3s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .footer-links a:hover {
          color: #38bdf8;
          transform: translateX(4px);
        }

        /* ✅ 3. REDUCE CONTACT BOX padding */
        .footer-contact-box {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
          padding: 12px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .footer-contact-box:hover {
          border-color: rgba(37, 99, 235, 0.25);
          box-shadow: 0 12px 40px rgba(37, 99, 235, 0.12);
          background: rgba(255, 255, 255, 0.045);
        }

        /* ✅ 11. COMPACT CONTACT INFO */
        .contact-item {
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .dotted-world-map {
          background-image: radial-gradient(rgba(0, 175, 239, 0.05) 1px, transparent 1px);
          background-size: 5px 5px;
          position: absolute;
          inset: 0;
          opacity: 0.2;
          pointer-events: none;
          z-index: 1;
        }

        /* ✅ 9. REDUCE SOCIAL ICON SIZE */
        .social-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
          transition: all .35s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94a3b8;
        }
        .social-icon:hover {
          transform: translateY(-3px);
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3);
          color: #ffffff;
          border-color: transparent;
        }

        /* 9. PREMIUM BUTTON */
        .footer-btn {
          background: linear-gradient(135deg, #0ea5e9, #2563eb);
          border: none;
          border-radius: 12px;
          font-weight: 700;
          transition: .35s;
          color: #ffffff;
          padding: 6px 12px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 13px;
          cursor: pointer;
        }
        .footer-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
          color: #ffffff;
        }

        /* ✅ 8. REDUCE BOTTOM COPYRIGHT AREA */
        .footer-bottom {
          margin-top: 18px;
          padding-top: 10px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          max-width: 1240px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 24px;
          padding-right: 24px;
          position: relative;
          z-index: 10;
        }

        .verified-amfi-badge-pill {
          background: rgba(251, 191, 36, 0.04);
          border: 1px solid rgba(251, 191, 36, 0.25);
          color: #fbbf24;
          font-size: 8.5px;
          font-weight: 800;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          padding: 2.5px 7px;
          border-radius: 6px;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          transition: all 0.2s ease;
          text-shadow: 0 0 4px rgba(251, 191, 36, 0.15);
        }
        .verified-amfi-badge-pill::before {
          content: '';
          width: 4px;
          height: 4px;
          background-color: #fbbf24;
          border-radius: 50%;
          display: inline-block;
          box-shadow: 0 0 5px #fbbf24;
          animation: breathing-badge 2s infinite ease-in-out;
        }
        @keyframes breathing-badge {
          0%, 100% {
            transform: scale(0.85);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.25);
            opacity: 1;
            box-shadow: 0 0 8px #fbbf24;
          }
        }
        .verified-amfi-badge-pill:hover {
          background: rgba(251, 191, 36, 0.08);
          border-color: rgba(251, 191, 36, 0.45);
          box-shadow: 0 0 10px rgba(251, 191, 36, 0.2);
          transform: translateY(-0.5px);
        }

        .philosophy-quote-glow {
          background: linear-gradient(135deg, #ffffff 30%, #38bdf8 75%, #2563eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
          font-weight: 800;
          font-style: italic;
          padding-right: 6px;
        }

        .pulse-indicator-dot {
          width: 6px;
          height: 6px;
          background-color: #00afef;
          border-radius: 50%;
          display: inline-block;
          box-shadow: 0 0 6px #00afef;
          animation: breathing-dot 2s infinite ease-in-out;
        }

        @keyframes breathing-dot {
          0%, 100% {
            transform: scale(0.85);
            opacity: 0.5;
            box-shadow: 0 0 3px rgba(0, 175, 239, 0.4);
          }
          50% {
            transform: scale(1.15);
            opacity: 1;
            box-shadow: 0 0 8px rgba(0, 175, 239, 1);
          }
        }

        .partner-glow-pill {
          background: rgba(0, 175, 239, 0.02);
          border: 1px solid rgba(0, 175, 239, 0.15);
          box-shadow: 0 0 8px rgba(0, 175, 239, 0.05);
          border-radius: 12px;
          padding: 4px 12px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .footer-logo-img {
          height: 48px !important;
          width: auto !important;
          display: block;
        }

        .quick-link-bullet {
          width: 5px;
          height: 5px;
          background-color: rgba(56, 189, 248, 0.5);
          border-radius: 50%;
          display: inline-block;
          transition: all 0.22s ease;
        }
        .footer-links a:hover .quick-link-bullet {
          background-color: #38bdf8;
          box-shadow: 0 0 6px #38bdf8;
          transform: scale(1.4);
        }

        .service-outline-card {
          width: 24px;
          height: 24px;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          background: rgba(255, 255, 255, 0.02);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          color: #38bdf8;
        }
        .footer-links a:hover .service-outline-card {
          border-color: rgba(56, 189, 248, 0.3);
          background: rgba(56, 189, 248, 0.06);
          box-shadow: 0 0 8px rgba(56, 189, 248, 0.15);
        }

        /* PREMIUM REGULATORY & COMPLIANCE STYLES */
        .footer-compliance {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 18px;
          margin-top: 16px;
          max-width: 1240px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 24px;
          padding-right: 24px;
          position: relative;
          z-index: 10;
        }
        .compliance-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-bottom: 12px;
          margin-left: -16px;
          margin-right: -16px;
        }
        @media (max-width: 991px) {
          .compliance-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
        }
        .compliance-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.005) 100%);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 12px;
          padding: 16px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          position: relative;
          overflow: hidden;
        }
        .compliance-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.3), transparent);
        }
        .compliance-card:hover {
          border-color: rgba(56, 189, 248, 0.25);
          background: linear-gradient(135deg, rgba(56, 189, 248, 0.03) 0%, rgba(37, 99, 235, 0.01) 100%);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2), 0 0 15px rgba(56, 189, 248, 0.05);
          transform: translateY(-2px);
        }
        .compliance-card-title {
          font-size: 11px;
          font-weight: 800;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 6px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding-bottom: 8px;
        }
        .compliance-card-content {
          font-size: 11px;
          color: #94a3b8;
          line-height: 1.5;
        }
        .compliance-warning-box {
          background: rgba(239, 68, 68, 0.03);
          border-left: 2px solid #ef4444;
          border-radius: 0 4px 4px 0;
          padding: 6px 10px;
          margin-top: 4px;
          font-size: 10px;
          line-height: 1.4;
          color: #cbd5e1;
          font-style: italic;
        }
      `}</style>

      {/* Main Grid Layout */}
      <div className="footer-grid">
        
        {/* Column 1: Branding & Philosophy */}
        <div className="footer-brand footer-column">
          <Link to="/" className="inline-block">
            <img 
              src={`${import.meta.env.BASE_URL}blueAnt.png`} 
              alt="Blueant Logo" 
              className="footer-logo-img object-contain" 
              style={{ filter: "drop-shadow(0 0 8px rgba(14, 165, 233, 0.25))" }}
            />
          </Link>
          
          <div className="text-[12px] text-[#94a3b8] leading-[1.6] max-w-[250px] -mt-2 flex flex-col gap-3">
            <div>
              AMFI-registered Mutual Fund Distributor<br />
              ARN: <span className="text-[#38bdf8] font-semibold">129543</span><br />
              <span className="text-[11px] text-slate-500">Validity: 04-Jul-2022 to 03-Jul-2025</span>
            </div>
            <div className="border-t border-white/10 pt-2">
              <strong className="text-slate-200">Blueant IMF LLP</strong><br />
              LLPIN: <span className="text-[#38bdf8] font-semibold">ACD-1228</span> | IRDAI Registration No. - <span className="text-[#38bdf8] font-semibold">IMF1776999</span><br />
              <span className="text-[11px] text-slate-500">Validity: 04-Apr-2024 to 03-Apr-2027</span>
            </div>
          </div>

          {/* Social Icons with Premium Styles */}
          <div className="flex gap-2 mt-1">
            {socialLinks.map(({ Icon, url, label }, idx) => (
              <a 
                key={idx} 
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="social-icon"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col items-start w-full footer-links footer-column">
          <h3 className="footer-heading">
            QUICK LINKS
          </h3>
          <ul className="flex flex-col gap-0.5 items-start w-full">
            {quickLinks.map((link) => (
              <li key={link.name} className="w-full text-left">
                <Link 
                  to={link.path} 
                  className="text-slate-300 font-semibold text-[14.5px] hover:text-[#38bdf8] flex items-center justify-start gap-2.5"
                >
                  <span className="quick-link-bullet shrink-0"></span>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Our Services */}
        <div className="flex flex-col items-start w-full footer-links footer-column">
          <h3 className="footer-heading">
            OUR SERVICES
          </h3>
          
          <div className="footer-services w-full">
            {/* Row 1 */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              <Link to="/services" state={{ selectedIndex: 5 }} className="flex items-center text-left text-slate-300 hover:text-[#38bdf8] transition-all">
                <div className="service-outline-card shrink-0">
                  <TrendingUp size={11} />
                </div>
                <span className="text-[14px] font-semibold ml-2 leading-tight">SIP Investment</span>
              </Link>
              <Link to="/services" state={{ selectedIndex: 0 }} className="flex items-center text-left text-slate-300 hover:text-[#38bdf8] transition-all">
                <div className="service-outline-card shrink-0">
                  <FileText size={11} />
                </div>
                <span className="text-[14px] font-semibold ml-2 leading-tight">Tax Planning</span>
              </Link>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              <Link to="/services" state={{ selectedIndex: 7 }} className="flex items-center text-left text-slate-300 hover:text-[#38bdf8] transition-all">
                <div className="service-outline-card shrink-0">
                  <ShieldCheck size={11} />
                </div>
                <span className="text-[14px] font-semibold ml-2 leading-tight">Insurance Plan</span>
              </Link>
              <Link to="/services" state={{ selectedIndex: 5 }} className="flex items-center text-left text-slate-300 hover:text-[#38bdf8] transition-all">
                <div className="service-outline-card shrink-0">
                  <PieChart size={11} />
                </div>
                <span className="text-[14px] font-semibold ml-2 leading-tight">Mutual Funds</span>
              </Link>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              <Link to="/services" state={{ selectedIndex: 6 }} className="flex items-center text-left text-slate-300 hover:text-[#38bdf8] transition-all">
                <div className="service-outline-card shrink-0">
                  <LineChart size={11} />
                </div>
                <span className="text-[14px] font-semibold ml-2 leading-tight">Stock Trading</span>
              </Link>
              <Link to="/services" state={{ selectedIndex: 4 }} className="flex items-center text-left text-slate-300 hover:text-[#38bdf8] transition-all">
                <div className="service-outline-card shrink-0">
                  <Clock size={11} />
                </div>
                <span className="text-[14px] font-semibold ml-2 leading-tight">Retirement</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Column 4: Contact Us Glass Panel */}
        <div className="flex flex-col items-start w-full">
          <h3 className="footer-heading">
            CONTACT US
          </h3>
          
          <div className="footer-contact-box w-full">
            {/* Coordinate map overlay */}
            <div className="dotted-world-map"></div>
            
            <div className="flex flex-col relative z-10">
              {/* Email entry */}
              <div className="contact-item">
                <div className="w-6 h-6 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 flex items-center justify-center text-[#38bdf8] shrink-0">
                  <Mail size={11} />
                </div>
                <div className="text-left">
                  <span className="text-[#94a3b8]/50 text-[8.5px] font-black uppercase block tracking-wider leading-none">Email Us</span>
                  <a href="mailto:info@blueantfinserv.com" className="text-slate-200 hover:text-[#38bdf8] text-[13.5px] font-bold transition-colors leading-none block mt-1">
                    info@blueantfinserv.com
                  </a>
                </div>
              </div>

              {/* Call entry */}
              <div className="contact-item">
                <div className="w-6 h-6 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 flex items-center justify-center text-[#38bdf8] shrink-0">
                  <Phone size={11} />
                </div>
                <div className="text-left">
                  <span className="text-[#94a3b8]/50 text-[8.5px] font-black uppercase block tracking-wider leading-none">Call Us</span>
                  <a href="tel:+919990218899" className="text-slate-200 hover:text-[#38bdf8] text-[13.5px] font-bold transition-colors leading-none block mt-1">
                    +91-9990218899
                  </a>
                </div>
              </div>

              {/* Visit entry */}
              <div className="contact-item">
                <div className="w-6 h-6 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 flex items-center justify-center text-[#38bdf8] shrink-0">
                  <Globe size={11} />
                </div>
                <div className="text-left">
                  <span className="text-[#94a3b8]/50 text-[8.5px] font-black uppercase block tracking-wider leading-none">Visit Us</span>
                  <a href="https://www.blueantfinserv.com" target="_blank" rel="noreferrer" className="text-slate-200 hover:text-[#38bdf8] text-[13.5px] font-bold transition-colors leading-none block mt-1">
                    blueantfinserv.com
                  </a>
                </div>
              </div>

              {/* CTA & Button */}
              <div className="border-t border-white/5 pt-2 mt-0.5">
                <p className="text-[11px] leading-relaxed text-slate-400 font-semibold mb-2">
                  Let’s build your financial future together.
                </p>
                <button 
                  onClick={openConsultationModal} 
                  className="footer-btn w-full"
                >
                  GET IN TOUCH
                  <ArrowRight size={10} />
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Premium Compliance & Disclosures Block */}
      <div className="footer-compliance font-outfit">
        <div className="compliance-grid">
          
          {/* Card 2: Regulatory Disclosures & Compensation */}
          <div className="compliance-card">
            <div className="compliance-card-title">
              <FileText size={13} className="text-[#38bdf8]" />
              Regulatory Disclosures
            </div>
            <div className="compliance-card-content flex flex-col gap-2.5">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 px-1.5 py-0.5 rounded text-[8px] font-black uppercase tracking-widest">
                    Non-RIA
                  </span>
                  <strong className="text-slate-200 text-[11px]">Fiduciary Status</strong>
                </div>
                <p className="text-[10.5px] leading-relaxed">
                  Blueant Finserv Pvt. Ltd. acts as an AMFI-registered Mutual Fund Distributor (ARN-129543) and is <strong className="text-amber-400">NOT a Registered Investment Adviser (RIA)</strong>. We do not provide advisory services under SEBI Regulations, 2013, and charge no fee.
                </p>
              </div>
              <div className="border-t border-white/5 pt-2.5">
                <strong className="text-slate-200 text-[11px]">AMC Commissions & Direct Plans</strong>
                <p className="mt-1 text-[10.5px] leading-relaxed">
                  We receive commissions directly from AMCs. Investors may invest in Direct Plans, which involve no distributor commission and have lower expense ratios.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Risk Disclaimers & Grievance */}
          <div className="compliance-card">
            <div className="compliance-card-title">
              <ShieldAlert size={13} className="text-[#38bdf8]" />
              Risks & Grievances
            </div>
            <div className="compliance-card-content flex flex-col gap-2.5">
              <div>
                <strong className="text-slate-200 text-[11px]">Grievance Redressal Officer</strong>
                <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[10.5px] text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <Mail size={11} className="text-[#38bdf8]" />
                    <a href="mailto:info@blueantfinserv.com" className="hover:text-[#38bdf8] transition-colors">info@blueantfinserv.com</a>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Phone size={11} className="text-[#38bdf8]" />
                    <a href="tel:+919990218899" className="hover:text-[#38bdf8] transition-colors">+91-9990218899</a>
                  </div>
                </div>
              </div>
              <div className="mt-0.5">
                <strong className="text-slate-200 text-[11px]">Market Risk Warning</strong>
                <div className="compliance-warning-box">
                  "Mutual Fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance is not indicative of future returns."
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 12. MAKE COPYRIGHT SECTION CLEAN */}
      <div className="footer-bottom">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 py-1.5 text-center lg:text-left text-[13px] w-full">
          
          {/* Left: Copyright */}
          <p className="text-slate-500 font-bold text-[13.5px] self-center">
            © {currentYear} Blueant Finserv Pvt. Ltd. All rights reserved.
          </p>

          {/* Right: Partner Tag */}
          <div className="flex items-center self-center">
            <div className="partner-glow-pill">
              <span className="pulse-indicator-dot"></span>
              <span className="text-slate-200 text-[11px] font-black uppercase tracking-[1px]">
                Financial Growth Partner
              </span>
              <TrendingUp size={11} className="text-[#38bdf8]" />
            </div>
          </div>

        </div>
      </div>


    </footer>
  );
};

export default Footer;

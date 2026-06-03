import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaYoutube 
} from "react-icons/fa";
import { 
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
  ArrowRight,
  Home,
  Info,
  Briefcase,
  BookOpen,
  Users,
  MessageSquare
} from "lucide-react";
import { openConsultationModal } from "./ConsultationModal";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home",      path: "/",         Icon: Home        },
    { name: "About Us",  path: "/about",    Icon: Info        },
    { name: "Services",  path: "/services", Icon: Briefcase   },
    { name: "Resources", path: "/resources",Icon: BookOpen    },
    { name: "Careers",   path: "/careers",  Icon: Users       },
    { name: "Contact",   path: "/contact",  Icon: MessageSquare },
  ];

  const services = [
    { name: "SIP Investment",  Icon: TrendingUp,  index: 5 },
    { name: "Tax Planning",    Icon: FileText,     index: 0 },
    { name: "Insurance Plan",  Icon: ShieldCheck,  index: 7 },
    { name: "Mutual Funds",    Icon: PieChart,     index: 5 },
    { name: "Stock Trading",   Icon: LineChart,    index: 6 },
    { name: "Retirement",      Icon: Clock,        index: 4 },
  ];

  const socialLinks = [
    { Icon: FaFacebookF,  url: "https://www.facebook.com/blueantindia/",              label: "Facebook",  brand: "facebook"  },
    { Icon: FaInstagram,  url: "https://www.instagram.com/blueantindia/",             label: "Instagram", brand: "instagram" },
    { Icon: FaLinkedinIn, url: "https://www.linkedin.com/in/rohit-raman-0aa69490/",   label: "LinkedIn",  brand: "linkedin"  },
    { Icon: FaTwitter,    url: "https://x.com/blueantfinserv",                        label: "Twitter",   brand: "twitter"   },
    { Icon: FaYoutube,    url: "https://www.youtube.com/@RohitBlueant",               label: "YouTube",   brand: "youtube"   },
  ];

  return (
    <footer className="footer font-outfit">

      {/* Ambient glow orbs */}
      <div className="footer-glow-top-right" />
      <div className="footer-glow-bottom-left" />

      {/* ── Main 4-column Grid ── */}
      <div className="footer-grid">

        {/* Col 1: Brand */}
        <div className="footer-brand footer-column">
          <Link to="/" className="footer-logo-wrap">
            <img
              src={`${import.meta.env.BASE_URL}blueAnt.png`}
              alt="Blueant Finserv Logo"
              className="footer-logo-img"
            />
          </Link>

          <div className="footer-reg-info">
            AMFI-registered Mutual Fund Distributor<br />
            ARN: <span className="highlight">129543</span>

            <hr className="divider-line" />

            <strong>Blueant IMF LLP</strong><br />
            LLPIN: <span className="highlight">ACD-1228</span> &nbsp;|&nbsp;
            IRDAI Reg. No. – <span className="highlight">IMF1776999</span>
          </div>

          {/* Social icons */}
          <div className="footer-social-row">
            {socialLinks.map(({ Icon, url, label, brand }, idx) => (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`social-icon social-icon-${brand}`}
              >
                <Icon size={13} />
              </a>
            ))}
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="footer-column">
          <h3 className="footer-heading">Quick Links</h3>
          <div className="footer-services">
            {quickLinks.map(({ name, path, Icon }) => (
              <Link
                key={name}
                to={path}
                className="footer-service-link"
              >
                <div className="service-outline-card">
                  <Icon size={12} />
                </div>
                {name}
              </Link>
            ))}
          </div>
        </div>

        {/* Col 3: Our Services — single column */}
        <div className="footer-column">
          <h3 className="footer-heading">Our Services</h3>
          <div className="footer-services">
            {services.map(({ name, Icon, index }) => (
              <Link
                key={name}
                to="/services"
                state={{ selectedIndex: index }}
                className="footer-service-link"
              >
                <div className="service-outline-card">
                  <Icon size={12} />
                </div>
                {name}
              </Link>
            ))}
          </div>
        </div>

        {/* Col 4: Contact */}
        <div className="footer-column">
          <h3 className="footer-heading">Contact Us</h3>

          <div className="footer-contact-box">
            <div className="dotted-world-map" />

            <div style={{ position: "relative", zIndex: 2 }}>

              {/* Email */}
              <div className="contact-row">
                <div className="contact-icon-wrap"><Mail size={13} /></div>
                <div>
                  <span className="contact-label">Email Us</span>
                  <a href="mailto:info@blueantfinserv.com" className="contact-value">
                    info@blueantfinserv.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="contact-row">
                <div className="contact-icon-wrap"><Phone size={13} /></div>
                <div>
                  <span className="contact-label">Call Us</span>
                  <a href="tel:+919990218899" className="contact-value">
                    +91-9990218899
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="contact-row">
                <div className="contact-icon-wrap"><Globe size={13} /></div>
                <div>
                  <span className="contact-label">Visit Us</span>
                  <a href="https://www.blueantfinserv.com" target="_blank" rel="noreferrer" className="contact-value">
                    blueantfinserv.com
                  </a>
                </div>
              </div>

              <button onClick={openConsultationModal} className="footer-btn">
                GET IN TOUCH <ArrowRight size={12} />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* ── Compliance Block ── */}
      <div className="footer-compliance font-outfit">
        <div className="compliance-grid">

          <div className="compliance-card">
            <div className="compliance-card-title">
              <FileText size={12} style={{ color: "#38bdf8" }} />
              Regulatory Disclosures
            </div>
            <div className="compliance-card-content" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                  <span style={{ background: "rgba(245,158,11,0.1)", color: "#fbbf24", border: "1px solid rgba(245,158,11,0.2)", padding: "1px 6px", borderRadius: "4px", fontSize: "8px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px" }}>Non-RIA</span>
                  <strong style={{ color: "#cbd5e1", fontSize: "10.5px" }}>Fiduciary Status</strong>
                </div>
                <p style={{ fontSize: "10.5px" }}>
                  Blueant Finserv Pvt. Ltd. acts as an AMFI-registered Mutual Fund Distributor (ARN-129543) and is <strong style={{ color: "#fbbf24" }}>NOT a Registered Investment Adviser (RIA)</strong>. We do not provide advisory services under SEBI Regulations, 2013, and charge no fee.
                </p>
              </div>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "8px" }}>
                <strong style={{ color: "#cbd5e1", fontSize: "10.5px" }}>AMC Commissions &amp; Direct Plans</strong>
                <p style={{ marginTop: "4px", fontSize: "10.5px" }}>
                  We receive commissions directly from AMCs. Investors may invest in Direct Plans, which involve no distributor commission and have lower expense ratios.
                </p>
              </div>
            </div>
          </div>

          <div className="compliance-card">
            <div className="compliance-card-title">
              <ShieldAlert size={12} style={{ color: "#38bdf8" }} />
              Risks &amp; Grievances
            </div>
            <div className="compliance-card-content" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div>
                <strong style={{ color: "#cbd5e1", fontSize: "10.5px" }}>Grievance Redressal Officer</strong>
                <div style={{ marginTop: "4px", display: "flex", flexWrap: "wrap", gap: "8px 16px", fontSize: "10.5px", color: "#94a3b8" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <Mail size={10} style={{ color: "#38bdf8" }} />
                    <a href="mailto:info@blueantfinserv.com" style={{ color: "inherit" }}>info@blueantfinserv.com</a>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <Phone size={10} style={{ color: "#38bdf8" }} />
                    <a href="tel:+919990218899" style={{ color: "inherit" }}>+91-9990218899</a>
                  </div>
                </div>
              </div>
              <div>
                <strong style={{ color: "#cbd5e1", fontSize: "10.5px" }}>Market Risk Warning</strong>
                <div className="compliance-warning-box">
                  "Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Calculations are illustrative and for informational purposes only. We represent independent financial education."
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="footer-bottom">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
          <p style={{ color: "#475569", fontSize: "12.5px", fontWeight: 600, margin: 0 }}>
            © {currentYear} Blueant Finserv Pvt. Ltd. All rights reserved.
          </p>
          <div className="partner-glow-pill">
            <span className="pulse-indicator-dot" />
            <span style={{ color: "#cbd5e1", fontSize: "10.5px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px" }}>
              Financial Growth Partner
            </span>
            <TrendingUp size={11} style={{ color: "#38bdf8" }} />
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;

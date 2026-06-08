import React from "react";
import { Link } from "react-router-dom";
import { 
  FaFacebookF, 
  FaLinkedinIn, 
  FaInstagram, 
  FaYoutube 
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
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
    { Icon: FaFacebookF, url: "https://www.facebook.com/blueantindia/", label: "Facebook", color: "#1877f2", hoverBg: "#1877f2" },
    { Icon: FaInstagram, url: "https://www.instagram.com/blueantindia/", label: "Instagram", color: "#e4405f", hoverBg: "linear-gradient(135deg, #f58529, #dd2a7b, #8134af, #515bd4)" },
    { Icon: FaLinkedinIn, url: "https://www.linkedin.com/in/rohit-raman-0aa69490/", label: "LinkedIn", color: "#0a66c2", hoverBg: "#0a66c2" },
    { Icon: FaXTwitter, url: "https://x.com/blueantfinserv", label: "X", color: "#ffffff", hoverBg: "#000000" },
    { Icon: FaYoutube, url: "https://www.youtube.com/@RohitBlueant", label: "YouTube", color: "#ff0000", hoverBg: "#ff0000" },
  ];

  const serviceLinks = [
    { name: "SIP Investment", selectedIndex: 5 },
    { name: "Tax Planning", selectedIndex: 0 },
    { name: "Insurance Plan", selectedIndex: 7 },
    { name: "Mutual Funds", selectedIndex: 5 },
    { name: "Stock Trading", selectedIndex: 6 },
    { name: "Retirement", selectedIndex: 4 },
  ];

  return (
    <footer className="footer font-outfit">
      
      {/* Background Top Right Glow Effect */}
      <div className="footer-glow-top-right"></div>

      <style>{`

        /* ============================================================
           BASE STYLES — Mobile first (< 768px): single column stack
           ============================================================ */

        .footer {
          background:
            radial-gradient(circle at top left, rgba(37,99,235,0.10), transparent 30%),
            radial-gradient(circle at bottom right, rgba(124,58,237,0.08), transparent 30%),
            #020617;
          position: relative;
          overflow: hidden;
          padding-top: 28px;
          padding-bottom: 10px;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
        }

        .footer-glow-top-right {
          position: absolute;
          width: 300px;
          height: 300px;
          background: radial-gradient(rgba(59, 130, 246, 0.12), transparent 70%);
          top: -150px;
          right: -80px;
          pointer-events: none;
          z-index: 1;
        }

        /* ─── MOBILE GRID: single column, all sections stacked ─── */
        .footer-grid {
          display: flex;
          flex-direction: column;
          gap: 0;
          max-width: 1240px;
          margin: 0 auto;
          padding-left: 20px;
          padding-right: 20px;
          position: relative;
          z-index: 10;
        }

        /* Each column on mobile is full-width with a bottom divider */
        .footer-column {
          width: 100%;
          padding-top: 18px;
          padding-bottom: 18px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          border-right: none;
          padding-right: 0;
        }
        /* Last column (Contact) — no bottom border */
        .footer-grid > div:last-child {
          border-bottom: none;
        }

        /* ─── MOBILE: two-column middle row (Quick Links + Our Services) ─── */
        /* We wrap columns 2 & 3 in a row on mobile */
        .footer-links-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .footer-links-row > .footer-column {
          border-bottom: none;
          border-right: none;
          padding-top: 18px;
          padding-bottom: 18px;
        }
        .footer-links-row > .footer-column:first-child {
          border-right: 1px solid rgba(255, 255, 255, 0.06);
          padding-right: 12px;
        }

        /* ─── Brand section ─── */
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* Mobile: side-by-side sub-columns */
        .footer-brand {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px 14px;
          align-items: flex-start;
        }

        .brand-left {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding-right: 12px;
          border-right: 1px solid rgba(255, 255, 255, 0.07);
        }

        .brand-right {
          display: flex;
          flex-direction: column;
          gap: 0;
          top: 10px;
          position: relative;
        }

        /* Desktop: collapse brand back to single vertical column */
        @media (min-width: 768px) {
          .footer-brand {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          .brand-left {
            padding-right: 0;
            border-right: none;
          }
        }

        .footer-heading {
          font-size: 13px;
          line-height: 1.1;
          letter-spacing: -0.3px;
          font-weight: 800;
          color: #ffffff;
          text-transform: uppercase;
          margin-bottom: 10px;
          position: relative;
          display: inline-block;
        }
        .footer-heading::after {
          content: '';
          display: block;
          width: 40px;
          height: 2px;
          margin-top: 5px;
          border-radius: 20px;
          background: linear-gradient(90deg, #0ea5e9, #2563eb);
        }

        .footer p {
          border-left: 2px solid #ef4444;
          border-radius: 0 4px 4px 0;
          padding: 5px 8px;
          margin-top: 4px;
          font-size: 10px;
          line-height: 1.4;
          color: #cbd5e1;
          font-style: italic;
          background: rgba(239, 68, 68, 0.03);
        }
        .footer li,
        .footer-links a,
        .footer-bottom-text {
          color: #94a3b8;
          line-height: 1.5;
          font-size: 13px;
        }

        .footer-links ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .footer-links li {
          margin-bottom: 5px;
        }

        .footer-services {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

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

        .footer-contact-box {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
          padding: 10px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .footer-contact-box:hover {
          border-color: rgba(37, 99, 235, 0.25);
          box-shadow: 0 12px 40px rgba(37, 99, 235, 0.12);
          background: rgba(255, 255, 255, 0.045);
        }

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

        .social-icon {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: color-mix(in srgb, var(--social-color) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--social-color) 28%, transparent);
          transition: all .35s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--social-color);
        }
        .social-icon:hover {
          transform: translateY(-3px);
          background: var(--social-hover-bg);
          box-shadow: 0 8px 20px color-mix(in srgb, var(--social-color) 36%, transparent);
          color: #ffffff;
          border-color: transparent;
        }

        .footer-btn {
          background: linear-gradient(135deg, #0ea5e9, #2563eb);
          border: none;
          border-radius: 10px;
          font-weight: 700;
          transition: .35s;
          color: #ffffff;
          padding: 6px 12px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 12px;
          cursor: pointer;
          width: 100%;
        }
        .footer-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
          color: #ffffff;
        }

        .footer-bottom {
          margin-top: 14px;
          padding-top: 10px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          max-width: 1240px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 16px;
          padding-right: 16px;
          position: relative;
          z-index: 10;
        }
        .footer-bottom p {
          border-left: 0;
          border-radius: 0;
          padding: 0;
          margin-top: 0;
          background: transparent;
          font-style: normal;
          color: #64748b;
          font-size: 11px;
          line-height: 1.5;
          text-align: center;
        }

        .footer-logo-link {
          display: inline-flex;
          align-self: flex-start;
          width: min(100%, 220px);
          overflow: hidden;
        }
        .footer-logo-img {
          height: clamp(48px, 8vw, 64px) !important;
          width: auto;
          max-width: none;
          display: block;
          transform: translateX(-4%);
        }

        .quick-link-bullet {
          width: 5px;
          height: 5px;
          background-color: rgba(56, 189, 248, 0.5);
          border-radius: 50%;
          display: inline-block;
          flex-shrink: 0;
          transition: all 0.22s ease;
        }
        .footer-links a:hover .quick-link-bullet {
          background-color: #38bdf8;
          box-shadow: 0 0 6px #38bdf8;
          transform: scale(1.4);
        }

        .service-outline-card {
          width: 22px;
          height: 22px;
          border-radius: 7px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          background: rgba(255, 255, 255, 0.02);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          color: #38bdf8;
          flex-shrink: 0;
        }
        .footer-links a:hover .service-outline-card {
          border-color: rgba(56, 189, 248, 0.3);
          background: rgba(56, 189, 248, 0.06);
          box-shadow: 0 0 8px rgba(56, 189, 248, 0.15);
        }

        /* Compliance section */
        .footer-compliance {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 16px;
          margin-top: 14px;
          max-width: 1240px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 20px;
          padding-right: 20px;
          position: relative;
          z-index: 10;
        }
        .compliance-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
          margin-bottom: 10px;
        }
        .compliance-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.005) 100%);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 10px;
          padding: 12px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
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
          font-size: 10px;
          font-weight: 800;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 6px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding-bottom: 8px;
        }
        .compliance-card-content {
          font-size: 10px;
          color: #94a3b8;
          line-height: 1.5;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .compliance-warning-box {
          background: rgba(239, 68, 68, 0.03);
          border-left: 2px solid #ef4444;
          border-radius: 0 4px 4px 0;
          padding: 5px 8px;
          margin-top: 4px;
          font-size: 10px;
          line-height: 1.4;
          color: #cbd5e1;
          font-style: italic;
        }

        /* Badges & Animations */
        .verified-amfi-badge-pill {
          background: rgba(251, 191, 36, 0.04);
          border: 1px solid rgba(251, 191, 36, 0.25);
          color: #fbbf24;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          padding: 2px 6px;
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
          0%, 100% { transform: scale(0.85); opacity: 0.6; }
          50% { transform: scale(1.25); opacity: 1; box-shadow: 0 0 8px #fbbf24; }
        }
        .verified-amfi-badge-pill:hover {
          background: rgba(251, 191, 36, 0.08);
          border-color: rgba(251, 191, 36, 0.45);
          box-shadow: 0 0 10px rgba(251, 191, 36, 0.2);
          transform: translateY(-0.5px);
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
          0%, 100% { transform: scale(0.85); opacity: 0.5; box-shadow: 0 0 3px rgba(0, 175, 239, 0.4); }
          50% { transform: scale(1.15); opacity: 1; box-shadow: 0 0 8px rgba(0, 175, 239, 1); }
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


        /* ============================================================
           320px – 413px  (Small / standard phones)
           ============================================================ */
        @media (max-width: 413px) {
          .footer-grid {
            padding-left: 14px;
            padding-right: 14px;
          }
          .footer-compliance {
            padding-left: 14px;
            padding-right: 14px;
          }
          .footer-bottom {
            padding-left: 14px;
            padding-right: 14px;
          }
          .footer-logo-img {
            height: 46px !important;
          }
          .footer-heading {
            font-size: 11.5px;
            margin-bottom: 8px;
          }
          .footer-heading::after {
            width: 28px;
            height: 2px;
            margin-top: 4px;
          }
          .footer li,
          .footer-links a {
            font-size: 12px;
          }
          .social-icon {
            width: 28px;
            height: 28px;
          }
          .footer-btn {
            font-size: 11px;
            padding: 5px 10px;
          }
          .footer-contact-box {
            border-radius: 10px;
            padding: 10px;
          }
          .footer-bottom p {
            font-size: 10px;
          }
          .compliance-card {
            padding: 10px;
          }
          .compliance-card-title {
            font-size: 9px;
          }
          .compliance-card-content {
            font-size: 9px;
          }
        }


        /* ============================================================
           414px – 599px  (Large phones / phablets)
           ============================================================ */
        @media (min-width: 414px) and (max-width: 599px) {
          .footer-grid {
            padding-left: 18px;
            padding-right: 18px;
          }
          .footer-logo-img {
            height: 60px !important;
            position: relative;
            top: -4px;
          }
          .footer-heading {
            font-size: 12.5px;
          }
          .footer li,
          .footer-links a {
            font-size: 13px;
          }
          .social-icon {
            width: 30px;
            height: 30px;
          }
          .footer-bottom p {
            font-size: 11px;
          }
        }


        /* ============================================================
           600px – 767px  (Small tablets / large phablets)
           ============================================================ */
        @media (min-width: 600px) and (max-width: 767px) {
          .footer-grid {
            padding-left: 22px;
            padding-right: 22px;
          }
          .footer-logo-img {
            height: 56px !important;
          }
          .footer-heading {
            font-size: 13px;
          }
          .footer li,
          .footer-links a {
            font-size: 13.5px;
          }
          .footer-bottom p {
            font-size: 12px;
          }
          .compliance-grid {
            grid-template-columns: 1fr 1fr;
            gap: 14px;
          }
        }


        /* ============================================================
           768px+  DESKTOP BREAKPOINT:
           Switch from stacked to 4-column horizontal layout
           ============================================================ */
        @media (min-width: 768px) {

          /* Override the stacked flex back to a grid */
          .footer-grid {
            display: grid;
            padding-left: 24px;
            padding-right: 24px;
            gap: 16px 14px;
            align-items: flex-start;
          }

          /* Remove the stacked column dividers */
          .footer-column {
            border-bottom: none;
            padding-bottom: 0;
            padding-top: 0;
          }

          /* Remove the two-column links-row wrapper behaviour on desktop */
          .footer-links-row {
            display: contents; /* let children fall into the parent grid */
            border-bottom: none;
          }
          .footer-links-row > .footer-column {
            border-right: none;
            padding-right: 0;
            padding-top: 0;
            padding-bottom: 0;
          }
          .footer-links-row > .footer-column:first-child {
            border-right: none;
            padding-right: 0;
          }

          /* Add vertical right-border separators between columns */
          .footer-column {
            border-right: 1px solid rgba(255, 255, 255, 0.06);
            padding-right: 12px;
          }
          .footer-grid > div:last-child,
          .footer-links-row > .footer-column:last-child {
            border-right: none;
            padding-right: 0;
          }

        }


        /* ============================================================
           768px – 899px  (iPad portrait)
           4-col layout but brand spans full width on top
           ============================================================ */
        @media (min-width: 768px) and (max-width: 899px) {
          .footer-grid {
            grid-template-columns: 1.1fr 0.95fr 0.95fr;
            gap: 16px 12px;
          }
          .footer-brand {
            display: grid;
            grid-template-columns: 1.15fr 1fr 0.9fr;
            gap: 18px;
            align-items: start;
          }
          .brand-left,
          .brand-info,
          .brand-social {
            min-width: 0;
          }
          .brand-left {
            padding-right: 18px;
            border-right: 1px solid rgba(255, 255, 255, 0.06);
          }
          .brand-info {
            padding-left: 6px;
            padding-right: 6px;
          }
          .brand-social {
            padding-left: 6px;
          }
          /* Brand spans all 3 columns */
          .footer-brand.footer-column {
            grid-column: 1 / -1;
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
            border-right: none;
            padding-bottom: 16px;
            padding-right: 0;
          }
          .footer-links-row {
            grid-column: 1 / span 2;
          }
          /* Contact spans all columns */
          .footer-grid > div:last-child {
            grid-column: 3 / 4;
            grid-row: 2;
            border-right: none;
          }
          .footer-links-row > .footer-column {
            min-width: 0;
          }
          .footer-logo-img {
            height: 60px !important;
          }
          .footer-heading {
            font-size: 13.5px;
          }
          .footer li,
          .footer-links a {
            font-size: 13px;
          }
          .footer-bottom {
            padding-left: 24px;
            padding-right: 24px;
          }
          .footer-compliance {
            padding-left: 24px;
            padding-right: 24px;
          }
          .compliance-grid {
            grid-template-columns: 1fr 1fr;
            gap: 18px;
          }
        }


        /* ============================================================
           900px – 1023px  (Tablet landscape)
           ============================================================ */
        @media (min-width: 900px) and (max-width: 1023px) {
          .footer-grid {
            grid-template-columns: 1.15fr 1fr 1fr;
            gap: 14px 12px;
            padding-left: 24px;
            padding-right: 24px;
          }
          .footer-brand {
            display: grid;
            grid-template-columns: 1.15fr 1fr 0.9fr;
            gap: 18px;
            align-items: start;
          }
          .brand-left,
          .brand-info,
          .brand-social {
            min-width: 0;
          }
          .brand-left {
            padding-right: 18px;
            border-right: 1px solid rgba(255, 255, 255, 0.06);
          }
          .brand-info {
            padding-left: 6px;
            padding-right: 6px;
          }
          .brand-social {
            padding-left: 6px;
          }
          .footer-brand.footer-column {
            grid-column: 1 / -1;
            border-right: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
            padding-bottom: 16px;
            padding-right: 0;
          }
          .footer-links-row {
            grid-column: 1 / 3;
          }
          .footer-grid > div:last-child {
            grid-column: 3 / 4;
            grid-row: 2;
            border-right: none;
          }
          .footer-logo-img {
            height: clamp(56px, 5.5vw, 66px) !important;
          }
          .footer-heading {
            font-size: 14px;
            margin-bottom: 11px;
          }
          .footer li,
          .footer-links a {
            font-size: 13px;
          }
          .footer-bottom {
            padding-left: 24px;
            padding-right: 24px;
          }
          .footer-compliance {
            padding-left: 24px;
            padding-right: 24px;
          }
          .compliance-grid {
            grid-template-columns: 1fr 1fr;
            gap: 24px;
          }
        }


        /* ============================================================
           1024px – 1199px  (Small laptops / iPad Pro landscape)
           ============================================================ */
        @media (min-width: 1024px) and (max-width: 1199px) {
          .footer {
            padding-top: 30px;
            padding-bottom: 10px;
          }
          .footer-grid {
            grid-template-columns: 1.2fr 1fr 1fr;
            gap: 16px 12px;
            padding-left: 24px;
            padding-right: 24px;
          }
          .footer-brand.footer-column {
            grid-column: 1 / -1;
            border-right: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
            padding-bottom: 16px;
            padding-right: 0;
          }
          .footer-links-row {
            grid-column: 1 / 3;
          }
          .footer-grid > div:last-child {
            grid-column: 3 / 4;
            grid-row: 2;
            border-right: none;
          }
          .footer-logo-img {
            height: clamp(56px, 5vw, 68px) !important;
          }
          .footer-heading {
            font-size: 15px;
            margin-bottom: 11px;
          }
          .footer-heading::after {
            width: 44px;
            height: 2.5px;
            margin-top: 5px;
          }
          .footer li,
          .footer-links a {
            font-size: 13px;
          }
          .footer-btn {
            font-size: 12.5px;
          }
          .footer-bottom {
            padding-left: 24px;
            padding-right: 24px;
          }
          .footer-compliance {
            padding-left: 24px;
            padding-right: 24px;
          }
          .compliance-grid {
            grid-template-columns: 1fr 1fr;
            gap: 28px;
          }
          .footer-glow-top-right {
            width: 360px;
            height: 360px;
          }
        }


        /* ============================================================
           1200px – 1439px  (Standard desktops / 1080p laptops)
           ============================================================ */
        @media (min-width: 1200px) and (max-width: 1439px) {
          .footer {
            padding-top: 32px;
            padding-bottom: 12px;
          }
          .footer-grid {
            grid-template-columns: 1.2fr 0.8fr 1.2fr 1fr;
            gap: 22px;
            padding-left: 24px;
            padding-right: 24px;
          }
          .footer-logo-img {
            height: clamp(56px, 5vw, 72px) !important;
          }
          .footer-heading {
            font-size: 16px;
            margin-bottom: 12px;
          }
          .footer-heading::after {
            width: 50px;
            height: 3px;
            margin-top: 6px;
          }
          .footer li,
          .footer-links a {
            font-size: 13.5px;
          }
          .footer-links li {
            margin-bottom: 6px;
          }
          .social-icon {
            width: 32px;
            height: 32px;
          }
          .footer-btn {
            font-size: 13px;
            padding: 6px 12px;
          }
          .footer-contact-box {
            border-radius: 16px;
            padding: 12px;
          }
          .footer-bottom {
            margin-top: 18px;
            padding-left: 24px;
            padding-right: 24px;
          }
          .footer-bottom p {
            font-size: 13.5px;
          }
          .footer-compliance {
            padding-left: 24px;
            padding-right: 24px;
            padding-top: 18px;
            margin-top: 16px;
          }
          .compliance-grid {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }
          .compliance-card-title {
            font-size: 11px;
          }
          .compliance-card-content {
            font-size: 11px;
          }
          .footer-glow-top-right {
            width: 400px;
            height: 400px;
            top: -200px;
            right: -100px;
          }
        }


        /* ============================================================
           1440px – 1599px  (Large desktops / MacBook Pro)
           ============================================================ */
        @media (min-width: 1440px) and (max-width: 1599px) {
          .footer {
            padding-top: 36px;
            padding-bottom: 14px;
          }
          .footer-grid {
            max-width: 1360px;
            grid-template-columns: 1.25fr 0.85fr 1.2fr 1.05fr;
            gap: 28px;
            padding-left: 32px;
            padding-right: 32px;
          }
          .footer-column {
            padding-right: 14px;
          }
          .footer-logo-img {
            height: 76px !important;
          }
          .footer-heading {
            font-size: 16.5px;
            margin-bottom: 13px;
          }
          .footer-heading::after {
            width: 54px;
            height: 3px;
          }
          .footer li,
          .footer-links a {
            font-size: 14px;
          }
          .footer-links li {
            margin-bottom: 7px;
          }
          .social-icon {
            width: 34px;
            height: 34px;
          }
          .footer-btn {
            font-size: 13.5px;
            padding: 7px 14px;
            border-radius: 12px;
          }
          .footer-contact-box {
            border-radius: 16px;
            padding: 14px;
          }
          .footer-bottom {
            max-width: 1360px;
            margin-top: 20px;
            padding-left: 32px;
            padding-right: 32px;
          }
          .footer-bottom p {
            font-size: 14px;
          }
          .footer-compliance {
            max-width: 1360px;
            padding-left: 32px;
            padding-right: 32px;
            padding-top: 20px;
            margin-top: 18px;
          }
          .compliance-grid {
            grid-template-columns: 1fr 1fr;
            gap: 36px;
          }
          .compliance-card {
            padding: 18px;
            border-radius: 14px;
          }
          .compliance-card-title {
            font-size: 11.5px;
          }
          .compliance-card-content {
            font-size: 11.5px;
          }
          .footer-glow-top-right {
            width: 450px;
            height: 450px;
            top: -220px;
            right: -110px;
          }
        }


        /* ============================================================
           1600px – 1919px  (QHD / large widescreen)
           ============================================================ */
        @media (min-width: 1600px) and (max-width: 1919px) {
          .footer {
            padding-top: 40px;
            padding-bottom: 16px;
          }
          .footer-grid {
            max-width: 1480px;
            grid-template-columns: 1.3fr 0.9fr 1.25fr 1.1fr;
            gap: 32px;
            padding-left: 40px;
            padding-right: 40px;
          }
          .footer-column {
            padding-right: 18px;
          }
          .footer-logo-img {
            height: 82px !important;
          }
          .footer-heading {
            font-size: 17px;
            margin-bottom: 14px;
          }
          .footer-heading::after {
            width: 56px;
            height: 3px;
          }
          .footer li,
          .footer-links a {
            font-size: 14.5px;
          }
          .footer-links li {
            margin-bottom: 8px;
          }
          .social-icon {
            width: 36px;
            height: 36px;
          }
          .footer-btn {
            font-size: 14px;
            padding: 8px 16px;
          }
          .footer-contact-box {
            border-radius: 18px;
            padding: 16px;
          }
          .contact-item {
            margin-bottom: 10px;
          }
          .footer-bottom {
            max-width: 1480px;
            margin-top: 22px;
            padding-left: 40px;
            padding-right: 40px;
          }
          .footer-bottom p {
            font-size: 14.5px;
          }
          .footer-compliance {
            max-width: 1480px;
            padding-left: 40px;
            padding-right: 40px;
            padding-top: 22px;
            margin-top: 20px;
          }
          .compliance-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
          .compliance-card {
            padding: 20px;
            border-radius: 14px;
          }
          .compliance-card-title {
            font-size: 12px;
          }
          .compliance-card-content {
            font-size: 12px;
          }
          .compliance-warning-box {
            font-size: 11px;
          }
          .footer-glow-top-right {
            width: 500px;
            height: 500px;
            top: -240px;
            right: -120px;
          }
        }


        /* ============================================================
           1920px – 2559px  (Full HD / 4K)
           ============================================================ */
        @media (min-width: 1920px) and (max-width: 2559px) {
          .footer {
            padding-top: 44px;
            padding-bottom: 18px;
          }
          .footer-grid {
            max-width: 1720px;
            grid-template-columns: 1.35fr 0.9fr 1.3fr 1.15fr;
            gap: 40px;
            padding-left: 48px;
            padding-right: 48px;
          }
          .footer-column {
            padding-right: 22px;
          }
          .footer-logo-img {
            height: 90px !important;
          }
          .footer-heading {
            font-size: 18px;
            margin-bottom: 15px;
          }
          .footer-heading::after {
            width: 60px;
            height: 3px;
            margin-top: 7px;
          }
          .footer li,
          .footer-links a {
            font-size: 15px;
          }
          .footer-links li {
            margin-bottom: 9px;
          }
          .social-icon {
            width: 38px;
            height: 38px;
          }
          .footer-btn {
            font-size: 14.5px;
            padding: 9px 18px;
            border-radius: 13px;
          }
          .footer-contact-box {
            border-radius: 20px;
            padding: 18px;
          }
          .contact-item {
            margin-bottom: 12px;
            gap: 10px;
          }
          .footer-bottom {
            max-width: 1720px;
            margin-top: 24px;
            padding-left: 48px;
            padding-right: 48px;
          }
          .footer-bottom p {
            font-size: 15px;
          }
          .footer-compliance {
            max-width: 1720px;
            padding-left: 48px;
            padding-right: 48px;
            padding-top: 24px;
            margin-top: 22px;
          }
          .compliance-grid {
            grid-template-columns: 1fr 1fr;
            gap: 48px;
          }
          .compliance-card {
            padding: 22px;
            border-radius: 16px;
          }
          .compliance-card-title {
            font-size: 12.5px;
            letter-spacing: 1.4px;
            margin-bottom: 14px;
          }
          .compliance-card-content {
            font-size: 12.5px;
          }
          .compliance-warning-box {
            font-size: 11.5px;
            padding: 8px 12px;
          }
          .footer-glow-top-right {
            width: 600px;
            height: 600px;
            top: -280px;
            right: -140px;
          }
          .verified-amfi-badge-pill {
            font-size: 9px;
            padding: 3px 8px;
          }
        }


        /* ============================================================
           2560px+  (Ultra-wide 4K / 5K)
           ============================================================ */
        @media (min-width: 2560px) {
          .footer {
            padding-top: 52px;
            padding-bottom: 22px;
          }
          .footer-grid {
            max-width: 2200px;
            grid-template-columns: 1.4fr 0.95fr 1.35fr 1.2fr;
            gap: 52px;
            padding-left: 60px;
            padding-right: 60px;
          }
          .footer-column {
            padding-right: 28px;
          }
          .footer-logo-img {
            height: 104px !important;
          }
          .footer-heading {
            font-size: 20px;
            margin-bottom: 16px;
          }
          .footer-heading::after {
            width: 68px;
            height: 3.5px;
            margin-top: 8px;
          }
          .footer li,
          .footer-links a {
            font-size: 16.5px;
          }
          .footer-links li {
            margin-bottom: 10px;
          }
          .social-icon {
            width: 44px;
            height: 44px;
          }
          .footer-btn {
            font-size: 16px;
            padding: 11px 22px;
            border-radius: 14px;
          }
          .footer-contact-box {
            border-radius: 22px;
            padding: 22px;
          }
          .contact-item {
            margin-bottom: 14px;
            gap: 12px;
          }
          .footer-bottom {
            max-width: 2200px;
            margin-top: 28px;
            padding-left: 60px;
            padding-right: 60px;
          }
          .footer-bottom p {
            font-size: 17px;
          }
          .footer-compliance {
            max-width: 2200px;
            padding-left: 60px;
            padding-right: 60px;
            padding-top: 28px;
            margin-top: 26px;
          }
          .compliance-grid {
            grid-template-columns: 1fr 1fr;
            gap: 60px;
          }
          .compliance-card {
            padding: 26px;
            border-radius: 18px;
          }
          .compliance-card-title {
            font-size: 14px;
            letter-spacing: 1.5px;
            margin-bottom: 16px;
          }
          .compliance-card-content {
            font-size: 14px;
          }
          .compliance-warning-box {
            font-size: 13px;
            padding: 10px 14px;
          }
          .footer-glow-top-right {
            width: 800px;
            height: 800px;
            top: -360px;
            right: -180px;
          }
          .quick-link-bullet {
            width: 6px;
            height: 6px;
          }
          .verified-amfi-badge-pill {
            font-size: 10px;
            padding: 4px 10px;
          }
          .pulse-indicator-dot {
            width: 8px;
            height: 8px;
          }
        }

      `}</style>

      {/* Main Grid Layout */}
      <div className="footer-grid">
        
        {/* Column 1: Branding — two sub-columns on mobile, single column on desktop */}
        <div className="footer-brand footer-column">

          {/* ── Left sub-col: Logo + ARN + APRN ── */}
          <div className="brand-left">
            <Link to="/" className="footer-logo-link">
              <img 
                src={`${import.meta.env.BASE_URL}Footerlogo.png`} 
                alt="Blueant Logo" 
                className="footer-logo-img object-contain" 
                style={{ filter: "drop-shadow(0 0 8px rgba(14, 165, 233, 0.25))" }}
              />
            </Link>
            <div className="text-[12px] text-[#94a3b8] leading-[1.6] flex flex-col gap-0.5 mt-1">
              <div>ARN: <span className="text-[#38bdf8] font-semibold">129543</span></div>
              <div>APRN: <span className="text-[#38bdf8] font-semibold">APRN04678</span></div>
            </div>
          </div>

          {/* ── Right sub-col: Blueant IMF LLP + LLPIN + IRDAI + Social ── */}
          <div className="brand-info">
            <strong className="text-slate-200 text-[18px] leading-tight block mb-2">Blueant IMF LLP</strong>
            <div className="text-[12px] text-[#94a3b8] leading-[1.6] flex flex-col gap-0.5">
              <span>LLPIN: <span className="text-[#38bdf8] font-semibold">ACD-1228</span></span>
              <span>IRDAI Reg. No.: <span className="text-[#38bdf8] font-semibold">IMF1776999</span></span>
            </div>
          </div>

          <div className="brand-social">
            {/* Social Icons */}
            <div className="flex gap-1 mt-3 flex-wrap">
              {socialLinks.map(({ Icon, url, label, color, hoverBg }, idx) => (
                <a 
                  key={idx} 
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="social-icon"
                  style={{ "--social-color": color, "--social-hover-bg": hoverBg }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* ─── Two-column row: Quick Links + Our Services ─── */}
        {/* On mobile this is a side-by-side row; on desktop display:contents lets them slot into the parent grid */}
        <div className="footer-links-row">

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-start w-full footer-links footer-column">
            <h3 className="footer-heading">QUICK LINKS</h3>
            <ul className="flex flex-col gap-0.5 items-start w-full">
              {quickLinks.map((link) => (
                <li key={link.name} className="w-full text-left">
                  <Link 
                    to={link.path} 
                    className="text-slate-300 font-semibold text-[14.5px] hover:text-[#38bdf8] flex items-center justify-start"
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
            <h3 className="footer-heading">OUR SERVICES</h3>
            <div className="footer-services w-full">
              <ul className="flex flex-col gap-0.5 items-start w-full">
                {serviceLinks.map((service) => (
                  <li key={service.name} className="w-full text-left">
                    <Link
                      to="/services"
                      state={{ selectedIndex: service.selectedIndex }}
                      className="text-slate-300 font-semibold text-[14.5px] hover:text-[#38bdf8] flex items-center justify-start"
                    >
                      <span className="quick-link-bullet shrink-0"></span>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>{/* end footer-links-row */}

        {/* Column 4: Contact Us Glass Panel */}
        <div className="flex flex-col items-start w-full footer-column">
          <h3 className="footer-heading">CONTACT US</h3>
          
          <div className="footer-contact-box w-full">
            <div className="dotted-world-map"></div>
            
            <div className="flex flex-col relative z-10">
              {/* Email */}
              <div className="contact-item">
                <div className="w-6 h-6 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 flex items-center justify-center text-[#38bdf8] shrink-0">
                  <Mail size={11} />
                </div>
                <div className="text-left">
                  <span className="text-slate-300 text-[8.5px] font-black uppercase block tracking-wider leading-none">Email Us</span>
                  <a href="mailto:info@blueantfinserv.com" className="text-white hover:text-[#38bdf8] text-[13.5px] font-bold transition-colors leading-none block mt-1">
                    info@blueantfinserv.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="contact-item">
                <div className="w-6 h-6 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 flex items-center justify-center text-[#38bdf8] shrink-0">
                  <Phone size={11} />
                </div>
                <div className="text-left">
                  <span className="text-slate-300 text-[8.5px] font-black uppercase block tracking-wider leading-none">Call Us</span>
                  <a href="tel:+919990218899" className="text-white hover:text-[#38bdf8] text-[13.5px] font-bold transition-colors leading-none block mt-1">
                    +91-9990218899
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="contact-item">
                <div className="w-6 h-6 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 flex items-center justify-center text-[#38bdf8] shrink-0">
                  <Globe size={11} />
                </div>
                <div className="text-left">
                  <span className="text-slate-300 text-[8.5px] font-black uppercase block tracking-wider leading-none">Visit Us</span>
                  <a href="https://www.blueantfinserv.com" target="_blank" rel="noreferrer" className="text-white hover:text-[#38bdf8] text-[13.5px] font-bold transition-colors leading-none block mt-1">
                    blueantfinserv.com
                  </a>
                </div>
              </div>

              {/* CTA */}
              <div className="border-t border-white/5 pt-2 mt-0.5">
                <p className="text-[11px] leading-relaxed text-slate-400 font-semibold mb-2">
                  Let's build your financial future together.
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

      {/* Compliance Block */}
      <div className="footer-compliance font-outfit">
        <div className="compliance-grid">
          
          <div className="compliance-card">
            <div className="compliance-card-title">
              <FileText size={13} className="text-[#38bdf8]" />
              Regulatory Disclosures
            </div>
            <div className="compliance-card-content flex flex-col gap-2.5">
              <div className="border-t border-white/5 pt-2.5">
                <strong className="text-slate-200 text-[11px]">AMC Commissions & Direct Plans</strong>
                <div className="compliance-disclosure-box">
                  <p>
                    "We are not an RIA and do not charge clients any advisory or service fees. Our compensation is received from Asset Management Companies (AMCs) for the distribution of their products."
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="compliance-card">
            <div className="compliance-card-title">
              <ShieldAlert size={13} className="text-[#38bdf8]" />
              Risks
            </div>
            <div className="compliance-card-content flex flex-col gap-2.5">
              <div className="border-t border-white/5 pt-2.5">
                <strong className="text-slate-200 text-[11px]">Market Risk Warning</strong>
                <div className="compliance-warning-box">
                  "Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Calculations are illustrative and for informational purposes only. We represent independent financial education."
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <div className="flex items-center justify-center gap-4 py-1.5 text-center text-[13px] w-full">
          <p className="text-slate-500 font-bold text-[13.5px]">
            © {currentYear} Blueant Finserv Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
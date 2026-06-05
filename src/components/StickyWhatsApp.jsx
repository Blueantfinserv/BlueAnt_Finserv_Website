import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "../styles/StickyWhatsApp.css";

import { openConsultationModal } from "./ConsultationModal";

function StickyWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [isAtFooter, setIsAtFooter] = useState(false);
  const location = useLocation();

  // ✅ All hooks must be called BEFORE any early return (Rules of Hooks)
  useEffect(() => {
    // Don't attach listeners on /about pages
    if (location.pathname.startsWith('/about')) {
      setVisible(false);
      return;
    }

    const onScroll = () => {
      // Show buttons after scrolling past the Hero section (approx 400px)
      setVisible(window.scrollY > 400);
    };

    // Observer to detect when footer is reached
    const footer = document.querySelector('footer');
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAtFooter(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (footer) observer.observe(footer);

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (footer) observer.unobserve(footer);
    };
  }, [location.pathname]); // re-run when route changes

  // ✅ Early return is now AFTER all hooks
  if (location.pathname.startsWith('/about')) {
    return null;
  }


  const showFabs = visible && !isAtFooter;
  const socialLinks = [
    { Icon: FaFacebookF, url: "https://www.facebook.com/blueantindia/", label: "Facebook", className: "sticky-fab-facebook" },
    { Icon: FaInstagram, url: "https://www.instagram.com/blueantindia/", label: "Instagram", className: "sticky-fab-instagram" },
    { Icon: FaXTwitter, url: "https://x.com/blueantfinserv", label: "X" },
    { Icon: FaLinkedinIn, url: "https://www.linkedin.com/in/rohit-raman-0aa69490/", label: "LinkedIn", className: "sticky-fab-linkedin" },
    { Icon: FaYoutube, url: "https://www.youtube.com/@RohitBlueant", label: "YouTube", className: "sticky-fab-youtube" },
  ];

  return (
    <div className={`sticky-fab-group ${showFabs ? "sticky-fab-visible" : ""}`}>
      {socialLinks.map(({ Icon, url, label, className = "" }) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`sticky-fab sticky-fab-social ${className}`}
          aria-label={label}
          title={label}
        >
          <Icon />
          <span className="sticky-fab-label">{label}</span>
        </a>
      ))}

      {/* Call Now */}
      <a
        href="tel:+919990218899"
        className="sticky-fab sticky-fab-call"
        aria-label="Call Now"
        title="Call Now"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
        </svg>
        <span className="sticky-fab-label">Call Now</span>
      </a>

      {/* Start Now CTA */}
      <button
        onClick={openConsultationModal}
        className="sticky-fab sticky-fab-primary"
        aria-label="Start Now"
        title="Start Now"
        style={{ border: 'none', cursor: 'pointer' }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
        <span className="sticky-fab-label">Start Now</span>
      </button>

      {/* WhatsApp */}
      <a
        href="https://wa.me/+919990218899?text=Hi%2C%20I%20need%20financial%20advice"
        target="_blank"
        rel="noopener noreferrer"
        className="sticky-fab sticky-fab-wa"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
        </svg>
        <span className="sticky-fab-label">WhatsApp</span>
      </a>
    </div>
  );
}

export default StickyWhatsApp;
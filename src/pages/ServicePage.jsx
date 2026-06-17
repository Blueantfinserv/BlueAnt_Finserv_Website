import React, { useEffect } from "react";
import { openConsultationModal } from "../components/ConsultationModal";

const ServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f8fbff 0%, #eef4ff 100%)',
      fontFamily: "'Outfit', sans-serif",
      padding: '120px 24px 60px',
      textAlign: 'center',
    }}>
      <div style={{
        background: 'rgba(0,175,239,0.08)',
        border: '1px solid rgba(0,175,239,0.2)',
        borderRadius: '99px',
        padding: '8px 20px',
        fontSize: '11px',
        fontWeight: 900,
        letterSpacing: '2px',
        textTransform: 'uppercase',
        color: '#00afef',
        marginBottom: '28px',
        display: 'inline-block',
      }}>Services</div>

      <h1 style={{
        fontSize: 'clamp(40px, 7vw, 80px)',
        fontWeight: 900,
        color: '#0f172a',
        lineHeight: 1,
        letterSpacing: '-2px',
        marginBottom: '20px',
      }}>
        Coming<br />
        <span style={{
          background: 'linear-gradient(135deg, #00afef, #2563eb)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>Soon.</span>
      </h1>

      <p style={{
        fontSize: '18px',
        color: '#64748b',
        maxWidth: '480px',
        lineHeight: 1.7,
        marginBottom: '40px',
        fontWeight: 500,
      }}>
        We're working on something great. In the meantime, feel free to reach out to us directly.
      </p>

      <button
        onClick={openConsultationModal}
        style={{
          background: 'linear-gradient(135deg, #00afef, #2563eb)',
          color: '#fff',
          border: 'none',
          borderRadius: '14px',
          padding: '16px 36px',
          fontSize: '15px',
          fontWeight: 800,
          cursor: 'pointer',
          letterSpacing: '-0.3px',
          boxShadow: '0 12px 30px rgba(37,99,235,0.25)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 18px 40px rgba(37,99,235,0.35)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(37,99,235,0.25)'; }}
      >
        Book Free Consultation →
      </button>
    </div>
  );
};

export default ServicePage;

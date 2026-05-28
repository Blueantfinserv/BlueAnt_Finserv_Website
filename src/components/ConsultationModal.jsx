import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/ConsultationModal.css';

export const openConsultationModal = () => {
  window.dispatchEvent(new Event('open-consultation-modal'));
};

const ConsultationModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('SIP');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    city: '',
    service: 'SIP / Mutual Funds'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setSubmitStatus(null);
    };
    window.addEventListener('open-consultation-modal', handleOpen);
    return () => window.removeEventListener('open-consultation-modal', handleOpen);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.whatsapp) {
      alert("Please fill in all required fields.");
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.whatsapp.replace(/\D/g, ''))) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    const submissionData = {
      access_key: 'e65bee15-4fca-4c4e-8af4-8656b0557d7c',
      subject: 'New Consultation Request - BlueAnt Finserv',
      ...formData,
      categoryTab: activeTab,
      timestamp: new Date().toISOString()
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(submissionData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', whatsapp: '', city: '', service: 'SIP / Mutual Funds' });
        setTimeout(() => {
          setIsOpen(false);
          setTimeout(() => setSubmitStatus(null), 500);
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="cm-overlay">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="cm-backdrop"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="cm-modal"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="cm-close-btn"
              aria-label="Close modal"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <AnimatePresence mode="wait">
              {submitStatus === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="cm-success-container"
                >
                  <div className="cm-success-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h3 className="cm-success-title">Request Sent!</h3>
                  <p className="cm-success-desc">Our expert will contact you within 24 hours.</p>
                </motion.div>
              ) : (
                <motion.div
                  key="form-content"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="cm-header">
                    <h2 className="cm-title">Book Free Consultation</h2>
                    <p className="cm-subtitle">Get an expert consultation within 24 hours.</p>
                  </div>

                  <div className="cm-tabs-container">
                    {['SIP', 'INSURANCE', 'WEALTH'].map((tab) => (
                      <button
                        key={tab}
                        type="button"
                        onClick={() => setActiveTab(tab)}
                        className={`cm-tab-btn ${activeTab === tab ? 'active' : ''}`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  <form className="cm-form" onSubmit={handleSubmit}>
                    <div className="cm-form-row">
                      <div className="cm-input-group">
                        <label className="cm-label">Full Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          className="cm-input"
                        />
                      </div>
                      <div className="cm-input-group">
                        <label className="cm-label">Email Address</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          className="cm-input"
                        />
                      </div>
                    </div>

                    <div className="cm-form-row">
                      <div className="cm-input-group">
                        <label className="cm-label">WhatsApp Number</label>
                        <input
                          type="tel"
                          required
                          value={formData.whatsapp}
                          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                          placeholder="10-digit mobile number"
                          className="cm-input"
                        />
                      </div>
                      <div className="cm-input-group">
                        <label className="cm-label">City / Location</label>
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="Mumbai, Maharashtra"
                          className="cm-input"
                        />
                      </div>
                    </div>

                    <div className="cm-input-group">
                      <label className="cm-label">Service Interested In</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="cm-select"
                      >
                        <option>SIP / Mutual Funds</option>
                        <option>Insurance Planning</option>
                        <option>Wealth Management</option>
                        <option>Tax Planning</option>
                        <option>Retirement Planning</option>
                      </select>
                    </div>

                    {submitStatus === 'error' && (
                      <div style={{ color: '#ef4444', fontSize: '14px', fontWeight: '600', textAlign: 'center', marginTop: '10px' }}>
                        Something went wrong. Please try again later.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="cm-submit-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '10px' }}>
                            <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                          </svg>
                          SUBMITTING...
                        </>
                      ) : (
                        <>GET PERSONALIZED GUIDANCE <span style={{ fontSize: '24px', marginLeft: '5px' }}>→</span></>
                      )}
                    </button>

                    <p className="cm-trust-text">
                      TRUSTED BY 50,000+ CUSTOMERS ACROSS INDIA
                    </p>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ConsultationModal;

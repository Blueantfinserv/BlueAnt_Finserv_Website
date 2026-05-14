import React, { useState } from 'react';
import "../styles/ConsultationForm.css";

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'SIP / Mutual Funds'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', phone: '', email: '', service: 'SIP / Mutual Funds' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="cf-section-inner">
      <div className="cf-container">
        <div className="cf-card" data-aos="fade-up">
          <div className="cf-header">
            <div className="cf-badge">FREE CONSULTATION</div>
            <h2 className="cf-title">Book Your Strategy Session</h2>
            <p className="cf-subtitle">Get an expert financial plan designed by our top advisors within 24 hours.</p>
          </div>

          {isSuccess ? (
            <div className="cf-success">
              <div className="cf-success-icon">✓</div>
              <h3>Thank You!</h3>
              <p>Our advisor will contact you within 24 hours.</p>
            </div>
          ) : (
            <form className="cf-form" onSubmit={handleSubmit}>
              <div className="cf-form-grid">
                <div className="cf-input-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="cf-manual-input"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="cf-input-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="cf-manual-input"
                    placeholder="10-digit mobile number"
                    required
                  />
                </div>

                <div className="cf-input-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="cf-manual-input"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="cf-input-group">
                  <label>Select Service</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="cf-manual-input"
                    required
                  >
                    <option>SIP / Mutual Funds</option>
                    <option>Insurance Planning</option>
                    <option>Wealth Management</option>
                    <option>Stock Trading</option>
                    <option>Other Query</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="cf-submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="cf-loader">Submitting...</span>
                ) : (
                  <>
                    GET FREE CONSULTATION
                    <svg className="cf-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </>
                )}
              </button>

              <div className="cf-footer-note">
                <span className="cf-trust-dot"></span>
                Trusted by 50,000+ investors across India
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConsultationForm;

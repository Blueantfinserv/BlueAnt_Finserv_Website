import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, Sparkles, ShieldCheck, User, Phone, Mail, LayoutGrid, CheckCircle2, BadgeAlert } from 'lucide-react';
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

    const submissionData = {
      access_key: 'e65bee15-4fca-4c4e-8af4-8656b0557d7c',
      subject: `New Advisor Inquiry - ${formData.service}`,
      ...formData,
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
        setIsSuccess(true);
        setFormData({ name: '', phone: '', email: '', service: 'SIP / Mutual Funds' });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Submission error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="cf-section-inner">
      <div className="cf-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="cf-card"
        >
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.div
                key="form-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="cf-split-grid"
              >
                {/* Left Column: Pure Educational Value Deck */}
                <div className="cf-info-deck">
                  <div className="cf-badge">
                    <Sparkles className="w-3.5 h-3.5 text-[#00afef] animate-pulse" />
                    <span>Free Advisory Session</span>
                  </div>
                  
                  <h2 className="cf-heading">
                    Pure Financial Guidance, <br />
                    <span className="cf-heading-gradient">No Sales Push.</span>
                  </h2>
                  
                  <p className="cf-desc">
                    We don't sell retail products or push commission-driven schedules. 
                    Our purpose is to educate you on long-term compounding models and build 
                    unbiased wealth strategies.
                  </p>

                  {/* Vercel-Style Fiduciary Compounding Widget */}
                  <div className="cf-mini-widget">
                    <div className="cf-widget-header">
                      <span className="cf-widget-title">Fiduciary Compounding Map</span>
                      <span className="cf-widget-stat">Zero Sales • Pure Math</span>
                    </div>
                    <div className="cf-widget-bar-group">
                      <div className="cf-widget-bar cf-bar-1"></div>
                      <div className="cf-widget-bar cf-bar-2"></div>
                      <div className="cf-widget-bar cf-bar-3"></div>
                    </div>
                  </div>

                  <div className="cf-promises-list">
                    <div className="cf-promise-item">
                      <div className="cf-promise-icon-box">
                        <ShieldCheck className="w-5 h-5 text-[#00afef]" />
                      </div>
                      <div className="cf-promise-text">
                        <h4 className="cf-promise-title">AMFI Registered Distributor</h4>
                        <p className="cf-promise-subtitle">
                          ARN-129543 compliant regulatory guidelines for mutual fund distribution.
                        </p>
                      </div>
                    </div>

                    <div className="cf-promise-item">
                      <div className="cf-promise-icon-box">
                        <Sparkles className="w-5 h-5 text-[#00afef]" />
                      </div>
                      <div className="cf-promise-text">
                        <h4 className="cf-promise-title">Zero Sales Pressure</h4>
                        <p className="cf-promise-subtitle">
                          Self-directed wealth education and mathematical calculations only.
                        </p>
                      </div>
                    </div>

                    <div className="cf-promise-item">
                      <div className="cf-promise-icon-box">
                        <LayoutGrid className="w-5 h-5 text-[#00afef]" />
                      </div>
                      <div className="cf-promise-text">
                        <h4 className="cf-promise-title">Custom Compounding Deck</h4>
                        <p className="cf-promise-subtitle">
                          Personalized compounding maps tailored to your financial timeline and targets.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Interactive Form Terminal */}
                <div className="cf-form-terminal-wrapper">
                  <div className="cf-terminal-header">
                    <h3 className="cf-terminal-title">Book Free Advisor Call</h3>
                    <p className="cf-terminal-subtitle">
                      Connect with our expert team for a complimentary long-term roadmap.
                    </p>
                  </div>

                  {/* High-Fidelity Advisor Status Board */}
                  <div className="cf-live-advisor-board">
                    <div className="cf-pulse-dot"></div>
                    <span className="cf-live-status-text">
                      <strong>5 Advisors Online</strong> • Ready to map compounding models
                    </span>
                  </div>

                  <form onSubmit={handleSubmit} className="cf-form-vertical-flow">
                    <div className="cf-input-group">
                      <label>Full Name</label>
                      <div className="cf-input-wrapper">
                        <User className="cf-input-icon" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="cf-field"
                          placeholder="Ex: Rajesh Kumar"
                          required
                        />
                      </div>
                    </div>

                    <div className="cf-input-group">
                      <label>Phone Number</label>
                      <div className="cf-input-wrapper">
                        <Phone className="cf-input-icon" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="cf-field"
                          placeholder="+91 00000 00000"
                          required
                        />
                      </div>
                    </div>

                    <div className="cf-input-group">
                      <label>Email Address</label>
                      <div className="cf-input-wrapper">
                        <Mail className="cf-input-icon" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="cf-field"
                          placeholder="name@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="cf-input-group">
                      <label>Interested Service</label>
                      <div className="cf-input-wrapper">
                        <LayoutGrid className="cf-input-icon" />
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="cf-field"
                        >
                          <option>SIP / Mutual Funds</option>
                          <option>Retirement Planning</option>
                          <option>Tax Saving (ELSS)</option>
                          <option>Child's Future Plan</option>
                          <option>Portfolio Management</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="cf-submit-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          />
                          <span>Securing Connection...</span>
                        </div>
                      ) : (
                        <>
                          <span>Get Expert Consultation</span>
                          <ArrowRight className="cf-arrow" size={22} />
                        </>
                      )}
                    </button>

                    <div className="cf-footer-note">
                      <div className="cf-trust-dot"></div>
                      <ShieldCheck className="w-4.5 h-4.5 text-[#10b981]" />
                      <span>Your data is end-to-end encrypted & private</span>
                    </div>
                  </form>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="success-message"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="cf-success"
              >
                <div className="cf-success-icon">
                  <CheckCircle size={40} />
                </div>
                <h3>Request Received!</h3>
                <p>Our senior advisor will contact you within the next <br /> <strong>2-4 business hours</strong>. Get ready to grow!</p>
                <div className="cf-success-regulatory">
                  BlueAnt Finserv • Fiduciary Wealth Advisors
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultationForm;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, Sparkles, ShieldCheck, User, Phone, Mail, LayoutGrid } from 'lucide-react';
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
    
    // Simulate industry-standard submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', phone: '', email: '', service: 'SIP / Mutual Funds' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1800);
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
              >
                <div className="cf-header">
                  <motion.div variants={fadeInUp} className="cf-badge">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Free Advisory Session</span>
                  </motion.div>
                  <motion.h2 variants={fadeInUp} className="cf-title">
                    Start Your Wealth <br /> Journey Today
                  </motion.h2>
                  <motion.p variants={fadeInUp} className="cf-subtitle">
                    Connect with our expert advisors for a personalized financial roadmap tailored to your goals.
                  </motion.p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="cf-form-grid">
                    <motion.div variants={fadeInUp} className="cf-input-group">
                      <label><User className="w-3 h-3 inline mr-1" /> Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="cf-manual-input" 
                        placeholder="Ex: Rajesh Kumar" 
                        required 
                      />
                    </motion.div>
                    
                    <motion.div variants={fadeInUp} className="cf-input-group">
                      <label><Phone className="w-3 h-3 inline mr-1" /> Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="cf-manual-input" 
                        placeholder="+91 00000 00000" 
                        required 
                      />
                    </motion.div>

                    <motion.div variants={fadeInUp} className="cf-input-group">
                      <label><Mail className="w-3 h-3 inline mr-1" /> Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="cf-manual-input" 
                        placeholder="name@email.com" 
                        required 
                      />
                    </motion.div>

                    <motion.div variants={fadeInUp} className="cf-input-group">
                      <label><LayoutGrid className="w-3 h-3 inline mr-1" /> Interested Service</label>
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="cf-manual-input"
                      >
                        <option>SIP / Mutual Funds</option>
                        <option>Retirement Planning</option>
                        <option>Tax Saving (ELSS)</option>
                        <option>Child's Future Plan</option>
                        <option>Portfolio Management</option>
                      </select>
                    </motion.div>
                  </div>

                  <motion.button 
                    variants={fadeInUp}
                    type="submit" 
                    className="cf-submit-btn"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
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
                  </motion.button>

                  <motion.div variants={fadeInUp} className="cf-footer-note">
                    <div className="cf-trust-dot"></div>
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>Your data is end-to-end encrypted & private</span>
                  </motion.div>
                </form>
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
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultationForm;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/ContactUs.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
  FaChevronRight,
} from 'react-icons/fa';
import { submitContactForm } from "../utils/api";

const ContactUs = () => {
  const [activeTab, setActiveTab] = useState('SIP');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    service_type: 'SIP'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showErrorFallback, setShowErrorFallback] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      tempErrors.name = "Minimum 2 characters";
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone is required";
    } else if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      tempErrors.phone = "Exactly 10 digits required";
    }

    if (!formData.city.trim()) {
      tempErrors.city = "City is required";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (!validateForm()) return;

    try {
      setIsSubmitting(true);
      setShowErrorFallback(false);

      const payload = {
        access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        service: activeTab,
        subject: `New Consultation Request from ${formData.name}`,
        from_name: "BlueAnt Finserv",
        replyto: formData.email,
        message: `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
City: ${formData.city}
Service: ${activeTab}
        `,
        autoresponse: `
Hi ${formData.name},

Thank you for contacting BlueAnt Finserv.

Our advisor will contact you within 24 hours.

Regards,
BlueAnt Finserv Team
        `
      };

      await submitContactForm(payload);
      
      setIsSuccess(true);
      setShowErrorFallback(false);
    } catch (error) {
      console.error("WEB3 SUBMISSION FAILED:", error);
      setShowErrorFallback(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsAppFallback = () => {
    const message = `Hi BlueAnt Team, I'd like to book a ${activeTab} consultation.\n\nDetails:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCity: ${formData.city}\nService: ${activeTab}`;
    window.open(`https://wa.me/919990218899?text=${encodeURIComponent(message)}`, '_blank');
  };

  const openEmailFallback = () => {
    const subject = `Consultation Request: ${activeTab} - ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCity: ${formData.city}\nInterest: ${activeTab}`;
    window.location.href = `mailto:care@blueantindia.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cu-wrapper">
      <header className="cu-hero">
        <div className="cu-hero-overlay"></div>
        <div className="cu-hero-content" data-aos="fade-down">
          <h1>Contact Us</h1>
          <div className="cu-breadcrumbs">
            <Link to="/">Home</Link>
            <FaChevronRight className="cu-breadcrumb-sep" />
            <span className="active">GET IN TOUCH</span>
          </div>
        </div>
      </header>

      <section className="cu-main-section">
        <div className="cu-container">
          <div className="cu-grid">
            <div className="cu-info-col" data-aos="fade-right">
              <span className="cu-tag">CONNECT WITH US</span>
              <h2 className="cu-heading">
                READY TO SECURE <br />
                <span className="cu-highlight">YOUR FINANCIAL FUTURE</span>
              </h2>
              <p className="cu-subtext">
                Our team provides expert guidance for seamless wealth management support. 
                Reach out today to architect your future.
              </p>

              <div className="cu-contact-boxes">
                <a href="tel:+919990218899" className="cu-contact-box dark">
                  <div className="cu-cb-icon"><FaPhoneAlt /></div>
                  <div className="cu-cb-text">
                    <label>CALL EXPERT</label>
                    <span className="cu-cb-link">+91 999-021-8899</span>
                  </div>
                </a>
                <a href="mailto:care@blueantindia.com" className="cu-contact-box dark">
                  <div className="cu-cb-icon"><FaEnvelope /></div>
                  <div className="cu-cb-text">
                    <label>EMAIL US</label>
                    <span className="cu-cb-link">care@blueantindia.com</span>
                  </div>
                </a>
                <div className="cu-contact-box dark full">
                  <div className="cu-cb-icon"><FaClock /></div>
                  <div className="cu-cb-text">
                    <label>SERVICE HOURS</label>
                    <span>Mon - Sat: 10:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="cu-address-grid">
                <div className="cu-addr-card">
                  <h4><FaMapMarkerAlt /> CORPORATE OFFICE</h4>
                  <p>H-122, 2nd Floor, <br /> Sector-63, Noida, Uttar Pradesh-201301</p>
                  <a href="https://www.google.com/maps/place/28%C2%B037'40.9%22N+77%C2%B022'43.9%22E/@28.6280253,77.3762818,17z" target="_blank" rel="noreferrer">Map View →</a>
                </div>
                <div className="cu-addr-card">
                  <h4><FaWhatsapp /> WHATSAPP SUPPORT</h4>
                  <p>Direct support via WhatsApp <br /> for quick queries.</p>
                  <a href="https://wa.me/919990218899" target="_blank" rel="noreferrer">+91 999-021-8899 →</a>
                </div>
              </div>
            </div>

            <div className="cu-form-col" data-aos="fade-left">
              <div className="cu-form-card">
                {isSuccess ? (
                  <div className="cu-success-view">
                    <div className="cu-success-icon">✓</div>
                    <h3>Welcome to the BlueAnt Family!</h3>
                    <p>Hi <strong>{formData.name || 'there'}</strong>, we're thrilled to help you on your wealth journey.</p>
                    <p className="cu-success-sub">Our expert advisor will reach out to you within 24 hours to discuss your interest in <strong>{activeTab}</strong> and help you build a robust financial plan.</p>
                    
                    <div className="cu-success-actions">
                      <a 
                        href={`https://wa.me/919990218899?text=Hi BlueAnt Team, I just booked a ${activeTab} consultation. My name is ${formData.name}. Looking forward to connecting!`} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="cu-success-wa-btn"
                      >
                        <FaWhatsapp /> Get Instant WhatsApp Welcome
                      </a>
                      <button type="button" onClick={() => {
                        setIsSuccess(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          city: '',
                          service_type: activeTab
                        });
                      }} className="cu-reset-btn">
                        Submit Another Request
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <h3>Book Free Consultation</h3>
                    <p>Get an expert consultation within 24 hours.</p>

                    <div className="cu-form-tabs">
                      {['SIP', 'INSURANCE', 'WEALTH'].map((tab) => (
                        <button 
                          key={tab}
                          type="button"
                          className={activeTab === tab ? 'active' : ''} 
                          onClick={() => {
                            setActiveTab(tab);
                            setFormData(prev => ({ ...prev, service_type: tab }));
                          }}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>

                    <form className="cu-actual-form" onSubmit={handleSubmit}>
                      <div className="cu-form-row">
                        <div className="cu-field">
                          <label>YOUR NAME</label>
                          <input 
                            type="text" 
                            name="name" 
                            placeholder="Full Name" 
                            value={formData.name}
                            onChange={handleInputChange}
                            required 
                            spellCheck="false"
                          />
                          {errors.name && <span className="cu-error-hint" style={{color: '#ef4444', fontSize: '11px', fontWeight: 'bold'}}>{errors.name}</span>}
                        </div>
                        <div className="cu-field">
                          <label>EMAIL ADDRESS</label>
                          <input 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            value={formData.email}
                            onChange={handleInputChange}
                            required 
                            spellCheck="false"
                          />
                          {errors.email && <span className="cu-error-hint" style={{color: '#ef4444', fontSize: '11px', fontWeight: 'bold'}}>{errors.email}</span>}
                        </div>
                      </div>
                      <div className="cu-form-row">
                        <div className="cu-field">
                          <label>WHATSAPP NO.</label>
                          <input 
                            type="tel" 
                            name="phone" 
                            placeholder="Phone Number" 
                            value={formData.phone}
                            onChange={handleInputChange}
                            required 
                          />
                          {errors.phone && <span className="cu-error-hint" style={{color: '#ef4444', fontSize: '11px', fontWeight: 'bold'}}>{errors.phone}</span>}
                        </div>
                        <div className="cu-field">
                          <label>CITY / LOCATION</label>
                          <input 
                            type="text" 
                            name="city" 
                            placeholder="Your City" 
                            value={formData.city}
                            onChange={handleInputChange}
                            required 
                            spellCheck="false"
                          />
                          {errors.city && <span className="cu-error-hint" style={{color: '#ef4444', fontSize: '11px', fontWeight: 'bold'}}>{errors.city}</span>}
                        </div>
                      </div>
                      <div className="cu-field">
                        <label>SERVICE INTERESTED IN</label>
                        <select 
                          name="service_type" 
                          value={formData.service_type}
                          onChange={handleInputChange}
                        >
                          <option value="SIP">SIP / Mutual Funds</option>
                          <option value="Insurance">Insurance Planning</option>
                          <option value="Stocks">Stocks & Equity</option>
                          <option value="Wealth">Wealth Management</option>
                          <option value="Other">Other Query</option>
                        </select>
                      </div>
                      
                      {showErrorFallback && (
                        <div className="cu-error-box">
                          <p className="cu-error-msg">Something went wrong. Please use an alternative below:</p>
                          <div className="cu-error-actions">
                            <button type="button" onClick={openEmailFallback} className="cu-direct-submit-btn">
                              Send via Email App →
                            </button>
                            <a href="#" onClick={(e) => { e.preventDefault(); openWhatsAppFallback(); }} className="cu-error-wa-link">
                              Chat on WhatsApp →
                            </a>
                          </div>
                        </div>
                      )}

                      <button type="submit" className="cu-submit-btn" disabled={isSubmitting}>
                        {isSubmitting ? 'SUBMITTING...' : 'GET FREE CONSULTATION →'}
                      </button>
                      <span className="cu-trust-note">TRUSTED BY 50,000+ CUSTOMERS ACROSS INDIA</span>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cu-hq-section" data-aos="fade-up">
        <h3>VISIT OUR HQ</h3>
        <p>H-122, 2nd Floor, Sector-63, Noida, Uttar Pradesh-201301</p>
        <a 
          href="https://www.google.com/maps/place/28%C2%B037'40.9%22N+77%C2%B022'43.9%22E/@28.6280253,77.3762818,17z" 
          target="_blank" 
          rel="noreferrer" 
          className="cu-maps-btn"
        >
          Open in Google Maps <FaMapMarkerAlt style={{marginLeft: '8px'}} />
        </a>
      </section>
    </div>
  );
};

export default ContactUs;

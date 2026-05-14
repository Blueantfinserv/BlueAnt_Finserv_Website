import React from 'react';
import { ShieldCheck, Users, Lock } from 'lucide-react';
import "../styles/Youtube.css";

const Youtube = () => {
  return (
    <section className="youtube-section">
      {/* Premium Noise Texture Overlay */}
      <div className="noise-texture"></div>

      {/* Floating Background Elements */}
      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>
      <div className="bg-shape shape-3"></div>
      <div className="bg-graph"></div>

      <div className="youtube-container">
        <div className="content">
          <h1>
            Secure Your Financial <br />
            <span className="youtube-headline-accent">Freedom Today</span>
          </h1>
          <p>
            Join over 50,000+ investors building their wealth with Blueant Finserv. Experience smart, transparent financial solutions. Open an account for free.
          </p>
          
          <div className="cta-wrapper">
            <a href="https://www.youtube.com/@RohitBlueant" className="contact-btn">Start Investing</a>
            
            {/* Small Trust Badges */}
            <div className="trust-pills">
              <div className="trust-pill">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>SEBI Registered</span>
              </div>
              <div className="trust-pill">
                <Users className="w-3.5 h-3.5 text-blue-400" />
                <span>50,000+ Investors</span>
              </div>
              <div className="trust-pill">
                <Lock className="w-3.5 h-3.5 text-indigo-400" />
                <span>Secure Platform</span>
              </div>
            </div>
          </div>
        </div>

        <div className="video-wrapper">
          {/* Floating Luxury Glow */}
          <div className="video-glow-effect"></div>
          
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/Mu6EV8TAEyI?rel=0"
              title="Financial Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Youtube;

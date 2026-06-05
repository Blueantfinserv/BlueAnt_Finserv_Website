import React, { useState } from 'react';
import { ShieldCheck, Users, Lock, Tv, ExternalLink } from 'lucide-react';
import "../styles/Youtube.css";

const Youtube = () => {
  const [isPlaying, setIsPlaying] = useState(false);

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
            Plan Your Long-term <br />
            <span className="youtube-headline-accent">Wealth Today</span>
          </h1>
          <p>
            Join over 3,000+ families building their wealth with Blueant Finserv. Experience suitable financial solutions with a transparent process. Open an account for free.
          </p>
          
          <div className="cta-wrapper">
            <a href="https://www.youtube.com/@RohitBlueant" className="contact-btn">Start Investing</a>
            
            {/* Small Trust Badges */}
          </div>
        </div>

        <div className="video-wrapper">
          {/* Floating Luxury Glow */}
          <div className="video-glow-effect"></div>
          
          {/* Video container */}
          <div className="video-container">

            {!isPlaying ? (
              <div 
                className="youtube-cover-container"
                onClick={() => setIsPlaying(true)}
              >
                <img 
                  src="https://img.youtube.com/vi/Mu6EV8TAEyI/maxresdefault.jpg" 
                  alt="Video Thumbnail"
                  className="youtube-cover-image" 
                />
                <div className="youtube-play-button-overlay">
                  <div className="youtube-play-button-pulse"></div>
                  <div className="youtube-play-button-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
              </div>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/Mu6EV8TAEyI?autoplay=1&rel=0"
                title="Financial Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Youtube;

import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ServiceSlider.css";

const services = [
  {
    title: "Taxes",
    desc: "Pay taxes smartly—use deductions, file timely, consult experts, save more.",
    image: "taxes service-2.png"
  },
  {
    title: "Loan Advisory",
    desc: "Loans empower when chosen wisely—compare, consult, and borrow smartly.",
    image: "LOAN ADVISORY Need service-6.png"
  },
  {
    title: "Budgeting",
    desc: "Budget wisely—track spending, set limits, adjust habits, reach goals.",
    image: "Budgeting service-3.png"
  },
  {
    title: "Kid's Needs",
    desc: "Plan early—use SIPs, education plans, insurance for stress-free future.",
    image: "Kids Need service-4.png"
  },
  {
    title: "Retirement",
    desc: "Plan retirement early—invest steadily, beat inflation, ensure lifelong comfort.",
    image: "Retirement service-1.png"
  },
  {
    title: "Insurance Advisory",
    desc: "Start early, save regularly, and invest wisely in your protection.",
    image: "Insurance Advisory Need service-7.png"
  },
  {
    title: "Will & Legacy",
    desc: "Plan wisely—write a will, assign nominees, protect your legacy.",
    image: "WILL & LEGACY Need service-5.png"
  },
  {
    title: "Investing",
    desc: "Invest smart, diversify, stay consistent, review goals, build freedom.",
    image: "Investing for financial freedom  service-8.png"
  }
];

const total = services.length;

const ServiceSlider = () => {
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const animationRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const animate = () => {
      if (!isHovered) {
        setRotation((prev) => (prev + 0.4) % 360);
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [isHovered]);

  const radius = window.innerWidth * 0.39;
  const baseWidth = window.innerWidth * 0.29;
  const baseHeight = baseWidth * 0.475;
  const minScale = 0.5;

  const handleClick = (index) => {
    navigate("/service", { state: { selectedIndex: index } });
  };

  return (
    <div className="service-slider-container">
      <div className="service-slider-carousel">
        <div className="service-slider-heading">
          <span className="service-slider-label">SERVICE</span>
          <p>Empowering You with the Right Services</p>
        </div>

        <div
          className="service-slider-slides"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {services.map((service, i) => {
            const angleDeg = (360 / total) * i + rotation;
            const angleRad = (angleDeg * Math.PI) / 180;

            const x = radius * Math.sin(angleRad);
            const z = radius * Math.cos(angleRad);
            const baseScale = ((z + radius) / (2 * radius)) * (1 - minScale) + minScale;
            const scale = hoveredIndex === i ? baseScale * 1.3 : baseScale;
            const opacity = ((z + radius) / (2 * radius)) * 0.7 + 0.3;
            const zIndex = Math.round(scale * 100);

            return (
              <div
                key={i}
                className="service-slider-slide"
                style={{
                  transform: `translateX(${x}px) translateZ(${z}px) scale(${scale})`,
                  opacity,
                  zIndex,
                  width: `${baseWidth}px`,
                  height: `${baseHeight}px`,
                  transition: "transform 0.3s ease, opacity 0.3s ease",
                }}
              >
                <div
                  className="service-slider-img-wrapper"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => handleClick(i)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-slider-img"
                    draggable={false}
                  />
                  <div className="service-slider-content-overlay">
                    <h3 className="service-slider-title">{service.title}</h3>
                    <p className="service-slider-desc">{service.desc}</p>
                    <button className="service-slider-btn">Read More</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceSlider;

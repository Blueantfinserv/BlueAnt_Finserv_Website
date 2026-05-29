import React from "react";
import { Users, Shield, Search, ShieldCheck, Sprout } from "lucide-react";
import "../styles/ValuesDiagram.css";

const points = [
  { label: "TRUST", angle: 270, icon: <Users size={24} strokeWidth={1.5} /> },
  { label: "DISCIPLINE", angle: 342, icon: <Shield size={24} strokeWidth={1.5} /> },
  { label: "CLARITY", angle: 54, icon: <Search size={24} strokeWidth={1.5} /> },
  { label: "PROTECTION", angle: 126, icon: <ShieldCheck size={24} strokeWidth={1.5} /> },
  { label: "GROWTH", angle: 198, icon: <Sprout size={24} strokeWidth={1.5} /> },
];

const ValuesDiagram = () => {
  return (
    <div className="values-diagram-wrapper" data-aos="zoom-in" data-aos-delay="200">
      <div className="values-diagram-container">
        
        {/* Orbit Ring */}
        <div className="orbit-ring">
          {points.map((point, idx) => (
            <div
              key={idx}
              className="orbit-node-container"
              style={{
                transform: `rotate(${point.angle}deg) translate(240px)`,
              }}
            >
              <div className="orbit-dot" />
              <div className="node-counter-spin">
                <div
                  className="node-content-upright"
                  style={{
                    transform: `rotate(-${point.angle}deg)`,
                  }}
                >
                  <div className="node-icon">{point.icon}</div>
                  <span className="node-label">{point.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Center Circle */}
        <div className="center-circle">
          <div className="center-circle-inner">
            <img
              src={`${import.meta.env.BASE_URL}Ant (1).gif`}
              alt="Blueant animated ant"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ValuesDiagram;

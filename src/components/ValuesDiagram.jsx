import React from "react";
import { User, BarChart2, Target, Shield, Leaf } from "lucide-react";
import "../styles/ValuesDiagram.css";

const ValuesDiagram = () => {
  return (
    <div className="values-diagram-container" data-aos="zoom-in" data-aos-delay="200">
      {/* Center Circle */}
      <div className="center-circle">
        <div className="center-circle-inner">
          <h3 className="center-brand">blueant</h3>
          <p className="center-subtitle">FINANCIAL SERVICES</p>
        </div>
      </div>

      {/* Orbit Ring */}
      <div className="orbit-ring">
        {/* Nodes */}
        <div className="orbit-node node-trust">
          <div className="node-icon">
            <User className="w-5 h-5 text-[#1e3a8a]" />
          </div>
          <span className="node-label">TRUST</span>
        </div>

        <div className="orbit-node node-wealth">
          <div className="node-icon">
            <BarChart2 className="w-5 h-5 text-[#1e3a8a]" />
          </div>
          <span className="node-label">WEALTH</span>
        </div>

        <div className="orbit-node node-goal">
          <div className="node-icon">
            <Target className="w-5 h-5 text-[#1e3a8a]" />
          </div>
          <span className="node-label">GOAL</span>
        </div>

        <div className="orbit-node node-discipline">
          <div className="node-icon">
            <Shield className="w-5 h-5 text-[#1e3a8a]" />
          </div>
          <span className="node-label">DISCIPLINE</span>
        </div>

        <div className="orbit-node node-growth">
          <div className="node-icon">
            <Leaf className="w-5 h-5 text-[#1e3a8a]" />
          </div>
          <span className="node-label">GROWTH</span>
        </div>
      </div>
    </div>
  );
};

export default ValuesDiagram;

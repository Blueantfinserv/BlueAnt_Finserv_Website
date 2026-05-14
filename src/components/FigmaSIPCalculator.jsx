import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import "../styles/FigmaSIPCalculator.css";

// 🚀 Animated Counter Helper for that "Expensive Product" feel
const AnimatedNumber = ({ value, formatter }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const prevValue = useRef(0);

  useEffect(() => {
    let start = prevValue.current;
    const end = value;
    const duration = 800; // ms
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // EaseOut Expo for premium feel
      const easeProgress = 1 - Math.pow(2, -10 * progress);
      const current = start + (end - start) * easeProgress;
      
      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        prevValue.current = end;
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  return <span>{formatter(displayValue)}</span>;
};

import { openConsultationModal } from "./ConsultationModal";

export default function FigmaSIPCalculator() {
  const [monthly, setMonthly] = useState(5000);
  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(12);
  const [totalInvested, setTotalInvested] = useState(0);
  const [estimatedReturns, setEstimatedReturns] = useState(0);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const P = monthly;
    const r = rate / 100 / 12;
    const n = years * 12;

    const total = P * n;
    setTotalInvested(total);

    const fv = P * ((Math.pow(1 + r, n) - 1) * (1 + r)) / r;
    setEstimatedReturns(fv - total);

    const data = [];
    for (let i = 1; i <= years; i++) {
      const currentMonths = i * 12;
      const currentInvested = P * currentMonths;
      const currentFv = P * ((Math.pow(1 + r, currentMonths) - 1) * (1 + r)) / r;
      data.push({
        year: i,
        Invested: Math.round(currentInvested),
        Returns: Math.round(currentFv - currentInvested),
        total: Math.round(currentFv)
      });
    }
    setChartData(data);
  }, [monthly, years, rate]);

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(Math.round(val));
  };

  const formatAxis = (val) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(1)}Cr`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(1)}L`;
    if (val >= 1000) return `₹${(val / 1000).toFixed(0)}K`;
    return `₹${val}`;
  };

  const totalValue = totalInvested + estimatedReturns;

  return (
    <section className="f-sip-section">
      <div className="f-sip-noise"></div>
      
      <div className="f-sip-header">
        <div className="f-sip-icon-wrapper">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
            <polyline points="16 7 22 7 22 13"></polyline>
          </svg>
        </div>
        <h2 className="f-sip-title">SIP Calculator</h2>
        <p className="f-sip-subtitle">
          Plan your wealth creation journey with our professional-grade investment tool. 
          Analyze market projections and compound growth at a glance.
        </p>
      </div>

      <div className="f-sip-container">
        {/* 1. Investment Parameters */}
        <div className="f-sip-card f-sip-inputs-card">
          <h3 className="f-sip-card-title">Investment Parameters</h3>
          
          <div className="f-sip-input-group">
            <label className="f-sip-label-row">Monthly Investment (₹)</label>
            <input
              type="number"
              value={monthly || ""}
              onChange={(e) => setMonthly(Number(e.target.value))}
              className="f-sip-manual-input"
            />
          </div>

          <div className="f-sip-input-group">
            <label className="f-sip-label-row">Expected Return (% p.a.)</label>
            <input
              type="number"
              value={rate || ""}
              onChange={(e) => setRate(Number(e.target.value))}
              className="f-sip-manual-input"
            />
          </div>

          <div className="f-sip-input-group">
            <label className="f-sip-label-row">Investment Period (Years)</label>
            <input
              type="number"
              value={years || ""}
              onChange={(e) => setYears(Number(e.target.value))}
              className="f-sip-manual-input"
            />
          </div>
        </div>

        {/* 2. Growth Projection Chart */}
        <div className="f-sip-card f-sip-chart-card">
          <div className="f-sip-chart-header">
            <h3 className="f-sip-card-title">Growth Projection</h3>
            <div className="f-sip-live-badge">
              <span className="f-sip-live-dot"></span>
              Live SIP Projection
            </div>
            <div className="f-sip-cagr-pill">{rate}% Expected CAGR</div>
          </div>
          <div className="f-sip-chart-wrapper">
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={chartData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorInvested" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.25}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorReturns" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.25}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="year" tickLine={false} axisLine={false} tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }} dy={10} />
                <YAxis tickFormatter={formatAxis} tickLine={false} axisLine={false} tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }} />
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '16px', 
                    border: '1px solid rgba(255,255,255,0.1)', 
                    background: '#0f172a',
                    color: '#fff'
                  }}
                  itemStyle={{ fontWeight: 700, fontSize: '13px' }}
                  labelStyle={{ marginBottom: '8px', color: '#94a3b8', fontSize: '12px' }}
                  formatter={(value) => [formatCurrency(value), '']}
                  labelFormatter={(label) => `Year ${label}`}
                />
                <Legend 
                  verticalAlign="top" 
                  align="right" 
                  iconType="circle"
                  iconSize={8}
                  wrapperStyle={{ paddingBottom: '20px', fontSize: '12px', fontWeight: 700, opacity: 0.8 }}
                />
                <Area type="monotone" name="Invested" dataKey="Invested" stackId="1" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorInvested)" animationDuration={1000} />
                <Area type="monotone" name="Returns" dataKey="Returns" stackId="1" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorReturns)" animationDuration={1000} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          {/* 💎 Elite High-Impact Summary */}
          <div className="f-sip-chart-summary">
            <span className="f-sip-summary-label">Estimated portfolio value after {years} years</span>
            <div className="f-sip-summary-val">
              <AnimatedNumber value={totalValue} formatter={formatCurrency} />
            </div>
          </div>
        </div>

        {/* 3. Metrics Section */}
        <div className="f-sip-results-row">
          <div className="f-sip-result-box f-sip-blue">
            <span className="f-sip-res-label">Invested</span>
            <h4 className="f-sip-res-val">
              <AnimatedNumber value={totalInvested} formatter={formatCurrency} />
            </h4>
            <span className="f-sip-res-subtext">Total contribution</span>
          </div>

          <div className="f-sip-result-box f-sip-green">
            <span className="f-sip-res-label">Returns</span>
            <h4 className="f-sip-res-val">
              <AnimatedNumber value={estimatedReturns} formatter={formatCurrency} />
            </h4>
            <span className="f-sip-res-subtext">Market growth</span>
          </div>

          <div className="f-sip-result-box f-sip-purple">
            <span className="f-sip-res-label">Total Value</span>
            <h4 className="f-sip-res-val">
              <AnimatedNumber value={totalValue} formatter={formatCurrency} />
            </h4>
            <span className="f-sip-res-subtext">Projected maturity amount</span>
          </div>
        </div>

        {/* 4. Expert Insights & CTA */}
        <div className="f-sip-card f-sip-info-card">
          <div className="f-sip-insights-content">
            <h3 className="f-sip-card-title">Expert Insights</h3>
            <div className="f-sip-info-list">
              <div className="f-sip-info-item">
                <div className="f-sip-info-num">1</div>
                <div className="f-sip-info-text">
                  <h4>Compounding Mastery</h4>
                  <p>Exponential growth by reinvesting market returns.</p>
                </div>
              </div>
              <div className="f-sip-info-item">
                <div className="f-sip-info-num">2</div>
                <div className="f-sip-info-text">
                  <h4>Timing Shield</h4>
                  <p>Average out costs across all market cycles.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="f-sip-cta-wrapper">
            <button 
              onClick={openConsultationModal} 
              className="f-sip-action-btn"
            >
              Start Wealth Journey
            </button>
            <div className="f-sip-trust-strip">
              100% Secure • Free Consultation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { TrendingUp, Shield, Sparkles, DollarSign, Percent, Calendar } from "lucide-react";
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



export default function FigmaSIPCalculator() {
  const [monthly, setMonthly] = useState(5000);
  const [years, setYears] = useState(25);
  const [rate, setRate] = useState(12);
  const [totalInvested, setTotalInvested] = useState(0);
  const [estimatedReturns, setEstimatedReturns] = useState(0);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const P = monthly || 0;
    const r = (rate || 0) / 100 / 12;
    const n = (years || 0) * 12;

    const total = P * n;
    setTotalInvested(total);

    let fv = total;
    if (r > 0 && n > 0) {
      fv = P * ((Math.pow(1 + r, n) - 1) * (1 + r)) / r;
    }
    setEstimatedReturns(fv - total);

    const data = [];
    if (years === 0) {
      data.push({ year: 0, Invested: 0, Returns: 0, total: 0 });
    } else {
      for (let i = 1; i <= years; i++) {
        const currentMonths = i * 12;
        const currentInvested = P * currentMonths;
        let currentFv = currentInvested;
        if (r > 0) {
          currentFv = P * ((Math.pow(1 + r, currentMonths) - 1) * (1 + r)) / r;
        }
        data.push({
          year: i,
          Invested: Math.round(currentInvested),
          Returns: Math.round(currentFv - currentInvested),
          total: Math.round(currentFv)
        });
      }
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
        {/* Elite upper floating badge */}
        <div className="f-sip-top-badge" data-aos="fade-down">
          <Sparkles className="w-3.5 h-3.5 text-[#00afef] animate-pulse" />
          <span>Interactive Compounding Engine</span>
        </div>

        <h2 className="f-sip-title" data-aos="fade-up">
          Illustrative <span className="f-sip-title-gradient">SIP Calculator</span>
        </h2>
        
        <p className="f-sip-subtitle" data-aos="fade-up" data-aos-delay="100">
          Plan your wealth creation journey with our professional-grade investment tool. 
          Analyze market projections and disciplined growth at a glance.
        </p>
      </div>

      <div className="f-sip-container">
        {/* 1. Investment Parameters */}
        <div className="f-sip-card f-sip-inputs-card">
          <h3 className="f-sip-card-title">Investment Parameters</h3>
          
          {/* Monthly Investment Input + Synced Range Slider */}
          <div className="f-sip-input-group">
            <div className="f-sip-input-meta">
              <label className="f-sip-label-row">Monthly Investment</label>
              <span className="f-sip-live-indicator">{formatCurrency(monthly)}</span>
            </div>
            <div className="f-sip-input-container">
              <input
                type="number"
                min="0"
                max="1000000"
                value={monthly === 0 ? 0 : (monthly || "")}
                onChange={(e) => setMonthly(Number(e.target.value))}
                className="f-sip-manual-input"
              />
              <span className="f-sip-input-unit">₹/mo</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="200000" 
              step="500" 
              value={monthly || 0} 
              onChange={(e) => setMonthly(Number(e.target.value))}
              className="f-sip-range-slider"
            />
          </div>

          {/* Assumed Return Input + Synced Range Slider */}
          <div className="f-sip-input-group">
            <div className="f-sip-input-meta">
              <label className="f-sip-label-row">Assumed Return (% p.a.)</label>
              <span className="f-sip-live-indicator">{rate}%</span>
            </div>
            <div className="f-sip-input-container">
              <input
                type="number"
                min="0"
                max="30"
                step="0.1"
                value={rate === 0 ? 0 : (rate || "")}
                onChange={(e) => setRate(Number(e.target.value))}
                className="f-sip-manual-input"
              />
              <span className="f-sip-input-unit">% p.a.</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="30" 
              step="0.5" 
              value={rate || 0} 
              onChange={(e) => setRate(Number(e.target.value))}
              className="f-sip-range-slider"
            />
          </div>

          {/* Investment Period Input + Synced Range Slider */}
          <div className="f-sip-input-group">
            <div className="f-sip-input-meta">
              <label className="f-sip-label-row">Investment Period</label>
              <span className="f-sip-live-indicator">{years} Years</span>
            </div>
            <div className="f-sip-input-container">
              <input
                type="number"
                min="0"
                max="40"
                value={years === 0 ? 0 : (years || "")}
                onChange={(e) => setYears(Number(e.target.value))}
                className="f-sip-manual-input"
              />
              <span className="f-sip-input-unit">Years</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="40" 
              step="1" 
              value={years || 0} 
              onChange={(e) => setYears(Number(e.target.value))}
              className="f-sip-range-slider"
            />
          </div>
        </div>

        {/* 2. Growth Projection Chart */}
        <div className="f-sip-card f-sip-chart-card animate-float-dashboard">
          <div className="f-sip-chart-header">
            <h3 className="f-sip-card-title">Growth Projection</h3>
            <div className="f-sip-badges-container">
              <div className="f-sip-live-badge">
                <span className="f-sip-live-dot"></span>
                Live SIP Projection
              </div>
              <div className="f-sip-cagr-pill">{rate}% Assumed Annual Return</div>
            </div>
          </div>
          <div className="f-sip-chart-wrapper">
            <ResponsiveContainer width="100%" height={290}>
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 5, bottom: 0 }}>
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
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(148, 163, 184, 0.08)" />

                <XAxis dataKey="year" tickLine={false} axisLine={false} tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }} dy={10} />
                <YAxis tickFormatter={formatAxis} width={55} tickLine={false} axisLine={false} tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }} />
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
          <div className="f-sip-results-row">
            <div className="f-sip-result-box f-sip-blue">
              <div className="f-sip-res-accent"></div>
              <span className="f-sip-res-label">Invested</span>
              <h4 className="f-sip-res-val">
                <AnimatedNumber value={totalInvested} formatter={formatCurrency} />
              </h4>
              <span className="f-sip-res-subtext">Total contribution</span>
            </div>

            <div className="f-sip-result-box f-sip-green">
              <div className="f-sip-res-accent"></div>
              <span className="f-sip-res-label">Returns</span>
              <h4 className="f-sip-res-val">
                <AnimatedNumber value={estimatedReturns} formatter={formatCurrency} />
              </h4>
              <span className="f-sip-res-subtext">Market growth</span>
            </div>

            <div className="f-sip-result-box f-sip-purple">
              <div className="f-sip-res-accent"></div>
              <span className="f-sip-res-label">Total Value</span>
              <h4 className="f-sip-res-val">
                <AnimatedNumber value={totalValue} formatter={formatCurrency} />
              </h4>
              <span className="f-sip-res-subtext">Estimated compounding value</span>
            </div>
          </div>
        </div>


      </div>


    </section>
  );
}

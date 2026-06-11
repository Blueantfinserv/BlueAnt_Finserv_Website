import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { useNavigate } from "react-router-dom"; // ✅ Added
import "./Calculator.css";

export default function Calculator() {
  const [monthly, setMonthly] = useState("1000");
  const [rate, setRate] = useState("12");
  const [years, setYears] = useState("10");
  const [futureValue, setFutureValue] = useState(null);

  const navigate = useNavigate(); // ✅ Initialize navigate

  const calculateSIP = () => {
    const P = parseFloat(monthly);
    const R = parseFloat(rate);
    const Y = parseInt(years);

    if (!P || !R || !Y) return;

    const r = (R / 100) / 12;
    const n = Y * 12;

    let fv = P * n;
    if (r > 0 && n > 0) {
      fv = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    }
    
    setFutureValue(Math.round(fv).toString());
  };

  useEffect(() => {
    calculateSIP();
  }, [monthly, rate, years]);

  const totalInvested = monthly * 12 * years;
  const wealthGained = futureValue ? futureValue - totalInvested : 0;

  const data = [
    { name: "Invested", value: totalInvested },
    { name: "Returns", value: wealthGained },
  ];

  const COLORS = ["#ed3237", "#00afef"];

  // Function to format numbers with commas
  const formatCurrency = (value) => {
    return `₹${Number(value).toLocaleString('en-IN')}`;
  };

  return (
    <div className="container">
      {/* LEFT SECTION */}
      <div className="calculator">
        <h2>Just Check How SIP Grow Your Wealth</h2>

        <div className="top-section">
          <div className="inputs">
            <div className="input-hub">
              <label htmlFor="monthly">Monthly Investment</label>
              <input
                id="monthly"
                type="number"
                value={monthly}
                onChange={(e) => setMonthly(e.target.value)}
              />
            </div>

            <div className="input-hub">
              <label htmlFor="rate">Rate of Return (%)</label>
              <input
                id="rate"
                type="number"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
            </div>

            <div className="input-hub">
              <label htmlFor="years">Investment Period (Years)</label>
              <input
                id="years"
                type="number"
                value={years}
                onChange={(e) => setYears(e.target.value)}
              />
            </div>
          </div>

          {futureValue && (
            <div className="chart-block">
              <PieChart width={280} height={260}>
                <Pie
                  data={data}
                  dataKey="value"
                  innerRadius={50}
                  outerRadius={100}
                  paddingAngle={1}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => formatCurrency(value)} />
              </PieChart>

              <div className="legend">
                <div className="legend-item">
                  <span className="legend-color red"></span> Invested
                </div>
                <div className="legend-item">
                  <span className="legend-color blue"></span> Returns
                </div>
              </div>
            </div>
          )}
        </div>

        {futureValue && (
          <div className="results">
            <p className="sip-summary">
              Monthly SIP of {formatCurrency(monthly)} for {years} years @ {rate}% will grow to <br />
              <span className="result-value">{formatCurrency(futureValue)}</span>
            </p>

            <div className="info-boxes">
              <div className="info red">
                <p>Total Invested</p>
                <p className="info-value">{formatCurrency(totalInvested)}</p>
              </div>
              <div className="info blue">
                <p>Wealth Gained</p>
                <p className="info-value">{formatCurrency(wealthGained)}</p>
              </div>
            </div>

            <p className="text-center">
              <span>Your investment has multiplied by</span>
              <br />
              <span className="bold highlight">
                {(futureValue / totalInvested).toFixed(2)} times
              </span>
            </p>
          </div>
        )}
      </div>

<div className="right-section-container">
  <div className="lumpsum-section">
    {[
      {
        title: "Loan",
        description: "Calculate your loan payments and interest",
        image: "/loan-icon.png",
        type: "loan",
      },
      {
        title: "Lumpsum",
        description: "Calculate the future value of a lumpsum investment",
        image: "/lumpsum.png",
        type: "lumpsum",
      },
      {
        title: "Income Tax",
        description: "Calculate your income tax liability",
        image: "/tax_icon.png",
        type: "incomeTax",
      },
      {
        title: "Retirement Plan",
        description: "Plan your retirement savings and corpus",
        image: "/retirment.png",
        type: "retirement",
      },
    ].map((card, idx) => (
      <div key={idx} className="card">
        <div>
          <h4>{card.title}</h4>
          <p>{card.description}</p>
          <button
            className="card-button"
            onClick={() => navigate(`/calculators?type=${card.type}`)}
          >
            CALCULATE
          </button>
        </div>
        <div className="card-icon">
          <img
            src={card.image}
            alt={card.title}
            className="card-icon-img"
          />
        </div>
      </div>
    ))}
  </div>

  <div className="lumpsum-sections">
    {[
      {
        title: "Sip",
        description: "Calculate your income tax liability",
        image: "/SIP 2.png",
        type: "sip",
      },
      {
        title: "Future Value",
        description: "Plan your retirement savings and corpus",
        image: "/Growth Money.png",
        type: "futureValue",
      },
    ].map((card, idx) => (
      <div key={idx} className="card mobile-only">
        <div>
          <h4>{card.title}</h4>
          <p>{card.description}</p>
          <button
            className="card-button"
            onClick={() => navigate(`/calculators?type=${card.type}`)}
          >
            CALCULATE
          </button>
        </div>
        <div className="card-icon">
          <img
            src={card.image}
            alt={card.title}
            className="card-icon-img"
          />
        </div>
      </div>
    ))}
  </div>

  <div className="more-calculators-button-container">
    <button
      className="more-calculators-button"
      onClick={() => navigate("/calculators")}
    >
      More Calculators
    </button>
  </div>
</div>

</div>
  );
}

import React, { useState, useEffect } from 'react';
import "../styles/CalculatorPage.css";
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import { useLocation } from 'react-router-dom'; 

const CalculatorPage = () => {
  const location = useLocation(); 
  const queryParams = new URLSearchParams(location.search);
  const typeFromQuery = queryParams.get('type');

  const [activeCalculator, setActiveCalculator] = useState('Sip');
  useEffect(() => {
    if (typeFromQuery) {
      const formatted =
        typeFromQuery.charAt(0).toUpperCase() + typeFromQuery.slice(1);
      setActiveCalculator(formatted);
    }
  }, [typeFromQuery]);

  const calculators = {
    Sip: <SIPCalculator />,
    Lumpsum: <LumpsumCalculator />,
    Retirement: <RetirementCalculator />,
    IncomeTax: <IncomeTaxCalculator />,
    Marriage: <MarriageCalculator />,
    KidsEdu: <KidsEduCalculator />,
    Loan: <LoanCalculator />,
    FutureValue: <FutureValueCalculator />
  };

  const labelMap = {
    Sip: 'SIP',
    Lumpsum: 'LUMPSUM',
    Retirement: 'RETIREMENT',
    IncomeTax: 'INCOME TAX',
    Marriage: 'MARRIAGE',
    KidsEdu: "KID'S EDU",
    Loan: 'LOAN',
    FutureValue: 'FUTURE VALUE'
  };

  const buttons = Object.keys(calculators);

  return (
    <div className="cp-page">
      <div className="cp-hero">
        <div className="cp-hero-content">
          <h1>Financial Calculators</h1>
          <p>Your Goals. Our Calculators. One Smart Plan.</p>
        </div>
      </div>

      <div className="cp-navbar-container">
        <div className="cp-navbar">
          {buttons.map((btn) => (
            <button
              key={btn}
              className={`cp-nav-btn ${activeCalculator === btn ? 'active' : ''}`}
              onClick={() => setActiveCalculator(btn)}
            >
              {labelMap[btn]}
            </button>
          ))}
        </div>
      </div>

      <div className="cp-main-container">
        {calculators[activeCalculator]}
      </div>
    </div>
  );
};

const formatNumber = (number) => {
  return new Intl.NumberFormat('en-IN').format(number);
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '75%',
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: function(context) {
          return ' ₹' + formatNumber(context.raw);
        }
      }
    }
  }
};

const CHART_COLORS = ['#3b82f6', '#10b981']; // Blue for Invested/Principal, Green for Returns/Interest

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [rateOfReturn, setRateOfReturn] = useState(12);
  const [years, setYears] = useState(10);
  const [result, setResult] = useState(null);

  useEffect(() => {
    calculateSIP();
  }, [monthlyInvestment, rateOfReturn, years]);

  const calculateSIP = () => {
    const n = years * 12;
    const r = rateOfReturn / 12 / 100;
    const futureValue = monthlyInvestment * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    const investedAmount = monthlyInvestment * n;
    const wealthGained = futureValue - investedAmount;
    const multiple = futureValue / investedAmount;

    setResult({
      futureValue: futureValue.toFixed(0),
      investedAmount: investedAmount.toFixed(0),
      wealthGained: wealthGained.toFixed(0),
      multiple: multiple.toFixed(2)
    });
  };

  const chartData = {
    labels: ['Total Invested', 'Est. Returns'],
    datasets: [{
      data: result ? [result.investedAmount, result.wealthGained] : [0, 0],
      backgroundColor: CHART_COLORS,
      borderWidth: 0,
      hoverOffset: 4
    }]
  };

  return (
    <div className="cp-calc-box">
      <h2>SIP Calculator</h2>
      <p className="cp-calc-desc">Calculate the future value of your systematic investment plan.</p>

      <div className="cp-grid">
        <div className="cp-inputs">
          <div className="cp-input-group">
            <div className="cp-input-header">
              <label>Monthly Investment</label>
              <span>₹{formatNumber(monthlyInvestment)}</span>
            </div>
            <input type="range" min="500" max="100000" step="500" value={monthlyInvestment} onChange={(e) => setMonthlyInvestment(Number(e.target.value))} />
          </div>
          <div className="cp-input-group">
            <div className="cp-input-header">
              <label>Expected Return Rate (p.a)</label>
              <span>{rateOfReturn}%</span>
            </div>
            <input type="range" min="1" max="30" step="0.5" value={rateOfReturn} onChange={(e) => setRateOfReturn(Number(e.target.value))} />
          </div>
          <div className="cp-input-group">
            <div className="cp-input-header">
              <label>Time Period</label>
              <span>{years} Yr</span>
            </div>
            <input type="range" min="1" max="40" step="1" value={years} onChange={(e) => setYears(Number(e.target.value))} />
          </div>
        </div>

        {result && (
          <div className="cp-results">
            <div className="cp-chart-container">
              <Doughnut data={chartData} options={chartOptions} />
              <div className="cp-chart-center">
                <span className="cp-chart-center-label">Total Value</span>
                <span className="cp-chart-center-val">₹{formatNumber(result.futureValue)}</span>
              </div>
            </div>
            <div className="cp-legend">
              <div className="cp-legend-item">
                <span className="cp-dot" style={{background: CHART_COLORS[0]}}></span>
                <div>
                  <div className="cp-legend-label">Invested Amount</div>
                  <div className="cp-legend-val">₹{formatNumber(result.investedAmount)}</div>
                </div>
              </div>
              <div className="cp-legend-item">
                <span className="cp-dot" style={{background: CHART_COLORS[1]}}></span>
                <div>
                  <div className="cp-legend-label">Est. Returns</div>
                  <div className="cp-legend-val">₹{formatNumber(result.wealthGained)}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="cp-calc-disclaimer" style={{
        marginTop: '20px',
        padding: '12px 16px',
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: '12px',
        fontSize: '11.5px',
        color: '#94a3b8',
        textAlign: 'center',
        lineHeight: '1.5'
      }}>
        <strong style={{ color: '#fbbf24', display: 'block', marginBottom: '4px' }}>
          For illustration only. Returns are not guaranteed. Actual returns may vary.
        </strong>
        Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing.
      </div>
    </div>
  );
};

const LumpsumCalculator = () => {
  const [investmentAmount, setInvestmentAmount] = useState(100000);
  const [rateOfReturn, setRateOfReturn] = useState(12);
  const [years, setYears] = useState(10);
  const [result, setResult] = useState(null);

  useEffect(() => {
    calculateLumpsum();
  }, [investmentAmount, rateOfReturn, years]);

  const calculateLumpsum = () => {
    const n = years;
    const r = rateOfReturn / 100;
    const futureValue = investmentAmount * Math.pow(1 + r, n);
    const wealthGained = futureValue - investmentAmount;
    
    setResult({
      futureValue: futureValue.toFixed(0),
      investedAmount: investmentAmount.toFixed(0),
      wealthGained: wealthGained.toFixed(0)
    });
  };

  const chartData = {
    labels: ['Total Invested', 'Est. Returns'],
    datasets: [{
      data: result ? [result.investedAmount, result.wealthGained] : [0, 0],
      backgroundColor: CHART_COLORS,
      borderWidth: 0
    }]
  };

  return (
    <div className="cp-calc-box">
      <h2>Lumpsum Calculator</h2>
      <p className="cp-calc-desc">Calculate the wealth generated from a one-time investment.</p>
      <div className="cp-grid">
        <div className="cp-inputs">
          <div className="cp-input-group">
            <div className="cp-input-header">
              <label>Total Investment</label>
              <span>₹{formatNumber(investmentAmount)}</span>
            </div>
            <input type="range" min="10000" max="5000000" step="10000" value={investmentAmount} onChange={(e) => setInvestmentAmount(Number(e.target.value))} />
          </div>
          <div className="cp-input-group">
            <div className="cp-input-header">
              <label>Expected Return Rate (p.a)</label>
              <span>{rateOfReturn}%</span>
            </div>
            <input type="range" min="1" max="30" step="0.5" value={rateOfReturn} onChange={(e) => setRateOfReturn(Number(e.target.value))} />
          </div>
          <div className="cp-input-group">
            <div className="cp-input-header">
              <label>Time Period</label>
              <span>{years} Yr</span>
            </div>
            <input type="range" min="1" max="40" step="1" value={years} onChange={(e) => setYears(Number(e.target.value))} />
          </div>
        </div>
        {result && (
          <div className="cp-results">
            <div className="cp-chart-container">
              <Doughnut data={chartData} options={chartOptions} />
              <div className="cp-chart-center">
                <span className="cp-chart-center-label">Total Value</span>
                <span className="cp-chart-center-val">₹{formatNumber(result.futureValue)}</span>
              </div>
            </div>
            <div className="cp-legend">
              <div className="cp-legend-item">
                <span className="cp-dot" style={{background: CHART_COLORS[0]}}></span>
                <div>
                  <div className="cp-legend-label">Invested Amount</div>
                  <div className="cp-legend-val">₹{formatNumber(result.investedAmount)}</div>
                </div>
              </div>
              <div className="cp-legend-item">
                <span className="cp-dot" style={{background: CHART_COLORS[1]}}></span>
                <div>
                  <div className="cp-legend-label">Est. Returns</div>
                  <div className="cp-legend-val">₹{formatNumber(result.wealthGained)}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="cp-calc-disclaimer" style={{
        marginTop: '20px',
        padding: '12px 16px',
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: '12px',
        fontSize: '11.5px',
        color: '#94a3b8',
        textAlign: 'center',
        lineHeight: '1.5'
      }}>
        <strong style={{ color: '#fbbf24', display: 'block', marginBottom: '4px' }}>
          For illustration only. Returns are not guaranteed. Actual returns may vary.
        </strong>
        Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing.
      </div>
    </div>
  );
};

const RetirementCalculator = () => (
  <div className="cp-calc-box cp-calc-empty">
    <div className="cp-empty-icon">🏖️</div>
    <h2>Retirement Calculator</h2>
    <p>We are building an advanced retirement planning tool. Check back soon!</p>
  </div>
);

const IncomeTaxCalculator = () => (
  <div className="cp-calc-box cp-calc-empty">
    <div className="cp-empty-icon">📊</div>
    <h2>Income Tax Calculator</h2>
    <p>Our tax calculator is being updated for the latest financial year.</p>
  </div>
);

const MarriageCalculator = () => {
  const [childAge, setChildAge] = useState(5);
  const [marriageAge, setMarriageAge] = useState(25);
  const [currentCost, setCurrentCost] = useState(1500000);
  const [inflationRate, setInflationRate] = useState(6);
  const [result, setResult] = useState(null);

  useEffect(() => {
    calculateMarriageGoal();
  }, [childAge, marriageAge, currentCost, inflationRate]);

  const calculateMarriageGoal = () => {
    const yearsLeft = Math.max(0, marriageAge - childAge);
    const inflationRateDecimal = inflationRate / 100;
    const futureCost = currentCost * Math.pow(1 + inflationRateDecimal, yearsLeft);
    const inflationImpact = futureCost - currentCost;

    setResult({
      futureCost: futureCost.toFixed(0),
      currentCost: currentCost.toFixed(0),
      inflationImpact: inflationImpact.toFixed(0),
      yearsLeft
    });
  };

  const chartData = {
    labels: ['Current Cost', 'Inflation Impact'],
    datasets: [{
      data: result ? [result.currentCost, result.inflationImpact] : [0, 0],
      backgroundColor: CHART_COLORS,
      borderWidth: 0
    }]
  };

  return (
    <div className="cp-calc-box">
      <h2>Marriage Expense Calculator</h2>
      <p className="cp-calc-desc">Calculate future marriage costs factoring in inflation.</p>
      <div className="cp-grid">
        <div className="cp-inputs">
          <div className="cp-input-group">
            <div className="cp-input-header">
              <label>Child's Current Age</label>
              <span>{childAge} Yr</span>
            </div>
            <input type="range" min="0" max="30" step="1" value={childAge} onChange={(e) => setChildAge(Number(e.target.value))} />
          </div>
          <div className="cp-input-group">
            <div className="cp-input-header">
              <label>Expected Marriage Age</label>
              <span>{marriageAge} Yr</span>
            </div>
            <input type="range" min="18" max="40" step="1" value={marriageAge} onChange={(e) => setMarriageAge(Number(e.target.value))} />
          </div>
          <div className="cp-input-group">
            <div className="cp-input-header">
              <label>Today's Cost of Marriage</label>
              <span>₹{formatNumber(currentCost)}</span>
            </div>
            <input type="range" min="100000" max="10000000" step="100000" value={currentCost} onChange={(e) => setCurrentCost(Number(e.target.value))} />
          </div>
          <div className="cp-input-group">
            <div className="cp-input-header">
              <label>Expected Inflation Rate</label>
              <span>{inflationRate}%</span>
            </div>
            <input type="range" min="1" max="15" step="0.5" value={inflationRate} onChange={(e) => setInflationRate(Number(e.target.value))} />
          </div>
        </div>
        {result && (
          <div className="cp-results">
            <div className="cp-chart-container">
              <Doughnut data={chartData} options={chartOptions} />
              <div className="cp-chart-center">
                <span className="cp-chart-center-label">Future Cost</span>
                <span className="cp-chart-center-val">₹{formatNumber(result.futureCost)}</span>
              </div>
            </div>
            <div className="cp-legend">
              <div className="cp-legend-item">
                <span className="cp-dot" style={{background: CHART_COLORS[0]}}></span>
                <div>
                  <div className="cp-legend-label">Cost Today</div>
                  <div className="cp-legend-val">₹{formatNumber(result.currentCost)}</div>
                </div>
              </div>
              <div className="cp-legend-item">
                <span className="cp-dot" style={{background: CHART_COLORS[1]}}></span>
                <div>
                  <div className="cp-legend-label">Inflation Impact</div>
                  <div className="cp-legend-val">₹{formatNumber(result.inflationImpact)}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const KidsEduCalculator = () => {
  const [yearsLeft, setYearsLeft] = useState(10);
  const [costToday, setCostToday] = useState(1000000);
  const [inflation, setInflation] = useState(6);
  const [result, setResult] = useState(null);

  useEffect(() => {
    calculateEducationCost();
  }, [yearsLeft, costToday, inflation]);

  const calculateEducationCost = () => {
    const futureValue = costToday * Math.pow(1 + inflation / 100, yearsLeft);
    const inflationImpact = futureValue - costToday;

    setResult({
      futureCost: futureValue.toFixed(0),
      inflationImpact: inflationImpact.toFixed(0),
      costToday: costToday.toFixed(0),
    });
  };

  const chartData = {
    labels: ["Cost Today", "Inflation Impact"],
    datasets: [{
      data: result ? [result.costToday, result.inflationImpact] : [0, 0],
      backgroundColor: CHART_COLORS,
      borderWidth: 0,
    }],
  };

  return (
    <div className="cp-calc-box">
      <h2>Child Education Calculator</h2>
      <p className="cp-calc-desc">Estimate the future cost of higher education considering inflation.</p>
      <div className="cp-grid">
        <div className="cp-inputs">
          <div className="cp-input-group">
            <div className="cp-input-header">
              <label>Years Left for College</label>
              <span>{yearsLeft} Yr</span>
            </div>
            <input type="range" min="1" max="25" step="1" value={yearsLeft} onChange={(e) => setYearsLeft(Number(e.target.value))} />
          </div>
          <div className="cp-input-group">
            <div className="cp-input-header">
              <label>Current Cost of Education</label>
              <span>₹{formatNumber(costToday)}</span>
            </div>
            <input type="range" min="100000" max="10000000" step="50000" value={costToday} onChange={(e) => setCostToday(Number(e.target.value))} />
          </div>
          <div className="cp-input-group">
            <div className="cp-input-header">
              <label>Expected Inflation Rate</label>
              <span>{inflation}%</span>
            </div>
            <input type="range" min="1" max="15" step="0.5" value={inflation} onChange={(e) => setInflation(Number(e.target.value))} />
          </div>
        </div>
        {result && (
          <div className="cp-results">
            <div className="cp-chart-container">
              <Doughnut data={chartData} options={chartOptions} />
              <div className="cp-chart-center">
                <span className="cp-chart-center-label">Future Cost</span>
                <span className="cp-chart-center-val">₹{formatNumber(result.futureCost)}</span>
              </div>
            </div>
            <div className="cp-legend">
              <div className="cp-legend-item">
                <span className="cp-dot" style={{background: CHART_COLORS[0]}}></span>
                <div>
                  <div className="cp-legend-label">Cost Today</div>
                  <div className="cp-legend-val">₹{formatNumber(result.costToday)}</div>
                </div>
              </div>
              <div className="cp-legend-item">
                <span className="cp-dot" style={{background: CHART_COLORS[1]}}></span>
                <div>
                  <div className="cp-legend-label">Inflation Impact</div>
                  <div className="cp-legend-val">₹{formatNumber(result.inflationImpact)}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTerm, setLoanTerm] = useState(20); 
  const [result, setResult] = useState(null);

  useEffect(() => {
    calculateLoan();
  }, [loanAmount, interestRate, loanTerm]);

  const calculateLoan = () => {
    const r = interestRate / 100 / 12; 
    const n = loanTerm * 12; 
    let monthlyEMI = 0;
    
    if (r === 0) {
      monthlyEMI = loanAmount / n;
    } else {
      monthlyEMI = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    }
    
    const totalPayment = monthlyEMI * n;
    const totalInterest = totalPayment - loanAmount;

    setResult({
      monthlyEMI: monthlyEMI.toFixed(0),
      totalPayment: totalPayment.toFixed(0),
      totalInterest: totalInterest.toFixed(0),
      loanAmount: loanAmount.toFixed(0),
    });
  };

  const chartData = {
    labels: ["Principal Amount", "Total Interest"],
    datasets: [{
      data: result ? [result.loanAmount, result.totalInterest] : [0, 0],
      backgroundColor: CHART_COLORS,
      borderWidth: 0,
    }],
  };

  return (
    <div className="cp-calc-box">
      <h2>EMI Calculator</h2>
      <p className="cp-calc-desc">Calculate your monthly EMI and total interest payable on your loan.</p>
      <div className="cp-grid">
        <div className="cp-inputs">
          <div className="cp-input-group">
            <div className="cp-input-header">
              <label>Loan Amount</label>
              <span>₹{formatNumber(loanAmount)}</span>
            </div>
            <input type="range" min="50000" max="50000000" step="50000" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} />
          </div>
          <div className="cp-input-group">
            <div className="cp-input-header">
              <label>Interest Rate (p.a)</label>
              <span>{interestRate}%</span>
            </div>
            <input type="range" min="1" max="20" step="0.1" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} />
          </div>
          <div className="cp-input-group">
            <div className="cp-input-header">
              <label>Loan Tenure</label>
              <span>{loanTerm} Yr</span>
            </div>
            <input type="range" min="1" max="30" step="1" value={loanTerm} onChange={(e) => setLoanTerm(Number(e.target.value))} />
          </div>
        </div>
        {result && (
          <div className="cp-results">
            <div className="cp-chart-container">
              <Doughnut data={chartData} options={chartOptions} />
              <div className="cp-chart-center">
                <span className="cp-chart-center-label">Monthly EMI</span>
                <span className="cp-chart-center-val" style={{color: '#0f172a'}}>₹{formatNumber(result.monthlyEMI)}</span>
              </div>
            </div>
            <div className="cp-legend">
              <div className="cp-legend-item">
                <span className="cp-dot" style={{background: CHART_COLORS[0]}}></span>
                <div>
                  <div className="cp-legend-label">Principal Amount</div>
                  <div className="cp-legend-val">₹{formatNumber(result.loanAmount)}</div>
                </div>
              </div>
              <div className="cp-legend-item">
                <span className="cp-dot" style={{background: CHART_COLORS[1]}}></span>
                <div>
                  <div className="cp-legend-label">Total Interest</div>
                  <div className="cp-legend-val">₹{formatNumber(result.totalInterest)}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const FutureValueCalculator = () => {
  const [presentValue, setPresentValue] = useState(50000);
  const [rateOfReturn, setRateOfReturn] = useState(12);
  const [years, setYears] = useState(10);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const r = rateOfReturn / 100;
    const n = years;
    const futureValue = presentValue * Math.pow(1 + r, n);
    const wealthGained = futureValue - presentValue;

    setResult({
      futureValue: futureValue.toFixed(0),
      investedAmount: presentValue.toFixed(0),
      wealthGained: wealthGained.toFixed(0),
    });
  }, [presentValue, rateOfReturn, years]);

  const chartData = {
    labels: ["Invested Amount", "Est. Returns"],
    datasets: [{
      data: result ? [result.investedAmount, result.wealthGained] : [0, 0],
      backgroundColor: CHART_COLORS,
      borderWidth: 0,
    }],
  };

  return (
    <div className="cp-calc-box">
      <h2>Future Value Calculator</h2>
      <p className="cp-calc-desc">Calculate what your current money will be worth in the future.</p>
      <div className="cp-grid">
        <div className="cp-inputs">
          <div className="cp-input-group">
            <div className="cp-input-header">
              <label>Present Value</label>
              <span>₹{formatNumber(presentValue)}</span>
            </div>
            <input type="range" min="10000" max="10000000" step="10000" value={presentValue} onChange={(e) => setPresentValue(Number(e.target.value))} />
          </div>
          <div className="cp-input-group">
            <div className="cp-input-header">
              <label>Expected Return Rate</label>
              <span>{rateOfReturn}%</span>
            </div>
            <input type="range" min="1" max="30" step="0.5" value={rateOfReturn} onChange={(e) => setRateOfReturn(Number(e.target.value))} />
          </div>
          <div className="cp-input-group">
            <div className="cp-input-header">
              <label>Time Period</label>
              <span>{years} Yr</span>
            </div>
            <input type="range" min="1" max="40" step="1" value={years} onChange={(e) => setYears(Number(e.target.value))} />
          </div>
        </div>
        {result && (
          <div className="cp-results">
            <div className="cp-chart-container">
              <Doughnut data={chartData} options={chartOptions} />
              <div className="cp-chart-center">
                <span className="cp-chart-center-label">Future Value</span>
                <span className="cp-chart-center-val">₹{formatNumber(result.futureValue)}</span>
              </div>
            </div>
            <div className="cp-legend">
              <div className="cp-legend-item">
                <span className="cp-dot" style={{background: CHART_COLORS[0]}}></span>
                <div>
                  <div className="cp-legend-label">Present Value</div>
                  <div className="cp-legend-val">₹{formatNumber(result.investedAmount)}</div>
                </div>
              </div>
              <div className="cp-legend-item">
                <span className="cp-dot" style={{background: CHART_COLORS[1]}}></span>
                <div>
                  <div className="cp-legend-label">Est. Returns</div>
                  <div className="cp-legend-val">₹{formatNumber(result.wealthGained)}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalculatorPage;

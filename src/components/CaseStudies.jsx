import React from "react";
import "./CaseStudies.css";

const cases = [
  {
    icon: "🏭",
    tag: "Business Loan",
    headline: "Helped a Noida manufacturer secure ₹50L in 3 days",
    story:
      "A textile business owner in Noida needed urgent working capital to fulfil a bulk order. Blueant connected them with the right lender, navigated the paperwork, and got funds released in just 72 hours — saving the deal and the business relationship.",
    result: "₹50L disbursed · 3 Days · Zero rejection",
    color: "#3b82f6",
  },
  {
    icon: "📈",
    tag: "SIP + MF Planning",
    headline: "Family grew ₹10L to ₹28L in 5 years via SIP",
    story:
      "A dual-income family wanted to save for their children's education. Our advisors built a goal-based SIP portfolio across 4 funds. With disciplined investing and annual rebalancing, their corpus more than doubled in 5 years.",
    result: "180% returns · 5 Years · 2 kids' goals funded",
    color: "#22c55e",
  },
  {
    icon: "🛡️",
    tag: "Insurance Planning",
    headline: "Family of 4 fully insured under ₹2,500/month",
    story:
      "A Ghaziabad family was over-paying on bundled insurance products. We audited their coverage, cancelled underperforming policies, and rebuilt a comprehensive life + health cover within their budget — saving ₹18,000/year.",
    result: "₹18K annual savings · Full family coverage",
    color: "#f59e0b",
  },
];

function CaseStudies() {
  return (
    <section className="cs-section">
      <div className="cs-header">
        <span className="cs-label">SUCCESS STORIES</span>
        <h2 className="cs-heading">
          How We Helped <span className="cs-heading-accent">Our Clients</span>
        </h2>
        <p className="cs-subtext">
          Real results. Real people. See how Blueant Finserv has made a
          difference in thousands of financial journeys.
        </p>
      </div>

      <div className="cs-grid">
        {cases.map((c, i) => (
          <div className="cs-card" key={i} style={{ "--cs-accent": c.color }}>
            <div className="cs-card-top">
              <span className="cs-card-icon">{c.icon}</span>
              <span className="cs-card-tag">{c.tag}</span>
            </div>
            <h3 className="cs-card-headline">{c.headline}</h3>
            <p className="cs-card-story">{c.story}</p>
            <div className="cs-card-result">{c.result}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CaseStudies;

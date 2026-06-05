import React from "react";
import styles from "../styles/Testimonials.module.scss";

const testimonials = [
  {
    name: "Rajnish Kumar",
    role: "IT Professional, Bangalore",
    image: "https://i.pravatar.cc/150?img=11",
    color: "#0ea5e9",
    text: "Started my SIP journey with Blueant 5 years ago with disciplined monthly investments. Today my portfolio has grown significantly! The experience has been consistently better than traditional savings. Their financial advisors helped me choose the right mix of equity and debt funds.",
    badge: "📈 Long-term Wealth",
  },
  {
    name: "Priya Sharma",
    role: "Entrepreneur, Mumbai",
    image: "https://i.pravatar.cc/150?img=5",
    color: "#06b6d4",
    text: "When I needed a business loan for expansion, Blueant made it incredibly easy. Got ₹25 lakhs approved within 24 hours with minimal documentation. The interest rates were competitive and the flexible EMI options helped manage my cash flow effectively.",
    badge: "🚀 24hr Approval",
  },
  {
    name: "Amit Patel",
    role: "Doctor, Ahmedabad",
    image: "https://i.pravatar.cc/150?img=33",
    color: "#2563eb",
    text: "Their insurance advisory helped me get a comprehensive ₹1 Cr term plan with critical illness cover at a very reasonable premium. The claim process was smooth when I had to use my health insurance - cashless hospitalization worked perfectly.",
    badge: "🏥 ₹1Cr Coverage",
  },
  {
    name: "Sneha Reddy",
    role: "Software Engineer, Hyderabad",
    image: "https://i.pravatar.cc/150?img=9",
    color: "#0891b2",
    text: "As a first-time investor, the stock trading platform was perfect for me. Zero brokerage on delivery trades saved me thousands. The research reports and educational content helped me make informed investment decisions. Already seeing great results this year!",
    badge: "📈 Positive Growth",
  },
  {
    name: "Vikram Singh",
    role: "Business Owner, Delhi",
    image: "https://i.pravatar.cc/150?img=12",
    color: "#1d4ed8",
    text: "Blueant is my one-stop financial partner. From SIP investments to business loans, insurance to stock trading - everything is seamlessly integrated. The mobile app makes it easy to track all my investments in one place. Highly recommended!",
    badge: "💎 All-in-One",
  },
  {
    name: "Meera Iyer",
    role: "Teacher, Chennai",
    image: "https://i.pravatar.cc/150?img=20",
    color: "#0ea5e9",
    text: "The tax-saving ELSS SIP helped me save ₹46,000 in taxes last year while building wealth. The automated investment feature ensures I never miss my monthly SIP. Customer support is excellent - they patiently answered all my questions as a beginner.",
    badge: "💰 ₹46K Tax Saved",
  },
];

const stats = [
  { value: "4.9★", label: "APP users.", stars: true },
  { value: "3,000+", label: "Families pan India" },
  { value: "98.5%", label: "Satisfaction Rate" },
  { value: "3,000+", label: "Happy Families" },
];

function Testimonials() {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.pill}>⭐ Trusted by 3,000+ Families</div>
          <h2>Trusted by Families, Year After Year</h2>
          <p>
            Client experiences that reflect our focus on clarity, discipline, and long-term confidence.
          </p>
        </div>

        <div className={styles.marquee}>
          <div className={styles.marqueeTrack}>
            {[...testimonials, ...testimonials].map((t, i) => {
              const initials = t.name.split(' ').map(n => n[0]).join('');
              return (
                <div key={i} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <div className={styles.user}>
                      <div 
                        className={styles.avatar} 
                        style={{ background: `linear-gradient(135deg, ${t.color} 0%, #1e293b 100%)` }}
                      >
                        {initials}
                      </div>
                      <div className={styles.userInfo}>
                        <h4>
                          {t.name}
                          <span className={styles.verifiedBadge}>
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Verified Reviewer
                          </span>
                        </h4>
                        <span>{t.role}</span>
                      </div>
                    </div>
                    <div className={styles.quoteIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.2">
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H5c-1.25 0-2 .75-2 2v3c0 1.25.75 2 2 2h3c0 1.5-1 4-4 4" />
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-3c-1.25 0-2 .75-2 2v3c0 1.25.75 2 2 2h3c0 1.5-1 4-4 4" />
                      </svg>
                    </div>
                  </div>
                  <div className={styles.stars}>
                    {"★★★★★".split("").map((s, idx) => (
                      <span key={idx}>{s}</span>
                    ))}
                    <span className={styles.ratingText}>5.0</span>
                  </div>
                  <p className={styles.testimonialText}>"{t.text}"</p>
                  <div className={styles.cardFooter}>
                    <div className={styles.badge}>{t.badge}</div>
                    <span className={styles.dateText}>Real Client Review</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.statsBar}>
          {stats.map((stat, i) => (
            <div key={i} className={styles.statItem}>
              <h3>{stat.value}</h3>
              {stat.stars && (
                <div className={styles.smallStars}>★★★★★</div>
              )}
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
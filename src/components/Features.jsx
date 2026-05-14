import React from "react";
import styles from "./Features.module.scss";

const features = [
  {
    icon: "🛡️",
    iconBg: "rgba(6, 182, 212, 0.2)",
    iconColor: "#06b6d4",
    badge: "100%\nCompliant",
    title: "SEBI & IRDAI Registered",
    desc: "Fully regulated by SEBI for investments and IRDAI for insurance. Your money is safe with us.",
  },
  {
    icon: "👥",
    iconBg: "rgba(192, 132, 252, 0.2)",
    iconColor: "#c084fc",
    badge: "50+\nExperts",
    title: "SEBI Certified Advisors",
    desc: "Get personalized guidance from SEBI-registered investment advisors with 10+ years experience.",
  },
  {
    icon: "🔒",
    iconBg: "rgba(74, 222, 128, 0.2)",
    iconColor: "#4ade80",
    badge: "256-bit\nEncryption",
    title: "Bank-Grade Security",
    desc: "256-bit SSL encryption, 2FA authentication, and secure payment gateways protect your data.",
  },
  {
    icon: "🎧",
    iconBg: "rgba(248, 113, 113, 0.2)",
    iconColor: "#f87171",
    badge: "<2 min\nResponse",
    title: "24/7 Customer Support",
    desc: "Multi-language support via phone, chat, and email. Average response time under 2 minutes.",
  },
  {
    icon: "🏆",
    iconBg: "rgba(251, 191, 36, 0.2)",
    iconColor: "#fbbf24",
    badge: "15+\nAwards",
    title: "Award-Winning Platform",
    desc: "Best Financial Services App 2023, Forbes Top FinTech Startup, Economic Times Excellence Award.",
  },
  {
    icon: "⚡",
    iconBg: "rgba(168, 85, 247, 0.2)",
    iconColor: "#a855f7",
    badge: "60 sec\nApproval",
    title: "Instant Processing",
    desc: "AI-powered automation for instant account opening, loan approvals, and trade execution.",
  },
  {
    icon: "📊",
    iconBg: "rgba(45, 212, 191, 0.2)",
    iconColor: "#2dd4bf",
    badge: "Live\nUpdates",
    title: "Real-Time Analytics",
    desc: "Advanced portfolio tracking, performance analysis, and tax reports in real-time.",
  },
  {
    icon: "📖",
    iconBg: "rgba(251, 113, 133, 0.2)",
    iconColor: "#fb7185",
    badge: "500+\nResources",
    title: "Free Education",
    desc: "Access 500+ articles, webinars, and courses on investing, trading, and financial planning.",
  },
  {
    icon: "📱",
    iconBg: "rgba(192, 132, 252, 0.2)",
    iconColor: "#c084fc",
    badge: "4.8★\nApp Rating",
    title: "Mobile-First Design",
    desc: "Trade and invest on-the-go with our award winning iOS and Android apps.",
  },
];

const stats = [
  {
    icon: "🌐",
    title: "₹2000Cr+",
    desc: "Assets Under Management across 500+ cities in India",
  },
  {
    icon: "🎖️",
    title: "98.5%",
    desc: "Client satisfaction rate with 12,000+ verified reviews",
  },
  {
    icon: "✅",
    title: "18+ Years",
    desc: "Of excellence in financial services and wealth management",
  },
];

function Features() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.pill}>⭐ Why 50,000+ Investors Trust Us</div>
          <h2>Industry-Leading Features & Benefits</h2>
          <p>
            Experience the perfect blend of cutting-edge technology, regulatory compliance, and
            personalized service that sets us apart from the competition.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((item, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardTop}>
                <div 
                  className={styles.iconWrapper} 
                  style={{ background: item.iconBg, color: item.iconColor }}
                >
                  {item.icon}
                </div>
                <div className={styles.badge} style={{ whiteSpace: 'pre-line' }}>
                  {item.badge}
                </div>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.statsGrid}>
          {stats.map((stat, i) => (
            <div key={i} className={styles.statCard}>
              <div className={styles.statIcon}>{stat.icon}</div>
              <h3 className={styles.statTitle}>{stat.title}</h3>
              <p className={styles.statDesc}>{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;

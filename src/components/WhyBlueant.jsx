import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/WhyBlueant.css';

const whyBlueantData = [
  {
    id: 1,
    number: "01",
    title: "SEBI Registered Investment Advisors",
    desc: "As SEBI RIAs, we ensure your financial security with our top-tier standards in education, experience, & compliance, providing you with client-centric advice at all points.",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    number: "02",
    title: "Fiduciary Standard of Care",
    desc: "Your best interests come first! Guided by SEBI IA regulations, we prioritize integrity, trust, & ethics, ensuring your financial dreams are always safeguarded.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    number: "03",
    title: "Your Dedicated Personal CFOs",
    desc: "Focus on what matters most—family, passions, health, & peace of mind. As your personal CFOs, we manage your finances, anchoring your overall well-being.",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    number: "04",
    title: "Delivering Clarity & Peace of Mind",
    desc: "Leave financial stress behind. Our experienced team provides clear, tailored & actionable advice, helping you navigate your financial path with confidence & ease.",
    img: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=800&auto=format&fit=crop"
  }
];

const WhyBlueant = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="why-blueant-section">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative">
        <h2 className="why-blueant-title" data-aos="fade-up">
          Why Come to Blueant?
        </h2>

        <div className="why-blueant-stack">
          {whyBlueantData.map((item, index) => (
            <div 
              key={item.id} 
              className={`why-blueant-card sticky-card sticky-card-${index + 1}`}
            >
              <div className="why-blueant-image-wrapper">
                <img src={item.img} alt={item.title} loading="lazy" />
              </div>
              <div className="why-blueant-content">
                <div className="why-blueant-number">{item.number}</div>
                <h3 className="why-blueant-card-title">{item.title}</h3>
                <p className="why-blueant-card-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBlueant;

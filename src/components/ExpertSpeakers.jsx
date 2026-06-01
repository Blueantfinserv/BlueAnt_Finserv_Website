import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/ExpertSpeakers.css';

const expertData = [
  {
    id: 1,
    name: "Mr. Rohit Raman",
    role: "Founder",
    title: "Leadership & Strategy",
    image: "Rohit Raman.png",
    bio: [
      "Mr. Rohit Raman, the visionary Founder of Blueant Finserv, brings a wealth of experience and a deep understanding of the financial landscape. His leadership is grounded in the core belief that financial freedom is achievable through disciplined planning and strategic risk management.",
      "Beyond advisory, he is deeply committed to financial awareness, leading initiatives that empower individuals and families to make informed, responsible financial decisions. His framework focuses on turning good returns into great returns.",
      "His expertise lies in sharing simple, practical, and actionable insights on how clients can secure their own and their family's financial future."
    ],
    stats: [
      { number: "15+", label: "Years Experience" },
      { number: "10k+", label: "Families Guided" },
      { number: "500+", label: "Webinars Hosted" }
    ]
  },
  {
    id: 2,
    name: "Mr. Sachin Narang",
    role: "Vice President",
    title: "Wealth Preservation",
    image: "Sachin Narang.png",
    bio: [
      "Mr. Sachin Narang serves as the Vice President, bringing his sharp analytical skills and extensive market knowledge to the forefront. He has been a trusted name in guiding high-net-worth individuals through complex financial landscapes.",
      "He strongly advocates for structured portfolio planning, emphasizing that a well-diversified strategy is the key to weathering market volatility. Under his guidance, countless clients have achieved sustainable financial growth.",
      "Known for his approachable demeanor, he simplifies intricate financial concepts, making them accessible and actionable for everyday investors."
    ],
    stats: [
      { number: "12+", label: "Years Experience" },
      { number: "5000+", label: "Portfolios Managed" },
      { number: "250+", label: "Strategy Sessions" }
    ]
  },
  {
    id: 3,
    name: "Mr. Rahul Kumar",
    role: "Asst. Vice President",
    title: "Wealth Management",
    image: "Rahul Kumar.png",
    bio: [
      "Mr. Rahul Kumar, Assistant Vice President, brings a dynamic approach to comprehensive wealth management. He is dedicated to constructing tailored financial solutions that adapt to the evolving needs of our clients.",
      "His expertise lies in aligning short-term goals with long-term financial security, ensuring a balanced and stress-free journey towards financial independence.",
      "With a strong focus on client education and personalized service, he ensures every investor feels confident and empowered in their financial decisions."
    ],
    stats: [
      { number: "10+", label: "Years Experience" },
      { number: "2500+", label: "Portfolios Guided" },
      { number: "100%", label: "Client Satisfaction" }
    ]
  },
  {
    id: 4,
    name: "Mr. Avesh Prajapati",
    role: "Asst. Vice President",
    title: "Risk Management",
    image: "Avesh Kumar Prajapati.png",
    bio: [
      "As Assistant Vice President, Mr. Avesh Prajapati specializes in holistic risk management and long-term asset allocation. His approach ensures that clients' portfolios are not just growing, but are securely protected against unforeseen downturns.",
      "He takes pride in building long-lasting relationships with clients, viewing every financial plan as a partnership. His proactive communication and strategic foresight have earned him immense trust.",
      "He frequently leads educational workshops, dedicating his time to elevating the financial literacy of the community."
    ],
    stats: [
      { number: "10+", label: "Years Experience" },
      { number: "4000+", label: "Risk Audits" },
      { number: "100%", label: "Client Commitment" }
    ]
  },
  {
    id: 5,
    name: "Mr. Rajnish Kumar",
    role: "Asst. Vice President",
    title: "Investment Strategy",
    image: "Rajnish Kumar.png",
    bio: [
      "Mr. Rajnish Kumar, Assistant Vice President, is a driving force behind our innovative investment strategies. He meticulously tracks market trends to identify unique growth opportunities that align with our clients' objectives.",
      "His philosophy centers on the power of compounding and the importance of starting early. He has successfully guided young professionals and seasoned investors alike in building robust retirement plans.",
      "With a commitment to transparency and excellence, he continually refines our advisory processes to deliver an exceptional client experience."
    ],
    stats: [
      { number: "8+", label: "Years Experience" },
      { number: "3500+", label: "Plans Delivered" },
      { number: "50+", label: "Market Analyses" }
    ]
  }
];

const ExpertSpeakers = () => {
  return (
    <section className="expert-section">
      <div
        className="expert-title-container container mx-auto px-4 lg:px-8 max-w-6xl"
        data-aos="fade-up"
      >
        <span className="expert-eyebrow">Expert Guidance</span>
        <h2 className="expert-title">Meet Your Expert</h2>
        <div className="expert-subtitle-line" />
        <p className="expert-subtitle">
          Get expert guidance on smart portfolio planning, risk management, and sustainable financial growth
        </p>
      </div>

      <div
        className="expert-slider-container"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          slidesPerView={1.5}
          centeredSlides={true}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1.05, spaceBetween: 16 },
            768: { slidesPerView: 1.2, spaceBetween: 28 },
            1024: { slidesPerView: 1.4, spaceBetween: 40 },
            1280: { slidesPerView: 1.6, spaceBetween: 50 },
          }}
          className="expert-swiper"
        >
          {expertData.map((expert) => (
            <SwiperSlide key={expert.id}>
              <div className="expert-slide-content">

                {/* ── Left Panel ── */}
                <div className="expert-poster">
                  <div className="expert-poster-top">
                    <span className="expert-poster-badge">Expert Guidance</span>
                    <h4 className="expert-poster-title">
                      Is your portfolio growing&hellip;<br />or just surviving?
                    </h4>
                  </div>

                  <div className="expert-image-wrapper">
                    <img
                      src={`${import.meta.env.BASE_URL}${expert.image}`}
                      alt={expert.name}
                    />
                  </div>

                  <div className="expert-poster-bottom">
                    <h3 className="expert-poster-name">{expert.name}</h3>
                    <p className="expert-poster-role">{expert.role}</p>
                  </div>
                </div>

                {/* ── Right Panel ── */}
                <div className="expert-details">
                  <h2 className="expert-name">{expert.name}</h2>
                  <span className="expert-role-badge">
                    {expert.role} &bull; {expert.title}
                  </span>

                  <div className="expert-bio">
                    {expert.bio.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="expert-stats">
                    {expert.stats.map((stat, idx) => (
                      <div key={idx} className="expert-stat-item">
                        <span className="expert-stat-number">{stat.number}</span>
                        <span className="expert-stat-label">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ExpertSpeakers;

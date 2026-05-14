import React, { useEffect, useState } from 'react';
import '../styles/Careers.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const openPositions = [
    {
      title: "Relationship Manager",
      department: "Sales",
      type: "Full-Time",
      location: "Noida, India",
      overview: "We are looking for a dynamic and target-driven Relationship Manager to promote and manage wealth strategies for our HNI clients. You will be responsible for building long-term client relationships and driving disciplined investment growth.",
      responsibilities: [
        "Identify and generate leads for wealth management and SIP services",
        "Conduct client meetings to understand their long-term financial goals",
        "Explain mutual fund solutions, ROI, and tax benefits to clients",
        "Prepare comprehensive financial proposals and presentations",
        "Coordinate with the investment team for portfolio design",
        "Close sales deals and achieve monthly/quarterly targets",
        "Maintain CRM data and track sales pipeline",
        "Stay updated with SEBI policies and market trends"
      ],
      requirements: [
        "Bachelor's degree in Finance, Marketing, or a related field",
        "Strong communication and negotiation skills",
        "Proven track record in financial sales or advisory",
        "Growth mindset with a target-oriented approach",
        "Ability to build trust and handle high-profile clients",
        "Knowledge of MS Excel and CRM tools"
      ]
    },
    {
      title: "Mutual Fund & SIP Advisor",
      department: "Advisory",
      type: "Full-Time",
      location: "Noida, India",
      overview: "Join our expert advisory team to guide families in disciplined SIP investments. You will be the bridge between market complexity and client financial stability.",
      responsibilities: [
        "Conduct in-depth market research and risk assessment",
        "Design customized SIP plans based on client risk profiles",
        "Educate clients on the importance of disciplined investing",
        "Monitor portfolio performance and suggest periodic rebalancing",
        "Assist clients with digital on-boarding and KYC processes",
        "Organize investor awareness programs and webinars"
      ],
      requirements: [
        "NISM Certification (Series V-A) preferred",
        "Deep understanding of Mutual Funds and SIP mechanics",
        "Analytical mindset with attention to detail",
        "Strong presentation skills",
        "Passion for financial literacy and wealth creation"
      ]
    },
    {
      title: "Life & Health Insurance Expert",
      department: "Customer Success",
      type: "Full-Time",
      location: "Noida, India",
      overview: "Provide comprehensive insurance protection strategies to secure client legacies. You will ensure our clients are protected against life's uncertainties.",
      responsibilities: [
        "Analyze client protection needs for Life and Health insurance",
        "Compare policies across providers to find the best fit",
        "Explain complex policy terms and inclusions in simple language",
        "Assist clients during the claim settlement process",
        "Manage renewals and cross-selling protection products",
        "Build trust through empathetic and transparent communication"
      ],
      requirements: [
        "Strong knowledge of IRDAI regulations and insurance products",
        "Minimum 2 years of experience in Insurance advisory",
        "Strong negotiation and closing skills",
        "Empathetic approach to client problem-solving",
        "Excellent verbal and written communication"
      ]
    },
    {
      title: "Operations Executive",
      department: "Operations",
      type: "Full-Time",
      location: "Noida, India",
      overview: "Manage back-end financial operations and ensure seamless transaction processing for our clients and advisory team.",
      responsibilities: [
        "Process KYC and investment applications with 100% accuracy",
        "Coordinate with AMCs and R&T Agents (CAMS/Karvy)",
        "Maintain digital records and physical documentation",
        "Handle client queries related to transaction status",
        "Update and manage internal CRM and reporting tools",
        "Assist in preparing daily/weekly operational reports"
      ],
      requirements: [
        "Graduate degree in any stream (Commerce preferred)",
        "Advanced proficiency in MS Excel and Word",
        "High level of attention to detail and accuracy",
        "Ability to work in a fast-paced environment",
        "Strong organizational and multitasking skills"
      ]
    }
  ];

  const values = [
    {
      icon: "🤝",
      title: "Rooted in Trust",
      desc: "We build long-term relationships through unwavering integrity and transparency in every financial decision."
    },
    {
      icon: "⚖️",
      title: "Financial Discipline",
      desc: "Our approach is centered on consistency and expert guidance, aligned with global regulatory standards."
    },
    {
      icon: "📈",
      title: "Wealth Growth",
      desc: "Join a team dedicated to helping families build stability through disciplined SIP and insurance planning."
    }
  ];

  return (
    <div className="careersContainer">
      {/* Hero Section */}
      <section className="careersHero">
        <div className="heroContent" data-aos="fade-up">
          <h1>Join the Future of Financial Discipline</h1>
          <p>
            Build your career at BlueAnt Finserv, where we combine expert advisory 
            with a commitment to transparency and long-term wealth stability.
          </p>
          <div className="heroBadges">
            <span className="badge">SEBI Aligned</span>
            <span className="badge">IRDAI Compliant</span>
            <span className="badge">Expert Led</span>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="whyJoinSection">
        <div className="sectionHeader" data-aos="fade-up">
          <h2>Why Work at <span className="textBlue">Blue</span><span className="textRed">ant</span>?</h2>
          <p>Be part of a culture that values expertise, discipline, and client success above all else.</p>
        </div>
        <div className="valueGrid">
          {values.map((v, i) => (
            <div className="valueCard" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="valueIcon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className="positionsSection" id="positions">
        <div className="sectionHeader" data-aos="fade-up">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-[#00afef] text-xs font-bold uppercase tracking-widest mb-6">Recruitment On-Hold</div>
          <h2>Explore Opportunities</h2>
          <p>While we don't have specific active openings at this moment, we are always looking for passionate professionals to join our family. Send your profile for future consideration.</p>
        </div>
        <div className="positionsList">
          {openPositions.map((pos, i) => (
            <div className="positionItem" key={i} data-aos="fade-up" data-aos-delay={i * 50} onClick={() => setSelectedJob(pos)}>
              <div className="posInfo">
                <h3>{pos.title}</h3>
                <div className="posMeta">
                  <span><i className="fa-solid fa-briefcase"></i> {pos.department}</span>
                  <span><i className="fa-solid fa-clock"></i> {pos.type}</span>
                  <span><i className="fa-solid fa-location-dot"></i> {pos.location}</span>
                </div>
              </div>
              <button className="applyBtn">Apply Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className="modalOverlay" onClick={() => setSelectedJob(null)}>
          <div className="jobModal" onClick={(e) => e.stopPropagation()}>
            <button className="closeModal" onClick={() => setSelectedJob(null)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            
            <div className="modalHeader">
              <h2>{selectedJob.title}</h2>
              <div className="modalMeta">
                <span><i className="fa-solid fa-location-dot"></i> {selectedJob.location}</span>
                <span><i className="fa-solid fa-briefcase"></i> {selectedJob.type}</span>
              </div>
            </div>

            <div className="modalBody">
              <div className="detailSection">
                <h4>Role Overview</h4>
                <p>{selectedJob.overview}</p>
              </div>

              <div className="detailSection">
                <h4>Key Responsibilities</h4>
                <ul className="respList">
                  {selectedJob.responsibilities.map((item, i) => (
                    <li key={i}><i className="fa-solid fa-circle-check" style={{ color: '#ED1C24' }}></i> {item}</li>
                  ))}
                </ul>
              </div>

              <div className="detailSection">
                <h4>Key Requirements</h4>
                <ul className="reqList">
                  {selectedJob.requirements.map((item, i) => (
                    <li key={i}><i className="fa-solid fa-check" style={{ color: '#00AEEF' }}></i> {item}</li>
                  ))}
                </ul>
              </div>

              <div className="applyCard">
                <h3>Ready to apply?</h3>
                <p>To apply for this position, please send your updated resume along with your details to our HR team.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <a href="mailto:hr@blueantindia.com" className="modalApplyBtn">
                    <i className="fa-solid fa-envelope"></i> Send Email to hr@blueantindia.com
                  </a>
                  <a href="tel:+919311011267" className="modalApplyBtn" style={{ backgroundColor: '#00AEEF' }}>
                    <i className="fa-solid fa-phone"></i> Call: +91 9311011267
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Life at BlueAnt */}
      <section className="lifeSection" id="life">
        <div className="lifeGrid">
          <div className="lifeContent" data-aos="fade-right">
            <h2>Life at <span className="textBlue">Blue</span><span className="textRed">ant</span></h2>
            <p>
              Our environment is built on collaboration and professional growth. We empower 
              our team with the tools and expertise needed to provide world-class financial 
              advisory to families across the country. Join a culture where financial discipline 
              meets innovation.
            </p>
            <div className="lifeStats">
              <div className="statItem">
                <h4>98%</h4>
                <p>Employee Satisfaction</p>
              </div>
              <div className="statItem">
                <h4>10+</h4>
                <p>Expert Advisors</p>
              </div>
              <div className="statItem">
                <h4>Growth</h4>
                <p>Focused Environment</p>
              </div>
            </div>
          </div>
          <div className="lifeImage" data-aos="fade-left">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" alt="Team collaborating at BlueAnt" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="careersCta">
        <div className="ctaCard" data-aos="zoom-in">
          <h2>Don't see a fit?</h2>
          <p>We're always open to meeting talent. Send your resume to careers@blueant.in</p>
          <a href="mailto:careers@blueant.in" className="ctaButton">Get in Touch</a>
        </div>
      </section>
    </div>
  );
};

export default Careers;

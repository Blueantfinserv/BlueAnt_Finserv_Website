import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const teamMembers = [
  { id: 1, name: "Mr. Rohit Raman", text: "Founder", img: "Rohit Raman.png" },
  { id: 2, name: "Mr. Sachin Narang", text: "Vice President", img: "Sachin Narang.png" },
  { id: 3, name: "Mr. Rahul Kumar", text: "Asst. Vice President", img: "Rahul Kumar.png" },
  { id: 4, name: "Mr. Avesh Prajapati", text: "Asst. Vice President", img: "Avesh Kumar Prajapati.png" },
  { id: 5, name: "Mr. Rajnish Kumar", text: "Asst. Vice President", img: "Rajnish Kumar.png" },
  { id: 6, name: "Mr. Akash Yadav", text: "Manager", img: "Akash Yadav.png" },
  { id: 7, name: "Mr. Vishnu Dutt", text: "Manager", img: "Vishnu Dutt.png" },
  { id: 8, name: "Mr. Jitendra Kumar", text: "Insurance Sales Manager", img: "Jitendra Kumar.png" },
  { id: 10, name: "Mr. Harsh Pandey", text: "Asst. RM", img: "Harsh Pandey.png" },
  { id: 11, name: "Mrs. Preeti Mahara", text: "Asst. CRM", img: "Preeti Mahara.png" },
  { id: 12, name: "Mrs. Monika Soni", text: "Asst. CRM", img: "Monika Soni.png" },
  { id: 13, name: "Mr. Vikram Agarwal", text: "Asst. RM", img: "Vikram_Agarwal.png" },
  { id: 14, name: "Mr. Yogendra Kumar", text: "Asst. RM", img: "Yogendra_Kumar.png" },
  { id: 15, name: "Mr. Mukesh Kumar", text: "Asst. RM", img: "Mukesh_Kumar.png" },
  { id: 16, name: "Mrs. Renu Verma", text: "Asst. CRM", img: "Renu Verma.png" },
];

const TeamSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-transparent relative" id="team-inner">
      {/* Premium Grid Pattern Background Overlay */}
      <div className="team-grid-pattern"></div>
      
      <div className="container mx-auto relative z-10">
        
        {/* Header */}
        <div className="team-header text-center" data-aos="fade-up">
          <span className="text-[#2563eb] font-black text-xs uppercase tracking-widest mb-4 inline-block">OUR EXPERTS</span>
          <h2 className="team-title">Meet Our <span>Family</span></h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-8"></div>
          <p className="team-subtitle">
            Behind every successful portfolio is a team of dedicated experts. Meet the minds powering your financial growth with decades of combined experience.
          </p>
        </div>

        {/* Team Grid */}
        <div className="team-grid">
          {teamMembers.map((member, idx) => (
            <div 
              key={member.id} 
              className="team-card group"
              data-aos="fade-up"
              data-aos-delay={(idx % 5) * 100}
            >
              <div className="team-image-wrapper">
                <img 
                  src={`${import.meta.env.BASE_URL}${member.img}`} 
                  alt={member.name} 
                  loading="lazy"
                  className="team-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://ui-avatars.com/api/?name=' + member.name + '&background=0D8ABC&color=fff';
                  }}
                />
              </div>
              <h3 className="team-name">
                {member.name}
              </h3>
              <span className="team-role-badge">
                {member.text}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TeamSection;
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
    <div className="bg-transparent overflow-hidden" id="team-inner">
      <div className="container mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-[#00afef] font-black text-xs uppercase tracking-widest mb-4 inline-block">OUR EXPERTS</span>
          <h2 className="text-4xl font-black text-[#0f172a] mb-4">Meet Our <span className="text-[#00afef]">Family</span></h2>
          <div className="w-20 h-1.5 bg-[#00afef] mx-auto rounded-full mb-8"></div>
          <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-3xl mx-auto">
            Behind every successful portfolio is a team of dedicated experts. Meet the minds powering your financial growth with decades of combined experience.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 md:gap-4 md:gap-8">
          {teamMembers.map((member, idx) => (
            <div 
              key={member.id} 
              className="bg-white rounded-3xl p-6 flex flex-col items-center text-center shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-delay={(idx % 5) * 100}
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full mb-6 overflow-hidden bg-slate-100 border-4 border-slate-50 group-hover:border-blue-100 transition-colors">
                <img 
                  src={`${import.meta.env.BASE_URL}${member.img}`} 
                  alt={member.name} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://ui-avatars.com/api/?name=' + member.name + '&background=0D8ABC&color=fff';
                  }}
                />
              </div>
              <h3 className="text-slate-900 font-bold text-sm md:text-base mb-1 group-hover:text-blue-600 transition-colors">
                {member.name}
              </h3>
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">
                {member.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TeamSection;
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TeamSection from "../../components/TeamSection";
import "../../styles/AboutPage.css";

const TeamPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white font-outfit pt-32">
      <main className="flex flex-col">
        <div className="about-belief-wrapper">
          <section className="team-section">
            <div className="team-container">
              <TeamSection />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default TeamPage;

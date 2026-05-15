import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ImpactStories from "../../components/ImpactStories";
import "../../styles/AboutPage.css";

const ImpactStoriesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white font-outfit pt-20">
      <main className="flex flex-col">
        <div className="about-belief-wrapper">
          <section className="stories-section beliefSection py-28 bg-slate-50">
            <div className="container mx-auto px-6 lg:px-12">
              <ImpactStories />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ImpactStoriesPage;

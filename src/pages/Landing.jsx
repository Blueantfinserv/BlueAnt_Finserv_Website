import React, { Suspense, lazy } from 'react';
import HeroFigma from '../components/HeroFigma';
import AboutPreview from '../components/AboutPreview';

// Below the fold components are lazy loaded
const Youtube = lazy(() => import('../components/Youtube'));
const FigmaSIPCalculator = lazy(() => import('../components/FigmaSIPCalculator'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const WhyBlueant = lazy(() => import('../components/WhyBlueant'));
const Milestones = lazy(() => import('../components/Milestones'));
const ExpertSpeakers = lazy(() => import('../components/ExpertSpeakers'));

const SectionLoader = () => (
  <div className="py-20 text-center opacity-50">
    <div className="spinner-border spinner-border-sm text-primary me-2"></div>
    Loading section...
  </div>
);

const Landing = () => {
  return (
    <div className="bg-white font-outfit selection:bg-blue-100 selection:text-blue-700 overflow-clip">
      <main className="flex flex-col">
        {/* 1. Hero Section */}
        <HeroFigma />

        {/* 2 & 3. About Blueant & Credibility Number Cards */}
        <AboutPreview />

        <Suspense fallback={<SectionLoader />}>
          {/* 5. Why Blueant */}
          <WhyBlueant />

          {/* 6. Expert / Founder Section */}
          <ExpertSpeakers />

          {/* 7. SIP Calculator */}
          <section className="py-24 bg-slate-50 border-t border-slate-100">
            <FigmaSIPCalculator />
          </section>

          {/* 8. CTA / Video Section */}
          <section className="py-24 bg-white border-t border-slate-50">
            <Youtube />
          </section>

          {/* 9. Milestones */}
          <Milestones />

          {/* 10. Testimonials */}
          <section className="py-24 bg-slate-50 border-t border-slate-100">
            <Testimonials />
          </section>
        </Suspense>
      </main>
    </div>
  );
}

export default Landing;

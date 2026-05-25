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
        {/* 1. Hero Section - Static */}
        <HeroFigma />

        {/* 2. Trust & About Preview - Static */}
        <AboutPreview />

        <Suspense fallback={<SectionLoader />}>
          {/* 3. SIP Calculator Section */}
          <section className="py-24 bg-slate-50 border-t border-slate-100">
            <FigmaSIPCalculator />
          </section>

          {/* 4. YouTube / Financial Freedom Section */}
          <section className="py-24 bg-white border-t border-slate-50">
            <Youtube />
          </section>

          {/* 4.5 Why Come to Blueant Section */}
          <WhyBlueant />

          {/* 4.6 Milestones Section */}
          <Milestones />

          {/* 4.7 Expert Speakers Section */}
          <ExpertSpeakers />

          {/* 5. Testimonials / Success Stories Section */}
          <section className="py-24 bg-slate-50 border-t border-slate-100">
            <Testimonials />
          </section>
        </Suspense>
      </main>
    </div>
  );
}

export default Landing;

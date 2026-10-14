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
  <div className="py-20 text-center opacity-70 flex items-center justify-center gap-2 text-slate-500 font-medium">
    <div className="animate-spin rounded-full h-5 w-5 border-2 border-slate-200 border-t-[#00afef]"></div>
    <span>Loading section...</span>
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
          {/* 9. Milestones */}
          <Milestones />

          {/* 5. Why Blueant */}
          <WhyBlueant />

          {/* 6. Expert / Founder Section */}
          <ExpertSpeakers />

          {/* 7. SIP Calculator */}
          <section className="bg-slate-50 border-t border-slate-100">
            <FigmaSIPCalculator />
          </section>

          {/* 8. CTA / Video Section */}
          <section className="bg-white border-t border-slate-50">
            <Youtube />
          </section>

          {/* 10. Testimonials */}
          <section className="bg-slate-50 border-t border-slate-100">
            <Testimonials />
          </section>
        </Suspense>
      </main>
    </div>
  );
}

export default Landing;

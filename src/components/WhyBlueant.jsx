import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/WhyBlueant.css';

const whyBlueantData = [
{
  id: 1,
  number: "01",
  title: "Clarity That Deepens With Time",
  desc: (
    <>
      Families stay when financial decisions become easier to understand, review, and refine.
      <br />
      Blueant keeps the conversation clear as life, goals, and markets change.
    </>
  ),
  img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop"
},
  {
  id: 2,
  number: "02",
  title: "Calm Through Every Market Cycle",
  desc: (
    <>
      Market phases change, but disciplined investors need steady conversations.
      <br />Blueant helps families stay focused on long-term direction instead of short-term noise.

    </>
  ),
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    number: "03",
    title: "One View of the Financial Journey",
    desc: (
    <>
      Investments, protection, goals, and family priorities are looked at together.
      <br />This brings more structure to decisions that are often taken separately.

    </>
  ),
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    number: "04",
    title: "A Relationship That Continues",
        desc: (
    <>
      The association does not stop after paperwork or product selection.
      <br />It continues through reviews, service support, education, and meaningful conversations.


    </>
  ),
    img: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=800&auto=format&fit=crop"
  }
];

const WhyBlueant = () => {
  const stackRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    const stack = stackRef.current;
    if (!stack) return;

    let frameId = null;
    let cardItems = [];
    const clamp = (value) => Math.min(1, Math.max(0, value));

    const measureCards = () => {
      const cards = Array.from(stack.querySelectorAll('.why-blueant-card'));

      cardItems = cards.map((card) => {
        const content = card.querySelector('.why-blueant-content');
        const image = card.querySelector('.why-blueant-image-wrapper');
        const imageHeight = image?.getBoundingClientRect().height || 0;
        const centerOffset = content ? Math.max(0, (imageHeight - content.scrollHeight) / 2) : 0;
        const stickyTop = parseFloat(window.getComputedStyle(card).top) || 0;

        return {
          card,
          content,
          centerOffset,
          stickyTop
        };
      });
    };

    const updateContentPositions = () => {
      frameId = null;

      cardItems.forEach((item, index) => {
        const { card, content, centerOffset, stickyTop } = item;

        if (!content) return;

        const cardRect = card.getBoundingClientRect();
        const nextItem = cardItems[index + 1];
        let progress = 0;

        if (nextItem) {
          const nextTop = nextItem.card.getBoundingClientRect().top;
          const start = stickyTop + cardRect.height + 120;
          const end = stickyTop + cardRect.height * 0.48;

          progress = clamp((start - nextTop) / (start - end));
        } else {
          const start = window.innerHeight * 0.8;
          const end = stickyTop + cardRect.height * 0.35;

          progress = clamp((start - cardRect.top) / (start - end));
        }

        content.style.setProperty('--content-offset', `${centerOffset * (1 - progress)}px`);
      });
    };

    const requestUpdate = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateContentPositions);
      }
    };

    const refreshMeasurements = () => {
      measureCards();
      requestUpdate();
    };

    refreshMeasurements();
    requestUpdate();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', refreshMeasurements);

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', refreshMeasurements);
    };
  }, []);

  return (
    <section className="why-blueant-section">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative">
        <h2 className="why-blueant-title" data-aos="fade-up">
          Why Come to Blueant?
        </h2>

        <div className="why-blueant-stack" ref={stackRef}>
          {whyBlueantData.slice(0, 3).map((item, index) => (
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

        <div className="why-blueant-final-wrapper">
          <div className="why-blueant-card final-sticky-card">
            <div className="why-blueant-image-wrapper">
              <img src={whyBlueantData[3].img} alt={whyBlueantData[3].title} loading="lazy" />
            </div>
            <div className="why-blueant-content static-content">
              <div className="why-blueant-number">{whyBlueantData[3].number}</div>
              <h3 className="why-blueant-card-title">{whyBlueantData[3].title}</h3>
              <p className="why-blueant-card-desc">{whyBlueantData[3].desc}</p>
            </div>
          </div>
          <div className="final-sticky-spacer"></div>
        </div>
      </div>
    </section>
  );
};

export default WhyBlueant;
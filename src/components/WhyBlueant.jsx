import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/WhyBlueant.css';

const whyBlueantData = [
  {
    id: 1,
    number: "01",
    title: "To Get Clarity That Deepens With Time",
    desc: (
      <>
        Families stay when financial decisions become easier to understand, review, and refine.
        <br />
        Blueant keeps the conversation clear as life, goals, and markets change.
      </>
    ),
    img: "01 whatsapp image.png"
  },
  {
    id: 2,
    number: "02",
    title: "To Stay Calm Through Every Market Cycle",
    desc: (
      <>
        Market phases change, but disciplined investors need steady conversations.
        <br />Blueant helps families stay focused on long-term direction instead of short-term noise.
      </>
    ),
    img: "02 whatsapp.png"
  },
  {
    id: 3,
    number: "03",
    title: "To Have A View of the Financial Journey",
    desc: (
      <>
        Investments, protection, goals, and family priorities are looked at together.
        <br />This brings more structure to decisions that are often taken separately.
      </>
    ),
    img: "03 whatsapp.png"
  },
  {
    id: 4,
    number: "04",
    title: "To Have A Relationship That Continues",
    desc: (
      <>
        The association does not stop after paperwork or product selection.
        <br />It continues through reviews, service support, education, and meaningful conversations.
      </>
    ),
    img: "04 whatsapp.png"
  }
];

const COVERED_SCALES = [0.88, 0.93, 0.97, 1.0];
const TOP_OFFSET = 0;

const WhyBlueant = () => {
  const stackRef  = useRef(null);
  const titleRef  = useRef(null);
  const sectionRef = useRef(null);
  const [expandedCardId, setExpandedCardId] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    const stack   = stackRef.current;
    const title   = titleRef.current;
    const section = sectionRef.current;
    if (!stack || !title || !section) return;

    let frameId  = null;
    let cardItems = [];
    const clamp  = (v) => Math.min(1, Math.max(0, v));

    const measureCards = () => {
      const cards = Array.from(stack.querySelectorAll('.why-blueant-card'));
      cardItems = cards.map((card) => {
        const content     = card.querySelector('.why-blueant-content');
        const cardHeight  = card.getBoundingClientRect().height || 0;
        const centerOffset = content
          ? Math.max(0, (cardHeight - content.scrollHeight) / 2+20)
          : 0;
        const stickyTop = parseFloat(window.getComputedStyle(card).top) || 0;
        return { card, content, centerOffset, stickyTop };
      });
    };

    const update = () => {
      frameId = null;

      // ── 1. Card stacking animation (unchanged) ──────────────────────────
      cardItems.forEach((item, index) => {
        const { card, content, centerOffset, stickyTop } = item;
        if (!content) return;

        const cardRect = card.getBoundingClientRect();
        const nextItem = cardItems[index + 1];
        let progress = 0;

        if (nextItem) {
          const nextTop = nextItem.card.getBoundingClientRect().top;
          const start   = stickyTop + cardRect.height + 120;
          const end     = stickyTop + cardRect.height * 0.48;
          progress = clamp((start - nextTop) / (start - end));
        } else {
          // Card 4 (last card): cardRect.top === stickyTop when stuck (e.g. 420px).
          // The old formula used window.innerHeight * 0.8 as start — on most screens
          // this is LESS than stickyTop, so progress instantly clamped to 1 and
          // the content never animated from bottom to center.
          //
          // Fix: use sectionRect.bottom instead. As the user scrolls through the
          // 80vh spacer after all cards have stacked, sectionRect.bottom drops
          // from ~innerHeight toward stickyTop, giving a clean 0→1 range.
          const sectionRect = section.getBoundingClientRect();
          const start = window.innerHeight + cardRect.height * 0.75;
          const end   = stickyTop + cardRect.height * 0.75;
          progress = clamp((start - sectionRect.bottom) / (start - end));
        }

        // Interpolate content position:
        //   progress=0 (active/front card)  → translateY(centerOffset) = vertically centered
        //   progress=1 (fully covered card) → translateY(TOP_OFFSET)   = near top of image area
        const contentOffset = centerOffset * (1 - progress) + TOP_OFFSET * progress;
        content.style.setProperty('--content-offset', `${contentOffset}px`);

        const coveredScale = COVERED_SCALES[index];
        const scale = 1.0 - (1.0 - coveredScale) * progress;
        card.style.transform = `scale(${scale})`;
      });

      // ── 2. Heading exit: scroll heading up BEFORE cards leave ───────────
      //
      // Strategy: while the section is in normal scroll range, the heading
      // sits at its natural sticky position (translateY 0).
      // Once the section bottom is close enough to leaving the viewport,
      // we start translating the heading upward so it exits visually FIRST,
      // ahead of the cards.
      //
      // "Exit zone" starts when the section bottom is 1.2× viewport height
      // away from the top of the viewport (i.e. the section is about to end).
      // By the time section bottom reaches ~0.6× viewport height, heading
      // is fully gone (translateY = -(its own height + navbar clearance)).

      const sectionRect  = section.getBoundingClientRect();
      const titleHeight  = title.offsetHeight;
      // How far above viewport top the section bottom currently is (negative = gone)
      // We want to start the exit when section bottom is still well in view.
      const exitStart    = window.innerHeight * 1.1;   // section bottom at 110vh → start
      const exitEnd      = window.innerHeight * 0.55;  // section bottom at 55vh  → fully gone
      const exitProgress = clamp(
        (exitStart - sectionRect.bottom) / (exitStart - exitEnd)
      );

      // How far to push the heading up: enough to clear it above the navbar
      const exitDistance = titleHeight + 100; // px to travel upward
      const headingOffset = exitProgress * -exitDistance;
      title.style.transform = `translateY(${headingOffset}px)`;

      // Also fade heading out as it exits so it doesn't just clip hard
      title.style.opacity = String(1 - exitProgress * 0.8);
    };

    const requestUpdate = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(update);
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
      if (frameId !== null) window.cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', refreshMeasurements);
    };
  }, []);

  return (
    <section className="why-blueant-section" ref={sectionRef}>
      <h2 className="why-blueant-title" ref={titleRef} data-aos="fade-up">
        Why Come to Blueant?
      </h2>

      <div className="why-blueant-stack" ref={stackRef}>
        {whyBlueantData.map((item, index) => (
          <div
            key={item.id}
            className={`why-blueant-card sticky-card sticky-card-${index + 1}`}
          >
            <h3 className="why-blueant-card-title why-blueant-mobile-card-title">{item.title}</h3>
            <div className="why-blueant-image-wrapper">
              <img src={item.img} alt={item.title} loading="lazy" />
            </div>
            <div className="why-blueant-content">
              <div className="why-blueant-number">{item.number}</div>
              <h3 className="why-blueant-card-title">{item.title}</h3>
              <p className={`why-blueant-card-desc ${expandedCardId === item.id ? 'expanded' : ''}`}>
                {item.desc}
              </p>
              <button
                type="button"
                className="why-blueant-more"
                onClick={() => {
                  setExpandedCardId(expandedCardId === item.id ? null : item.id);
                  window.requestAnimationFrame(() => {
                    window.dispatchEvent(new Event('resize'));
                  });
                }}
              >
                {expandedCardId === item.id ? 'Less' : 'More'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyBlueant;
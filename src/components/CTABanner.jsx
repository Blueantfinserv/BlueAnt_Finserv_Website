import { openConsultationModal } from "./ConsultationModal";

function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="cta-banner-inner">
        <h2 className="cta-banner-heading">Ready to Get Started?</h2>
        <p className="cta-banner-sub">
          Join 3,000+ families who are already building wealth with Blueant
          Finserv. Open your account in less than 10 minutes and start investing today.
        </p>
        <div className="cta-banner-btns">
          <button onClick={openConsultationModal} className="cta-btn cta-btn-white">
            Create Free Account <span style={{marginLeft: '4px'}}>→</span>
          </button>
          <button onClick={openConsultationModal} className="cta-btn cta-btn-outline">
            Talk to an Advisor
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTABanner;

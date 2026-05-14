import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { openConsultationModal } from "../components/ConsultationModal";

import { useLocation } from "react-router-dom";
import leftArrow from "/right arrow.png";
import rightArrow from "/left arrow.png";
import ServicesCards from "../components/ServicesCards";
import DetailedServices from "../components/DetailedServices";
import CTASection from "../components/CTASection";

const services = [
  {
    id: 1,
    title: "Taxes",
    image: "taxes.jpg",
    content: (
      <div className="taxes-content">
        <h3>Expert Tax Planning</h3>
        <p>
          At <strong>Blueant Finserv</strong>, we focus on helping clients stay compliant while identifying every eligible deduction to reduce overall liabilities.
        </p>
        <p>
          Our service emphasizes how responsible tax planning contributes to nation-building and public stability. Whether it's <strong>Income Tax, GST, or Capital Gains</strong>, our advisors ensure you are well-prepared for each financial year.
        </p>
        <h4>How We Help</h4>
        <ul>
          <li><strong>Compliance Management:</strong> Stay on the right side of the law with accurate filings.</li>
          <li><strong>Deduction Identification:</strong> Maximize savings under sections like 80C, 80D, and more.</li>
          <li><strong>Strategic Planning:</strong> Forecast liabilities and structure investments to minimize tax impact.</li>
          <li><strong>Nation Building:</strong> Understand the impact of your contributions on infrastructure and healthcare.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    title: "LOAN ADVISORY",
    image: "personal-loan.jpg",
    content: (
      <div className="taxes-content">
        <h3>Strategic Loan Guidance</h3>
        <p>
          Timely access to capital can be the catalyst for your personal and professional growth. At <strong>Blueant Finserv</strong>, "We don't push, we guide."
        </p>
        <p>
          We offer a comprehensive range of loan solutions designed to meet specific financial goals with flexibility and expert support.
        </p>
        <h4>Our Loan Portfolio</h4>
        <ul>
          <li><strong>Business Loans:</strong> Funding for expansion, working capital, and new ventures.</li>
          <li><strong>Personal Loans:</strong> Quick, unsecured funds for immediate personal needs.</li>
          <li><strong>Home Loans:</strong> Competitive rates for purchasing or constructing your dream home.</li>
          <li><strong>Education Loans:</strong> Empowering students to pursue global academic opportunities.</li>
          <li><strong>Vehicle Loans:</strong> Flexible financing for personal or commercial vehicles.</li>
        </ul>
        <h4>Key Benefits</h4>
        <ul>
          <li><strong>Custom Solutions:</strong> Tailored to your specific profile and repayment capacity.</li>
          <li><strong>Quick Approvals:</strong> Minimized documentation for faster turnaround times.</li>
          <li><strong>Competitive Rates:</strong> Access to the best market-aligned interest rates.</li>
          <li><strong>Expert Support:</strong> Professional guidance to manage EMIs effectively.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    title: "Budget",
    image: "budget.avif",
    content: (
      <div className="taxes-content">
        <h3>Understanding Budgeting</h3>
        <p>
          Effective budgeting is the foundation of financial stability. At <strong>Blueant Finserv</strong>, we understand that a well-planned budget is key to meeting both
          your short-term and long-term goals. By carefully monitoring your income and expenses, you can take control of your finances and ensure you’re always
          on track.<strong>Blueant Finserv</strong> provide personalized guidance to help you set realistic financial goals, save for major life events, and plan for emergencies, giving you
          peace of mind knowing that your finances are in order.
        </p>
        <p>
          Many people underestimate the power of budgeting and often find themselves struggling at the end of the month. With our expert advisors,
          we help you prioritize essential spending, eliminate unnecessary expenses, and optimize your savings. Whether you're a salaried professional,
          entrepreneur, or a homemaker, we tailor strategies that fit your lifestyle and income. Our goal is to make budgeting simple, practical, and empowering
          so that financial stress never becomes a burden.
        </p>
        <p>Budgeting is not about restrictions—it’s about awareness and direction. We encourage clients to treat budgets as financial blueprints that offer
          flexibility while ensuring discipline. From monthly tracking tools to forecasting future expenses, we provide hands-on support and digital resources
          to make the process seamless. Over time, a consistent budget cultivates financial habits that lead to wealth building and long-term success.</p>
        <p>
          Ultimately, Blueant Finserv serves as your trusted financial guide, helping you build a budget that’s realistic, flexible, and aligned with your
          life goals—so you can live with clarity, confidence, and control.
        </p>
        <h4>Benefits of Paying Taxes</h4>
        <ul>
          <li><strong>Financial Awareness:</strong> Understand exactly where your money is going each month, allowing you to make informed spending decisions.</li>
          <li><strong>Goal Clarity:</strong> Budgeting helps you prioritize and work steadily toward financial goals like buying a house, taking a vacation, or saving for emergencies.</li>
          <li><strong>Debt Control:</strong> With a structured budget, you can manage debt repayments efficiently and avoid unnecessary borrowing.</li>
          <li><strong>Savings Discipline:</strong> Consistent budgeting builds the habit of saving regularly, making future planning easier and stress-free.</li>
          <li><strong>Peace of Mind:</strong> A clear, well-managed budget reduces financial anxiety and helps you feel confident about your current and future financial situation.</li>
        </ul>
        <h4>Frequently Asked Questions</h4>
        <ol>
          <li><strong>Why is budgeting important for financial health?</strong> Budgeting gives you control over your money, helps avoid overspending, and ensures you're saving and investing wisely.</li>
          <li><strong>Can Blueant Finserv help me create a personal budget?</strong> Yes, our financial advisors provide personalized budgeting plans based on your income, expenses, lifestyle, and financial goals.</li>
          <li><strong>Is budgeting only for people with high incomes?</strong> Not at all. Budgeting is essential for everyone—whether you earn ₹10,000 or ₹10 lakh. It’s about managing what you have effectively.</li>
          <li><strong>How often should I update my budget?</strong> Ideally, you should review your budget monthly and adjust it whenever there are significant changes in income or expenses.</li>
          <li><strong>Will budgeting help me save more money?</strong> Absolutely. A good budget helps you identify saving opportunities and stick to a plan, which leads to more consistent savings over time.</li>
        </ol>
      </div>
    ),
  },
  {
    id: 4,
    title: "Kid's Needs",
    image: "kids saving.png",
    content: (<div className="taxes-content">
      <h3>Kid's Needs</h3>
      <p>
        Every parent dreams of a bright future for their children. At <strong>Blueant Finserv</strong>, we understand the importance of securing your child’s future and the financial
        challenges that come with it. Whether it’s planning for education, health, or extracurricular activities, we guide you through the process of building a
        comprehensive financial plan that ensures your child’s growth and success. With our expert advice, you can start saving early, create a structured plan, and
        make informed decisions to meet your child’s future needs.
      </p>
      <p>
        We help you assess your current financial situation and identify the best investment options to fund your child’s education, medical needs, and other milestones.
        From child education plans to health insurance, we provide tailored solutions that not only protect your child’s future but also allow your finances to grow over
        time. Our team also assists in setting up systematic investment plans (SIPs) and other avenues that can help you achieve your financial goals for your child in
        a disciplined and organized manner.
      </p>
      <p>At <strong>Blueant Finserv</strong>, we believe that planning for your child's future is an ongoing process. As your child grows, their needs and aspirations will change,
        and so should your financial strategy. We ensure that your plan evolves with your child’s development, making adjustments along the way to ensure their future
        is always within reach.</p>
      <p>
        Ultimately, <strong>Blueant Finserv</strong> acts as a trusted advisor, providing the support you need to secure your child's future while offering peace of mind throughout the planning process.
      </p>
      <h4>Benefits of Kids’ Needs Planning</h4>
      <ul>
        <li><strong>Early Goal-Based Planning :</strong> Start saving today for your child’s future educational and career needs.</li>
        <li><strong>Inflation-Proof Investments:</strong>  Beat rising costs with returns that grow alongside your child’s aspirations.</li>
        <li><strong>Emergency Protection: </strong> Safeguard your child's future even in unforeseen financial situations.</li>
        <li><strong>Customizable Plans:</strong>Choose from SIPs, insurance-linked investments, and education-specific funds.</li>
        <li><strong>Expert Financial Guidance :</strong> Our advisors help you balance short-term needs with long-term goals.</li>
      </ul>
      <h4>Frequently Asked Questions</h4>
      <ol>
        <li><strong>When should I start planning for my child’s future?</strong> The earlier the better. Ideally, start when your child is born to benefit from compounding.</li>
        <li><strong>What are the best investment options for kids’ education?</strong>Mutual funds, PPF, Sukanya Samriddhi Yojana (for daughters), and child insurance plans are good options.</li>
        <li><strong>How much should I save monthly for my child’s future?</strong>It depends on your child’s age, inflation, and the estimated cost of future education. Our planners help calculate it.</li>
        <li><strong>Can I change or pause my investment if my financial situation changes?</strong>Yes, most child investment plans offer flexibility for top-ups, pauses, and redemptions.</li>
        <li><strong>Will these plans cover foreign education as well?</strong>Yes, many of our plans can be designed to fund international education and related expenses.</li>
      </ol>
    </div>
    ),
  },
  {
    id: 5,
    title: "Retirement Corpus",
    image: "Retirments.png",
    content: (
      <div className="taxes-content">
        <h3>Retirement Planning</h3>
        <p>
          A well-planned retirement ensures that you enjoy your golden years without financial stress. At <strong>Blueant Finserv</strong>, we understand that
          retirement planning is about more than just saving—it’s about creating a strategy that aligns with your lifestyle goals. Whether you dream of traveling,
          pursuing hobbies, or simply relaxing without financial worries, our expert advisors help you build a comprehensive retirement plan tailored to your needs.
        </p>
        <p>
          We guide you through the entire retirement preparation process, starting with assessing your current financial situation and determining your future needs.
          Our team helps you understand the importance of starting early, how much you need to save, and the best investment avenues to grow your retirement corpus.
          We assist in selecting the right retirement products, from mutual funds to PPFs, ensuring a well-diversified portfolio that offers both security and growth
          potential.
        </p>
        <p>
          Ultimately, <strong>Blueant Finserv</strong> acts as a trusted advisor in your retirement planning journey, providing the expertise and guidance you need to secure a
          financially stable future, while ensuring peace of mind every step of the way.
        </p>
        <h4>Benefits of Retirement planning with Blueant Finserv</h4>
        <ul>
          <li><strong>Lifetime Income Security:</strong> Build a steady post-retirement income through smart investment plans.</li>
          <li><strong>Inflation-Protected Growth:</strong>Ensure your money retains value and purchasing power over the years.</li>
          <li><strong>Customized Planning: </strong> We tailor plans based on your current age, lifestyle, and retirement goals.</li>
          <li><strong>Tax-Efficient Solutions:</strong> Maximize savings through tax-benefit schemes like NPS and pension funds.</li>
          <li><strong>Peace of Mind:</strong> Stay worry-free knowing your future expenses, health needs, and emergencies are covered.</li>
        </ul>
        <h4>Frequently Asked Questions</h4>
        <ol>
          <li><strong> When should I start retirement planning?</strong> Ideally in your 20s or 30s, but it’s never too late to start securing your future.</li>
          <li><strong>How much money will I need after retirement?</strong>It depends on your lifestyle, inflation, and expected life expectancy. We help you calculate the ideal corpus.</li>
          <li><strong>What investment options are available for retirement?</strong>NPS, mutual funds, PPF, retirement-oriented insurance, and annuity plans are popular choices.</li>
          <li><strong>Can I modify my plan as I grow older?</strong> Yes, we offer flexible solutions that adapt to your changing needs, income, and market conditions.</li>
          <li><strong>Will my retirement plan cover medical expenses?</strong>Yes, we include health coverage and long-term care options as part of your retirement portfolio</li>
        </ol>
      </div>
    ),
  },
  {
    id: 7,
    title: "SIP (Systematic Investment Plans)",
    image: "Systematic_Inverstment_plan.png",
    content: (
      <div className="taxes-content">
        <h3>Systematic Investment Plans (SIP)</h3>
        <p>
          At <strong>Blueant Finserv</strong>, we believe that wealth creation is a marathon, not a sprint. A Systematic Investment Plan (SIP) allows you to invest small, regular amounts in mutual funds, harnessing the immense power of compounding over time while reducing the impact of market volatility.
        </p>
        <p>
          Whether you are planning for a down-payment, building a massive retirement corpus, or saving for your children's higher education, our expert advisors help you identify high-performing funds that perfectly align with your risk appetite, investment horizon, and ultimate life goals.
        </p>
        <h4>Benefits of Investing through SIP</h4>
        <ul>
          <li><strong>Rupee Cost Averaging:</strong> Automatically buy more units when prices are low and fewer when markets are high.</li>
          <li><strong>Disciplined Investing:</strong> Encourages a regular saving habit without disrupting your monthly budget.</li>
          <li><strong>Power of Compounding:</strong> Start early to generate wealth exponentially over the long term.</li>
          <li><strong>High Flexibility:</strong> Easily increase, decrease, or pause your SIPs as your financial situation changes.</li>
        </ul>
        <h4>Frequently Asked Questions</h4>
        <ol>
          <li><strong>What is the minimum amount to start an SIP?</strong> You can start your wealth-building journey with as little as ₹500 per month.</li>
          <li><strong>Can I withdraw my money in case of an emergency?</strong> Yes, open-ended mutual funds provide high liquidity, allowing easy partial or full withdrawals.</li>
          <li><strong>Do I need a Demat account for SIPs?</strong> No, a Demat account is not mandatory for regular mutual fund SIPs, simplifying the process.</li>
        </ol>
      </div>
    ),
  },
  {
    id: 8,
    title: "Loans & Stock Trading",
    image: "investment.jpg",
    content: (
      <div className="taxes-content">
        <h3>Loans & Stock Trading</h3>
        <p>
          At <strong>Blueant Finserv</strong>, we provide a unified platform for your credit and equity needs. Whether you are looking for <strong>fast loan support</strong> to meet immediate requirements or <strong>expert stock trading guidance</strong> to grow your capital, our team is here to assist.
        </p>
        <p>
          We position ourselves with a <strong>zero brokerage</strong> approach for long-term investors, ensuring that your returns aren't eaten away by hidden costs. Our loan advisory helps you secure the best rates with minimal documentation.
        </p>
        <h4>Key Features</h4>
        <ul>
          <li><strong>Fast Loan Processing:</strong> Quick turnaround for personal, business, and home loans.</li>
          <li><strong>Stock Advisory:</strong> institutional-grade research and timely market insights.</li>
          <li><strong>Zero Brokerage:</strong> Maximize your wealth with cost-effective trading solutions.</li>
          <li><strong>Portfolio Tracking:</strong> Real-time monitoring of your equity investments.</li>
        </ul>
        <h4>Frequently Asked Questions</h4>
        <ol>
          <li><strong>How quickly can I get a loan approved?</strong> Approvals usually happen within 24-48 hours post documentation.</li>
          <li><strong>Do you offer guidance for beginners in stock trading?</strong> Yes, we provide comprehensive education and hand-holding for new investors.</li>
          <li><strong>Is there any hidden charge in zero brokerage?</strong> No, we maintain complete transparency in our fee structure.</li>
        </ol>
      </div>
    ),
  },
  {
    id: 6,
    title: "INSURANCE ADVISORY",
    image: "insaurance.jpg",
    content: (
      <div className="taxes-content">
        <h3>Insurance Advisory</h3>
        <p>
          At <strong>Blueant Finserv</strong>, we understand that insurance isn’t a one-size-fits-all solution—it’s a personalized safety plan. Our insurance advisory services
          are designed to help you protect what matters most—your life, health, assets, and income. We offer expert guidance to help you understand the complexities of
          insurance products and make informed decisions tailored to your goals and risks.
        </p>
        <p>
          Whether you're exploring term life insurance, health coverage, motor insurance, or asset protection, our advisors evaluate your current financial status, dependents’
          needs, and long-term aspirations. We simplify jargon, explain the fine print, and ensure you're neither over-insured nor under-covered. Our goal is to provide clarity
          and confidence, helping you choose the right mix of insurance products that align with your lifestyle and risk appetite.
        </p>
        <p>
          Ultimately, <strong>Blueant Finserv</strong> serves as your trusted insurance advisor—ensuring your financial plans stay protected against life’s uncertainties,
          while providing peace of mind for you and your family every step of the way.
        </p>

        <h4>Benefits of Insurance Advisory with Blueant Finserv</h4>
        <ul>
          <li><strong>Personalized Recommendations:</strong> Get expert advice based on your age, family, income, and financial goals.</li>
          <li><strong>Wide Coverage Analysis:</strong> Understand your existing policies and identify gaps in your protection plan.</li>
          <li><strong>Cost-Efficient Planning:</strong> Avoid overpaying premiums by choosing the right plans with necessary features only.</li>
          <li><strong>Future-Proofing:</strong> Stay prepared for medical emergencies, life events, and unexpected financial setbacks.</li>
          <li><strong>End-to-End Support:</strong> From plan selection to claim guidance—we’re with you at every step.</li>
        </ul>

        <h4>Frequently Asked Questions</h4>
        <ol>
          <li><strong>Why do I need an insurance advisor?</strong> An advisor ensures you choose the right coverage, avoid costly mistakes, and stay financially protected.</li>
          <li><strong>What types of insurance should I consider?</strong> Life, health, term, critical illness, disability, and asset insurance based on your life stage and needs.</li>
          <li><strong>Can I have too much insurance?</strong> Yes—our team helps you balance adequate coverage without overpaying for unnecessary features.</li>
          <li><strong>How often should I review my insurance?</strong> At least once a year or after major life changes like marriage, childbirth, or career shifts.</li>
          <li><strong>Does Blueant Finserv help during claims?</strong> Absolutely—we assist with documentation, process tracking, and smooth claim settlement support.</li>
        </ol>
      </div>
    ),
  },
  {
    id: 7,
    title: "WILL & LEGACY",
    image: "wills_and_legacy.png",
    content: (
      <div className="taxes-content">
        <h3>Will & Legacy Planning</h3>
        <p>
          Planning your legacy isn’t just about wealth—it’s about ensuring your wishes are honored and your loved ones are cared for.
          At <strong>Blueant Finserv</strong>, we help you prepare a structured will and legacy plan that aligns with your values, goals,
          and family needs. By clearly documenting how your assets should be distributed, you not only reduce future conflicts but also
          provide peace of mind for everyone involved.
        </p>
        <p>
          Our advisors work closely with you to understand your estate, identify heirs, and recommend appropriate legal tools like wills,
          trusts, and nominations. We also help plan for potential estate taxes and liabilities, ensuring that your beneficiaries
          receive maximum benefit. Whether you're passing on wealth, property, or a family business, we ensure your legacy is preserved
          with care and clarity.
        </p>
        <p>
          Ultimately, <strong>Blueant Finserv</strong> serves as your trusted guide in legacy planning, helping you leave behind not just
          wealth, but a legacy of thoughtful decisions, financial security, and lasting values.
        </p>

        <h4>Benefits of Will & Legacy Planning with Blueant Finserv</h4>
        <ul>
          <li><strong>Clear Asset Distribution:</strong> Avoid disputes by clearly defining how your estate will be divided.</li>
          <li><strong>Peace of Mind:</strong> Ensure your loved ones are protected and your wishes are carried out exactly as intended.</li>
          <li><strong>Minimized Legal Complications:</strong> Reduce the risk of legal battles and probate issues with proper documentation.</li>
          <li><strong>Tax Efficiency:</strong> Structure your estate to minimize tax burdens for your heirs and beneficiaries.</li>
          <li><strong>Preserve Your Legacy:</strong> Maintain control over your assets and how they benefit future generations.</li>
        </ul>

        <h4>Frequently Asked Questions</h4>
        <ol>
          <li><strong>Why is writing a will important?</strong> It ensures your assets are distributed according to your wishes, avoiding family disputes and legal delays.</li>
          <li><strong>What happens if I die without a will?</strong> Your estate is distributed as per succession laws, which may not align with your preferences.</li>
          <li><strong>Can I update my will?</strong> Yes, we recommend reviewing your will periodically and updating it as life circumstances change.</li>
          <li><strong>Is a handwritten will valid?</strong> It may be, but a legally drafted and registered will is always more reliable and less prone to challenge.</li>
          <li><strong>Does Blueant Finserv offer legal help for will creation?</strong> Yes, we connect you with legal experts and provide end-to-end support in drafting, registering, and executing your will.</li>
        </ol>
      </div>
    ),
  },
  {
    id: 10,
    title: "Wealth Management",
    image: "investment.jpg",
    content: (
      <div className="taxes-content">
        <h3>Wealth Management</h3>
        <p>
          Wealth management at <strong>Blueant Finserv</strong> is about more than just numbers—it's about your life goals. Our <strong>portfolio advisory</strong> services are designed to create a roadmap for your financial freedom, ensuring that every asset is working toward your future.
        </p>
        <p>
          We focus on strategic <strong>asset allocation</strong> across equity, debt, and gold to balance risk and reward. Our <strong>retirement planning</strong> expertise ensures that you can maintain your lifestyle and dignity in your golden years without financial worry.
        </p>
        <h4>Our Pillars of Wealth Management</h4>
        <ul>
          <li><strong>Personalized Portfolio Advisory:</strong> Strategies tailored to your unique risk profile and goals.</li>
          <li><strong>Dynamic Asset Allocation:</strong> Rebalancing your portfolio to stay ahead of market cycles.</li>
          <li><strong>Tax-Efficient Planning:</strong> Maximizing your post-tax returns through smart investment choices.</li>
          <li><strong>Legacy Planning:</strong> Ensuring a smooth transfer of wealth to the next generation.</li>
        </ul>
        <h4>Frequently Asked Questions</h4>
        <ol>
          <li><strong>What is the minimum portfolio size for wealth management?</strong> We cater to both retail and HNI clients with customized solutions.</li>
          <li><strong>How often do you review the portfolio?</strong> We conduct quarterly reviews and need-based rebalancing.</li>
          <li><strong>Can you help with international investments?</strong> Yes, we provide guidance on various global investment avenues.</li>
        </ol>
      </div>
    ),
  },
];
const PrevArrow = ({ onClick }) => (
  <button className="custom-arrow prev-arrow" onClick={onClick}>
    <img src={leftArrow} alt="Previous" />
  </button>
);
const NextArrow = ({ onClick }) => (
  <button className="custom-arrow next-arrow" onClick={onClick}>
    <img src={rightArrow} alt="Next" />
  </button>
);
const ServicePage = () => {

  const location = useLocation();
  const selectedIndex = location.state?.selectedIndex ?? 0;

  const [activeContent, setActiveContent] = useState(services[selectedIndex].content);

  useEffect(() => {
    setActiveContent(services[selectedIndex].content);
  }, [selectedIndex]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024, // below 1024px (i.e. tablets and phones)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767, // below 768px (i.e. phones)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="service-page">
      <div className="relative h-[500px] lg:h-[600px] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}financial_planning_hero_1778128026138.png`} 
            alt="Financial Planning Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-transparent"></div>
        </div>

        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10 w-full">
          <div className="max-w-2xl" data-aos="fade-right">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-blue/10 backdrop-blur-md text-blue rounded-full border border-blue/20 shadow-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-blue animate-pulse"></span>
              <span className="text-xs font-black uppercase tracking-widest text-white">Our Solutions</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8">
              Personalized <br />
              <span className="text-blue">Financial Advice.</span>
            </h1>
            <p className="text-xl text-slate-300 font-medium mb-10 leading-relaxed">
              We help you see the big picture and create a plan tailored to your life goals.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={openConsultationModal} className="px-8 py-4 bg-blue text-white rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-navy transition-all shadow-lg shadow-blue/20">
                Talk to an Advisor
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust & Satisfaction Bar (Ameriprise Style) */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex items-center gap-6" data-aos="fade-up">
              <div className="text-5xl font-black text-navy">4.9<span className="text-blue text-3xl">/5</span></div>
              <div>
                <div className="flex text-yellow-400 mb-1">
                  {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                </div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Client Satisfaction Rating</div>
              </div>
            </div>
            <div className="h-12 w-px bg-slate-200 hidden lg:block"></div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
              <div data-aos="fade-up" data-aos-delay="100">
                <div className="text-2xl font-black text-navy">12+ Years</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Financial Experience</div>
              </div>
              <div data-aos="fade-up" data-aos-delay="200">
                <div className="text-2xl font-black text-navy">5000+</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Families Served</div>
              </div>
              <div data-aos="fade-up" data-aos-delay="300" className="hidden md:block">
                <div className="text-2xl font-black text-navy">98%</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Client Retention</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-6">Our Commitment to You</h2>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto font-medium">
              We provide personalized advice that helps you feel more confident about your financial future.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: "Personalized Advice", 
                desc: "We take the time to understand your goals and build a plan that's unique to you.",
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              },
              { 
                title: "Expert Guidance", 
                desc: "Our advisors are certified professionals with deep expertise in market-linked investments.",
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              },
              { 
                title: "Transparent Process", 
                desc: "No hidden costs. We maintain 100% transparency in every transaction and fee structure.",
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="w-16 h-16 bg-blue/5 text-blue rounded-2xl flex items-center justify-center mb-8">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-navy mb-4">{item.title}</h3>
                <p className="text-lg text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-white">
        <ServicesCards />
      </div>

      <div className="tagline py-12">Simplifying Complexity For You.</div>
      <p className="service-intro">
        At Blueant Finserv, our suite of specialized financial solutions is engineered to cut through market noise and deliver absolute clarity. Whether you are navigating intricate tax regulations, designing lifelong legacy plans, building an optimized stock portfolio, or securing structured loan facilities, our expert advisors work tirelessly to simplify the complexities of wealth management. Select a service below to discover how we can elevate your financial strategy.
      </p>

      <div className="paragraph-section">{activeContent}</div>

      <div className="slider-section">
        <Slider {...settings}>
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card"
              onClick={() => {
                setActiveContent(service.content);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <div className="image-placeholder">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />
              </div>
              <h4>{service.title}</h4>
            </div>
          ))}
        </Slider>
      </div>

      <div className="bg-slate-50 py-24">
        <DetailedServices />
      </div>

      <CTASection />

      <div className="map-container">
        <iframe
          src="https://maps.google.com/maps?q=28.6280253,77.3788567&z=17&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="eager"  // Remove lazy loading for now
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  );
};
export default ServicePage;

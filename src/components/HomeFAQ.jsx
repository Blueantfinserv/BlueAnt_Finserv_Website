import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    category: "SIP & Mutual Funds",
    color: "text-sky-500",
    borderColor: "border-sky-500",
    bgColor: "bg-sky-500",
    items: [
      {
        q: "What is a SIP and how does it work?",
        a: "SIP (Systematic Investment Plan) lets you invest a fixed amount every month in mutual funds — starting from just ₹500. It builds discipline, reduces risk through rupee-cost averaging, and helps you grow wealth steadily over time without timing the market."
      },
      {
        q: "Is SIP safe? Can I lose money?",
        a: "SIPs invest in market-linked mutual funds, so there is some market risk. However, long-term SIPs (5+ years) have historically delivered 12–15% average annual returns. Blueant Finserv helps you choose the right fund based on your risk profile."
      },
      {
        q: "Can I stop or pause my SIP anytime?",
        a: "Yes! Most mutual funds allow you to pause, reduce, or stop your SIP anytime without any penalty. There is no lock-in (except for ELSS tax-saving funds which have a 3-year lock-in)."
      },
      {
        q: "What is ELSS? Does it save tax?",
        a: "ELSS (Equity Linked Savings Scheme) is a type of mutual fund that qualifies for tax deduction under Section 80C — up to ₹1.5 Lakhs per year. It also has the shortest lock-in period (3 years) among all 80C investments."
      }
    ]
  },
  {
    category: "Insurance",
    color: "text-emerald-500",
    borderColor: "border-emerald-500",
    bgColor: "bg-emerald-500",
    items: [
      {
        q: "What types of insurance does Blueant Finserv offer?",
        a: "We offer Term Life Insurance, Health Insurance (individual & family floater), Motor Insurance, and more — all from IRDAI-approved providers. We help you compare and choose the best plan for your needs and budget."
      },
      {
        q: "How much life insurance cover do I need?",
        a: "A general rule is 10–15x your annual income. For example, if you earn ₹6 Lakhs/year, you should have at least ₹60–90 Lakhs of cover. Blueant's advisors help you calculate the exact amount based on your family's needs and liabilities."
      },
      {
        q: "What is the claim settlement ratio and why does it matter?",
        a: "Claim settlement ratio is the percentage of claims an insurer settles vs. those received. We partner with insurers who have 98%+ settlement ratios, so your family is truly protected when it matters the most."
      }
    ]
  },
  {
    category: "Loans",
    color: "text-fuchsia-500",
    borderColor: "border-fuchsia-500",
    bgColor: "bg-fuchsia-500",
    items: [
      {
        q: "What types of loans can Blueant Finserv help me get?",
        a: "We assist with Personal Loans (up to ₹25 Lakhs), Business Loans, Home Loans (up to ₹5 Crore), and Loans Against Mutual Funds. Our digital-first process ensures approvals within 24 hours for personal loans."
      },
      {
        q: "What is the minimum interest rate on loans?",
        a: "Interest rates start from 8.5% p.a. depending on the loan type, your credit profile, and lender. Home loans typically have the lowest rates. Personal loans and business loans may be slightly higher."
      },
      {
        q: "Will applying for a loan affect my CIBIL score?",
        a: "A hard inquiry happens only when a lender processes your application — this can slightly lower your CIBIL temporarily. We help you apply smartly — checking eligibility first — so your score is not affected unnecessarily."
      }
    ]
  },
  {
    category: "Stock Market & Trading",
    color: "text-orange-500",
    borderColor: "border-orange-500",
    bgColor: "bg-orange-500",
    items: [
      {
        q: "Do I need experience to start investing in the stock market?",
        a: "Not at all! Blueant Finserv provides expert advisory, daily research reports, and personalized guidance. Whether you're a beginner or experienced, we have plans suited to your knowledge level and risk appetite."
      },
      {
        q: "What is zero brokerage on equity delivery?",
        a: "When you buy and hold a stock for more than one day (delivery), we charge ₹0 brokerage. For intraday trading and F&O, we charge a flat ₹20 per order — one of the lowest in the industry."
      },
      {
        q: "Is my money safe with Blueant Finserv?",
        a: "Yes. Blueant Finserv is SEBI registered, and all your investments are held in your name in SEBI-regulated depositories (CDSL/NSDL). We are purely advisors — your funds are never held by us directly."
      }
    ]
  },
  {
    category: "General",
    color: "text-indigo-500",
    borderColor: "border-indigo-500",
    bgColor: "bg-indigo-500",
    items: [
      {
        q: "Is Blueant Finserv SEBI and IRDAI registered?",
        a: "Yes. Blueant Finserv is an AMFI Registered Mutual Fund Distributor and works with IRDAI-approved insurance providers. All our products and advice comply fully with SEBI and IRDAI regulations."
      },
      {
        q: "How do I get started with Blueant Finserv?",
        a: "Simply click 'Get Free Consultation' or call us directly. Our advisor will understand your financial goals, risk appetite, and income — and recommend the best investment and protection plan tailored just for you."
      },
      {
        q: "Are there any hidden fees or charges?",
        a: "Absolutely not. We believe in 100% transparent advisory. All charges are disclosed upfront before you invest. Our goal is your financial growth — not hidden commissions."
      }
    ]
  }
];

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (key) => setOpenIndex(openIndex === key ? null : key);

  return (
    <section className="bg-gradient-to-b from-[#f8fafc] to-[#eff6ff] py-[100px]">
      <div className="max-w-[800px] mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16" data-aos="fade-up">
          <div className="border border-blue-200 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 mb-6 shadow-sm">
            <span>❓</span> Got Questions?
          </div>
          <h2 className="text-[36px] sm:text-[44px] font-extrabold text-[#0b1f3a] leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-[16px] max-w-[500px] leading-relaxed">
            Everything you need to know about investing, insurance, loans & more — answered simply.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-10">
          {faqs.map((group, gi) => (
            <div key={gi} className="space-y-4" data-aos="fade-up" data-aos-delay={gi * 80}>
              
              {/* Category Pill */}
              <div className={`inline-flex items-center gap-2 border ${group.borderColor} ${group.color} bg-white px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-2 shadow-sm`}>
                <span className={`w-2 h-2 rounded-full ${group.bgColor}`}></span>
                {group.category}
              </div>
              
              <div className="space-y-3">
                {group.items.map((item, ii) => {
                  const key = `${gi}-${ii}`;
                  const isOpen = openIndex === key;

                  return (
                    <div
                      key={key}
                      onClick={() => toggle(key)}
                      className={`cursor-pointer transition-all duration-300 rounded-xl border ${
                        isOpen 
                          ? `border-l-4 ${group.borderColor} bg-white shadow-md` 
                          : "border-slate-200 bg-white shadow-sm hover:border-slate-300 hover:shadow-md"
                      }`}
                    >
                      <div className="p-5 sm:px-6 flex justify-between items-center gap-4">
                        <h4 className="text-[15px] sm:text-[16px] font-bold text-slate-800 leading-snug">
                          {item.q}
                        </h4>
                        <div 
                          className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center transition-colors duration-300 ${
                            isOpen ? `${group.bgColor} text-white shadow-md` : "bg-slate-50 text-slate-400"
                          }`}
                        >
                          {isOpen ? <Minus strokeWidth={2.5} size={16} /> : <Plus strokeWidth={2.5} size={16} />}
                        </div>
                      </div>

                      <div 
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isOpen ? "max-h-[500px] opacity-100 pb-5 px-5 sm:px-6" : "max-h-0 opacity-0 px-5 sm:px-6"
                        }`}
                      >
                        <div className="w-full h-[1px] bg-slate-100 mb-4"></div>
                        <p className="text-slate-600 text-[15px] leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex justify-center" data-aos="fade-up">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-sm w-full max-w-[500px]">
            <p className="text-slate-700 font-semibold text-[16px] mb-5">
              Still have questions? Our advisors are happy to help.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-bold text-[15px] transition-colors shadow-md hover:shadow-lg"
            >
              Talk to an Advisor →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

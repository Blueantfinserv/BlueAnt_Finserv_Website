import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Shield, HeartHandshake, Landmark, TrendingUp, ChevronLeft, ChevronRight, PieChart, ScrollText, Wallet, LineChart } from 'lucide-react';
import ServicesCards from "../components/ServicesCards";
import DetailedServices from "../components/DetailedServices";
import CTASection from "../components/CTASection";

const serviceCarouselData = [
  {
    id: 1,
    title: "RETIREMENT PLANNING",
    img: "https://www.blueantindia.com/assets/img/website-img/service/retirement.jpg",
    icon: <TrendingUp size={24} className="text-[#0ea5e9]" />
  },
  {
    id: 2,
    title: "MUTUAL FUNDS / SIP",
    img: "https://www.blueantindia.com/assets/img/website-img/service/investment-finacial-freedom-1.jpg",
    icon: <LineChart size={24} className="text-[#0ea5e9]" />
  },
  {
    id: 3,
    title: "TAX PLANNING",
    img: "https://www.blueantindia.com/assets/img/website-img/service/tax.jpg",
    icon: <PieChart size={24} className="text-[#0ea5e9]" />
  },
  {
    id: 4,
    title: "WILL & LEGACY",
    img: "https://www.blueantindia.com/assets/img/website-img/service/will-legacy.jpg",
    icon: <ScrollText size={24} className="text-[#0ea5e9]" />
  },
  {
    id: 5,
    title: "INSURANCE ADVISORY",
    img: "https://www.blueantindia.com/assets/img/website-img/service/insurance-advisary.jpg",
    icon: <Shield size={24} className="text-[#0ea5e9]" />
  },
  {
    id: 6,
    title: "KID'S NEEDS",
    img: "https://www.blueantindia.com/assets/img/website-img/service/kids-need.jpg",
    icon: <HeartHandshake size={24} className="text-[#0ea5e9]" />
  },
  {
    id: 7,
    title: "LOAN ADVISORY",
    img: "https://www.blueantindia.com/assets/img/website-img/service/loan-advisary.jpg",
    icon: <Landmark size={24} className="text-[#0ea5e9]" />
  },
  {
    id: 8,
    title: "BUDGETING",
    img: "https://www.blueantindia.com/assets/img/website-img/service/budgeting.jpg",
    icon: <Wallet size={24} className="text-[#0ea5e9]" />
  }
];

const ServicePage = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="service-page font-outfit selection:bg-blue-100">
      {/* New Hero Carousel Section */}
      <section className="bg-gradient-to-br from-[#1c1c1c] to-[#0a0a0a] pt-28 pb-40 overflow-hidden relative border-b border-slate-800">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-700/10 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-[700px]" data-aos="fade-right">
              <div className="inline-block px-4 py-1.5 bg-[#252525] rounded-md text-[#e2e8f0] text-xs font-black uppercase tracking-[0.1em] mb-6 shadow-sm border border-slate-700/50">
                Our Service
              </div>
              <h1 className="text-[32px] md:text-[44px] lg:text-[48px] font-bold text-white leading-[1.25] tracking-tight">
                We help you identify investment products for your different financial goals and priorities
              </h1>
            </div>
            
            {/* Custom Navigation */}
            <div className="flex items-center gap-4 shrink-0" data-aos="fade-left">
              <button ref={prevRef} className="w-12 h-12 flex items-center justify-center bg-[#e5e5e5] hover:bg-white text-black rounded-md transition-colors shadow-sm disabled:opacity-50">
                <ChevronLeft size={24} />
              </button>
              <button ref={nextRef} className="w-12 h-12 flex items-center justify-center bg-[#e5e5e5] hover:bg-white text-black rounded-md transition-colors shadow-sm disabled:opacity-50">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Swiper Carousel */}
          <div data-aos="fade-up" data-aos-delay="200" className="mx-[-1.5rem] px-[1.5rem] lg:mx-0 lg:px-0">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={24}
              slidesPerView={1.2}
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              breakpoints={{
                640: { slidesPerView: 2.2 },
                1024: { slidesPerView: 3.5 },
                1280: { slidesPerView: 4.2 },
              }}
              className="!overflow-visible"
            >
              {serviceCarouselData.map((item) => (
                <SwiperSlide key={item.id} className="h-auto">
                  <div className="bg-white rounded-[16px] overflow-hidden h-[400px] flex flex-col group cursor-pointer shadow-2xl transition-transform duration-500 hover:-translate-y-2">
                    {/* Image Area */}
                    <div className="h-[68%] w-full relative overflow-hidden">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500"></div>
                    </div>
                    
                    {/* Content Area */}
                    <div className="h-[32%] relative flex flex-col items-center justify-center px-6">
                      {/* Floating Icon */}
                      <div className="absolute -top-7 w-[52px] h-[52px] bg-[#f0f9ff] rounded-full flex items-center justify-center border-[4px] border-white shadow-sm z-10 group-hover:-translate-y-1 transition-transform duration-300">
                        {item.icon}
                      </div>
                      
                      <h3 className="text-[#0f172a] font-black text-[13px] tracking-wide text-center mt-5 group-hover:text-[#0ea5e9] transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Trust & Stats Bar */}
      <section className="bg-white border-b border-slate-100 relative z-20 -mt-12 mx-6 lg:mx-12 rounded-[2rem] shadow-xl">
        <div className="max-w-[1280px] mx-auto px-10 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex items-center gap-6" data-aos="fade-up">
              <div className="text-5xl font-black text-[#0f172a]">4.9<span className="text-blue-600 text-3xl">/5</span></div>
              <div>
                <div className="flex text-yellow-400 mb-1 text-sm">
                  {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                </div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Client Satisfaction Rating</div>
              </div>
            </div>
            <div className="h-12 w-px bg-slate-100 hidden lg:block"></div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-20">
              <div data-aos="fade-up" data-aos-delay="100">
                <div className="text-2xl font-black text-[#0f172a]">13+ Years</div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Experience</div>
              </div>
              <div data-aos="fade-up" data-aos-delay="200">
                <div className="text-2xl font-black text-[#0f172a]">5000+</div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Families Served</div>
              </div>
              <div data-aos="fade-up" data-aos-delay="300" className="hidden md:block">
                <div className="text-2xl font-black text-[#0f172a]">98%</div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Retention</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Grid (Hub) */}
      <div className="bg-slate-50 py-24">
        <ServicesCards />
      </div>

      {/* Intro Text */}
      <section className="py-24 bg-white overflow-hidden">
         <div className="max-w-[1280px] mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-[#0f172a] mb-8 leading-tight">
               Simplifying Complexity <br />
               <span className="text-blue-600">For You.</span>
            </h2>
            <p className="text-xl text-slate-500 max-w-4xl mx-auto leading-relaxed font-medium">
               At Blueant Finserv, our suite of specialized financial solutions is engineered to cut through market noise and deliver absolute clarity. Whether you are navigating intricate tax regulations, designing lifelong legacy plans, building an optimized stock portfolio, or securing structured loan facilities, our expert advisors work tirelessly to simplify the complexities of wealth management.
            </p>
         </div>
      </section>

      {/* Detailed Services Overview */}
      <div className="bg-slate-50 py-24 border-t border-slate-100">
        <DetailedServices />
      </div>

      {/* Footer Map & CTA */}
      <div className="mt-24">
         <CTASection />
      </div>

      <div className="w-full h-[400px] mt-24">
        <iframe
          src="https://maps.google.com/maps?q=28.6280253,77.3788567&z=17&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  );
};

export default ServicePage;

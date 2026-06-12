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
      <section className="bg-[#0b1120] overflow-x-clip relative border-b border-slate-800" style={{ paddingTop: '140px', paddingBottom: '100px' }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container relative z-10">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-[750px]" data-aos="fade-right">
              {/* Premium Fiduciary-style Badge */}
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-[11.5px] font-black uppercase tracking-[0.15em] mb-8 shadow-[0_4px_15px_rgba(37,99,235,0.1)] text-blue-400">
                <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)] animate-pulse"></span>
                Premium Financial Solutions
              </div>
              
              {/* Massive Attention-Grabbing Title */}
              <h1 className="text-[48px] lg:text-[64px] font-black text-white leading-[1.05] tracking-tight relative mb-6">
                Tailored Products For Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00afef] to-[#2563eb] drop-shadow-[0_0_15px_rgba(37,99,235,0.2)]">Financial Goals.</span>
              </h1>
              
              {/* Descriptive Paragraph */}
              <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-[650px] mb-4">
                We help you identify the right investment products tailored to your different priorities, ensuring a disciplined approach to wealth management and long-term success.
              </p>
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
          <div data-aos="fade-up" data-aos-delay="200" className="w-full">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={32}
              slidesPerView={1.15}
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
                1024: { slidesPerView: 2.8 },
                1280: { slidesPerView: 3.2 },
              }}
              className="!pb-16"
            >
              {serviceCarouselData.map((item) => (
                <SwiperSlide key={item.id} className="h-auto">
                  <div className="bg-white rounded-[32px] overflow-hidden h-[450px] flex flex-col group cursor-pointer border-[1.5px] border-slate-100 shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_30px_60px_rgba(37,99,235,0.15)] hover:border-blue-500/30">
                    {/* Image Area */}
                    <div className="h-[65%] w-full relative overflow-hidden">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>
                    </div>
                    
                    {/* Content Area */}
                    <div className="h-[35%] relative flex flex-col items-center justify-center px-8">
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

      {/* Main Services Grid (Hub) */}
      <div className="w-full">
        <ServicesCards />
      </div>



      {/* Detailed Services Overview */}
      <div className="bg-slate-50 py-24 border-t border-slate-100">
        <DetailedServices />
      </div>

    </div>
  );
};

export default ServicePage;

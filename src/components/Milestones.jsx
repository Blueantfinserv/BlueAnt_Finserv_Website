import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Users, CheckCircle, TrendingUp, Star, Clock } from 'lucide-react';
import 'swiper/css';
import '../styles/Milestones.css';

const milestonesData = [
  {
    id: 1,
    number: "2013",
    label: "Year Of Establishment",
    icon: <TrendingUp size={48} strokeWidth={1.5} />
  },
  {
    id: 2,
    number: "50+",
    label: "No. Of Employees",
    icon: <Users size={48} strokeWidth={1.5} />
  },
  {
    id: 3,
    number: "2600+",
    label: "Total Clients",
    icon: <Star size={48} strokeWidth={1.5} />
  },
  {
    id: 4,
    number: "200+",
    label: "Pincodes Served",
    icon: <CheckCircle size={48} strokeWidth={1.5} />
  },
  {
    id: 5,
    number: "33,544+",
    label: "Hours of personalized guidance delivered",
    icon: <Clock size={48} strokeWidth={1.5} />
  }
];

const Milestones = () => {
  return (
    <section className="milestones-section">
      <div className="container mx-auto w-full max-w-[1280px] px-[clamp(20px,5vw,40px)]">
        <h2 className="milestones-title" data-aos="fade-up">
          Our Milestones<br />Over the Years
        </h2>

        <div data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={'auto'}
            centeredSlides={true}
            loop={true}
            speed={400}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            className="milestones-swiper"
          >
            {milestonesData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="milestone-slide">
                  <div className="milestone-icon-wrapper">
                    {item.icon}
                  </div>
                  <div className="milestone-number">{item.number}</div>
                  <div className="milestone-label">{item.label}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Milestones;

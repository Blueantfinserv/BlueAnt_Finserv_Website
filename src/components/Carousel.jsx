import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import styles from './Carousel.module.scss';

function Carousel() {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesHeader}>
        <span className={styles.servicePill}>SERVICE</span>
        <h2 className={styles.serviceTitle}>Empowering You with the Right Services</h2>
      </div>

      <div className={styles.carouselWrapper}>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          speed={600}
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 300,
            modifier: 1.2,
            slideShadows: true,
          }}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          modules={[EffectCoverflow, Autoplay]}
          className={styles.carousel}
        >
          <SwiperSlide className={styles.swiperSlide}>
            <div className={styles.slide}>
              <img src="first slider.jpg" alt="Slide 1" loading="lazy" />
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <div className={styles.slide}>
              <img src="SIP slider.jpg" alt="Slide 2" loading="lazy" />
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <div className={styles.slide}>
              <img src="complexity slider.jpg" alt="Slide 3" loading="lazy" />
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <div className={styles.slide}>
              <img src="security sliders.jpg" alt="Slide 4" loading="lazy" />
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <div className={styles.slide}>
              <img src="loan slider.jpg" alt="Slide 5" loading="lazy" />
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <div className={styles.slide}>
              <img src="Tax slider.jpg" alt="Slide 6" loading="lazy" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Carousel;

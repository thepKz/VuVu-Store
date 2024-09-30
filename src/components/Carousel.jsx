import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../assets/CSS/Carousel.css';
import meo1 from '../images/meo1.webp';
import meo2 from '../images/meo2.webp';
import meo3 from '../images/meo3.png';

const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop={true}
    >
      <SwiperSlide>
        <img src={meo1} alt="Tiệm VuVu" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={meo2} alt="slide1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={meo3} alt="slide2" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
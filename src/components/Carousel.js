import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';

const Carousel = () => {
  return (
    <OwlCarousel
      className="owl-theme"
      loop
      margin={10}
      nav
      items={1}
      autoplay
      autoplayTimeout={5000}
      smartSpeed={1000}
      dots
    >
      <div className="item">
        <img src="images/mem.png" alt="Tiệm VuVu" />
        <div className="carousel-caption">
          <h1>Chào mừng bạn đến với</h1>
          <h1>Tiệm VuVu</h1>
          <p>Có thể mua ngay bây giờ!</p>
        </div>
      </div>
      <div className="item"><img src="images/slide1.png" alt="slide1" /></div>
      <div className="item"><img src="images/slide2.png" alt="slide2" /></div>
      <div className="item"><img src="images/slide3.png" alt="slide3" /></div>
    </OwlCarousel>
  );
};

export default Carousel;
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
 
const SliderComponent = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation]}
      autoplay={{ delay: 5000 }}
      navigation
      loop={true}
      className="home-slider owl-carousel owl-theme nav-circle mb-2"
    >
      <SwiperSlide>
        <div className="home-slide home-slide1 banner">
          <img
            className="slide-bg"
            src="/assets/images/demoes/demo36/slider/slide-1.jpg"
            alt="slider image"
          />
          <div className="container d-flex align-items-sm-center justify-content-sm-between justify-content-center flex-column flex-sm-row">
            <div className="banner-content content-left text-sm-right mb-sm-0 mb-2">
              <h2 className="text-shadow text-white font1 mb-0">TRENDY</h2>
              <h1 className="text-dark">GAMING</h1>
              <h3 className="text-dark mb-0">CHAIRS</h3>
              <h2 className="text-shadow text-white font1 mr-0 mb-0">DEALS</h2>
            </div>
            <div className="banner-content content-right">
              <h4>Porto Game Chair</h4>
              <h5 className="text-price text-transform-none mb-0">
                from <span>$299.99</span>
              </h5>
              <h5 className="coupon-sale-text">
                <span>to</span>
                <b className="text-white align-middle">
                  <sup>$</sup>
                  <em className="align-text-top">199</em>
                  <sup>99</sup>
                </b>
              </h5>
              <a href="demo36-shop.html" className="btn btn-dark btn-lg">Shop Now</a>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="home-slide home-slide2 banner banner-md-vw">
          <img
            className="slide-bg"
            src="/assets/images/demoes/demo36/slider/slide-2.jpg"
            alt="slider image"
          />
          <div className="container d-flex align-items-sm-center justify-content-center justify-content-sm-between flex-column-reverse flex-sm-row">
            <div className="banner-content content-left mt-2 mt-sm-0">
              <h4>Best Gadgets Deals</h4>
              <h5 className="coupon-sale-text">
                <span>from</span>
                <b className="text-white align-middle">
                  <sup>$</sup>
                  <em className="align-text-top">1</em>
                  <sup>99</sup>
                </b>
              </h5>
              <a href="demo36-shop.html" className="btn btn-dark btn-lg">Shop Now</a>
            </div>
            <div className="banner-content content-right text-sm-right">
              <h2 className="text-shadow text-white font1 mb-0">NEW</h2>
              <h1 className="text-dark">SELECTED</h1>
              <h3 className="text-dark mb-0">DEALS</h3>
              <h2 className="text-shadow text-white font1 mr-0 mb-0">RELEASES</h2>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderComponent;

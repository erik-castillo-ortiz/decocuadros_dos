// 'use client';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/autoplay';
// import slideData from '@/app/helpers/slides.json';
// import Link from 'next/link'; 

// const SliderComponent = () => {
//   const { slide1, slide2 } = slideData; 

//   return (
//     <Swiper
//       modules={[Autoplay, Navigation]}
//       // autoplay={{ delay: 5000 }}
//       navigation
//       loop={true}
//       className="home-slider owl-carousel owl-theme nav-circle mb-2"
//       style={{ padding: '2.4rem 0 2.9rem' }}
//     >
//       {/* Slide 1 */}
//       <SwiperSlide>
//         <div className="home-slide home-slide1 banner">
//           <img
//             className="slide-bg"
//             src={slide1.image} // Imagen desde el JSON
//             alt="slider image"
//           />
//           <div className="container d-flex align-items-sm-center justify-content-sm-between justify-content-center flex-column flex-sm-row">
//             <div className="banner-content content-left text-sm-right mb-sm-0 mb-2">
//               <h2 className="text-shadow text-white font1 mb-0">{slide1.title1}</h2>
//               <h1 className="text-dark">{slide1.title2}</h1>
//               <h3 className="text-dark mb-0">{slide1.title3}</h3>
//               <h2 className="text-shadow text-white font1 mr-0 mb-0">{slide1.title4}</h2>
//             </div>
//             <div className="banner-content content-right">
//               <h4>{slide1.productName}</h4>
//               <h5 className="text-price text-transform-none mb-0">
//                 from <span>{slide1.oldPrice}</span>
//               </h5>
//               <h5 className="coupon-sale-text">
//                 <span>to</span>
//                 <b className="text-white align-middle">
//                   <sup>$</sup>
//                   <em className="align-text-top">{slide1.newPriceMain}</em>
//                   <sup>{slide1.newPriceDecimal}</sup>
//                 </b>
//               </h5>
//               <Link href={slide1.buttonLink} passHref legacyBehavior>
//                 <a className="btn btn-dark btn-lg">{slide1.buttonText}</a>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </SwiperSlide>

//       {/* Slide 2 */}
//       <SwiperSlide>
//         <div className="home-slide home-slide2 banner banner-md-vw">
//           <img
//             className="slide-bg"
//             src={slide2.image} // Imagen desde el JSON
//             alt="slider image"
//           />
//           <div className="container d-flex align-items-sm-center justify-content-center justify-content-sm-between flex-column-reverse flex-sm-row">
//             <div className="banner-content content-left mt-2 mt-sm-0">
//               <h4>{slide2.productName}</h4>
//               <h5 className="coupon-sale-text">
//                 <span>from</span>
//                 <b className="text-white align-middle">
//                   <sup>$</sup>
//                   <em className="align-text-top">{slide2.newPriceMain}</em>
//                   <sup>{slide2.newPriceDecimal}</sup>
//                 </b>
//               </h5>
//               <Link href={slide2.buttonLink} passHref legacyBehavior>
//                 <a className="btn btn-dark btn-lg">{slide2.buttonText}</a>
//               </Link>
//             </div>
//             <div className="banner-content content-right">
//               <h2 className="text-shadow text-white font1 mb-0">{slide2.title1}</h2>
//               <h1 className="text-dark">{slide2.title2}</h1>
//               <h3 className="text-dark mb-0">{slide2.title3}</h3>
//               <h2 className="text-shadow text-white font1 mr-0 mb-0">{slide2.title4}</h2>
//             </div>
//           </div>
//         </div>
//       </SwiperSlide>
//     </Swiper>
//   );
// };

// export default SliderComponent;
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import slideData from '@/app/helpers/slides.json';
import Link from 'next/link'; 

const SliderComponent = () => {
  const { slide1, slide2 } = slideData; 

  return (
    <Swiper
      modules={[Autoplay, Navigation]}
      navigation
      loop={true}
      className="home-slider owl-carousel owl-theme nav-circle mb-2"
      style={{ padding: '2.4rem 0 2.9rem' }}
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="home-slide home-slide1 banner">
          <img
            className="slide-bg"
            src={slide1.image} // Imagen desde el JSON
            alt="slider image"
          />
          <div className="container d-flex align-items-sm-center justify-content-sm-between justify-content-center flex-column flex-sm-row">
            <div className="banner-content content-left text-sm-end mb-sm-0 mb-2">
              <h2 className="text-shadow text-white font1 mb-0">{slide1.title1}</h2>
              <h1 className="text-dark">{slide1.title2}</h1>
              <h3 className="text-dark mb-0">{slide1.title3}</h3>
              <h2 className="text-shadow text-white font1 me-0 mb-0">{slide1.title4}</h2>
            </div>
            <div className="banner-content content-right">
              <h4>{slide1.productName}</h4>
              <h5 className="text-price text-transform-none mb-0">
                from <span>{slide1.oldPrice}</span>
              </h5>
              <h5 className="coupon-sale-text">
                <span>to</span>
                <b className="text-white align-middle">
                  <sup>$</sup>
                  <em className="align-text-top">{slide1.newPriceMain}</em>
                  <sup>{slide1.newPriceDecimal}</sup>
                </b>
              </h5>
              <Link href={slide1.buttonLink} passHref legacyBehavior>
                <a className="btn btn-dark btn-lg">{slide1.buttonText}</a>
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div className="home-slide home-slide2 banner banner-md-vw">
          <img
            className="slide-bg"
            src={slide2.image} // Imagen desde el JSON
            alt="slider image"
          />
          <div className="container d-flex align-items-sm-center justify-content-center justify-content-sm-between flex-column-reverse flex-sm-row">
            <div className="banner-content content-left mt-2 mt-sm-0">
              <h4>{slide2.productName}</h4>
              <h5 className="coupon-sale-text">
                <span>from</span>
                <b className="text-white align-middle">
                  <sup>$</sup>
                  <em className="align-text-top">{slide2.newPriceMain}</em>
                  <sup>{slide2.newPriceDecimal}</sup>
                </b>
              </h5>
              <Link href={slide2.buttonLink} passHref legacyBehavior>
                <a className="btn btn-dark btn-lg">{slide2.buttonText}</a>
              </Link>
            </div>
            <div className="banner-content content-right text-sm-end">
              <h2 className="text-shadow text-white font1 mb-0">{slide2.title1}</h2>
              <h1 className="text-dark">{slide2.title2}</h1>
              <h3 className="text-dark mb-0">{slide2.title3}</h3>
              <h2 className="text-shadow text-white font1 me-0 mb-0">{slide2.title4}</h2>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderComponent;

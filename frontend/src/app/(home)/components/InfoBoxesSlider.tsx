'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import infoBoxes from '@/app/helpers/infoBoxes.json'; // Importar el JSON con los datos

const InfoBoxesSlider = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 5000 }}
      loop={false} // No necesitas loop según el ejemplo
      breakpoints={{
        576: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
        1400: { slidesPerView: 4 }
      }}
      spaceBetween={30}
      className="info-boxes-slider"
      allowTouchMove={true}
    >
      {infoBoxes.map((box, index) => (
        <SwiperSlide key={index}>
          <div className="info-box info-box-icon-left">
            <i className={`${box.icon} text-primary`}></i>
            <div className="info-box-content">
              <h4>{box.title}</h4>
              <p className="text-body">{box.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default InfoBoxesSlider;

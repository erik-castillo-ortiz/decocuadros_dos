import React, { useState } from 'react';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import ReactImageMagnify from 'react-image-magnify';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import type { Swiper as SwiperType } from 'swiper';

interface ImageGalleryProps {
  mainImage: string;
  gallery: string[];
  isHot?: boolean;
  discount?: string | null;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  mainImage,
  gallery,
  isHot,
  discount,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleSwiperInit = (swiper: SwiperType) => {
    setThumbsSwiper(swiper);
  };

  return (
    <div className="col-md-6 product-single-gallery mb-md-0">
      <div className="product-slider-container">
        <div className="label-group">
          {isHot && <div className="product-label label-hot">HOT</div>}
          {discount && (
            <div className="product-label label-sale">{discount}</div>
          )}
        </div>

        {/* Swiper principal con Zoom */}
        <div className="product-single-carousel owl-carousel owl-theme show-nav-hover owl-loaded owl-drag">
          <div className="owl-stage-outer">
            <div className="owl-stage">
              <SwiperComponent
                modules={[Navigation, Thumbs]}
                navigation
                thumbs={{ swiper: thumbsSwiper || undefined }}
                slidesPerView={1}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              >
                {[mainImage, ...gallery].map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="product-item">
                      <ReactImageMagnify
                        {...{
                          smallImage: {
                            alt: `Product image ${index}`,
                            isFluidWidth: true,
                            src: image,
                          },
                          largeImage: { src: image, width: 1200, height: 1200 },
                          enlargedImagePosition: 'over',
                        }}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </SwiperComponent>
            </div>
          </div>
        </div>

        {/* Miniaturas con Swiper */}
        <div className="prod-thumbnail owl-dots owl-carousel owl-theme show-nav-hover">
          <div className="owl-stage-outer">
            <div className="owl-stage">
              <SwiperComponent
                onSwiper={handleSwiperInit}
                modules={[Navigation, Thumbs]}
                slidesPerView={4}
                spaceBetween={10}
              >
                {[mainImage, ...gallery].map((image, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className={`owl-dot ${
                        activeIndex === index ? 'active' : ''
                      }`}
                      onClick={() => setActiveIndex(index)}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index}`}
                        className="product-thumbnail"
                        style={{
                          cursor: 'pointer',
                          maxWidth: '100%',
                          height: 'auto',
                        }}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </SwiperComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;

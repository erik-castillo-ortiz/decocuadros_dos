// producto/components/ImageGallery.tsx

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
  const [activeImage, setActiveImage] = useState<string | null>(mainImage);

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

        {/* Imagen principal con Swiper y Zoom */}
        <SwiperComponent
          modules={[Navigation, Thumbs]}
          navigation
          thumbs={{ swiper: thumbsSwiper || undefined }}
          slidesPerView={1}
          className="product-single-carousel"
          onSlideChange={(swiper) => {
            setActiveImage(
              swiper.slides[swiper.activeIndex].querySelector('img')?.src || ''
            );
          }}
        >
          <SwiperSlide>
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: 'Main product image',
                  isFluidWidth: true,
                  src: mainImage,
                },
                largeImage: { src: mainImage, width: 1200, height: 1200 },
                enlargedImagePosition: 'over',
              }}
            />
          </SwiperSlide>
          {gallery.map((image, index) => (
            <SwiperSlide key={index}>
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: `Gallery image ${index}`,
                    isFluidWidth: true,
                    src: image,
                  },
                  largeImage: { src: image, width: 1200, height: 1200 },
                  enlargedImagePosition: 'over',
                }}
              />
            </SwiperSlide>
          ))}
        </SwiperComponent>

        {/* Miniaturas con Swiper */}
        <SwiperComponent
          onSwiper={handleSwiperInit}
          modules={[Navigation, Thumbs]}
          slidesPerView={4}
          spaceBetween={10}
          className="prod-thumbnail mt-3"
        >
          <SwiperSlide>
            <img
              src={mainImage}
              alt="Main thumbnail"
              onClick={() => setActiveImage(mainImage)}
              className={activeImage === mainImage ? 'active-thumbnail' : ''}
              style={{ cursor: 'pointer', maxWidth: '100px' }}
            />
          </SwiperSlide>
          {gallery.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Gallery thumbnail ${index}`}
                onClick={() => setActiveImage(image)}
                className={activeImage === image ? 'active-thumbnail' : ''}
                style={{ cursor: 'pointer', maxWidth: '100px' }}
              />
            </SwiperSlide>
          ))}
        </SwiperComponent>
      </div>
    </div>
  );
};

export default ImageGallery;
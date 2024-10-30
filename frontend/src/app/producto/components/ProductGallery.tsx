// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';

// interface ProductGalleryProps {
//   mainImage: string;
//   gallery: string[];
// }

// const ProductGallery: React.FC<ProductGalleryProps> = ({
//   mainImage,
//   gallery,
// }) => {
//   return (
//     <div className="product-slider-container">
//       <Swiper navigation loop>
//         {[mainImage, ...gallery].map((image, index) => (
//           <SwiperSlide key={index}>
//             <img
//               className="product-single-image"
//               src={image}
//               alt={`product-image-${index}`}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default ProductGallery;
// producto/components/ProductGallery.tsx

import React, { useState } from 'react';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import ReactImageMagnify from 'react-image-magnify';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

interface ProductGalleryProps {
  mainImage: string;
  gallery: string[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({
  mainImage,
  gallery,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="product-slider-container">
      <SwiperComponent
        modules={[Navigation, Thumbs]}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        slidesPerView={1}
        className="product-single-carousel"
      >
        {[mainImage, ...gallery].map((image, index) => (
          <SwiperSlide key={index}>
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
          </SwiperSlide>
        ))}
      </SwiperComponent>

      <SwiperComponent
        onSwiper={setThumbsSwiper}
        modules={[Navigation, Thumbs]}
        slidesPerView={4}
        spaceBetween={10}
        className="prod-thumbnail mt-3"
      >
        {[mainImage, ...gallery].map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Thumbnail ${index}`}
              style={{ cursor: 'pointer', maxWidth: '100px' }}
            />
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </div>
  );
};

export default ProductGallery;

// import React, { useState } from 'react';
// import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
// import { Navigation, Thumbs } from 'swiper/modules';
// import ReactImageMagnify from 'react-image-magnify';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/thumbs';

// interface ProductGalleryProps {
//   mainImage: string;
//   gallery: string[];
//   isHot?: boolean;
//   discount?: string | null;
// }

// const ProductGallery: React.FC<ProductGalleryProps> = ({
//   mainImage,
//   gallery,
//   isHot = false,
//   discount = null,
// }) => {
//   const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

//   return (
//     <div className="product-slider-container">
//       {/* Etiquetas de producto */}
//       <div className="label-group">
//         {isHot && <div className="product-label label-hot">HOT</div>}
//         {discount && <div className="product-label label-sale">{discount}</div>}
//       </div>
//       <SwiperComponent
//         modules={[Navigation, Thumbs]}
//         navigation
//         thumbs={{ swiper: thumbsSwiper }}
//         slidesPerView={1}
//         className="product-single-carousel"
//       >
//         {[mainImage, ...gallery].map((image, index) => (
//           <SwiperSlide key={index}>
//             <ReactImageMagnify
//               {...{
//                 smallImage: {
//                   alt: `Product image ${index}`,
//                   isFluidWidth: true,
//                   src: image,
//                 },
//                 largeImage: { src: image, width: 1200, height: 1200 },
//                 enlargedImagePosition: 'over',
//               }}
//             />
//           </SwiperSlide>
//         ))}
//       </SwiperComponent>

//       <SwiperComponent
//         onSwiper={setThumbsSwiper}
//         modules={[Navigation, Thumbs]}
//         slidesPerView={4}
//         spaceBetween={10}
//         className="prod-thumbnail mt-3"
//       >
//         {[mainImage, ...gallery].map((image, index) => (
//           <SwiperSlide key={index}>
//             <img
//               src={image}
//               alt={`Thumbnail ${index}`}
//               style={{ cursor: 'pointer', maxWidth: '100px' }}
//             />
//           </SwiperSlide>
//         ))}
//       </SwiperComponent>
//     </div>
//   );
// };

// export default ProductGallery;
// import React, { useState } from 'react';
// import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
// import { Navigation, Thumbs } from 'swiper/modules';
// import ReactImageMagnify from 'react-image-magnify';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/thumbs';
// // import './ProductGallery.css'; // Asegúrate de tener el archivo de estilos CSS para responsive y active styles

// interface ProductGalleryProps {
//   mainImage: string;
//   gallery: string[];
//   isHot?: boolean;
//   discount?: string | null;
// }

// const ProductGallery: React.FC<ProductGalleryProps> = ({
//   mainImage,
//   gallery,
//   isHot = false,
//   discount = null,
// }) => {
//   const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <div className="product-slider-container">
//       {/* Etiquetas de producto */}
//       <div className="label-group">
//         {isHot && <div className="product-label label-hot">HOT</div>}
//         {discount && <div className="product-label label-sale">{discount}</div>}
//       </div>

//       {/* Swiper principal con imagen y zoom */}
//       <SwiperComponent
//         modules={[Navigation, Thumbs]}
//         navigation
//         thumbs={{ swiper: thumbsSwiper }}
//         slidesPerView={1}
//         className="product-single-carousel"
//         onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
//       >
//         {[mainImage, ...gallery].map((image, index) => (
//           <SwiperSlide key={index}>
//             <ReactImageMagnify
//               {...{
//                 smallImage: {
//                   alt: `Product image ${index}`,
//                   isFluidWidth: true,
//                   src: image,
//                 },
//                 largeImage: { src: image, width: 1200, height: 1200 },
//                 enlargedImagePosition: 'over',
//               }}
//             />
//           </SwiperSlide>
//         ))}
//       </SwiperComponent>

//       {/* Swiper de miniaturas */}
//       <SwiperComponent
//         onSwiper={setThumbsSwiper}
//         modules={[Navigation, Thumbs]}
//         slidesPerView={4}
//         spaceBetween={10}
//         className="prod-thumbnail mt-3"
//       >
//         {[mainImage, ...gallery].map((image, index) => (
//           <SwiperSlide key={index} className="owl-dot">
//             <img
//               src={image}
//               alt={`Thumbnail ${index}`}
//               onClick={() => setActiveIndex(index)}
//               className={`prod-thumbnail ${
//                 activeIndex === index ? 'active-thumbnail' : ''
//               }`}
//             />
//           </SwiperSlide>
//         ))}
//       </SwiperComponent>
//     </div>
//   );
// };

// export default ProductGallery;
// import React, { useState } from 'react';
// import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
// import { Navigation, Thumbs } from 'swiper/modules';
// import ReactImageMagnify from 'react-image-magnify';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/thumbs';

// interface ProductGalleryProps {
//   mainImage: string;
//   gallery: string[];
//   isHot?: boolean;
//   discount?: string | null;
// }

// const ProductGallery: React.FC<ProductGalleryProps> = ({
//   mainImage,
//   gallery,
//   isHot = false,
//   discount = null,
// }) => {
//   const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

//   return (
//     <>
//       <div className="product-slider-container">
//         {/* Etiquetas de producto */}
//         <div className="label-group">
//           {isHot && <div className="product-label label-hot">HOT</div>}
//           {discount && (
//             <div className="product-label label-sale">{discount}</div>
//           )}
//         </div>

//         {/* Swiper para la galería principal */}
//         <SwiperComponent
//           modules={[Navigation, Thumbs]}
//           navigation
//           thumbs={{ swiper: thumbsSwiper }}
//           slidesPerView={1}
//           className="product-single-carousel owl-carousel owl-theme show-nav-hover"
//         >
//           {[mainImage, ...gallery].map((image, index) => (
//             <SwiperSlide key={index}>
//               <div className="product-item">
//                 <ReactImageMagnify
//                   {...{
//                     smallImage: {
//                       alt: `Product image ${index}`,
//                       isFluidWidth: true,
//                       src: image,
//                     },
//                     largeImage: { src: image, width: 1200, height: 1200 },
//                     enlargedImagePosition: 'over',
//                   }}
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </SwiperComponent>

//         {/* <span className="prod-full-screen">
//           <i className="icon-plus"></i>
//         </span> */}
//       </div>

//       {/* Swiper para las miniaturas */}
//       <SwiperComponent
//         onSwiper={setThumbsSwiper}
//         modules={[Navigation, Thumbs]}
//         slidesPerView={4}
//         spaceBetween={10}
//         className="prod-thumbnail owl-dots owl-carousel owl-theme show-nav-hover"
//       >
//         {[mainImage, ...gallery].map((image, index) => (
//           <SwiperSlide key={index}>
//             <div className="owl-dot">
//               <img
//                 src={image}
//                 alt={`Thumbnail ${index}`}
//                 className="product-thumbnail"
//                 // width="110"
//                 // height="110"
//                 style={{ cursor: 'pointer', maxWidth: '100%', height: 'auto' }}
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </SwiperComponent>
//     </>
//   );
// };

// export default ProductGallery;
// import React, { useState } from 'react';
// import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
// import { Navigation, Thumbs } from 'swiper/modules';
// import ReactImageMagnify from 'react-image-magnify';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/thumbs';

// interface ProductGalleryProps {
//   mainImage: string;
//   gallery: string[];
//   isHot?: boolean;
//   discount?: string | null;
// }

// const ProductGallery: React.FC<ProductGalleryProps> = ({
//   mainImage,
//   gallery,
//   isHot = false,
//   discount = null,
// }) => {
//   const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

//   return (
//     <>
//       <div className="product-slider-container">
//         {/* Etiquetas de producto */}
//         <div className="label-group">
//           {isHot && <div className="product-label label-hot">HOT</div>}
//           {discount && (
//             <div className="product-label label-sale">{discount}</div>
//           )}
//         </div>

//         {/* Swiper para la galería principal con contenedores adicionales */}
//         <div className="product-single-carousel owl-carousel owl-theme show-nav-hover owl-loaded owl-drag">
//           <div className="owl-stage-outer">
//             <div className="owl-stage">
//               {/* Swiper para la galería principal */}
//               <SwiperComponent
//                 modules={[Navigation, Thumbs]}
//                 navigation
//                 thumbs={{ swiper: thumbsSwiper }}
//                 slidesPerView={1}
//                 // className="product-single-carousel owl-carousel owl-theme show-nav-hover"
//               >
//                 {[mainImage, ...gallery].map((image, index) => (
//                   <SwiperSlide key={index}>
//                     <div className="product-item">
//                       <ReactImageMagnify
//                         {...{
//                           smallImage: {
//                             alt: `Product image ${index}`,
//                             isFluidWidth: true,
//                             src: image,
//                           },
//                           largeImage: { src: image, width: 1200, height: 1200 },
//                           enlargedImagePosition: 'over',
//                         }}
//                       />
//                     </div>
//                   </SwiperSlide>
//                 ))}
//               </SwiperComponent>
//             </div>
//           </div>
//         </div>

//         {/* <span className="prod-full-screen">
//           <i className="icon-plus"></i>
//         </span> */}
//       </div>

//       {/* Swiper para las miniaturas con contenedores adicionales */}
//       <div className="prod-thumbnail owl-dots owl-carousel owl-theme show-nav-hover">
//         <div className="owl-stage-outer">
//           <div className="owl-stage">
//             <SwiperComponent
//               onSwiper={setThumbsSwiper}
//               modules={[Navigation, Thumbs]}
//               slidesPerView={4}
//               spaceBetween={10}
//             >
//               {[mainImage, ...gallery].map((image, index) => (
//                 <SwiperSlide key={index}>
//                   <div className="owl-dot">
//                     <img
//                       src={image}
//                       alt={`Thumbnail ${index}`}
//                       className="product-thumbnail"
//                       // width="110"
//                       // height="110"
//                       style={{
//                         cursor: 'pointer',
//                         maxWidth: '100%',
//                         height: 'auto',
//                       }}
//                     />
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </SwiperComponent>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductGallery;
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
  isHot?: boolean;
  discount?: string | null;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({
  mainImage,
  gallery,
  isHot = false,
  discount = null,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="product-slider-container">
        {/* Etiquetas de producto */}
        <div className="label-group">
          {isHot && <div className="product-label label-hot">HOT</div>}
          {discount && (
            <div className="product-label label-sale">{discount}</div>
          )}
        </div>

        {/* Swiper para la galería principal con contenedores adicionales */}
        <div className="product-single-carousel owl-carousel owl-theme show-nav-hover owl-loaded owl-drag">
          <div className="owl-stage-outer">
            <div className="owl-stage">
              <SwiperComponent
                modules={[Navigation, Thumbs]}
                navigation
                thumbs={{ swiper: thumbsSwiper }}
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
      </div>

      {/* Swiper para las miniaturas con contenedores adicionales */}
      <div className="prod-thumbnail owl-dots owl-carousel owl-theme show-nav-hover">
        <div className="owl-stage-outer">
          <div className="owl-stage">
            <SwiperComponent
              onSwiper={setThumbsSwiper}
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
    </>
  );
};

export default ProductGallery;

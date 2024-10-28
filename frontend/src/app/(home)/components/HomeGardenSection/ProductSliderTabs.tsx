// 'use client';
// import React, { useState, useEffect } from 'react';
// import {
//   fetchBestSellers,
//   fetchNewArrivals,
//   fetchBestRatings,
// } from '@/app/(home)/components/services/Services';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { Navigation } from 'swiper/modules';
// import { Product } from '@/app/(home)/components/types';
// import Item from '../SpecialOffers/Item';

// type TabOption = 'featured' | 'new' | 'best';

// interface ProductSliderTabsProps {
//   categoryIds: number[] | 'All';
//   limit: number;
// }

// const ProductSliderTabs: React.FC<ProductSliderTabsProps> = ({
//   categoryIds,
//   limit,
// }) => {
//   const [activeTab, setActiveTab] = useState<TabOption>('featured');
//   const [products, setProducts] = useState<Product[]>([]);

//   const loadProducts = async (tab: TabOption) => {
//     let fetchedProducts: Product[] = [];
//     switch (tab) {
//       case 'featured':
//         fetchedProducts = await fetchBestSellers(categoryIds, limit);
//         break;
//       case 'new':
//         fetchedProducts = await fetchNewArrivals(categoryIds, limit);
//         break;
//       case 'best':
//         fetchedProducts = await fetchBestRatings(categoryIds, limit);
//         break;
//     }
//     setProducts(fetchedProducts);
//   };

//   useEffect(() => {
//     loadProducts(activeTab);
//   }, [activeTab]);

//   return (
//     <div
//       className="product-slider-tab appear-animate bg-white carousel-with-bg animated fadeIn appear-animation-visible"
//       data-animation-name="fadeIn"
//       data-animation-delay="100"
//       style={{ animationDuration: '1000ms' }}
//     >
//       <div className="heading shop-list d-flex align-items-center flex-wrap justify-content-center justify-content-md-start">
//         <ul
//           className="nav ml-0 justify-content-center mb-0"
//           id="myTab"
//           role="tablist"
//         >
//           <li className="nav-item">
//             <button
//               className={`nav-link ${activeTab === 'featured' ? 'active' : ''}`}
//               onClick={() => setActiveTab('featured')}
//             >
//               Featured
//             </button>
//           </li>
//           <li className="nav-item">
//             <button
//               className={`nav-link ${activeTab === 'new' ? 'active' : ''}`}
//               onClick={() => setActiveTab('new')}
//             >
//               New Arrivals
//             </button>
//           </li>
//           <li className="nav-item mr-0">
//             <button
//               className={`nav-link ${activeTab === 'best' ? 'active' : ''}`}
//               onClick={() => setActiveTab('best')}
//             >
//               Best Ratings
//             </button>
//           </li>
//         </ul>
//       </div>
//       <div
//         className="products-slider owl-carousel nav-circle owl-theme pb-0 owl-loaded owl-drag"
//         // data-animation-name="fadeIn"
//         // data-animation-delay="100"
//         // style={{ animationDuration: '1000ms' }}
//       >
//         <div className="tab-content">
//           <div className="tab-pane fade show active" role="tabpanel">
//             <div className="owl-stage-outer">
//               <div className="owl-stage">
//                 <Swiper
//                   key={activeTab} // Clave dinámica para forzar la re-renderización en cambio de pestaña
//                   modules={[Navigation]}
//                   spaceBetween={1}
//                   slidesPerView={2}
//                   navigation
//                   breakpoints={{
//                     576: { slidesPerView: 3 },
//                     768: { slidesPerView: 4 },
//                     992: { slidesPerView: 4 },
//                   }}
//                   className="products-slider owl-carousel nav-circle owl-theme pb-0"
//                 >
//                   {products.map((product) => (
//                     <SwiperSlide key={product.id} className="owl-item active">
//                       <Item product={product} />
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductSliderTabs;
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Product } from '@/app/(home)/components/types';
import Item from '../SpecialOffers/Item';

interface ProductSliderTabsProps {
  products: Product[];
  slidesPerViewConfig: {
    [width: number]: { slidesPerView: number };
  };
}

const ProductSliderTabs: React.FC<ProductSliderTabsProps> = ({
  products,
  slidesPerViewConfig,
}) => {
  return (
    <div className="products-slider owl-carousel nav-circle carousel-with-bg owl-theme pb-0 owl-loaded owl-drag">
      <div className="owl-stage-outer">
        <div className="owl-stage">
          <Swiper
            modules={[Navigation]}
            spaceBetween={1}
            slidesPerView={2}
            navigation
            breakpoints={slidesPerViewConfig}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id} className="owl-item active">
                <Item product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProductSliderTabs;

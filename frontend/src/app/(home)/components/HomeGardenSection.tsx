'use client';

// import CategoriesContainer from './HomeGardenSection/CategoriesContainer';
// import React, { useState, useEffect } from 'react';
// import TabNavigation from './TabNavigation';
// import ProductSliderTabs from './HomeGardenSection/ProductSliderTabs';
// import WidgetOffers from './HomeGardenSection/WidgetOffers';
// import {
//   fetchBestSellers,
//   fetchNewArrivals,
//   fetchBestRatings,
// } from '@/app/(home)/components/services/Services';
// import { Product } from '@/app/(home)/components/types';

import React, { useState, useEffect } from 'react';
import TabNavigation from './TabNavigation';
import ProductSliderTabs from './HomeGardenSection/ProductSliderTabs';
import WidgetOffers from './HomeGardenSection/WidgetOffers';
import CategoriesContainer from './HomeGardenSection/CategoriesContainer';

import {
  fetchBestSellers,
  fetchNewArrivals,
  fetchBestRatings,
} from '@/app/(home)/components/services/Services';
import { Product } from '@/app/(home)/components/types';

type TabOption = 'featured' | 'new' | 'best';

const HomeAndGardenSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabOption>('featured');
  const [products, setProducts] = useState<Product[]>([]);
  const categoryIds = [1, 2, 3];
  const limit = 8;

  useEffect(() => {
    const loadProducts = async () => {
      let fetchedProducts: Product[] = [];
      switch (activeTab) {
        case 'featured':
          fetchedProducts = await fetchBestSellers(categoryIds, limit);
          break;
        case 'new':
          fetchedProducts = await fetchNewArrivals(categoryIds, limit);
          break;
        case 'best':
          fetchedProducts = await fetchBestRatings(categoryIds, limit);
          break;
      }
      setProducts(fetchedProducts);
    };
    loadProducts();
  }, [activeTab]);

  // Configuración de `slidesPerView` con `SwiperOptions`
  const slidesPerViewConfig = {
    576: { slidesPerView: 3 }, // Mostrar 3 productos en dispositivos con un ancho de al menos 576px
    768: { slidesPerView: 4 }, // Mostrar 4 productos en dispositivos con un ancho de al menos 768px
    992: { slidesPerView: 4 }, // Mostrar 6 productos en dispositivos con un ancho de al menos 992px
  };
  return (
    <div
      className="bg-white appear-animate animated fadeIn appear-animation-visible"
      data-animation-name="fadeIn"
      data-animation-delay="100"
      style={{ animationDuration: '1000ms' }}
    >
      <div className="row">
        <div className="col-xl-9 col-xl-9cols pr-xl-0">
          <CategoriesContainer />
          {/* <ProductSliderTabs categoryIds={categoryIds} limit={limit} /> */}
          <div
            className="product-slider-tab appear-animate bg-white carousel-with-bg animated fadeIn appear-animation-visible"
            data-animation-name="fadeIn"
            data-animation-delay="100"
            style={{ animationDuration: '1000ms' }}
          >
            <div className="heading shop-list d-flex align-items-center flex-wrap justify-content-center justify-content-md-start">
              <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
            </div>

            <div className="tab-content">
              <div className="tab-pane fade show active" role="tabpanel">
                <div className="products-slider owl-carousel nav-circle owl-theme pb-0 owl-loaded owl-drag">
                  <ProductSliderTabs
                    products={products}
                    key={activeTab}
                    slidesPerViewConfig={slidesPerViewConfig}
                  />
                </div>
              </div>
            </div>

            {/* <WidgetOffers /> */}
          </div>
        </div>
        <div className="col-xl-3 col-xl-3cols">
          <WidgetOffers />
        </div>
      </div>
    </div>
  );
};

export default HomeAndGardenSection;

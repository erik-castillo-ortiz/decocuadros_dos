'use client';
import React, { useState, useEffect } from 'react';
import TabNavigation from './TabNavigation';
// import ProductSliderTabs from './ProductSliderTabs';
import {
  fetchBestSellers,
  fetchNewArrivals,
  fetchBestRatings,
} from '@/app/(home)/components/services/Services';
import { Product } from '@/app/(home)/components/types';
import ProductSliderTabs from './HomeGardenSection/ProductSliderTabs';

type TabOption = 'featured' | 'new' | 'best';

const SelectProducts: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabOption>('featured');
  const [products, setProducts] = useState<Product[]>([]);
  const categoryIds = [1, 2, 3];
  const limit = 8;

  const loadProducts = async (tab: TabOption) => {
    let fetchedProducts: Product[] = [];
    switch (tab) {
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

  useEffect(() => {
    loadProducts(activeTab);
  }, [activeTab]);

  // Configuración de `slidesPerView` con `SwiperOptions`
  const slidesPerViewConfig = {
    576: { slidesPerView: 3 }, // Mostrar 3 productos en dispositivos con un ancho de al menos 576px
    768: { slidesPerView: 4 }, // Mostrar 4 productos en dispositivos con un ancho de al menos 768px
    992: { slidesPerView: 6 }, // Mostrar 6 productos en dispositivos con un ancho de al menos 992px
  };
  return (
    <div
      className="product-slider-tab selected-products-section appear-animate bg-white animated fadeIn appear-animation-visible"
      data-animation-name="fadeIn"
      data-animation-delay="100"
      style={{ animationDuration: '1000ms' }}
    >
      <div className="heading shop-list d-flex flex-lg-row flex-column align-items-lg-center bg-gray mb-0 pl-0 pr-0 pt-2">
        <h4 className="section-title text-transform-none mb-0 ml-0">
          Selected Products
        </h4>
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        <a className="view-all ml-auto" href="demo36-shop.html">
          View All<i className="fas fa-long-arrow-alt-right"></i>
        </a>
      </div>
      <div className="tab-content">
        <ProductSliderTabs
          products={products}
          key={activeTab}
          slidesPerViewConfig={slidesPerViewConfig}
        />
      </div>
    </div>
  );
};

export default SelectProducts;

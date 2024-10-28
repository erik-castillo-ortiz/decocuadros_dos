import React from 'react';
import ProductSlider from './ProductSlider';

const RecentlyViewed: React.FC = () => {
  return (
    <div className="recent-products-section appear-animate animated fadeIn appear-animation-visible">
      <div className="heading shop-list d-flex align-items-center flex-wrap bg-gray mb-0 ps-0 pe-0">
        <h4 className="section-title text-transform-none mb-0 me-0">
          Recently Viewed Products
        </h4>
        <a className="view-all ms-auto" href="demo36-shop.html">
          View All<i className="fas fa-long-arrow-alt-right"></i>
        </a>
      </div>

      <div className="products-slider owl-carousel owl-theme carousel-with-bg nav-circle pb-0 owl-loaded owl-drag">
        <ProductSlider categoryId={1} productLimit={10} />
      </div>
    </div>
  );
};

export default RecentlyViewed;

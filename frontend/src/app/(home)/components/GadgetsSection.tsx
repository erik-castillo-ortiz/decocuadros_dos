import React from 'react';

import ProductSlider from './ProductSlider';
// import Banners from './Banners';
import LargeBanner from './LargeBanner';

const GadgetsSection = () => {
  return (
    <div className="bg-gray">
      <div className="container">
        <div
          className="fater-categories-container bg-white"
          data-animation-name="fadeIn"
          data-animation-delay={100}
          style={{ animationDuration: '1000ms' }}
        >
          <div className="categories-container-title">
            <h4 className="section-title">Cuadros Florales</h4>
          </div>
          <div className="categories-container-prod">
            <ProductSlider categoryId={2} productLimit={10} background={true} />
          </div>
          {/* <ProductSlider categoryId={1} productLimit={10} /> */}
        </div>

        <LargeBanner />
      </div>
    </div>
  );
};

export default GadgetsSection;

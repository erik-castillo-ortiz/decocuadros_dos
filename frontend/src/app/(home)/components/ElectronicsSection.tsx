import React from 'react';

import ProductSlider from './ProductSlider';
import Banners from './Banners';

const ElectronicsSection = () => {
  return (
    <div className="bg-gray">
      <div className="container">
        <div
          className="categories-container bg-white"
          data-animation-name="fadeIn"
          data-animation-delay={100}
          style={{ animationDuration: '1000ms' }}
        >
          <h4 className="section-title">Electronics</h4>

          {/* Banners */}
          <Banners />
        </div>
        {/* Carrusel de productos */}
        <ProductSlider categoryId={1} productLimit={10} />
      </div>
    </div>
  );
};

export default ElectronicsSection;

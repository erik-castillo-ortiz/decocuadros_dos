// 'use client';

import FeaturedProduct from './SpecialOffers/FeaturedProduct';
import Item from './SpecialOffers/Item';
import productData from '@/app/helpers/products2.json'; 

const DealProductSection = () => {
  const { sectionTitle, featuredProduct, products } = productData; // Obtener datos desde el JSON

  return (
    <div className="deal-products-section">
      <h2 className="section-title d-flex align-items-center text-transform-none">
        <i className="icon-percent-shape" />
        {sectionTitle}
      </h2>
      <div
        className="row appear-animate animated fadeInUpShorter appear-animation-visible"
        data-animation-name="fadeInUpShorter"
        data-animation-delay={200}
        style={{ animationDuration: '1000ms' }}
      >
        {/* Producto destacado */}
        <div className="col-md-4 mb-2 mb-md-0">
          <FeaturedProduct product={featuredProduct} />
        </div>

        {/* Lista de productos */}
        <div className="col-md-8">
          <div className="products-with-divide">
            <div className="row row-joined">
              {products.slice(0, 8).map((product) => (
                <div key={product.id} className="col-xl-3 col-sm-4 col-6">
                  <Item product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealProductSection;

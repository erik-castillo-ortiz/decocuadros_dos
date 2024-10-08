import FeaturedProduct from './SpecialOffers/FeaturedProduct';
import DealInnerProductsSection from './DealInnerProductsSection';

const DealProductSection = () => {
  return (
    <div className="deal-products-section">
      <h2 className="section-title d-flex align-items-center text-transform-none">
        <i className="icon-percent-shape" />
        Special Offers
      </h2>
      <div
        className="row appear-animate animated fadeInUpShorter appear-animation-visible"
        data-animation-name="fadeInUpShorter"
        data-animation-delay={200}
        style={{ animationDuration: '1000ms' }}
      >
        {/* Producto destacado */}
        <div className="col-md-4 mb-2 mb-md-0">
          <FeaturedProduct />
        </div>

        {/* Lista de productos */}
        <div className="col-md-8">
          <DealInnerProductsSection />
        </div>
      </div>
    </div>
  );
};

export default DealProductSection;

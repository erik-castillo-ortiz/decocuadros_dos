'use client';

import FeaturedProduct from "./SpecialOffers/FeaturedProduct";
import ProductList from "./SpecialOffers/ProductList";


interface DealProductSectionProps {
    sectionTitle: string;
    featuredProduct: {
      id: number;
      name: string;
      category: string;
      image: string;
      rating: number;
      oldPrice: string;
      newPrice: string;
      offerEnds: string;
    };
    products: Array<{
      id: number;
      name: string;
      category: string;
      image: string;
      rating: number;
      oldPrice: string;
      newPrice: string;
      isHot?: boolean;
      discount?: string | null;
    }>;
  }
    

const DealProductSection = ({
  sectionTitle,
  featuredProduct,
  products,
}: DealProductSectionProps) => {
  return (
    <div className="deal-products-section">
      <h2 className="section-title d-flex align-items-center text-transform">
        <i className="icon-percent-shape" />
        {sectionTitle}
      </h2>
      <div className="row" data-animation-name="fadeInUpShorter" data-animation-delay={200}>
        <div className="col-md-4 mb-2 mb-md-0">
          <FeaturedProduct product={featuredProduct} />
        </div>
        <div className="col-md-8">
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
};

export default DealProductSection;

// import React from 'react';
// import ProductSlider from '@/app/(home)/components/ProductSlider';

// interface RelatedProductsProps {
//   categoryId: number;
// }

// const RelatedProducts: React.FC<RelatedProductsProps> = ({ categoryId }) => {
//   return (
//     <div className="products-section pt-0 pb-2">
//       <h2 className="section-title pb-3">Related Products</h2>
//       <ProductSlider categoryId={categoryId} productLimit={10} />
//     </div>
//   );
// };

// export default RelatedProducts;
// producto/components/RelatedProducts.tsx

import React from 'react';
import ProductSlider from '@/app/(home)/components/ProductSlider';

// interface RelatedProductsProps {
//   categoryId: number;
// }

const RelatedProducts: React.FC = () => {
  return (
    <div className="products-section pt-0 pb-2">
      <h2 className="section-title pb-3">Related Products</h2>
      <ProductSlider categoryId={1} productLimit={10} />
    </div>
  );
};

export default RelatedProducts;

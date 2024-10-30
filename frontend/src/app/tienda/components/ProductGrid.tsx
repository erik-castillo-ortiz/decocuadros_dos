import React from 'react';

import { Product } from '@/app/(home)/components/types';
import Item from '@/app/(home)/components/SpecialOffers/Item';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => (
  <div className="row row-joined divide-line products-group">
    {products.map((product) => (
      <div key={product.id} className="col-6 col-md-4 col-lg-3">
        <Item product={product} />
      </div>
    ))}
  </div>
);

export default ProductGrid;

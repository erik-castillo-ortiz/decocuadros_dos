'use client';

import { useEffect, useState } from 'react';
import Item from './SpecialOffers/Item';
import { fetchProducts } from '@/app/(home)/components/services/Services';
import { Product } from '@/app/(home)/components/types';

const DealInnerProductsSection = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const productList = await fetchProducts();
      setProducts(productList);
    };

    getProducts();
  }, []);

  return (
    <div className="products-with-divide">
      <div className="row row-joined">
        {products.map((product) => (
          <div key={product.id} className="col-xl-3 col-sm-4 col-6">
            <Item product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealInnerProductsSection;

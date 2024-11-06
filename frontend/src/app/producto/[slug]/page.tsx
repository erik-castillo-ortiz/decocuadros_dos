import { notFound } from 'next/navigation';
import React from 'react';
import { fetchProductBySlug } from '@/app/(home)/components/services/Services';
// import { Product } from '@/app/(home)/components/types';
import ProductGallery from '../components/ProductGallery';
import ProductDetails from '../components/ProductDetails';
import ProductTabs from '../components/ProductTabs';
import RelatedProducts from '../components/RelatedProducts';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const { slug } = params;
  const fetchedProduct = await fetchProductBySlug(slug);

  if (!fetchedProduct) {
    notFound();
  }

  return (
    <div className="container pt-2">
      <div className="product-single-container product-single-default">
        <div className="row">
          <div className="col-lg-5 col-md-6 product-single-gallery">
            <ProductGallery
              mainImage={fetchedProduct.image}
              gallery={fetchedProduct.gallery || []}
              isHot={fetchedProduct.isHot}
              discount={fetchedProduct.discount}
            />
          </div>
          <div className="col-lg-7 col-md-6 product-single-details">
            <ProductDetails product={fetchedProduct} />
          </div>
        </div>
      </div>
      <ProductTabs description={fetchedProduct.Description} />
      <RelatedProducts />
    </div>
  );
};

export default ProductPage;

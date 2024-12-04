import { notFound } from 'next/navigation';
import React from 'react';
import { fetchProductBySlug } from '@/app/(home)/components/services/Services';
import ProductGallery from '../components/ProductGallery';
import ProductDetails from '../components/ProductDetails';
import ProductTabs from '../components/ProductTabs';
import RelatedProducts from '../components/RelatedProducts';

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const fetchedProduct = await fetchProductBySlug(params.slug);

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
      <ProductTabs description={fetchedProduct.description} />
      <RelatedProducts />
    </div>
  );
}

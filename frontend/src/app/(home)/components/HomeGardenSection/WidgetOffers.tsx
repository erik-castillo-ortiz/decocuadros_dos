'use client';

import React, { useEffect, useState } from 'react';
import ItemWidget from './ItemWidget';
import { fetchOfferProducts } from '@/app/(home)/components/services/Services';
import { Product } from '@/app/(home)/components/types';

const WidgetOffers = () => {
  const [offerProducts, setOfferProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadOfferProducts = async () => {
      const products = await fetchOfferProducts();
      setOfferProducts(products);
    };

    loadOfferProducts();
  }, []);

  return (
    <div className="products-widget-container bg-white">
      <h2 className="section-title d-flex align-items-center text-transform-none">
        <i className="icon-percent-shape"></i>Special Offers
      </h2>
      <div className="product-countdown-container custom-product-countdown bg-white">
        <span className="product-countdown-title ls-10">offer ends in:</span>
        <div
          className="product-countdown countdown-compact is-countdown"
          data-until="2024, 10, 5"
          data-compact="true"
        >
          <span className="countdown-row countdown-amount">
            0 days, 00 : 00 : 00
          </span>
        </div>
      </div>
      <div className="row">
        {offerProducts.map((product) => (
          <div className="col-xl-12 col-md-4 col-sm-6" key={product.id}>
            <ItemWidget product={product} />
          </div>
        ))}
      </div>
      <a className="view-all" href="demo36-shop.html">
        View All<i className="fas fa-long-arrow-alt-right"></i>
      </a>
    </div>
  );
};

export default WidgetOffers;

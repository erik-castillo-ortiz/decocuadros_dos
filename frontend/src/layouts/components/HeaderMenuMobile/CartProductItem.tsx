import React from 'react';
import Link from 'next/link';

const CartProductItem: React.FC = () => (
  <div className="product">
    <div className="product-details">
      <h4 className="product-title">
        <Link href={'demo36-product.html'}>Product Name</Link>
      </h4>
      <span className="cart-product-info">
        <span className="cart-product-qty">1</span> × $99.00
      </span>
    </div>
    <figure className="product-image-container">
      <Link href="demo36-product.html" className="product-image">
        <img
          src="/assets/images/demoes/demo36/products/product-1.jpg"
          alt="product"
          width={80}
          height={80}
        />
      </Link>
      <Link href={'#'} className="btn-remove" title="Remove Product">
        <span>×</span>
      </Link>
    </figure>
  </div>
);

export default CartProductItem;

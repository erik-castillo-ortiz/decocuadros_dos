// import React from 'react';
// import { Product } from '@/app/(home)/components/types';

// interface ProductDetailsProps {
//   product: Product;
// }

// const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => (
//   <div>
//     <h1 className="product-title">{product.name}</h1>
//     <div className="price-box">
//       {product.oldPrice && (
//         <span className="old-price">{product.oldPrice}</span>
//       )}
//       <span className="new-price">{product.newPrice}</span>
//     </div>
//     <p>{product.shortDescription}</p>
//     <button className="btn btn-dark">Add to Cart</button>
//   </div>
// );

// export default ProductDetails;
// producto/components/ProductDetails.tsx

import React, { useState } from 'react';
import { Product } from '@/app/(home)/components/types';
import socialIcons from '@/app/helpers/socials-networks.json';

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product-single-details mb-0 ms-md-4">
      <h1 className="product-title">{product.name}</h1>
      <div className="ratings-container">
        <div className="product-ratings">
          <span
            className="ratings"
            style={{ width: `${product.rating}%` }}
          ></span>
        </div>
        <a href="#" className="rating-link">
          (6 Reviews)
        </a>
      </div>
      <hr className="short-divider" />
      <div className="price-box">
        <span className="product-price">{product.newPrice}</span>
        {product.oldPrice && (
          <del className="old-price">{product.oldPrice}</del>
        )}
      </div>
      <div className="product-desc">
        <p>{product.shortDescription}</p>
      </div>
      <div className="product-action">
        <button className="btn btn-dark add-cart me-2" title="Add to Cart">
          Add to Cart
        </button>
      </div>
      <div className="product-single-share mb-3">
        <label className="sr-only">Share:</label>
        <div className="social-icons me-2">
          {socialIcons.map((icon, index) => (
            <a
              href={icon.link}
              className={icon.icon}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              title={icon.title}
            ></a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

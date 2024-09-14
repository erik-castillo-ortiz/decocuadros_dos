// // 'use client';

// import Link from 'next/link';

// interface ItemProps {
//   product: {
//     id: number;
//     name: string;
//     category: string;
//     image: string;
//     rating: number;
//     oldPrice: string;
//     newPrice: string;
//     isHot?: boolean;
//     discount?: string | null;
//   };
// }

// const Item = ({ product }: ItemProps) => {
//   return (
//     <>
    
//     <div className="product-default inner-quickview inner-icon">
//       <figure>
//         <Link href="/demo36-product.html">
//           <img
//             src={product.image}
//             width={239}
//             height={239}
//             alt={product.name}
//           />
//         </Link>

//         <div className="label-group">
//           {product.isHot && <div className="product-label label-hot">HOT</div>}
//           {product.discount && <div className="product-label label-sale">{product.discount}</div>}
//         </div>

//         <div className="btn-icon-group">
//           <Link href="#" className="btn-icon btn-add-cart product-type-simple">
//             <i className="icon-shopping-cart" />
//           </Link>
//         </div>

//         <Link href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">
//           Quick View
//         </Link>
//       </figure>

//       <div className="product-details">
//         <div className="category-wrap">
//           <div className="category-list">
//             <Link href="/demo36-shop.html" className="product-category">
//               {product.category}
//             </Link>
//           </div>
//           <Link href="wishlist.html" className="btn-icon-wish">
//             <i className="icon-heart" />
//           </Link>
//         </div>

//         <h3 className="product-title">
//           <Link href="/demo36-product.html">{product.name}</Link>
//         </h3>

//         <div className="ratings-container">
//           <div className="product-ratings">
//             <span className="ratings" style={{ width: `${product.rating}%` }} />
//             <span className="tooltiptext tooltip-top" />
//           </div>
//         </div>

//         <div className="price-box">
//           {product.oldPrice && <span className="old-price">{product.oldPrice}</span>}
//           <span className="product-price">{product.newPrice}</span>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default Item;
'use client';

import { useState } from 'react';
import Link from 'next/link';
// import QuickViewProductbootstrap from './QuickViewProductbootstrap';
import QuickViewProduct from './QuickViewProduct';
// import QuickViewProductReactModal from './QuickViewProductHeadlessUI';
// import QuickViewProductHeadlessUI from './QuickViewProductHeadlessUI';


interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
  categoryId: number;
  rating: number;
  oldPrice: string;
  newPrice: string;
  isHot?: boolean;
  discount?: string | null;
  shortDescription: string;
  SKU: string;
  sizes: string[];
}

interface ItemProps {
  product: Product;
}

const Item: React.FC<ItemProps> = ({ product }) => {
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const openQuickView = () => setIsQuickViewOpen(true);
  const closeQuickView = () => setIsQuickViewOpen(false);

  return (
    <>
      <QuickViewProduct
        isOpen={isQuickViewOpen}
        closeModal={closeQuickView}
        product={product}
      />

      <div className="product-default inner-quickview inner-icon">
        <figure>
          <Link href="/demo36-product.html">
            <img
              src={product.image}
              width={239}
              height={239}
              alt={product.name}
            />
          </Link>

          <div className="label-group">
            {product.isHot && <div className="product-label label-hot">HOT</div>}
            {product.discount && (
              <div className="product-label label-sale">{product.discount}</div>
            )}
          </div>

          <div className="btn-icon-group">
            <Link href="#" className="btn-icon btn-add-cart product-type-simple">
              <i className="icon-shopping-cart" />
            </Link>
          </div>

          {/* Botón de Quick View */}
          <button
            onClick={openQuickView}
            className="btn-quickview"
            title="Quick View"
            style={{ cursor: 'pointer' }}
          >
            Quick View
          </button>
        </figure>

        <div className="product-details">
          <div className="category-wrap">
            <div className="category-list">
              <Link href="/demo36-shop.html" className="product-category">
                {product.category}
              </Link>
            </div>
            <Link href="wishlist.html" className="btn-icon-wish">
              <i className="icon-heart" />
            </Link>
          </div>

          <h3 className="product-title">
            <Link href="/demo36-product.html">{product.name}</Link>
          </h3>

          <div className="ratings-container">
            <div className="product-ratings">
              <span className="ratings" style={{ width: `${product.rating}%` }} />
              <span className="tooltiptext tooltip-top" />
            </div>
          </div>

          <div className="price-box">
            {product.oldPrice && (
              <span className="old-price">{product.oldPrice}</span>
            )}
            <span className="product-price">{product.newPrice}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;



// import React from 'react';
// import Link from 'next/link';
// import { CartItem } from '@/context/CartContext';

// interface CartProductItemProps {
//   item: CartItem;
//   onRemove: (productVariantId: number, quantity: number) => void;
// }

// const CartProductItem: React.FC<CartProductItemProps> = ({ item, onRemove }) => {
//   return (
//     <div className="product">
//       <div className="product-details">
//         <h4 className="product-title">
//           <Link href={`/producto/${item.slug || ''}`}>
//             {item.name || 'Product Name'}
//           </Link>
//         </h4>
//         <span className="cart-product-info">
//           <span className="cart-product-qty">{item.quantity}</span> × ${item.price?.toFixed(2) || '0.00'}
//         </span>
//       </div>
//       <figure className="product-image-container">
//         <Link href={`/producto/${item.slug || ''}`} className="product-image">
//           <img
//             src={item.image_url || '/assets/images/placeholder.png'}
//             alt={item.name || 'Product Image'}
//             width={80}
//             height={80}
//           />
//         </Link>
//         <Link href="#" className="btn-remove" title="Remove Product" onClick={() => onRemove(item.product_variant_id, item.quantity)}>
//           <span>×</span>
//         </Link>
//       </figure>
//     </div>
//   );
// };

// export default CartProductItem;
import React from 'react';
import Link from 'next/link';
import { CartItem } from '@/context/CartContext';

interface CartProductItemProps {
  item: CartItem;
  onRemove: (productVariantId: number, quantity: number) => void;
}

const CartProductItem: React.FC<CartProductItemProps> = ({ item, onRemove }) => {
  return (
    <div className="product">
      <div className="product-details">
        <h4 className="product-title">
          <Link href={`/producto/${item.slug || ''}`}>
            {item.name || 'Product Name'}
          </Link>
        </h4>
        <span className="cart-product-info">
          <span className="cart-product-qty">{item.quantity}</span> × ${item.price?.toFixed(2) || '0.00'}
        </span>
      </div>
      <figure className="product-image-container">
        <Link href={`/producto/${item.slug || ''}`} className="product-image">
          <img
            src={item.image_url || '/assets/images/placeholder.png'}
            alt={item.name || 'Product Image'}
            width={80}
            height={80}
          />
        </Link>
        <Link href="#" className="btn-remove" title="Remove Product" onClick={() => onRemove(item.product_variant_id, item.quantity)}>
          <span>×</span>
        </Link>
      </figure>
    </div>
  );
};

export default React.memo(CartProductItem);

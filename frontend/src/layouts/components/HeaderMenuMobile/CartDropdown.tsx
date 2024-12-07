
// import React from 'react';
// import Link from 'next/link';
// import CartProductItem from './CartProductItem';
// import { useCart } from '@/context/CartContext';
// import { Spinner } from 'react-bootstrap';

// const CartDropdown: React.FC<{ cartOpened: boolean; toggleCart: () => void }> = ({ cartOpened, toggleCart }) => {
//   const { cart, loading, removeFromCart } = useCart();

//   const totalItems = cart?.items.reduce((acc, item) => acc + item.quantity, 0) || 0;
//   const subtotal = cart?.items.reduce((acc, item) => acc + (item.quantity * (item.price || 0)), 0) || 0;

//   if (loading) {
//     return (
//       <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100px' }}>
//         <Spinner animation="border" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </Spinner>
//       </div>
//     );
//   }

//   return (
//     <div className={`dropdown cart-dropdown ${cartOpened ? 'show' : ''}`}>
//       <Link href="#" className="dropdown-toggle dropdown-arrow cart-toggle" onClick={(e) => {
//         e.preventDefault();
//         toggleCart();
//       }}>
//         <i className="icon-cart-thick" />
//         <span className="cart-count badge-circle">{totalItems}</span>
//       </Link>
//       <div className="cart-overlay" onClick={toggleCart} />
//       <div className={`dropdown-menu mobile-cart ${cartOpened ? 'show' : ''}`}>
//         <Link href="#" className="btn-close-dec" onClick={(e) => {
//           e.preventDefault();
//           toggleCart();
//         }}>
//           ×
//         </Link>
//         <div className="dropdownmenu-wrapper custom-scrollbar">
//           <div className="dropdown-cart-header">Shopping Cart</div>
//           <div className="dropdown-cart-products">
//             {cart?.items.map((item) => (
//               <CartProductItem key={item.id} item={item} onRemove={removeFromCart} />
//             ))}
//           </div>
//           <div className="dropdown-cart-total">
//             <span>SUBTOTAL:</span>
//             <span className="cart-total-price float-end">${subtotal.toFixed(2)}</span>
//           </div>
//           <div className="dropdown-cart-action">
//             <Link href="/cart" className="btn btn-gray d-block w-100 view-cart">
//               View Cart
//             </Link>
//             <Link href="/checkout" className="btn btn-dark d-block w-100">
//               Checkout
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartDropdown;
// import React from 'react';
// import Link from 'next/link';
// import CartProductItem from './CartProductItem';
// import { useCart } from '@/context/CartContext';
// import { Spinner } from 'react-bootstrap';

// const CartDropdown: React.FC<{ cartOpened: boolean; toggleCart: () => void }> = ({ cartOpened, toggleCart }) => {
//   const { cart, loading, removeFromCart } = useCart();

//   const totalItems = cart?.items.reduce((acc, item) => acc + item.quantity, 0) || 0;
//   const subtotal = cart?.items.reduce((acc, item) => acc + (item.quantity * (item.price || 0)), 0) || 0;

//   if (loading) {
//     return (
//       <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100px' }}>
//         <Spinner animation="border" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </Spinner>
//       </div>
//     );
//   }

//   return (
//     <div className={`dropdown cart-dropdown ${cartOpened ? 'show' : ''}`}>
//       <Link href="#" className="dropdown-toggle dropdown-arrow cart-toggle" onClick={(e) => {
//         e.preventDefault();
//         toggleCart();
//       }}>
//         <i className="icon-cart-thick" />
//         <span className="cart-count badge-circle">{totalItems}</span>
//       </Link>
//       <div className="cart-overlay" onClick={toggleCart} />
//       <div className={`dropdown-menu mobile-cart ${cartOpened ? 'show' : ''}`}>
//         <Link href="#" className="btn-close-dec" onClick={(e) => {
//           e.preventDefault();
//           toggleCart();
//         }}>
//           ×
//         </Link>
//         <div className="dropdownmenu-wrapper custom-scrollbar">
//           <div className="dropdown-cart-header">Shopping Cart</div>
//           <div className="dropdown-cart-products">
//             {cart?.items.map((item) => (
//               <CartProductItem key={item.id} item={item} onRemove={removeFromCart} />
//             ))}
//           </div>
//           <div className="dropdown-cart-total">
//             <span>SUBTOTAL:</span>
//             <span className="cart-total-price float-end">${subtotal.toFixed(2)}</span>
//           </div>
//           <div className="dropdown-cart-action">
//             <Link href="/cart" className="btn btn-gray d-block w-100 view-cart">
//               View Cart
//             </Link>
//             <Link href="/checkout" className="btn btn-dark d-block w-100">
//               Checkout
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default React.memo(CartDropdown);
import React from 'react';
import Link from 'next/link';
import CartProductItem from './CartProductItem';
import { useCart } from '@/context/CartContext';
import { Spinner } from 'react-bootstrap';

const CartDropdown: React.FC<{ cartOpened: boolean; toggleCart: () => void }> = ({ cartOpened, toggleCart }) => {
  const { cart, loading, removeFromCart } = useCart();

  const totalItems = cart?.items.reduce((acc, item) => acc + item.quantity, 0) || 0;
  const subtotal = cart?.items.reduce((acc, item) => acc + (item.quantity * (item.price || 0)), 0) || 0;

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100px' }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div className={`dropdown cart-dropdown ${cartOpened ? 'show' : ''}`}>
      <Link href="#" className="dropdown-toggle dropdown-arrow cart-toggle" onClick={(e) => {
        e.preventDefault();
        toggleCart();
      }}>
        <i className="icon-cart-thick" />
        <span className="cart-count badge-circle">{totalItems}</span>
      </Link>
      <div className="cart-overlay" onClick={toggleCart} />
      <div className={`dropdown-menu mobile-cart ${cartOpened ? 'show' : ''}`}>
        <Link href="#" className="btn-close-dec" onClick={(e) => {
          e.preventDefault();
          toggleCart();
        }}>
          ×
        </Link>
        <div className="dropdownmenu-wrapper custom-scrollbar">
          <div className="dropdown-cart-header">Shopping Cart</div>
          
          <div className="dropdown-cart-products">
            {cart?.items.length === 0 ? (
              <div className="text-center py-3">No hay productos en el carrito.</div>
            ) : (
              cart?.items.map((item) => (
                <CartProductItem key={item.id} item={item} onRemove={removeFromCart} />
              ))
            )}
          </div>

          {cart?.items.length > 0 && (
            <>
              <div className="dropdown-cart-total">
                <span>SUBTOTAL:</span>
                <span className="cart-total-price float-end">${subtotal.toFixed(2)}</span>
              </div>
              <div className="dropdown-cart-action">
                <Link href="/cart" className="btn btn-gray d-block w-100 view-cart">
                  View Cart
                </Link>
                <Link href="/checkout" className="btn btn-dark d-block w-100">
                  Checkout
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(CartDropdown);

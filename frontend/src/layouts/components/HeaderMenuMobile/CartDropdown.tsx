import React from 'react';
import Link from 'next/link';
import CartProductItem from './CartProductItem';
// import CartProductItem from './CartProductItem';

const CartDropdown: React.FC<{
  cartOpened: boolean;
  toggleCart: () => void;
}> = ({ cartOpened, toggleCart }) => (
  <div className={`dropdown cart-dropdown ${cartOpened ? 'show' : ''}`}>
    <Link
      href={'#'}
      className="dropdown-toggle dropdown-arrow cart-toggle"
      onClick={(e) => {
        e.preventDefault();
        toggleCart();
      }}
    >
      <i className="icon-cart-thick" />
      <span className="cart-count badge-circle">3</span>
    </Link>
    <div className="cart-overlay" onClick={toggleCart} />
    <div className={`dropdown-menu mobile-cart ${cartOpened ? 'show' : ''}`}>
      <Link
        href={'#'}
        className="btn-close-dec"
        onClick={(e) => {
          e.preventDefault();
          toggleCart();
        }}
      >
        ×
      </Link>
      <div className="dropdownmenu-wrapper custom-scrollbar">
        <div className="dropdown-cart-header">Shopping Cart</div>
        <div className="dropdown-cart-products">
          <CartProductItem />
          <CartProductItem />
          <CartProductItem />
        </div>
        <div className="dropdown-cart-total">
          <span>SUBTOTAL:</span>
          <span className="cart-total-price float-end">$134.00</span>
        </div>
        <div className="dropdown-cart-action">
          <Link
            href={'cart.html'}
            className="btn btn-gray d-block w-100 view-cart"
          >
            View Cart
          </Link>
          <Link href={'checkout.html'} className="btn btn-dark d-block w-100">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default CartDropdown;

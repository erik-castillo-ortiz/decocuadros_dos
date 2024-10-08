import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const HeaderMenuMobile: React.FC<{
  setMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setMenuActive }) => {
  const [cartOpened, setCartOpened] = useState(false); // Estado para manejar la apertura del carrito

  const toggleMenu = () => {
    setMenuActive(true); // Abrimos el menú móvil
  };

  // Función para abrir/cerrar el carrito
  const toggleCart = () => {
    setCartOpened(!cartOpened);
  };

  // Efecto para agregar o quitar la clase "cart-opened" del body
  useEffect(() => {
    if (cartOpened) {
      document.body.classList.add('cart-opened');
    } else {
      document.body.classList.remove('cart-opened');
    }
    return () => {
      document.body.classList.remove('cart-opened');
    };
  }, [cartOpened]);

  return (
    <>
      <div
        className="header-middle sticky-header"
        data-bs-sticky="{'mobile': true}"
      >
        <div className="container">
          <div className="header-left col-lg-2 w-auto ps-0">
            <button
              className="mobile-menu-toggler text-dark me-2"
              type="button"
              onClick={toggleMenu}
            >
              <i className="fas fa-bars" />
            </button>
            <Link href={'/'} className="logo">
              <img
                src="/assets/images/logo-black.png"
                className="w-100"
                width={111}
                height={44}
                alt="Porto Logo"
              />
            </Link>
          </div>
          {/* End .header-left */}
          <div className="header-right w-lg-max">
            <div className="header-icon header-search header-search-inline header-search-category w-lg-max text-end mb-0">
              <a href="#" className="search-toggle" role="button">
                <i className="icon-search-3" />
              </a>
              <form action="#" method="get">
                <div className="header-search-wrapper">
                  <input
                    type="search"
                    className="form-control"
                    name="q"
                    id="q"
                    placeholder="Search..."
                    required
                  />
                  <div className="select-custom">
                    <select id="cat" name="cat">
                      <option value="">All Categories</option>
                      <option value={4}>Fashion</option>
                      <option value={12}>- Women</option>
                      <option value={13}>- Men</option>
                      <option value={66}>- Jewellery</option>
                      <option value={67}>- Kids Fashion</option>
                      <option value={5}>Electronics</option>
                      <option value={21}>- Smart TVs</option>
                      <option value={22}>- Cameras</option>
                      <option value={63}>- Games</option>
                      <option value={7}>Home &amp; Garden</option>
                      <option value={11}>Motors</option>
                      <option value={31}>- Cars and Trucks</option>
                      <option value={32}>
                        - Motorcycles &amp; Powersports
                      </option>
                      <option value={33}>- Parts &amp; Accessories</option>
                      <option value={34}>- Boats</option>
                      <option value={57}>- Auto Tools &amp; Supplies</option>
                    </select>
                  </div>
                  {/* End .select-custom */}
                  <button
                    className="btn icon-magnifier p-0"
                    title="search"
                    type="submit"
                  />
                </div>
                {/* End .header-search-wrapper */}
              </form>
            </div>
            {/* End .header-search */}
            <a href="login.html" className="d-lg-block d-none">
              <div className="header-user">
                <i className="icon-user-2" />
                <div className="header-userinfo">
                  <span>Welcome</span>
                  <h4 className="mb-0">My Account</h4>
                </div>
              </div>
            </a>
            <a
              href="wishlist.html"
              className="header-icon position-relative"
              title="wishlist"
            >
              <i className="icon-wishlist-2" />
              <span className="wishlist-count badge-circle">0</span>
            </a>
            <div
              className={`dropdown cart-dropdown ${cartOpened ? 'show' : ''}`}
            >
              <a
                href="#"
                title="Cart"
                className="dropdown-toggle dropdown-arrow cart-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-display="static"
                onClick={toggleCart} // Abrir o cerrar carrito
              >
                <i className="icon-cart-thick" />
                <span className="cart-count badge-circle">3</span>
              </a>
              <div className="cart-overlay" onClick={toggleCart} />
              <div
                className={`dropdown-menu mobile-cart ${
                  cartOpened ? 'show' : ''
                }`}
              >
                <a
                  href="#"
                  title="Close (Esc)"
                  className="btn-close"
                  onClick={toggleCart}
                >
                  ×
                </a>
                <div className="dropdownmenu-wrapper custom-scrollbar">
                  <div className="dropdown-cart-header">Shopping Cart</div>
                  {/* End .dropdown-cart-header */}
                  <div className="dropdown-cart-products">
                    <div className="product">
                      <div className="product-details">
                        <h4 className="product-title">
                          <a href="demo36-product.html">
                            Ultimate 3D Bluetooth Speaker
                          </a>
                        </h4>
                        <span className="cart-product-info">
                          <span className="cart-product-qty">1</span> × $99.00
                        </span>
                      </div>
                      {/* End .product-details */}
                      <figure className="product-image-container">
                        <a href="demo36-product.html" className="product-image">
                          <img
                            src="/assets/images/demoes/demo36/products/product-1.jpg"
                            alt="product"
                            width={80}
                            height={80}
                          />
                        </a>
                        <a
                          href="#"
                          className="btn-remove"
                          title="Remove Product"
                        >
                          <span>×</span>
                        </a>
                      </figure>
                    </div>
                    {/* End .product */}
                    <div className="product">
                      <div className="product-details">
                        <h4 className="product-title">
                          <a href="demo36-product.html">
                            Brown Women Casual HandBag
                          </a>
                        </h4>
                        <span className="cart-product-info">
                          <span className="cart-product-qty">1</span> × $35.00
                        </span>
                      </div>
                      {/* End .product-details */}
                      <figure className="product-image-container">
                        <a href="demo36-product.html" className="product-image">
                          <img
                            src="/assets/images/demoes/demo36/products/product-2.jpg"
                            alt="product"
                            width={80}
                            height={80}
                          />
                        </a>
                        <a
                          href="#"
                          className="btn-remove"
                          title="Remove Product"
                        >
                          <span>×</span>
                        </a>
                      </figure>
                    </div>
                    {/* End .product */}
                    <div className="product">
                      <div className="product-details">
                        <h4 className="product-title">
                          <a href="demo36-product.html">
                            Circled Ultimate 3D Speaker
                          </a>
                        </h4>
                        <span className="cart-product-info">
                          <span className="cart-product-qty">1</span> × $35.00
                        </span>
                      </div>
                      {/* End .product-details */}
                      <figure className="product-image-container">
                        <a href="demo36-product.html" className="product-image">
                          <img
                            src="/assets/images/demoes/demo36/products/product-3.jpg"
                            alt="product"
                            width={80}
                            height={80}
                          />
                        </a>
                        <a
                          href="#"
                          className="btn-remove"
                          title="Remove Product"
                        >
                          <span>×</span>
                        </a>
                      </figure>
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .cart-product */}
                  <div className="dropdown-cart-total">
                    <span>SUBTOTAL:</span>
                    <span className="cart-total-price float-end">$134.00</span>
                  </div>
                  {/* End .dropdown-cart-total */}
                  <div className="dropdown-cart-action">
                    <a
                      href="cart.html"
                      className="btn btn-gray d-block w-100 view-cart"
                    >
                      View Cart
                    </a>
                    <a
                      href="checkout.html"
                      className="btn btn-dark d-block w-100"
                    >
                      Checkout
                    </a>
                  </div>
                  {/* End .dropdown-cart-action */}
                </div>
                {/* End .dropdownmenu-wrapper */}
              </div>
              {/* End .dropdown-menu */}
            </div>
            {/* End .dropdown */}
          </div>
          {/* End .header-right */}
        </div>
        {/* End .container */}
      </div>
      {/* End .header-middle */}
    </>
  );
};

export default HeaderMenuMobile;

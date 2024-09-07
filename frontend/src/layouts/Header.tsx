'use client'

import Link from "next/link"
import Script from "next/script";
import { useEffect } from "react";

const Header = () => {
  // useEffect(() => {
  //   const loadScripts = async () => {
  //     const jquery = document.createElement('script');
  //     jquery.src = '/assets/js/jquery.min.js';
  //     jquery.async = false; // Carga jQuery de manera sincrónica
  //     document.body.appendChild(jquery);
  
  //     jquery.onload = () => {
  //       const plugins = document.createElement('script');
  //       plugins.src = '/assets/js/plugins.min.js';
  //       plugins.async = false; // Cargar plugins después de jQuery
  //       document.body.appendChild(plugins);
  
  //       plugins.onload = () => {
  //         const isotope = document.createElement('script');
  //         isotope.src = '/assets/js/optional/isotope.pkgd.min.js';
  //         isotope.async = true;
  //         document.body.appendChild(isotope);
  
  //         const bootstrap = document.createElement('script');
  //         bootstrap.src = '/assets/js/bootstrap.bundle.min.js';
  //         bootstrap.async = true;
  //         document.body.appendChild(bootstrap);
  
  //         const main = document.createElement('script');
  //         main.src = '/assets/js/main.min.js';
  //         main.async = true;
  //         document.body.appendChild(main);
  //       };
  //     };
  //   };
  
  //   loadScripts();
  // }, []);
  
  

  return (
    <>
    <header className="header">
            <div className="header-top">
              <div className="container">
                <div className="header-left d-none d-sm-block">
                  <div className="info-box info-box-icon-left text-primary justify-content-start p-0">
                    <i className="icon-shipping" />
                    <div className="info-box-content">
                      <h4 className="text-transform-none">
                        FREE Express Shipping On Orders $99+
                      </h4>
                    </div>
                    {/* End .info-box-content */}
                  </div>
                </div>
                {/* End .header-left */}
                <div className="header-right header-dropdowns ml-0 ml-sm-auto w-sm-100">
                  <div className="header-dropdown ">
                    <a href="#">USD</a>
                    <div className="header-menu">
                      <ul>
                        <li>
                          <a href="#">EUR</a>
                        </li>
                        <li>
                          <a href="#">USD</a>
                        </li>
                      </ul>
                    </div>
                    {/* End .header-menu */}
                  </div>
                  {/* End .header-dropown */}
                  <div className="header-dropdown mr-auto mr-sm-3 mr-md-0">
                    <a href="#">
                      <i className="flag-us flag" />
                      Eng
                    </a>
                    <div className="header-menu">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="flag-us flag mr-2" />
                            ENG
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="flag-fr flag mr-2" />
                            FRA
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* End .header-menu */}
                  </div>
                  {/* End .header-dropown */}
                  <div className="header-dropdown dropdown-expanded d-none d-lg-block">
                    <a href="#">Links</a>
                    <div className="header-menu">
                      <ul>
                        <li>
                          <a href="dashboard.html">My account</a>
                        </li>
                        <li>
                          <a href="cart.html">Cart</a>
                        </li>
                        <li>
                          <a href="login.html" className="login-link">
                            Log In
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* End .header-menu */}
                  </div>
                  {/* End .header-dropown */}
                  <div className="social-icons">
                    <a
                      href="#"
                      className="social-icon social-facebook icon-facebook"
                      target="_blank"
                    />
                    <a
                      href="#"
                      className="social-icon social-twitter icon-twitter"
                      target="_blank"
                    />
                    <a
                      href="#"
                      className="social-icon social-instagram icon-instagram"
                      target="_blank"
                    />
                  </div>
                  {/* End .social-icons */}
                </div>
                {/* End .header-right */}
              </div>
              {/* End .container */}
            </div>
            {/* End .header-top */}
            <div
              className="header-middle sticky-header"
              data-sticky-options="{'mobile': true}"
            >
              <div className="container">
                <div className="header-left col-lg-2 w-auto pl-0">
                  <button className="mobile-menu-toggler text-dark mr-2" type="button">
                    <i className="fas fa-bars" />
                  </button>
                  <Link href={"/"} className="logo" >
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
                  <div className="header-icon header-search header-search-inline header-search-category w-lg-max text-right mb-0">
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
                            <option value={32}>- Motorcycles &amp; Powersports</option>
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
                  <div className="dropdown cart-dropdown">
                    <a
                      href="#"
                      title="Cart"
                      className="dropdown-toggle dropdown-arrow cart-toggle"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-display="static"
                    >
                      <i className="icon-cart-thick" />
                      <span className="cart-count badge-circle">3</span>
                    </a>
                    <div className="cart-overlay" />
                    <div className="dropdown-menu mobile-cart">
                      <a href="#" title="Close (Esc)" className="btn-close">
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
                              <a href="#" className="btn-remove" title="Remove Product">
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
                              <a href="#" className="btn-remove" title="Remove Product">
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
                              <a href="#" className="btn-remove" title="Remove Product">
                                <span>×</span>
                              </a>
                            </figure>
                          </div>
                          {/* End .product */}
                        </div>
                        {/* End .cart-product */}
                        <div className="dropdown-cart-total">
                          <span>SUBTOTAL:</span>
                          <span className="cart-total-price float-right">$134.00</span>
                        </div>
                        {/* End .dropdown-cart-total */}
                        <div className="dropdown-cart-action">
                          <a
                            href="cart.html"
                            className="btn btn-gray btn-block view-cart"
                          >
                            View Cart
                          </a>
                          <a href="checkout.html" className="btn btn-dark btn-block">
                            Checkout
                          </a>
                        </div>
                        {/* End .dropdown-cart-total */}
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
            <div
              className="header-bottom sticky-header d-none d-lg-flex"
              data-sticky-options="{'mobile': false}"
            >
              <div className="container">
                <nav className="main-nav w-100">
                  <ul className="menu w-100">
                    <li className="menu-item">
                      <a className="d-inline-flex align-items-center sf-with-ul text-white">
                        <i className="custom-icon-toggle-menu d-inline-table" />
                        <span>ALL DEPARTMENTS</span>
                      </a>
                      <div className="menu-depart-overlay" />
                      {/* End .mobil-menu-overlay */}
                      <div className="menu-depart "> {/*opened*/}
                        <ul className="menu menu-vertical sf-arrows d-block no-superfish">
                          <li>
                            <a href="#">
                              <i className="icon-category-fashion" />
                              Fashion
                            </a>
                            <div className="megamenu megamenu-fixed-width megamenu-one">
                              <div className="row">
                                <div className="col-lg-3 mb-1 pb-2">
                                  <a href="#" className="nolink pl-0">
                                    WOMAN
                                  </a>
                                  <ul className="submenu">
                                    <li>
                                      <a href="demo36-shop.html">Top &amp; Blouses</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Accessories</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">
                                        Dresses &amp; Skirts
                                      </a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Shoes &amp; Boots</a>
                                    </li>
                                  </ul>
                                  <a href="#" className="nolink pl-0">
                                    JEWELLERY
                                  </a>
                                  <ul className="submenu">
                                    <li>
                                      <a href="demo36-shop.html">Sweaters</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Heels &amp; Sandals</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Jeans &amp; Shorts</a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-lg-4">
                                  <a href="#" className="nolink pl-0">
                                    MAN
                                  </a>
                                  <ul className="submenu">
                                    <li>
                                      <a href="demo36-shop.html">Accessories</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Watch Fashion</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">
                                        Tees, Knits &amp; Polos
                                      </a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">KOKA</a>
                                    </li>
                                  </ul>
                                  <a href="#" className="nolink pl-0">
                                    KIDS FASHION
                                  </a>
                                  <ul className="submenu">
                                    <li>
                                      <a href="demo36-shop.html">Casual Shoes</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Spring &amp; Autumn</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Winter Sneakers</a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-lg-5 p-0 d-lg-block d-none">
                                  <div className="menu-banner menu-banner-2">
                                    <figure>
                                      <img
                                        src="/assets/images/demoes/demo40/menu-banner-1.jpg"
                                        alt="Menu banner"
                                        className="product-promo w-100"
                                      />
                                    </figure>
                                    <i>OFF</i>
                                    <div className="banner-content">
                                      <h4>
                                        <span className="text-dark">UP TO</span>
                                        <br />
                                        <b className="text-dark">50%</b>
                                      </h4>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-12 d-lg-block d-none">
                                  <div className="partners-container row">
                                    <div className="col-xl-5col">
                                      <div className="partner">
                                        <img
                                          src="/assets/images/brands/small/brand1.png"
                                          alt="logo image"
                                          width={140}
                                          height={60}
                                        />
                                      </div>
                                    </div>
                                    <div className="col-xl-5col">
                                      <div className="partner">
                                        <img
                                          src="/assets/images/brands/small/brand2.png"
                                          alt="logo image"
                                          width={140}
                                          height={60}
                                        />
                                      </div>
                                    </div>
                                    <div className="col-xl-5col">
                                      <div className="partner">
                                        <img
                                          src="/assets/images/brands/small/brand3.png"
                                          alt="logo image"
                                          width={140}
                                          height={60}
                                        />
                                      </div>
                                    </div>
                                    <div className="col-xl-5col">
                                      <div className="partner">
                                        <img
                                          src="/assets/images/brands/small/brand4.png"
                                          alt="logo image"
                                          width={140}
                                          height={60}
                                        />
                                      </div>
                                    </div>
                                    <div className="col-xl-5col">
                                      <div className="partner">
                                        <img
                                          src="/assets/images/brands/small/brand5.png"
                                          alt="logo image"
                                          width={140}
                                          height={60}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* End .megamenu */}
                          </li>
                          <li>
                            <a href="#">
                              <i className="icon-category-electronics" />
                              Electronics
                            </a>
                            <div className="megamenu megamenu-fixed-width megamenu-two">
                              <div className="row">
                                <div className="col-lg-3">
                                  <a href="#" className="nolink pl-0">
                                    ACCESSORIES
                                  </a>
                                  <ul className="submenu">
                                    <li>
                                      <a href="demo36-shop.html">
                                        Cables &amp; Adaperts
                                      </a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">
                                        Electronic Cigarettes
                                      </a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Batteries</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Chargers</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Home Electronic</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Bags &amp; Cases</a>
                                    </li>
                                  </ul>
                                </div>
                                {/* End .col-lg-4 */}
                                <div className="col-lg-3 pl-xl-2">
                                  <a href="#" className="nolink pl-0">
                                    AUDIO &amp; VIDEO
                                  </a>
                                  <ul className="submenu">
                                    <li>
                                      <a href="demo36-shop.html">Televisions</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Projectors</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">TV peceivers</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Audio Amplifier</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">TV Sticks</a>
                                    </li>
                                  </ul>
                                </div>
                                {/* End .col-lg-4 */}
                                <div className="col-lg-3 pl-xl-0">
                                  <a href="#" className="nolink pl-0">
                                    CAMERA &amp; PHOTO
                                  </a>
                                  <ul className="submenu">
                                    <li>
                                      <a href="demo36-shop.html">Digital Cameras</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Camcorders</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Camera Drones</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Action Cameras</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Photo Supplies</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Camera &amp; Photo</a>
                                    </li>
                                  </ul>
                                </div>
                                {/* End .col-lg-4 */}
                                <div className="col-lg-3 pl-xl-0">
                                  <a href="#" className="nolink pl-0">
                                    LAPTOPS
                                  </a>
                                  <ul className="submenu">
                                    <li>
                                      <a href="demo36-shop.html">Caming Laptops</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Ultraslim Laptops</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Laptop Accessories</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">
                                        Laptop Bags &amp; Cases
                                      </a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Tablet Accessories</a>
                                    </li>
                                  </ul>
                                </div>
                                {/* End .col-lg-4 */}
                                <div className="banner-container w-100 pl-3 pr-3 d-lg-block d-none">
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="banner banner7 banner-md-vw text-transform-none">
                                        <figure>
                                          <img
                                            src="/assets/images/demoes/demo40/menu-banner-2.jpg"
                                            alt="banner"
                                          />
                                        </figure>
                                        <div className="banner-layer banner-layer-middle d-flex align-items-center justify-content-end pt-0">
                                          <div className="content-left">
                                            <h4 className="banner-layer-circle-item mb-0 ls-0">
                                              40
                                              <sup>
                                                %<small className="ls-0">OFF</small>
                                              </sup>
                                            </h4>
                                          </div>
                                          <div className="content-right text-right">
                                            <h5 className=" ls-0">
                                              <del className="d-block m-b-2 text-secondary">
                                                $450
                                              </del>
                                              $270
                                            </h5>
                                            <h4 className="m-b-1 ls-n-25">Watches</h4>
                                            <h3 className="mb-0">HURRY UP!</h3>
                                          </div>
                                        </div>
                                      </div>
                                      {/* End .banner */}
                                    </div>
                                    <div className="col-md-6">
                                      <div className="banner banner8 banner-md-vw">
                                        <figure>
                                          <img
                                            src="/assets/images/demoes/demo40/menu-banner-3.jpg"
                                            alt="banner"
                                          />
                                        </figure>
                                        <div className="banner-layer banner-layer-middle d-flex align-items-end flex-column">
                                          <h3 className="text-dark text-right">
                                            Electronic
                                            <br />
                                            Deals
                                          </h3>
                                          <div className="coupon-sale-content">
                                            <h4 className="menu-coupon-sale-text bg-dark text-white d-block font1 text-transform-none">
                                              Exclusive COUPON
                                            </h4>
                                            <h5 className="custom-coupon-sale-text font1 text-dark ls-n-10 p-0">
                                              <b className="text-dark">$100</b> OFF
                                            </h5>
                                          </div>
                                        </div>
                                      </div>
                                      {/* End .banner */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* End .row */}
                            </div>
                            {/* End .megamenu */}
                          </li>
                          <li>
                            <a href="#">
                              <i className="icon-category-gifts" />
                              Gifts
                            </a>
                            <div className="megamenu megamenu-fixed-width megamenu-three">
                              <div className="row">
                                <div className="col-lg-3">
                                  <a
                                    href="#"
                                    className="nolink pl-0 d-flex flex-column align-items-start"
                                  >
                                    <i className="icon-boy-broad-smile" />
                                    FOR HIM
                                  </a>
                                  <ul className="submenu pb-0">
                                    <li>
                                      <a href="demo36-shop.html">Gifts for Boyfriend</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Gifts for Husband</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Gifts for Dad</a>
                                    </li>
                                  </ul>
                                </div>
                                {/* End .col-lg-4 */}
                                <div className="col-lg-3 pl-xl-2">
                                  <a
                                    href="#"
                                    className="nolink pl-0 d-flex flex-column align-items-start"
                                  >
                                    <i className="icon-smiling-girl" />
                                    FOR HER
                                  </a>
                                  <ul className="submenu pb-0">
                                    <li>
                                      <a href="demo36-shop.html">
                                        Gifts for Girlfriend
                                      </a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Gifts for Wife</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Gifts for Mom</a>
                                    </li>
                                  </ul>
                                </div>
                                {/* End .col-lg-4 */}
                                <div className="col-lg-3 pl-xl-0">
                                  <a
                                    href="#"
                                    className="nolink pl-0 d-flex flex-column align-items-start"
                                  >
                                    <i className="icon-smiling-baby" />
                                    FOR KIDS
                                  </a>
                                  <ul className="submenu pb-0">
                                    <li>
                                      <a href="demo36-shop.html">Gifts for Boys</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Gifts for Grils</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">
                                        Gifts for Tween Boys
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                {/* End .col-lg-4 */}
                                <div className="col-lg-3 pl-xl-0">
                                  <a
                                    href="#"
                                    className="nolink pl-0 d-flex flex-column align-items-start"
                                  >
                                    <i className="icon-gift-2" />
                                    BIRTHDAY
                                  </a>
                                  <ul className="submenu pb-0">
                                    <li>
                                      <a href="demo36-shop.html">Birthday for Him</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Birthday for Her</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Boyfriend Gifts</a>
                                    </li>
                                  </ul>
                                </div>
                                {/* End .col-lg-4 */}
                              </div>
                              {/* End .row */}
                            </div>
                            {/* End .megamenu */}
                          </li>
                          <li>
                            <a href="#">
                              <i className="icon-category-garden" />
                              Home &amp; Garden
                            </a>
                            <div className="megamenu megamenu-fixed-width megamenu-four">
                              <div className="row">
                                <div className="col-lg-4 mb-1 pb-2">
                                  <a href="#" className="nolink pl-0 d-lg-none d-block">
                                    VARIATION 1
                                  </a>
                                  <a href="#" className="nolink pl-0">
                                    FURNITURE
                                  </a>
                                  <ul className="submenu">
                                    <li>
                                      <a href="demo36-shop.html">
                                        BEAUTY &amp; PERSONAL CARE
                                      </a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">SOF &amp; COUCHES</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">ARMCHARIRS</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">BED FRAMES</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">BEDSIDE TABLES</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">BRESSING TABLES</a>
                                    </li>
                                  </ul>
                                  <a href="#" className="nolink pl-0">
                                    HOME ACCESSORIES
                                  </a>
                                  <ul className="submenu pb-0">
                                    <li>
                                      <a href="demo36-shop.html">
                                        DECORATIVE ACCESSORIES
                                      </a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">
                                        CANDLES &amp; HOLDERS
                                      </a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">HOME FRAGRANCE</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">MIRRORS</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">CLOCKS</a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-lg-4">
                                  <a href="#" className="nolink pl-0 d-lg-none d-block">
                                    VARIATION 2
                                  </a>
                                  <a href="#" className="nolink pl-0">
                                    LIGHTING
                                  </a>
                                  <ul className="submenu">
                                    <li>
                                      <a href="demo36-shop.html">LIGHT BULBS</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">LAMPS</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">CEILING LIGHTS</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">WALL LIGHTS</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">BATHROOM LIGHTING</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">OUTDOOR LIGHTING</a>
                                    </li>
                                  </ul>
                                  <a href="#" className="nolink pl-0">
                                    GARDEN &amp; OUTDOORS
                                  </a>
                                  <ul className="submenu pb-0">
                                    <li>
                                      <a href="demo36-shop.html">GARDEN FURNITURE</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">LAWN MOWERS</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">PRESSURE WASHERS</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">
                                        ALL ARDEN TOOLS &amp; EQUIPMENT
                                      </a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">
                                        BARBECURE &amp; OUTDOOR DINING
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-lg-4 d-lg-block d-none">
                                  <div className="product-widgets-container">
                                    <div className="product-default left-details product-widget">
                                      <figure>
                                        <a href="demo36-product.html">
                                          <img
                                            src="/assets/images/demoes/demo36/products/small/product-1.jpg"
                                            width={84}
                                            height={84}
                                            alt="product"
                                          />
                                        </a>
                                      </figure>
                                      <div className="product-details">
                                        <h3 className="product-title">
                                          {" "}
                                          <a href="demo36-product.html">PT Speaker</a>
                                        </h3>
                                        <div className="ratings-container">
                                          <div className="product-ratings">
                                            <span
                                              className="ratings"
                                              style={{ width: "100%" }}
                                            />
                                            {/* End .ratings */}
                                            <span className="tooltiptext tooltip-top" />
                                          </div>
                                          {/* End .product-ratings */}
                                        </div>
                                        {/* End .product-container */}
                                        <div className="price-box">
                                          <span className="product-price">$49.00</span>
                                        </div>
                                        {/* End .price-box */}
                                      </div>
                                      {/* End .product-details */}
                                    </div>
                                    <div className="product-default left-details product-widget">
                                      <figure>
                                        <a href="demo36-product.html">
                                          <img
                                            src="/assets/images/demoes/demo36/products/small/product-2.jpg"
                                            width={84}
                                            height={84}
                                            alt="product"
                                          />
                                        </a>
                                      </figure>
                                      <div className="product-details">
                                        <h3 className="product-title">
                                          <a href="demo36-product.html">
                                            Beats Solo HD Drenched
                                          </a>
                                        </h3>
                                        <div className="ratings-container">
                                          <div className="product-ratings">
                                            <span
                                              className="ratings"
                                              style={{ width: "100%" }}
                                            />
                                            {/* End .ratings */}
                                            <span className="tooltiptext tooltip-top">
                                              5.00
                                            </span>
                                          </div>
                                          {/* End .product-ratings */}
                                        </div>
                                        {/* End .product-container */}
                                        <div className="price-box">
                                          <span className="product-price">$49.00</span>
                                        </div>
                                        {/* End .price-box */}
                                      </div>
                                      {/* End .product-details */}
                                    </div>
                                    <div className="product-default left-details product-widget">
                                      <figure>
                                        <a href="demo36-product.html">
                                          <img
                                            src="/assets/images/demoes/demo36/products/small/product-3.jpg"
                                            width={84}
                                            height={84}
                                            alt="product"
                                          />
                                        </a>
                                      </figure>
                                      <div className="product-details">
                                        <h3 className="product-title">
                                          <a href="demo36-product.html">
                                            Palm Print Jacket
                                          </a>
                                        </h3>
                                        <div className="ratings-container">
                                          <div className="product-ratings">
                                            <span
                                              className="ratings"
                                              style={{ width: "100%" }}
                                            />
                                            {/* End .ratings */}
                                            <span className="tooltiptext tooltip-top" />
                                          </div>
                                          {/* End .product-ratings */}
                                        </div>
                                        {/* End .product-container */}
                                        <div className="price-box">
                                          <span className="product-price">$49.00</span>
                                        </div>
                                        {/* End .price-box */}
                                      </div>
                                      {/* End .product-details */}
                                    </div>
                                    <div className="product-default left-details product-widget">
                                      <figure>
                                        <a href="demo36-product.html">
                                          <img
                                            src="/assets/images/demoes/demo36/products/small/product-4.jpg"
                                            width={84}
                                            height={84}
                                            alt="product"
                                          />
                                        </a>
                                      </figure>
                                      <div className="product-details">
                                        <h3 className="product-title">
                                          {" "}
                                          <a href="demo36-product.html">Camera</a>{" "}
                                        </h3>
                                        <div className="ratings-container">
                                          <div className="product-ratings">
                                            <span
                                              className="ratings"
                                              style={{ width: "100%" }}
                                            />
                                            {/* End .ratings */}
                                            <span className="tooltiptext tooltip-top">
                                              5.00
                                            </span>
                                          </div>
                                          {/* End .product-ratings */}
                                        </div>
                                        {/* End .product-container */}
                                        <div className="price-box">
                                          <span className="product-price">$49.00</span>
                                        </div>
                                        {/* End .price-box */}
                                      </div>
                                      {/* End .product-details */}
                                    </div>
                                    <div className="product-default left-details product-widget">
                                      <figure>
                                        <a href="demo36-product.html">
                                          <img
                                            src="/assets/images/demoes/demo36/products/small/product-5.jpg"
                                            width={84}
                                            height={84}
                                            alt="product"
                                          />
                                        </a>
                                      </figure>
                                      <div className="product-details">
                                        <h3 className="product-title">
                                          {" "}
                                          <a href="demo36-product.html">Red Football</a>
                                        </h3>
                                        <div className="ratings-container">
                                          <div className="product-ratings">
                                            <span
                                              className="ratings"
                                              style={{ width: "100%" }}
                                            />
                                            {/* End .ratings */}
                                            <span className="tooltiptext tooltip-top" />
                                          </div>
                                          {/* End .product-ratings */}
                                        </div>
                                        {/* End .product-container */}
                                        <div className="price-box">
                                          <span className="product-price">$49.00</span>
                                        </div>
                                        {/* End .price-box */}
                                      </div>
                                      {/* End .product-details */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* End .row */}
                            </div>
                            {/* End .megamenu */}
                          </li>
                          <li>
                            <a href="#">
                              <i className="icon-category-music" />
                              Gaming
                            </a>
                            <div
                              className="megamenu megamenu-fixed-width megamenu-five text-transform-none"
                              style={{
                                backgroundImage:
                                  "url(/assets/images/demoes/demo40/menu-banner-4.jpg)"
                              }}
                            >
                              <div className="row">
                                <div className="col-lg-4 pt-0">
                                  <a href="#" className="nolink pl-0">
                                    INSTRUMENTS
                                  </a>
                                  <ul className="submenu bg-transparent">
                                    <li>
                                      <a href="demo36-shop.html">Beverages</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Guitar</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Drums Sets</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Percussions</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">
                                        Pedals &amp; Effects
                                      </a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Sound Cards</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Studio Equipments</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">
                                        Piano &amp; Keyboards
                                      </a>
                                    </li>
                                  </ul>
                                  <a href="#" className="nolink pl-0">
                                    EXTRA
                                  </a>
                                  <ul className="submenu bg-transparent pb-0">
                                    <li>
                                      <a href="demo36-shop.html">Alcohol</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Strings</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Recorders</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Amplifiers</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Accessories</a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-lg-8 pt-0 d-lg-block d-none">
                                  <div className="banner banner9 mb-2 h-100 d-flex align-items-center">
                                    <div className="banner-layer text-right pt-0">
                                      <h6 className="text-transform-none">
                                        CHECK NEW ARRIVALS
                                      </h6>
                                      <h3 className=" text-white">PROFESSIONAL</h3>
                                      <h2 className="text-transform-none text-white">
                                        HEADPHONES
                                      </h2>
                                      <a
                                        href="demo36-shop.html"
                                        className="btn btn-dark"
                                      >
                                        VIEW ALL NOW
                                      </a>
                                    </div>
                                    {/* End .banner-layer */}
                                  </div>
                                  {/* End .home-slide */}
                                </div>
                              </div>
                              {/* End .row */}
                            </div>
                            {/* End .megamenu */}
                          </li>
                          <li>
                            <a href="#">
                              <i className="icon-cat-sport" />
                              Sports
                            </a>
                            <div className="megamenu megamenu-fixed-width megamenu-four megamenu-product">
                              <div className="row">
                                <div className="col-lg-4 mb-0 pb-2">
                                  <a href="#" className="nolink pl-0">
                                    SPORTS
                                  </a>
                                  <ul className="submenu pb-0">
                                    <li>
                                      <a href="demo36-shop.html">
                                        Sports &amp; Fitness
                                      </a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">
                                        Boating &amp; Sailing
                                      </a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Clothing</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">
                                        Exercise &amp; Fitness
                                      </a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Golf</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">
                                        Hunting &amp; Fishing
                                      </a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Leisure Sports</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Running</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Swiming</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Team Sports</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Tennis</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Other Sports</a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-lg-3">
                                  <a href="#" className="nolink pl-0 pt-2">
                                    SHOP BY PRICE
                                  </a>
                                  <ul className="submenu mb-1">
                                    <li>
                                      <a href="demo36-shop.html">Under $25</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">$25 to $50</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">$50 to $100</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">$100 to $200</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">$250 $ Above</a>
                                    </li>
                                  </ul>
                                  <a href="#" className="nolink pl-0">
                                    SHOP BY NRAND
                                  </a>
                                  <ul className="submenu pb-0">
                                    <li>
                                      <a href="demo36-shop.html">Brooks</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Adidas</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Nike</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Asics</a>
                                    </li>
                                    <li>
                                      <a href="demo36-shop.html">Puma</a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-lg-5 d-lg-block d-none menu-product">
                                  <div
                                    className="owl-carousel owl-theme show-nav-hover nav-outer dots-small"
                                    data-owl-options="{
                                                      'items': 1,
                                                      'loop': false
                                                  }"
                                  >
                                    <div className="product-default">
                                      <figure>
                                        <h5>FLASH DEALS</h5>
                                        <a href="demo36-product.html">
                                          <img
                                            src="/assets/images/demoes/demo36/products/product-1.jpg"
                                            width={450}
                                            height={450}
                                            alt="product"
                                          />
                                        </a>
                                      </figure>
                                      <div className="product-details">
                                        <h3 className="product-title">
                                          <a href="demo36-product.html">Drone Pro</a>
                                        </h3>
                                        <div className="ratings-container">
                                          <div className="product-ratings">
                                            <span
                                              className="ratings"
                                              style={{ width: "80%" }}
                                            />
                                            {/* End .ratings */}
                                            <span className="tooltiptext tooltip-top" />
                                          </div>
                                          {/* End .product-ratings */}
                                        </div>
                                        {/* End .product-container */}
                                        <div className="price-box">
                                          <del className="old-price">$59.00</del>
                                          <span className="product-price">$49.00</span>
                                        </div>
                                        {/* End .price-box */}
                                        <div className="product-countdown-container">
                                          <span className="product-countdown-title">
                                            offer ends in:
                                          </span>
                                          <div
                                            className="product-countdown countdown-compact"
                                            data-until="2021, 10, 5"
                                            data-compact="true"
                                          ></div>
                                          {/* End .product-countdown */}
                                        </div>
                                        {/* End .product-countdown-container */}
                                      </div>
                                      {/* End .product-details */}
                                    </div>
                                    <div className="product-default">
                                      <figure>
                                        <a href="demo36-product.html">
                                          <img
                                            src="/assets/images/demoes/demo36/products/product-2.jpg"
                                            width={450}
                                            height={450}
                                            alt="product"
                                          />
                                        </a>
                                      </figure>
                                      <div className="product-details">
                                        <h3 className="product-title">
                                          <a href="demo36-product.html">Drone Pro</a>
                                        </h3>
                                        <div className="ratings-container">
                                          <div className="product-ratings">
                                            <span
                                              className="ratings"
                                              style={{ width: "80%" }}
                                            />
                                            {/* End .ratings */}
                                            <span className="tooltiptext tooltip-top" />
                                          </div>
                                          {/* End .product-ratings */}
                                        </div>
                                        {/* End .product-container */}
                                        <div className="price-box">
                                          <del className="old-price">$59.00</del>
                                          <span className="product-price">$49.00</span>
                                        </div>
                                        {/* End .price-box */}
                                      </div>
                                      {/* End .product-details */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* End .row */}
                            </div>
                            {/* End .megamenu */}
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="active">
                      <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                      <Link href={"/tienda"}>Shop</Link>
                      <div className="megamenu megamenu-fixed-width megamenu-3cols">
                        <div className="row">
                          <div className="col-lg-4">
                            <a href="#" className="nolink">
                              VARIATION 1
                            </a>
                            <ul className="submenu">
                              <li>
                                <a href="demo36-shop.html">Fullwidth Banner</a>
                              </li>
                              <li>
                                <a href="category-banner-boxed-slider.html">
                                  Boxed Slider Banner
                                </a>
                              </li>
                              <li>
                                <a href="category-banner-boxed-image.html">
                                  Boxed Image Banner
                                </a>
                              </li>
                              <li>
                                <a href="demo36-shop.html">Left Sidebar</a>
                              </li>
                              <li>
                                <a href="category-sidebar-right.html">Right Sidebar</a>
                              </li>
                              <li>
                                <a href="category-off-canvas.html">Off Canvas Filter</a>
                              </li>
                              <li>
                                <a href="category-horizontal-filter1.html">
                                  Horizontal Filter1
                                </a>
                              </li>
                              <li>
                                <a href="category-horizontal-filter2.html">
                                  Horizontal Filter2
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-4">
                            <a href="#" className="nolink">
                              VARIATION 2
                            </a>
                            <ul className="submenu">
                              <li>
                                <a href="category-list.html">List Types</a>
                              </li>
                              <li>
                                <a href="category-infinite-scroll.html">
                                  Ajax Infinite Scroll
                                </a>
                              </li>
                              <li>
                                <a href="demo36-shop.html">3 Columns Products</a>
                              </li>
                              <li>
                                <a href="category-4col.html">4 Columns Products</a>
                              </li>
                              <li>
                                <a href="category-5col.html">5 Columns Products</a>
                              </li>
                              <li>
                                <a href="category-6col.html">6 Columns Products</a>
                              </li>
                              <li>
                                <a href="category-7col.html">7 Columns Products</a>
                              </li>
                              <li>
                                <a href="category-8col.html">8 Columns Products</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-4 p-0">
                            <div className="menu-banner">
                              <figure>
                                <img
                                  src="/assets/images/menu-banner.jpg"
                                  width={192}
                                  height={313}
                                  alt="Menu banner"
                                />
                              </figure>
                              <div className="banner-content">
                                <h4>
                                  <span className="">UP TO</span>
                                  <br />
                                  <b className="">50%</b>
                                  <i>OFF</i>
                                </h4>
                                <a
                                  href="demo36-shop.html"
                                  className="btn btn-sm btn-dark"
                                >
                                  SHOP NOW
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End .megamenu */}
                    </li>
                    <li>
                      <a href="demo36-product.html">Products</a>
                      <div className="megamenu megamenu-fixed-width">
                        <div className="row">
                          <div className="col-lg-4">
                            <a href="#" className="nolink">
                              PRODUCT PAGES
                            </a>
                            <ul className="submenu">
                              <li>
                                <a href="product.html">SIMPLE PRODUCT</a>
                              </li>
                              <li>
                                <a href="product-variable.html">VARIABLE PRODUCT</a>
                              </li>
                              <li>
                                <a href="product.html">SALE PRODUCT</a>
                              </li>
                              <li>
                                <a href="product.html">FEATURED &amp; ON SALE</a>
                              </li>
                              <li>
                                <a href="product-custom-tab.html">WITH CUSTOM TAB</a>
                              </li>
                              <li>
                                <a href="product-sidebar-left.html">
                                  WITH LEFT SIDEBAR
                                </a>
                              </li>
                              <li>
                                <a href="product-sidebar-right.html">
                                  WITH RIGHT SIDEBAR
                                </a>
                              </li>
                              <li>
                                <a href="product-addcart-sticky.html">
                                  ADD CART STICKY
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* End .col-lg-4 */}
                          <div className="col-lg-4">
                            <a href="#" className="nolink">
                              PRODUCT LAYOUTS
                            </a>
                            <ul className="submenu">
                              <li>
                                <a href="product-extended-layout.html">
                                  EXTENDED LAYOUT
                                </a>
                              </li>
                              <li>
                                <a href="product-grid-layout.html">GRID IMAGE</a>
                              </li>
                              <li>
                                <a href="product-full-width.html">FULL WIDTH LAYOUT</a>
                              </li>
                              <li>
                                <a href="product-sticky-info.html">STICKY INFO</a>
                              </li>
                              <li>
                                <a href="product-sticky-both.html">
                                  LEFT &amp; RIGHT STICKY
                                </a>
                              </li>
                              <li>
                                <a href="product-transparent-image.html">
                                  TRANSPARENT IMAGE
                                </a>
                              </li>
                              <li>
                                <a href="product-center-vertical.html">
                                  CENTER VERTICAL
                                </a>
                              </li>
                              <li>
                                <a href="#">BUILD YOUR OWN</a>
                              </li>
                            </ul>
                          </div>
                          {/* End .col-lg-4 */}
                          <div className="col-lg-4 p-0">
                            <div className="menu-banner menu-banner-2">
                              <figure>
                                <img
                                  src="/assets/images/menu-banner-1.jpg"
                                  alt="Menu banner"
                                  className="product-promo"
                                />
                              </figure>
                              <i>OFF</i>
                              <div className="banner-content">
                                <h4>
                                  <span className="">UP TO</span>
                                  <br />
                                  <b className="">50%</b>
                                </h4>
                              </div>
                              <a
                                href="demo36-shop.html"
                                className="btn btn-sm btn-dark"
                              >
                                SHOP NOW
                              </a>
                            </div>
                          </div>
                          {/* End .col-lg-4 */}
                        </div>
                        {/* End .row */}
                      </div>
                      {/* End .megamenu */}
                    </li>
                    <li>
                      <a href="#">Pages</a>
                      <ul>
                        <li>
                          <a href="wishlist.html">Wishlist</a>
                        </li>
                        <li>
                          <a href="cart.html">Shopping Cart</a>
                        </li>
                        <li>
                          <a href="checkout.html">Checkout</a>
                        </li>
                        <li>
                          <a href="dashboard.html">Dashboard</a>
                        </li>
                        <li>
                          <a href="about.html">About Us</a>
                        </li>
                        <li>
                          <a href="#">Blog</a>
                          <ul>
                            <li>
                              <a href="blog.html">Blog</a>
                            </li>
                            <li>
                              <a href="single.html">Blog Post</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html">Contact Us</a>
                        </li>
                        <li>
                          <a href="login.html">Login</a>
                        </li>
                        <li>
                          <a href="forgot-password.html">Forgot Password</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="https://1.envato.market/DdLk5" target="_blank">
                        Buy Porto
                      </a>
                    </li>
                    <li className="float-right phone">
                      <a href="#" className="d-flex align-items-center">
                        <i className="icon-phone-1" />
                        1-800-234-5678
                      </a>
                    </li>
                    <li className="float-right">
                      <a href="https://1.envato.market/DdLk5" target="_blank">
                        NEW ARRIVALS
                      </a>
                    </li>
                    <li className="float-right">
                      <a href="#">FLASH DEALS</a>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* End .container */}
            </div>
            {/* End .header-bottom */}
          </header>
          {/* End .header */}

        {/* JS Scripts */}
      <Script src="/assets/js/jquery.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/plugins.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/optional/isotope.pkgd.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/main.min.js" strategy="lazyOnload" />

    </>
  )
}

export default Header
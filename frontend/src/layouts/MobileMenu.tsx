import React, { useEffect, useState } from 'react';

interface MobileMenuProps {
  menuActive: boolean;
  setMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ setMenuActive }) => {
  const [isMobile, setIsMobile] = useState(false);

  const closeMenu = () => {
    setMenuActive(false);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // Ejecutar inicialmente para configurar el estado
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      <div className="mobile-menu-overlay" onClick={closeMenu} />
      {/* End .mobil-menu-overlay */}
      <div className="mobile-menu-container">
        <div className="mobile-menu-wrapper">
          <span className="mobile-menu-close" onClick={closeMenu}>
            <i className="fa fa-times" />
          </span>
          <nav className="mobile-nav">
            <ul className="mobile-menu">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="demo36-shop.html">Categories</a>
                <ul>
                  <li>
                    <a href="category.html">Full Width Banner</a>
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
                    <a href="category-sidebar-left.html">Left Sidebar</a>
                  </li>
                  <li>
                    <a href="category-sidebar-right.html">Right Sidebar</a>
                  </li>
                  <li>
                    <a href="category-off-canvas.html">Off Canvas Filter</a>
                  </li>
                  <li>
                    <a href="category-horizontal-filter1.html">
                      Horizontal Filter 1
                    </a>
                  </li>
                  <li>
                    <a href="category-horizontal-filter2.html">
                      Horizontal Filter 2
                    </a>
                  </li>
                  <li>
                    <a href="#">List Types</a>
                  </li>
                  <li>
                    <a href="category-infinite-scroll.html">
                      Ajax Infinite Scroll
                      <span className="tip tip-new">New</span>
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
              </li>
              <li>
                <a href="demo36-product.html">Products</a>
                <ul>
                  <li>
                    <a href="#" className="nolink">
                      PRODUCT PAGES
                    </a>
                    <ul>
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
                        <a href="product-sticky-info.html">WIDTH CUSTOM TAB</a>
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
                  </li>
                  <li>
                    <a href="#" className="nolink">
                      PRODUCT LAYOUTS
                    </a>
                    <ul>
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
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  Pages<span className="tip tip-hot">Hot!</span>
                </a>
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
                    <a href="login.html">Login</a>
                  </li>
                  <li>
                    <a href="forgot-password.html">Forgot Password</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <a href="#">Elements</a>
                <ul className="custom-scrollbar">
                  <li>
                    <a href="element-accordions.html">Accordion</a>
                  </li>
                  <li>
                    <a href="element-alerts.html">Alerts</a>
                  </li>
                  <li>
                    <a href="element-animations.html">Animations</a>
                  </li>
                  <li>
                    <a href="element-banners.html">Banners</a>
                  </li>
                  <li>
                    <a href="element-buttons.html">Buttons</a>
                  </li>
                  <li>
                    <a href="element-call-to-action.html">Call to Action</a>
                  </li>
                  <li>
                    <a href="element-countdown.html">Count Down</a>
                  </li>
                  <li>
                    <a href="element-counters.html">Counters</a>
                  </li>
                  <li>
                    <a href="element-headings.html">Headings</a>
                  </li>
                  <li>
                    <a href="element-icons.html">Icons</a>
                  </li>
                  <li>
                    <a href="element-info-box.html">Info box</a>
                  </li>
                  <li>
                    <a href="element-posts.html">Posts</a>
                  </li>
                  <li>
                    <a href="element-products.html">Products</a>
                  </li>
                  <li>
                    <a href="element-product-categories.html">
                      Product Categories
                    </a>
                  </li>
                  <li>
                    <a href="element-tabs.html">Tabs</a>
                  </li>
                  <li>
                    <a href="element-testimonial.html">Testimonials</a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="mobile-menu mt-2 mb-2">
              <li className="border-0">
                <a href="#">Special Offer!</a>
              </li>
              <li className="border-0">
                <a href="https://1.envato.market/DdLk5" target="_blank">
                  Buy Porto!
                  <span className="tip tip-hot">Hot</span>
                </a>
              </li>
            </ul>
            <ul className="mobile-menu">
              <li>
                <a href="login.html">My Account</a>
              </li>
              <li>
                <a href="contact.html">Contact Us</a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <a href="wishlist.html">My Wishlist</a>
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
          </nav>
          {/* End .mobile-nav */}
          <form className="search-wrapper mb-2" action="#">
            <input
              type="text"
              className="form-control mb-0"
              placeholder="Search_2..."
              required
            />
            <button
              className="btn icon-search text-white bg-transparent p-0"
              type="submit"
            />
          </form>
          <div className="social-icons">
            <a
              href="#"
              className="social-icon social-facebook icon-facebook"
              target="_blank"
            ></a>
            <a
              href="#"
              className="social-icon social-twitter icon-twitter"
              target="_blank"
            ></a>
            <a
              href="#"
              className="social-icon social-instagram icon-instagram"
              target="_blank"
            ></a>
          </div>
        </div>
        {/* End .mobile-menu-wrapper */}
      </div>
      {/* End .mobile-menu-container */}
      {/* <div className="sticky-navbar"> */}
      <div className={`sticky-navbar ${isMobile ? 'fixed' : ''}`}>
        <div className="sticky-info">
          <a href="/">
            <i className="icon-home" />
            Home
          </a>
        </div>
        <div className="sticky-info">
          <a href="demo36-shop.html" className="">
            <i className="icon-bars" />
            Categories
          </a>
        </div>
        <div className="sticky-info">
          <a href="wishlist.html" className="">
            <i className="icon-wishlist-2" />
            Wishlist
          </a>
        </div>
        <div className="sticky-info">
          <a href="login.html" className="">
            <i className="icon-user-2" />
            Account
          </a>
        </div>
        <div className="sticky-info">
          <a href="cart.html" className="">
            <i className="icon-shopping-cart position-relative">
              <span className="cart-count badge-circle">3</span>
            </i>
            Cart
          </a>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;

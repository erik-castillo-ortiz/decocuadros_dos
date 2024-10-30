// 'use client';
// import React, { useEffect, useState } from 'react';
// import HeaderTop from './components/HeaderTop';
// import HeaderMenuMobile from './components/HeaderMenuMobile';
// import HeaderMegaMenu from './components/HeaderMegaMenu';
// import menuData from '@/app/helpers/MegaMenu.json';
// import Link from 'next/link';
// import MobileMenu from './MobileMenu';

// const Header: React.FC = () => {
//   const [menuActive, setMenuActive] = useState(false);
//   const [isSticky, setIsSticky] = useState(false);
//   const [stickyStyle, setStickyStyle] = useState<{ top: string }>({
//     top: '-100px',
//   });
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

//   const handleScroll = () => {
//     if (isMobile) return;

//     const headerBottom = document.querySelector(
//       '.header-bottom'
//     ) as HTMLElement;
//     const headerWrapper = document.querySelector('.header') as HTMLElement;

//     if (headerBottom && headerWrapper) {
//       const sticky = headerWrapper.offsetTop + headerWrapper.offsetHeight;

//       if (window.pageYOffset > sticky) {
//         headerBottom.classList.add('custom-transition', 'fixed');
//         setIsSticky(true);
//         setStickyStyle({ top: '0px' });
//       } else {
//         headerBottom.classList.remove('custom-transition', 'fixed');
//         setIsSticky(false);
//         setStickyStyle({ top: '-100px' });
//       }
//     }
//   };

//   const handleResize = () => {
//     const mobileView = window.innerWidth < 992;
//     setIsMobile(mobileView);

//     if (mobileView) {
//       const headerBottom = document.querySelector(
//         '.header-bottom'
//       ) as HTMLElement;
//       headerBottom.classList.remove('custom-transition', 'fixed');
//       setIsSticky(false);
//       setStickyStyle({ top: '-100px' });
//     }
//   };

//   useEffect(() => {
//     handleScroll();
//     window.addEventListener('scroll', handleScroll);
//     window.addEventListener('resize', handleResize);
//     handleResize();

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('resize', handleResize);
//     };
//   }, [isMobile]);

//   useEffect(() => {
//     if (menuActive) {
//       document.body.classList.add('mmenu-active');
//     } else {
//       document.body.classList.remove('mmenu-active');
//     }
//     return () => {
//       document.body.classList.remove('mmenu-active');
//     };
//   }, [menuActive]);

//   return (
//     <>
//       <MobileMenu menuActive={menuActive} setMenuActive={setMenuActive} />
//       <header className="header">
//         <HeaderTop />
//         <HeaderMenuMobile setMenuActive={setMenuActive} />
//         <div
//           className={`sticky-wrapper ${isSticky ? 'min-height: 81.5px;' : ''}`}
//         >
//           <div
//             className="header-bottom sticky-header d-none d-lg-flex"
//             data-sticky-options="{'mobile': false}"
//             style={stickyStyle}
//           >
//             <div className="container">
//               <nav className="main-nav w-100">
//                 <ul className="menu w-100">
//                   <HeaderMegaMenu menuItems={menuData.menuItems} />
//                   <li className="active">
//                     <Link href={'/'}>Home</Link>
//                   </li>
//                   <li>
//                     <Link href={'/tienda'}>Shop</Link>
'use client';
import React, { useEffect, useState } from 'react';
import HeaderTop from './components/HeaderTop';
import HeaderMenuMobile from './components/HeaderMenuMobile';
import HeaderMegaMenu from './components/HeaderMegaMenu';
import menuData from '@/app/helpers/MegaMenu.json';
import Link from 'next/link';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [stickyStyle, setStickyStyle] = useState<{ top: string }>({
    top: '-100px',
  });
  const [isMobile, setIsMobile] = useState(false);

  // Manejamos la detección inicial de móvil al cargar el componente
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };
    // Establece isMobile cuando el componente se monta
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScroll = () => {
    if (isMobile) return;

    const headerBottom = document.querySelector(
      '.header-bottom'
    ) as HTMLElement;
    const headerWrapper = document.querySelector('.header') as HTMLElement;

    if (headerBottom && headerWrapper) {
      const sticky = headerWrapper.offsetTop + headerWrapper.offsetHeight;

      if (window.pageYOffset > sticky) {
        headerBottom.classList.add('custom-transition', 'fixed');
        setIsSticky(true);
        setStickyStyle({ top: '0px' });
      } else {
        headerBottom.classList.remove('custom-transition', 'fixed');
        setIsSticky(false);
        setStickyStyle({ top: '-100px' });
      }
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    // Removemos el fixed si estamos en móvil
    if (isMobile) {
      const headerBottom = document.querySelector(
        '.header-bottom'
      ) as HTMLElement;
      headerBottom?.classList.remove('custom-transition', 'fixed');
      setIsSticky(false);
      setStickyStyle({ top: '-100px' });
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  useEffect(() => {
    if (menuActive) {
      document.body.classList.add('mmenu-active');
    } else {
      document.body.classList.remove('mmenu-active');
    }
    return () => {
      document.body.classList.remove('mmenu-active');
    };
  }, [menuActive]);

  return (
    <>
      <MobileMenu menuActive={menuActive} setMenuActive={setMenuActive} />
      <header className="header">
        <HeaderTop />
        <HeaderMenuMobile setMenuActive={setMenuActive} />
        <div
          className={`sticky-wrapper ${isSticky ? 'min-height: 81.5px;' : ''}`}
        >
          <div
            className="header-bottom sticky-header d-none d-lg-flex"
            data-sticky-options="{'mobile': false}"
            style={stickyStyle}
          >
            <div className="container">
              <nav className="main-nav w-100">
                <ul className="menu w-100">
                  <HeaderMegaMenu menuItems={menuData.menuItems} />
                  <li className="active">
                    <Link href={'/'}>Home</Link>
                  </li>
                  <li>
                    <Link href={'/tienda'}>Shop</Link>
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
                              <a href="category-sidebar-right.html">
                                Right Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="category-off-canvas.html">
                                Off Canvas Filter
                              </a>
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
                              <a href="category-4col.html">
                                4 Columns Products
                              </a>
                            </li>
                            <li>
                              <a href="category-5col.html">
                                5 Columns Products
                              </a>
                            </li>
                            <li>
                              <a href="category-6col.html">
                                6 Columns Products
                              </a>
                            </li>
                            <li>
                              <a href="category-7col.html">
                                7 Columns Products
                              </a>
                            </li>
                            <li>
                              <a href="category-8col.html">
                                8 Columns Products
                              </a>
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
                              <a href="product-variable.html">
                                VARIABLE PRODUCT
                              </a>
                            </li>
                            <li>
                              <a href="product.html">SALE PRODUCT</a>
                            </li>
                            <li>
                              <a href="product.html">FEATURED &amp; ON SALE</a>
                            </li>
                            <li>
                              <a href="product-custom-tab.html">
                                WITH CUSTOM TAB
                              </a>
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
                              <a href="product-full-width.html">
                                FULL WIDTH LAYOUT
                              </a>
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
                  <li className="float-right float-end phone">
                    <a href="#" className="d-flex align-items-center">
                      <i className="icon-phone-1" />
                      1-800-234-5678
                    </a>
                  </li>
                  <li className="float-right float-end">
                    <a href="https://1.envato.market/DdLk5" target="_blank">
                      NEW ARRIVALS
                    </a>
                  </li>
                  <li className="float-right float-end">
                    <a href="#">FLASH DEALS</a>
                  </li>
                </ul>
              </nav>
            </div>
            {/* End .container */}
          </div>
        </div>
        {/* End .header-bottom */}
      </header>
      {/* End .header */}
    </>
  );
};

export default Header;

// 'use client';
// import React, { useState } from 'react';

// const HeaderMegaMenu: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <>
//       <li className="menu-item">
//         <a
//           className="d-inline-flex align-items-center sf-with-ul text-white"
//           onClick={toggleMenu}
//         >
//           <i className="custom-icon-toggle-menu d-inline-table" />
//           <span>ALL DEPARTMENTS</span>
//         </a>

//         {/* Overlay */}
//         <div
//           className={`menu-depart-overlay ${isMenuOpen ? 'show' : ''}`}
//           onClick={toggleMenu}
//         />

//         {/* Menu content */}
//         <div className={`menu-depart ${isMenuOpen ? 'opened' : ''}`}>
//           <ul className="menu menu-vertical sf-arrows d-block no-superfish">
//             <li>
//               <a href="#">
//                 <i className="icon-category-fashion" />
//                 Fashion
//               </a>
//               <div className="megamenu megamenu-fixed-width megamenu-one" style={{ left: '-15px', display: 'block' }}>
//                 <div className="row">
//                   <div className="col-lg-3 mb-1 pb-2">
//                     <a href="#" className="nolink ps-0">
//                       WOMAN
//                     </a>
//                     <ul className="submenu">
//                       <li>
//                         <a href="demo36-shop.html">Top & Blouses</a>
//                       </li>
//                       <li>
//                         <a href="demo36-shop.html">Accessories</a>
//                       </li>
//                       <li>
//                         <a href="demo36-shop.html">Dresses & Skirts</a>
//                       </li>
//                       <li>
//                         <a href="demo36-shop.html">Shoes & Boots</a>
//                       </li>
//                     </ul>
//                     <a href="#" className="nolink ps-0">
//                       JEWELLERY
//                     </a>
//                     <ul className="submenu">
//                       <li>
//                         <a href="demo36-shop.html">Sweaters</a>
//                       </li>
//                       <li>
//                         <a href="demo36-shop.html">Heels & Sandals</a>
//                       </li>
//                       <li>
//                         <a href="demo36-shop.html">Jeans & Shorts</a>
//                       </li>
//                     </ul>
//                   </div>
//                   <div className="col-lg-4">
//                     <a href="#" className="nolink ps-0">
//                       MAN
//                     </a>
//                     <ul className="submenu">
//                       <li>
//                         <a href="demo36-shop.html">Accessories</a>
//                       </li>
//                       <li>
//                         <a href="demo36-shop.html">Watch Fashion</a>
//                       </li>
//                       <li>
//                         <a href="demo36-shop.html">Tees, Knits & Polos</a>
//                       </li>
//                       <li>
//                         <a href="demo36-shop.html">KOKA</a>
//                       </li>
//                     </ul>
//                     <a href="#" className="nolink ps-0">
//                       KIDS FASHION
//                     </a>
//                     <ul className="submenu">
//                       <li>
//                         <a href="demo36-shop.html">Casual Shoes</a>
//                       </li>
//                       <li>
//                         <a href="demo36-shop.html">Spring & Autumn</a>
//                       </li>
//                       <li>
//                         <a href="demo36-shop.html">Winter Sneakers</a>
//                       </li>
//                     </ul>
//                   </div>

//                   {/* Banner Section */}
//                   <div className="col-lg-5 p-0 d-lg-block d-none position-relative">
//                     <div className="menu-banner menu-banner-2">
//                       <figure className="m-0">
//                         <img
//                           src="assets/images/demoes/demo40/menu-banner-1.jpg"
//                           alt="Menu banner"
//                           className="product-promo w-100"
//                         />
//                       </figure>
//                       <i className="position-absolute">
//                         OFF
//                       </i>
//                       <div className="banner-content position-absolute">
//                         <h4 className="text-dark">
//                           <span className="text-dark">UP TO</span>
//                           <br />
//                           <b className="text-dark">50%</b>
//                         </h4>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Partners Section */}
//                   <div className="col-lg-12 d-lg-block d-none">
//                     <div className="partners-container row">
//                       <div className="col-xl-5col">
//                         <div className="partner">
//                           <img
//                             src="assets/images/brands/small/brand1.png"
//                             alt="logo image"
//                             width="140"
//                             height="60"
//                           />
//                         </div>
//                       </div>
//                       <div className="col-xl-5col">
//                         <div className="partner">
//                           <img
//                             src="assets/images/brands/small/brand2.png"
//                             alt="logo image"
//                             width="140"
//                             height="60"
//                           />
//                         </div>
//                       </div>
//                       <div className="col-xl-5col">
//                         <div className="partner">
//                           <img
//                             src="assets/images/brands/small/brand3.png"
//                             alt="logo image"
//                             width="140"
//                             height="60"
//                           />
//                         </div>
//                       </div>
//                       <div className="col-xl-5col">
//                         <div className="partner">
//                           <img
//                             src="assets/images/brands/small/brand4.png"
//                             alt="logo image"
//                             width="140"
//                             height="60"
//                           />
//                         </div>
//                       </div>
//                       <div className="col-xl-5col">
//                         <div className="partner">
//                           <img
//                             src="assets/images/brands/small/brand5.png"
//                             alt="logo image"
//                             width="140"
//                             height="60"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {/* End .megamenu */}
//             </li>
//           </ul>
//         </div>
//       </li>
//     </>
//   );
// };

// export default HeaderMegaMenu;
'use client';
import React, { useState } from 'react';

interface MenuItem {
  title: string;
  iconClass: string;
  megamenuClass: string;
  categories: Category[];
  banner: Banner;
  partners: Partner[];
}

interface Category {
  title: string;
  links: Link[];
}

interface Link {
  name: string;
  url: string;
}

interface Banner {
  imgSrc: string;
  content: {
    titlePrefix: string;
    mainTitle: string;
    subTitle: string;
  };
}

interface Partner {
  imgSrc: string;
  alt: string;
  width: number;
  height: number;
}

interface HeaderMegaMenuProps {
  menuItems: MenuItem[];
}

const HeaderMegaMenu: React.FC<HeaderMegaMenuProps> = ({ menuItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <li className="menu-item">
        <a
          className="d-inline-flex align-items-center sf-with-ul text-white"
          onClick={toggleMenu}
        >
          <i className="custom-icon-toggle-menu d-inline-table" />
          <span>ALL DEPARTMENTS</span>
        </a>

        {/* Overlay */}
        <div
          className={`menu-depart-overlay ${isMenuOpen ? 'show' : ''}`}
          onClick={toggleMenu}
        />

        {/* Menu content */}
        <div className={`menu-depart ${isMenuOpen ? 'opened' : ''}`}>
          <ul className="menu menu-vertical sf-arrows d-block no-superfish">
            {menuItems.map((menuItem, index) => (
              <li key={index}>
                <a href="#" className="sf-with-ul">
                  <i className={menuItem.iconClass} />
                  {menuItem.title}
                </a>
                <div
                  className={`megamenu megamenu-fixed-width ${menuItem.megamenuClass}`}
                  style={{ left: '-15px', display: 'block' }}
                >
                  <div className="row">
                    {/* Categories */}
                    <div className="col-lg-3 mb-1 pb-2">
                      <a href="#" className="nolink ps-0">
                        WOMAN
                      </a>
                      <ul className="submenu">
                        {menuItem.categories[0].links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <a href={link.url}>{link.name}</a>
                          </li>
                        ))}
                      </ul>
                      <a href="#" className="nolink ps-0">
                        JEWELLERY
                      </a>
                      <ul className="submenu">
                        {menuItem.categories[1].links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <a href={link.url}>{link.name}</a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="col-lg-4">
                      <a href="#" className="nolink ps-0">
                        MAN
                      </a>
                      <ul className="submenu">
                        {menuItem.categories[2].links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <a href={link.url}>{link.name}</a>
                          </li>
                        ))}
                      </ul>
                      <a href="#" className="nolink ps-0">
                        KIDS FASHION
                      </a>
                      <ul className="submenu">
                        {menuItem.categories[3].links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <a href={link.url}>{link.name}</a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Banner Section */}
                    <div className="col-lg-5 p-0 d-lg-block d-none position-relative">
                      <div className="menu-banner menu-banner-2">
                        <figure className="m-0">
                          <img
                            src={menuItem.banner.imgSrc}
                            alt="Menu banner"
                            className="product-promo w-100"
                          />
                        </figure>
                        <i>{menuItem.banner.content.subTitle}</i>
                        <div className="banner-content">
                          <h4>
                            <span className="text-dark">
                              {menuItem.banner.content.titlePrefix}
                            </span>
                            <br />
                            <b className="text-dark">
                              {menuItem.banner.content.mainTitle}
                            </b>
                          </h4>
                        </div>
                      </div>
                    </div>

                    {/* Partners Section */}
                    <div className="col-lg-12 d-lg-block d-none">
                      <div className="partners-container row">
                        {menuItem.partners.map((partner, partnerIndex) => (
                          <div key={partnerIndex} className="col-xl-5col">
                            <div className="partner">
                              <img
                                src={partner.imgSrc}
                                alt={partner.alt}
                                width={partner.width}
                                height={partner.height}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </li>
    </>
  );
};

export default HeaderMegaMenu;

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

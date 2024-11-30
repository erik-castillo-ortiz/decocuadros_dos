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
                  </li>
                  <li>
                    <a href="demo36-product.html">Products</a>
                  </li>
                  <li>
                    <a href="#">Pages</a>
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

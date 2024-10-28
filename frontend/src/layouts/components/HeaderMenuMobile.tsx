import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import HeaderSearch from './HeaderMenuMobile/HeaderSearch';
import HeaderUserAccount from './HeaderMenuMobile/HeaderUserAccount';
import HeaderWishlist from './HeaderMenuMobile/HeaderWishlist';
import CartDropdown from './HeaderMenuMobile/CartDropdown';

const HeaderMenuMobile: React.FC<{
  setMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setMenuActive }) => {
  const [cartOpened, setCartOpened] = useState(false);
  const [isSticky, setIsSticky] = useState(false); // Estado para manejar el sticky header
  const [minHeight, setMinHeight] = useState<string | null>(null); // Estado para el min-height

  const toggleMenu = () => {
    setMenuActive(true); // Abrimos el menú móvil
  };

  // Función para abrir/cerrar el carrito
  const toggleCart = () => {
    // event.preventDefault();
    setCartOpened(!cartOpened);
  };

  // Detectar el scroll y aplicar la clase sticky cuando se baja
  useEffect(() => {
    const headerMiddle = document.querySelector(
      '.header-middle'
    ) as HTMLElement;

    const handleScroll = () => {
      // if (window.scrollY > 100) {
      //   setIsSticky(true);
      //   setMinHeight(`${headerMiddle.offsetHeight}px`); // Asignar el min-height basado en el tamaño original
      // } else {
      //   setIsSticky(false);
      //   setMinHeight(null); // Reiniciar el min-height cuando el header no es sticky
      // }
      // Verifica si la pantalla es menor o igual a 992px (tamaño típico de tablet/móvil)
      if (window.innerWidth <= 992) {
        if (window.scrollY > 100) {
          setIsSticky(true);
          if (headerMiddle) setMinHeight(`${headerMiddle.offsetHeight}px`);
        } else {
          setIsSticky(false);
          setMinHeight(null);
        }
      } else {
        setIsSticky(false); // Asegurarse de que no esté sticky en pantallas grandes
        setMinHeight(null);
      }
    };

    // Ejecutar handleScroll una vez al montar el componente para verificar la posición de scroll actual
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
        className="sticky-wrapper"
        style={minHeight ? { minHeight: minHeight } : {}}
      >
        <div
          className={`header-middle sticky-header ${isSticky ? 'fixed' : ''}`}
          data-bs-sticky="{'mobile': true}"
          style={isSticky ? { top: '0px' } : {}}
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
              <HeaderSearch />
              <HeaderUserAccount />
              <HeaderWishlist />
              <CartDropdown cartOpened={cartOpened} toggleCart={toggleCart} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderMenuMobile;

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import HeaderSearch from './HeaderMenuMobile/HeaderSearch';
// import HeaderUserAccount from './HeaderMenuMobile/HeaderUserAccount';
// import HeaderWishlist from './HeaderMenuMobile/HeaderWishlist';
// import CartDropdown from './HeaderMenuMobile/CartDropdown';

// const HeaderMenuMobile: React.FC<{
//   setMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
// }> = ({ setMenuActive }) => {
//   const [cartOpened, setCartOpened] = useState(false);
//   const [isSticky, setIsSticky] = useState(false); // Estado para manejar el sticky header
//   const [minHeight, setMinHeight] = useState<string | null>(null); // Estado para el min-height

//   const toggleMenu = () => {
//     setMenuActive(true); // Abrimos el menú móvil
//   };

//   // Función para abrir/cerrar el carrito
//   const toggleCart = () => {
//     setCartOpened(!cartOpened);
//   };

//   // Detectar el scroll y aplicar la clase sticky solo en móvil
//   useEffect(() => {
//     const handleScroll = () => {
//       const headerMiddle = document.querySelector(
//         '.header-middle'
//       ) as HTMLElement;

//       // Verifica si la pantalla es menor o igual a 992px (tamaño típico de tablet/móvil)
//       if (window.innerWidth <= 992) {
//         if (window.scrollY > 100) {
//           setIsSticky(true);
//           if (headerMiddle) setMinHeight(`${headerMiddle.offsetHeight}px`);
//         } else {
//           setIsSticky(false);
//           setMinHeight(null);
//         }
//       } else {
//         setIsSticky(false); // Asegurarse de que no esté sticky en pantallas grandes
//         setMinHeight(null);
//       }
//     };

//     // Ejecutar handleScroll una vez al montar el componente
//     handleScroll();

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   // Efecto para agregar o quitar la clase "cart-opened" del body
//   useEffect(() => {
//     if (cartOpened) {
//       document.body.classList.add('cart-opened');
//     } else {
//       document.body.classList.remove('cart-opened');
//     }
//     return () => {
//       document.body.classList.remove('cart-opened');
//     };
//   }, [cartOpened]);

//   return (
//     <>
//       <div
//         className="sticky-wrapper"
//         style={minHeight ? { minHeight: minHeight } : {}}
//       >
//         <div
//           className={`header-middle sticky-header ${isSticky ? 'fixed' : ''}`}
//           style={isSticky ? { top: '0px' } : {}}
//         >
//           <div className="container">
//             <div className="header-left col-lg-2 w-auto ps-0">
//               <button
//                 className="mobile-menu-toggler text-dark me-2"
//                 type="button"
//                 onClick={toggleMenu}
//               >
//                 <i className="fas fa-bars" />
//               </button>
//               <Link href={'/'} className="logo">
//                 <img
//                   src="/assets/images/logo-black.png"
//                   className="w-100"
//                   width={111}
//                   height={44}
//                   alt="Porto Logo"
//                 />
//               </Link>
//             </div>
//             {/* End .header-left */}
//             <div className="header-right w-lg-max">
//               <HeaderSearch />
//               <HeaderUserAccount />
//               <HeaderWishlist />
//               <CartDropdown cartOpened={cartOpened} toggleCart={toggleCart} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HeaderMenuMobile;

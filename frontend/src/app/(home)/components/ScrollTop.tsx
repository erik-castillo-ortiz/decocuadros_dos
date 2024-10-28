'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const ScrollTop: React.FC = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Aparecer solo si el ancho es mayor a 768px (tableta y desktop) y si el scroll es mayor a 200px
      if (window.scrollY > 200 && window.innerWidth >= 768) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Link
      href="#top"
      id="scroll-top"
      title="Top"
      role="button"
      className={isFixed ? 'fixed' : ''}
    >
      <i className="icon-angle-up"></i>
    </Link>
  );
};

export default ScrollTop;

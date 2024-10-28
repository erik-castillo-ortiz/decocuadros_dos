import React from 'react';
import Link from 'next/link';

const HeaderWishlist: React.FC = () => (
  <Link
    href={'wishlist.html'}
    className="header-icon position-relative"
    title="wishlist"
  >
    <i className="icon-wishlist-2" />
    <span className="wishlist-count badge-circle">0</span>
  </Link>
);

export default HeaderWishlist;

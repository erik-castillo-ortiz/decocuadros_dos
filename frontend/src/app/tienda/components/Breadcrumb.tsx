import React from 'react';
import Link from 'next/link';

const Breadcrumb = () => (
  <nav aria-label="breadcrumb" className="breadcrumb-nav mb-3">
    <div className="container">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link href="/">
            <i className="icon-home" />
          </Link>
        </li>
        <li className="breadcrumb-item">
          <Link href="/tienda">Shop</Link>
        </li>
      </ol>
    </div>
  </nav>
);

export default Breadcrumb;

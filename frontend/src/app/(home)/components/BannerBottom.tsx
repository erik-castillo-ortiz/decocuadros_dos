import React from 'react';

const BannerBottom: React.FC = () => {
  return (
    <div
      className="top-notice bg-dark text-white top-notice-bg appear-animate animated fadeIn appear-animation-visible"
      data-animation-name="fadeIn"
      data-animation-delay="100"
      style={{ animationDuration: '1000ms' }}
    >
      <div className="container text-center d-flex align-items-center justify-content-center flex-column flex-xl-row">
        <img
          src="/assets/images/demoes/demo36/shop-logo.png"
          width="116"
          height="23"
          alt="logo"
        />
        <h5 className="d-inline-block mb-0 pl-3 pr-3 pt-1 pb-1">
          The Lowest Prices Once A Month! Hurry To Snap Up
        </h5>
        <a
          href="demo36-shop.html"
          className="btn btn-darkcategory ls-n-0 mt-xl-0 mt-1"
        >
          SHOP NOW!
        </a>
      </div>
    </div>
  );
};

export default BannerBottom;

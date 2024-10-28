import React from 'react';

const LargeBanner: React.FC = () => {
  return (
    <div
      className="sale-banner banner bg-image mb-4 appear-animate animated fadeIn appear-animation-visible"
      data-animation-name="fadeIn"
      data-animation-delay="100"
      style={{
        backgroundImage: `url("/assets/images/demoes/demo36/banners/banner6.jpg")`,
        animationDuration: '1000ms',
      }}
    >
      <div className="container banner-content">
        <div className="row no-gutter justify-content-start">
          <div className="col-auto col-lg-5 col-md-6 col-12 d-flex flex-column justify-content-center content-left text-center text-md-right">
            <h4 className="align-left text-white text-uppercase">
              THE PERFECT GIFT FOR YOUR GIRLFRIEND
            </h4>
            <h3 className="text-white mb-0 align-left text-uppercase">
              GIFT SELECTION ON SALE
            </h3>
          </div>
          <div className="col-auto col-md-2 col-12 col-2 justify-content-center content-center mr-md-3 mr-lg-0 ml-md-4 ml-lg-0">
            <h2 className="text-white mb-0 position-relative align-left">
              50
              <small>
                %<ins>OFF</ins>
              </small>
            </h2>
          </div>
          <div className="mb-0 col-md-4 col-12 col-3 col-auto justify-content-center justify-content-md-start content-right">
            <a
              href="/demo8-shop.html"
              className="btn btn-lg bg-white text-dark font2"
            >
              Shop Now!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeBanner;

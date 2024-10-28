import React from 'react';

const Banners = () => {
  return (
    <div className="row">
      <div className="col-md-6 mb-2 mb-md-0">
        <div
          className="banner banner4 bg-image"
          style={{
            backgroundImage:
              'url(/assets/images/demoes/demo36/banners/banner4.jpg)',
          }}
        >
          <div className="banner-layer d-flex align-items-center flex-column flex-sm-row justify-content-end">
            <div className="content-left">
              <div className="coupon-sale-content">
                <h4 className="custom-coupon-sale-text text-white bg-dark d-block ext-transform-none mr-0 ls-0">
                  Exclusive COUPON
                </h4>
                <h5 className="custom-coupon-sale-text text-dark  ls-0 p-0">
                  <i className="ls-0">UP TO</i>
                  <b className="text-white bg-dark">$100</b>
                  <sub>OFF</sub>
                </h5>
              </div>
            </div>
            <div className="content-right">
              <h3 className="text-dark mb-0 text-sm-right text-left">
                DRONE &amp; CAMERAS
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div
          className="banner banner5 bg-image"
          style={{
            backgroundImage:
              'url(/assets/images/demoes/demo36/banners/banner5.jpg)',
          }}
        >
          <div className="banner-layer d-flex align-items-center flex-column flex-sm-row justify-content-end">
            <div className="content-left">
              <h3 className="text-white text-center mb-0">ELECTRONIC DEALS</h3>
            </div>

            <div className="content-right">
              <div className="coupon-sale-content pt-1">
                <h4 className="custom-coupon-sale-text text-dark bg-white d-block ext-transform-none mr-0 ls-0">
                  Exclusive COUPON
                </h4>
                <h5 className="custom-coupon-sale-text text-white mb-0 ls-0 p-0">
                  <i className="ls-0">UP TO</i>
                  <b className="text-white bg-secondary">$100</b>
                  <sub>OFF</sub>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;

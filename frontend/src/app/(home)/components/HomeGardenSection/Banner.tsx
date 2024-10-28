const Banner = () => {
  return (
    <div className="banner banner6" data-md-order="8">
      <figure>
        <img
          src="assets/images/demoes/demo36/banners/banner7.jpg"
          alt="banner"
        />
      </figure>
      <div className="banner-layer text-center content-left">
        <h4 className="heading-border">Amazing</h4>
        <h3 className="ls-0">Collection</h3>
        <hr className="mb-1 mt-0" />
        <h5>Check our discounts</h5>
      </div>
      <div className="banner-layer text-center content-right">
        <h5 className="coupon-sale-text">
          <span>STARTING AT</span>
          <b className="text-dark align-middle">
            <sup>$</sup>
            <em className="align-text-top">199</em>
            <sup>99</sup>
          </b>
        </h5>
        <h6>* limited time only</h6>
      </div>
    </div>
  );
};

export default Banner;

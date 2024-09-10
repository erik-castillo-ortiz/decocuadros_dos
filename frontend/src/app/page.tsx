import CategoriesSlider from "./components/CategoriesSlider";
import InfoBoxesSlider from "./components/InfoBoxesSlider";
import PromoSection from "./components/PromoSection";
import SliderComponent from "./components/SliderComponent";

export default function Home() {
  return (
    <>
        <div className="bg-gray pb-5">
          <div className="container pb-3">
            <SliderComponent />
            <CategoriesSlider />
            <PromoSection
              headingText="DOWNLOAD OUR APP DOWNLOAD OUR APP DOWNLOAD OUR APP"
              subText="EXCLUSIVE SALES, GET IT NOW!"
              promoText="DOWNLOAD OUR APP"
              buttonText="Get NOW!"
              buttonLink="/tienda" 
            />

          </div>
        </div>
      <div className="container">

        <InfoBoxesSlider/>
        <div
          className="banner-section "
          data-animation-name="fadeInUpShorter"
          data-animation-delay={200}
        >
          <div className="row">
            <div className="col-md-4 mb-2 mb-md-0">
              <div
                className="banner banner1 d-flex align-items-center justify-content-end"
                style={{
                  backgroundImage:
                    "url(/assets/images/demoes/demo36/banners/banner1.jpg)",
                }}
              >
                <div className="container d-flex align-items-center justify-content-end">
                  <div className="banner-layer text-right">
                    <h5 className="coupon-sale-text text-white font1">
                      <b className="text-white font1 ml-auto">
                        <i>UP TO</i>50%
                      </b>
                      <span className="mr-0 ls-0">OFF</span>
                    </h5>
                    <h6 className="font1 ls-10">FLASH SALES ON</h6>
                    <h4 className="text-white mb-0">NICE SHOES</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div
                className="banner banner2 d-flex align-items-center justify-content-end"
                style={{
                  backgroundImage:
                    "url(/assets/images/demoes/demo36/banners/banner2.jpg)",
                }}
              >
                <div className="container d-flex align-items-center justify-content-end">
                  <div className="banner-layer text-right pt-0">
                    <h4 className="text-dark mb-0 pl-3 pr-3 pt-1 pb-1">
                      TOP ELECTRONIC
                      <br />
                      FOR GIFTS
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="deal-products-section">
          <h2 className="section-title d-flex align-items-center text-transform-none">
            <i className="icon-percent-shape" />
            Special Offers
          </h2>
          <div
            className="row "
            data-animation-name="fadeInUpShorter"
            data-animation-delay={200}
          >
            <div className="col-md-4 mb-2 mb-md-0">
              <div className="product-default deal-product">
                <figure>
                  <a href="/">
                    <img
                      src="/assets/images/demoes/demo36/products/product-1.jpg"
                      width={450}
                      height={450}
                      alt="product"
                    />
                  </a>
                  <div className="product-countdown-container custom-product-countdown">
                    <span className="product-countdown-title">
                      offer ends in:
                    </span>
                    <div
                      className="product-countdown countdown-compact"
                      data-until="2021, 10, 5"
                      data-compact="true"
                    ></div>
                    {/* End .product-countdown */}
                  </div>
                  {/* End .product-countdown-container */}
                </figure>
                <div className="product-details">
                  <div className="category-list">
                    <a href="/" className="product-category">
                      Category
                    </a>
                  </div>
                  <h3 className="product-title">
                    <a href="/">Drone Pro</a>
                  </h3>
                  <div className="ratings-container">
                    <div className="product-ratings">
                      <span className="ratings" style={{ width: "80%" }} />
                      {/* End .ratings */}
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    {/* End .product-ratings */}
                  </div>
                  {/* End .product-container */}
                  <div className="price-box">
                    <del className="old-price">$59.00</del>
                    <span className="product-price">$49.00</span>
                  </div>
                  {/* End .price-box */}
                  <div className="product-action">
                    <a
                      href="wishlist.html"
                      className="btn-icon-wish"
                      title="wishlist"
                    >
                      <i className="icon-heart" />
                    </a>
                    <a
                      href="#"
                      className="btn btn-primary btn-icon btn-add-cart product-type-simple"
                    >
                      <i className="icon-shopping-cart" />
                      <span>ADD TO CART</span>
                    </a>
                    <a
                      href="ajax/product-quick-view.html"
                      className="btn-quickview"
                      title="Quick View"
                    >
                      <i className="fas fa-external-link-alt" />
                    </a>
                  </div>
                </div>
                {/* End .product-details */}
              </div>
            </div>
            <div className="col-md-8">
              <div className="products-with-divide">
                <div className="row row-joined">
                  <div className="col-xl-3 col-sm-4 col-6">
                    <div className="product-default inner-quickview inner-icon">
                      <figure>
                        <a href="/">
                          <img
                            src="/assets/images/demoes/demo36/products/product-2.jpg"
                            width={239}
                            height={239}
                            alt="product"
                          />
                        </a>
                        <div className="label-group">
                          <div className="product-label label-hot">HOT</div>
                          <div className="product-label label-sale">-20%</div>
                        </div>
                        <div className="btn-icon-group">
                          <a
                            href="#"
                            className="btn-icon btn-add-cart product-type-simple"
                          >
                            <i className="icon-shopping-cart" />
                          </a>
                        </div>
                        <a
                          href="ajax/product-quick-view.html"
                          className="btn-quickview"
                          title="Quick View"
                        >
                          Quick View
                        </a>
                      </figure>
                      <div className="product-details">
                        <div className="category-wrap">
                          <div className="category-list">
                            <a href="/" className="product-category">
                              category
                            </a>
                          </div>
                          <a href="/" className="btn-icon-wish">
                            <i className="icon-heart" />
                          </a>
                        </div>
                        <h3 className="product-title">
                          <a href="/">PT Speaker</a>
                        </h3>
                        <div className="ratings-container">
                          <div className="product-ratings">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            />
                            {/* End .ratings */}
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          {/* End .product-ratings */}
                        </div>
                        {/* End .product-container */}
                        <div className="price-box">
                          <span className="old-price">$29.00</span>
                          <span className="product-price">$19.00</span>
                        </div>
                        {/* End .price-box */}
                      </div>
                      {/* End .product-details */}
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-4 col-6">
                    <div className="product-default inner-quickview inner-icon">
                      <figure>
                        <a href="demo36-product.html">
                          <img
                            src="/assets/images/demoes/demo36/products/product-3.jpg"
                            width={239}
                            height={239}
                            alt="product"
                          />
                        </a>
                        <div className="btn-icon-group">
                          <a
                            href="#"
                            className="btn-icon btn-add-cart product-type-simple"
                          >
                            <i className="icon-shopping-cart" />
                          </a>
                        </div>
                        <a
                          href="ajax/product-quick-view.html"
                          className="btn-quickview"
                          title="Quick View"
                        >
                          Quick View
                        </a>
                      </figure>
                      <div className="product-details">
                        <div className="category-wrap">
                          <div className="category-list">
                            <a
                              href="demo36-shop.html"
                              className="product-category"
                            >
                              category
                            </a>
                          </div>
                          <a href="wishlist.html" className="btn-icon-wish">
                            <i className="icon-heart" />
                          </a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">Beats Solo HD Drenched</a>
                        </h3>
                        <div className="ratings-container">
                          <div className="product-ratings">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            />
                            {/* End .ratings */}
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          {/* End .product-ratings */}
                        </div>
                        {/* End .product-container */}
                        <div className="price-box">
                          <span className="old-price">$29.00</span>
                          <span className="product-price">$19.00</span>
                        </div>
                        {/* End .price-box */}
                      </div>
                      {/* End .product-details */}
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-4 col-6">
                    <div className="product-default inner-quickview inner-icon">
                      <figure>
                        <a href="demo36-product.html">
                          <img
                            src="/assets/images/demoes/demo36/products/product-4.jpg"
                            width={239}
                            height={239}
                            alt="product"
                          />
                        </a>
                        <div className="btn-icon-group">
                          <a
                            href="#"
                            className="btn-icon btn-add-cart product-type-simple"
                          >
                            <i className="icon-shopping-cart" />
                          </a>
                        </div>
                        <a
                          href="ajax/product-quick-view.html"
                          className="btn-quickview"
                          title="Quick View"
                        >
                          Quick View
                        </a>
                      </figure>
                      <div className="product-details">
                        <div className="category-wrap">
                          <div className="category-list">
                            <a
                              href="demo36-shop.html"
                              className="product-category"
                            >
                              category
                            </a>
                          </div>
                          <a href="wishlist.html" className="btn-icon-wish">
                            <i className="icon-heart" />
                          </a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">Palm Print Jacket</a>
                        </h3>
                        <div className="ratings-container">
                          <div className="product-ratings">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            />
                            {/* End .ratings */}
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          {/* End .product-ratings */}
                        </div>
                        {/* End .product-container */}
                        <div className="price-box">
                          <span className="old-price">$29.00</span>
                          <span className="product-price">$19.00</span>
                        </div>
                        {/* End .price-box */}
                      </div>
                      {/* End .product-details */}
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-4 col-6">
                    <div className="product-default inner-quickview inner-icon">
                      <figure>
                        <a href="demo36-product.html">
                          <img
                            src="/assets/images/demoes/demo36/products/product-5.jpg"
                            width={239}
                            height={239}
                            alt="product"
                          />
                        </a>
                        <div className="btn-icon-group">
                          <a
                            href="#"
                            className="btn-icon btn-add-cart product-type-simple"
                          >
                            <i className="icon-shopping-cart" />
                          </a>
                        </div>
                        <a
                          href="ajax/product-quick-view.html"
                          className="btn-quickview"
                          title="Quick View"
                        >
                          Quick View
                        </a>
                      </figure>
                      <div className="product-details">
                        <div className="category-wrap">
                          <div className="category-list">
                            <a
                              href="demo36-shop.html"
                              className="product-category"
                            >
                              category
                            </a>
                          </div>
                          <a href="wishlist.html" className="btn-icon-wish">
                            <i className="icon-heart" />
                          </a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">Camera</a>
                        </h3>
                        <div className="ratings-container">
                          <div className="product-ratings">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            />
                            {/* End .ratings */}
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          {/* End .product-ratings */}
                        </div>
                        {/* End .product-container */}
                        <div className="price-box">
                          <span className="old-price">$29.00</span>
                          <span className="product-price">$19.00</span>
                        </div>
                        {/* End .price-box */}
                      </div>
                      {/* End .product-details */}
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-4 col-6">
                    <div className="product-default inner-quickview inner-icon">
                      <figure>
                        <a href="demo36-product.html">
                          <img
                            src="/assets/images/demoes/demo36/products/product-6.jpg"
                            width={239}
                            height={239}
                            alt="product"
                          />
                        </a>
                        <div className="btn-icon-group">
                          <a
                            href="#"
                            className="btn-icon btn-add-cart product-type-simple"
                          >
                            <i className="icon-shopping-cart" />
                          </a>
                        </div>
                        <a
                          href="ajax/product-quick-view.html"
                          className="btn-quickview"
                          title="Quick View"
                        >
                          Quick View
                        </a>
                      </figure>
                      <div className="product-details">
                        <div className="category-wrap">
                          <div className="category-list">
                            <a
                              href="demo36-shop.html"
                              className="product-category"
                            >
                              category
                            </a>
                          </div>
                          <a href="wishlist.html" className="btn-icon-wish">
                            <i className="icon-heart" />
                          </a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">Red Football</a>
                        </h3>
                        <div className="ratings-container">
                          <div className="product-ratings">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            />
                            {/* End .ratings */}
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          {/* End .product-ratings */}
                        </div>
                        {/* End .product-container */}
                        <div className="price-box">
                          <span className="old-price">$29.00</span>
                          <span className="product-price">$19.00</span>
                        </div>
                        {/* End .price-box */}
                      </div>
                      {/* End .product-details */}
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-4 col-6">
                    <div className="product-default inner-quickview inner-icon">
                      <figure>
                        <a href="demo36-product.html">
                          <img
                            src="/assets/images/demoes/demo36/products/product-7.jpg"
                            width={239}
                            height={239}
                            alt="product"
                          />
                        </a>
                        <div className="btn-icon-group">
                          <a
                            href="#"
                            className="btn-icon btn-add-cart product-type-simple"
                          >
                            <i className="icon-shopping-cart" />
                          </a>
                        </div>
                        <a
                          href="ajax/product-quick-view.html"
                          className="btn-quickview"
                          title="Quick View"
                        >
                          Quick View
                        </a>
                      </figure>
                      <div className="product-details">
                        <div className="category-wrap">
                          <div className="category-list">
                            <a
                              href="demo36-shop.html"
                              className="product-category"
                            >
                              category
                            </a>
                          </div>
                          <a href="wishlist.html" className="btn-icon-wish">
                            <i className="icon-heart" />
                          </a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">Soft Hat</a>
                        </h3>
                        <div className="ratings-container">
                          <div className="product-ratings">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            />
                            {/* End .ratings */}
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          {/* End .product-ratings */}
                        </div>
                        {/* End .product-container */}
                        <div className="price-box">
                          <span className="old-price">$29.00</span>
                          <span className="product-price">$19.00</span>
                        </div>
                        {/* End .price-box */}
                      </div>
                      {/* End .product-details */}
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-4 col-6">
                    <div className="product-default inner-quickview inner-icon">
                      <figure>
                        <a href="demo36-product.html">
                          <img
                            src="/assets/images/demoes/demo36/products/product-8.jpg"
                            width={239}
                            height={239}
                            alt="product"
                          />
                        </a>
                        <div className="btn-icon-group">
                          <a
                            href="#"
                            className="btn-icon btn-add-cart product-type-simple"
                          >
                            <i className="icon-shopping-cart" />
                          </a>
                        </div>
                        <a
                          href="ajax/product-quick-view.html"
                          className="btn-quickview"
                          title="Quick View"
                        >
                          Quick View
                        </a>
                      </figure>
                      <div className="product-details">
                        <div className="category-wrap">
                          <div className="category-list">
                            <a
                              href="demo36-shop.html"
                              className="product-category"
                            >
                              category
                            </a>
                          </div>
                          <a href="wishlist.html" className="btn-icon-wish">
                            <i className="icon-heart" />
                          </a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">PT Bag</a>
                        </h3>
                        <div className="ratings-container">
                          <div className="product-ratings">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            />
                            {/* End .ratings */}
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          {/* End .product-ratings */}
                        </div>
                        {/* End .product-container */}
                        <div className="price-box">
                          <span className="old-price">$29.00</span>
                          <span className="product-price">$19.00</span>
                        </div>
                        {/* End .price-box */}
                      </div>
                      {/* End .product-details */}
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-4 col-6">
                    <div className="product-default inner-quickview inner-icon">
                      <figure>
                        <a href="demo36-product.html">
                          <img
                            src="/assets/images/demoes/demo36/products/product-9.jpg"
                            width={239}
                            height={239}
                            alt="product"
                          />
                        </a>
                        <div className="btn-icon-group">
                          <a
                            href="#"
                            className="btn-icon btn-add-cart product-type-simple"
                          >
                            <i className="icon-shopping-cart" />
                          </a>
                        </div>
                        <a
                          href="ajax/product-quick-view.html"
                          className="btn-quickview"
                          title="Quick View"
                        >
                          Quick View
                        </a>
                      </figure>
                      <div className="product-details">
                        <div className="category-wrap">
                          <div className="category-list">
                            <a
                              href="demo36-shop.html"
                              className="product-category"
                            >
                              category
                            </a>
                          </div>
                          <a href="wishlist.html" className="btn-icon-wish">
                            <i className="icon-heart" />
                          </a>
                        </div>
                        <h3 className="product-title">
                          <a href="product.html">GM Camaro SS Original</a>
                        </h3>
                        <div className="ratings-container">
                          <div className="product-ratings">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            />
                            {/* End .ratings */}
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          {/* End .product-ratings */}
                        </div>
                        {/* End .product-container */}
                        <div className="price-box">
                          <span className="old-price">$29.00</span>
                          <span className="product-price">$19.00</span>
                        </div>
                        {/* End .price-box */}
                      </div>
                      {/* End .product-details */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="category-filter-section bg-gray "
        data-animation-name="fadeInUpShorter"
        data-animation-delay={200}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3 pr-lg-3 pr-sm-0 col-sm-6 order-1 order-sm-0">
              <div className="shop-list h-100">
                <h4>Sort By</h4>
                <ul
                  className="nav nav-tabs flex-sm-column border-0"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="filter-1-tab"
                      data-toggle="tab"
                      href="#filter-1"
                      role="tab"
                      aria-controls="filter-1"
                      aria-selected="true"
                    >
                      Kids Fashion
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="filter-2-tab"
                      data-toggle="tab"
                      href="#filter-2"
                      role="tab"
                      aria-controls="filter-2"
                      aria-selected="true"
                    >
                      Casual Shoes
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="filter-3-tab"
                      data-toggle="tab"
                      href="#filter-3"
                      role="tab"
                      aria-controls="filter-3"
                      aria-selected="false"
                    >
                      Spring &amp; Autumn
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="filter-4-tab"
                      data-toggle="tab"
                      href="#filter-4"
                      role="tab"
                      aria-controls="filter-4"
                      aria-selected="false"
                    >
                      Man
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="filter-5-tab"
                      data-toggle="tab"
                      href="#filter-5"
                      role="tab"
                      aria-controls="filter-5"
                      aria-selected="false"
                    >
                      Accessories
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="filter-6-tab"
                      data-toggle="tab"
                      href="#filter-6"
                      role="tab"
                      aria-controls="filter-6"
                      aria-selected="false"
                    >
                      Pants &amp; Denim
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="filter-7-tab"
                      data-toggle="tab"
                      href="#filter-7"
                      role="tab"
                      aria-controls="filter-7"
                      aria-selected="false"
                    >
                      Tees, Knits &amp; Polos
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="filter-8-tab"
                      data-toggle="tab"
                      href="#filter-8"
                      role="tab"
                      aria-controls="filter-8"
                      aria-selected="false"
                    >
                      Watch Fashion
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="filter-9-tab"
                      data-toggle="tab"
                      href="#filter-9"
                      role="tab"
                      aria-controls="filter-9"
                      aria-selected="false"
                    >
                      Woman
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="filter-10-tab"
                      data-toggle="tab"
                      href="#filter-10"
                      role="tab"
                      aria-controls="filter-10"
                      aria-selected="false"
                    >
                      Accessories
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="filter-11-tab"
                      data-toggle="tab"
                      href="#filter-11"
                      role="tab"
                      aria-controls="filter-11"
                      aria-selected="false"
                    >
                      Dresses &amp; Skirts
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="filter-12-tab"
                      data-toggle="tab"
                      href="#filter-12"
                      role="tab"
                      aria-controls="filter-12"
                      aria-selected="false"
                    >
                      Shoes &amp; Boots
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="filter-13-tab"
                      data-toggle="tab"
                      href="#filter-13"
                      role="tab"
                      aria-controls="filter-13"
                      aria-selected="false"
                    >
                      Top &amp; Blouses
                    </a>
                  </li>
                </ul>
                <a className="view-all" href="demo36-shop.html">
                  View All
                  <i className="fas fa-long-arrow-alt-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 pl-lg-3 pl-sm-0 order-0">
              <div
                className="banner banner3"
                style={{
                  backgroundImage:
                    "url(/assets/images/demoes/demo36/banners/banner3.jpg)",
                }}
              >
                <div className="container d-flex justify-content-center">
                  <div className="banner-layer text-center">
                    <h4 className="font1">
                      <i className="font2">
                        Find the Boundaries. Push Through!
                      </i>
                    </h4>
                    <h3 className="text-dark mb-0">MEGA SALE</h3>
                    <h2 className="text-dark">70% OFF</h2>
                    <h5 className="coupon-sale-text justify-content-end">
                      <span className="text-dark">STARTING AT</span>
                      <b className="text-white align-middle">
                        <sup>$</sup>
                        <em className="align-text-top">199</em>
                        <sup>99</sup>
                      </b>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 tab-content mt-2 mt-lg-0 order-2 order-sm-0">
              <div
                className="tab-pane fade show active h-100"
                id="filter-1"
                role="tabpanel"
                aria-labelledby="filter-1-tab"
              >
                <div className="product-content products-with-divide">
                  <div className="row row-joined h-100">
                    <div className="col-sm-4 col-6">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/product-10.jpg"
                              width={239}
                              height={239}
                              alt="product"
                            />
                          </a>
                          <div className="btn-icon-group">
                            <a
                              href="#"
                              className="btn-icon btn-add-cart product-type-simple"
                            >
                              <i className="icon-shopping-cart" />
                            </a>
                          </div>
                          <a
                            href="ajax/product-quick-view.html"
                            className="btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </figure>
                        <div className="product-details">
                          <div className="category-wrap">
                            <div className="category-list">
                              <a
                                href="demo36-shop.html"
                                className="product-category"
                              >
                                category
                              </a>
                            </div>
                            <a href="wishlist.html" className="btn-icon-wish">
                              <i className="icon-heart" />
                            </a>
                          </div>
                          <h3 className="product-title">
                            <a href="demo36-product.html">Black Bag</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="old-price">$29.00</span>
                            <span className="product-price">$19.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                    <div className="col-sm-4 col-6">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/product-11.jpg"
                              width={239}
                              height={239}
                              alt="product"
                            />
                          </a>
                          <div className="btn-icon-group">
                            <a
                              href="#"
                              className="btn-icon btn-add-cart product-type-simple"
                            >
                              <i className="icon-shopping-cart" />
                            </a>
                          </div>
                          <a
                            href="ajax/product-quick-view.html"
                            className="btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </figure>
                        <div className="product-details">
                          <div className="category-wrap">
                            <div className="category-list">
                              <a
                                href="demo36-shop.html"
                                className="product-category"
                              >
                                category
                              </a>
                            </div>
                            <a href="wishlist.html" className="btn-icon-wish">
                              <i className="icon-heart" />
                            </a>
                          </div>
                          <h3 className="product-title">
                            <a href="product.html">Brown Belt</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="old-price">$29.00</span>
                            <span className="product-price">$19.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                    <div className="col-sm-4 col-6">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/product-4.jpg"
                              width={239}
                              height={239}
                              alt="product"
                            />
                          </a>
                          <div className="btn-icon-group">
                            <a
                              href="#"
                              className="btn-icon btn-add-cart product-type-simple"
                            >
                              <i className="icon-shopping-cart" />
                            </a>
                          </div>
                          <a
                            href="ajax/product-quick-view.html"
                            className="btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </figure>
                        <div className="product-details">
                          <div className="category-wrap">
                            <div className="category-list">
                              <a
                                href="demo36-shop.html"
                                className="product-category"
                              >
                                category
                              </a>
                            </div>
                            <a href="wishlist.html" className="btn-icon-wish">
                              <i className="icon-heart" />
                            </a>
                          </div>
                          <h3 className="product-title">
                            <a href="product.html">Palm Print Jacket</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="old-price">$29.00</span>
                            <span className="product-price">$19.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                    <div className="col-sm-4 col-6">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/product-8.jpg"
                              width={239}
                              height={239}
                              alt="product"
                            />
                          </a>
                          <div className="btn-icon-group">
                            <a
                              href="#"
                              className="btn-icon btn-add-cart product-type-simple"
                            >
                              <i className="icon-shopping-cart" />
                            </a>
                          </div>
                          <a
                            href="ajax/product-quick-view.html"
                            className="btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </figure>
                        <div className="product-details">
                          <div className="category-wrap">
                            <div className="category-list">
                              <a
                                href="demo36-shop.html"
                                className="product-category"
                              >
                                category
                              </a>
                            </div>
                            <a href="wishlist.html" className="btn-icon-wish">
                              <i className="icon-heart" />
                            </a>
                          </div>
                          <h3 className="product-title">
                            <a href="product.html">PT Bag</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="old-price">$29.00</span>
                            <span className="product-price">$19.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                    <div className="col-sm-4 col-6">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/product-6.jpg"
                              width={239}
                              height={239}
                              alt="product"
                            />
                          </a>
                          <div className="btn-icon-group">
                            <a
                              href="#"
                              className="btn-icon btn-add-cart product-type-simple"
                            >
                              <i className="icon-shopping-cart" />
                            </a>
                          </div>
                          <a
                            href="ajax/product-quick-view.html"
                            className="btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </figure>
                        <div className="product-details">
                          <div className="category-wrap">
                            <div className="category-list">
                              <a
                                href="demo36-shop.html"
                                className="product-category"
                              >
                                category
                              </a>
                            </div>
                            <a href="wishlist.html" className="btn-icon-wish">
                              <i className="icon-heart" />
                            </a>
                          </div>
                          <h3 className="product-title">
                            <a href="product.html">Red Football</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="old-price">$29.00</span>
                            <span className="product-price">$19.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                    <div className="col-sm-4 col-6">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/product-7.jpg"
                              width={239}
                              height={239}
                              alt="product"
                            />
                          </a>
                          <div className="btn-icon-group">
                            <a
                              href="#"
                              className="btn-icon btn-add-cart product-type-simple"
                            >
                              <i className="icon-shopping-cart" />
                            </a>
                          </div>
                          <a
                            href="ajax/product-quick-view.html"
                            className="btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </figure>
                        <div className="product-details">
                          <div className="category-wrap">
                            <div className="category-list">
                              <a
                                href="demo36-shop.html"
                                className="product-category"
                              >
                                category
                              </a>
                            </div>
                            <a href="wishlist.html" className="btn-icon-wish">
                              <i className="icon-heart" />
                            </a>
                          </div>
                          <h3 className="product-title">
                            <a href="product.html">Soft Hat</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="old-price">$29.00</span>
                            <span className="product-price">$19.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="filter-2" role="tabpanel">
                <div className="product-content products-with-divide">
                  <div className="row row-joined">
                    <div className=" col-md-4 col-6">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/product-2.jpg"
                              width={239}
                              height={239}
                              alt="product"
                            />
                          </a>
                          <div className="label-group">
                            <div className="product-label label-hot">HOT</div>
                            <div className="product-label label-sale">-20%</div>
                          </div>
                          <div className="btn-icon-group">
                            <a
                              href="#"
                              className="btn-icon btn-add-cart product-type-simple"
                            >
                              <i className="icon-shopping-cart" />
                            </a>
                          </div>
                          <a
                            href="ajax/product-quick-view.html"
                            className="btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </figure>
                        <div className="product-details">
                          <div className="category-wrap">
                            <div className="category-list">
                              <a
                                href="demo36-shop.html"
                                className="product-category"
                              >
                                category
                              </a>
                            </div>
                            <a href="wishlist.html" className="btn-icon-wish">
                              <i className="icon-heart" />
                            </a>
                          </div>
                          <h3 className="product-title">
                            <a href="demo36-product.html">PT Speaker</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="old-price">$29.00</span>
                            <span className="product-price">$19.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/product-3.jpg"
                              width={239}
                              height={239}
                              alt="product"
                            />
                          </a>
                          <div className="btn-icon-group">
                            <a
                              href="#"
                              className="btn-icon btn-add-cart product-type-simple"
                            >
                              <i className="icon-shopping-cart" />
                            </a>
                          </div>
                          <a
                            href="ajax/product-quick-view.html"
                            className="btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </figure>
                        <div className="product-details">
                          <div className="category-wrap">
                            <div className="category-list">
                              <a
                                href="demo36-shop.html"
                                className="product-category"
                              >
                                category
                              </a>
                            </div>
                            <a href="wishlist.html" className="btn-icon-wish">
                              <i className="icon-heart" />
                            </a>
                          </div>
                          <h3 className="product-title">
                            <a href="product.html">Beats Solo HD Drenched</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="old-price">$29.00</span>
                            <span className="product-price">$19.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/product-4.jpg"
                              width={239}
                              height={239}
                              alt="product"
                            />
                          </a>
                          <div className="btn-icon-group">
                            <a
                              href="#"
                              className="btn-icon btn-add-cart product-type-simple"
                            >
                              <i className="icon-shopping-cart" />
                            </a>
                          </div>
                          <a
                            href="ajax/product-quick-view.html"
                            className="btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </figure>
                        <div className="product-details">
                          <div className="category-wrap">
                            <div className="category-list">
                              <a
                                href="demo36-shop.html"
                                className="product-category"
                              >
                                category
                              </a>
                            </div>
                            <a href="wishlist.html" className="btn-icon-wish">
                              <i className="icon-heart" />
                            </a>
                          </div>
                          <h3 className="product-title">
                            <a href="product.html">Palm Print Jacket</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="old-price">$29.00</span>
                            <span className="product-price">$19.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="filter-3" role="tabpanel">
                <div className="product-content products-with-divide">
                  <div className="row row-joined">
                    <div className=" col-md-4 col-6">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/product-2.jpg"
                              width={239}
                              height={239}
                              alt="product"
                            />
                          </a>
                          <div className="label-group">
                            <div className="product-label label-hot">HOT</div>
                            <div className="product-label label-sale">-20%</div>
                          </div>
                          <div className="btn-icon-group">
                            <a
                              href="#"
                              className="btn-icon btn-add-cart product-type-simple"
                            >
                              <i className="icon-shopping-cart" />
                            </a>
                          </div>
                          <a
                            href="ajax/product-quick-view.html"
                            className="btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </figure>
                        <div className="product-details">
                          <div className="category-wrap">
                            <div className="category-list">
                              <a
                                href="demo36-shop.html"
                                className="product-category"
                              >
                                category
                              </a>
                            </div>
                            <a href="wishlist.html" className="btn-icon-wish">
                              <i className="icon-heart" />
                            </a>
                          </div>
                          <h3 className="product-title">
                            <a href="demo36-product.html">PT Speaker</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="old-price">$29.00</span>
                            <span className="product-price">$19.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/product-3.jpg"
                              width={239}
                              height={239}
                              alt="product"
                            />
                          </a>
                          <div className="btn-icon-group">
                            <a
                              href="#"
                              className="btn-icon btn-add-cart product-type-simple"
                            >
                              <i className="icon-shopping-cart" />
                            </a>
                          </div>
                          <a
                            href="ajax/product-quick-view.html"
                            className="btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </figure>
                        <div className="product-details">
                          <div className="category-wrap">
                            <div className="category-list">
                              <a
                                href="demo36-shop.html"
                                className="product-category"
                              >
                                category
                              </a>
                            </div>
                            <a href="wishlist.html" className="btn-icon-wish">
                              <i className="icon-heart" />
                            </a>
                          </div>
                          <h3 className="product-title">
                            <a href="product.html">Beats Solo HD Drenched</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="old-price">$29.00</span>
                            <span className="product-price">$19.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/product-4.jpg"
                              width={239}
                              height={239}
                              alt="product"
                            />
                          </a>
                          <div className="btn-icon-group">
                            <a
                              href="#"
                              className="btn-icon btn-add-cart product-type-simple"
                            >
                              <i className="icon-shopping-cart" />
                            </a>
                          </div>
                          <a
                            href="ajax/product-quick-view.html"
                            className="btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </figure>
                        <div className="product-details">
                          <div className="category-wrap">
                            <div className="category-list">
                              <a
                                href="demo36-shop.html"
                                className="product-category"
                              >
                                category
                              </a>
                            </div>
                            <a href="wishlist.html" className="btn-icon-wish">
                              <i className="icon-heart" />
                            </a>
                          </div>
                          <h3 className="product-title">
                            <a href="product.html">Palm Print Jacket</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="old-price">$29.00</span>
                            <span className="product-price">$19.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="filter-4" role="tabpanel">
                <div className="product-content products-with-divide">
                  <div className="row row-joined">
                    <div className=" col-md-4 col-6">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/product-2.jpg"
                              width={239}
                              height={239}
                              alt="product"
                            />
                          </a>
                          <div className="label-group">
                            <div className="product-label label-hot">HOT</div>
                            <div className="product-label label-sale">-20%</div>
                          </div>
                          <div className="btn-icon-group">
                            <a
                              href="#"
                              className="btn-icon btn-add-cart product-type-simple"
                            >
                              <i className="icon-shopping-cart" />
                            </a>
                          </div>
                          <a
                            href="ajax/product-quick-view.html"
                            className="btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </figure>
                        <div className="product-details">
                          <div className="category-wrap">
                            <div className="category-list">
                              <a
                                href="demo36-shop.html"
                                className="product-category"
                              >
                                category
                              </a>
                            </div>
                            <a href="wishlist.html" className="btn-icon-wish">
                              <i className="icon-heart" />
                            </a>
                          </div>
                          <h3 className="product-title">
                            <a href="demo36-product.html">PT Speaker</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="old-price">$29.00</span>
                            <span className="product-price">$19.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/product-3.jpg"
                              width={239}
                              height={239}
                              alt="product"
                            />
                          </a>
                          <div className="btn-icon-group">
                            <a
                              href="#"
                              className="btn-icon btn-add-cart product-type-simple"
                            >
                              <i className="icon-shopping-cart" />
                            </a>
                          </div>
                          <a
                            href="ajax/product-quick-view.html"
                            className="btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </figure>
                        <div className="product-details">
                          <div className="category-wrap">
                            <div className="category-list">
                              <a
                                href="demo36-shop.html"
                                className="product-category"
                              >
                                category
                              </a>
                            </div>
                            <a href="wishlist.html" className="btn-icon-wish">
                              <i className="icon-heart" />
                            </a>
                          </div>
                          <h3 className="product-title">
                            <a href="product.html">Beats Solo HD Drenched</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="old-price">$29.00</span>
                            <span className="product-price">$19.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/product-4.jpg"
                              width={239}
                              height={239}
                              alt="product"
                            />
                          </a>
                          <div className="btn-icon-group">
                            <a
                              href="#"
                              className="btn-icon btn-add-cart product-type-simple"
                            >
                              <i className="icon-shopping-cart" />
                            </a>
                          </div>
                          <a
                            href="ajax/product-quick-view.html"
                            className="btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </figure>
                        <div className="product-details">
                          <div className="category-wrap">
                            <div className="category-list">
                              <a
                                href="demo36-shop.html"
                                className="product-category"
                              >
                                category
                              </a>
                            </div>
                            <a href="wishlist.html" className="btn-icon-wish">
                              <i className="icon-heart" />
                            </a>
                          </div>
                          <h3 className="product-title">
                            <a href="product.html">Palm Print Jacket</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="old-price">$29.00</span>
                            <span className="product-price">$19.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="filter-5" role="tabpanel">
                <div className="product-content products-with-divide">
                  <div className="row row-joined">
                    <div className=" col-md-4 col-6">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/product-2.jpg"
                              width={239}
                              height={239}
                              alt="product"
                            />
                          </a>
                          <div className="label-group">
                            <div className="product-label label-hot">HOT</div>
                            <div className="product-label label-sale">-20%</div>
                          </div>
                          <div className="btn-icon-group">
                            <a
                              href="#"
                              className="btn-icon btn-add-cart product-type-simple"
                            >
                              <i className="icon-shopping-cart" />
                            </a>
                          </div>
                          <a
                            href="ajax/product-quick-view.html"
                            className="btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </figure>
                        <div className="product-details">
                          <div className="category-wrap">
                            <div className="category-list">
                              <a
                                href="demo36-shop.html"
                                className="product-category"
                              >
                                category
                              </a>
                            </div>
                            <a href="wishlist.html" className="btn-icon-wish">
                              <i className="icon-heart" />
                            </a>
                          </div>
                          <h3 className="product-title">
                            <a href="demo36-product.html">PT Speaker</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="old-price">$29.00</span>
                            <span className="product-price">$19.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/product-3.jpg"
                              width={239}
                              height={239}
                              alt="product"
                            />
                          </a>
                          <div className="btn-icon-group">
                            <a
                              href="#"
                              className="btn-icon btn-add-cart product-type-simple"
                            >
                              <i className="icon-shopping-cart" />
                            </a>
                          </div>
                          <a
                            href="ajax/product-quick-view.html"
                            className="btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </figure>
                        <div className="product-details">
                          <div className="category-wrap">
                            <div className="category-list">
                              <a
                                href="demo36-shop.html"
                                className="product-category"
                              >
                                category
                              </a>
                            </div>
                            <a href="wishlist.html" className="btn-icon-wish">
                              <i className="icon-heart" />
                            </a>
                          </div>
                          <h3 className="product-title">
                            <a href="product.html">Beats Solo HD Drenched</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="old-price">$29.00</span>
                            <span className="product-price">$19.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/product-4.jpg"
                              width={239}
                              height={239}
                              alt="product"
                            />
                          </a>
                          <div className="btn-icon-group">
                            <a
                              href="#"
                              className="btn-icon btn-add-cart product-type-simple"
                            >
                              <i className="icon-shopping-cart" />
                            </a>
                          </div>
                          <a
                            href="ajax/product-quick-view.html"
                            className="btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </figure>
                        <div className="product-details">
                          <div className="category-wrap">
                            <div className="category-list">
                              <a
                                href="demo36-shop.html"
                                className="product-category"
                              >
                                category
                              </a>
                            </div>
                            <a href="wishlist.html" className="btn-icon-wish">
                              <i className="icon-heart" />
                            </a>
                          </div>
                          <h3 className="product-title">
                            <a href="product.html">Palm Print Jacket</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="old-price">$29.00</span>
                            <span className="product-price">$19.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="filter-6" role="tabpanel">
                <div className="product-content products-with-divide">
                  <div className="row row-joined">
                    <div className=" col-md-4 col-6">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/product-2.jpg"
                              width={239}
                              height={239}
                              alt="product"
                            />
                          </a>
                          <div className="label-group">
                            <div className="product-label label-hot">HOT</div>
                            <div className="product-label label-sale">-20%</div>
                          </div>
                          <div className="btn-icon-group">
                            <a
                              href="#"
                              className="btn-icon btn-add-cart product-type-simple"
                            >
                              <i className="icon-shopping-cart" />
                            </a>
                          </div>
                          <a
                            href="ajax/product-quick-view.html"
                            className="btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </figure>
                        <div className="product-details">
                          <div className="category-wrap">
                            <div className="category-list">
                              <a
                                href="demo36-shop.html"
                                className="product-category"
                              >
                                category
                              </a>
                            </div>
                            <a href="wishlist.html" className="btn-icon-wish">
                              <i className="icon-heart" />
                            </a>
                          </div>
                          <h3 className="product-title">
                            <a href="demo36-product.html">PT Speaker</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="old-price">$29.00</span>
                            <span className="product-price">$19.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/product-3.jpg"
                              width={239}
                              height={239}
                              alt="product"
                            />
                          </a>
                          <div className="btn-icon-group">
                            <a
                              href="#"
                              className="btn-icon btn-add-cart product-type-simple"
                            >
                              <i className="icon-shopping-cart" />
                            </a>
                          </div>
                          <a
                            href="ajax/product-quick-view.html"
                            className="btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </figure>
                        <div className="product-details">
                          <div className="category-wrap">
                            <div className="category-list">
                              <a
                                href="demo36-shop.html"
                                className="product-category"
                              >
                                category
                              </a>
                            </div>
                            <a href="wishlist.html" className="btn-icon-wish">
                              <i className="icon-heart" />
                            </a>
                          </div>
                          <h3 className="product-title">
                            <a href="product.html">Beats Solo HD Drenched</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="old-price">$29.00</span>
                            <span className="product-price">$19.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/product-4.jpg"
                              width={239}
                              height={239}
                              alt="product"
                            />
                          </a>
                          <div className="btn-icon-group">
                            <a
                              href="#"
                              className="btn-icon btn-add-cart product-type-simple"
                            >
                              <i className="icon-shopping-cart" />
                            </a>
                          </div>
                          <a
                            href="ajax/product-quick-view.html"
                            className="btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </figure>
                        <div className="product-details">
                          <div className="category-wrap">
                            <div className="category-list">
                              <a
                                href="demo36-shop.html"
                                className="product-category"
                              >
                                category
                              </a>
                            </div>
                            <a href="wishlist.html" className="btn-icon-wish">
                              <i className="icon-heart" />
                            </a>
                          </div>
                          <h3 className="product-title">
                            <a href="product.html">Palm Print Jacket</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="old-price">$29.00</span>
                            <span className="product-price">$19.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="filter-7" role="tabpanel">
                <div className="product-content products-with-divide">
                  <div className="row row-joined">
                    <div className=" col-md-4 col-6">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/product-2.jpg"
                              width={239}
                              height={239}
                              alt="product"
                            />
                          </a>
                          <div className="label-group">
                            <div className="product-label label-hot">HOT</div>
                            <div className="product-label label-sale">-20%</div>
                          </div>
                          <div className="btn-icon-group">
                            <a
                              href="#"
                              className="btn-icon btn-add-cart product-type-simple"
                            >
                              <i className="icon-shopping-cart" />
                            </a>
                          </div>
                          <a
                            href="ajax/product-quick-view.html"
                            className="btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </figure>
                        <div className="product-details">
                          <div className="category-wrap">
                            <div className="category-list">
                              <a
                                href="demo36-shop.html"
                                className="product-category"
                              >
                                category
                              </a>
                            </div>
                            <a href="wishlist.html" className="btn-icon-wish">
                              <i className="icon-heart" />
                            </a>
                          </div>
                          <h3 className="product-title">
                            <a href="demo36-product.html">PT Speaker</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="old-price">$29.00</span>
                            <span className="product-price">$19.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/product-3.jpg"
                              width={239}
                              height={239}
                              alt="product"
                            />
                          </a>
                          <div className="btn-icon-group">
                            <a
                              href="#"
                              className="btn-icon btn-add-cart product-type-simple"
                            >
                              <i className="icon-shopping-cart" />
                            </a>
                          </div>
                          <a
                            href="ajax/product-quick-view.html"
                            className="btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </figure>
                        <div className="product-details">
                          <div className="category-wrap">
                            <div className="category-list">
                              <a
                                href="demo36-shop.html"
                                className="product-category"
                              >
                                category
                              </a>
                            </div>
                            <a href="wishlist.html" className="btn-icon-wish">
                              <i className="icon-heart" />
                            </a>
                          </div>
                          <h3 className="product-title">
                            <a href="product.html">Beats Solo HD Drenched</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="old-price">$29.00</span>
                            <span className="product-price">$19.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/product-4.jpg"
                              width={239}
                              height={239}
                              alt="product"
                            />
                          </a>
                          <div className="btn-icon-group">
                            <a
                              href="#"
                              className="btn-icon btn-add-cart product-type-simple"
                            >
                              <i className="icon-shopping-cart" />
                            </a>
                          </div>
                          <a
                            href="ajax/product-quick-view.html"
                            className="btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </figure>
                        <div className="product-details">
                          <div className="category-wrap">
                            <div className="category-list">
                              <a
                                href="demo36-shop.html"
                                className="product-category"
                              >
                                category
                              </a>
                            </div>
                            <a href="wishlist.html" className="btn-icon-wish">
                              <i className="icon-heart" />
                            </a>
                          </div>
                          <h3 className="product-title">
                            <a href="product.html">Palm Print Jacket</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="old-price">$29.00</span>
                            <span className="product-price">$19.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="filter-8" role="tabpanel">
                <div className="product-content products-with-divide">
                  <div className="row row-joined">
                    <div className=" col-md-4 col-6">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/product-2.jpg"
                              width={239}
                              height={239}
                              alt="product"
                            />
                          </a>
                          <div className="label-group">
                            <div className="product-label label-hot">HOT</div>
                            <div className="product-label label-sale">-20%</div>
                          </div>
                          <div className="btn-icon-group">
                            <a
                              href="#"
                              className="btn-icon btn-add-cart product-type-simple"
                            >
                              <i className="icon-shopping-cart" />
                            </a>
                          </div>
                          <a
                            href="ajax/product-quick-view.html"
                            className="btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </figure>
                        <div className="product-details">
                          <div className="category-wrap">
                            <div className="category-list">
                              <a
                                href="demo36-shop.html"
                                className="product-category"
                              >
                                category
                              </a>
                            </div>
                            <a href="wishlist.html" className="btn-icon-wish">
                              <i className="icon-heart" />
                            </a>
                          </div>
                          <h3 className="product-title">
                            <a href="demo36-product.html">PT Speaker</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="old-price">$29.00</span>
                            <span className="product-price">$19.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/product-3.jpg"
                              width={239}
                              height={239}
                              alt="product"
                            />
                          </a>
                          <div className="btn-icon-group">
                            <a
                              href="#"
                              className="btn-icon btn-add-cart product-type-simple"
                            >
                              <i className="icon-shopping-cart" />
                            </a>
                          </div>
                          <a
                            href="ajax/product-quick-view.html"
                            className="btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </figure>
                        <div className="product-details">
                          <div className="category-wrap">
                            <div className="category-list">
                              <a
                                href="demo36-shop.html"
                                className="product-category"
                              >
                                category
                              </a>
                            </div>
                            <a href="wishlist.html" className="btn-icon-wish">
                              <i className="icon-heart" />
                            </a>
                          </div>
                          <h3 className="product-title">
                            <a href="product.html">Beats Solo HD Drenched</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="old-price">$29.00</span>
                            <span className="product-price">$19.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/product-4.jpg"
                              width={239}
                              height={239}
                              alt="product"
                            />
                          </a>
                          <div className="btn-icon-group">
                            <a
                              href="#"
                              className="btn-icon btn-add-cart product-type-simple"
                            >
                              <i className="icon-shopping-cart" />
                            </a>
                          </div>
                          <a
                            href="ajax/product-quick-view.html"
                            className="btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </figure>
                        <div className="product-details">
                          <div className="category-wrap">
                            <div className="category-list">
                              <a
                                href="demo36-shop.html"
                                className="product-category"
                              >
                                category
                              </a>
                            </div>
                            <a href="wishlist.html" className="btn-icon-wish">
                              <i className="icon-heart" />
                            </a>
                          </div>
                          <h3 className="product-title">
                            <a href="product.html">Palm Print Jacket</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="old-price">$29.00</span>
                            <span className="product-price">$19.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="filter-9" role="tabpanel">
                <div className="product-content products-with-divide">
                  <div className="row row-joined">
                    <div className=" col-md-4 col-6">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/product-2.jpg"
                              width={239}
                              height={239}
                              alt="product"
                            />
                          </a>
                          <div className="label-group">
                            <div className="product-label label-hot">HOT</div>
                            <div className="product-label label-sale">-20%</div>
                          </div>
                          <div className="btn-icon-group">
                            <a
                              href="#"
                              className="btn-icon btn-add-cart product-type-simple"
                            >
                              <i className="icon-shopping-cart" />
                            </a>
                          </div>
                          <a
                            href="ajax/product-quick-view.html"
                            className="btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </figure>
                        <div className="product-details">
                          <div className="category-wrap">
                            <div className="category-list">
                              <a
                                href="demo36-shop.html"
                                className="product-category"
                              >
                                category
                              </a>
                            </div>
                            <a href="wishlist.html" className="btn-icon-wish">
                              <i className="icon-heart" />
                            </a>
                          </div>
                          <h3 className="product-title">
                            <a href="demo36-product.html">PT Speaker</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="old-price">$29.00</span>
                            <span className="product-price">$19.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/product-3.jpg"
                              width={239}
                              height={239}
                              alt="product"
                            />
                          </a>
                          <div className="btn-icon-group">
                            <a
                              href="#"
                              className="btn-icon btn-add-cart product-type-simple"
                            >
                              <i className="icon-shopping-cart" />
                            </a>
                          </div>
                          <a
                            href="ajax/product-quick-view.html"
                            className="btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </figure>
                        <div className="product-details">
                          <div className="category-wrap">
                            <div className="category-list">
                              <a
                                href="demo36-shop.html"
                                className="product-category"
                              >
                                category
                              </a>
                            </div>
                            <a href="wishlist.html" className="btn-icon-wish">
                              <i className="icon-heart" />
                            </a>
                          </div>
                          <h3 className="product-title">
                            <a href="product.html">Beats Solo HD Drenched</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="old-price">$29.00</span>
                            <span className="product-price">$19.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/product-4.jpg"
                              width={239}
                              height={239}
                              alt="product"
                            />
                          </a>
                          <div className="btn-icon-group">
                            <a
                              href="#"
                              className="btn-icon btn-add-cart product-type-simple"
                            >
                              <i className="icon-shopping-cart" />
                            </a>
                          </div>
                          <a
                            href="ajax/product-quick-view.html"
                            className="btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </figure>
                        <div className="product-details">
                          <div className="category-wrap">
                            <div className="category-list">
                              <a
                                href="demo36-shop.html"
                                className="product-category"
                              >
                                category
                              </a>
                            </div>
                            <a href="wishlist.html" className="btn-icon-wish">
                              <i className="icon-heart" />
                            </a>
                          </div>
                          <h3 className="product-title">
                            <a href="product.html">Palm Print Jacket</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="old-price">$29.00</span>
                            <span className="product-price">$19.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="filter-10" role="tabpanel">
                <div className="product-content products-with-divide">
                  <div className="row row-joined">
                    <div className=" col-md-4 col-6">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/product-2.jpg"
                              width={239}
                              height={239}
                              alt="product"
                            />
                          </a>
                          <div className="label-group">
                            <div className="product-label label-hot">HOT</div>
                            <div className="product-label label-sale">-20%</div>
                          </div>
                          <div className="btn-icon-group">
                            <a
                              href="#"
                              className="btn-icon btn-add-cart product-type-simple"
                            >
                              <i className="icon-shopping-cart" />
                            </a>
                          </div>
                          <a
                            href="ajax/product-quick-view.html"
                            className="btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </figure>
                        <div className="product-details">
                          <div className="category-wrap">
                            <div className="category-list">
                              <a
                                href="demo36-shop.html"
                                className="product-category"
                              >
                                category
                              </a>
                            </div>
                            <a href="wishlist.html" className="btn-icon-wish">
                              <i className="icon-heart" />
                            </a>
                          </div>
                          <h3 className="product-title">
                            <a href="demo36-product.html">PT Speaker</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="old-price">$29.00</span>
                            <span className="product-price">$19.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/product-3.jpg"
                              width={239}
                              height={239}
                              alt="product"
                            />
                          </a>
                          <div className="btn-icon-group">
                            <a
                              href="#"
                              className="btn-icon btn-add-cart product-type-simple"
                            >
                              <i className="icon-shopping-cart" />
                            </a>
                          </div>
                          <a
                            href="ajax/product-quick-view.html"
                            className="btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </figure>
                        <div className="product-details">
                          <div className="category-wrap">
                            <div className="category-list">
                              <a
                                href="demo36-shop.html"
                                className="product-category"
                              >
                                category
                              </a>
                            </div>
                            <a href="wishlist.html" className="btn-icon-wish">
                              <i className="icon-heart" />
                            </a>
                          </div>
                          <h3 className="product-title">
                            <a href="product.html">Beats Solo HD Drenched</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="old-price">$29.00</span>
                            <span className="product-price">$19.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/product-4.jpg"
                              width={239}
                              height={239}
                              alt="product"
                            />
                          </a>
                          <div className="btn-icon-group">
                            <a
                              href="#"
                              className="btn-icon btn-add-cart product-type-simple"
                            >
                              <i className="icon-shopping-cart" />
                            </a>
                          </div>
                          <a
                            href="ajax/product-quick-view.html"
                            className="btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </figure>
                        <div className="product-details">
                          <div className="category-wrap">
                            <div className="category-list">
                              <a
                                href="demo36-shop.html"
                                className="product-category"
                              >
                                category
                              </a>
                            </div>
                            <a href="wishlist.html" className="btn-icon-wish">
                              <i className="icon-heart" />
                            </a>
                          </div>
                          <h3 className="product-title">
                            <a href="product.html">Palm Print Jacket</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="old-price">$29.00</span>
                            <span className="product-price">$19.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="filter-11" role="tabpanel">
                <div className="product-content products-with-divide">
                  <div className="row row-joined">
                    <div className=" col-md-4 col-6">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/product-2.jpg"
                              width={239}
                              height={239}
                              alt="product"
                            />
                          </a>
                          <div className="label-group">
                            <div className="product-label label-hot">HOT</div>
                            <div className="product-label label-sale">-20%</div>
                          </div>
                          <div className="btn-icon-group">
                            <a
                              href="#"
                              className="btn-icon btn-add-cart product-type-simple"
                            >
                              <i className="icon-shopping-cart" />
                            </a>
                          </div>
                          <a
                            href="ajax/product-quick-view.html"
                            className="btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </figure>
                        <div className="product-details">
                          <div className="category-wrap">
                            <div className="category-list">
                              <a
                                href="demo36-shop.html"
                                className="product-category"
                              >
                                category
                              </a>
                            </div>
                            <a href="wishlist.html" className="btn-icon-wish">
                              <i className="icon-heart" />
                            </a>
                          </div>
                          <h3 className="product-title">
                            <a href="demo36-product.html">PT Speaker</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="old-price">$29.00</span>
                            <span className="product-price">$19.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/product-3.jpg"
                              width={239}
                              height={239}
                              alt="product"
                            />
                          </a>
                          <div className="btn-icon-group">
                            <a
                              href="#"
                              className="btn-icon btn-add-cart product-type-simple"
                            >
                              <i className="icon-shopping-cart" />
                            </a>
                          </div>
                          <a
                            href="ajax/product-quick-view.html"
                            className="btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </figure>
                        <div className="product-details">
                          <div className="category-wrap">
                            <div className="category-list">
                              <a
                                href="demo36-shop.html"
                                className="product-category"
                              >
                                category
                              </a>
                            </div>
                            <a href="wishlist.html" className="btn-icon-wish">
                              <i className="icon-heart" />
                            </a>
                          </div>
                          <h3 className="product-title">
                            <a href="product.html">Beats Solo HD Drenched</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="old-price">$29.00</span>
                            <span className="product-price">$19.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/product-4.jpg"
                              width={239}
                              height={239}
                              alt="product"
                            />
                          </a>
                          <div className="btn-icon-group">
                            <a
                              href="#"
                              className="btn-icon btn-add-cart product-type-simple"
                            >
                              <i className="icon-shopping-cart" />
                            </a>
                          </div>
                          <a
                            href="ajax/product-quick-view.html"
                            className="btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </figure>
                        <div className="product-details">
                          <div className="category-wrap">
                            <div className="category-list">
                              <a
                                href="demo36-shop.html"
                                className="product-category"
                              >
                                category
                              </a>
                            </div>
                            <a href="wishlist.html" className="btn-icon-wish">
                              <i className="icon-heart" />
                            </a>
                          </div>
                          <h3 className="product-title">
                            <a href="product.html">Palm Print Jacket</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="old-price">$29.00</span>
                            <span className="product-price">$19.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="filter-12" role="tabpanel">
                <div className="product-content products-with-divide">
                  <div className="row row-joined">
                    <div className=" col-md-4 col-6">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/product-2.jpg"
                              width={239}
                              height={239}
                              alt="product"
                            />
                          </a>
                          <div className="label-group">
                            <div className="product-label label-hot">HOT</div>
                            <div className="product-label label-sale">-20%</div>
                          </div>
                          <div className="btn-icon-group">
                            <a
                              href="#"
                              className="btn-icon btn-add-cart product-type-simple"
                            >
                              <i className="icon-shopping-cart" />
                            </a>
                          </div>
                          <a
                            href="ajax/product-quick-view.html"
                            className="btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </figure>
                        <div className="product-details">
                          <div className="category-wrap">
                            <div className="category-list">
                              <a
                                href="demo36-shop.html"
                                className="product-category"
                              >
                                category
                              </a>
                            </div>
                            <a href="wishlist.html" className="btn-icon-wish">
                              <i className="icon-heart" />
                            </a>
                          </div>
                          <h3 className="product-title">
                            <a href="demo36-product.html">PT Speaker</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="old-price">$29.00</span>
                            <span className="product-price">$19.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/product-3.jpg"
                              width={239}
                              height={239}
                              alt="product"
                            />
                          </a>
                          <div className="btn-icon-group">
                            <a
                              href="#"
                              className="btn-icon btn-add-cart product-type-simple"
                            >
                              <i className="icon-shopping-cart" />
                            </a>
                          </div>
                          <a
                            href="ajax/product-quick-view.html"
                            className="btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </figure>
                        <div className="product-details">
                          <div className="category-wrap">
                            <div className="category-list">
                              <a
                                href="demo36-shop.html"
                                className="product-category"
                              >
                                category
                              </a>
                            </div>
                            <a href="wishlist.html" className="btn-icon-wish">
                              <i className="icon-heart" />
                            </a>
                          </div>
                          <h3 className="product-title">
                            <a href="product.html">Beats Solo HD Drenched</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="old-price">$29.00</span>
                            <span className="product-price">$19.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/product-4.jpg"
                              width={239}
                              height={239}
                              alt="product"
                            />
                          </a>
                          <div className="btn-icon-group">
                            <a
                              href="#"
                              className="btn-icon btn-add-cart product-type-simple"
                            >
                              <i className="icon-shopping-cart" />
                            </a>
                          </div>
                          <a
                            href="ajax/product-quick-view.html"
                            className="btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </figure>
                        <div className="product-details">
                          <div className="category-wrap">
                            <div className="category-list">
                              <a
                                href="demo36-shop.html"
                                className="product-category"
                              >
                                category
                              </a>
                            </div>
                            <a href="wishlist.html" className="btn-icon-wish">
                              <i className="icon-heart" />
                            </a>
                          </div>
                          <h3 className="product-title">
                            <a href="product.html">Palm Print Jacket</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="old-price">$29.00</span>
                            <span className="product-price">$19.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="filter-13" role="tabpanel">
                <div className="product-content products-with-divide">
                  <div className="row row-joined">
                    <div className=" col-md-4 col-6">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/product-2.jpg"
                              width={239}
                              height={239}
                              alt="product"
                            />
                          </a>
                          <div className="label-group">
                            <div className="product-label label-hot">HOT</div>
                            <div className="product-label label-sale">-20%</div>
                          </div>
                          <div className="btn-icon-group">
                            <a
                              href="#"
                              className="btn-icon btn-add-cart product-type-simple"
                            >
                              <i className="icon-shopping-cart" />
                            </a>
                          </div>
                          <a
                            href="ajax/product-quick-view.html"
                            className="btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </figure>
                        <div className="product-details">
                          <div className="category-wrap">
                            <div className="category-list">
                              <a
                                href="demo36-shop.html"
                                className="product-category"
                              >
                                category
                              </a>
                            </div>
                            <a href="wishlist.html" className="btn-icon-wish">
                              <i className="icon-heart" />
                            </a>
                          </div>
                          <h3 className="product-title">
                            <a href="demo36-product.html">PT Speaker</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="old-price">$29.00</span>
                            <span className="product-price">$19.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/product-3.jpg"
                              width={239}
                              height={239}
                              alt="product"
                            />
                          </a>
                          <div className="btn-icon-group">
                            <a
                              href="#"
                              className="btn-icon btn-add-cart product-type-simple"
                            >
                              <i className="icon-shopping-cart" />
                            </a>
                          </div>
                          <a
                            href="ajax/product-quick-view.html"
                            className="btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </figure>
                        <div className="product-details">
                          <div className="category-wrap">
                            <div className="category-list">
                              <a
                                href="demo36-shop.html"
                                className="product-category"
                              >
                                category
                              </a>
                            </div>
                            <a href="wishlist.html" className="btn-icon-wish">
                              <i className="icon-heart" />
                            </a>
                          </div>
                          <h3 className="product-title">
                            <a href="product.html">Beats Solo HD Drenched</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="old-price">$29.00</span>
                            <span className="product-price">$19.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                    <div className="col-md-4 col-6">
                      <div className="product-default inner-quickview inner-icon">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/product-4.jpg"
                              width={239}
                              height={239}
                              alt="product"
                            />
                          </a>
                          <div className="btn-icon-group">
                            <a
                              href="#"
                              className="btn-icon btn-add-cart product-type-simple"
                            >
                              <i className="icon-shopping-cart" />
                            </a>
                          </div>
                          <a
                            href="ajax/product-quick-view.html"
                            className="btn-quickview"
                            title="Quick View"
                          >
                            Quick View
                          </a>
                        </figure>
                        <div className="product-details">
                          <div className="category-wrap">
                            <div className="category-list">
                              <a
                                href="demo36-shop.html"
                                className="product-category"
                              >
                                category
                              </a>
                            </div>
                            <a href="wishlist.html" className="btn-icon-wish">
                              <i className="icon-heart" />
                            </a>
                          </div>
                          <h3 className="product-title">
                            <a href="product.html">Palm Print Jacket</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="old-price">$29.00</span>
                            <span className="product-price">$19.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray">
        <div className="container">
          <div
            className="categories-container bg-white "
            data-animation-name="fadeIn"
            data-animation-delay={100}
          >
            <h4 className="section-title text-transform-none">Electronics</h4>
            <div className="row">
              <div className="col-md-6 mb-2 mb-md-0">
                <div
                  className="banner banner4 bg-image"
                  style={{
                    backgroundImage:
                      "url(/assets/images/demoes/demo36/banners/banner4.jpg)",
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
                      "url(/assets/images/demoes/demo36/banners/banner5.jpg)",
                  }}
                >
                  <div className="banner-layer d-flex align-items-center flex-column flex-sm-row justify-content-end">
                    <div className="content-left">
                      <h3 className="text-white text-center mb-0">
                        ELECTRONIC DEALS
                      </h3>
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
            <div className="row">
              <div className="col-xl-3 col-sm-6">
                <div className="shop-list p-0">
                  <a href="demo36-shop.html" className="sub-title">
                    Accessories
                  </a>
                  <ul className="d-flex flex-wrap">
                    <li>
                      <a href="demo36-shop.html">Bags &amp; Cases</a>
                    </li>
                    <li>
                      <a href="demo36-shop.html">Batteries</a>
                    </li>
                    <li>
                      <a href="demo36-shop.html">Cables &amp; Adapters</a>
                    </li>
                    <li>
                      <a href="demo36-shop.html">Chargers</a>
                    </li>
                    <li>
                      <a href="demo36-shop.html">Electronic Cigarettes</a>
                    </li>
                    <li>
                      <a href="demo36-shop.html">Home Electronic</a>
                    </li>
                  </ul>
                  <a className="view-all" href="demo36-shop.html">
                    View All
                    <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6">
                <div className="shop-list p-0">
                  <a href="demo36-shop.html" className="sub-title">
                    Audio &amp; Video
                  </a>
                  <ul className="d-flex flex-wrap">
                    <li>
                      <a href="demo36-shop.html">Audio Amplifier</a>
                    </li>
                    <li>
                      <a href="demo36-shop.html">HDMI Projectors</a>
                    </li>
                    <li>
                      <a href="demo36-shop.html">Projectors</a>
                    </li>
                    <li>
                      <a href="demo36-shop.html">Televisions</a>
                    </li>
                    <li>
                      <a href="demo36-shop.html">TV Receivers</a>
                    </li>
                    <li>
                      <a href="demo36-shop.html">TV Sticks</a>
                    </li>
                  </ul>
                  <a className="view-all" href="demo36-shop.html">
                    View All
                    <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6">
                <div className="shop-list p-0">
                  <a href="demo36-shop.html" className="sub-title">
                    Camera &amp; Photo
                  </a>
                  <ul className="d-flex flex-wrap">
                    <li>
                      <a href="demo36-shop.html">Action Cameras</a>
                    </li>
                    <li>
                      <a href="demo36-shop.html">Camcorders</a>
                    </li>
                    <li>
                      <a href="demo36-shop.html">Camera &amp; Photo</a>
                    </li>
                    <li>
                      <a href="demo36-shop.html">Camera Drones</a>
                    </li>
                    <li>
                      <a href="demo36-shop.html">Digital Cameras</a>
                    </li>
                    <li>
                      <a href="demo36-shop.html">Photo Supplies</a>
                    </li>
                  </ul>
                  <a className="view-all" href="demo36-shop.html">
                    View All
                    <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6">
                <div className="shop-list p-0">
                  <a href="demo36-shop.html" className="sub-title">
                    Laptops
                  </a>
                  <ul className="d-flex flex-wrap">
                    <li>
                      <a href="demo36-shop.html">Gaming Laptops</a>
                    </li>
                    <li>
                      <a href="demo36-shop.html">Laptop Accessories</a>
                    </li>
                    <li>
                      <a href="demo36-shop.html">Laptop Bags &amp; Cases</a>
                    </li>
                    <li>
                      <a href="demo36-shop.html">Tablet Accessories</a>
                    </li>
                    <li>
                      <a href="demo36-shop.html">Tablets</a>
                    </li>
                    <li>
                      <a href="demo36-shop.html">Ultraslim Laptops</a>
                    </li>
                  </ul>
                  <a className="view-all" href="demo36-shop.html">
                    View All
                    <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="products-slider owl-carousel owl-theme nav-outer carousel-with-bg show-nav-hover nav-image-center "
            data-animation-name="fadeIn"
            data-animation-delay={100}
            data-owl-options="{
                      'margin': 1,
                      'dots': false,
                      'navText': [ '<i class=icon-left-open-big>', '<i class=icon-right-open-big>' ],
                      'nav': true,
                      'responsive': {
                          '1200': {
                              'items': 6
                          }
                      }
                  }"
          >
            <div className="product-default inner-quickview inner-icon">
              <figure>
                <a href="demo36-product.html">
                  <img
                    src="/assets/images/demoes/demo36/products/product-3.jpg"
                    width={239}
                    height={239}
                    alt="product"
                  />
                </a>
                <div className="btn-icon-group">
                  <a
                    href="#"
                    className="btn-icon btn-add-cart product-type-simple"
                  >
                    <i className="icon-shopping-cart" />
                  </a>
                </div>
                <a
                  href="ajax/product-quick-view.html"
                  className="btn-quickview"
                  title="Quick View"
                >
                  Quick View
                </a>
              </figure>
              <div className="product-details">
                <div className="category-wrap">
                  <div className="category-list">
                    <a href="demo36-shop.html" className="product-category">
                      category
                    </a>
                  </div>
                  <a
                    href="wishlist.html"
                    title="Wishlist"
                    className="btn-icon-wish"
                  >
                    <i className="icon-heart" />
                  </a>
                </div>
                <h3 className="product-title">
                  <a href="demo36-product.html">Beats solo HD Drenched</a>
                </h3>
                <div className="ratings-container">
                  <div className="product-ratings">
                    <span className="ratings" style={{ width: "100%" }} />
                    {/* End .ratings */}
                    <span className="tooltiptext tooltip-top" />
                  </div>
                  {/* End .product-ratings */}
                </div>
                {/* End .product-container */}
                <div className="price-box">
                  <span className="old-price">$29.00</span>
                  <span className="product-price">$19.00</span>
                </div>
                {/* End .price-box */}
              </div>
              {/* End .product-details */}
            </div>
            <div className="product-default inner-quickview inner-icon">
              <figure>
                <a href="demo36-product.html">
                  <img
                    src="/assets/images/demoes/demo36/products/product-5.jpg"
                    width={239}
                    height={239}
                    alt="product"
                  />
                </a>
                <div className="btn-icon-group">
                  <a
                    href="#"
                    className="btn-icon btn-add-cart product-type-simple"
                  >
                    <i className="icon-shopping-cart" />
                  </a>
                </div>
                <a
                  href="ajax/product-quick-view.html"
                  className="btn-quickview"
                  title="Quick View"
                >
                  Quick View
                </a>
              </figure>
              <div className="product-details">
                <div className="category-wrap">
                  <div className="category-list">
                    <a href="demo36-shop.html" className="product-category">
                      category
                    </a>
                  </div>
                  <a
                    href="wishlist.html"
                    title="Wishlist"
                    className="btn-icon-wish"
                  >
                    <i className="icon-heart" />
                  </a>
                </div>
                <h3 className="product-title">
                  <a href="demo36-product.html">Camera</a>
                </h3>
                <div className="ratings-container">
                  <div className="product-ratings">
                    <span className="ratings" style={{ width: "100%" }} />
                    {/* End .ratings */}
                    <span className="tooltiptext tooltip-top" />
                  </div>
                  {/* End .product-ratings */}
                </div>
                {/* End .product-container */}
                <div className="price-box">
                  <span className="old-price">$29.00</span>
                  <span className="product-price">$19.00</span>
                </div>
                {/* End .price-box */}
              </div>
              {/* End .product-details */}
            </div>
            <div className="product-default inner-quickview inner-icon">
              <figure>
                <a href="demo36-product.html">
                  <img
                    src="/assets/images/demoes/demo36/products/product-1.jpg"
                    width={239}
                    height={239}
                    alt="product"
                  />
                </a>
                <div className="btn-icon-group">
                  <a
                    href="#"
                    className="btn-icon btn-add-cart product-type-simple"
                  >
                    <i className="icon-shopping-cart" />
                  </a>
                </div>
                <a
                  href="ajax/product-quick-view.html"
                  className="btn-quickview"
                  title="Quick View"
                >
                  Quick View
                </a>
                <div className="product-countdown-container">
                  <span className="product-countdown-title">
                    offer ends in:
                  </span>
                  <div
                    className="product-countdown countdown-compact"
                    data-until="2021, 10, 5"
                    data-compact="true"
                  ></div>
                  {/* End .product-countdown */}
                </div>
                {/* End .product-countdown-container */}
              </figure>
              <div className="product-details">
                <div className="category-wrap">
                  <div className="category-list">
                    <a href="demo36-shop.html" className="product-category">
                      category
                    </a>
                  </div>
                  <a
                    href="wishlist.html"
                    title="Wishlist"
                    className="btn-icon-wish"
                  >
                    <i className="icon-heart" />
                  </a>
                </div>
                <h3 className="product-title">
                  <a href="demo36-product.html">Drone Pro</a>
                </h3>
                <div className="ratings-container">
                  <div className="product-ratings">
                    <span className="ratings" style={{ width: "100%" }} />
                    {/* End .ratings */}
                    <span className="tooltiptext tooltip-top" />
                  </div>
                  {/* End .product-ratings */}
                </div>
                {/* End .product-container */}
                <div className="price-box">
                  <span className="old-price">$29.00</span>
                  <span className="product-price">$19.00</span>
                </div>
                {/* End .price-box */}
              </div>
              {/* End .product-details */}
            </div>
            <div className="product-default inner-quickview inner-icon">
              <figure>
                <a href="demo36-product.html">
                  <img
                    src="/assets/images/demoes/demo36/products/product-9.jpg"
                    width={239}
                    height={239}
                    alt="product"
                  />
                </a>
                <div className="btn-icon-group">
                  <a
                    href="#"
                    className="btn-icon btn-add-cart product-type-simple"
                  >
                    <i className="icon-shopping-cart" />
                  </a>
                </div>
                <a
                  href="ajax/product-quick-view.html"
                  className="btn-quickview"
                  title="Quick View"
                >
                  Quick View
                </a>
              </figure>
              <div className="product-details">
                <div className="category-wrap">
                  <div className="category-list">
                    <a href="demo36-shop.html" className="product-category">
                      category
                    </a>
                  </div>
                  <a
                    href="wishlist.html"
                    title="Wishlist"
                    className="btn-icon-wish"
                  >
                    <i className="icon-heart" />
                  </a>
                </div>
                <h3 className="product-title">
                  <a href="demo36-product.html">GM CAMARO SS Original</a>
                </h3>
                <div className="ratings-container">
                  <div className="product-ratings">
                    <span className="ratings" style={{ width: "100%" }} />
                    {/* End .ratings */}
                    <span className="tooltiptext tooltip-top" />
                  </div>
                  {/* End .product-ratings */}
                </div>
                {/* End .product-container */}
                <div className="price-box">
                  <span className="old-price">$29.00</span>
                  <span className="product-price">$19.00</span>
                </div>
                {/* End .price-box */}
              </div>
              {/* End .product-details */}
            </div>
            <div className="product-default inner-quickview inner-icon">
              <figure>
                <a href="demo36-product.html">
                  <img
                    src="/assets/images/demoes/demo36/products/product-2.jpg"
                    width={239}
                    height={239}
                    alt="product"
                  />
                </a>
                <div className="btn-icon-group">
                  <a
                    href="#"
                    className="btn-icon btn-add-cart product-type-simple"
                  >
                    <i className="icon-shopping-cart" />
                  </a>
                </div>
                <a
                  href="ajax/product-quick-view.html"
                  className="btn-quickview"
                  title="Quick View"
                >
                  Quick View
                </a>
              </figure>
              <div className="product-details">
                <div className="category-wrap">
                  <div className="category-list">
                    <a href="demo36-shop.html" className="product-category">
                      category
                    </a>
                  </div>
                  <a
                    href="wishlist.html"
                    title="Wishlist"
                    className="btn-icon-wish"
                  >
                    <i className="icon-heart" />
                  </a>
                </div>
                <h3 className="product-title">
                  <a href="demo36-product.html">PT Speaker</a>
                </h3>
                <div className="ratings-container">
                  <div className="product-ratings">
                    <span className="ratings" style={{ width: "100%" }} />
                    {/* End .ratings */}
                    <span className="tooltiptext tooltip-top" />
                  </div>
                  {/* End .product-ratings */}
                </div>
                {/* End .product-container */}
                <div className="price-box">
                  <span className="old-price">$29.00</span>
                  <span className="product-price">$19.00</span>
                </div>
                {/* End .price-box */}
              </div>
              {/* End .product-details */}
            </div>
            <div className="product-default inner-quickview inner-icon">
              <figure>
                <a href="demo36-product.html">
                  <img
                    src="/assets/images/demoes/demo36/products/product-12.jpg"
                    width={239}
                    height={239}
                    alt="product"
                  />
                </a>
                <div className="btn-icon-group">
                  <a
                    href="#"
                    className="btn-icon btn-add-cart product-type-simple"
                  >
                    <i className="icon-shopping-cart" />
                  </a>
                </div>
                <a
                  href="ajax/product-quick-view.html"
                  className="btn-quickview"
                  title="Quick View"
                >
                  Quick View
                </a>
              </figure>
              <div className="product-details">
                <div className="category-wrap">
                  <div className="category-list">
                    <a href="demo36-shop.html" className="product-category">
                      category
                    </a>
                  </div>
                  <a
                    href="wishlist.html"
                    title="Wishlist"
                    className="btn-icon-wish"
                  >
                    <i className="icon-heart" />
                  </a>
                </div>
                <h3 className="product-title">
                  <a href="demo36-product.html">Sport Watches</a>
                </h3>
                <div className="ratings-container">
                  <div className="product-ratings">
                    <span className="ratings" style={{ width: "100%" }} />
                    {/* End .ratings */}
                    <span className="tooltiptext tooltip-top" />
                  </div>
                  {/* End .product-ratings */}
                </div>
                {/* End .product-container */}
                <div className="price-box">
                  <span className="old-price">$29.00</span>
                  <span className="product-price">$19.00</span>
                </div>
                {/* End .price-box */}
              </div>
              {/* End .product-details */}
            </div>
          </div>
          <div
            className="categories-container categories-container-two bg-white "
            data-animation-name="fadeIn"
            data-animation-delay={100}
          >
            <h4 className="section-title text-transform-none">
              Gift &amp; Gadgets
            </h4>
            <div className="row">
              <div className="col-lg-3 col-6">
                <div className="shop-list p-0 d-flex align-items-sm-center flex-sm-row flex-column">
                  <a href="#">
                    <i className="icon-boy-broad-smile" />
                  </a>
                  <div>
                    <a href="#" className="sub-title">
                      For Him
                    </a>
                    <ul>
                      <li>
                        <a href="demo36-shop.html">Gifts for Boyfriend</a>
                      </li>
                      <li>
                        <a href="demo36-shop.html">Gifts for Dad</a>
                      </li>
                      <li>
                        <a href="demo36-shop.html">Gifts for Husband</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="shop-list p-0 d-flex align-items-sm-center flex-sm-row flex-column">
                  <a href="#">
                    <i className="icon-smiling-girl" />
                  </a>
                  <div>
                    <a href="#" className="sub-title">
                      For Her
                    </a>
                    <ul>
                      <li>
                        <a href="demo36-shop.html">Gifts for Girlfriend</a>
                      </li>
                      <li>
                        <a href="demo36-shop.html">Gifts for Mom</a>
                      </li>
                      <li>
                        <a href="demo36-shop.html">Gifts for Wife</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="shop-list p-0 d-flex align-items-sm-center flex-sm-row flex-column">
                  <a href="#">
                    <i className="icon-smiling-baby" />
                  </a>
                  <div>
                    <a href="#" className="sub-title">
                      For Kids
                    </a>
                    <ul>
                      <li>
                        <a href="demo36-shop.html">Gifts for Boys</a>
                      </li>
                      <li>
                        <a href="demo36-shop.html">Gifts for Girls</a>
                      </li>
                      <li>
                        <a href="demo36-shop.html">Gifts for Tween Boys</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="shop-list p-0 d-flex align-items-sm-center flex-sm-row flex-column">
                  <a href="#">
                    <i className="icon-gift-2" />
                  </a>
                  <div>
                    <a href="#" className="sub-title">
                      Birthday
                    </a>
                    <ul>
                      <li>
                        <a href="demo36-shop.html">Birthday for Her</a>
                      </li>
                      <li>
                        <a href="demo36-shop.html">Birthday for Him</a>
                      </li>
                      <li>
                        <a href="demo36-shop.html">Boyfriend Gifts</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="products-slider product-slider-two owl-carousel carousel-with-bg owl-theme nav-outer show-nav-hover nav-image-center pb-0 "
            data-animation-name="fadeIn"
            data-animation-delay={100}
            data-owl-options="{
                      'margin': 1,
                      'dots': false,
                      'nav': true,
                      'navText': [ '<i class=icon-left-open-big>', '<i class=icon-right-open-big>' ],
                      'responsive': {
                          '1200': {
                              'items': 6
                          }
                      }
                  }"
          >
            <div className="product-default inner-quickview inner-icon">
              <figure>
                <a href="demo36-product.html">
                  <img
                    src="/assets/images/demoes/demo36/products/product-13.jpg"
                    width={239}
                    height={239}
                    alt="product"
                  />
                </a>
                <div className="btn-icon-group">
                  <a
                    href="#"
                    className="btn-icon btn-add-cart product-type-simple"
                  >
                    <i className="icon-shopping-cart" />
                  </a>
                </div>
                <a
                  href="ajax/product-quick-view.html"
                  className="btn-quickview"
                  title="Quick View"
                >
                  Quick View
                </a>
              </figure>
              <div className="product-details">
                <div className="category-wrap">
                  <div className="category-list">
                    <a href="demo36-shop.html" className="product-category">
                      category
                    </a>
                  </div>
                  <a
                    href="wishlist.html"
                    title="Wishlist"
                    className="btn-icon-wish"
                  >
                    <i className="icon-heart" />
                  </a>
                </div>
                <h3 className="product-title">
                  <a href="demo36-product.html">Belt accessories</a>
                </h3>
                <div className="ratings-container">
                  <div className="product-ratings">
                    <span className="ratings" style={{ width: "100%" }} />
                    {/* End .ratings */}
                    <span className="tooltiptext tooltip-top" />
                  </div>
                  {/* End .product-ratings */}
                </div>
                {/* End .product-container */}
                <div className="price-box">
                  <span className="old-price">$29.00</span>
                  <span className="product-price">$19.00</span>
                </div>
                {/* End .price-box */}
              </div>
              {/* End .product-details */}
            </div>
            <div className="product-default inner-quickview inner-icon">
              <figure>
                <a href="demo36-product.html">
                  <img
                    src="/assets/images/demoes/demo36/products/product-9.jpg"
                    width={239}
                    height={239}
                    alt="product"
                  />
                </a>
                <div className="btn-icon-group">
                  <a
                    href="#"
                    className="btn-icon btn-add-cart product-type-simple"
                  >
                    <i className="icon-shopping-cart" />
                  </a>
                </div>
                <a
                  href="ajax/product-quick-view.html"
                  className="btn-quickview"
                  title="Quick View"
                >
                  Quick View
                </a>
              </figure>
              <div className="product-details">
                <div className="category-wrap">
                  <div className="category-list">
                    <a href="demo36-shop.html" className="product-category">
                      category
                    </a>
                  </div>
                  <a
                    href="wishlist.html"
                    title="Wishlist"
                    className="btn-icon-wish"
                  >
                    <i className="icon-heart" />
                  </a>
                </div>
                <h3 className="product-title">
                  <a href="demo36-product.html">GM Camaro SS Original</a>
                </h3>
                <div className="ratings-container">
                  <div className="product-ratings">
                    <span className="ratings" style={{ width: "100%" }} />
                    {/* End .ratings */}
                    <span className="tooltiptext tooltip-top" />
                  </div>
                  {/* End .product-ratings */}
                </div>
                {/* End .product-container */}
                <div className="price-box">
                  <span className="old-price">$29.00</span>
                  <span className="product-price">$19.00</span>
                </div>
                {/* End .price-box */}
              </div>
              {/* End .product-details */}
            </div>
            <div className="product-default inner-quickview inner-icon">
              <figure>
                <a href="demo36-product.html">
                  <img
                    src="/assets/images/demoes/demo36/products/product-14.jpg"
                    width={239}
                    height={239}
                    alt="product"
                  />
                </a>
                <div className="btn-icon-group">
                  <a
                    href="#"
                    className="btn-icon btn-add-cart product-type-simple"
                  >
                    <i className="icon-shopping-cart" />
                  </a>
                </div>
                <a
                  href="ajax/product-quick-view.html"
                  className="btn-quickview"
                  title="Quick View"
                >
                  Quick View
                </a>
              </figure>
              <div className="product-details">
                <div className="category-wrap">
                  <div className="category-list">
                    <a href="demo36-shop.html" className="product-category">
                      category
                    </a>
                  </div>
                  <a
                    href="wishlist.html"
                    title="Wishlist"
                    className="btn-icon-wish"
                  >
                    <i className="icon-heart" />
                  </a>
                </div>
                <h3 className="product-title">
                  <a href="demo36-product.html">PT Cup</a>
                </h3>
                <div className="ratings-container">
                  <div className="product-ratings">
                    <span className="ratings" style={{ width: "100%" }} />
                    {/* End .ratings */}
                    <span className="tooltiptext tooltip-top" />
                  </div>
                  {/* End .product-ratings */}
                </div>
                {/* End .product-container */}
                <div className="price-box">
                  <span className="old-price">$29.00</span>
                  <span className="product-price">$19.00</span>
                </div>
                {/* End .price-box */}
              </div>
              {/* End .product-details */}
            </div>
            <div className="product-default inner-quickview inner-icon">
              <figure>
                <a href="demo36-product.html">
                  <img
                    src="/assets/images/demoes/demo36/products/product-15.jpg"
                    width={239}
                    height={239}
                    alt="product"
                  />
                </a>
                <div className="btn-icon-group">
                  <a
                    href="#"
                    className="btn-icon btn-add-cart product-type-simple"
                  >
                    <i className="icon-shopping-cart" />
                  </a>
                </div>
                <a
                  href="ajax/product-quick-view.html"
                  className="btn-quickview"
                  title="Quick View"
                >
                  Quick View
                </a>
              </figure>
              <div className="product-details">
                <div className="category-wrap">
                  <div className="category-list">
                    <a href="demo36-shop.html" className="product-category">
                      category
                    </a>
                  </div>
                  <a
                    href="wishlist.html"
                    title="Wishlist"
                    className="btn-icon-wish"
                  >
                    <i className="icon-heart" />
                  </a>
                </div>
                <h3 className="product-title">
                  <a href="demo36-product.html">Tea bowl</a>
                </h3>
                <div className="ratings-container">
                  <div className="product-ratings">
                    <span className="ratings" style={{ width: "100%" }} />
                    {/* End .ratings */}
                    <span className="tooltiptext tooltip-top" />
                  </div>
                  {/* End .product-ratings */}
                </div>
                {/* End .product-container */}
                <div className="price-box">
                  <span className="old-price">$29.00</span>
                  <span className="product-price">$19.00</span>
                </div>
                {/* End .price-box */}
              </div>
              {/* End .product-details */}
            </div>
            <div className="product-default inner-quickview inner-icon">
              <figure>
                <a href="demo36-product.html">
                  <img
                    src="/assets/images/demoes/demo36/products/product-16.jpg"
                    width={239}
                    height={239}
                    alt="product"
                  />
                </a>
                <div className="btn-icon-group">
                  <a
                    href="#"
                    className="btn-icon btn-add-cart product-type-simple"
                  >
                    <i className="icon-shopping-cart" />
                  </a>
                </div>
                <a
                  href="ajax/product-quick-view.html"
                  className="btn-quickview"
                  title="Quick View"
                >
                  Quick View
                </a>
              </figure>
              <div className="product-details">
                <div className="category-wrap">
                  <div className="category-list">
                    <a href="demo36-shop.html" className="product-category">
                      category
                    </a>
                  </div>
                  <a
                    href="wishlist.html"
                    title="Wishlist"
                    className="btn-icon-wish"
                  >
                    <i className="icon-heart" />
                  </a>
                </div>
                <h3 className="product-title">
                  <a href="demo36-product.html">White brooch</a>
                </h3>
                <div className="ratings-container">
                  <div className="product-ratings">
                    <span className="ratings" style={{ width: "100%" }} />
                    {/* End .ratings */}
                    <span className="tooltiptext tooltip-top" />
                  </div>
                  {/* End .product-ratings */}
                </div>
                {/* End .product-container */}
                <div className="price-box">
                  <span className="old-price">$29.00</span>
                  <span className="product-price">$19.00</span>
                </div>
                {/* End .price-box */}
              </div>
              {/* End .product-details */}
            </div>
            <div className="product-default inner-quickview inner-icon">
              <figure>
                <a href="demo36-product.html">
                  <img
                    src="/assets/images/demoes/demo36/products/product-17.jpg"
                    width={239}
                    height={239}
                    alt="product"
                  />
                </a>
                <div className="btn-icon-group">
                  <a
                    href="#"
                    className="btn-icon btn-add-cart product-type-simple"
                  >
                    <i className="icon-shopping-cart" />
                  </a>
                </div>
                <a
                  href="ajax/product-quick-view.html"
                  className="btn-quickview"
                  title="Quick View"
                >
                  Quick View
                </a>
              </figure>
              <div className="product-details">
                <div className="category-wrap">
                  <div className="category-list">
                    <a href="demo36-shop.html" className="product-category">
                      category
                    </a>
                  </div>
                  <a
                    href="wishlist.html"
                    title="Wishlist"
                    className="btn-icon-wish"
                  >
                    <i className="icon-heart" />
                  </a>
                </div>
                <h3 className="product-title">
                  <a href="demo36-product.html">White ring</a>
                </h3>
                <div className="ratings-container">
                  <div className="product-ratings">
                    <span className="ratings" style={{ width: "100%" }} />
                    {/* End .ratings */}
                    <span className="tooltiptext tooltip-top" />
                  </div>
                  {/* End .product-ratings */}
                </div>
                {/* End .product-container */}
                <div className="price-box">
                  <span className="old-price">$29.00</span>
                  <span className="product-price">$19.00</span>
                </div>
                {/* End .price-box */}
              </div>
              {/* End .product-details */}
            </div>
          </div>
          <div
            className="sale-banner banner bg-image mb-4 "
            data-animation-name="fadeIn"
            data-animation-delay={100}
            style={{
              backgroundImage:
                "url(/assets/images/demoes/demo36/banners/banner6.jpg)",
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
                <div className="col-auto col-md-2 col-12 col-2 justify-content-center content-center mr-md-3 mr-lg-0  ml-md-4 ml-lg-0">
                  <h2 className="text-white mb-0 position-relative align-left">
                    50
                    <small>
                      %<ins>OFF</ins>
                    </small>
                  </h2>
                </div>
                <div className="mb-0 col-md-4 col-12 col-3 col-auto justify-content-center justify-content-md-start content-right">
                  <a
                    href="demo8-shop.html"
                    className="btn btn-lg bg-white text-dark font2"
                  >
                    Shop Now!
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-white "
            data-animation-name="fadeIn"
            data-animation-delay={100}
          >
            <div className="row">
              <div className="col-xl-9 col-xl-9cols pr-xl-0">
                <div className="categories-container categories-container-three bg-white pb-0">
                  <div className="heading d-flex flex-lg-row flex-column align-items-lg-center">
                    <h4 className="section-title text-transform-none mb-0">
                      Home &amp; Garden
                    </h4>
                    <ul className="shop-list d-flex flex-wrap align-items-center p-0 mt-0">
                      <li>
                        <a href="demo36-shop.html">Furniture</a>
                      </li>
                      <li>
                        <a href="demo36-shop.html">Garden &amp; Outdoors</a>
                      </li>
                      <li>
                        <a href="demo36-shop.html">Home Accessories</a>
                      </li>
                      <li>
                        <a href="demo36-shop.html">Lighting</a>
                      </li>
                    </ul>
                    <a className="view-all" href="demo36-shop.html">
                      View All
                      <i className="fas fa-long-arrow-alt-right" />
                    </a>
                  </div>
                  <div className="banner banner6" data-md-order={8}>
                    <figure>
                      <img
                        src="/assets/images/demoes/demo36/banners/banner7.jpg"
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
                  {/* End .banner */}
                </div>
                <div
                  className="product-slider-tab  bg-white carousel-with-bg"
                  data-animation-name="fadeIn"
                  data-animation-delay={100}
                >
                  <div className="heading shop-list d-flex align-items-center flex-wrap justify-content-center justify-content-md-start">
                    <ul
                      className=" nav ml-0 justify-content-center mb-0"
                      id="myTab"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="seller-tab"
                          data-toggle="tab"
                          href="#seller"
                          role="tab"
                          aria-controls="seller"
                          aria-selected="true"
                        >
                          Best Sellers
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="new-tab"
                          data-toggle="tab"
                          href="#new"
                          role="tab"
                          aria-controls="new"
                          aria-selected="false"
                        >
                          New Arrivals
                        </a>
                      </li>
                      <li className="nav-item mr-0">
                        <a
                          className="nav-link"
                          id="best-tab"
                          data-toggle="tab"
                          href="#best"
                          role="tab"
                          aria-controls="best"
                          aria-selected="false"
                        >
                          Best Ratings
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content">
                    <div
                      className="tab-pane fade show active"
                      id="seller"
                      role="tabpanel"
                      aria-labelledby="seller-tab"
                    >
                      <div
                        className="products-slider owl-carousel nav-circle owl-theme pb-0"
                        data-owl-options="{
                                          'margin': 1,
                                          'dots': false,
                                          'nav': true,
                                          'navText': [ '<i class=icon-left-open-big>', '<i class=icon-right-open-big>' ],
                                          'loop': false,
                                          'responsive': {
                                              '0': {
                                                  'items': 2
                                              },
                                              '576': {
                                                  'items': 3
                                              },
                                              '768': {
                                                  'items': 4
                                              },
                                              '992': {
                                                  'items': 4
                                              }
                                          }
                                      }"
                      >
                        <div className="product-default inner-quickview inner-icon">
                          <figure>
                            <a href="demo36-product.html">
                              <img
                                src="/assets/images/demoes/demo36/products/product-18.jpg"
                                width={239}
                                height={239}
                                alt="product"
                              />
                            </a>
                            <div className="btn-icon-group">
                              <a
                                href="#"
                                className="btn-icon btn-add-cart product-type-simple"
                              >
                                <i className="icon-shopping-cart" />
                              </a>
                            </div>
                            <a
                              href="ajax/product-quick-view.html"
                              className="btn-quickview"
                              title="Quick View"
                            >
                              Quick View
                            </a>
                          </figure>
                          <div className="product-details">
                            <div className="category-wrap">
                              <div className="category-list">
                                <a
                                  href="demo36-shop.html"
                                  className="product-category"
                                >
                                  category
                                </a>
                              </div>
                              <a href="wishlist.html" className="btn-icon-wish">
                                <i className="icon-heart" />
                              </a>
                            </div>
                            <h3 className="product-title">
                              <a href="demo36-product.html">Brown Arm Chair</a>
                            </h3>
                            <div className="ratings-container">
                              <div className="product-ratings">
                                <span
                                  className="ratings"
                                  style={{ width: "100%" }}
                                />
                                {/* End .ratings */}
                                <span className="tooltiptext tooltip-top" />
                              </div>
                              {/* End .product-ratings */}
                            </div>
                            {/* End .product-container */}
                            <div className="price-box">
                              <span className="old-price">$29.00</span>
                              <span className="product-price">$19.00</span>
                            </div>
                            {/* End .price-box */}
                          </div>
                          {/* End .product-details */}
                        </div>
                        <div className="product-default inner-quickview inner-icon">
                          <figure>
                            <a href="demo36-product.html">
                              <img
                                src="/assets/images/demoes/demo36/products/product-19.jpg"
                                width={239}
                                height={239}
                                alt="product"
                              />
                            </a>
                            <div className="btn-icon-group">
                              <a
                                href="#"
                                className="btn-icon btn-add-cart product-type-simple"
                              >
                                <i className="icon-shopping-cart" />
                              </a>
                            </div>
                            <a
                              href="ajax/product-quick-view.html"
                              className="btn-quickview"
                              title="Quick View"
                            >
                              Quick View
                            </a>
                          </figure>
                          <div className="product-details">
                            <div className="category-wrap">
                              <div className="category-list">
                                <a
                                  href="demo36-shop.html"
                                  className="product-category"
                                >
                                  category
                                </a>
                              </div>
                              <a href="wishlist.html" className="btn-icon-wish">
                                <i className="icon-heart" />
                              </a>
                            </div>
                            <h3 className="product-title">
                              <a href="demo36-product.html">Coffee Cup</a>
                            </h3>
                            <div className="ratings-container">
                              <div className="product-ratings">
                                <span
                                  className="ratings"
                                  style={{ width: "100%" }}
                                />
                                {/* End .ratings */}
                                <span className="tooltiptext tooltip-top" />
                              </div>
                              {/* End .product-ratings */}
                            </div>
                            {/* End .product-container */}
                            <div className="price-box">
                              <span className="old-price">$29.00</span>
                              <span className="product-price">$19.00</span>
                            </div>
                            {/* End .price-box */}
                          </div>
                          {/* End .product-details */}
                        </div>
                        <div className="product-default inner-quickview inner-icon">
                          <figure>
                            <a href="demo36-product.html">
                              <img
                                src="/assets/images/demoes/demo36/products/product-20.jpg"
                                width={239}
                                height={239}
                                alt="product"
                              />
                            </a>
                            <div className="btn-icon-group">
                              <a
                                href="#"
                                className="btn-icon btn-add-cart product-type-simple"
                              >
                                <i className="icon-shopping-cart" />
                              </a>
                            </div>
                            <a
                              href="ajax/product-quick-view.html"
                              className="btn-quickview"
                              title="Quick View"
                            >
                              Quick View
                            </a>
                          </figure>
                          <div className="product-details">
                            <div className="category-wrap">
                              <div className="category-list">
                                <a
                                  href="demo36-shop.html"
                                  className="product-category"
                                >
                                  category
                                </a>
                              </div>
                              <a href="wishlist.html" className="btn-icon-wish">
                                <i className="icon-heart" />
                              </a>
                            </div>
                            <h3 className="product-title">
                              <a href="demo36-product.html">White Sofa</a>
                            </h3>
                            <div className="ratings-container">
                              <div className="product-ratings">
                                <span
                                  className="ratings"
                                  style={{ width: "100%" }}
                                />
                                {/* End .ratings */}
                                <span className="tooltiptext tooltip-top" />
                              </div>
                              {/* End .product-ratings */}
                            </div>
                            {/* End .product-container */}
                            <div className="price-box">
                              <span className="old-price">$29.00</span>
                              <span className="product-price">$19.00</span>
                            </div>
                            {/* End .price-box */}
                          </div>
                          {/* End .product-details */}
                        </div>
                        <div className="product-default inner-quickview inner-icon">
                          <figure>
                            <a href="demo36-product.html">
                              <img
                                src="/assets/images/demoes/demo36/products/product-21.jpg"
                                width={239}
                                height={239}
                                alt="product"
                              />
                            </a>
                            <div className="btn-icon-group">
                              <a
                                href="#"
                                className="btn-icon btn-add-cart product-type-simple"
                              >
                                <i className="icon-shopping-cart" />
                              </a>
                            </div>
                            <a
                              href="ajax/product-quick-view.html"
                              className="btn-quickview"
                              title="Quick View"
                            >
                              Quick View
                            </a>
                          </figure>
                          <div className="product-details">
                            <div className="category-wrap">
                              <div className="category-list">
                                <a
                                  href="demo36-shop.html"
                                  className="product-category"
                                >
                                  category
                                </a>
                              </div>
                              <a href="wishlist.html" className="btn-icon-wish">
                                <i className="icon-heart" />
                              </a>
                            </div>
                            <h3 className="product-title">
                              <a href="demo36-product.html">Wooden Chair</a>
                            </h3>
                            <div className="ratings-container">
                              <div className="product-ratings">
                                <span
                                  className="ratings"
                                  style={{ width: "100%" }}
                                />
                                {/* End .ratings */}
                                <span className="tooltiptext tooltip-top" />
                              </div>
                              {/* End .product-ratings */}
                            </div>
                            {/* End .product-container */}
                            <div className="price-box">
                              <span className="old-price">$29.00</span>
                              <span className="product-price">$19.00</span>
                            </div>
                            {/* End .price-box */}
                          </div>
                          {/* End .product-details */}
                        </div>
                      </div>
                      {/* End .products-slider */}
                    </div>
                    <div
                      className="tab-pane fade"
                      id="new"
                      role="tabpanel"
                      aria-labelledby="new-tab"
                    >
                      <div
                        className="products-slider owl-carousel nav-circle owl-theme pb-0"
                        data-owl-options="{
                                          'margin': 1,
                                          'dots': false,
                                          'nav': true,
                                          'navText': [ '<i class=icon-left-open-big>', '<i class=icon-right-open-big>' ],
                                          'loop': false,
                                          'responsive': {
                                              '0': {
                                                  'items': 2
                                              },
                                              '576': {
                                                  'items': 3
                                              },
                                              '768': {
                                                  'items': 4
                                              },
                                              '992': {
                                                  'items': 4
                                              }
                                          }
                                      }"
                      >
                        <div className="product-default inner-quickview inner-icon">
                          <figure>
                            <a href="demo36-product.html">
                              <img
                                src="/assets/images/demoes/demo36/products/product-19.jpg"
                                width={239}
                                height={239}
                                alt="product"
                              />
                            </a>
                            <div className="btn-icon-group">
                              <a
                                href="#"
                                className="btn-icon btn-add-cart product-type-simple"
                              >
                                <i className="icon-shopping-cart" />
                              </a>
                            </div>
                            <a
                              href="ajax/product-quick-view.html"
                              className="btn-quickview"
                              title="Quick View"
                            >
                              Quick View
                            </a>
                          </figure>
                          <div className="product-details">
                            <div className="category-wrap">
                              <div className="category-list">
                                <a
                                  href="demo36-shop.html"
                                  className="product-category"
                                >
                                  category
                                </a>
                              </div>
                              <a href="wishlist.html" className="btn-icon-wish">
                                <i className="icon-heart" />
                              </a>
                            </div>
                            <h3 className="product-title">
                              <a href="demo36-product.html">Coffee Cup</a>
                            </h3>
                            <div className="ratings-container">
                              <div className="product-ratings">
                                <span
                                  className="ratings"
                                  style={{ width: "100%" }}
                                />
                                {/* End .ratings */}
                                <span className="tooltiptext tooltip-top" />
                              </div>
                              {/* End .product-ratings */}
                            </div>
                            {/* End .product-container */}
                            <div className="price-box">
                              <span className="old-price">$29.00</span>
                              <span className="product-price">$19.00</span>
                            </div>
                            {/* End .price-box */}
                          </div>
                          {/* End .product-details */}
                        </div>
                        <div className="product-default inner-quickview inner-icon">
                          <figure>
                            <a href="demo36-product.html">
                              <img
                                src="/assets/images/demoes/demo36/products/product-20.jpg"
                                width={239}
                                height={239}
                                alt="product"
                              />
                            </a>
                            <div className="btn-icon-group">
                              <a
                                href="#"
                                className="btn-icon btn-add-cart product-type-simple"
                              >
                                <i className="icon-shopping-cart" />
                              </a>
                            </div>
                            <a
                              href="ajax/product-quick-view.html"
                              className="btn-quickview"
                              title="Quick View"
                            >
                              Quick View
                            </a>
                          </figure>
                          <div className="product-details">
                            <div className="category-wrap">
                              <div className="category-list">
                                <a
                                  href="demo36-shop.html"
                                  className="product-category"
                                >
                                  category
                                </a>
                              </div>
                              <a href="wishlist.html" className="btn-icon-wish">
                                <i className="icon-heart" />
                              </a>
                            </div>
                            <h3 className="product-title">
                              <a href="demo36-product.html">White Sofa</a>
                            </h3>
                            <div className="ratings-container">
                              <div className="product-ratings">
                                <span
                                  className="ratings"
                                  style={{ width: "100%" }}
                                />
                                {/* End .ratings */}
                                <span className="tooltiptext tooltip-top" />
                              </div>
                              {/* End .product-ratings */}
                            </div>
                            {/* End .product-container */}
                            <div className="price-box">
                              <span className="old-price">$29.00</span>
                              <span className="product-price">$19.00</span>
                            </div>
                            {/* End .price-box */}
                          </div>
                          {/* End .product-details */}
                        </div>
                        <div className="product-default inner-quickview inner-icon">
                          <figure>
                            <a href="demo36-product.html">
                              <img
                                src="/assets/images/demoes/demo36/products/product-21.jpg"
                                width={239}
                                height={239}
                                alt="product"
                              />
                            </a>
                            <div className="btn-icon-group">
                              <a
                                href="#"
                                className="btn-icon btn-add-cart product-type-simple"
                              >
                                <i className="icon-shopping-cart" />
                              </a>
                            </div>
                            <a
                              href="ajax/product-quick-view.html"
                              className="btn-quickview"
                              title="Quick View"
                            >
                              Quick View
                            </a>
                          </figure>
                          <div className="product-details">
                            <div className="category-wrap">
                              <div className="category-list">
                                <a
                                  href="demo36-shop.html"
                                  className="product-category"
                                >
                                  category
                                </a>
                              </div>
                              <a href="wishlist.html" className="btn-icon-wish">
                                <i className="icon-heart" />
                              </a>
                            </div>
                            <h3 className="product-title">
                              <a href="demo36-product.html">Wooden Chair</a>
                            </h3>
                            <div className="ratings-container">
                              <div className="product-ratings">
                                <span
                                  className="ratings"
                                  style={{ width: "100%" }}
                                />
                                {/* End .ratings */}
                                <span className="tooltiptext tooltip-top" />
                              </div>
                              {/* End .product-ratings */}
                            </div>
                            {/* End .product-container */}
                            <div className="price-box">
                              <span className="old-price">$29.00</span>
                              <span className="product-price">$19.00</span>
                            </div>
                            {/* End .price-box */}
                          </div>
                          {/* End .product-details */}
                        </div>
                      </div>
                      {/* End .products-slider */}
                    </div>
                    <div
                      className="tab-pane fade"
                      id="best"
                      role="tabpanel"
                      aria-labelledby="best-tab"
                    >
                      <div
                        className="products-slider owl-carousel nav-circle owl-theme"
                        data-owl-options="{
                                          'margin': 1,
                                          'dots': false,
                                          'nav': true,
                                          'navText': [ '<i class=icon-left-open-big>', '<i class=icon-right-open-big>' ],
                                          'loop': false,
                                          'responsive': {
                                              '0': {
                                                  'items': 2
                                              },
                                              '576': {
                                                  'items': 3
                                              },
                                              '768': {
                                                  'items': 4
                                              },
                                              '992': {
                                                  'items': 4
                                              }
                                          }
                                      }"
                      >
                        <div className="product-default inner-quickview inner-icon">
                          <figure>
                            <a href="demo36-product.html">
                              <img
                                src="/assets/images/demoes/demo36/products/product-20.jpg"
                                width={239}
                                height={239}
                                alt="product"
                              />
                            </a>
                            <div className="btn-icon-group">
                              <a
                                href="#"
                                className="btn-icon btn-add-cart product-type-simple"
                              >
                                <i className="icon-shopping-cart" />
                              </a>
                            </div>
                            <a
                              href="ajax/product-quick-view.html"
                              className="btn-quickview"
                              title="Quick View"
                            >
                              Quick View
                            </a>
                          </figure>
                          <div className="product-details">
                            <div className="category-wrap">
                              <div className="category-list">
                                <a
                                  href="demo36-shop.html"
                                  className="product-category"
                                >
                                  category
                                </a>
                              </div>
                              <a href="wishlist.html" className="btn-icon-wish">
                                <i className="icon-heart" />
                              </a>
                            </div>
                            <h3 className="product-title">
                              <a href="demo36-product.html">White Sofa</a>
                            </h3>
                            <div className="ratings-container">
                              <div className="product-ratings">
                                <span
                                  className="ratings"
                                  style={{ width: "100%" }}
                                />
                                {/* End .ratings */}
                                <span className="tooltiptext tooltip-top" />
                              </div>
                              {/* End .product-ratings */}
                            </div>
                            {/* End .product-container */}
                            <div className="price-box">
                              <span className="old-price">$29.00</span>
                              <span className="product-price">$19.00</span>
                            </div>
                            {/* End .price-box */}
                          </div>
                          {/* End .product-details */}
                        </div>
                      </div>
                      {/* End .products-slider */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-xl-3cols">
                <div className="products-widget-container bg-white">
                  <h2 className="section-title d-flex align-items-center text-transform-none">
                    <i className="icon-percent-shape" />
                    Special Offers
                  </h2>
                  <div className="product-countdown-container custom-product-countdown bg-white">
                    <span className="product-countdown-title ls-10">
                      offer ends in:
                    </span>
                    <div
                      className="product-countdown countdown-compact"
                      data-until="2021, 10, 5"
                      data-compact="true"
                    ></div>
                    {/* End .product-countdown */}
                  </div>
                  {/* End .product-countdown-container */}
                  <div className="row">
                    <div className="col-xl-12 col-md-4 col-sm-6">
                      <div className="product-default left-details product-widget">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/small/product-1.jpg"
                              width={84}
                              height={84}
                              alt="product"
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-title">
                            {" "}
                            <a href="demo36-product.html">PT Speaker</a>{" "}
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="product-price">$49.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                    <div className="col-xl-12 col-md-4 col-sm-6">
                      <div className="product-default left-details product-widget">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/small/product-2.jpg"
                              width={84}
                              height={84}
                              alt="product"
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-title">
                            {" "}
                            <a href="demo36-product.html">
                              Beats Solo HD Drenched
                            </a>{" "}
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top">
                                5.00
                              </span>
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="product-price">$49.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                    <div className="col-xl-12 col-md-4 col-sm-6">
                      <div className="product-default left-details product-widget">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/small/product-3.jpg"
                              width={84}
                              height={84}
                              alt="product"
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-title">
                            {" "}
                            <a href="demo36-product.html">
                              Palm Print Jacket
                            </a>{" "}
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="product-price">$49.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                    <div className="col-xl-12 col-md-4 col-sm-6">
                      <div className="product-default left-details product-widget">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/small/product-4.jpg"
                              width={84}
                              height={84}
                              alt="product"
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-title">
                            {" "}
                            <a href="demo36-product.html">Camera</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top">
                                5.00
                              </span>
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="product-price">$49.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                    <div className="col-xl-12 col-md-4 col-sm-6">
                      <div className="product-default left-details product-widget">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/small/product-5.jpg"
                              width={84}
                              height={84}
                              alt="product"
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-title">
                            {" "}
                            <a href="demo36-product.html">Red Football</a>{" "}
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="product-price">$49.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                    <div className="col-xl-12 col-md-4 col-sm-6">
                      <div className=" product-default left-details product-widget">
                        <figure>
                          <a href="demo36-product.html">
                            <img
                              src="/assets/images/demoes/demo36/products/small/product-6.jpg"
                              width={84}
                              height={84}
                              alt="product"
                            />
                          </a>
                        </figure>
                        <div className="product-details">
                          <h3 className="product-title">
                            {" "}
                            <a href="demo36-product.html">Soft Hat</a>{" "}
                          </h3>
                          <div className="ratings-container">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "100%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top">
                                5.00
                              </span>
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          {/* End .product-container */}
                          <div className="price-box">
                            <span className="product-price">$49.00</span>
                          </div>
                          {/* End .price-box */}
                        </div>
                        {/* End .product-details */}
                      </div>
                    </div>
                  </div>
                  <a className="view-all" href="demo36-shop.html">
                    View All
                    <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="brands-section mt-2 mb-3 "
            data-animation-delay={200}
            data-animation-name="fadeIn"
            data-animation-duration={1000}
          >
            <div className="headding">
              <h4 className="section-title text-transform-none">
                Featured Brands
              </h4>
            </div>
            <div
              className="brands-slider owl-carousel bg-white owl-theme nav-circle images-center"
              data-owl-options="{
                          'margin': 1,
                          'navText': [ '<i class=icon-left-open-big>', '<i class=icon-right-open-big>' ],
                          'nav': true
                      }"
            >
              <figure>
                <img
                  src="/assets/images/brands/small/brand1.png"
                  width={140}
                  height={60}
                  alt="brand"
                />
              </figure>
              <figure>
                <img
                  src="/assets/images/brands/small/brand2.png"
                  width={140}
                  height={60}
                  alt="brand"
                />
              </figure>
              <figure>
                <img
                  src="/assets/images/brands/small/brand3.png"
                  width={140}
                  height={60}
                  alt="brand"
                />
              </figure>
              <figure>
                <img
                  src="/assets/images/brands/small/brand4.png"
                  width={140}
                  height={60}
                  alt="brand"
                />
              </figure>
              <figure>
                <img
                  src="/assets/images/brands/small/brand5.png"
                  width={140}
                  height={60}
                  alt="brand"
                />
              </figure>
              <figure>
                <img
                  src="/assets/images/brands/small/brand6.png"
                  width={140}
                  height={60}
                  alt="brand"
                />
              </figure>
              <figure>
                <img
                  src="/assets/images/brands/small/brand4.png"
                  width={140}
                  height={60}
                  alt="brand"
                />
              </figure>
            </div>
            {/* End .brands-slider */}
          </div>
          <div
            className="product-slider-tab selected-products-section  bg-white"
            data-animation-name="fadeIn"
            data-animation-delay={100}
          >
            <div className="heading shop-list d-flex flex-lg-row flex-column align-items-lg-center bg-gray mb-0 pl-0 pr-0 pt-2">
              <h4 className="section-title text-transform-none mb-0 ml-0">
                Selected Products
              </h4>
              <ul
                className="nav justify-content-lg-center mb-0"
                id="myTab-two"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="seller-two-tab"
                    data-toggle="tab"
                    href="#seller-two"
                    role="tab"
                    aria-controls="seller-two"
                    aria-selected="true"
                  >
                    Best Sellers
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="new-two-tab"
                    data-toggle="tab"
                    href="#new-two"
                    role="tab"
                    aria-controls="new-two"
                    aria-selected="false"
                  >
                    New Arrivals
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="best-two-tab"
                    data-toggle="tab"
                    href="#best-two"
                    role="tab"
                    aria-controls="best-two"
                    aria-selected="false"
                  >
                    Best Ratings
                  </a>
                </li>
              </ul>
              <a className="view-all ml-auto" href="demo36-shop.html">
                View All
                <i className="fas fa-long-arrow-alt-right" />
              </a>
            </div>
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="seller-two"
                role="tabpanel"
                aria-labelledby="seller-two-tab"
              >
                <div
                  className="products-slider owl-carousel nav-circle carousel-with-bg owl-theme pb-0"
                  data-owl-options="{
                          'margin': 1,
                          'dots': false,
                          'nav': true,
                          'navText': [ '<i class=icon-left-open-big>', '<i class=icon-right-open-big>' ],
                          'loop': false,
                          'responsive': {
                              '0': {
                                  'items': 2
                              },
                              '576': {
                                  'items': 3
                              },
                              '768': {
                                  'items': 4
                              },
                              '992': {
                                  'items': 5
                              },
                              '1200': {
                                  'items': 6
                              }
                          }
                      }"
                >
                  <div className="product-default inner-quickview inner-icon">
                    <figure>
                      <a href="demo36-product.html">
                        <img
                          src="/assets/images/demoes/demo36/products/product-16.jpg"
                          width={239}
                          height={239}
                          alt="product"
                        />
                      </a>
                      <div className="btn-icon-group">
                        <a
                          href="#"
                          className="btn-icon btn-add-cart product-type-simple"
                        >
                          <i className="icon-shopping-cart" />
                        </a>
                      </div>
                      <a
                        href="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </a>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <a
                            href="demo36-shop.html"
                            className="product-category"
                          >
                            category
                          </a>
                        </div>
                        <a href="wishlist.html" className="btn-icon-wish">
                          <i className="icon-heart" />
                        </a>
                      </div>
                      <h3 className="product-title">
                        <a href="demo36-product.html">White Brooch</a>
                      </h3>
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span className="ratings" style={{ width: "100%" }} />
                          {/* End .ratings */}
                          <span className="tooltiptext tooltip-top" />
                        </div>
                        {/* End .product-ratings */}
                      </div>
                      {/* End .product-container */}
                      <div className="price-box">
                        <span className="old-price">$29.00</span>
                        <span className="product-price">$19.00</span>
                      </div>
                      {/* End .price-box */}
                    </div>
                    {/* End .product-details */}
                  </div>
                  <div className="product-default inner-quickview inner-icon">
                    <figure>
                      <a href="demo36-product.html">
                        <img
                          src="/assets/images/demoes/demo36/products/product-15.jpg"
                          width={239}
                          height={239}
                          alt="product"
                        />
                      </a>
                      <div className="btn-icon-group">
                        <a
                          href="#"
                          className="btn-icon btn-add-cart product-type-simple"
                        >
                          <i className="icon-shopping-cart" />
                        </a>
                      </div>
                      <a
                        href="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </a>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <a
                            href="demo36-shop.html"
                            className="product-category"
                          >
                            category
                          </a>
                        </div>
                        <a href="wishlist.html" className="btn-icon-wish">
                          <i className="icon-heart" />
                        </a>
                      </div>
                      <h3 className="product-title">
                        <a href="demo36-product.html">Tea bowl</a>
                      </h3>
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span className="ratings" style={{ width: "100%" }} />
                          {/* End .ratings */}
                          <span className="tooltiptext tooltip-top" />
                        </div>
                        {/* End .product-ratings */}
                      </div>
                      {/* End .product-container */}
                      <div className="price-box">
                        <span className="old-price">$29.00</span>
                        <span className="product-price">$19.00</span>
                      </div>
                      {/* End .price-box */}
                    </div>
                    {/* End .product-details */}
                  </div>
                  <div className="product-default inner-quickview inner-icon">
                    <figure>
                      <a href="demo36-product.html">
                        <img
                          src="/assets/images/demoes/demo36/products/product-17.jpg"
                          width={239}
                          height={239}
                          alt="product"
                        />
                      </a>
                      <div className="btn-icon-group">
                        <a
                          href="#"
                          className="btn-icon btn-add-cart product-type-simple"
                        >
                          <i className="icon-shopping-cart" />
                        </a>
                      </div>
                      <a
                        href="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </a>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <a
                            href="demo36-shop.html"
                            className="product-category"
                          >
                            category
                          </a>
                        </div>
                        <a href="wishlist.html" className="btn-icon-wish">
                          <i className="icon-heart" />
                        </a>
                      </div>
                      <h3 className="product-title">
                        <a href="demo36-product.html">White ring</a>
                      </h3>
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span className="ratings" style={{ width: "100%" }} />
                          {/* End .ratings */}
                          <span className="tooltiptext tooltip-top" />
                        </div>
                        {/* End .product-ratings */}
                      </div>
                      {/* End .product-container */}
                      <div className="price-box">
                        <span className="old-price">$29.00</span>
                        <span className="product-price">$19.00</span>
                      </div>
                      {/* End .price-box */}
                    </div>
                    {/* End .product-details */}
                  </div>
                  <div className="product-default inner-quickview inner-icon">
                    <figure>
                      <a href="demo36-product.html">
                        <img
                          src="/assets/images/demoes/demo36/products/product-14.jpg"
                          width={239}
                          height={239}
                          alt="product"
                        />
                      </a>
                      <div className="btn-icon-group">
                        <a
                          href="#"
                          className="btn-icon btn-add-cart product-type-simple"
                        >
                          <i className="icon-shopping-cart" />
                        </a>
                      </div>
                      <a
                        href="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </a>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <a
                            href="demo36-shop.html"
                            className="product-category"
                          >
                            category
                          </a>
                        </div>
                        <a href="wishlist.html" className="btn-icon-wish">
                          <i className="icon-heart" />
                        </a>
                      </div>
                      <h3 className="product-title">
                        <a href="demo36-product.html">PT Cup</a>
                      </h3>
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span className="ratings" style={{ width: "100%" }} />
                          {/* End .ratings */}
                          <span className="tooltiptext tooltip-top" />
                        </div>
                        {/* End .product-ratings */}
                      </div>
                      {/* End .product-container */}
                      <div className="price-box">
                        <span className="old-price">$29.00</span>
                        <span className="product-price">$19.00</span>
                      </div>
                      {/* End .price-box */}
                    </div>
                    {/* End .product-details */}
                  </div>
                  <div className="product-default inner-quickview inner-icon">
                    <figure>
                      <a href="demo36-product.html">
                        <img
                          src="/assets/images/demoes/demo36/products/product-13.jpg"
                          width={239}
                          height={239}
                          alt="product"
                        />
                      </a>
                      <div className="btn-icon-group">
                        <a
                          href="#"
                          className="btn-icon btn-add-cart product-type-simple"
                        >
                          <i className="icon-shopping-cart" />
                        </a>
                      </div>
                      <a
                        href="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </a>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <a
                            href="demo36-shop.html"
                            className="product-category"
                          >
                            category
                          </a>
                        </div>
                        <a href="wishlist.html" className="btn-icon-wish">
                          <i className="icon-heart" />
                        </a>
                      </div>
                      <h3 className="product-title">
                        <a href="demo36-product.html">Belt accessories</a>
                      </h3>
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span className="ratings" style={{ width: "100%" }} />
                          {/* End .ratings */}
                          <span className="tooltiptext tooltip-top" />
                        </div>
                        {/* End .product-ratings */}
                      </div>
                      {/* End .product-container */}
                      <div className="price-box">
                        <span className="old-price">$29.00</span>
                        <span className="product-price">$19.00</span>
                      </div>
                      {/* End .price-box */}
                    </div>
                    {/* End .product-details */}
                  </div>
                  <div className="product-default inner-quickview inner-icon">
                    <figure>
                      <a href="demo36-product.html">
                        <img
                          src="/assets/images/demoes/demo36/products/product-2.jpg"
                          width={239}
                          height={239}
                          alt="product"
                        />
                      </a>
                      <div className="btn-icon-group">
                        <a
                          href="#"
                          className="btn-icon btn-add-cart product-type-simple"
                        >
                          <i className="icon-shopping-cart" />
                        </a>
                      </div>
                      <a
                        href="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </a>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <a
                            href="demo36-shop.html"
                            className="product-category"
                          >
                            category
                          </a>
                        </div>
                        <a href="wishlist.html" className="btn-icon-wish">
                          <i className="icon-heart" />
                        </a>
                      </div>
                      <h3 className="product-title">
                        <a href="demo36-product.html">PT Speaker</a>
                      </h3>
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span className="ratings" style={{ width: "100%" }} />
                          {/* End .ratings */}
                          <span className="tooltiptext tooltip-top" />
                        </div>
                        {/* End .product-ratings */}
                      </div>
                      {/* End .product-container */}
                      <div className="price-box">
                        <span className="old-price">$29.00</span>
                        <span className="product-price">$19.00</span>
                      </div>
                      {/* End .price-box */}
                    </div>
                    {/* End .product-details */}
                  </div>
                  <div className="product-default inner-quickview inner-icon">
                    <figure>
                      <a href="demo36-product.html">
                        <img
                          src="/assets/images/demoes/demo36/products/product-21.jpg"
                          width={239}
                          height={239}
                          alt="product"
                        />
                      </a>
                      <div className="btn-icon-group">
                        <a
                          href="#"
                          className="btn-icon btn-add-cart product-type-simple"
                        >
                          <i className="icon-shopping-cart" />
                        </a>
                      </div>
                      <a
                        href="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </a>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <a
                            href="demo36-shop.html"
                            className="product-category"
                          >
                            category
                          </a>
                        </div>
                        <a href="wishlist.html" className="btn-icon-wish">
                          <i className="icon-heart" />
                        </a>
                      </div>
                      <h3 className="product-title">
                        <a href="demo36-product.html">Wooden Chair</a>
                      </h3>
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span className="ratings" style={{ width: "100%" }} />
                          {/* End .ratings */}
                          <span className="tooltiptext tooltip-top" />
                        </div>
                        {/* End .product-ratings */}
                      </div>
                      {/* End .product-container */}
                      <div className="price-box">
                        <span className="old-price">$29.00</span>
                        <span className="product-price">$19.00</span>
                      </div>
                      {/* End .price-box */}
                    </div>
                    {/* End .product-details */}
                  </div>
                </div>
                {/* End .products-slider */}
              </div>
              <div
                className="tab-pane fade"
                id="new-two"
                role="tabpanel"
                aria-labelledby="new-two-tab"
              >
                <div
                  className="products-slider owl-carousel nav-circle carousel-with-bg owl-theme pb-0"
                  data-owl-options="{
                              'margin': 1,
                              'navText': [ '<i class=icon-left-open-big>', '<i class=icon-right-open-big>' ],
                              'dots': false,
                              'nav': true,
                              'loop': false,
                              'responsive': {
                                  '0': {
                                      'items': 2
                                  },
                                  '576': {
                                      'items': 3
                                  },
                                  '768': {
                                      'items': 4
                                  },
                                  '992': {
                                      'items': 5
                                  },
                                  '1200': {
                                      'items': 6
                                  }
                              }
                          }"
                >
                  <div className="product-default inner-quickview inner-icon">
                    <figure>
                      <a href="demo36-product.html">
                        <img
                          src="/assets/images/demoes/demo36/products/product-14.jpg"
                          width={239}
                          height={239}
                          alt="product"
                        />
                      </a>
                      <div className="btn-icon-group">
                        <a
                          href="#"
                          className="btn-icon btn-add-cart product-type-simple"
                        >
                          <i className="icon-shopping-cart" />
                        </a>
                      </div>
                      <a
                        href="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </a>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <a
                            href="demo36-shop.html"
                            className="product-category"
                          >
                            category
                          </a>
                        </div>
                        <a href="wishlist.html" className="btn-icon-wish">
                          <i className="icon-heart" />
                        </a>
                      </div>
                      <h3 className="product-title">
                        <a href="demo36-product.html">PT Cup</a>
                      </h3>
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span className="ratings" style={{ width: "100%" }} />
                          {/* End .ratings */}
                          <span className="tooltiptext tooltip-top" />
                        </div>
                        {/* End .product-ratings */}
                      </div>
                      {/* End .product-container */}
                      <div className="price-box">
                        <span className="old-price">$29.00</span>
                        <span className="product-price">$19.00</span>
                      </div>
                      {/* End .price-box */}
                    </div>
                    {/* End .product-details */}
                  </div>
                  <div className="product-default inner-quickview inner-icon">
                    <figure>
                      <a href="demo36-product.html">
                        <img
                          src="/assets/images/demoes/demo36/products/product-13.jpg"
                          width={239}
                          height={239}
                          alt="product"
                        />
                      </a>
                      <div className="btn-icon-group">
                        <a
                          href="#"
                          className="btn-icon btn-add-cart product-type-simple"
                        >
                          <i className="icon-shopping-cart" />
                        </a>
                      </div>
                      <a
                        href="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </a>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <a
                            href="demo36-shop.html"
                            className="product-category"
                          >
                            category
                          </a>
                        </div>
                        <a href="wishlist.html" className="btn-icon-wish">
                          <i className="icon-heart" />
                        </a>
                      </div>
                      <h3 className="product-title">
                        <a href="demo36-product.html">Belt accessories</a>
                      </h3>
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span className="ratings" style={{ width: "100%" }} />
                          {/* End .ratings */}
                          <span className="tooltiptext tooltip-top" />
                        </div>
                        {/* End .product-ratings */}
                      </div>
                      {/* End .product-container */}
                      <div className="price-box">
                        <span className="old-price">$29.00</span>
                        <span className="product-price">$19.00</span>
                      </div>
                      {/* End .price-box */}
                    </div>
                    {/* End .product-details */}
                  </div>
                  <div className="product-default inner-quickview inner-icon">
                    <figure>
                      <a href="demo36-product.html">
                        <img
                          src="/assets/images/demoes/demo36/products/product-2.jpg"
                          width={239}
                          height={239}
                          alt="product"
                        />
                      </a>
                      <div className="btn-icon-group">
                        <a
                          href="#"
                          className="btn-icon btn-add-cart product-type-simple"
                        >
                          <i className="icon-shopping-cart" />
                        </a>
                      </div>
                      <a
                        href="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </a>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <a
                            href="demo36-shop.html"
                            className="product-category"
                          >
                            category
                          </a>
                        </div>
                        <a href="wishlist.html" className="btn-icon-wish">
                          <i className="icon-heart" />
                        </a>
                      </div>
                      <h3 className="product-title">
                        <a href="demo36-product.html">PT Speaker</a>
                      </h3>
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span className="ratings" style={{ width: "100%" }} />
                          {/* End .ratings */}
                          <span className="tooltiptext tooltip-top" />
                        </div>
                        {/* End .product-ratings */}
                      </div>
                      {/* End .product-container */}
                      <div className="price-box">
                        <span className="old-price">$29.00</span>
                        <span className="product-price">$19.00</span>
                      </div>
                      {/* End .price-box */}
                    </div>
                    {/* End .product-details */}
                  </div>
                  <div className="product-default inner-quickview inner-icon">
                    <figure>
                      <a href="demo36-product.html">
                        <img
                          src="/assets/images/demoes/demo36/products/product-21.jpg"
                          width={239}
                          height={239}
                          alt="product"
                        />
                      </a>
                      <div className="btn-icon-group">
                        <a
                          href="#"
                          className="btn-icon btn-add-cart product-type-simple"
                        >
                          <i className="icon-shopping-cart" />
                        </a>
                      </div>
                      <a
                        href="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </a>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <a
                            href="demo36-shop.html"
                            className="product-category"
                          >
                            category
                          </a>
                        </div>
                        <a href="wishlist.html" className="btn-icon-wish">
                          <i className="icon-heart" />
                        </a>
                      </div>
                      <h3 className="product-title">
                        <a href="demo36-product.html">Wooden Chair</a>
                      </h3>
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span className="ratings" style={{ width: "100%" }} />
                          {/* End .ratings */}
                          <span className="tooltiptext tooltip-top" />
                        </div>
                        {/* End .product-ratings */}
                      </div>
                      {/* End .product-container */}
                      <div className="price-box">
                        <span className="old-price">$29.00</span>
                        <span className="product-price">$19.00</span>
                      </div>
                      {/* End .price-box */}
                    </div>
                    {/* End .product-details */}
                  </div>
                </div>
                {/* End .products-slider */}
              </div>
              <div
                className="tab-pane fade"
                id="best-two"
                role="tabpanel"
                aria-labelledby="best-tab"
              >
                <div
                  className="products-slider owl-carousel nav-circle carousel-with-bg owl-theme"
                  data-owl-options="{
                              'margin': 1,
                              'dots': false,
                              'navText': [ '<i class=icon-left-open-big>', '<i class=icon-right-open-big>' ],
                              'nav': true,
                              'loop': false,
                              'responsive': {
                                  '0': {
                                      'items': 2
                                  },
                                  '576': {
                                      'items': 3
                                  },
                                  '768': {
                                      'items': 4
                                  },
                                  '992': {
                                      'items': 5
                                  },
                                  '1200': {
                                      'items': 6
                                  }
                              }
                          }"
                >
                  <div className="product-default inner-quickview inner-icon">
                    <figure>
                      <a href="demo36-product.html">
                        <img
                          src="/assets/images/demoes/demo36/products/product-20.jpg"
                          width={239}
                          height={239}
                          alt="product"
                        />
                      </a>
                      <div className="btn-icon-group">
                        <a
                          href="#"
                          className="btn-icon btn-add-cart product-type-simple"
                        >
                          <i className="icon-shopping-cart" />
                        </a>
                      </div>
                      <a
                        href="ajax/product-quick-view.html"
                        className="btn-quickview"
                        title="Quick View"
                      >
                        Quick View
                      </a>
                    </figure>
                    <div className="product-details">
                      <div className="category-wrap">
                        <div className="category-list">
                          <a
                            href="demo36-shop.html"
                            className="product-category"
                          >
                            category
                          </a>
                        </div>
                        <a href="wishlist.html" className="btn-icon-wish">
                          <i className="icon-heart" />
                        </a>
                      </div>
                      <h3 className="product-title">
                        <a href="demo36-product.html">White Sofa</a>
                      </h3>
                      <div className="ratings-container">
                        <div className="product-ratings">
                          <span className="ratings" style={{ width: "100%" }} />
                          {/* End .ratings */}
                          <span className="tooltiptext tooltip-top" />
                        </div>
                        {/* End .product-ratings */}
                      </div>
                      {/* End .product-container */}
                      <div className="price-box">
                        <span className="old-price">$29.00</span>
                        <span className="product-price">$19.00</span>
                      </div>
                      {/* End .price-box */}
                    </div>
                    {/* End .product-details */}
                  </div>
                </div>
                {/* End .products-slider */}
              </div>
            </div>
          </div>
          <div
            className="top-notice bg-dark text-white  top-notice-bg "
            data-animation-name="fadeIn"
            data-animation-delay={100}
          >
            <div className="container text-center d-flex align-items-center justify-content-center flex-column flex-xl-row ">
              <img
                src="/assets/images/demoes/demo36/shop-logo.png"
                width={116}
                height={23}
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
            {/* End .container */}
          </div>
          {/* End .top-notice */}
          <div
            className="recent-products-section "
            data-animation-name="fadeIn"
            data-animation-delay={100}
          >
            <div className="heading shop-list d-flex align-items-center flex-wrap bg-gray mb-0 pl-0 pr-0">
              <h4 className="section-title text-transform-none mb-0 mr-0">
                Recently Viewed Products
              </h4>
              <a className="view-all ml-auto" href="demo36-shop.html">
                View All
                <i className="fas fa-long-arrow-alt-right" />
              </a>
            </div>
            <div
              className="products-slider owl-carousel owl-theme carousel-with-bg nav-circle pb-0"
              data-owl-options="{
                      'margin': 1,
                      'navText': [ '<i class=icon-left-open-big>', '<i class=icon-right-open-big>' ],
                      'dots': false,
                      'nav': true,
                      'loop': false,
                      'responsive': {
                          '0': {
                              'items': 2
                          },
                          '576': {
                              'items': 3
                          },
                          '768': {
                              'items': 4
                          },
                          '992': {
                              'items': 5
                          },
                          '1200': {
                              'items': 6
                          }
                      }
                  }"
            >
              <div className="product-default inner-quickview inner-icon">
                <figure>
                  <a href="demo36-product.html">
                    <img
                      src="/assets/images/demoes/demo36/products/product-1.jpg"
                      width={239}
                      height={239}
                      alt="product"
                    />
                  </a>
                  <div className="btn-icon-group">
                    <a
                      href="#"
                      title="Add To Cart"
                      className="btn-icon btn-add-cart product-type-simple"
                    >
                      <i className="icon-shopping-cart" />
                    </a>
                  </div>
                  <a
                    href="ajax/product-quick-view.html"
                    className="btn-quickview"
                    title="Quick View"
                  >
                    Quick View
                  </a>
                </figure>
                <div className="product-details">
                  <div className="category-wrap">
                    <div className="category-list">
                      <a href="demo36-shop.html" className="product-category">
                        category
                      </a>
                    </div>
                    <a
                      href="wishlist.html"
                      title="Add to Wishlist"
                      className="btn-icon-wish"
                    >
                      <i className="icon-heart" />
                    </a>
                  </div>
                  <h3 className="product-title">
                    <a href="demo36-product.html">Drone Pro</a>
                  </h3>
                  <div className="ratings-container">
                    <div className="product-ratings">
                      <span className="ratings" style={{ width: "100%" }} />
                      {/* End .ratings */}
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    {/* End .product-ratings */}
                  </div>
                  {/* End .product-container */}
                  <div className="price-box">
                    <span className="old-price">$29.00</span>
                    <span className="product-price">$19.00</span>
                  </div>
                  {/* End .price-box */}
                </div>
                {/* End .product-details */}
              </div>
              <div className="product-default inner-quickview inner-icon">
                <figure>
                  <a href="demo36-product.html">
                    <img
                      src="/assets/images/demoes/demo36/products/product-8.jpg"
                      width={239}
                      height={239}
                      alt="product"
                    />
                  </a>
                  <div className="btn-icon-group">
                    <a
                      href="#"
                      title="Add To Cart"
                      className="btn-icon btn-add-cart product-type-simple"
                    >
                      <i className="icon-shopping-cart" />
                    </a>
                  </div>
                  <a
                    href="ajax/product-quick-view.html"
                    className="btn-quickview"
                    title="Quick View"
                  >
                    Quick View
                  </a>
                </figure>
                <div className="product-details">
                  <div className="category-wrap">
                    <div className="category-list">
                      <a href="demo36-shop.html" className="product-category">
                        category
                      </a>
                    </div>
                    <a
                      href="wishlist.html"
                      title="Add to Wishlist"
                      className="btn-icon-wish"
                    >
                      <i className="icon-heart" />
                    </a>
                  </div>
                  <h3 className="product-title">
                    <a href="demo36-product.html">PT Bag</a>
                  </h3>
                  <div className="ratings-container">
                    <div className="product-ratings">
                      <span className="ratings" style={{ width: "100%" }} />
                      {/* End .ratings */}
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    {/* End .product-ratings */}
                  </div>
                  {/* End .product-container */}
                  <div className="price-box">
                    <span className="old-price">$29.00</span>
                    <span className="product-price">$19.00</span>
                  </div>
                  {/* End .price-box */}
                </div>
                {/* End .product-details */}
              </div>
              <div className="product-default inner-quickview inner-icon">
                <figure>
                  <a href="demo36-product.html">
                    <img
                      src="/assets/images/demoes/demo36/products/product-7.jpg"
                      width={239}
                      height={239}
                      alt="product"
                    />
                  </a>
                  <div className="btn-icon-group">
                    <a
                      href="#"
                      title="Add To Cart"
                      className="btn-icon btn-add-cart product-type-simple"
                    >
                      <i className="icon-shopping-cart" />
                    </a>
                  </div>
                  <a
                    href="ajax/product-quick-view.html"
                    className="btn-quickview"
                    title="Quick View"
                  >
                    Quick View
                  </a>
                </figure>
                <div className="product-details">
                  <div className="category-wrap">
                    <div className="category-list">
                      <a href="demo36-shop.html" className="product-category">
                        category
                      </a>
                    </div>
                    <a
                      href="wishlist.html"
                      title="Add to Wishlist"
                      className="btn-icon-wish"
                    >
                      <i className="icon-heart" />
                    </a>
                  </div>
                  <h3 className="product-title">
                    <a href="demo36-product.html">Soft Hat</a>
                  </h3>
                  <div className="ratings-container">
                    <div className="product-ratings">
                      <span className="ratings" style={{ width: "100%" }} />
                      {/* End .ratings */}
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    {/* End .product-ratings */}
                  </div>
                  {/* End .product-container */}
                  <div className="price-box">
                    <span className="old-price">$29.00</span>
                    <span className="product-price">$19.00</span>
                  </div>
                  {/* End .price-box */}
                </div>
                {/* End .product-details */}
              </div>
              <div className="product-default inner-quickview inner-icon">
                <figure>
                  <a href="demo36-product.html">
                    <img
                      src="/assets/images/demoes/demo36/products/product-17.jpg"
                      width={239}
                      height={239}
                      alt="product"
                    />
                  </a>
                  <div className="btn-icon-group">
                    <a
                      href="#"
                      title="Add To Cart"
                      className="btn-icon btn-add-cart product-type-simple"
                    >
                      <i className="icon-shopping-cart" />
                    </a>
                  </div>
                  <a
                    href="ajax/product-quick-view.html"
                    className="btn-quickview"
                    title="Quick View"
                  >
                    Quick View
                  </a>
                </figure>
                <div className="product-details">
                  <div className="category-wrap">
                    <div className="category-list">
                      <a href="demo36-shop.html" className="product-category">
                        category
                      </a>
                    </div>
                    <a
                      href="wishlist.html"
                      title="Add to Wishlist"
                      className="btn-icon-wish"
                    >
                      <i className="icon-heart" />
                    </a>
                  </div>
                  <h3 className="product-title">
                    <a href="demo36-product.html">White ring</a>
                  </h3>
                  <div className="ratings-container">
                    <div className="product-ratings">
                      <span className="ratings" style={{ width: "100%" }} />
                      {/* End .ratings */}
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    {/* End .product-ratings */}
                  </div>
                  {/* End .product-container */}
                  <div className="price-box">
                    <span className="old-price">$29.00</span>
                    <span className="product-price">$19.00</span>
                  </div>
                  {/* End .price-box */}
                </div>
                {/* End .product-details */}
              </div>
              <div className="product-default inner-quickview inner-icon">
                <figure>
                  <a href="demo36-product.html">
                    <img
                      src="/assets/images/demoes/demo36/products/product-10.jpg"
                      width={239}
                      height={239}
                      alt="product"
                    />
                  </a>
                  <div className="btn-icon-group">
                    <a
                      href="#"
                      title="Add To Cart"
                      className="btn-icon btn-add-cart product-type-simple"
                    >
                      <i className="icon-shopping-cart" />
                    </a>
                  </div>
                  <a
                    href="ajax/product-quick-view.html"
                    className="btn-quickview"
                    title="Quick View"
                  >
                    Quick View
                  </a>
                </figure>
                <div className="product-details">
                  <div className="category-wrap">
                    <div className="category-list">
                      <a href="demo36-shop.html" className="product-category">
                        category
                      </a>
                    </div>
                    <a
                      href="wishlist.html"
                      title="Add to Wishlist"
                      className="btn-icon-wish"
                    >
                      <i className="icon-heart" />
                    </a>
                  </div>
                  <h3 className="product-title">
                    <a href="demo36-product.html">Black Bag</a>
                  </h3>
                  <div className="ratings-container">
                    <div className="product-ratings">
                      <span className="ratings" style={{ width: "100%" }} />
                      {/* End .ratings */}
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    {/* End .product-ratings */}
                  </div>
                  {/* End .product-container */}
                  <div className="price-box">
                    <span className="old-price">$29.00</span>
                    <span className="product-price">$19.00</span>
                  </div>
                  {/* End .price-box */}
                </div>
                {/* End .product-details */}
              </div>
              <div className="product-default inner-quickview inner-icon">
                <figure>
                  <a href="demo36-product.html">
                    <img
                      src="/assets/images/demoes/demo36/products/product-15.jpg"
                      width={239}
                      height={239}
                      alt="product"
                    />
                  </a>
                  <div className="btn-icon-group">
                    <a
                      href="#"
                      title="Add To Cart"
                      className="btn-icon btn-add-cart product-type-simple"
                    >
                      <i className="icon-shopping-cart" />
                    </a>
                  </div>
                  <a
                    href="ajax/product-quick-view.html"
                    className="btn-quickview"
                    title="Quick View"
                  >
                    Quick View
                  </a>
                </figure>
                <div className="product-details">
                  <div className="category-wrap">
                    <div className="category-list">
                      <a href="demo36-shop.html" className="product-category">
                        category
                      </a>
                    </div>
                    <a
                      href="wishlist.html"
                      title="Add to Wishlist"
                      className="btn-icon-wish"
                    >
                      <i className="icon-heart" />
                    </a>
                  </div>
                  <h3 className="product-title">
                    <a href="demo36-product.html">Tea bowl</a>
                  </h3>
                  <div className="ratings-container">
                    <div className="product-ratings">
                      <span className="ratings" style={{ width: "100%" }} />
                      {/* End .ratings */}
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    {/* End .product-ratings */}
                  </div>
                  {/* End .product-container */}
                  <div className="price-box">
                    <span className="old-price">$29.00</span>
                    <span className="product-price">$19.00</span>
                  </div>
                  {/* End .price-box */}
                </div>
                {/* End .product-details */}
              </div>
              <div className="product-default inner-quickview inner-icon">
                <figure>
                  <a href="demo36-product.html">
                    <img
                      src="/assets/images/demoes/demo36/products/product-3.jpg"
                      width={239}
                      height={239}
                      alt="product"
                    />
                  </a>
                  <div className="btn-icon-group">
                    <a
                      href="#"
                      title="Add To Cart"
                      className="btn-icon btn-add-cart product-type-simple"
                    >
                      <i className="icon-shopping-cart" />
                    </a>
                  </div>
                  <a
                    href="ajax/product-quick-view.html"
                    className="btn-quickview"
                    title="Quick View"
                  >
                    Quick View
                  </a>
                </figure>
                <div className="product-details">
                  <div className="category-wrap">
                    <div className="category-list">
                      <a href="demo36-shop.html" className="product-category">
                        category
                      </a>
                    </div>
                    <a
                      href="wishlist.html"
                      title="Add to Wishlist"
                      className="btn-icon-wish"
                    >
                      <i className="icon-heart" />
                    </a>
                  </div>
                  <h3 className="product-title">
                    <a href="demo36-product.html">Beats Solo HD Drenched</a>
                  </h3>
                  <div className="ratings-container">
                    <div className="product-ratings">
                      <span className="ratings" style={{ width: "100%" }} />
                      {/* End .ratings */}
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    {/* End .product-ratings */}
                  </div>
                  {/* End .product-container */}
                  <div className="price-box">
                    <span className="old-price">$29.00</span>
                    <span className="product-price">$19.00</span>
                  </div>
                  {/* End .price-box */}
                </div>
                {/* End .product-details */}
              </div>
            </div>
            {/* End .products-slider */}
          </div>
        </div>
      </div>
    </>
  );
}

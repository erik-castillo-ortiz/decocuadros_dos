import BannerSection from './components/BannerSection';
import CategoriesSlider from './components/CategoriesSlider';
import CategoryFilter from './components/CategoryFilter';
// import CategorySection from './components/ElectronicsSection';
import DealProductSection from './components/DealProductSection';
import InfoBoxesSlider from './components/InfoBoxesSlider';
import PromoSection from './components/PromoSection';
import SliderComponent from './components/SliderComponent';
import ElectronicsSection from './components/ElectronicsSection';
import GadgetsSection from './components/GadgetsSection';
import HomeGardenSection from './components/HomeGardenSection';

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
        <InfoBoxesSlider />
        <BannerSection />
        <DealProductSection />
      </div>
      <CategoryFilter />
      <div className="bg-gray">
        <div className="container">
          <ElectronicsSection />
          <GadgetsSection />
          <HomeGardenSection />
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
                          'navText': [ '<i className=icon-left-open-big>', '<i className=icon-right-open-big>' ],
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
                          'navText': [ '<i className=icon-left-open-big>', '<i className=icon-right-open-big>' ],
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
                          <span className="ratings" style={{ width: '100%' }} />
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
                          <span className="ratings" style={{ width: '100%' }} />
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
                          <span className="ratings" style={{ width: '100%' }} />
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
                          <span className="ratings" style={{ width: '100%' }} />
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
                          <span className="ratings" style={{ width: '100%' }} />
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
                          <span className="ratings" style={{ width: '100%' }} />
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
                          <span className="ratings" style={{ width: '100%' }} />
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
                              'navText': [ '<i className=icon-left-open-big>', '<i className=icon-right-open-big>' ],
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
                          <span className="ratings" style={{ width: '100%' }} />
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
                          <span className="ratings" style={{ width: '100%' }} />
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
                          <span className="ratings" style={{ width: '100%' }} />
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
                          <span className="ratings" style={{ width: '100%' }} />
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
                              'navText': [ '<i className=icon-left-open-big>', '<i className=icon-right-open-big>' ],
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
                          <span className="ratings" style={{ width: '100%' }} />
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
                      'navText': [ '<i className=icon-left-open-big>', '<i className=icon-right-open-big>' ],
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
                      <span className="ratings" style={{ width: '100%' }} />
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
                      <span className="ratings" style={{ width: '100%' }} />
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
                      <span className="ratings" style={{ width: '100%' }} />
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
                      <span className="ratings" style={{ width: '100%' }} />
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
                      <span className="ratings" style={{ width: '100%' }} />
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
                      <span className="ratings" style={{ width: '100%' }} />
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
                      <span className="ratings" style={{ width: '100%' }} />
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

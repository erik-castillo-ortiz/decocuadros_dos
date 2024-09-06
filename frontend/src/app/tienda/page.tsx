import ProductCard from "./components/ProductCard"

const Tienda = () => {
  return (
    <>
      <nav aria-label="breadcrumb" className="breadcrumb-nav mb-3">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">
                <i className="icon-home" />
              </a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Shop</a>
            </li>
          </ol>
        </div>
      </nav>
      <div className="container pt-2">
        <div className="row">
          <div className="col-lg-9 main-content">
            <nav
              className="toolbox sticky-header"
              data-sticky-options="{'mobile': true}"
            >
              <div className="toolbox-left">
                <a href="#" className="sidebar-toggle">
                  <svg
                    data-name="Layer 3"
                    id="Layer_3"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1={15} x2={26} y1={9} y2={9} className="cls-1" />
                    <line x1={6} x2={9} y1={9} y2={9} className="cls-1" />
                    <line x1={23} x2={26} y1={16} y2={16} className="cls-1" />
                    <line x1={6} x2={17} y1={16} y2={16} className="cls-1" />
                    <line x1={17} x2={26} y1={23} y2={23} className="cls-1" />
                    <line x1={6} x2={11} y1={23} y2={23} className="cls-1" />
                    <path
                      d="M14.5,8.92A2.6,2.6,0,0,1,12,11.5,2.6,2.6,0,0,1,9.5,8.92a2.5,2.5,0,0,1,5,0Z"
                      className="cls-2"
                    />
                    <path
                      d="M22.5,15.92a2.5,2.5,0,1,1-5,0,2.5,2.5,0,0,1,5,0Z"
                      className="cls-2"
                    />
                    <path
                      d="M21,16a1,1,0,1,1-2,0,1,1,0,0,1,2,0Z"
                      className="cls-3"
                    />
                    <path
                      d="M16.5,22.92A2.6,2.6,0,0,1,14,25.5a2.6,2.6,0,0,1-2.5-2.58,2.5,2.5,0,0,1,5,0Z"
                      className="cls-2"
                    />
                  </svg>
                  <span>Filter</span>
                </a>
                <div className="toolbox-item toolbox-sort">
                  <label>Sort By:</label>
                  <div className="select-custom">
                    <select name="orderby" className="form-control">
                      <option value="menu_order">
                        Default sorting
                      </option>
                      <option value="popularity">Sort by popularity</option>
                      <option value="rating">Sort by average rating</option>
                      <option value="date">Sort by newness</option>
                      <option value="price">Sort by price: low to high</option>
                      <option value="price-desc">
                        Sort by price: high to low
                      </option>
                    </select>
                  </div>
                  {/* End .select-custom */}
                </div>
                {/* End .toolbox-item */}
              </div>
              {/* End .toolbox-left */}
              <div className="toolbox-right">
                <div className="toolbox-item toolbox-show">
                  <label>Show:</label>
                  <div className="select-custom">
                    <select name="count" className="form-control">
                      <option value={12}>12</option>
                      <option value={24}>24</option>
                      <option value={36}>36</option>
                    </select>
                  </div>
                  {/* End .select-custom */}
                </div>
                {/* End .toolbox-item */}
                <div className="toolbox-item layout-modes">
                  <a
                    href="category.html"
                    className="layout-btn btn-grid active"
                    title="Grid"
                  >
                    <i className="icon-mode-grid" />
                  </a>
                  <a
                    href="category-list.html"
                    className="layout-btn btn-list"
                    title="List"
                  >
                    <i className="icon-mode-list" />
                  </a>
                </div>
                {/* End .layout-modes */}
              </div>
              {/* End .toolbox-right */}
            </nav>
            <div className="row row-joined divide-line products-group">

              <ProductCard to="/producto/este-producto" />
              <ProductCard to="" />
              <ProductCard to="" />
              <ProductCard to="" />

              <ProductCard to="" />
              <ProductCard to="" />
              <ProductCard to="" />
              <ProductCard to="" />
              
            </div>
            {/* End .row */}
            <nav className="toolbox toolbox-pagination border-0">
              <div className="toolbox-item toolbox-show">
                <label>Show:</label>
                <div className="select-custom">
                  <select name="count" className="form-control">
                    <option value={12}>12</option>
                    <option value={24}>24</option>
                    <option value={36}>36</option>
                  </select>
                </div>
                {/* End .select-custom */}
              </div>
              {/* End .toolbox-item */}
              <ul className="pagination toolbox-item">
                <li className="page-item disabled">
                  <a className="page-link page-link-btn" href="#">
                    <i className="icon-angle-left" />
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1 <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <span className="page-link">...</span>
                </li>
                <li className="page-item">
                  <a className="page-link page-link-btn" href="#">
                    <i className="icon-angle-right" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          {/* End .col-lg-9 */}
          <div className="sidebar-overlay" />
          <aside className="sidebar-shop col-lg-3 order-lg-first mobile-sidebar">
            <div className="sidebar-wrapper">
              <div className="widget">
                <h3 className="widget-title">
                  <a
                    data-toggle="collapse"
                    href="#widget-body-2"
                    role="button"
                    aria-expanded="true"
                    aria-controls="widget-body-2"
                  >
                    Categories
                  </a>
                </h3>
                <div className="collapse show" id="widget-body-2">
                  <div className="widget-body">
                    <ul className="cat-list">
                      <li>
                        <a href="#widget-category-1">Cameras</a>
                      </li>
                      <li>
                        <a
                          href="#widget-category-2"
                          className="collapsed"
                          data-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="widget-category-2"
                        >
                          Electronics
                          <span className="toggle" />
                        </a>
                        <div className="collapse" id="widget-category-2">
                          <ul className="cat-sublist">
                            <li>Accessories</li>
                            <li>Audio &amp; Video</li>
                            <li>Camera &amp; Photo</li>
                            <li>Laptops</li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a
                          href="#widget-category-3"
                          className="collapsed"
                          data-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="widget-category-3"
                        >
                          Fashion
                          <span className="toggle" />
                        </a>
                        <div className="collapse" id="widget-category-3">
                          <ul className="cat-sublist">
                            <li>Kids Fashion</li>
                            <li>Man</li>
                            <li>Woman</li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="#widget-category-4">Furniture</a>
                      </li>
                      <li>
                        <a href="#">Gaming</a>
                      </li>
                      <li>
                        <a
                          href="#widget-category-4"
                          className="collapsed"
                          data-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="widget-category-4"
                        >
                          Gifts &amp; Gadgets
                          <span className="toggle" />
                        </a>
                        <div className="collapse" id="widget-category-4">
                          <ul className="cat-sublist">
                            <li>Birthday</li>
                            <li>For Her</li>
                            <li>For Him</li>
                            <li>For Kids</li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="#">Headphones</a>
                      </li>
                      <li>
                        <a
                          href="#widget-category-5"
                          className="collapsed"
                          data-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="widget-category-5"
                        >
                          Home &amp; Garden
                          <span className="toggle" />
                        </a>
                        <div className="collapse" id="widget-category-5">
                          <ul className="cat-sublist">
                            <li>Furniture</li>
                            <li>Home Accessories</li>
                            <li>Lighting</li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="#">Smartphones</a>
                      </li>
                      <li>
                        <a href="#">Sports</a>
                      </li>
                      <li>
                        <a href="#">Toys</a>
                      </li>
                    </ul>
                  </div>
                  {/* End .widget-body */}
                </div>
                {/* End .collapse */}
              </div>
              {/* End .widget */}
              <div className="widget widget-price">
                <h3 className=" widget-title">
                  <a
                    data-toggle="collapse"
                    href="#widget-body-3"
                    role="button"
                    aria-expanded="true"
                    aria-controls="widget-body-3"
                  >
                    Price
                  </a>
                </h3>
                <div className="collapse show" id="widget-body-3">
                  <div className="widget-body pb-0">
                    <form action="#">
                      <div className="price-slider-wrapper">
                        <div id="price-slider" />
                        {/* End #price-slider */}
                      </div>
                      {/* End .price-slider-wrapper */}
                      <div className="filter-price-action d-flex align-items-center justify-content-between flex-wrap">
                        <div className="filter-price-text">
                          Price:
                          <span id="filter-price-range" />
                        </div>
                        {/* End .filter-price-text */}
                        <button type="submit" className="btn btn-primary">
                          Filter
                        </button>
                      </div>
                      {/* End .filter-price-action */}
                    </form>
                  </div>
                  {/* End .widget-body */}
                </div>
                {/* End .collapse */}
              </div>
              {/* End .widget */}
              <div className="widget widget-color">
                <h3 className="widget-title">
                  <a
                    data-toggle="collapse"
                    href="#widget-body-4"
                    role="button"
                    aria-expanded="true"
                    aria-controls="widget-body-4"
                  >
                    Color
                  </a>
                </h3>
                <div className="collapse show" id="widget-body-4">
                  <div className="widget-body pb-0">
                    <ul className="config-swatch-list">
                      <li className="active">
                        <a href="#" style={{ backgroundColor: "#000" }} />
                      </li>
                      <li>
                        <a href="#" style={{ backgroundColor: "#0188cc" }} />
                      </li>
                      <li>
                        <a href="#" style={{ backgroundColor: "#81d742" }} />
                      </li>
                      <li>
                        <a href="#" style={{ backgroundColor: "#6085a5" }} />
                      </li>
                      <li>
                        <a href="#" style={{ backgroundColor: "#ab6e6e" }} />
                      </li>
                    </ul>
                  </div>
                  {/* End .widget-body */}
                </div>
                {/* End .collapse */}
              </div>
              {/* End .widget */}
              <div className="widget widget-brand">
                <h3 className="widget-title">
                  <a
                    data-toggle="collapse"
                    href="#widget-body-7"
                    role="button"
                    aria-expanded="true"
                    aria-controls="widget-body-7"
                  >
                    Brand
                  </a>
                </h3>
                <div className="collapse show" id="widget-body-7">
                  <div className="widget-body pb-0">
                    <ul className="cat-list">
                      <li>
                        <a href="#">Adidas</a>
                      </li>
                      <li>
                        <a href="#">Asics</a>
                      </li>
                      <li>
                        <a href="#">Brooks</a>
                      </li>
                      <li>
                        <a href="#">Nike</a>
                      </li>
                      <li>
                        <a href="#">Puma</a>
                      </li>
                    </ul>
                  </div>
                  {/* End .widget-body */}
                </div>
                {/* End .collapse */}
              </div>
              {/* End .widget */}
            </div>
            {/* End .sidebar-wrapper */}
          </aside>
          {/* End .col-lg-3 */}
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}
    </>
  )
}

export default Tienda
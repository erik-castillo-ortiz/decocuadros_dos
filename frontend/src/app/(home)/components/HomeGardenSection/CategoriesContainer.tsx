import Banner from './Banner';

const CategoriesContainer = () => {
  return (
    <div className="categories-container categories-container-three bg-white pb-0">
      <div className="heading d-flex flex-lg-row flex-column align-items-lg-center">
        <h4 className="section-title text-transform-none mb-0">
          Home & Garden
        </h4>
        <ul className="shop-list d-flex flex-wrap align-items-center p-0 mt-0">
          <li>
            <a href="demo36-shop.html">Furniture</a>
          </li>
          <li>
            <a href="demo36-shop.html">Garden & Outdoors</a>
          </li>
          <li>
            <a href="demo36-shop.html">Home Accessories</a>
          </li>
          <li>
            <a href="demo36-shop.html">Lighting</a>
          </li>
        </ul>
        <a className="view-all" href="demo36-shop.html">
          View All<i className="fas fa-long-arrow-alt-right"></i>
        </a>
      </div>
      <Banner />
    </div>
  );
};

export default CategoriesContainer;

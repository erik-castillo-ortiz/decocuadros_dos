import ItemWidget from './ItemWidget';

const WidgetOffers = () => {
  const offerProducts = [
    {
      id: 1,
      title: 'PT Speaker',
      price: '$49.00',
      image: 'assets/images/demoes/demo36/products/small/product-1.jpg',
    },
    {
      id: 2,
      title: 'Beats Solo HD Drenched',
      price: '$49.00',
      image: 'assets/images/demoes/demo36/products/small/product-2.jpg',
    },
    {
      id: 3,
      title: 'Palm Print Jacket',
      price: '$49.00',
      image: 'assets/images/demoes/demo36/products/small/product-3.jpg',
    },
    {
      id: 4,
      title: 'Camera',
      price: '$49.00',
      image: 'assets/images/demoes/demo36/products/small/product-4.jpg',
    },
    {
      id: 5,
      title: 'Red Football',
      price: '$49.00',
      image: 'assets/images/demoes/demo36/products/small/product-5.jpg',
    },
    {
      id: 6,
      title: 'Soft Hat',
      price: '$49.00',
      image: 'assets/images/demoes/demo36/products/small/product-6.jpg',
    },
  ];

  return (
    <div className="products-widget-container bg-white">
      <h2 className="section-title d-flex align-items-center text-transform-none">
        <i className="icon-percent-shape"></i>Special Offers
      </h2>
      <div className="product-countdown-container custom-product-countdown bg-white">
        <span className="product-countdown-title ls-10">offer ends in:</span>
        <div
          className="product-countdown countdown-compact is-countdown"
          data-until="2021, 10, 5"
          data-compact="true"
        >
          <span className="countdown-row countdown-amount">
            0 days, 00 : 00 : 00
          </span>
        </div>
      </div>
      <div className="row">
        {offerProducts.map((product) => (
          <div className="col-xl-12 col-md-4 col-sm-6" key={product.id}>
            <ItemWidget product={product} />
          </div>
        ))}
      </div>
      <a className="view-all" href="demo36-shop.html">
        View All<i className="fas fa-long-arrow-alt-right"></i>
      </a>
    </div>
  );
};

export default WidgetOffers;

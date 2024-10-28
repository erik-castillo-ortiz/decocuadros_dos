import { Product } from '@/app/(home)/components/types';
interface ItemWidgetProps {
  product: Product;
}

const ItemWidget = ({ product }: ItemWidgetProps) => {
  return (
    <div className="product-default left-details product-widget">
      <figure>
        <a href="demo36-product.html">
          <img src={product.image} width="84" height="84" alt={product.name} />
        </a>
      </figure>
      <div className="product-details">
        <h3 className="product-title">
          <a href="demo36-product.html">{product.name}</a>
        </h3>
        <div className="ratings-container">
          <div className="product-ratings">
            <span className="ratings" style={{ width: '100%' }}></span>
            <span className="tooltiptext tooltip-top">5.00</span>
          </div>
        </div>
        <div className="price-box">
          <span className="product-price">{product.oldPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default ItemWidget;

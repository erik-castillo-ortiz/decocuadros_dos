'use client';

import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  rating: number;
  oldPrice: string;
  newPrice: string;
  isHot?: boolean;
  discount?: string | null;
}

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="products-with-divide">
      <div className="row row-joined">
        {products.map((product) => (
          <div key={product.id} className="col-xl-3 col-sm-4 col-6">
            <div className="product-default inner-quickview inner-icon">
              <figure>
                <Link href="/">
                  <img
                    src={product.image}
                    width={239}
                    height={239}
                    alt={product.name}
                  />
                </Link>

                <div className="label-group">
                  {product.isHot && <div className="product-label label-hot">HOT</div>}
                  {product.discount && <div className="product-label label-sale">{product.discount}</div>}
                </div>

                <div className="btn-icon-group">
                  <Link href="#" className="btn-icon btn-add-cart product-type-simple">
                    <i className="icon-shopping-cart" />
                  </Link>
                </div>

                <Link href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">
                  Quick View
                </Link>
              </figure>

              <div className="product-details">
                <div className="category-wrap">
                  <div className="category-list">
                    <Link href="/" className="product-category">{product.category}</Link>
                  </div>
                  <Link href="/" className="btn-icon-wish">
                    <i className="icon-heart" />
                  </Link>
                </div>

                <h3 className="product-title">
                  <Link href="/">{product.name}</Link>
                </h3>

                <div className="ratings-container">
                  <div className="product-ratings">
                    <span className="ratings" style={{ width: `${product.rating}%` }} />
                    <span className="tooltiptext tooltip-top" />
                  </div>
                </div>

                <div className="price-box">
                  {product.oldPrice && <span className="old-price">{product.oldPrice}</span>}
                  <span className="product-price">{product.newPrice}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

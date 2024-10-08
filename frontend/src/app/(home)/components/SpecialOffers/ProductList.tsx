'use client';

import Link from 'next/link';
import { Product } from '@/app/(home)/components/types';

interface ProductListProps {
  products: Product[];
  limit?: number; // Nueva prop para limitar la cantidad de productos a mostrar
  columnClasses?: string; // Nueva prop para definir las clases de las columnas
}

const ProductList = ({
  products,
  limit,
  columnClasses = 'col-xl-3 col-sm-4 col-6',
}: ProductListProps) => {
  // Si hay un límite, cortamos la lista de productos
  const displayedProducts = limit ? products.slice(0, limit) : products;

  return (
    <div className="products-with-divide">
      <div className="row row-joined">
        {displayedProducts.map((product) => (
          <div key={product.id} className={columnClasses}>
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
                  {product.isHot && (
                    <div className="product-label label-hot">HOT</div>
                  )}
                  {product.discount && (
                    <div className="product-label label-sale">
                      {product.discount}
                    </div>
                  )}
                </div>

                <div className="btn-icon-group">
                  <Link
                    href="#"
                    className="btn-icon btn-add-cart product-type-simple"
                  >
                    <i className="icon-shopping-cart" />
                  </Link>
                </div>

                <Link
                  href="ajax/product-quick-view.html"
                  className="btn-quickview"
                  title="Quick View"
                >
                  Quick View
                </Link>
              </figure>

              <div className="product-details">
                <div className="category-wrap">
                  <div className="category-list">
                    <Link href="/" className="product-category">
                      {product.category}
                    </Link>
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
                    <span
                      className="ratings"
                      style={{ width: `${product.rating}%` }}
                    />
                    <span className="tooltiptext tooltip-top" />
                  </div>
                </div>

                <div className="price-box">
                  {product.oldPrice && (
                    <span className="old-price">{product.oldPrice}</span>
                  )}
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

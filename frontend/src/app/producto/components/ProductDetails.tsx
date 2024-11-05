import React, { useState } from 'react';
import { Product } from '@/app/(home)/components/types';
import socialIcons from '@/app/helpers/socials-networks.json';
import {
  OverlayTrigger,
  Tooltip,
  Button,
  InputGroup,
  FormControl,
} from 'react-bootstrap';

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  const handleIncrease = () => {
    if (quantity < product.stock) {
      setQuantity((prevQuantity) => prevQuantity + 1);
      setShowTooltip(false);
    } else {
      setShowTooltip(true);
    }
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    setShowTooltip(false);
  };

  return (
    <>
      <div className="test-nav-product d-flex align-items-center justify-content-between">
        <h1 className="product-title">{product.name}</h1>

        {/* Navegación de productos */}
        <div className="product-nav">
          <div className="product-prev">
            <a href="#">
              <span className="product-link"></span>

              <span className="product-popup">
                <span className="box-content">
                  <img
                    alt="product"
                    width="150"
                    height="150"
                    src="/assets/images/products/product-3.jpg"
                    style={{ paddingTop: '0px' }}
                  />

                  <span>Circled Ultimate 3D Speaker</span>
                </span>
              </span>
            </a>
          </div>
          <div className="product-next">
            <a href="#">
              <span className="product-link"></span>

              <span className="product-popup">
                <span className="box-content">
                  <img
                    alt="product"
                    width="150"
                    height="150"
                    src="/assets/images/products/product-4.jpg"
                    style={{ paddingTop: '0px' }}
                  />

                  <span>Beats Solo HD Drenched</span>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Ratings */}
      <div className="ratings-container">
        <div className="product-ratings">
          <span
            className="ratings"
            style={{ width: `${product.rating}%` }}
          ></span>
          <span className="tooltiptext tooltip-top"></span>
        </div>
        <a href="#" className="rating-link">
          (6 Reviews)
        </a>
      </div>

      <hr className="short-divider" />

      {/* Precios */}
      <div className="price-box">
        {product.oldPrice && (
          <span className="old-price">{product.oldPrice}</span>
        )}
        <span className="new-price">{product.newPrice}</span>
      </div>

      {/* Descripción */}
      <div className="product-desc">
        <p>{product.shortDescription}</p>
      </div>

      {/* Categoría */}
      <ul className="single-info-list">
        <li>
          CATEGORY:{' '}
          <strong>
            <a href="#" className="product-category">
              {product.category}
            </a>
          </strong>
        </li>
      </ul>

      {/* Acción del producto con cantidad */}
      <div className="product-action">
        <div className="product-single-qty">
          <InputGroup className="bootstrap-touchspin">
            <Button
              variant="outline-secondary"
              className="bootstrap-touchspin-down"
              onClick={handleDecrease}
            >
              -
            </Button>
            <FormControl
              type="text"
              className="horizontal-quantity text-center"
              value={quantity}
              readOnly
            />
            <OverlayTrigger
              placement="top"
              show={showTooltip}
              overlay={
                <Tooltip id="tooltip-disabled">
                  Solo hay {product.stock} unidades disponibles.
                </Tooltip>
              }
            >
              <Button
                variant="outline-secondary"
                className="bootstrap-touchspin-up"
                onClick={handleIncrease}
              >
                +
              </Button>
            </OverlayTrigger>
          </InputGroup>
        </div>

        <button className="btn btn-dark add-cart me-2" title="Add to Cart">
          Add to Cart
        </button>
        <a href="cart.html" className="btn btn-gray view-cart d-none">
          View cart
        </a>
      </div>

      <hr className="divider mb-0 mt-0" />

      {/* Compartir y wishlist */}
      <div className="product-single-share mb-3">
        <label className="sr-only">Share:</label>
        <div className="social-icons me-2">
          {socialIcons.map((icon, index) => (
            <a
              href={icon.link}
              className={`social-icon ${icon.icon}`}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              title={icon.title}
            ></a>
          ))}
        </div>
        <a
          href="wishlist.html"
          className="btn-icon-wish add-wishlist"
          title="Add to Wishlist"
        >
          <i className="icon-wishlist-2"></i>
          <span>Add to Wishlist</span>
        </a>
      </div>
    </>
  );
};

export default ProductDetails;

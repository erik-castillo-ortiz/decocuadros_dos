import React from 'react';
import { Modal, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

interface Product {
  name: string;
  image: string;
  oldPrice: string;
  newPrice: string;
  discount?: string | null;
  SKU?: string;
  category: string;
  sizes?: string[];
  shortDescription: string;
  rating: number;
}

interface QuickViewProductbootstrapProps {
  isOpen: boolean;
  closeModal: () => void;
  product: Product | null;
}

const QuickViewProductbootstrap: React.FC<QuickViewProductbootstrapProps> = ({
  isOpen,
  closeModal,
  product,
}) => {
  if (!isOpen || !product) return null;

  return (
    <>
    <div className="fade modal-backdrop show"></div>
    <Modal show={isOpen} onHide={closeModal} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          {/* Main product image and thumbnails */}
          <div className="col-md-6">
            <div className="product-slider-container">
              <div className="product-label label-hot">HOT</div>
              {product.discount && (
                <div className="product-label label-sale">{product.discount}</div>
              )}
              <img src={product.image} alt={product.name} className="img-fluid mb-3" />

              <div className="prod-thumbnail d-flex justify-content-around">
                <img src="assets/images/products/zoom/product-1.jpg" className="img-thumbnail" alt="Thumbnail 1" />
                <img src="assets/images/products/zoom/product-2.jpg" className="img-thumbnail" alt="Thumbnail 2" />
                <img src="assets/images/products/zoom/product-3.jpg" className="img-thumbnail" alt="Thumbnail 3" />
              </div>
            </div>
          </div>

          {/* Product details */}
          <div className="col-md-6">
            {/* Rating and reviews */}
            <div className="ratings-container mb-2">
              <div className="product-ratings" style={{ width: `${product.rating}%` }}></div>
              <span className="rating-link">(6 Reviews)</span>
            </div>

            {/* Price and discount */}
            <div className="price-box">
              <span className="product-price">${product.newPrice}</span>
              {product.oldPrice && <del className="old-price">${product.oldPrice}</del>}
            </div>

            {/* Short description */}
            <p>{product.shortDescription}</p>

            {/* Product SKU and category */}
            <ul className="list-unstyled">
              <li>
                <strong>SKU:</strong> {product.SKU}
              </li>
              <li>
                <strong>Category:</strong> {product.category}
              </li>
            </ul>

            {/* Sizes available */}
            <div className="product-sizes mb-3">
              <strong>Size:</strong>
              <ul className="list-inline">
                {product.sizes?.map((size) => (
                  <li key={size} className="list-inline-item">
                    <Button variant="outline-secondary">{size}</Button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action buttons */}
            <div className="product-action mb-3">
              <Button variant="dark" className="mr-2">Add to Cart</Button>
              <Button variant="outline-secondary">Add to Wishlist</Button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
    </>
  );
};

export default QuickViewProductbootstrap;

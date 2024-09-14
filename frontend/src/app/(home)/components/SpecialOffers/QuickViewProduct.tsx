
import React, { useEffect } from 'react';

interface Product {
    id: number;
    name: string;
    image: string;
    category: string;
    categoryId: number;
    rating: number;
    oldPrice: string;
    newPrice: string;
    isHot?: boolean;
    discount?: string | null;
    shortDescription: string;
    SKU: string;
    sizes: string[];
  }
  

interface QuickViewProductProps {
  isOpen: boolean;
  closeModal: () => void;
  product: Product | null;
}

const QuickViewProduct = ({ isOpen, closeModal, product }: QuickViewProductProps) => {

  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add('modal-open');
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.marginRight = '15px';
    } else {
      document.documentElement.classList.remove('modal-open');
      document.documentElement.style.overflow = '';
      document.documentElement.style.marginRight = '';
    }

    return () => {
      document.documentElement.classList.remove('modal-open');
      document.documentElement.style.overflow = '';
      document.documentElement.style.marginRight = '';
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  return (
    <div className={`modal-open`}>
      {/* Overlay oscuro */}
      <div className="modal-overlay"></div>

      <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ajax-product mfp-ready" tabIndex={-1} style={{ overflow: 'hidden auto' }}>
        <div className="mfp-container mfp-ajax-holder mfp-s-ready">
          <div className="mfp-content">
            <div className="product-single-container product-single-default product-quick-view mb-0 custom-scrollbar">
              <div className="row">
                <div className="col-md-6 product-single-gallery mb-md-0">
                  <div className="product-slider-container">
                    <div className="label-group">
                      <div className="product-label label-hot">HOT</div>
                      {product.discount && <div className="product-label label-sale">{product.discount}</div>}
                    </div>
                    <div className="product-single-carousel owl-carousel owl-theme show-nav-hover owl-loaded owl-drag">
                      <div className="owl-stage-outer">
                        <div className="owl-stage">
                          <div className="owl-item active">
                            <div className="product-item">
                              <img className="product-single-image" src={product.image} alt={product.name} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="prod-thumbnail owl-dots owl-carousel owl-theme show-nav-hover owl-loaded owl-drag">
                    <div className="owl-stage-outer">
                      <div className="owl-stage">
                        <div className="owl-item active">
                          <div className="owl-dot active">
                            <img src="assets/images/products/zoom/product-1.jpg" />
                          </div>
                        </div>
                        <div className="owl-item">
                          <div className="owl-dot">
                            <img src="assets/images/products/zoom/product-2.jpg" />
                          </div>
                        </div>
                        <div className="owl-item">
                          <div className="owl-dot">
                            <img src="assets/images/products/zoom/product-3.jpg" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="owl-nav">
                      <button type="button" className="owl-prev disabled">
                        <i className="fas fa-chevron-left"></i>
                      </button>
                      <button type="button" className="owl-next">
                        <i className="fas fa-chevron-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="product-single-details mb-0 ml-md-4">
                    <h1 className="product-title">{product.name}</h1>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span className="ratings" style={{ width: '60%' }}></span>
                      </div>
                      <a href="#" className="rating-link">(6 Reviews)</a>
                    </div>
                    <hr className="short-divider" />
                    <div className="price-box">
                      <span className="product-price">{product.newPrice}</span>
                      {product.oldPrice && <del className="old-price">{product.oldPrice}</del>}
                    </div>
                    <div className="product-desc">
                      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    <ul className="single-info-list">
                      <li>SKU: <strong>{product.SKU}</strong></li>
                      <li>CATEGORY: <strong>{product.category}</strong></li>
                    </ul>
                    <div className="product-filters-container">
                      <div className="product-single-filter">
                        <label>Size:</label>
                        <ul className="config-size-list">
                          {product.sizes?.map(size => (
                            <li key={size}>
                              <a href="#" className="d-flex align-items-center justify-content-center">{size}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="product-single-filter">
                        <label></label>
                        <a className="font1 text-uppercase clear-btn" href="#">Clear</a>
                      </div>
                    </div>
                    <div className="product-action">
                      <div className="price-box product-filtered-price">
                        <del className="old-price"><span>$286.00</span></del>
                        <span className="product-price">$245.00</span>
                      </div>
                      <div className="product-single-qty">
                        <div className="input-group bootstrap-touchspin">
                          <span className="input-group-btn input-group-prepend">
                            <button className="btn btn-outline btn-down-icon bootstrap-touchspin-down" type="button"></button>
                          </span>
                          <input className="horizontal-quantity form-control" type="text" />
                          <span className="input-group-btn input-group-append">
                            <button className="btn btn-outline btn-up-icon bootstrap-touchspin-up" type="button"></button>
                          </span>
                        </div>
                      </div>
                      <a href="#" className="btn btn-dark add-cart mr-2 disabled">Add to Cart</a>
                      <a href="cart.html" className="btn view-cart d-none">View cart</a>
                    </div>
                    <hr className="divider mb-0 mt-0" />
                    <div className="product-single-share mb-0">
                      <label className="sr-only">Share:</label>
                      <div className="social-icons mr-2">
                        <a href="#" className="social-icon social-facebook" title="Facebook"></a>
                        <a href="#" className="social-icon social-twitter" title="Twitter"></a>
                        <a href="#" className="social-icon social-linkedin" title="LinkedIn"></a>
                        <a href="#" className="social-icon social-gplus" title="Google+"></a>
                        <a href="#" className="social-icon social-mail" title="Mail"></a>
                      </div>
                      <a href="wishlist.html" className="btn-icon-wish add-wishlist" title="Add to Wishlist">
                        <i className="icon-wishlist-2"></i>
                        <span>Add to Wishlist</span>
                      </a>
                    </div>
                  </div>
                </div>
                <button type="button" className="mfp-close" onClick={closeModal}>×</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewProduct;

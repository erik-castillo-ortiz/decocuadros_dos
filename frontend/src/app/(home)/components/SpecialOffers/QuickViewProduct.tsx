import React, { useEffect, useState } from 'react';
import {
  Modal,
  Button,
  InputGroup,
  FormControl,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import ReactImageMagnify from 'react-image-magnify';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import socialIcons from '@/app/helpers/socials-networks.json';
import { Product } from '@/app/(home)/components/types';

import type { Swiper as SwiperType } from 'swiper';

interface QuickViewProductProps {
  isOpen: boolean;
  closeModal: () => void;
  product: Product | null;
}

const QuickViewProduct: React.FC<QuickViewProductProps> = ({
  isOpen,
  closeModal,
  product,
}) => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen && product) {
      setActiveImage(product.image);
      document.documentElement.classList.add('modal-open');
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.marginRight = '15px';
      setQuantity(1);
    } else {
      document.documentElement.classList.remove('modal-open');
      document.documentElement.style.overflow = '';
      document.documentElement.style.marginRight = '';
    }

    return () => {
      document.documentElement.classList.remove('modal-open');
      document.documentElement.style.overflow = '';
      document.documentElement.style.marginRight = '';
      setThumbsSwiper(null);
    };
  }, [isOpen, product]);

  const handleSwiperInit = (swiper: SwiperType) => {
    setThumbsSwiper(swiper);
  };

  if (!isOpen || !product) return null;

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

  const handleClose = () => {
    setQuantity(1); // Restablecer cantidad al valor inicial al cerrar el modal
    setShowTooltip(false); // Ocultar el tooltip al cerrar el modal
    closeModal(); // Llamar la función pasada desde el padre para cerrar
  };
  return (
    <Modal
      show={isOpen}
      onHide={handleClose}
      size="lg"
      centered
      className="quick-view-modal"
      dialogClassName="custom-modal-dialog"
    >
      <div className="product-single-container product-single-default product-quick-view mb-0 custom-scrollbar">
        <div className="row">
          {/* Galería de imágenes */}
          <div className="col-md-6 product-single-gallery mb-md-0">
            <div className="product-slider-container">
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

              {/* Imagen principal con Swiper y Zoom */}
              <SwiperComponent
                modules={[Navigation, Thumbs]}
                navigation
                thumbs={{ swiper: thumbsSwiper || undefined }}
                slidesPerView={1}
                className="product-single-carousel"
                onSlideChange={(swiper) => {
                  setActiveImage(
                    swiper.slides[swiper.activeIndex].querySelector('img')
                      ?.src || ''
                  );
                }}
              >
                <SwiperSlide>
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: product.name,
                        isFluidWidth: true,
                        src: product.image,
                      },
                      largeImage: {
                        src: product.image,
                        width: 1200,
                        height: 1200,
                      },
                      enlargedImagePosition: 'over', // Mostrar el zoom dentro de la imagen
                    }}
                  />
                </SwiperSlide>
                {product.gallery &&
                  product.gallery.map((image, index) => (
                    <SwiperSlide key={index}>
                      <ReactImageMagnify
                        {...{
                          smallImage: {
                            alt: `Gallery image ${index}`,
                            isFluidWidth: true,
                            src: image,
                          },
                          largeImage: {
                            src: image,
                            width: 1200,
                            height: 1200,
                          },
                          enlargedImagePosition: 'over', // Mostrar el zoom dentro de la imagen
                        }}
                      />
                    </SwiperSlide>
                  ))}
              </SwiperComponent>

              {/* Miniaturas con Swiper */}
              <SwiperComponent
                onSwiper={handleSwiperInit}
                modules={[Navigation, Thumbs]}
                slidesPerView={4}
                spaceBetween={10}
                className="prod-thumbnail mt-3"
              >
                <SwiperSlide>
                  <img
                    src={product.image}
                    alt={product.name}
                    onClick={() => setActiveImage(product.image)}
                    className={
                      activeImage === product.image ? 'active-thumbnail' : ''
                    }
                    style={{ cursor: 'pointer', maxWidth: '100px' }}
                  />
                </SwiperSlide>
                {product.gallery &&
                  product.gallery.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={image}
                        alt={`Gallery thumbnail ${index}`}
                        onClick={() => setActiveImage(image)}
                        className={
                          activeImage === image ? 'active-thumbnail' : ''
                        }
                        style={{ cursor: 'pointer', maxWidth: '100px' }}
                      />
                    </SwiperSlide>
                  ))}
              </SwiperComponent>
            </div>
          </div>

          {/* Detalles del producto */}
          <div className="col-md-6 overflow-hidden">
            <div className="product-single-details mb-0 ms-md-4">
              <h1 className="product-title">{product.name}</h1>

              <div className="ratings-container">
                <div className="product-ratings">
                  <span
                    className="ratings"
                    style={{ width: `${product.rating}%` }}
                  ></span>
                </div>
                <a href="#" className="rating-link">
                  (6 Reviews)
                </a>
              </div>
              <hr className="short-divider" />
              <div className="price-box">
                <span className="product-price">{product.newPrice}</span>
                {product.oldPrice && (
                  <del className="old-price">{product.oldPrice}</del>
                )}
              </div>

              <div className="product-desc">
                <p>{product.shortDescription}</p>
              </div>

              <ul className="single-info-list">
                <li>
                  SKU: <strong>{product.SKU}</strong>
                </li>
                <li>
                  CATEGORY: <strong>{product.category}</strong>
                </li>
              </ul>

              <div className="product-filters-container">
                <div className="product-single-filter">
                  <label>Size:</label>
                  <ul className="config-size-list">
                    {product.sizes.map((size) => (
                      <li key={size}>
                        <a
                          href="#"
                          className="d-flex align-items-center justify-content-center"
                        >
                          {size}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="product-single-filter">
                  <label></label>
                  <a className="font1 text-uppercase clear-btn" href="#">
                    Clear
                  </a>
                </div>
              </div>
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

                <Button
                  className="btn btn-dark add-cart me-2"
                  title="Add to Cart"
                  disabled
                >
                  Add to Cart
                </Button>

                <Button className="btn view-cart d-none" href="cart.html">
                  View Cart
                </Button>
              </div>
              {/* <hr className="my-0" style={{ height: '2px' }} /> */}
              <hr className="divider mb-0 mt-0" />
              {/* Manejo de las redes sociales desde el JSON */}
              <div className="product-single-share mb-0">
                <label className="sr-only">Share:</label>
                <div className="social-icons me-2">
                  {socialIcons.map((icon, index) => (
                    <a
                      href={icon.link}
                      className={icon.icon}
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
            </div>
          </div>
          <button type="button" className="mfp-close" onClick={closeModal}>
            ×
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default QuickViewProduct;

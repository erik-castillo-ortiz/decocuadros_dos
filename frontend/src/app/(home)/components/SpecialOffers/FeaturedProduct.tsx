'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface FeaturedProductProps {
  product: {
    name: string;
    category: string;
    image: string;
    rating: number;
    oldPrice: string;
    newPrice: string;
    offerEnds: string;
  };
}

const FeaturedProduct = ({ product }: FeaturedProductProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = () => {
    const now = new Date();
    const offerEndDate = new Date(product.offerEnds.replace(' ', 'T'));

    const difference = offerEndDate.getTime() - now.getTime();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [product.offerEnds]);

  return (
    <div className="product-default deal-product">
      <figure>
        <Link href="/">
          <img
            src={product.image}
            width={450}
            height={450}
            alt={product.name}
          />
        </Link>
        <div className="product-countdown-container custom-product-countdown">
          <span className="product-countdown-title">Offer ends in:</span>
          <div
            className="product-countdown countdown-compact is-countdown"
            data-until="2021, 10, 5"
            data-compact="true"
          >
            <span className="countdown-row countdown-amount">
              {`${timeLeft.days} Días ${String(timeLeft.hours).padStart(2, '0')}:${String(
                timeLeft.minutes,
              ).padStart(2, '0')}:${String(timeLeft.seconds).padStart(2, '0')}`}
            </span>
          </div>
        </div>
      </figure>
      <div className="product-details">
        <div className="category-list">
          <Link href="/" className="product-category">
            {product.category}
          </Link>
        </div>
        <h3 className="product-title">
          <Link href="/">{product.name}</Link>
        </h3>
        <div className="ratings-container">
          <div className="product-ratings">
            <span className="ratings" style={{ width: `${product.rating}%` }} />
          </div>
        </div>
        <div className="price-box">
          <del className="old-price">{product.oldPrice}</del>
          <span className="product-price">{product.newPrice}</span>
        </div>

        {/* Botones con uso de Link */}
        <div className="product-action">
          <Link href="wishlist.html" className="btn-icon-wish" title="Add to Wishlist">
            <i className="icon-heart" />
          </Link>
          <Link
            href="#"
            className="btn btn-primary btn-icon btn-add-cart product-type-simple"
          >
            <i className="icon-shopping-cart" />
            <span>ADD TO CART</span>
          </Link>
          <Link
            href="ajax/product-quick-view.html"
            className="btn-quickview"
            title="Quick View"
          >
            <i className="fas fa-external-link-alt" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;

'use client';

import Link from 'next/link';
import React from 'react';

interface PromoSectionProps {
  headingText: string;
  subText: string;
  promoText: string;
  buttonText: string;
  buttonLink: string;
}

const PromoSection: React.FC<PromoSectionProps> = ({
  headingText,
  subText,
  promoText,
  buttonText,
  buttonLink
}) => {
  return (
    <div className="promo-section bg-white">
      <div className="promo-banner banner container text-uppercase bg-transparent">
        <div className="banner-content d-flex align-items-center justify-content-center flex-column flex-md-row text-center">
          <h1 className="text-white text-animate text-shadow font1">
            {headingText}
          </h1>
          <h6 className="font1 mb-md-0 mb-1 pt-2 pt-md-0 pb-1">{subText}</h6>
          <h4 className="d-inline-block mb-0 pl-3 pr-3 pt-1 pb-1 mb-md-0 mb-1">
            {promoText}
          </h4>
          <Link href={buttonLink} passHref legacyBehavior>
            <a className="btn btn-dark">{buttonText}</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PromoSection;

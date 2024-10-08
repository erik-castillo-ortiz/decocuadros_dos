import { BannerProps } from '@/app/(home)/components/types';

const CategoryBanner = ({
  title,
  subtitle,
  discountText,
  startingPrice,
  backgroundImage,
}: BannerProps) => {
  return (
    <div
      className="banner banner3"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container d-flex justify-content-center">
        <div className="banner-layer text-center">
          <h4 className="font1">
            <i className="font2">{subtitle}</i>
          </h4>
          <h3 className="text-dark mb-0">{title}</h3>
          <h2 className="text-dark">{discountText}</h2>
          <h5 className="coupon-sale-text justify-content-end">
            <span className="text-dark">STARTING AT</span>
            <b className="text-white align-middle">
              <sup>$</sup>
              {startingPrice}
            </b>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CategoryBanner;

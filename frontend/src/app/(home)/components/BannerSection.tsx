'use client';

import bannerData from '@/app/helpers/banners1.json';

const BannerSection = () => {
  const { banner1, banner2 } = bannerData;
  return (
    <div
      className="banner-section"
      data-animation-name="fadeInUpShorter"
      data-animation-delay={200}
    >
      <div className="row">
        {/* Banner 1 */}
        <div className="col-md-4 mb-2 mb-md-0">
          <div
            className="banner banner1 d-flex align-items-center justify-content-end"
            style={{
              backgroundImage: `url(${banner1.image})`,
            }}
          >
            <div className="container d-flex align-items-center justify-content-end">
              <div className="banner-layer text-end">
                <h5 className="coupon-sale-text text-white font1">
                  <b className="text-white font1 ms-auto">
                    <i>{banner1.title1_part1}</i>
                    {banner1.title1_part2}
                  </b>
                  <span className="me-0 ls-0">{banner1.title2}</span>
                </h5>
                <h6 className="font1 ls-10">{banner1.subtext}</h6>
                <h4 className="text-white mb-0">{banner1.highlightText}</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Banner 2 */}
        <div className="col-md-8">
          <div
            className="banner banner2 d-flex align-items-center justify-content-end"
            style={{
              backgroundImage: `url(${banner2.image})`,
            }}
          >
            <div className="container d-flex align-items-center justify-content-end">
              <div className="banner-layer text-end pt-0">
                <h4 className="text-dark mb-0 pl-3 pr-3 pt-1 pb-1">
                  {banner2.title1}
                  <br />
                  {banner2.title2}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;

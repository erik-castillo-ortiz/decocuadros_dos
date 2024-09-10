'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import categories from '@/app/helpers/categories.json'; 
import Link from 'next/link';

const CategoriesSlider = () => {
  return (
    <div className="categories-section">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000 }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 2 },
          480: { slidesPerView: 3 },
          576: { slidesPerView: 4 },
          768: { slidesPerView: 5 },
          992: { slidesPerView: 7 },
          1200: { slidesPerView: 8 }
        }}
        spaceBetween={30}
        className="categories-slider"
        allowTouchMove={true}
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <div className="product-category">
              {/* <a href="demo36-shop.html">
                <figure>
                  <img
                    src={category.image}
                    alt={category.title}
                    width="220"
                    height="220"
                  />
                </figure>
                <div className="category-content">
                  <h3>{category.title}</h3>
                  <span><mark className="count">{category.products}</mark> products</span>
                </div>
              </a> */}
                 <Link href={`/categoria/${category.slug}`} passHref legacyBehavior>
                    <a>
                        <figure>
                            <img
                            src={category.image}
                            alt={category.title}
                            width="220"
                            height="220"
                            />
                        </figure>
                        <div className="category-content">
                            <h3>{category.title}</h3>
                            <span>
                            <mark className="count">{category.products}</mark> products
                            </span>
                        </div>
                    </a>
                </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategoriesSlider;

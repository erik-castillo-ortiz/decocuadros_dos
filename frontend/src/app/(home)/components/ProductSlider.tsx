'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Item from './SpecialOffers/Item';
import { Product } from '@/app/(home)/components/types';
import { fetchProductsByCategory } from '@/app/(home)/components/services/Services';

interface ProductSliderProps {
  categoryId: number;
  productLimit: number;
  background: boolean;
}

const ProductSlider: React.FC<ProductSliderProps> = ({
  categoryId,
  productLimit,
  background,
}) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await fetchProductsByCategory(categoryId);
        setProducts(fetchedProducts.slice(0, productLimit));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [categoryId, productLimit]);

  if (!products || products.length === 0) {
    return <div>No products available</div>;
  }
  console.log('background', background);
  return (
    <div
      className={`products-slider owl-carousel owl-theme nav-outer ${
        background === true ? 'carousel-with-bg' : ''
      } show-nav-hover nav-image-center appear-animate owl-loaded owl-drag animated fadeIn appear-animation-visible`}
    >
      <div className="owl-stage-outer">
        <div className="owl-stage">
          <Swiper
            spaceBetween={1}
            slidesPerView={6}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
              // Aquí defines las columnas para dispositivos móviles
              320: {
                slidesPerView: 2, // Mostrar 2 columnas en móviles pequeños
              },
              768: {
                slidesPerView: 3, // Mostrar 3 columnas en tablets
              },
              1024: {
                slidesPerView: 6, // Mostrar 6 columnas en pantallas grandes
              },
            }}
          >
            {products.map((product) => (
              <SwiperSlide
                key={product.id}
                className="owl-item active"
                style={{ width: '195.833px', marginRight: '1px' }}
              >
                <div className="product-default inner-quickview inner-icon">
                  <Item product={product} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;

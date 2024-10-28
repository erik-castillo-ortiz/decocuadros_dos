'use Client';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Product } from '@/app/(home)/components/types';
import { fetchProductsByCategory } from '@/app/(home)/components/services/Services';
import Item from '../SpecialOffers/Item';

interface ProductSliderProps {
  category: string;
}

const ProductSlider: React.FC<ProductSliderProps> = ({ category }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Convertimos category a number
        const fetchedProducts = await fetchProductsByCategory(Number(category));
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [category]);

  if (!products || products.length === 0) {
    return <div>No products available</div>;
  }

  return (
    <Swiper
      spaceBetween={1}
      slidesPerView={4}
      navigation
      modules={[Navigation]}
      breakpoints={{
        320: { slidesPerView: 2 },
        576: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        992: { slidesPerView: 4 },
      }}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <Item product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSlider;

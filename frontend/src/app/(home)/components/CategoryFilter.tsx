'use client';

import { useState } from 'react';
import CategoryMenu from './CategoryMenu';
import CategoryBanner from './CategoryBanner';
import Item from './SpecialOffers/Item';
import productsData from '@/app/helpers/products2.json'; // Importar productos
import categoryFilterData from '@/app/helpers/CategoryFilter.json'; // Importar las categorías y banner

const CategoryFilter = () => {
  const { categories, banner } = categoryFilterData;
  const { products } = productsData;

  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);

  const handleCategorySelect = (categoryId: number) => {
    setSelectedCategoryId(categoryId);
  };

  // Filtrar productos por categoryId en lugar del nombre de la categoría
  const filteredProducts = selectedCategoryId
    ? products.filter((product) => product.categoryId === selectedCategoryId)
    : products;

  return (
    <>
    <div className="category-filter-section bg-gray appear-animate animated fadeInUpShorter appear-animation-visible" data-animation-name="fadeInUpShorter" data-animation-delay="200" style={{ animationDuration: '1000ms' }}>
      <div className="container">
        <div className="row">
          {/* Menú de categorías */}
          <div className="col-lg-3 pr-lg-3 pr-sm-0 col-sm-6 order-1 order-sm-0">
            <CategoryMenu categories={categories} onCategorySelect={handleCategorySelect} />
          </div>

          {/* Banner */}
          <div className="col-lg-3 col-sm-6 pl-lg-3 pl-sm-0 order-0">
            <CategoryBanner
              title={banner.title}
              subtitle={banner.subtitle}
              discountText={banner.discountText}
              startingPrice={banner.startingPrice}
              backgroundImage={banner.backgroundImage}
            />
          </div>

          {/* Lista de productos filtrados */}
          <div className="col-lg-6 tab-content mt-2 mt-lg-0 order-2 order-sm-0">
            <div className="tab-pane fade h-100 active show" id="filter-1" role="tabpanel" aria-labelledby="filter-1-tab">
              <div className="product-content products-with-divide">
                <div className="row row-joined h-100">
                  {filteredProducts.slice(0, 6).map((product) => (
                    <div key={product.id} className="col-sm-4 col-6">
                      <Item product={product} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CategoryFilter;

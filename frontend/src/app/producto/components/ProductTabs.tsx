'use client';
import React, { useState } from 'react';

interface ProductTabsProps {
  description: string;
}

const ProductTabs: React.FC<ProductTabsProps> = ({ description }) => {
  // Estado para controlar qué pestaña está activa
  const [activeTab, setActiveTab] = useState<string>('description');

  // Función para cambiar la pestaña activa
  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className="product-single-tabs">
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item">
          <button
            className={`nav-link ${
              activeTab === 'description' ? 'active' : ''
            }`}
            onClick={() => handleTabClick('description')}
            role="tab"
          >
            Description
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'reviews' ? 'active' : ''}`}
            onClick={() => handleTabClick('reviews')}
            role="tab"
          >
            {'Información Adicional'}
          </button>
        </li>
      </ul>
      <div className="tab-content">
        <div
          className={`tab-pane fade ${
            activeTab === 'description' ? 'active show' : ''
          }`}
          id="product-desc-content"
          role="tabpanel"
        >
          <p>{description}</p>
        </div>
        <div
          className={`tab-pane fade ${
            activeTab === 'reviews' ? 'active show' : ''
          }`}
          id="product-reviews-content"
          role="tabpanel"
        >
          <p>{'Este producto aún no tiene información adicional'}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;

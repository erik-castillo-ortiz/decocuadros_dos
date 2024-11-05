import React, { useEffect, useState } from 'react';
import { fetchSidebarData, SidebarData } from '@/app/tienda/services/Services';
import CategoriesSection from './Sidebar/CategoriesSection';
import PriceSection from './Sidebar/PriceSection';
import ColorSection from './Sidebar/ColorSection';
import BrandSection from './Sidebar/BrandSection';

interface SidebarProps {
  onFilter?: (minPrice: number, maxPrice: number) => void;
  activeCategoryId?: number | null;
}

const Sidebar: React.FC<SidebarProps> = ({ onFilter, activeCategoryId }) => {
  const [sidebarData, setSidebarData] = useState<SidebarData>({
    categories: [],
    priceRange: { min: 0, max: 1000 },
    colors: [],
    brands: [],
  });

  const [isCategoriesOpen, setIsCategoriesOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [isColorOpen, setIsColorOpen] = useState(true);
  const [isBrandOpen, setIsBrandOpen] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchSidebarData();
      setSidebarData(data);
    };
    loadData();
  }, []);

  const toggleSection = (section: string) => {
    switch (section) {
      case 'categories':
        setIsCategoriesOpen((prev) => !prev);
        break;
      case 'price':
        setIsPriceOpen((prev) => !prev);
        break;
      case 'color':
        setIsColorOpen((prev) => !prev);
        break;
      case 'brand':
        setIsBrandOpen((prev) => !prev);
        break;
      default:
        break;
    }
  };

  return (
    <aside className="sidebar-shop col-lg-3 order-lg-first mobile-sidebar">
      <div className="sidebar-wrapper">
        <CategoriesSection
          categories={sidebarData.categories}
          isOpen={isCategoriesOpen}
          toggleSection={() => toggleSection('categories')}
          activeCategoryId={activeCategoryId} // Pasamos la categoría activa
        />
        <PriceSection
          priceRange={sidebarData.priceRange}
          isOpen={isPriceOpen}
          toggleSection={() => toggleSection('price')}
          onFilter={onFilter}
        />
        <ColorSection
          colors={sidebarData.colors}
          isOpen={isColorOpen}
          toggleSection={() => toggleSection('color')}
        />
        <BrandSection
          brands={sidebarData.brands}
          isOpen={isBrandOpen}
          toggleSection={() => toggleSection('brand')}
        />
      </div>
    </aside>
  );
};

export default Sidebar;

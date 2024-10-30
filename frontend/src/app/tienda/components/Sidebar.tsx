// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { fetchSidebarData, SidebarData } from '@/app/tienda/services/Services';

// const Sidebar: React.FC = () => {
//   const [sidebarData, setSidebarData] = useState<SidebarData>({
//     categories: [],
//     priceRange: { min: 0, max: 1000 },
//     colors: [],
//     brands: [],
//   });
//   const [selectedPrice, setSelectedPrice] = useState(1000);
//   const [activeCategories, setActiveCategories] = useState<number[]>([]);
//   const [isCategoriesOpen, setIsCategoriesOpen] = useState(true);
//   const [isPriceOpen, setIsPriceOpen] = useState(true);
//   const [isColorOpen, setIsColorOpen] = useState(true);
//   const [isBrandOpen, setIsBrandOpen] = useState(true);

//   useEffect(() => {
//     const loadData = async () => {
//       const data = await fetchSidebarData();
//       setSidebarData(data);
//       setSelectedPrice(data.priceRange.max);
//     };
//     loadData();
//   }, []);

//   const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSelectedPrice(Number(e.target.value));
//   };

//   const toggleCategory = (
//     event: React.MouseEvent<HTMLSpanElement>,
//     categoryId: number
//   ) => {
//     event.preventDefault();
//     setActiveCategories((prevCategories) => {
//       if (prevCategories.includes(categoryId)) {
//         return prevCategories.filter((id) => id !== categoryId);
//       } else {
//         return [...prevCategories, categoryId];
//       }
//     });
//   };

//   const toggleSection = (
//     event: React.MouseEvent<HTMLAnchorElement>,
//     section: string
//   ) => {
//     event.preventDefault();
//     switch (section) {
//       case 'categories':
//         setIsCategoriesOpen((prev) => !prev);
//         break;
//       case 'price':
//         setIsPriceOpen((prev) => !prev);
//         break;
//       case 'color':
//         setIsColorOpen((prev) => !prev);
//         break;
//       case 'brand':
//         setIsBrandOpen((prev) => !prev);
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <aside className="sidebar-shop col-lg-3 order-lg-first mobile-sidebar">
//       <div className="sidebar-wrapper">
//         {/* Categories Section */}
//         <div className="widget">
//           <h3 className="widget-title">
//             <a
//               href="#widget-body-2"
//               role="button"
//               aria-expanded={isCategoriesOpen}
//               aria-controls="widget-body-2"
//               onClick={(e) => toggleSection(e, 'categories')}
//               className={`d-flex justify-content-between align-items-center ${
//                 isCategoriesOpen ? '' : 'collapsed'
//               }`}
//             >
//               Categories
//             </a>
//           </h3>
//           <div
//             className={`collapse-transition ${isCategoriesOpen ? 'show' : ''}`}
//             id="widget-body-2"
//           >
//             <div className="widget-body">
//               <ul className="cat-list">
//                 {sidebarData.categories.map((category) => (
//                   <li key={category.id}>
//                     <div
//                       className={`d-flex justify-content-between align-items-center ${
//                         activeCategories.includes(category.id)
//                           ? ''
//                           : 'collapsed'
//                       }`}
//                     >
//                       <Link
//                         href={`/category/${category.id}`}
//                         className="category-link"
//                       >
//                         {category.name}
//                       </Link>
//                       {category.subcategories &&
//                         category.subcategories.length > 0 && (
//                           <span
//                             className="toggle"
//                             onClick={(e) => toggleCategory(e, category.id)}
//                           ></span>
//                         )}
//                     </div>
//                     {category.subcategories &&
//                       category.subcategories.length > 0 && (
//                         <div
//                           className={`collapse-transition ${
//                             activeCategories.includes(category.id) ? 'show' : ''
//                           }`}
//                           id={`widget-category-${category.id}`}
//                         >
//                           <ul className="cat-sublist">
//                             {category.subcategories.map(
//                               (subcategory, index) => (
//                                 <li key={index}>
//                                   <Link
//                                     href={`/subcategory/${subcategory.name}`}
//                                     className="subcategory-link"
//                                   >
//                                     {subcategory.name}
//                                   </Link>
//                                 </li>
//                               )
//                             )}
//                           </ul>
//                         </div>
//                       )}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Price Section */}
//         <div className="widget widget-price">
//           <h3 className="widget-title">
//             <a
//               href="#widget-body-3"
//               role="button"
//               aria-expanded={isPriceOpen}
//               aria-controls="widget-body-3"
//               onClick={(e) => toggleSection(e, 'price')}
//               className={`d-flex justify-content-between align-items-center ${
//                 isPriceOpen ? '' : 'collapsed'
//               }`}
//             >
//               Price
//             </a>
//           </h3>
//           <div
//             className={`collapse-transition ${isPriceOpen ? 'show' : ''}`}
//             id="widget-body-3"
//           >
//             <div className="widget-body pb-0">
//               <form action="#">
//                 <div className="price-slider-wrapper">
//                   <Form.Range
//                     min={sidebarData.priceRange.min}
//                     max={sidebarData.priceRange.max}
//                     value={selectedPrice}
//                     onChange={handlePriceChange}
//                     className="form-range"
//                   />
//                 </div>
//                 <div className="filter-price-action d-flex align-items-center justify-content-between flex-wrap">
//                   <div className="filter-price-text">
//                     Price:{' '}
//                     <span id="filter-price-range">
//                       ${sidebarData.priceRange.min} - ${selectedPrice}
//                     </span>
//                   </div>
//                   <Button variant="primary" size="sm" className="mt-3">
//                     Filter
//                   </Button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>

//         {/* Color Section */}
//         <div className="widget widget-color">
//           <h3 className="widget-title">
//             <a
//               href="#widget-body-4"
//               role="button"
//               aria-expanded={isColorOpen}
//               aria-controls="widget-body-4"
//               onClick={(e) => toggleSection(e, 'color')}
//               className={`d-flex justify-content-between align-items-center ${
//                 isColorOpen ? '' : 'collapsed'
//               }`}
//             >
//               Color
//             </a>
//           </h3>
//           <div
//             className={`collapse-transition ${isColorOpen ? 'show' : ''}`}
//             id="widget-body-4"
//           >
//             <div className="widget-body pb-0">
//               <ul className="config-swatch-list">
//                 {sidebarData.colors.map((color, index) => (
//                   <li key={index}>
//                     <a href="#" style={{ backgroundColor: color }}></a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Brand Section */}
//         <div className="widget widget-brand">
//           <h3 className="widget-title">
//             <a
//               href="#widget-body-7"
//               role="button"
//               aria-expanded={isBrandOpen}
//               aria-controls="widget-body-7"
//               onClick={(e) => toggleSection(e, 'brand')}
//               className={`d-flex justify-content-between align-items-center ${
//                 isBrandOpen ? '' : 'collapsed'
//               }`}
//             >
//               Brand
//             </a>
//           </h3>
//           <div
//             className={`collapse-transition ${isBrandOpen ? 'show' : ''}`}
//             id="widget-body-7"
//           >
//             <div className="widget-body pb-0">
//               <ul className="cat-list">
//                 {sidebarData.brands.map((brand, index) => (
//                   <li key={index}>
//                     <Link href={`/brand/${brand}`} className="brand-link">
//                       {brand}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;
import React, { useEffect, useState } from 'react';
import { fetchSidebarData, SidebarData } from '@/app/tienda/services/Services';
import CategoriesSection from './Sidebar/CategoriesSection';
import PriceSection from './Sidebar/PriceSection';
import ColorSection from './Sidebar/ColorSection';
import BrandSection from './Sidebar/BrandSection';

interface SidebarProps {
  onFilter?: (minPrice: number, maxPrice: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onFilter }) => {
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

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { Category } from '@/app/tienda/services/Services';

// interface CategoriesSectionProps {
//   categories: Category[];
//   isOpen: boolean;
//   toggleSection: () => void;
//   activeCategoryId?: number | null;
// }

// const CategoriesSection: React.FC<CategoriesSectionProps> = ({
//   categories,
//   isOpen,
//   toggleSection,
//   activeCategoryId,
// }) => {
//   const [activeCategories, setActiveCategories] = useState<number[]>([]);

//   useEffect(() => {
//     if (activeCategoryId) {
//       const expandedCategories = getParentCategoryIds(activeCategoryId);
//       setActiveCategories(expandedCategories);
//     }
//   }, [activeCategoryId, categories]);

//   const getParentCategoryIds = (categoryId: number): number[] => {
//     const expandedCategories: number[] = [];
//     let currentCategory = categories.find(
//       (cat) => cat.categoryId === categoryId
//     );

//     while (currentCategory) {
//       expandedCategories.push(currentCategory.categoryId);
//       currentCategory = categories.find(
//         (cat) => cat.categoryId === currentCategory?.categoryParent
//       );
//     }

//     return expandedCategories;
//   };

//   const toggleCategory = (categoryId: number) => {
//     setActiveCategories((prevCategories) => {
//       if (prevCategories.includes(categoryId)) {
//         return prevCategories.filter((id) => id !== categoryId);
//       } else {
//         return [...prevCategories, categoryId];
//       }
//     });
//   };

//   return (
//     <div className="widget">
//       <h3 className="widget-title">
//         <a
//           href="#widget-body-2"
//           role="button"
//           aria-expanded={isOpen}
//           onClick={(e) => {
//             e.preventDefault();
//             toggleSection();
//           }}
//           className={`d-flex justify-content-between align-items-center ${
//             isOpen ? '' : 'collapsed'
//           }`}
//         >
//           Categories
//         </a>
//       </h3>
//       <div
//         className={`collapse-transition ${isOpen ? 'show' : ''}`}
//         id="widget-body-2"
//       >
//         <div className="widget-body">
//           <ul className="cat-list">
//             {categories
//               .filter((category) => category.categoryParent === null)
//               .map((category) => (
//                 <li key={category.categoryId}>
//                   <div
//                     className={`d-flex justify-content-between align-items-center ${
//                       activeCategories.includes(category.categoryId) ||
//                       activeCategoryId === category.categoryId ||
//                       (category.subcategories &&
//                         category.subcategories.some(
//                           (subcategory) =>
//                             activeCategoryId === subcategory.categoryId
//                         ))
//                         ? ''
//                         : 'collapsed'
//                     }`}
//                   >
//                     <Link
//                       href={`/categoria/${category.categorySlug}`}
//                       className={`category-link ${
//                         activeCategoryId === category.categoryId
//                           ? 'category-link--active'
//                           : ''
//                       }`}
//                     >
//                       {category.categoryName}
//                     </Link>
//                     {category.subcategories &&
//                       category.subcategories.length > 0 && (
//                         <span
//                           className="toggle"
//                           onClick={() => toggleCategory(category.categoryId)}
//                         ></span>
//                       )}
//                   </div>
//                   {category.subcategories &&
//                     category.subcategories.length > 0 && (
//                       <div
//                         className={`collapse-transition ${
//                           activeCategories.includes(category.categoryId) ||
//                           category.subcategories.some(
//                             (subcategory) =>
//                               activeCategoryId === subcategory.categoryId
//                           )
//                             ? 'show'
//                             : ''
//                         }`}
//                       >
//                         <ul className="cat-sublist">
//                           {category.subcategories.map((subcategory) => (
//                             <li key={subcategory.categoryId}>
//                               <Link
//                                 href={`/categoria/${subcategory.categorySlug}`}
//                                 className={`subcategory-link ${
//                                   activeCategoryId === subcategory.categoryId
//                                     ? 'subcategory-link--active'
//                                     : ''
//                                 }`}
//                               >
//                                 {subcategory.categoryName}
//                               </Link>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     )}
//                 </li>
//               ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoriesSection;
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Category } from '@/app/tienda/services/Services';

interface CategoriesSectionProps {
  categories: Category[];
  isOpen: boolean;
  toggleSection: () => void;
  activeCategoryId?: number | null;
}

const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  categories,
  isOpen,
  toggleSection,
  activeCategoryId,
}) => {
  const [activeCategories, setActiveCategories] = useState<number[]>([]);

  useEffect(() => {
    if (activeCategoryId) {
      const expandedCategories = getParentCategoryIds(activeCategoryId);
      setActiveCategories(expandedCategories);
    }
  }, [activeCategoryId, categories]);

  const getParentCategoryIds = (categoryId: number): number[] => {
    const expandedCategories: number[] = [];
    let currentCategory = categories.find(
      (cat) => cat.categoryId === categoryId
    );

    while (currentCategory) {
      expandedCategories.push(currentCategory.categoryId);
      currentCategory = categories.find(
        (cat) => cat.categoryId === currentCategory?.categoryParent
      );
    }

    return expandedCategories;
  };

  const toggleCategory = (categoryId: number) => {
    setActiveCategories((prevCategories) => {
      if (prevCategories.includes(categoryId)) {
        return prevCategories.filter((id) => id !== categoryId);
      } else {
        return [...prevCategories, categoryId];
      }
    });
  };

  const buildCategoryPath = (category: Category): string => {
    let path = category.categorySlug;
    let currentCategory = category;
    while (currentCategory.categoryParent !== null) {
      const parentCategory = categories.find(
        (cat) => cat.categoryId === currentCategory.categoryParent
      );
      if (parentCategory) {
        path = `${parentCategory.categorySlug}/${path}`;
        currentCategory = parentCategory;
      } else {
        break;
      }
    }
    return `/categoria/${path}`;
  };

  return (
    <div className="widget">
      <h3 className="widget-title">
        <a
          href="#widget-body-2"
          role="button"
          aria-expanded={isOpen}
          onClick={(e) => {
            e.preventDefault();
            toggleSection();
          }}
          className={`d-flex justify-content-between align-items-center ${
            isOpen ? '' : 'collapsed'
          }`}
        >
          Categories
        </a>
      </h3>
      <div
        className={`collapse-transition ${isOpen ? 'show' : ''}`}
        id="widget-body-2"
      >
        <div className="widget-body">
          <ul className="cat-list">
            {categories
              .filter((category) => category.categoryParent === null)
              .map((category) => (
                <li key={category.categoryId}>
                  <div
                    className={`d-flex justify-content-between align-items-center ${
                      activeCategories.includes(category.categoryId) ||
                      activeCategoryId === category.categoryId ||
                      (category.subcategories &&
                        category.subcategories.some(
                          (subcategory) =>
                            activeCategoryId === subcategory.categoryId
                        ))
                        ? ''
                        : 'collapsed'
                    }`}
                  >
                    <Link
                      href={buildCategoryPath(category)}
                      className={`category-link ${
                        activeCategoryId === category.categoryId
                          ? 'category-link--active'
                          : ''
                      }`}
                    >
                      {category.categoryName}
                    </Link>
                    {category.subcategories &&
                      category.subcategories.length > 0 && (
                        <span
                          className="toggle"
                          onClick={() => toggleCategory(category.categoryId)}
                        ></span>
                      )}
                  </div>
                  {category.subcategories &&
                    category.subcategories.length > 0 && (
                      <div
                        className={`collapse-transition ${
                          activeCategories.includes(category.categoryId) ||
                          category.subcategories.some(
                            (subcategory) =>
                              activeCategoryId === subcategory.categoryId
                          )
                            ? 'show'
                            : ''
                        }`}
                      >
                        <ul className="cat-sublist">
                          {category.subcategories.map((subcategory) => (
                            <li key={subcategory.categoryId}>
                              <Link
                                href={buildCategoryPath(subcategory)}
                                className={`subcategory-link ${
                                  activeCategoryId === subcategory.categoryId
                                    ? 'subcategory-link--active'
                                    : ''
                                }`}
                              >
                                {subcategory.categoryName}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;

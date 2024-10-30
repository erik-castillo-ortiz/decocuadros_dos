import React, { useState } from 'react';
import Link from 'next/link';
import { Category } from '@/app/tienda/services/Services';

interface CategoriesSectionProps {
  categories: Category[];
  isOpen: boolean;
  toggleSection: () => void;
}

const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  categories,
  isOpen,
  toggleSection,
}) => {
  const [activeCategories, setActiveCategories] = useState<number[]>([]);

  const toggleCategory = (categoryId: number) => {
    setActiveCategories((prevCategories) =>
      prevCategories.includes(categoryId)
        ? prevCategories.filter((id) => id !== categoryId)
        : [...prevCategories, categoryId]
    );
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
            {categories.map((category) => (
              <li key={category.id}>
                <div
                  className={`d-flex justify-content-between align-items-center ${
                    activeCategories.includes(category.id) ? '' : 'collapsed'
                  }`}
                >
                  <Link
                    href={`/category/${category.id}`}
                    className="category-link"
                  >
                    {category.name}
                  </Link>
                  {category.subcategories &&
                    category.subcategories.length > 0 && (
                      <span
                        className="toggle"
                        onClick={() => toggleCategory(category.id)}
                      ></span>
                    )}
                </div>
                {category.subcategories &&
                  category.subcategories.length > 0 && (
                    <div
                      className={`collapse-transition ${
                        activeCategories.includes(category.id) ? 'show' : ''
                      }`}
                    >
                      <ul className="cat-sublist">
                        {category.subcategories.map((subcategory, index) => (
                          <li key={index}>
                            <Link
                              href={`/subcategory/${subcategory.name}`}
                              className="subcategory-link"
                            >
                              {subcategory.name}
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

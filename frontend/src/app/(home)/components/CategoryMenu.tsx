// 'use client';

import Link from 'next/link';

interface CategoryMenuProps {
  categories: { id: number; name: string }[];
  onCategorySelect: (categoryId: number) => void;
}

const CategoryMenu = ({ categories, onCategorySelect }: CategoryMenuProps) => {
  return (
    <div className="shop-list h-100">
      <h4>Sort By</h4>
      <ul className="nav nav-tabs flex-sm-column border-0" role="tablist">
        {categories.map((category) => (
          <li
            key={category.id}
            className="nav-item cursor-pointer" 
            onClick={() => onCategorySelect(category.id)} 
            style={{ cursor: 'pointer' }} 
          >
            <a className="nav-link">{category.name}</a>
          </li>
        ))}
      </ul>
      <Link href="/view-all" className="view-all">
        View All<i className="fas fa-long-arrow-alt-right"></i>
      </Link>
    </div>
  );
};

export default CategoryMenu;

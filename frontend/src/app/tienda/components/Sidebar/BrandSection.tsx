import React from 'react';
import Link from 'next/link';

interface BrandSectionProps {
  brands: string[];
  isOpen: boolean;
  toggleSection: () => void;
}

const BrandSection: React.FC<BrandSectionProps> = ({
  brands,
  isOpen,
  toggleSection,
}) => {
  return (
    <div className="widget widget-brand">
      <h3 className="widget-title">
        <a
          href="#widget-body-7"
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
          Brand
        </a>
      </h3>
      <div
        className={`collapse-transition ${isOpen ? 'show' : ''}`}
        id="widget-body-7"
      >
        <div className="widget-body pb-0">
          <ul className="cat-list">
            {brands.map((brand, index) => (
              <li key={index}>
                <Link href={`/brand/${brand}`} className="brand-link">
                  {brand}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BrandSection;

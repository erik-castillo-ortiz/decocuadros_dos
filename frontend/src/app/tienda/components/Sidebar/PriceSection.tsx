import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Button from 'react-bootstrap/Button';

interface PriceSectionProps {
  priceRange: { min: number; max: number };
  isOpen: boolean;
  toggleSection: () => void;
  onFilter?: (minPrice: number, maxPrice: number) => void; // Agregar onFilter aquí
}

const PriceSection: React.FC<PriceSectionProps> = ({
  priceRange,
  isOpen,
  toggleSection,
  onFilter, // Recibir onFilter como prop
}) => {
  const [selectedPrice, setSelectedPrice] = useState<[number, number]>([
    priceRange.min,
    priceRange.max,
  ]);

  const handlePriceChange = (value: number | number[]) => {
    if (Array.isArray(value) && value.length === 2) {
      setSelectedPrice([value[0], value[1]]);
    }
  };

  const handleFilterClick = () => {
    if (onFilter) {
      onFilter(selectedPrice[0], selectedPrice[1]);
    }
  };

  return (
    <div className="widget widget-price">
      <h3 className="widget-title">
        <a
          href="#widget-body-3"
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
          Price
        </a>
      </h3>
      <div
        className={`collapse-transition ${isOpen ? 'show' : ''}`}
        id="widget-body-3"
      >
        <div className="widget-body pb-0">
          <form action="#">
            <div className="price-slider-wrapper" style={{ width: '98%' }}>
              <Slider
                range
                min={priceRange.min}
                max={priceRange.max}
                defaultValue={[priceRange.min, priceRange.max]}
                value={selectedPrice}
                onChange={handlePriceChange}
                allowCross={false}
                trackStyle={[
                  { backgroundColor: '#3050ff' },
                  { boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.38) inset' },
                ]}
                handleStyle={[
                  { backgroundColor: '#3050ff' },
                  { backgroundColor: '#3050ff' },
                ]}
                railStyle={{ backgroundColor: '#eee' }}
              />
            </div>
            <div className="filter-price-action d-flex align-items-center justify-content-between flex-wrap">
              <div className="filter-price-text">
                Price: ${selectedPrice[0]} - ${selectedPrice[1]}
              </div>
              <Button
                variant="primary"
                size="sm"
                className="mt-3"
                onClick={handleFilterClick} // Llamar a onFilter al hacer clic
              >
                Filter
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PriceSection;

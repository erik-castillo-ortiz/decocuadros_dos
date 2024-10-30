import React from 'react';

interface ColorSectionProps {
  colors: string[];
  isOpen: boolean;
  toggleSection: () => void;
}

const ColorSection: React.FC<ColorSectionProps> = ({
  colors,
  isOpen,
  toggleSection,
}) => {
  return (
    <div className="widget widget-color">
      <h3 className="widget-title">
        <a
          href="#widget-body-4"
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
          Color
        </a>
      </h3>
      <div
        className={`collapse-transition ${isOpen ? 'show' : ''}`}
        id="widget-body-4"
      >
        <div className="widget-body pb-0">
          <ul className="config-swatch-list">
            {colors.map((color, index) => (
              <li key={index}>
                <a href="#" style={{ backgroundColor: color }}></a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ColorSection;

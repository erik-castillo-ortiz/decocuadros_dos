import React from 'react';

type TabOption = 'featured' | 'new' | 'best';

interface TabNavigationProps {
  activeTab: TabOption;
  onTabChange: (tab: TabOption) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  activeTab,
  onTabChange,
}) => (
  <ul className="nav justify-content-lg-center mb-0" role="tablist">
    <li className="nav-item">
      <button
        className={`nav-link ${activeTab === 'featured' ? 'active' : ''}`}
        onClick={() => onTabChange('featured')}
      >
        Best Sellers
      </button>
    </li>
    <li className="nav-item">
      <button
        className={`nav-link ${activeTab === 'new' ? 'active' : ''}`}
        onClick={() => onTabChange('new')}
      >
        New Arrivals
      </button>
    </li>
    <li className="nav-item">
      <button
        className={`nav-link ${activeTab === 'best' ? 'active' : ''}`}
        onClick={() => onTabChange('best')}
      >
        Best Ratings
      </button>
    </li>
  </ul>
);

export default TabNavigation;

// import React from 'react';

// const Toolbox = () => (
//   <nav className="toolbox sticky-header" data-sticky-options="{'mobile': true}">
//     <div className="toolbox-left">
//       <a href="#" className="sidebar-toggle">
//         <span>Filter</span>
//       </a>
//       <div className="toolbox-item toolbox-sort">
//         <label>Sort By:</label>
//         <div className="select-custom">
//           <select name="orderby" className="form-control">
//             <option value="menu_order">Default sorting</option>
//             <option value="popularity">Sort by popularity</option>
//             <option value="rating">Sort by average rating</option>
//             <option value="date">Sort by newness</option>
//             <option value="price">Sort by price: low to high</option>
//             <option value="price-desc">Sort by price: high to low</option>
//           </select>
//         </div>
//       </div>
//     </div>
//     <div className="toolbox-right">
//       <div className="toolbox-item toolbox-show">
//         <label>Show:</label>
//         <div className="select-custom">
//           <select name="count" className="form-control">
//             <option value={12}>12</option>
//             <option value={24}>24</option>
//             <option value={36}>36</option>
//           </select>
//         </div>
//       </div>
//       <div className="toolbox-item layout-modes">
//         <a href="#" className="layout-btn btn-grid active" title="Grid">
//           <i className="icon-mode-grid" />
//         </a>
//         <a href="#" className="layout-btn btn-list" title="List">
//           <i className="icon-mode-list" />
//         </a>
//       </div>
//     </div>
//   </nav>
// );

// export default Toolbox;
import React from 'react';

interface ToolboxProps {
  productsPerPage: number;
  sortOrder: string;
  onProductsPerPageChange: (count: number) => void;
  onSortOrderChange: (order: string) => void;
}

const Toolbox: React.FC<ToolboxProps> = ({
  productsPerPage,
  sortOrder,
  onProductsPerPageChange,
  onSortOrderChange,
}) => (
  <nav className="toolbox sticky-header" data-sticky-options="{'mobile': true}">
    <div className="toolbox-left">
      <a href="#" className="sidebar-toggle">
        <span>Filter</span>
      </a>
      <div className="toolbox-item toolbox-sort">
        <label>Sort By:</label>
        <div className="select-custom">
          <select
            name="orderby"
            className="form-control"
            value={sortOrder}
            onChange={(e) => onSortOrderChange(e.target.value)}
          >
            <option value="menu_order">Default sorting</option>
            <option value="popularity">Sort by popularity</option>
            <option value="rating">Sort by average rating</option>
            <option value="date">Sort by newness</option>
            <option value="price">Sort by price: low to high</option>
            <option value="price-desc">Sort by price: high to low</option>
          </select>
        </div>
      </div>
    </div>
    <div className="toolbox-right">
      <div className="toolbox-item toolbox-show">
        <label>Show:</label>
        <div className="select-custom">
          <select
            name="count"
            className="form-control"
            value={productsPerPage}
            onChange={(e) => onProductsPerPageChange(parseInt(e.target.value))}
          >
            <option value={12}>12</option>
            <option value={24}>24</option>
            <option value={36}>36</option>
          </select>
        </div>
      </div>
      <div className="toolbox-item layout-modes">
        <a href="#" className="layout-btn btn-grid active" title="Grid">
          <i className="icon-mode-grid" />
        </a>
        <a href="#" className="layout-btn btn-list" title="List">
          <i className="icon-mode-list" />
        </a>
      </div>
    </div>
  </nav>
);

export default Toolbox;

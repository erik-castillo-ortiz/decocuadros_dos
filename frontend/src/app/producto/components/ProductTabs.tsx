// import React from 'react';

// interface ProductTabsProps {
//   description: string;
// }

// const ProductTabs: React.FC<ProductTabsProps> = ({ description }) => (
//   <div className="product-single-tabs">
//     <ul className="nav nav-tabs" role="tablist">
//       <li className="nav-item">
//         <a className="nav-link active" data-toggle="tab" href="#description">
//           Description
//         </a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" data-toggle="tab" href="#reviews">
//           Reviews
//         </a>
//       </li>
//     </ul>
//     <div className="tab-content">
//       <div className="tab-pane fade show active" id="description">
//         <p>{description}</p>
//       </div>
//       <div className="tab-pane fade" id="reviews">
//         <p>No reviews yet.</p>
//       </div>
//     </div>
//   </div>
// );

// export default ProductTabs;
// producto/components/ProductTabs.tsx

import React from 'react';

interface ProductTabsProps {
  description: string;
}

const ProductTabs: React.FC<ProductTabsProps> = ({ description }) => {
  return (
    <div className="product-single-tabs">
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link active show"
            data-toggle="tab"
            href="#product-desc-content"
            role="tab"
          >
            Description
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="tab"
            href="#product-reviews-content"
            role="tab"
          >
            Reviews (1)
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div
          className="tab-pane fade active show"
          id="product-desc-content"
          role="tabpanel"
        >
          <p>{description}</p>
        </div>
        <div
          className="tab-pane fade"
          id="product-reviews-content"
          role="tabpanel"
        >
          <p>No reviews yet.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;

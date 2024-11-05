// 'use client';
// import React, { useEffect, useState } from 'react';
// import {
//   fetchFilteredProducts,
//   fetchCategoryData,
// } from '@/app/(home)/components/services/Services';
// import { Product } from '@/app/(home)/components/types';
// import Toolbox from './components/Toolbox';
// import ProductGrid from './components/ProductGrid';
// import Sidebar from './components/Sidebar';

// interface TiendaProps {
//   categorySlug?: string;
// }

// const Tienda: React.FC<TiendaProps> = ({ categorySlug }) => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [productsPerPage, setProductsPerPage] = useState(12);
//   const [sortOrder, setSortOrder] = useState('menu_order');
//   const [totalProducts, setTotalProducts] = useState(0);
//   const [priceRange, setPriceRange] = useState<
//     { min: number; max: number } | undefined
//   >(undefined);
//   const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null);

//   const loadProducts = async () => {
//     let categoryId;
//     if (categorySlug) {
//       const categoryData = await fetchCategoryData(categorySlug);
//       if (categoryData) {
//         categoryId = categoryData.categoryId;
//         setActiveCategoryId(categoryId);
//       }
//     }

//     const { products: fetchedProducts, total } = await fetchFilteredProducts(
//       productsPerPage,
//       currentPage,
//       sortOrder,
//       priceRange,
//       categoryId
//     );
//     setProducts(fetchedProducts);
//     setTotalProducts(total);
//   };

//   useEffect(() => {
//     loadProducts();
//   }, [categorySlug, currentPage, productsPerPage, sortOrder, priceRange]);

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//   };

//   const handleProductsPerPageChange = (count: number) => {
//     setProductsPerPage(count);
//     setCurrentPage(1);
//   };

//   const handleSortOrderChange = (order: string) => {
//     setSortOrder(order);
//   };

//   const handlePriceFilter = (minPrice: number, maxPrice: number) => {
//     setPriceRange({ min: minPrice, max: maxPrice });
//     setCurrentPage(1);
//   };

//   return (
//     <div className="container pt-2">
//       <div className="row">
//         <div className="col-lg-9 main-content">
//           <Toolbox
//             productsPerPage={productsPerPage}
//             sortOrder={sortOrder}
//             onProductsPerPageChange={handleProductsPerPageChange}
//             onSortOrderChange={handleSortOrderChange}
//           />
//           <ProductGrid products={products} />
//           <nav className="toolbox toolbox-pagination border-0">
//             <div className="toolbox-item toolbox-show">
//               <label>Show:</label>
//               <div className="select-custom">
//                 <select
//                   name="count"
//                   className="form-control"
//                   value={productsPerPage}
//                   onChange={(e) =>
//                     handleProductsPerPageChange(Number(e.target.value))
//                   }
//                 >
//                   <option value={12}>12</option>
//                   <option value={24}>24</option>
//                   <option value={36}>36</option>
//                 </select>
//               </div>
//             </div>
//             <ul className="pagination toolbox-item">
//               {Array.from({
//                 length: Math.ceil(totalProducts / productsPerPage),
//               }).map((_, index) => (
//                 <li
//                   key={index}
//                   className={`page-item ${
//                     currentPage === index + 1 ? 'active' : ''
//                   }`}
//                 >
//                   <a
//                     className="page-link"
//                     href="#"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       handlePageChange(index + 1);
//                     }}
//                   >
//                     {index + 1}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </div>
//         <Sidebar
//           onFilter={handlePriceFilter}
//           activeCategoryId={activeCategoryId}
//         />
//       </div>
//     </div>
//   );
// };

// export default Tienda;
// 'use client';
// import React, { useEffect, useState } from 'react';
// import {
//   fetchFilteredProducts,
//   fetchCategoryData,
// } from '@/app/(home)/components/services/Services';
// import { Product } from '@/app/(home)/components/types';
// import Toolbox from './components/Toolbox';
// import ProductGrid from './components/ProductGrid';
// import Sidebar from './components/Sidebar';

// interface TiendaProps {
//   categorySlug?: string | string[];
// }

// const Tienda: React.FC<TiendaProps> = ({ categorySlug }) => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [productsPerPage, setProductsPerPage] = useState(12);
//   const [sortOrder, setSortOrder] = useState('menu_order');
//   const [totalProducts, setTotalProducts] = useState(0);
//   const [priceRange, setPriceRange] = useState<
//     { min: number; max: number } | undefined
//   >(undefined);
//   const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null);

//   const loadProducts = async () => {
//     let categoryId;
//     if (categorySlug) {
//       // Convertir categorySlug a un string si es un array
//       const slug = Array.isArray(categorySlug)
//         ? categorySlug[categorySlug.length - 1]
//         : categorySlug;
//       const categoryData = await fetchCategoryData(slug);
//       if (categoryData) {
//         categoryId = categoryData.categoryId;
//         setActiveCategoryId(categoryId);
//       }
//     }

//     const { products: fetchedProducts, total } = await fetchFilteredProducts(
//       productsPerPage,
//       currentPage,
//       sortOrder,
//       priceRange,
//       categoryId
//     );
//     setProducts(fetchedProducts);
//     setTotalProducts(total);
//   };

//   useEffect(() => {
//     loadProducts();
//   }, [categorySlug, currentPage, productsPerPage, sortOrder, priceRange]);

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//   };

//   const handleProductsPerPageChange = (count: number) => {
//     setProductsPerPage(count);
//     setCurrentPage(1);
//   };

//   const handleSortOrderChange = (order: string) => {
//     setSortOrder(order);
//   };

//   const handlePriceFilter = (minPrice: number, maxPrice: number) => {
//     setPriceRange({ min: minPrice, max: maxPrice });
//     setCurrentPage(1);
//   };

//   return (
//     <div className="container pt-2">
//       <div className="row">
//         <div className="col-lg-9 main-content">
//           <Toolbox
//             productsPerPage={productsPerPage}
//             sortOrder={sortOrder}
//             onProductsPerPageChange={handleProductsPerPageChange}
//             onSortOrderChange={handleSortOrderChange}
//           />
//           <ProductGrid products={products} />
//           <nav className="toolbox toolbox-pagination border-0">
//             <div className="toolbox-item toolbox-show">
//               <label>Show:</label>
//               <div className="select-custom">
//                 <select
//                   name="count"
//                   className="form-control"
//                   value={productsPerPage}
//                   onChange={(e) =>
//                     handleProductsPerPageChange(Number(e.target.value))
//                   }
//                 >
//                   <option value={12}>12</option>
//                   <option value={24}>24</option>
//                   <option value={36}>36</option>
//                 </select>
//               </div>
//             </div>
//             <ul className="pagination toolbox-item">
//               {Array.from({
//                 length: Math.ceil(totalProducts / productsPerPage),
//               }).map((_, index) => (
//                 <li
//                   key={index}
//                   className={`page-item ${
//                     currentPage === index + 1 ? 'active' : ''
//                   }`}
//                 >
//                   <a
//                     className="page-link"
//                     href="#"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       handlePageChange(index + 1);
//                     }}
//                   >
//                     {index + 1}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </div>
//         <Sidebar
//           onFilter={handlePriceFilter}
//           activeCategoryId={activeCategoryId}
//         />
//       </div>
//     </div>
//   );
// };

// export default Tienda;
'use client';
import React, { useEffect, useState } from 'react';
import {
  fetchFilteredProducts,
  fetchCategoryData,
} from '@/app/(home)/components/services/Services';
import { Product } from '@/app/(home)/components/types';
import Toolbox from './components/Toolbox';
import ProductGrid from './components/ProductGrid';
import Sidebar from './components/Sidebar';

interface TiendaProps {
  categorySlug?: string | string[];
}

const Tienda: React.FC<TiendaProps> = ({ categorySlug }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(12);
  const [sortOrder, setSortOrder] = useState('menu_order');
  const [totalProducts, setTotalProducts] = useState(0);
  const [priceRange, setPriceRange] = useState<
    { min: number; max: number } | undefined
  >(undefined);
  const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null);

  const loadProducts = async () => {
    let categoryId: number | null = null;

    if (categorySlug) {
      // Convertir categorySlug a un string si es un array
      const slug = Array.isArray(categorySlug)
        ? categorySlug[categorySlug.length - 1]
        : categorySlug;
      const categoryData = await fetchCategoryData(slug);
      if (categoryData) {
        categoryId = categoryData.categoryId ?? null;
        setActiveCategoryId(categoryId);
      }
    }

    const { products: fetchedProducts, total } = await fetchFilteredProducts(
      productsPerPage,
      currentPage,
      sortOrder,
      priceRange,
      categoryId
    );
    setProducts(fetchedProducts);
    setTotalProducts(total);
  };

  useEffect(() => {
    loadProducts();
  }, [categorySlug, currentPage, productsPerPage, sortOrder, priceRange]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleProductsPerPageChange = (count: number) => {
    setProductsPerPage(count);
    setCurrentPage(1);
  };

  const handleSortOrderChange = (order: string) => {
    setSortOrder(order);
  };

  const handlePriceFilter = (minPrice: number, maxPrice: number) => {
    setPriceRange({ min: minPrice, max: maxPrice });
    setCurrentPage(1);
  };

  return (
    <div className="container pt-2">
      <div className="row">
        <div className="col-lg-9 main-content">
          <Toolbox
            productsPerPage={productsPerPage}
            sortOrder={sortOrder}
            onProductsPerPageChange={handleProductsPerPageChange}
            onSortOrderChange={handleSortOrderChange}
          />
          <ProductGrid products={products} />
          <nav className="toolbox toolbox-pagination border-0">
            <div className="toolbox-item toolbox-show">
              <label>Show:</label>
              <div className="select-custom">
                <select
                  name="count"
                  className="form-control"
                  value={productsPerPage}
                  onChange={(e) =>
                    handleProductsPerPageChange(Number(e.target.value))
                  }
                >
                  <option value={12}>12</option>
                  <option value={24}>24</option>
                  <option value={36}>36</option>
                </select>
              </div>
            </div>
            <ul className="pagination toolbox-item">
              {Array.from({
                length: Math.ceil(totalProducts / productsPerPage),
              }).map((_, index) => (
                <li
                  key={index}
                  className={`page-item ${
                    currentPage === index + 1 ? 'active' : ''
                  }`}
                >
                  <a
                    className="page-link"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(index + 1);
                    }}
                  >
                    {index + 1}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <Sidebar
          onFilter={handlePriceFilter}
          activeCategoryId={activeCategoryId}
        />
      </div>
    </div>
  );
};

export default Tienda;

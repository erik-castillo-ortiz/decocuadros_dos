import productData from '@/app/helpers/products2.json';
import { Product } from '@/app/(home)/components/types';
import categories from '@/app/helpers/Categories_2.json';
export const fetchFeaturedProduct = async () => {
  const products = productData.products;

  // Filtra el producto que sea featured y ordena por fecha de publicación
  const featuredProducts = products
    .filter((product) => product.isFeatured)
    .sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    );

  return featuredProducts[0] || null;
};

const productLimit = 8;

export const fetchProducts = async () => {
  const products = productData.products
    .sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    )
    .slice(0, productLimit);

  return products;
};
export const fetchProductsByCategory = async (
  categoryId: number
): Promise<Product[]> => {
  // Filtra los productos por categoría y devuelve los más recientes.
  const products = productData.products.filter(
    (product: Product) => product.categoryId === categoryId
  );
  return products;
};

// Servicio para filtrar productos por ventas ("Best Sellers")
export const fetchBestSellers = async (
  categoryIds: number[] | 'All' = 'All',
  limit: number = 8
): Promise<Product[]> => {
  let products = productData.products;

  // Filtrado por categorías si no es "All"
  if (categoryIds !== 'All') {
    products = products.filter((product) =>
      categoryIds.includes(product.categoryId)
    );
  }

  // Ordenar por `isHot` (true antes que false) y limitar resultados
  products = products
    .filter((product) => product.isHot) // Filtra solo los productos `isHot`
    .slice(0, limit);

  return products;
};

// Servicio para filtrar productos por fecha de publicación ("New Arrivals")
export const fetchNewArrivals = async (
  categoryIds: number[] | 'All' = 'All',
  limit: number = 8
): Promise<Product[]> => {
  console.log('fetchNewArrivals');
  let products = productData.products;

  // Filtrado por categorías si no es "All"
  if (categoryIds !== 'All') {
    products = products.filter((product) =>
      categoryIds.includes(product.categoryId)
    );
  }

  // Ordenar por fecha de publicación y limitar resultados
  products = products
    .sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    )
    .slice(0, limit);
  console.log(products);
  return products;
};

// Servicio para filtrar productos por ratings ("Best Ratings")
export const fetchBestRatings = async (
  categoryIds: number[] | 'All' = 'All',
  limit: number = 8
): Promise<Product[]> => {
  console.log('fetchBestRatings');
  let products = productData.products;

  // Filtrado por categorías si no es "All"
  if (categoryIds !== 'All') {
    products = products.filter((product) =>
      categoryIds.includes(product.categoryId)
    );
  }

  // Ordenar por rating y limitar resultados
  products = products.sort((a, b) => b.rating - a.rating).slice(0, limit);
  console.log(products);

  return products;
};
// Servicio para obtener productos en oferta (isHot = true)
export const fetchOfferProducts = async (
  limit: number = 6
): Promise<Product[]> => {
  const products = productData.products
    .filter((product: Product) => product.isHot === true)
    .slice(0, limit);

  return products;
};

const DEFAULT_PRODUCT_LIMIT = 12;
// src/app/(home)/components/services/Services.tsx

// import productData from '@/app/helpers/products2.json';
// import categories from '@/app/helpers/Categories_2.json';
// import { Product } from '@/app/(home)/components/types';

// Función auxiliar para obtener los IDs de todas las subcategorías dado un ID de categoría
const getSubcategoryIds = (categoryId: number): number[] => {
  console.log('Category: ', categoryId);
  const subcategoryIds: number[] = [];
  const stack = [categoryId];

  while (stack.length) {
    const currentId = stack.pop();
    subcategoryIds.push(currentId!);
    categories.forEach((category) => {
      if (category.categoryParent === currentId) {
        stack.push(category.categoryId);
      }
    });
  }
  console.log('SubCategories', subcategoryIds);
  return subcategoryIds;
};

export const fetchFilteredProducts = async (
  limit = 12,
  page = 1,
  sortOrder = 'menu_order',
  priceRange?: { min: number; max: number },
  categoryId?: number
): Promise<{ products: Product[]; total: number }> => {
  let products = [...productData.products];

  // Filtrar productos por categoría y sus subcategorías si se proporciona un categoryId
  if (categoryId) {
    const categoryIds = getSubcategoryIds(categoryId);
    products = products.filter((product) =>
      categoryIds.includes(product.categoryId)
    );
  }

  // Filtrar por rango de precios si se proporciona
  if (priceRange) {
    products = products.filter((product) => {
      const productPrice = parseFloat(product.newPrice.replace('$', ''));
      return productPrice >= priceRange.min && productPrice <= priceRange.max;
    });
  }

  // Aplicar orden de productos
  switch (sortOrder) {
    case 'popularity':
    case 'rating':
      products.sort((a, b) => b.rating - a.rating);
      break;
    case 'date':
      products.sort(
        (a, b) =>
          new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
      );
      break;
    case 'price':
      products.sort(
        (a, b) =>
          parseFloat(a.newPrice.replace('$', '')) -
          parseFloat(b.newPrice.replace('$', ''))
      );
      break;
    case 'price-desc':
      products.sort(
        (a, b) =>
          parseFloat(b.newPrice.replace('$', '')) -
          parseFloat(a.newPrice.replace('$', ''))
      );
      break;
    default:
      products.sort(
        (a, b) =>
          new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
      );
      break;
  }

  // Total de productos antes de la paginación
  const total = products.length;

  // Paginación
  const start = (page - 1) * limit;
  const end = start + limit;
  const paginatedProducts = products.slice(start, end);

  return { products: paginatedProducts, total };
};

// export const fetchFilteredProducts = async (
//   limit = 12,
//   page = 1,
//   sortOrder = 'menu_order',
//   priceRange?: { min: number; max: number },
//   categoryId?: number
// ): Promise<{ products: Product[]; total: number }> => {
//   let products = [...productData.products];

//   if (categoryId) {
//     products = products.filter((product) => product.categoryId === categoryId);
//   }

//   if (priceRange) {
//     products = products.filter((product) => {
//       const productPrice = parseFloat(product.newPrice.replace('$', ''));
//       return productPrice >= priceRange.min && productPrice <= priceRange.max;
//     });
//   }

//   switch (sortOrder) {
//     case 'popularity':
//       products.sort((a, b) => b.rating - a.rating);
//       break;
//     case 'date':
//       products.sort(
//         (a, b) =>
//           new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
//       );
//       break;
//     case 'price':
//       products.sort(
//         (a, b) =>
//           parseFloat(a.newPrice.replace('$', '')) -
//           parseFloat(b.newPrice.replace('$', ''))
//       );
//       break;
//     case 'price-desc':
//       products.sort(
//         (a, b) =>
//           parseFloat(b.newPrice.replace('$', '')) -
//           parseFloat(a.newPrice.replace('$', ''))
//       );
//       break;
//     default:
//       products.sort(
//         (a, b) =>
//           new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
//       );
//       break;
//   }

//   const total = products.length;
//   const start = (page - 1) * limit;
//   const end = start + limit;
//   const paginatedProducts = products.slice(start, end);

//   return { products: paginatedProducts, total };
// };

export const fetchCategoryData = async (categorySlug: string) => {
  return categories.find((cat) => cat.categorySlug === categorySlug) || null;
};
// export const fetchFilteredProducts = async (
//   limit = DEFAULT_PRODUCT_LIMIT,
//   page = 1,
//   sortOrder = 'menu_order',
//   priceRange?: { min: number; max: number } // Agregado filtro de precio
// ): Promise<{ products: Product[]; total: number }> => {
//   let products = [...productData.products];

//   // Filtrar por rango de precios si se proporciona
//   if (priceRange) {
//     products = products.filter((product) => {
//       const productPrice = parseFloat(product.newPrice.replace('$', ''));
//       return productPrice >= priceRange.min && productPrice <= priceRange.max;
//     });
//   }

//   // Aplicar orden de productos
//   switch (sortOrder) {
//     case 'popularity':
//       products.sort((a, b) => b.rating - a.rating);
//       break;
//     case 'rating':
//       products.sort((a, b) => b.rating - a.rating);
//       break;
//     case 'date':
//       products.sort(
//         (a, b) =>
//           new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
//       );
//       break;
//     case 'price':
//       products.sort(
//         (a, b) =>
//           parseFloat(a.newPrice.replace('$', '')) -
//           parseFloat(b.newPrice.replace('$', ''))
//       );
//       break;
//     case 'price-desc':
//       products.sort(
//         (a, b) =>
//           parseFloat(b.newPrice.replace('$', '')) -
//           parseFloat(a.newPrice.replace('$', ''))
//       );
//       break;
//     default:
//       products.sort(
//         (a, b) =>
//           new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
//       );
//       break;
//   }

//   // Total de productos antes de la paginación
//   const total = products.length;

//   // Paginación
//   const start = (page - 1) * limit;
//   const end = start + limit;
//   const paginatedProducts = products.slice(start, end);

//   return { products: paginatedProducts, total };
// };

export const fetchProductBySlug = async (
  slug: string
): Promise<Product | null> => {
  const product = productData.products.find(
    (prod: Product) => prod.slug === slug
  );
  return product || null;
};
// Services.ts
// import productData from '@/app/helpers/products2.json';
// import categories from '@/app/helpers/Categories_2.json';
// import { Product } from '@/app/(home)/components/types';

// export const fetchFeaturedProduct = async (categoryId?: number) => {
//   let products = productData.products;

//   if (categoryId) {
//     products = products.filter((product) => product.categoryId === categoryId);
//   }

//   const featuredProducts = products
//     .filter((product) => product.isFeatured)
//     .sort(
//       (a, b) =>
//         new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
//     );

//   return featuredProducts[0] || null;
// };

// export const fetchProducts = async (categoryId?: number) => {
//   let products = productData.products;

//   if (categoryId) {
//     products = products.filter((product) => product.categoryId === categoryId);
//   }

//   return products
//     .sort(
//       (a, b) =>
//         new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
//     )
//     .slice(0, 8);
// };

// export const fetchFilteredProducts = async (
//   limit = 12,
//   page = 1,
//   sortOrder = 'menu_order',
//   priceRange?: { min: number; max: number },
//   categoryId?: number
// ): Promise<{ products: Product[]; total: number }> => {
//   let products = [...productData.products];

//   if (categoryId) {
//     products = products.filter((product) => product.categoryId === categoryId);
//   }

//   if (priceRange) {
//     products = products.filter((product) => {
//       const productPrice = parseFloat(product.newPrice.replace('$', ''));
//       return productPrice >= priceRange.min && productPrice <= priceRange.max;
//     });
//   }

//   switch (sortOrder) {
//     case 'popularity':
//     case 'rating':
//       products.sort((a, b) => b.rating - a.rating);
//       break;
//     case 'date':
//       products.sort(
//         (a, b) =>
//           new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
//       );
//       break;
//     case 'price':
//       products.sort(
//         (a, b) =>
//           parseFloat(a.newPrice.replace('$', '')) -
//           parseFloat(b.newPrice.replace('$', ''))
//       );
//       break;
//     case 'price-desc':
//       products.sort(
//         (a, b) =>
//           parseFloat(b.newPrice.replace('$', '')) -
//           parseFloat(a.newPrice.replace('$', ''))
//       );
//       break;
//     default:
//       products.sort(
//         (a, b) =>
//           new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
//       );
//       break;
//   }

//   const total = products.length;
//   const start = (page - 1) * limit;
//   const end = start + limit;
//   const paginatedProducts = products.slice(start, end);

//   return { products: paginatedProducts, total };
// };

// export const fetchCategoryData = async (categorySlug: string) => {
//   const category = categories.find((cat) => cat.categorySlug === categorySlug);
//   return category || null;
// };
// export const fetchProductBySlug = async (
//   slug: string
// ): Promise<Product | null> => {
//   const product = productData.products.find(
//     (prod: Product) => prod.slug === slug
//   );
//   return product || null;
// };

// export const fetchProductsByCategory = async (
//   categoryId: number
// ): Promise<Product[]> => {
//   // Filtra los productos por categoría y devuelve los más recientes.
//   const products = productData.products.filter(
//     (product: Product) => product.categoryId === categoryId
//   );
//   return products;
// };

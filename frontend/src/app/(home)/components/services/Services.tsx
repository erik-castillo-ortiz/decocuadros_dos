import productData from '@/app/helpers/products2.json';
import { Product } from '@/app/(home)/components/types';

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

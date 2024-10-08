import productData from '@/app/helpers/products2.json';

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

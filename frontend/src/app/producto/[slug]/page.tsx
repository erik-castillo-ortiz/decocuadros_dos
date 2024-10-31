// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import { fetchProductBySlug } from '@/app/(home)/components/services/Services';
// import { Product } from '@/app/(home)/components/types';
// import ProductGallery from '../components/ProductGallery';
// import ProductDetails from '../components/ProductDetails';
// import ProductTabs from '../components/ProductTabs';
// import RelatedProducts from '../components/RelatedProducts';

// const ProductPage: React.FC = () => {
//   const router = useRouter();
//   const { slug } = router.query;

//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const loadProduct = async () => {
//       if (typeof slug === 'string') {
//         setLoading(true);
//         const fetchedProduct = await fetchProductBySlug(slug);
//         setProduct(fetchedProduct);
//         setLoading(false);
//       }
//     };

//     loadProduct();
//   }, [slug]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (!product) {
//     return <p>Product not found.</p>;
//   }

//   return (
//     <div className="container pt-2">
//       <div className="product-single-container product-single-default">
//         <div className="row">
//           <div className="col-lg-5 col-md-6 product-single-gallery">
//             <ProductGallery
//               mainImage={product.image}
//               gallery={product.gallery}
//             />
//           </div>
//           <div className="col-lg-7 col-md-6 product-single-details">
//             <ProductDetails product={product} />
//           </div>
//         </div>
//       </div>
//       <ProductTabs description={product.shortDescription} />
//       <RelatedProducts categoryId={product.categoryId} />
//     </div>
//   );
// };

// export default ProductPage;
// 'use client';
// import React, { useEffect, useState } from 'react';
// import { fetchProductBySlug } from '@/app/(home)/components/services/Services';
// import { Product } from '@/app/(home)/components/types';
// import ProductGallery from '../components/ProductGallery';
// import ProductDetails from '../components/ProductDetails';
// import ProductTabs from '../components/ProductTabs';
// import RelatedProducts from '../components/RelatedProducts';

// // Agregar props a la función para recibir `params`
// interface ProductPageProps {
//   params: {
//     slug: string;
//   };
// }

// const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
//   const { slug } = params;
//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const loadProduct = async () => {
//       setLoading(true);
//       const fetchedProduct = await fetchProductBySlug(slug);
//       setProduct(fetchedProduct || null);
//       setLoading(false);
//     };

//     loadProduct();
//   }, [slug]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (!product) {
//     return <p>Product not found.</p>;
//   }

//   return (
//     <div className="container pt-2">
//       <div className="product-single-container product-single-default">
//         <div className="row">
//           <div className="col-lg-5 col-md-6 product-single-gallery">
//             <ProductGallery
//               mainImage={product.image}
//               gallery={product.gallery || []}
//             />
//           </div>
//           <div className="col-lg-7 col-md-6 product-single-details">
//             <ProductDetails product={product} />
//           </div>
//         </div>
//       </div>
//       <ProductTabs description={product.shortDescription} />
//       <RelatedProducts categoryId={product.categoryId} />
//     </div>
//   );
// };

// export default ProductPage;
// producto/[slug]/page.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { fetchProductBySlug } from '@/app/(home)/components/services/Services';
import { Product } from '@/app/(home)/components/types';
import ProductGallery from '../components/ProductGallery';
import ProductDetails from '../components/ProductDetails';
import ProductTabs from '../components/ProductTabs';
import RelatedProducts from '../components/RelatedProducts';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
  const { slug } = params;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const loadProduct = async () => {
      const fetchedProduct = await fetchProductBySlug(slug);
      setProduct(fetchedProduct || null);
    };
    loadProduct();
  }, [slug]);

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="container pt-2">
      <div className="product-single-container product-single-default">
        <div className="row">
          <div className="col-lg-5 col-md-6 product-single-gallery">
            <ProductGallery
              mainImage={product.image}
              gallery={product.gallery || []}
              isHot={product.isHot}
              discount={product.discount}
            />
          </div>
          <div className="col-lg-7 col-md-6 product-single-details">
            <ProductDetails product={product} />
          </div>
        </div>
      </div>
      <ProductTabs description={product.Description} />
      <RelatedProducts />
    </div>
  );
};

export default ProductPage;

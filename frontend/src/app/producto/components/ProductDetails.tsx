//// v1 funcional
// 'use client';
// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { Product } from '@/app/(home)/components/types';
// import socialIcons from '@/app/helpers/socials-networks.json';
// import {
//   OverlayTrigger,
//   Tooltip,
//   Button,
//   InputGroup,
//   FormControl,
// } from 'react-bootstrap';

// interface ProductDetailsProps {
//   product: Product;
// }

// const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
//   const [quantity, setQuantity] = useState<number>(1);
//   const [showTooltip, setShowTooltip] = useState<boolean>(false);
//   const [selectedVariant, setSelectedVariant] = useState<{
//     [key: number]: number;
//   }>({});
//   const [currentPrice, setCurrentPrice] = useState<string>(product.newPrice);

//   useEffect(() => {
//     if (isVariantSelectionComplete()) {
//       const variant = product.variations?.find((v) =>
//         v.attributes.every(
//           (attr) => selectedVariant[attr.attributeId] === attr.valueId
//         )
//       );
//       if (variant) {
//         setCurrentPrice(variant.price);
//       }
//     } else {
//       setCurrentPrice(product.newPrice);
//     }
//   }, [selectedVariant]);

//   const handleIncrease = () => {
//     if (quantity < product.stock) {
//       setQuantity((prevQuantity) => prevQuantity + 1);
//       setShowTooltip(false);
//     } else {
//       setShowTooltip(true);
//     }
//   };

//   const handleDecrease = () => {
//     setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
//     setShowTooltip(false);
//   };

//   // const handleVariantChange = (attributeId: number, valueId: number) => {
//   //   setSelectedVariant((prev) => {
//   //     const updatedVariant = { ...prev };

//   //     if (updatedVariant[attributeId] === valueId) {
//   //       // Si el valor ya está seleccionado, lo eliminamos para "deseleccionar"
//   //       delete updatedVariant[attributeId];
//   //       // Al deseleccionar un atributo, eliminamos los dependientes que vienen después en el JSON
//   //       Object.keys(updatedVariant).forEach((key) => {
//   //         const dependentAttributeId = parseInt(key);
//   //         const attributeIndex = product.attributes?.findIndex(
//   //           (attribute) => attribute.id === attributeId
//   //         );
//   //         const dependentAttributeIndex = product.attributes?.findIndex(
//   //           (attribute) => attribute.id === dependentAttributeId
//   //         );
//   //         if (
//   //           attributeIndex !== undefined &&
//   //           dependentAttributeIndex !== undefined
//   //         ) {
//   //           if (dependentAttributeIndex > attributeIndex) {
//   //             delete updatedVariant[dependentAttributeId];
//   //           }
//   //         }
//   //       });
//   //     } else {
//   //       updatedVariant[attributeId] = valueId;
//   //     }

//   //     return updatedVariant;
//   //   });
//   // };
//   const handleVariantChange = (attributeId: number, valueId: number) => {
//     setSelectedVariant((prev) => {
//       const updatedVariant = { ...prev };

//       if (updatedVariant[attributeId] === valueId) {
//         // Deselecciona el valor si ya estaba seleccionado
//         delete updatedVariant[attributeId];

//         // Al deseleccionar, elimina atributos dependientes
//         Object.keys(updatedVariant).forEach((key) => {
//           const dependentAttributeId = parseInt(key);
//           const attributeIndex = product.attributes?.findIndex(
//             (attribute) => attribute.id === attributeId
//           );
//           const dependentAttributeIndex = product.attributes?.findIndex(
//             (attribute) => attribute.id === dependentAttributeId
//           );

//           if (
//             attributeIndex !== undefined &&
//             dependentAttributeIndex !== undefined &&
//             dependentAttributeIndex > attributeIndex
//           ) {
//             delete updatedVariant[dependentAttributeId];
//           }
//         });
//       } else {
//         updatedVariant[attributeId] = valueId;
//       }

//       return updatedVariant;
//     });
//   };

//   const isVariantSelectionComplete = () => {
//     return product.attributes?.every(
//       (attribute) => selectedVariant[attribute.id] !== undefined
//     );
//   };

//   // const getAvailableValues = (attributeId: number) => {
//   //   if (!product.variations) return [];

//   //   const applicableVariations = product.variations.filter((variation) =>
//   //     Object.entries(selectedVariant).every(
//   //       ([key, value]) =>
//   //         Number(key) === attributeId ||
//   //         variation.attributes.some(
//   //           (attr) => attr.attributeId === Number(key) && attr.valueId === value
//   //         )
//   //     )
//   //   );

//   //   const availableValues = new Set(
//   //     applicableVariations
//   //       .flatMap((variation) => variation.attributes)
//   //       .filter((attr) => attr.attributeId === attributeId)
//   //       .map((attr) => attr.valueId)
//   //   );

//   //   return Array.from(availableValues);
//   // };
//   const getAvailableValues = (attributeId: number) => {
//     if (!product.variations) return [];

//     // Encuentra las variaciones aplicables a la selección actual de variantes
//     const applicableVariations = product.variations.filter((variation) =>
//       Object.entries(selectedVariant).every(([key, value]) =>
//         variation.attributes.some(
//           (attr) =>
//             attr.attributeId === Number(key) && attr.valueId === Number(value)
//         )
//       )
//     );

//     // Filtra las variaciones que tienen el atributo actual
//     const availableValues = new Set(
//       applicableVariations
//         .flatMap((variation) => variation.attributes)
//         .filter((attr) => attr.attributeId === attributeId)
//         .map((attr) => attr.valueId)
//     );

//     return Array.from(availableValues);
//   };
//   const isAttributeSelectable = (attributeId: number) => {
//     const attributeIndex = product.attributes?.findIndex(
//       (attribute) => attribute.id === attributeId
//     );
//     return product.attributes?.every((attribute, index) => {
//       if (index >= attributeIndex!) return true;
//       return selectedVariant[attribute.id] !== undefined;
//     });
//   };

//   const handleClearVariants = (e: React.MouseEvent) => {
//     e.preventDefault();
//     setSelectedVariant({});
//     setCurrentPrice(product.newPrice);
//   };

//   return (
//     <>
//       <div className="test-nav-product d-flex align-items-center justify-content-between">
//         <h1 className="product-title">{product.name}</h1>

//         <div className="product-nav">
//           <div className="product-prev">
//             <Link href="$1">
//               <span className="product-link"></span>
//               <span className="product-popup">
//                 <span className="box-content">
//                   <img
//                     alt="product"
//                     width="150"
//                     height="150"
//                     src="/assets/images/products/product-3.jpg"
//                   />
//                   <span>Circled Ultimate 3D Speaker</span>
//                 </span>
//               </span>
//             </Link>
//           </div>
//           <div className="product-next">
//             <Link href="$1">
//               <span className="product-link"></span>
//               <span className="product-popup">
//                 <span className="box-content">
//                   <img
//                     alt="product"
//                     width="150"
//                     height="150"
//                     src="/assets/images/products/product-4.jpg"
//                   />
//                   <span>Beats Solo HD Drenched</span>
//                 </span>
//               </span>
//             </Link>
//           </div>
//         </div>
//       </div>

//       <div className="ratings-container">
//         <div className="product-ratings">
//           <span
//             className="ratings"
//             style={{ width: `${product.rating}%` }}
//           ></span>
//         </div>
//         <Link href="#" className="rating-link">
//           (6 Reviews)
//         </Link>
//       </div>

//       <hr className="short-divider" />

//       <div className="price-box">
//         {product.oldPrice && (
//           <span className="old-price">{product.oldPrice}</span>
//         )}
//         <span className="new-price">{currentPrice}</span>
//       </div>

//       <div className="product-desc">
//         <p>{product.shortDescription}</p>
//       </div>

//       <ul className="single-info-list">
//         <li>
//           CATEGORY:{' '}
//           <strong>
//             <Link href="#" className="product-category">
//               {product.category}
//             </Link>
//           </strong>
//         </li>
//       </ul>

//       {product.attributes && product.attributes.length > 0 && (
//         <div className="product-filters-container">
//           {product.attributes.map(
//             (attribute) =>
//               isAttributeSelectable(attribute.id) &&
//               getAvailableValues(attribute.id).length > 0 && (
//                 <div key={attribute.id} className="product-single-filter">
//                   <label>{attribute.name}:</label>
//                   <ul
//                     className={`config-size-list ${
//                       attribute.type === 'color' ? 'config-color-list' : ''
//                     } config-filter-list`}
//                   >
//                     {attribute.values.map((value) => (
//                       <li
//                         key={value.id}
//                         className={`${
//                           selectedVariant[attribute.id] === value.id
//                             ? 'active'
//                             : ''
//                         }`}
//                       >
//                         <Link
//                           href="#"
//                           className={`filter-${attribute.name.toLowerCase()} d-flex align-items-center justify-content-center ${
//                             selectedVariant[attribute.id] === value.id
//                               ? 'active'
//                               : getAvailableValues(attribute.id).includes(
//                                   value.id
//                                 )
//                               ? ''
//                               : 'disabled'
//                           }`}
//                           style={
//                             attribute.type === 'color'
//                               ? { backgroundColor: value.value }
//                               : {}
//                           }
//                           onClick={(e) => {
//                             e.preventDefault();
//                             if (
//                               getAvailableValues(attribute.id).includes(
//                                 value.id
//                               )
//                             ) {
//                               handleVariantChange(attribute.id, value.id);
//                             }
//                           }}
//                         >
//                           {attribute.type !== 'color' && value.name}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )
//           )}
//           <div
//             className="product-single-filter"
//             style={{ display: isVariantSelectionComplete() ? 'block' : 'none' }}
//           >
//             <label></label>
//             <Link
//               href="#"
//               className="font1 text-uppercase clear-btn"
//               onClick={handleClearVariants}
//             >
//               Clear
//             </Link>
//           </div>
//         </div>
//       )}

//       <div className="product-action">
//         {isVariantSelectionComplete() && (
//           <div
//             className="price-box product-filtered-price"
//             style={{ display: 'block' }}
//           >
//             {product.oldPrice && (
//               <del className="old-price">
//                 <span>{product.oldPrice}</span>
//               </del>
//             )}
//             <span className="product-price">{currentPrice}</span>
//           </div>
//         )}

//         <div className="product-single-qty">
//           <InputGroup className="bootstrap-touchspin">
//             <Button
//               variant="outline-secondary"
//               className="bootstrap-touchspin-down"
//               onClick={handleDecrease}
//             >
//               -
//             </Button>
//             <FormControl
//               type="text"
//               className="horizontal-quantity text-center"
//               value={quantity}
//               readOnly
//             />
//             <OverlayTrigger
//               placement="top"
//               show={showTooltip}
//               overlay={
//                 <Tooltip id="tooltip-disabled">
//                   Solo hay {product.stock} unidades disponibles.
//                 </Tooltip>
//               }
//             >
//               <Button
//                 variant="outline-secondary"
//                 className="bootstrap-touchspin-up"
//                 onClick={handleIncrease}
//               >
//                 +
//               </Button>
//             </OverlayTrigger>
//           </InputGroup>
//         </div>

//         <button className="btn btn-dark add-cart me-2" title="Add to Cart">
//           Add to Cart
//         </button>
//         <Link href="cart.html" className="btn btn-gray view-cart d-none">
//           View cart
//         </Link>
//       </div>

//       <hr className="divider mb-0 mt-0" />

//       <div className="product-single-share mb-3">
//         <label className="sr-only">Share:</label>
//         <div className="social-icons me-2">
//           {socialIcons.map((icon, index) => (
//             <Link
//               href={icon.link}
//               className={`social-icon ${icon.icon}`}
//               key={index}
//               target="_blank"
//               rel="noopener noreferrer"
//               title={icon.title}
//             ></Link>
//           ))}
//         </div>
//         <Link
//           href="wishlist.html"
//           className="btn-icon-wish add-wishlist"
//           title="Add to Wishlist"
//         >
//           <i className="icon-wishlist-2"></i>
//           <span>Add to Wishlist</span>
//         </Link>
//       </div>
//     </>
//   );
// };

// export default ProductDetails;
//v2 test

'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Product } from '@/app/(home)/components/types';
import socialIcons from '@/app/helpers/socials-networks.json';
import {
  OverlayTrigger,
  Tooltip,
  Button,
  InputGroup,
  FormControl,
} from 'react-bootstrap';

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const [selectedVariant, setSelectedVariant] = useState<{
    [key: number]: number;
  }>({});
  const [currentPrice, setCurrentPrice] = useState<string>(product.newPrice);

  useEffect(() => {
    if (isVariantSelectionComplete()) {
      const variant = product.variations?.find((v) =>
        v.attributes.every(
          (attr) => selectedVariant[attr.attributeId] === attr.valueId
        )
      );
      if (variant) {
        setCurrentPrice(variant.price);
      }
    } else {
      setCurrentPrice(product.newPrice);
    }
  }, [selectedVariant]);

  const handleIncrease = () => {
    if (quantity < product.stock) {
      setQuantity((prevQuantity) => prevQuantity + 1);
      setShowTooltip(false);
    } else {
      setShowTooltip(true);
    }
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    setShowTooltip(false);
  };

  const handleVariantChange = (attributeId: number, valueId: number) => {
    setSelectedVariant((prev) => {
      const updatedVariant = { ...prev };

      if (updatedVariant[attributeId] === valueId) {
        // Deselecciona el valor si ya estaba seleccionado
        delete updatedVariant[attributeId];

        // Al deseleccionar, elimina atributos dependientes
        Object.keys(updatedVariant).forEach((key) => {
          const dependentAttributeId = parseInt(key);
          const attributeIndex = product.attributes?.findIndex(
            (attribute) => attribute.id === attributeId
          );
          const dependentAttributeIndex = product.attributes?.findIndex(
            (attribute) => attribute.id === dependentAttributeId
          );

          if (
            attributeIndex !== undefined &&
            dependentAttributeIndex !== undefined &&
            dependentAttributeIndex > attributeIndex
          ) {
            delete updatedVariant[dependentAttributeId];
          }
        });
      } else {
        updatedVariant[attributeId] = valueId;
      }

      return updatedVariant;
    });
  };

  const isVariantSelectionComplete = () => {
    return product.attributes?.every(
      (attribute) => selectedVariant[attribute.id] !== undefined
    );
  };

  const getAvailableValues = (attributeId: number) => {
    if (!product.variations) return [];

    // Encuentra las variaciones aplicables a la selección actual de variantes
    const applicableVariations = product.variations.filter((variation) =>
      Object.entries(selectedVariant).every(([key, value]) =>
        variation.attributes.some(
          (attr) =>
            attr.attributeId === Number(key) && attr.valueId === Number(value)
        )
      )
    );

    // Filtra las variaciones que tienen el atributo actual
    const availableValues = new Set(
      applicableVariations
        .flatMap((variation) => variation.attributes)
        .filter((attr) => attr.attributeId === attributeId)
        .map((attr) => attr.valueId)
    );

    return Array.from(availableValues);
  };
  const isAttributeSelectable = (attributeId: number) => {
    const attributeIndex = product.attributes?.findIndex(
      (attribute) => attribute.id === attributeId
    );
    return product.attributes?.every((attribute, index) => {
      if (index >= attributeIndex!) return true;
      return selectedVariant[attribute.id] !== undefined;
    });
  };

  const handleClearVariants = (e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedVariant({});
    setCurrentPrice(product.newPrice);
  };

  return (
    <>
      <div className="test-nav-product d-flex align-items-center justify-content-between">
        <h1 className="product-title">{product.name}</h1>

        <div className="product-nav">
          <div className="product-prev">
            <Link href="$1">
              <span className="product-link"></span>
              <span className="product-popup">
                <span className="box-content">
                  <img
                    alt="product"
                    width="150"
                    height="150"
                    src="/assets/images/products/product-3.jpg"
                  />
                  <span>Circled Ultimate 3D Speaker</span>
                </span>
              </span>
            </Link>
          </div>
          <div className="product-next">
            <Link href="$1">
              <span className="product-link"></span>
              <span className="product-popup">
                <span className="box-content">
                  <img
                    alt="product"
                    width="150"
                    height="150"
                    src="/assets/images/products/product-4.jpg"
                  />
                  <span>Beats Solo HD Drenched</span>
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="ratings-container">
        <div className="product-ratings">
          <span
            className="ratings"
            style={{ width: `${product.rating}%` }}
          ></span>
        </div>
        <Link href="#" className="rating-link">
          (6 Reviews)
        </Link>
      </div>

      <hr className="short-divider" />

      <div className="price-box">
        {product.oldPrice && (
          <span className="old-price">{product.oldPrice}</span>
        )}
        <span className="new-price">{currentPrice}</span>
      </div>

      <div className="product-desc">
        <p>{product.shortDescription}</p>
      </div>

      <ul className="single-info-list">
        <li>
          CATEGORY:{' '}
          <strong>
            <Link href="#" className="product-category">
              {product.category}
            </Link>
          </strong>
        </li>
      </ul>

      {product.attributes && product.attributes.length > 0 && (
        <div className="product-filters-container">
          {product.attributes.map(
            (attribute) =>
              isAttributeSelectable(attribute.id) &&
              getAvailableValues(attribute.id).length > 0 && (
                <div key={attribute.id} className="product-single-filter">
                  <label>{attribute.name}:</label>
                  <ul
                    className={`config-size-list ${
                      attribute.type === 'color' ? 'config-color-list' : ''
                    } config-filter-list`}
                  >
                    {attribute.values.map((value) => (
                      <li
                        key={value.id}
                        className={`${
                          selectedVariant[attribute.id] === value.id
                            ? 'active'
                            : ''
                        }`}
                      >
                        <Link
                          href="#"
                          className={`filter-${attribute.name.toLowerCase()} d-flex align-items-center justify-content-center ${
                            selectedVariant[attribute.id] === value.id
                              ? 'active'
                              : getAvailableValues(attribute.id).includes(
                                  value.id
                                )
                              ? ''
                              : 'disabled'
                          }`}
                          style={
                            attribute.type === 'color'
                              ? { backgroundColor: value.value }
                              : {}
                          }
                          onClick={(e) => {
                            e.preventDefault();
                            if (
                              getAvailableValues(attribute.id).includes(
                                value.id
                              )
                            ) {
                              handleVariantChange(attribute.id, value.id);
                            }
                          }}
                        >
                          {attribute.type !== 'color' && value.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
          )}
          <div
            className="product-single-filter"
            style={{ display: isVariantSelectionComplete() ? 'block' : 'none' }}
          >
            <label></label>
            <Link
              href="#"
              className="font1 text-uppercase clear-btn"
              onClick={handleClearVariants}
            >
              Clear
            </Link>
          </div>
        </div>
      )}

      <div className="product-action">
        {isVariantSelectionComplete() && (
          <div
            className="price-box product-filtered-price"
            style={{ display: 'block' }}
          >
            {product.oldPrice && (
              <del className="old-price">
                <span>{product.oldPrice}</span>
              </del>
            )}
            <span className="product-price">{currentPrice}</span>
          </div>
        )}

        <div className="product-single-qty">
          <InputGroup className="bootstrap-touchspin">
            <Button
              variant="outline-secondary"
              className="bootstrap-touchspin-down"
              onClick={handleDecrease}
            >
              -
            </Button>
            <FormControl
              type="text"
              className="horizontal-quantity text-center"
              value={quantity}
              readOnly
            />
            <OverlayTrigger
              placement="top"
              show={showTooltip}
              overlay={
                <Tooltip id="tooltip-disabled">
                  Solo hay {product.stock} unidades disponibles.
                </Tooltip>
              }
            >
              <Button
                variant="outline-secondary"
                className="bootstrap-touchspin-up"
                onClick={handleIncrease}
              >
                +
              </Button>
            </OverlayTrigger>
          </InputGroup>
        </div>

        <button className="btn btn-dark add-cart me-2" title="Add to Cart">
          Add to Cart
        </button>
        <Link href="cart.html" className="btn btn-gray view-cart d-none">
          View cart
        </Link>
      </div>

      <hr className="divider mb-0 mt-0" />

      <div className="product-single-share mb-3">
        <label className="sr-only">Share:</label>
        <div className="social-icons me-2">
          {socialIcons.map((icon, index) => (
            <Link
              href={icon.link}
              className={`social-icon ${icon.icon}`}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              title={icon.title}
            ></Link>
          ))}
        </div>
        <Link
          href="wishlist.html"
          className="btn-icon-wish add-wishlist"
          title="Add to Wishlist"
        >
          <i className="icon-wishlist-2"></i>
          <span>Add to Wishlist</span>
        </Link>
      </div>
    </>
  );
};

export default ProductDetails;

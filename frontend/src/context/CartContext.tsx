// 'use client';

// import React, { createContext, useContext, useEffect, useState } from 'react';
// import { useUser } from '@/context/UserContext';

// interface CartItem {
//   id: number;
//   product_variant_id: number;
//   quantity: number;
//   created_at: string;
//   updated_at: string;
// }

// interface Cart {
//   id: number;
//   user_id: number | null;
//   session_id: string | null;
//   cart_hash: string;
//   items: CartItem[];
//   created_at: string;
//   updated_at: string;
// }

// interface CartContextProps {
//   cart: Cart | null;
//   loading: boolean;
//   addToCart: (productVariantId: number, quantity: number) => Promise<void>;
//   removeFromCart: (productVariantId: number) => Promise<void>;
//   mergeCart: () => Promise<void>;
//   clearCart: () => Promise<void>;
//   refreshCart: () => Promise<void>;
// }

// const CartContext = createContext<CartContextProps | undefined>(undefined);

// export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [cart, setCart] = useState<Cart | null>(null);
//   const [loading, setLoading] = useState(true);
//   const { isAuthenticated } = useUser();

//   // Fetch the cart from the backend
//   const fetchCart = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch('/api/cart', { credentials: 'include' });
//       if (response.ok) {
//         const data = await response.json();
//         setCart(data);
//       }
//     } catch (error) {
//       console.error('Error fetching cart:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCart();
//   }, []);

//   const addToCart = async (productVariantId: number, quantity: number) => {
//     try {
//       const response = await fetch('/api/cart/add', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         credentials: 'include',
//         body: JSON.stringify({ product_variant_id: productVariantId, quantity }),
//       });

//       if (response.ok) {
//         const updatedCart = await response.json();
//         setCart(updatedCart);
//       }
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//     }
//   };

//   const removeFromCart = async (productVariantId: number) => {
//     try {
//       const response = await fetch('/api/cart/remove', {
//         method: 'DELETE',
//         headers: { 'Content-Type': 'application/json' },
//         credentials: 'include',
//         body: JSON.stringify({ product_variant_id: productVariantId }),
//       });

//       if (response.ok) {
//         const updatedCart = await response.json();
//         setCart(updatedCart);
//       }
//     } catch (error) {
//       console.error('Error removing from cart:', error);
//     }
//   };

//   const mergeCart = async () => {
//     try {
//       const response = await fetch('/api/cart/merge', {
//         method: 'POST',
//         credentials: 'include',
//       });

//       if (response.ok) {
//         const updatedCart = await response.json();
//         setCart(updatedCart);
//       }
//     } catch (error) {
//       console.error('Error merging cart:', error);
//     }
//   };

//   const clearCart = async () => {
//     try {
//       const response = await fetch('/api/cart/clear', {
//         method: 'DELETE',
//         credentials: 'include',
//       });

//       if (response.ok) {
//         setCart(null);
//       }
//     } catch (error) {
//       console.error('Error clearing cart:', error);
//     }
//   };

//   return (
//     <CartContext.Provider value={{ cart, loading, addToCart, removeFromCart, mergeCart, clearCart, refreshCart: fetchCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };
// 'use client';

// import React, { createContext, useContext, useEffect, useState } from 'react';
// import { useUser } from '@/context/UserContext';
// import { getProductVariantDetails } from '@/layouts/services/Services'; // Importa el servicio para obtener detalles del producto

// // Definición de la interfaz CartItem
// export interface CartItem {
//   id: number;
//   product_variant_id: number;
//   quantity: number;
//   name?: string;
//   slug?: string;
//   image_url?: string;
//   price?: number;
// }

// interface Cart {
//   id: number;
//   user_id: number | null;
//   session_id: string | null;
//   cart_hash: string;
//   items: CartItem[];
//   created_at: string;
//   updated_at: string;
// }

// interface CartContextProps {
//   cart: Cart | null;
//   loading: boolean;
//   addToCart: (productVariantId: number, quantity: number) => Promise<void>;
//   removeFromCart: (productVariantId: number, quantity: number) => Promise<void>;
//   mergeCart: () => Promise<void>;
//   clearCart: () => Promise<void>;
//   refreshCart: () => Promise<void>;
// }

// const CartContext = createContext<CartContextProps | undefined>(undefined);

// export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [cart, setCart] = useState<Cart | null>(null);
//   const [loading, setLoading] = useState(true);
//   const { isAuthenticated } = useUser();

//   const fetchCart = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch('/api/cart', { credentials: 'include' });
//       if (response.ok) {
//         const data: Cart = await response.json();

//         // Obtener detalles de los productos para cada item en el carrito
//         const detailedItems = await Promise.all(
//           data.items.map(async (item) => {
//             try {
//               // const productDetails = await getProductVariantDetails(item.product_variant_id);
//               const productDetails = await getProductVariantDetails(item.product_variant_id.toString());
//               return { ...item, ...productDetails };
//             } catch (error) {
//               console.error('Error fetching product details:', error);
//               return item; // Devuelve el item sin detalles adicionales en caso de error
//             }
//           })
//         );

//         setCart({ ...data, items: detailedItems });
//       } else {
//         setCart(null);
//       }
//     } catch (error) {
//       console.error('Error fetching cart:', error);
//       setCart(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCart();
//   }, [isAuthenticated]);

//   const addToCart = async (productVariantId: number, quantity: number) => {
//     try {
//       const response = await fetch('/api/cart/add', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         credentials: 'include',
//         body: JSON.stringify({ product_variant_id: productVariantId, quantity }),
//       });

//       if (response.ok) {
//         await fetchCart();
//       }
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//     }
//   };

//   const removeFromCart = async (productVariantId: number, quantity: number) => {
//     try {
//       const response = await fetch('/api/cart/remove', {
//         method: 'DELETE',
//         headers: { 'Content-Type': 'application/json' },
//         credentials: 'include',
//         body: JSON.stringify({ product_variant_id: productVariantId, quantity }),
//       });

//       if (response.ok) {
//         await fetchCart();
//       }
//     } catch (error) {
//       console.error('Error removing from cart:', error);
//     }
//   };

//   const mergeCart = async () => {
//     try {
//       const response = await fetch('/api/cart/merge', {
//         method: 'POST',
//         credentials: 'include',
//       });

//       if (response.ok) {
//         await fetchCart();
//       }
//     } catch (error) {
//       console.error('Error merging cart:', error);
//     }
//   };

//   const clearCart = async () => {
//     try {
//       const response = await fetch('/api/cart/clear', {
//         method: 'DELETE',
//         credentials: 'include',
//       });

//       if (response.ok) {
//         setCart(null);
//       }
//     } catch (error) {
//       console.error('Error clearing cart:', error);
//     }
//   };

//   return (
//     <CartContext.Provider value={{ cart, loading, addToCart, removeFromCart, mergeCart, clearCart, refreshCart: fetchCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };
'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useUser } from '@/context/UserContext';
import { getProductVariantDetails, removeProductFromCart } from '@/layouts/services/Services';

// Definición de la interfaz CartItem
export interface CartItem {
  id: number;
  product_variant_id: number;
  quantity: number;
  name?: string;
  slug?: string;
  image_url?: string;
  price?: number;
}

// Definición de la interfaz Cart
interface Cart {
  id: number;
  user_id: number | null;
  session_id: string | null;
  cart_hash: string;
  items: CartItem[];
  created_at: string;
  updated_at: string;
}

// Propiedades del contexto del carrito
interface CartContextProps {
  cart: Cart | null;
  loading: boolean;
  addToCart: (productVariantId: number, quantity: number) => Promise<void>;
  removeFromCart: (productVariantId: number, quantity: number) => Promise<void>;
  mergeCart: () => Promise<void>;
  clearCart: () => Promise<void>;
  refreshCart: () => Promise<void>;
}

// Creación del contexto
const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Cart | null>(null);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated } = useUser();

  // Función para obtener el carrito
  const fetchCart = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/cart', { credentials: 'include' });
      if (response.ok) {
        const data: Cart = await response.json();

        const detailedItems = await Promise.all(
          data.items.map(async (item) => {
            try {
              const productDetails = await getProductVariantDetails(item.product_variant_id.toString());
              return { ...item, ...productDetails };
            } catch (error) {
              console.error('Error fetching product details:', error);
              return item;
            }
          })
        );

        setCart({ ...data, items: detailedItems });
      } else {
        setCart(null);
      }
    } catch (error) {
      console.error('Error fetching cart:', error);
      setCart(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, [isAuthenticated]);

  // Función para agregar al carrito
  const addToCart = async (productVariantId: number, quantity: number) => {
    try {
      const response = await fetch('/api/cart/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ product_variant_id: productVariantId, quantity }),
      });

      if (response.ok) {
        await fetchCart();
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  // Función para eliminar del carrito
  const removeFromCart = async (productVariantId: number, quantity: number) => {
    try {
      await removeProductFromCart(productVariantId, quantity);
      await fetchCart();
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  // Función para fusionar el carrito de invitado con el de usuario autenticado
  const mergeCart = async () => {
    try {
      const response = await fetch('/api/cart/merge', {
        method: 'POST',
        credentials: 'include',
      });

      if (response.ok) {
        await fetchCart();
      }
    } catch (error) {
      console.error('Error merging cart:', error);
    }
  };

  // Función para limpiar el carrito
  const clearCart = async () => {
    try {
      const response = await fetch('/api/cart/clear', {
        method: 'DELETE',
        credentials: 'include',
      });

      if (response.ok) {
        setCart(null);
      }
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, loading, addToCart, removeFromCart, mergeCart, clearCart, refreshCart: fetchCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

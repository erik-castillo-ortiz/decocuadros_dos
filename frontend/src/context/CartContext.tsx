'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useUser } from '@/context/UserContext';
import { getProductVariantDetails } from '@/layouts/services/Services';

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

// const addToCart = async (productVariantId: number, quantity: number) => {
//   try {
//     setCart((prevCart) => {
//       if (!prevCart) return null;

//       const existingItemIndex = prevCart.items.findIndex(
//         (item) => item.product_variant_id === productVariantId
//       );

//       let updatedItems;
//       if (existingItemIndex !== -1) {
//         // Si el ítem ya existe, actualizamos la cantidad
//         updatedItems = prevCart.items.map((item, index) =>
//           index === existingItemIndex
//             ? { ...item, quantity: item.quantity + quantity }
//             : item
//         );
//       } else {
//         // Si el ítem no existe, lo añadimos
//         updatedItems = [
//           ...prevCart.items,
//           { id: Date.now(), product_variant_id: productVariantId, quantity },
//         ];
//       }

//       return { ...prevCart, items: updatedItems };
//     });

//     const response = await fetch('/api/cart/add', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       credentials: 'include',
//       body: JSON.stringify({ product_variant_id: productVariantId, quantity }),
//     });

//     if (!response.ok) {
//       // Revertir el cambio local si la petición falla
//       await fetchCart();
//     }
//   } catch (error) {
//     console.error('Error adding to cart:', error);
//     await fetchCart();
//   }
// };
// const addToCart = async (productVariantId: number, quantity: number) => {
//   setCart((prevCart) => {
//     if (!prevCart) return null;

//     const existingItemIndex = prevCart.items.findIndex(
//       (item) => item.product_variant_id === productVariantId
//     );

//     let updatedItems;
//     if (existingItemIndex !== -1) {
//       updatedItems = prevCart.items.map((item, index) =>
//         index === existingItemIndex
//           ? { ...item, quantity: item.quantity + quantity }
//           : item
//       );
//     } else {
//       updatedItems = [
//         ...prevCart.items,
//         { id: Date.now(), product_variant_id: productVariantId, quantity },
//       ];
//     }

//     return { ...prevCart, items: updatedItems };
//   });

//   // Realizar la llamada al servidor en segundo plano
//   try {
//     const response = await fetch('/api/cart/add', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       credentials: 'include',
//       body: JSON.stringify({ product_variant_id: productVariantId, quantity }),
//     });

//     if (!response.ok) {
//       // Revertir si la llamada falla
//       await fetchCart();
//     }
//   } catch (error) {
//     console.error('Error adding to cart:', error);
//     await fetchCart();
//   }
// };

const addToCart = async (productVariantId: number, quantity: number) => {
  let rollbackCart: Cart | null = null;

  setCart((prevCart) => {
    if (!prevCart) return null;

    rollbackCart = JSON.parse(JSON.stringify(prevCart)); // Crear una copia profunda para revertir si falla

    const existingItemIndex = prevCart.items.findIndex(
      (item) => item.product_variant_id === productVariantId
    );

    let updatedItems;
    if (existingItemIndex !== -1) {
      updatedItems = prevCart.items.map((item, index) =>
        index === existingItemIndex
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      updatedItems = [
        ...prevCart.items,
        { id: Date.now(), product_variant_id: productVariantId, quantity },
      ];
    }

    return { ...prevCart, items: updatedItems };
  });

  try {
    // Llamada al servidor para agregar el producto
    const response = await fetch('/api/cart/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ product_variant_id: productVariantId, quantity }),
    });

    if (!response.ok) {
      throw new Error('Failed to add item to cart');
    }

    // Obtener detalles del producto añadido
    const productDetails = await getProductVariantDetails(productVariantId.toString());

    setCart((prevCart) => {
      if (!prevCart) return null;

      const updatedItems = prevCart.items.map((item) =>
        item.product_variant_id === productVariantId && !item.name
          ? { ...item, ...productDetails }
          : item
      );

      return { ...prevCart, items: updatedItems };
    });
  } catch (error) {
    console.error('Error adding to cart:', error);
    setCart(rollbackCart); // Revertir el cambio local si hay un error
  }
};


// Función para eliminar del carrito
const removeFromCart = async (productVariantId: number, quantity: number) => {
  try {
    setCart((prevCart) => {
      if (!prevCart) return null;

      const updatedItems = prevCart.items
        .map((item) =>
          item.product_variant_id === productVariantId
            ? { ...item, quantity: item.quantity - quantity }
            : item
        )
        .filter((item) => item.quantity > 0);

      return { ...prevCart, items: updatedItems };
    });

    const response = await fetch('/api/cart/remove', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ product_variant_id: productVariantId, quantity }),
    });

    if (!response.ok) {
      // Revertir el cambio local si la petición falla
      await fetchCart();
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
    await fetchCart();
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
        await fetchCart(); // Refresca el carrito después de fusionar
      } else {
        console.error('Failed to merge cart');
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

import footerData from '@/layouts/helpers/Footer.json';

export const fetchFooterData = () => {
  return footerData;
};


export const getProductVariantDetails = async (variantId: string) => {
  try {
    const response = await fetch(`${process.env.API_URL}/products/variant/${variantId}`, {
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(`Product variant not found (status: ${response.status})`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching product variant details:', error);
    throw new Error('Internal Server Error');
  }
};

export const removeProductFromCart = async (productVariantId: number, quantity: number) => {
  const response = await fetch(`${process.env.API_URL}/cart/remove`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ product_variant_id: productVariantId, quantity }),
  });

  if (!response.ok) {
    throw new Error('Failed to remove product from cart');
  }

  return await response.json();
};
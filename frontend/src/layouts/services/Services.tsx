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

export const removeProductFromCart = async (productVariantId: number, quantity: number, cookieHeader: string) => {
  console.log('Sending request to backend to remove product');
    console.log('Product Variant ID:', productVariantId);
    console.log('Quantity:', quantity);
    console.log('Cookies:', cookieHeader);
  try {
    

    const response = await fetch(`${process.env.API_URL}/cart/remove`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Cookie: cookieHeader,
      },
      credentials: 'include',
      body: JSON.stringify({ product_variant_id: productVariantId, quantity }),
    });

    console.log('Backend response status:', response.status);

    if (!response.ok) {
      const error = await response.text();
      console.error('Error response from backend:', error);
      throw new Error(`Failed to remove product from cart: ${error}`);
    }

    const data = await response.json();
    console.log('Successful response from backend:', data);

    return data;
  } catch (error) {
    console.error('Error in removeProductFromCart service:', error);
    throw error;
  }
};


export const addProductToCart = async (productVariantId: number, quantity: number, cookieHeader: string) => {
  try {
    const response = await fetch(`${process.env.API_URL}/cart/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Cookie: cookieHeader,
      },
      credentials: 'include',
      body: JSON.stringify({ product_variant_id: productVariantId, quantity }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Error response from backend:', error);
      throw new Error(`Failed to add product to cart: ${error}`);
    }

    const data = await response.json();
    console.log('Successful response from backend:', data);

    return data;
  } catch (error) {
    console.error('Error in addProductToCart service:', error);
    throw error;
  }
};

export const mergeGuestCartToUserCart = async (cookieHeader: string) => {
  try {
    const response = await fetch(`${process.env.API_URL}/cart/merge`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Cookie: cookieHeader,
      },
      credentials: 'include',
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Error response from backend:', error);
      throw new Error(`Failed to merge cart: ${error}`);
    }

    const data = await response.json();
    console.log('Successful response from backend:', data);

    return data;
  } catch (error) {
    console.error('Error in mergeGuestCartToUserCart service:', error);
    throw error;
  }
};

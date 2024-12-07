import { NextRequest, NextResponse } from 'next/server';
import { addProductToCart } from '@/layouts/services/Services';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log('Request body:', body);

    const cookieHeader = req.headers.get('cookie') || '';
    console.log('Cookies being sent to backend:', cookieHeader);

    const data = await addProductToCart(body.product_variant_id, body.quantity, cookieHeader);

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error adding to cart:', error);
    return NextResponse.json(
      { detail: 'Failed to add product to cart' },
      { status: 500 }
    );
  }
}

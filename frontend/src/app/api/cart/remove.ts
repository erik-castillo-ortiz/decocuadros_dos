// import { NextRequest, NextResponse } from 'next/server';
// import { removeProductFromCart } from '@/layouts/services/Services';

// export async function DELETE(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const data = await removeProductFromCart(body.product_variant_id, body.quantity);
//     return NextResponse.json(data, { status: 200 });
//   } catch (error) {
//     console.error('Error removing from cart:', error);
//     return NextResponse.json({ error: 'Failed to remove from cart' }, { status: 500 });
//   }
// }
// /src/app/api/cart/remove.ts
// import { NextRequest, NextResponse } from 'next/server';
// import { removeProductFromCart } from '@/layouts/services/Services';

// export async function DELETE(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const data = await removeProductFromCart(body.product_variant_id, body.quantity);
//     return NextResponse.json(data, { status: 200 });
//   } catch (error) {
//     console.error('Error removing from cart:', error);
//     return NextResponse.json({ error: 'Failed to remove from cart' }, { status: 500 });
//   }
// }
import { NextRequest, NextResponse } from 'next/server';
import { removeProductFromCart } from '@/layouts/services/Services';

export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();
    console.log('Request body:', body);

    const cookieHeader = req.headers.get('cookie') || '';
    console.log('Cookies being sent to backend:', cookieHeader);

    const data = await removeProductFromCart(body.product_variant_id, body.quantity, cookieHeader);

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error removing from cart:', error);
    return NextResponse.json(
      { detail: 'Failed to remove product from cart' },
      { status: 500 }
    );
  }
}


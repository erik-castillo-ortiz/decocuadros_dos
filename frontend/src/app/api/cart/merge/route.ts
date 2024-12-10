import { NextRequest, NextResponse } from 'next/server';
import { mergeGuestCartToUserCart } from '@/layouts/services/Services';

export async function POST(req: NextRequest) {
  try {
    const cookieHeader = req.headers.get('cookie') || '';

    const data = await mergeGuestCartToUserCart(cookieHeader);

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error merging cart:', error);
    return NextResponse.json({ error: 'Failed to merge cart' }, { status: 500 });
  }
}

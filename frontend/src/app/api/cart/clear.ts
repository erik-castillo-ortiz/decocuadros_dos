// /src/app/api/cart/clear.ts
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(req: NextRequest) {
  try {
    const response = await fetch(`${process.env.API_URL}/cart/clear`, {
      method: 'DELETE',
      credentials: 'include',
      headers: req.headers,
    });

    return NextResponse.json(null, { status: response.status });
  } catch (error) {
    console.error('Error clearing cart:', error);
    return NextResponse.json({ error: 'Failed to clear cart' }, { status: 500 });
  }
}

// /src/app/api/cart/merge.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const response = await fetch(`${process.env.API_URL}/cart/merge`, {
      method: 'POST',
      credentials: 'include',
      headers: req.headers,
    });

    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('Error merging cart:', error);
    return NextResponse.json({ error: 'Failed to merge cart' }, { status: 500 });
  }
}

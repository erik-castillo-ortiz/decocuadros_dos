import { NextRequest, NextResponse } from 'next/server';
import { getProductVariantDetails } from '@/layouts/services/Services';

export async function GET(req: NextRequest, { params }: { params: { variantId: string } }) {
  try {
    const data = await getProductVariantDetails(params.variantId);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
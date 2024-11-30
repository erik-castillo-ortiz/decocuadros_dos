import { NextResponse } from 'next/server';
const BASE_URL = process.env.API_URL;

export async function GET(request: Request) {
  try {
    const cookieHeader = request.headers.get('cookie') || '';

    const response = await fetch(`${BASE_URL}/users/check`, {
      method: 'GET',
      headers: {
        Cookie: request.headers.get('cookie') || '', // Enviar cookies existentes
      },
      //   headers: {
      //     'Content-Type': 'application/json',
      //     Cookie: cookieHeader, // Enviar cookies manualmente
      //   },
    });

    if (!response.ok) {
      return NextResponse.json(
        { authenticated: false },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { detail: 'Error verifying session' },
      { status: 500 }
    );
  }
}

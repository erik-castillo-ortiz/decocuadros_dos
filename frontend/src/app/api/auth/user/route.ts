import { NextResponse } from 'next/server';
const BASE_URL = process.env.API_URL;

export async function GET(request: Request) {
  try {
    const cookieHeader = request.headers.get('cookie') || '';

    const response = await fetch(`${BASE_URL}/users/user`, {
      method: 'GET',
      headers: {
        Cookie: cookieHeader, // Enviar las cookies existentes
      },
      credentials: 'include',
    });

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json(error, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching user data:', error);
    return NextResponse.json(
      { detail: 'Error fetching user data' },
      { status: 500 }
    );
  }
}

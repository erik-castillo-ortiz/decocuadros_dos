import { NextResponse } from 'next/server';
const BASE_URL = process.env.API_URL;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch(`${BASE_URL}/users/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      credentials: 'include',
    });

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json(error, { status: response.status });
    }

    const data = await response.json();

    // Manejo de cookies desde el backend
    const headers = new Headers();
    const setCookie = response.headers.get('set-cookie');
    if (setCookie) {
      headers.set('Set-Cookie', setCookie);
    }

    return NextResponse.json(data, { headers });
  } catch (error) {
    return NextResponse.json(
      { detail: 'Error during login request' },
      { status: 500 }
    );
  }
}

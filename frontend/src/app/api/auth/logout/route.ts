// import { NextResponse } from 'next/server';
// const BASE_URL = process.env.API_URL;

// export async function POST() {
//   try {
//     const response = await fetch(`${BASE_URL}/users/logout`, {
//       method: 'POST',
//       credentials: 'include', // Envía cookies al backend
//     });

//     if (!response.ok) {
//       const error = await response.json();
//       return NextResponse.json(error, { status: response.status });
//     }

//     return NextResponse.json({ message: 'Logged out successfully' });
//   } catch (error) {
//     return NextResponse.json(
//       { detail: 'Error during logout request' },
//       { status: 500 }
//     );
//   }
// }
import { NextResponse } from 'next/server';

const BASE_URL = process.env.API_URL;

export async function POST(request: Request) {
  try {
    const cookieHeader = request.headers.get('cookie') || '';
    const response = await fetch(`${BASE_URL}/users/logout`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        Cookie: cookieHeader, // Enviar cookies existentes
      },
    });

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json(error, { status: response.status });
    }

    return NextResponse.json({ message: 'Logged out successfully' });
  } catch (error) {
    return NextResponse.json(
      { detail: 'Error during logout request' },
      { status: 500 }
    );
  }
}

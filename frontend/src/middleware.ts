import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const BASE_URL = process.env.API_URL || 'http://localhost:3002';

  try {
    const publicPaths = ['/auth/login', '/auth/register'];
    const isPublicPath = publicPaths.some((path) =>
      request.nextUrl.pathname.startsWith(path)
    );

    const response = await fetch(`${BASE_URL}/users/check`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        Cookie: request.headers.get('cookie') || '',
      },
    });

    if (response.ok) {
      // Si está autenticado y accede a una página pública, redirigir al dashboard
      if (isPublicPath) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
      }
      return NextResponse.next();
    } else {
      // Si no está autenticado y accede a una página protegida, redirigir al login
      if (!isPublicPath) {
        return NextResponse.redirect(new URL('/auth/login', request.url));
      }
      return NextResponse.next();
    }
  } catch (error) {
    console.error('Error in middleware:', error);
    // En caso de error, redirigir al login
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }
}

export const config = {
  matcher: ['/dashboard', '/protected-route', '/tienda', '/auth/:path*'],
};

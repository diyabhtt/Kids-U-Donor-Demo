import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Demo mode: no auth middleware. Allow all routes for static hosting.
export async function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};

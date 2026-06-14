import { NextResponse, type NextRequest } from 'next/server'

export async function proxy(request: NextRequest) {
  // Authentication and Session system removed.
  // This file remains to satisfy the Next.js 16 requirement for proxy.ts
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ],
}

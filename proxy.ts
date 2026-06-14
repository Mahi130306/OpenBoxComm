import { NextResponse, type NextRequest } from 'next/server'

export async function proxy(request: NextRequest) {
  // Authentication system removed.
  // This file remains to satisfy the Next.js 16 requirement for proxy.ts
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ],
}

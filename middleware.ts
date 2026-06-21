/**
 * proxy.ts — Open Box Edge Security Layer (Next.js 16 middleware)
 * ───────────────────────────────────────────────────────────────
 * Runs at the CDN edge before any request reaches the app.
 *
 * Blocks:
 *   /.git/**          — git internals (CRITICAL)
 *   /.env*            — environment files
 *   /node_modules/**  — dependencies
 *   *.map             — source maps
 *   config/lock files — project internals
 *
 * Also injects security response headers on every route.
 */

import { NextResponse, type NextRequest } from 'next/server'

export const runtime = 'experimental-edge'

// ── Blocked path patterns ─────────────────────────────────────────────────────
const BLOCKED_PATTERNS: RegExp[] = [
  /^\/\.git(\/|$)/i,
  /^\/\.env/i,
  /^\/node_modules(\/|$)/i,
  /\.(map)$/i,
  /^\/\.github(\/|$)/i,
  /^\/\.next\/server/i,
  /^\/tsconfig/i,
  /^\/package(-lock)?\.json$/i,
  /^\/tailwind\.config/i,
  /^\/postcss\.config/i,
]

// ── Security headers injected on every response ───────────────────────────────
function buildSecurityHeaders(): Record<string, string> {
  return {
    'X-Frame-Options':            'DENY',
    'X-Content-Type-Options':     'nosniff',
    'Referrer-Policy':            'strict-origin-when-cross-origin',
    'Strict-Transport-Security':  'max-age=31536000; includeSubDomains; preload',
    'X-XSS-Protection':           '1; mode=block',
    'X-DNS-Prefetch-Control':     'on',
    'Permissions-Policy':
      'camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=()',
    'Content-Security-Policy': [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob: https://api.dicebear.com https://cdn.discordapp.com",
      "connect-src 'self' https://discord.com https://discordapp.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; '),
  }
}

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // ── Block sensitive paths ─────────────────────────────────────────────────
  if (BLOCKED_PATTERNS.some(re => re.test(pathname))) {
    return new NextResponse(null, { status: 404, statusText: 'Not Found' })
  }

  const response = NextResponse.next()

  // ── Skip security headers in development to allow HMR and devtools ────────
  if (process.env.NODE_ENV === 'development') {
    return response
  }

  // ── Attach security headers in production ────────────────────────────────
  for (const [key, value] of Object.entries(buildSecurityHeaders())) {
    response.headers.set(key, value)
  }

  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ],
}

/** @type {import('next').NextConfig} */

// Stable identifier for this build — used by UpdateBanner to detect new deploys.
// On Vercel this is the deployment ID; locally it falls back to Date.now().
const BUILD_ID =
  process.env.NEXT_PUBLIC_BUILD_ID ||
  process.env.VERCEL_DEPLOYMENT_ID ||
  String(Date.now())

const nextConfig = {
  env: {
    NEXT_PUBLIC_BUILD_ID: BUILD_ID,
  },
  reactStrictMode: true,

  // ── Strip X-Powered-By header ─────────────────────────────────────────────
  poweredByHeader: false,

  // ── Never emit source maps to the browser in production ──────────────────
  productionBrowserSourceMaps: false,

  // ── Images ────────────────────────────────────────────────────────────────
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  // ── HTTP security headers (fallback if middleware is bypassed) ────────────
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options',           value: 'DENY' },
          { key: 'X-Content-Type-Options',     value: 'nosniff' },
          { key: 'X-DNS-Prefetch-Control',     value: 'on' },
          { key: 'Referrer-Policy',            value: 'strict-origin-when-cross-origin' },
          { key: 'X-XSS-Protection',           value: '1; mode=block' },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=()',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https://api.dicebear.com https://cdn.discordapp.com",
              "connect-src 'self' https://discord.com https://discordapp.com ws: wss: http://localhost:* http://127.0.0.1:*",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
        ],
      },
      // Hard-block .git and sensitive paths at CDN/Next layer too
      {
        source: '/.git/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
      },
    ]
  },

  // ── Typo-fix redirects ────────────────────────────────────────────────────
  async redirects() {
    return [
      { source: '/hmoe',      destination: '/',          permanent: true },
      { source: '/aboot',     destination: '/about',     permanent: true },
      { source: '/abot',      destination: '/about',     permanent: true },
      { source: '/contat',    destination: '/contact-us', permanent: true },
      { source: '/contactus', destination: '/contact-us', permanent: true },
      { source: '/sever',     destination: '/servers',   permanent: true },
      { source: '/severs',    destination: '/servers',   permanent: true },
      { source: '/eventss',   destination: '/events',    permanent: true },
      { source: '/event',     destination: '/events',    permanent: true },
      { source: '/docs',      destination: '/doc',       permanent: true },
      { source: '/docss',     destination: '/doc',       permanent: true },
      { source: '/joinus',    destination: '/join',      permanent: true },
      { source: '/jion/',     destination: '/join',      permanent: true },
    ]
  },
}

export default nextConfig

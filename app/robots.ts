import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/dashboard/',
          '/api/',
          '/(auth)/',
          '/login',
        ],
      },
    ],
    sitemap: 'https://openboxcomm.in/sitemap.xml',
    host: 'https://openboxcomm.in',
  }
}

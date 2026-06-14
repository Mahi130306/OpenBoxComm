import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
        ],
      },
    ],
    sitemap: 'https://openboxcomm.in/sitemap.xml',
    host: 'https://openboxcomm.in',
  }
}

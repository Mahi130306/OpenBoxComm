import type { Metadata } from 'next'
import Script from 'next/script'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'
import { LoadingScreen } from '@/components/LoadingScreen'
import { ScrollToTop } from '@/components/ScrollToTop'
import { ConsentBanner } from '@/components/ConsentBanner'
import './globals.css'

const BASE_URL = 'https://openboxcomm.in'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Open Box — Community for Everyone',
    template: '%s — Open Box',
  },
  description: 'A community network with multiple Discord servers. Join Open Box to build, learn, game, and connect — free, no gatekeeping.',
  keywords: ['Open Box', 'Discord community', 'gaming server', 'developer community', 'study group', 'networking'],
  authors: [{ name: 'Open Box', url: BASE_URL }],
  creator: 'Open Box',
  icons: {
    icon: '/images/OB.png',
    apple: '/images/OB.png',
    shortcut: '/images/OB.png',
  },
  openGraph: {
    title: 'Open Box — Community for Everyone',
    description: 'A community network with multiple Discord servers. Free to join.',
    url: BASE_URL,
    siteName: 'Open Box',
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'Open Box Community' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Open Box — Community for Everyone',
    description: 'A community network with multiple Discord servers. Free to join.',
    images: ['/og-default.png'],
    site: '@Openboxcomm',
  },
  alternates: { canonical: BASE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: 'Open Box',
      url: BASE_URL,
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/images/OB.png` },
      sameAs: [
        'https://discord.gg/7ZWckKU89J',
        'https://www.instagram.com/openboxcomm/',
        'https://x.com/Openboxcomm',
        'https://www.youtube.com/@obcommunities-yt',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'Open Box',
      publisher: { '@id': `${BASE_URL}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: `${BASE_URL}/servers?q={search_term_string}` },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background">
        <ThemeProvider>
          <ScrollToTop />
          <LoadingScreen />
          <Navbar />
          <main className="pt-16 min-h-screen">{children}</main>
          <Footer />
          <ConsentBanner />
        </ThemeProvider>
      </body>
    </html>
  )
}
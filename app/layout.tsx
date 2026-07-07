import type { Metadata } from 'next'
import Script from 'next/script'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'
import { LoadingScreen } from '@/components/LoadingScreen'
import { ScrollToTop } from '@/components/ScrollToTop'
import { ConsentBanner } from '@/components/ConsentBanner'
import { SecurityGuard } from '@/components/SecurityGuard'
import { WhatsNewTab } from '@/components/WhatsNewTab'
import { UpdateBanner } from '@/components/UpdateBanner'
import './globals.css'

const BASE_URL = 'https://openboxcomm.in'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Open Box — Community for Everyone',
    template: '%s — Open Box',
  },
  description: 'A community network with multiple Discord servers. Join Open Box to build, learn, game, and connect — free, no gatekeeping.',
  keywords: ['Open Box', 'Discord community', 'gaming server', 'developer community', 'study group', 'networking', 'free community', 'the best Discord community', 'the best tech community', 'open box community', 'open box comm', 'OB', 'ob', 'ob.net.in', 'obcomm', 'obcomm.in', 'obcommunity', 'obcommunity.in', 'obcommunity.net', 'openboxcommunity.in', 'openboxcommunity.net', 'openboxcommunity.org', 'obcommunity.org', 'obcommunity.org.in', 'openboxcommunity.org.in', 'the open box community', 'openboxcommunity.org.in'],
  authors: [{ name: 'Open Box', url: BASE_URL }],
  creator: 'Open Box',
  icons: {
    icon: '/images/OB.png',
    apple: '/images/OB.png',
    shortcut: '/images/OB.png',
  },
  openGraph: {
    title: 'Open Box — Community for Everyone',
    description: 'A community network with multiple Discord servers. Join for gaming, development, learning, and networking.',
    url: BASE_URL,
    siteName: 'Open Box',
    images: [{ url: 'https://openboxcomm.in/images/og-default.png', width: 1200, height: 630, alt: 'Open Box Community' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Open Box — Community for Everyone',
    description: 'A community network with multiple Discord servers. Join for gaming, development, learning, and networking.',
    images: ['/images/og-default.png'],
    site: '@Openboxcomm',
    creator: '@Openboxcomm',
  },
  alternates: { canonical: BASE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true }, 'max-image-preview': 'large', 'max-snippet': -1 },
  verification: { google: 'google-site-verification-code' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: 'Open Box',
      alternateName: ['OB', 'OpenBox', 'Open Box Community', 'OB Comm'],
      description:
        'Open Box is a free, no-gatekeeping community network based in India. It operates multiple Discord servers for gaming (OB GG), software development (OB Dev), studying (OB Study), and professional networking (OB Connect), all accessible through openboxcomm.in.',
      url: BASE_URL,
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/images/OB.png`, width: 512, height: 512 },
      image: { '@type': 'ImageObject', url: `${BASE_URL}/images/og-default.png`, width: 1200, height: 630 },
      sameAs: [
        'https://discord.gg/7ZWckKU89J',
        'https://www.instagram.com/openboxcomm/',
        'https://x.com/Openboxcomm',
        'https://www.youtube.com/@obcommunities-yt',
        'https://patreon.com/OpenBoxComm',
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'Customer Support',
          email: 'support@openboxcomm.in',
          url: `${BASE_URL}/contact-us`,
        },
        {
          '@type': 'ContactPoint',
          contactType: 'Community',
          email: 'hello@openboxcomm.in',
          url: `${BASE_URL}/contact-us`,
        },
      ],
      foundingDate: '2021',
      areaServed: { '@type': 'Country', name: 'India' },
      knowsAbout: [
        'Gaming',
        'Software Development',
        'Community Building',
        'Professional Networking',
        'Education',
        'Discord Servers',
        'Hackathons',
        'Developer Communities',
        'Study Groups',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'Open Box',
      description:
        'A free community network with multiple Discord servers for gaming, development, study, and networking.',
      publisher: { '@id': `${BASE_URL}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: `${BASE_URL}/servers?q={search_term_string}` },
        'query-input': 'required name=search_term_string',
      },
    },
    // CommunityForum — tells answer engines this is a social community platform
    {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/#webpage`,
      url: BASE_URL,
      name: 'Open Box — Community for Everyone',
      isPartOf: { '@id': `${BASE_URL}/#website` },
      about: { '@id': `${BASE_URL}/#organization` },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', 'p'],
      },
      description:
        'Open Box is a free, no-gatekeeping community network. Join Discord servers for gaming (OB GG), development (OB Dev), studying (OB Study), and networking (OB Connect).',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${BASE_URL}/#breadcrumbs`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: 'Servers', item: `${BASE_URL}/servers` },
        { '@type': 'ListItem', position: 3, name: 'Events', item: `${BASE_URL}/events` },
        { '@type': 'ListItem', position: 4, name: 'Blog', item: `${BASE_URL}/blogs` },
        { '@type': 'ListItem', position: 5, name: 'Help', item: `${BASE_URL}/help` },
      ],
    },
    // FAQPage — enables Google's FAQ rich results and AEO direct answers
    {
      '@type': 'FAQPage',
      '@id': `${BASE_URL}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is Open Box?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Open Box is a free, no-gatekeeping community network based in India. It runs multiple Discord servers — OB Junction (general), OB Dev (developers), OB GG (gaming), OB Study (learning), and OB Connect (networking) — and a central website at openboxcomm.in.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Open Box free to join?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All Open Box Discord servers are free to join and use. Optional paid supporter tiers (NPC, Rookie, GOAT, Legend) are available on Patreon for members who want to contribute financially and receive perks.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I join Open Box?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Visit openboxcomm.in/join or use the invite link discord.gg/7ZWckKU89J. You start in OB Junction, the main entry server, and can then join Dev, GG, Study, or Connect based on your interests.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which Open Box server is for developers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'OB Dev is the developer-focused Discord server inside Open Box. It has channels for code help, project feedback, tool discussions, hackathons, and finding collaborators. Invite: discord.gg/H2AmpBrPdW',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Open Box have a gaming server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. OB GG is the gaming server inside Open Box, currently in beta. It covers game sessions, competitions, and community gameplay. Invite: discord.gg/etnc7ZpDKT',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Open Box affiliated with any company or university?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Open Box is entirely independent and volunteer-run. It is not affiliated with any company, university, or institution.',
          },
        },
      ],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="msvalidate.01" content="E7F02EAA1582F97200DE2848358DE313" />
        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5B33KBB4');`}
        </Script>
        {/* End Google Tag Manager */}
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-58P0FR4M2T"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-58P0FR4M2T');
          `}
        </Script>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5B33KBB4"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <ThemeProvider>
          <SecurityGuard />
          <ScrollToTop />
          <LoadingScreen />
          <Navbar />
          <main className="pt-16 min-h-screen">{children}</main>
          <WhatsNewTab />
          <Footer />
          <ConsentBanner />
          <UpdateBanner />
        </ThemeProvider>
      </body>
    </html>
  )
}
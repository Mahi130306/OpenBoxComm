/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
  async redirects() {
    return [
      { source: '/hmoe', destination: '/', permanent: true },
      { source: '/aboot', destination: '/about', permanent: true },
      { source: '/abot', destination: '/about', permanent: true },
      // redundant blog redirect removed
      // redundant docs redirect removed
      // redundant contact redirect removed
      { source: '/contactus', destination: '/contact', permanent: true },
      { source: '/contat', destination: '/contact', permanent: true },
      // redundant community redirect removed
      { source: '/sever', destination: '/community', permanent: true },
      { source: '/severs', destination: '/community', permanent: true },
      // redundant sponsor redirect removed
      // redundant faq redirect removed
      { source: '/eventss', destination: '/events', permanent: true },
      { source: '/event', destination: '/events', permanent: true },
      { source: '/docss', destination: '/docs', permanent: true },
      // Redesign Slugs
      { source: '/servers', destination: '/community', permanent: true },
      { source: '/blogs', destination: '/blog', permanent: true },
      { source: '/doc', destination: '/docs', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/support', destination: '/sponsor', permanent: true },
      // Typos
      { source: '/joinus', destination: '/join', permanent: true },
      { source: '/jion/', destination: '/join', permanent: true },
    ]
  },
};

export default nextConfig;

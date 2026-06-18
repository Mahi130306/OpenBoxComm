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
      { source: '/contat', destination: '/contact-us', permanent: true },
      { source: '/contactus', destination: '/contact-us', permanent: true },
      { source: '/sever', destination: '/servers', permanent: true },
      { source: '/severs', destination: '/servers', permanent: true },
      { source: '/eventss', destination: '/events', permanent: true },
      { source: '/event', destination: '/events', permanent: true },
      { source: '/docs', destination: '/doc', permanent: true },
      { source: '/docss', destination: '/doc', permanent: true },
      { source: '/joinus', destination: '/join', permanent: true },
      { source: '/jion', destination: '/join', permanent: true },
      { source: '/jio', destination: '/join', permanent: true },
      { source: '/teams', destination: '/team', permanent: true },
      { source: '/teem', destination: '/team', permanent: true },
      { source: '/supprt', destination: '/support', permanent: true },
      { source: '/suport', destination: '/support', permanent: true },
      { source: '/bolg', destination: '/blogs', permanent: true },
      { source: '/hepl', destination: '/help', permanent: true },
      { source: '/hlpe', destination: '/help', permanent: true },
      { source: '/legl', destination: '/legal', permanent: true },
      { source: '/leagal', destination: '/legal', permanent: true },
    ]
  },
};

export default nextConfig;

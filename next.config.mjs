/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
    ]
  },
};

export default nextConfig;

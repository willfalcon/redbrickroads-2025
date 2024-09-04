/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/0ny3ua3p/production/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/0ny3ua3p/development/**',
      },
    ],
  },
  experimental: {
    taint: true,
  },
};

export default nextConfig;

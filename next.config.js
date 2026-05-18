/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'oss.javastarboy.com',
        pathname: '/agi/**',
      },
    ],
  },
};

module.exports = nextConfig;

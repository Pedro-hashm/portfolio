/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'abovepromotions.com',
        pathname: '/**', // permite qualquer caminho dentro desse domínio
      },
      {
        protocol: 'https',
        hostname: 'imgur.com',  // domínio do Imgur
        pathname: '/**',  // permite qualquer caminho dentro desse domínio
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',  // domínio do Imgur
        pathname: '/**',  // permite qualquer caminho dentro
      }
    ],
  },
};

export default nextConfig;

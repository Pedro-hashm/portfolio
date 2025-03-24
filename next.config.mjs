/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'abovepromotions.com',
          pathname: '/**', // permite qualquer caminho dentro desse domínio
        },
      ],
    },
  };
  
  export default nextConfig;
  
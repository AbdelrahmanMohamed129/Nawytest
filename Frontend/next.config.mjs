/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.nawy.com',
            port: '',
            pathname: '/_next/static/media/**',
          },
        ],
      }
};

export default nextConfig;

  

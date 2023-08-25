/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   swcMinify: true,
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'riopass-bucket.s3.sa-east-1.amazonaws.com'
         }
      ]
   }
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns:  [
      {
        hostname: 'm.media-amazon.com'
      }
    ]
  }
};

export default nextConfig;

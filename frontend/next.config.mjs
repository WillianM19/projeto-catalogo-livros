/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns:  [
      {
        hostname: "**",
      },
    ]
  },
  headers: {
    'Access-Control-Allow-Origin': '*',
  },

};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
    domains: ['images.unsplash.com', 'placehold.co'],
  },
};

export default nextConfig;

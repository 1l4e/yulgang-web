/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  swcMinify: true,
  serverComponentsExternalPackages: ["mysql2"],
  images: {
    domains: ['localhost','chamthoi.com',"*.vercel.com","picture.dzogame.vn"],
  },
};

module.exports = nextConfig;

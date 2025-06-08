/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NOTION_KEY: process.env.NOTION_KEY,
    NOTION_DATABASE_ID: process.env.NOTION_DATABASE_ID,
  },
  swcMinify: true,
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;

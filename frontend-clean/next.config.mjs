/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NOTION_KEY: process.env.NOTION_KEY,
    NOTION_DATABASE_ID: process.env.NOTION_DATABASE_ID,
  },
  experimental: {
    serverActions: {}, // ✅ must be an object now
  },
  // ❌ swcMinify is no longer a valid option in Next.js 15+
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    esmExternals: true,
  },
  env: {
    NEXT_PUBLIC_POLYMARKET_API_URL: process.env.NEXT_PUBLIC_POLYMARKET_API_URL,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    NEXT_PUBLIC_ACONTEXT_ENABLED: process.env.NEXT_PUBLIC_ACONTEXT_ENABLED,
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist',
  reactStrictMode: true,
  swcMinify: true,
  // Solve "Module parse failed: The keyword 'interface' is reserved" when "import type {IXXX} from 'xxx'"
  // see https://github.com/vercel/next.js/issues/5666 and https://github.com/vercel/next.js/pull/22867
  experimental: {
    externalDir: true,
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const withTM = require("next-transpile-modules")([
  "@eo-ms/ui",
]);

const nextConfig = {
  distDir: 'dist',
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['ts', 'tsx', 'mdx']
}

// @ts-ignore
module.exports = withTM(withMDX(nextConfig))
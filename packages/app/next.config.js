/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@mui/system', '@mui/material', '@mui/icons-material'],
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

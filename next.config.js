/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    // Add any server-side specific configurations here
    isServer: true,
  },
  publicRuntimeConfig: {
    // Add any client-side specific configurations here
    isServer: false,
  },
};

module.exports = nextConfig;
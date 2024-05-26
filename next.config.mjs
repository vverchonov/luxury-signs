/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.shopify.com", "marketplace.canva.com"],
  },
  transpilePackages: ["three"],
};

export default nextConfig;

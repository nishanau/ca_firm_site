/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: '/ca_firm_site',
  assetPrefix: '/ca_firm_site',
};

export default nextConfig;
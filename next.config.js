/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/Kids-U-Donor-Demo",
  assetPrefix: "/Kids-U-Donor-Demo/",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

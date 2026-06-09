import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Full static export: every page is pre-rendered HTML, served by nginx.
  output: "export",
  trailingSlash: false,
  images: {
    // Static export has no image optimization server; images are
    // pre-sized webp/jpg in /public instead.
    unoptimized: true,
  },
};

export default nextConfig;

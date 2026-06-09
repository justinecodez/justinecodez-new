import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";

const nextConfig: NextConfig = {
  // Full static export: every page is pre-rendered HTML, served by nginx.
  output: "export",
  trailingSlash: false,
  pageExtensions: ["ts", "tsx", "mdx"],
  images: {
    // Static export has no image optimization server; images are
    // pre-sized webp/jpg in /public instead.
    unoptimized: true,
  },
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [[rehypePrettyCode, { theme: "github-light", keepBackground: false }]],
  },
});

export default withMDX(nextConfig);

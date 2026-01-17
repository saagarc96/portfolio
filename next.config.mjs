import { withContentCollections } from "@content-collections/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  // For GitHub Pages deployment (username.github.io)
  // If deploying to a subpath like username.github.io/portfolio, add:
  // basePath: "/portfolio",
  // assetPrefix: "/portfolio",
};

// withContentCollections must be the outermost plugin
export default withContentCollections(nextConfig);

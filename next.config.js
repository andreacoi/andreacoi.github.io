/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
};
(module.exports = nextConfig),
  {
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId },
    ) {
      return {
        "/": { page: "/" },
        "/about": { page: "/about" },
        "/post/01-nuovo-blog": { page: "/post/01-nuovo-blog" },
      };
    },
  };

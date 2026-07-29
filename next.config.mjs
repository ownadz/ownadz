/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep a normal build pipeline for dynamic routes.
  // output:'export' breaks the app unless *every* dynamic page exports
  // generateStaticParams(), which is hard to guarantee.
  output: 'standalone',

  images: {
    unoptimized: true,
  },
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blog.ownadz.com",
      },
    ],
};


export default nextConfig;


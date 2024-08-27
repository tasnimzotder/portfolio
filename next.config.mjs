import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "*.tasnimzotder.com",
      }, {
        hostname: "*.unsplash.com",
      }, {
        hostname: "cdn.hashnode.com"
      }
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow cloudflare tunnel for dev preview
  allowedDevOrigins: [
    "*.trycloudflare.com",
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd30itml3t0pwpf.cloudfront.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

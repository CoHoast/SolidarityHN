import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow cloudflare tunnel for dev preview
  allowedDevOrigins: [
    "*.trycloudflare.com",
  ],
};

export default nextConfig;

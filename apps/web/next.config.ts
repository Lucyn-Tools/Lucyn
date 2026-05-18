import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@lucyn/ai", "@lucyn/db", "@lucyn/github", "@lucyn/compression"],
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
};

export default nextConfig;

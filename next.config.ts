import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  images: {
    remotePatterns: [new URL('https://yozbrydxdlcxghkphhtq.supabase.co/**')],
  },

};

export default nextConfig;

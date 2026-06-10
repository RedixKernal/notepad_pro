import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/releases/:path*",
        headers: [
          {
            key: "Content-Type",
            value: "application/msix",
          },
          {
            key: "Content-Disposition",
            value: "attachment",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

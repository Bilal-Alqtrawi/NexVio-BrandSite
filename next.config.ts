import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "d efault-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**"
      }
    ]
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production"
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true
      },
      {
        source: "/devices/nova-156",
        destination: "/home#devices",
        permanent: true
      },
      {
        source: "/devices/nova-c3",
        destination: "/devices/nova-c20",
        permanent: true
      }
    ];
  }
};

export default nextConfig;

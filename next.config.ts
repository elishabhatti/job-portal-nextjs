/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "sxhrylj45n.ufs.sh",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;

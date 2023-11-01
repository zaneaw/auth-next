/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    console.log("Rewrites called.");
    return process.env.NODE_ENV === "development"
      ? [
          {
            source: "/api",
            destination: "http://localhost:3333/",
          },
          {
            source: "/api/:path*",
            destination: "http://localhost:3333/:path*",
          },
        ]
      : [];
  },
};

module.exports = nextConfig;

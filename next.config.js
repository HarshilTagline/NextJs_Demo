/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "fakestoreapi.com",
  //       port: "",
  //       pathname: "/img/**",
  //     },
  //   ],
  // },
  images: {
    domains: ["fakestoreapi.com"],
  },
};

module.exports = nextConfig

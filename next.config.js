/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = withContentlayer({
  images: {
    domains: ["cdn6.f-cdn.com", "images.pexels.com","pbs.twimg.com"],
  },
});
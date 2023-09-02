/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picx.zhimg.com"
      },
      {
        protocol: "https",
        hostname: "pic1.zhimg.com"
      },
    ],
  },
  output: 'export',
  distDir: 'docs',
  basePath: '/zhihu-daily'
};

module.exports = nextConfig;

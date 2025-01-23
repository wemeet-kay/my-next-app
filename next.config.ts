/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/my-next-app" : "", // ✅ 로컬 환경에서는 basePath 제거
};

export default nextConfig;
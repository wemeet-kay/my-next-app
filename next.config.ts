/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ Static Export 활성화
  trailingSlash: true, // ✅ GitHub Pages & 정적 사이트에서 경로 문제 해결
  images: {
    unoptimized: true, // ✅ 정적 배포 시 이미지 최적화 방지
  },
  experimental: {
    appDir: true, // ✅ App Router 사용 활성화
  },
};

export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ Static Export 활성화
  trailingSlash: true, // ✅ GitHub Pages에서 경로 문제 해결
  images: {
    unoptimized: true, // ✅ GitHub Pages에서 이미지 최적화 방지
  },
  basePath: process.env.NODE_ENV === "production" ? "/my-next-app" : "", // ✅ 배포 환경에 맞게 설정
  assetPrefix: process.env.NODE_ENV === "production" ? "/my-next-app/" : "", // ✅ 정적 파일 경로 수정
};

export default nextConfig;
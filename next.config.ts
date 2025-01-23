// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ Static Export 활성화
  trailingSlash: true, // ✅ GitHub Pages에서 경로 문제 해결
  images: {
    unoptimized: true, // ✅ 이미지 최적화 방지
  },
  basePath: "/my-next-app", // ✅ GitHub Pages에서는 repository 이름을 basePath로 설정해야 함
};

export default nextConfig;
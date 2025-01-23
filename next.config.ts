// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static Export 활성화
  trailingSlash: true, // GitHub Pages에서 404 방지
  images: {
    unoptimized: true, // GitHub Pages는 이미지 최적화를 지원하지 않으므로 설정 필요
  },
};

export default nextConfig;
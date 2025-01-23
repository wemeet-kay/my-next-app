// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static Export 활성화
  trailingSlash: true, // GitHub Pages와 호환
};

export default nextConfig;
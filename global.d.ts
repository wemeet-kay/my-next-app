// 📌 TypeScript에서 window.ReactNativeWebView의 존재를 인식하도록 타입 선언
export {};

declare global {
  interface Window {
    ReactNativeWebView?: {
      postMessage: (message: string) => void;
    };
  }
}
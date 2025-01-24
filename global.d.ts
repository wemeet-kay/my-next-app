// 📌 TypeScript에서 window.FlutterInAppWebView의 존재를 인식하도록 타입 선언
export {};

declare global {
  interface Window {
    FlutterInAppWebView?: {
      postMessage: (message: string) => void;
    };
  }
}
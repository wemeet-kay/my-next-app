// 📌 TypeScript에서 window.FlutterInAppWebView의 존재를 인식하도록 타입 선언
export {};

declare global {
  interface Window {
    flutter_inappwebview?: {
      callHandler: (handlerName: string, ...args: any[]) => Promise<any>;
    };
  }
}
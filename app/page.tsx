"use client"; // ✅ 클라이언트 컴포넌트 선언
import { useEffect, useState } from "react";

export default function Home() {
  const [userAgent, setUserAgent] = useState("");

  useEffect(() => {
    setUserAgent(navigator.userAgent); // ✅ 브라우저의 User-Agent 가져오기
  }, []);

  const handleClick = () => {
    const postMessage = "requestLocationForNearbyFacilities";

    // ✅ Flutter WebView 환경에서만 실행
    if (navigator.userAgent.includes("APP_WEBVIEW")) {
      if (window.ReactNativeWebView && typeof window.ReactNativeWebView.postMessage === "function") {
        window.ReactNativeWebView.postMessage(postMessage);
        console.log(`🚀 Flutter WebView로 메시지 전송 완료! (메시지: ${postMessage})`);
        alert(`🚀 Flutter WebView로 메시지 전송 완료!\n📢 전송된 메시지: ${postMessage}`);
      } else {
        console.warn("🚨 ReactNativeWebView가 정의되지 않았습니다.");
        alert("🚨 ReactNativeWebView가 정의되지 않았습니다.");
      }
    } else {
      console.warn("❌ Flutter WebView 환경이 아닙니다.");
      alert("🚨 이 기능은 Flutter WebView에서만 작동합니다.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🚀 Next.js → Flutter WebView 메시지 전송 테스트</h1>
      <p>버튼을 클릭하면 Flutter WebView로 메시지가 전달됩니다.</p>
      <p>현재 User-Agent: <b>{userAgent}</b></p>
      <button
        onClick={handleClick}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Flutter WebView로 메시지 보내기
      </button>
    </div>
  );
}
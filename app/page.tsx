"use client"; // ✅ 클라이언트 컴포넌트 선언
import { useEffect, useState } from "react";

export default function Home() {
  const [userAgent, setUserAgent] = useState("");

  useEffect(() => {
    const ua = navigator.userAgent;
    console.log(`🔍 현재 User-Agent: ${ua}`); // ✅ User-Agent 콘솔 로그 추가
    setUserAgent(ua);
  }, []);

  const handleClick = () => {
    const postMessage = "requestLocationForNearbyFacilities";

    if (userAgent.includes("APP_WEBVIEW")) {
      window.flutter_inappwebview?.callHandler('postMessage', postMessage);
      console.log(`🚀 Flutter WebView로 메시지 전송 완료! (메시지: ${postMessage})`);
      alert(`🚀 Flutter WebView로 메시지 전송 완료!\n📢 전송된 메시지: ${postMessage}`);
    } else {
      console.warn("❌ Flutter WebView 환경이 아닙니다.");
      alert("🚨 이 기능은 Flutter WebView에서만 작동합니다.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🚀 Next.js → Flutter WebView 메시지 전송 테스트</h1>
      <p>아래 User-Agent 값이 Flutter WebView에서 설정한 값과 같은지 확인하세요:</p>
      <p><b>{userAgent}</b></p>
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
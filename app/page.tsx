"use client"; // ✅ 클라이언트 컴포넌트 선언
import { useEffect, useState } from "react";

export default function Home() {
  const [userAgent, setUserAgent] = useState("");

  useEffect(() => {
    const ua = navigator.userAgent;
    console.log(`🔍 현재 User-Agent: ${ua}`); // ✅ User-Agent 콘솔 로그 추가
    setUserAgent(ua);
  }, []);

  // ✅ 버튼 클릭 시 Flutter WebView로 메시지 전송
  const sendMessageToFlutter = (message: string) => {
    if (userAgent.includes("APP_WEBVIEW")) {
      if (window.flutter_inappwebview) {
        window.flutter_inappwebview.callHandler("postMessage", message);
        console.log(`🚀 Flutter WebView로 메시지 전송 완료! (메시지: ${message})`);
        alert(`🚀 Flutter WebView로 메시지 전송 완료!\n📢 전송된 메시지: ${message}`);
      } else {
        console.warn("❌ Flutter WebView 환경이지만 flutter_inappwebview 객체가 없습니다.");
        alert("🚨 Flutter WebView가 감지되었지만, 메시지 전송이 불가능합니다.");
      }
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

      {/* ✅ 각 메시지를 전송하는 버튼 추가 */}
      <button
        onClick={() => sendMessageToFlutter("requestLocationForNearbyFacilities")}
        style={buttonStyle}
      >
        📍 근처 시설 찾기 요청
      </button>

      <button
        onClick={() => sendMessageToFlutter("requestFile")}
        style={buttonStyle}
      >
        📁 파일 업로드 요청
      </button>

      <button
        onClick={() => sendMessageToFlutter("syncContactInfo")}
        style={buttonStyle}
      >
        📞 연락처 동기화 요청
      </button>
    </div>
  );
}

// ✅ 버튼 스타일 정의
const buttonStyle: React.CSSProperties = {
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
  margin: "10px",
  display: "block",
  width: "250px",
  textAlign: "center",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
};
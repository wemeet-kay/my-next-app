'use client'; // ✅ 클라이언트 컴포넌트 선언
import { useEffect, useState } from "react";

export default function Home() {
  const [userAgent, setUserAgent] = useState("");

  useEffect(() => {
    setUserAgent(navigator.userAgent);  // 브라우저의 User-Agent 가져오기
  }, []);

  const handleClick = () => {
    const postMessage = "requestLocationForNearbyFacilities";
    if(navigator.userAgent.includes("APP_WEBVIEW")) {
      window.postMessage(postMessage);
      console.log("✅ [${postMessage}] 메시지가 전송되었습니다!");
      alert("✅ [${postMessage}] 메시지가 전송되었습니다!");
    } else {
      console.warn("❌ Flutter WebView 환경이 아닙니다.");
      alert("🚨 이 기능은 Flutter WebView에서만 작동합니다.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🚀 광양시 프로젝트 테스트 🚀</h1>
      <p>아래 User-Agent 값이 Flutter WebView에서 설정한 값과 같은지 확인하세요:</p>
        {userAgent}
      <p>버튼을 클릭하면 콘솔과 팝업 메시지가 표시됩니다.</p>
      <button
        onClick={handleClick} // ✅ 클릭 이벤트 설정
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        클릭하세요
      </button>
    </div>
  );
}
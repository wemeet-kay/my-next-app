'use client'; // ✅ 클라이언트 컴포넌트 선언

export default function Home() {
  const handleClick = () => {
    console.log("✅ 버튼이 클릭되었습니다!");
    alert("✅ 버튼이 클릭되었습니다!");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🚀 광양시 프로젝트 테스트 🚀</h1>
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
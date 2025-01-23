'use client'; // ✅ 클라이언트 컴포넌트임을 선언

export default function Home() {
  const handleClick = () => {
    console.log("✅ 버튼이 클릭되었습니다!"); // ✅ 콘솔에 로그 출력
    alert("✅ 버튼이 클릭되었습니다!"); // ✅ 윈도우 메시지 팝업 띄우기
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Next.js 프로젝트 실행 성공! 🚀</h1>
      <p>버튼을 클릭하면 콘솔과 팝업 메시지가 표시됩니다.</p>
      <button
        onClick={handleClick} // ✅ 클릭 이벤트 핸들러 설정
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
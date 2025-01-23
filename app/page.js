export default function Home() {
  return (
    <div>
      <h1>Next.js 프로젝트 실행 성공!</h1>
      <p>버튼을 눌러보세요.</p>
      <button
        onClick={() => alert('버튼이 클릭되었습니다!')}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          marginTop: '10px',
        }}
      >
        클릭하세요
      </button>
    </div>
  );
}
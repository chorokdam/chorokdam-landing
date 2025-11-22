export default function App() {
  return (
    <div style={{ padding: "40px", maxWidth: "720px", margin: "0 auto" }}>
      
      {/* Header */}
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>초록담</h1>
        <p style={{ color: "#555", marginTop: "8px" }}>일상에 작은 온기를 담아내는 공간</p>
      </header>

      {/* Intro */}
      <section style={{ textAlign: "center", marginBottom: "40px" }}>
        <p style={{ color: "#555", fontSize: "16px", lineHeight: "1.6" }}>
          초록담은 일상 속 작은 순간을 기록하고,<br />
          더 나은 하루를 위한 도구를 만들고 있습니다.
        </p>
      </section>

      {/* Project */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "16px" }}>프로젝트</h2>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
          <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>
            하루갈피
          </h3>

          <p style={{ color: "#555", marginBottom: "16px", lineHeight: "1.5" }}>
            소소하지만 소중한 하루들을 기록하기 위한 감성 기록 도구.
          </p>

          <a
            href="https://harugalpi.vercel.app/"
            style={{ color: "#2e7d32", fontWeight: "500" }}
          >
            하루갈피 보러가기 →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          marginTop: "60px",
          textAlign: "center",
          fontSize: "13px",
          color: "#777",
        }}
      >
        © 초록담 2025 · daily.chorokdam@gmail.com
      </footer>
    </div>
  );
}

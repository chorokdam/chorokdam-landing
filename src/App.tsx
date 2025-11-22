import React from "react";

function App(): JSX.Element {
  // brand colors
  const green = "#4a7c59";
  const mutedGreen = "#5f8f68";
  const cardBorder = "#e6e6e0";
  const footerBg = "#e6f3ea";

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#fdfdf8",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <main
        style={{
          width: "100%",
          maxWidth: 720,
          backgroundColor: "#fff",
          borderRadius: 24,
          padding: "40px 28px 28px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.04)",
          display: "flex",
          flexDirection: "column",
          gap: 32,
        }}
      >
        {/* HEADER */}
        <header style={{ textAlign: "center" }}>
          <h1
            style={{
              fontSize: 28,
              letterSpacing: "-0.03em",
              margin: 0,
              color: green,
            }}
          >
            초록담
          </h1>
          <p
            style={{
              margin: "10px 0 0 0",
              fontSize: 14,
              color: "#777",
            }}
          >
            일상의 작은 순간들을 담아내는 공간
          </p>
        </header>

        {/* ⭐ GOOGLE AD BLOCK (광고 자리) */}
        <section
          style={{
            border: `1px dashed ${cardBorder}`,
            borderRadius: 16,
            padding: "20px",
            textAlign: "center",
            color: "#999",
            fontSize: 12,
            backgroundColor: "#fafaf6",
          }}
        >
          {/* 실제 광고 코드는 AdSense 승인 후 여기에 삽입 */}
          <p style={{ marginBottom: 6, fontWeight: 500, color: "#aaa" }}>
            ─ 광고 영역 ─
          </p>
          <p>Google AdSense 승인 후 자동으로 광고가 표시됩니다.</p>

          {/* 나중에 삽입할 광고 코드 자리 */}
          {/* 
          <ins class="adsbygoogle"
             style={{display:'block'}}
             data-ad-client="ca-pub-XXXX"
             data-ad-slot="XXXX"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
          */}
        </section>

        {/* PROJECTS */}
        <section style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <h2 style={{ fontSize: 16, margin: 0, color: "#444" }}>
            모든 프로젝트
          </h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            {/* 하루갈피 */}
            <article
              style={{
                flex: "1 1 0",
                minWidth: 200,
                borderRadius: 20,
                border: `1px solid ${cardBorder}`,
                padding: 18,
                backgroundColor: "#ffffff",
                boxShadow: "0 8px 24px rgba(0,0,0,0.03)",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <div style={{ fontSize: 22 }}>📑</div>
              <h3 style={{ margin: 0, fontSize: 15, color: "#222" }}>
                하루갈피
              </h3>
              <p style={{ margin: 0, fontSize: 13, color: "#777" }}>
                스치 지나가는 하루를 조용한 갈피로 남겨두는 미니멀 일기 앱.
              </p>
              <a
                href="https://harugalpi.vercel.app"
                style={{
                  marginTop: 8,
                  fontSize: 13,
                  textDecoration: "none",
                  color: mutedGreen,
                }}
              >
                하루갈피 열어보기 →
              </a>
            </article>

            {/* Soon B */}
            <article
              style={{
                flex: "1 1 0",
                minWidth: 200,
                borderRadius: 20,
                border: `1px dashed ${cardBorder}`,
                padding: 18,
                backgroundColor: "#fafaf6",
                opacity: 0.6,
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <div style={{ fontSize: 22 }}>🌱</div>
              <h3 style={{ margin: 0, fontSize: 15, color: "#444" }}>
                프로젝트 B
              </h3>
              <p style={{ margin: 0, fontSize: 13, color: "#999" }}>
                감정과 장면을 담아내는 새로운 기록 도구.
              </p>
              <span style={{ marginTop: 8, fontSize: 12, color: "#aaa" }}>
                Soon…
              </span>
            </article>

            {/* Soon C */}
            <article
              style={{
                flex: "1 1 0",
                minWidth: 200,
                borderRadius: 20,
                border: `1px dashed ${cardBorder}`,
                padding: 18,
                backgroundColor: "#fafaf6",
                opacity: 0.6,
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <div style={{ fontSize: 22 }}>🌿</div>
              <h3 style={{ margin: 0, fontSize: 15, color: "#444" }}>
                프로젝트 C
              </h3>
              <p style={{ margin: 0, fontSize: 13, color: "#999" }}>
                자연과 함께하는 감성 기록 서비스.
              </p>
              <span style={{ marginTop: 8, fontSize: 12, color: "#aaa" }}>
                Soon…
              </span>
            </article>
          </div>
        </section>

        {/* FOOTER */}
        <footer
          style={{
            marginTop: 8,
            padding: "10px 16px",
            backgroundColor: footerBg,
            borderRadius: 16,
            textAlign: "center",
            fontSize: 12,
            color: mutedGreen,
          }}
        >
          © 초록담 2025
        </footer>
      </main>
    </div>
  );
}

export default App;

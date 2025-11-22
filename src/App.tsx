import React from "react";

function App(): JSX.Element {
  // 색상 팔레트
  const green = "#4a7c59";
  const mutedGreen = "#5f8f68";
  const cardBorder = "#e6e6e0";
  const footerBg = "#e6f3ea";

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fdfdf8",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
        color: "#333",
      }}
    >
      {/* 메인 카드 */}
      <main
        style={{
          width: "100%",
          maxWidth: 720,
          margin: "0 auto",
          boxShadow: "0 20px 60px rgba(0,0,0,0.04)",
          borderRadius: 24,
          backgroundColor: "#ffffff",
          padding: "40px 28px 28px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: 32,
        }}
      >
        {/* 헤더 + 브랜딩 */}
        <header style={{ textAlign: "center" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              padding: "6px 12px",
              borderRadius: 999,
              backgroundColor: "#f1f5f1",
              fontSize: 12,
              color: mutedGreen,
              marginBottom: 16,
            }}
          >
            <span role="img" aria-label="leaf">
              🌿
            </span>
            <span>일상의 작은 순간들을 담는 브랜드</span>
          </div>

          <h1
            style={{
              fontSize: 28,
              letterSpacing: "-0.03em",
              margin: 0,
              marginBottom: 8,
              color: green,
            }}
          >
            초록담
          </h1>

          <p
            style={{
              margin: 0,
              fontSize: 14,
              lineHeight: 1.6,
              color: "#777",
            }}
          >
            감정과 기록, 작은 관찰들을 조용히 쌓아 가는 디지털 공간입니다.
          </p>
        </header>

        {/* 프로젝트 섹션 */}
        <section style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <h2
            style={{
              fontSize: 16,
              margin: 0,
              color: "#444",
            }}
          >
            모든 프로젝트
          </h2>

          {/* 카드 리스트 */}
          <div
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            {/* 카드 1 : 하루갈피 */}
            <article
              style={{
                flex: "1 1 0",
                minWidth: 200,
                borderRadius: 20,
                border: `1px solid ${cardBorder}`,
                padding: 18,
                boxSizing: "border-box",
                boxShadow: "0 8px 24px rgba(0,0,0,0.03)",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <div style={{ fontSize: 22 }}>📑</div>
              <h3
                style={{
                  fontSize: 15,
                  margin: 0,
                  color: "#222",
                }}
              >
                하루갈피
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: 13,
                  lineHeight: 1.5,
                  color: "#777",
                }}
              >
                스치 지나가는 하루를 조용한 갈피로 남겨두는 미니멀 일기 앱.
              </p>
              <a
                href="https://harugalpi.vercel.app/"
                style={{
                  marginTop: 8,
                  fontSize: 13,
                  textDecoration: "none",
                  color: mutedGreen,
                  fontWeight: 500,
                }}
              >
                하루갈피 열어보기 →
              </a>
            </article>

            {/* 카드 2 : Soon */}
            <article
              style={{
                flex: "1 1 0",
                minWidth: 200,
                borderRadius: 20,
                border: `1px dashed ${cardBorder}`,
                padding: 18,
                boxSizing: "border-box",
                backgroundColor: "#fafaf6",
                opacity: 0.6,
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <div style={{ fontSize: 22 }}>🌱</div>
              <h3
                style={{
                  fontSize: 15,
                  margin: 0,
                  color: "#444",
                }}
              >
                프로젝트 B
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: 13,
                  lineHeight: 1.5,
                  color: "#999",
                }}
              >
                감정과 색, 장면을 수집하는 새로운 도구.
              </p>
              <span
                style={{
                  marginTop: 8,
                  fontSize: 12,
                  color: "#aaa",
                }}
              >
                Soon…
              </span>
            </article>

            {/* 카드 3 : Soon */}
            <article
              style={{
                flex: "1 1 0",
                minWidth: 200,
                borderRadius: 20,
                border: `1px dashed ${cardBorder}`,
                padding: 18,
                boxSizing: "border-box",
                backgroundColor: "#fafaf6",
                opacity: 0.6,
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <div style={{ fontSize: 22 }}>🌿</div>
              <h3
                style={{
                  fontSize: 15,
                  margin: 0,
                  color: "#444",
                }}
              >
                프로젝트 C
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: 13,
                  lineHeight: 1.5,
                  color: "#999",
                }}
              >
                일상 속 자연과 함께하는 감성 기록 서비스.
              </p>
              <span
                style={{
                  marginTop: 8,
                  fontSize: 12,
                  color: "#aaa",
                }}
              >
                Soon…
              </span>
            </article>
          </div>
        </section>

        {/* 푸터 */}
        <footer
          style={{
            marginTop: 8,
            padding: "10px 16px",
            borderRadius: 16,
            backgroundColor: footerBg,
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

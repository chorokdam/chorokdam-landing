// src/App.tsx
import React from "react";

export default function App() {
  return (
    <div className="app-root">
      <main className="app-shell">
        {/* 헤더 */}
        <header className="app-header">
          <h1 className="app-title">초록담</h1>
          <p className="app-subtitle">일상에 작은 온기를 담아내는 공간</p>
        </header>

        {/* 광고 영역 */}
        <section className="app-ad">
          <div className="app-ad-inner">
            <p className="app-ad-label">— 광고 영역 —</p>
            <p className="app-ad-text">
              Google AdSense 승인 후 자동으로 광고가 표시됩니다.
            </p>
          </div>
        </section>

        {/* 프로젝트 영역 */}
        <section className="app-projects">
          <p className="app-projects-label">모든 프로젝트</p>

          <div className="app-project-grid">
            {/* 하루갈피 카드 */}
            <article className="project-card">
              <div className="project-icon">📑</div>
              <h2 className="project-title">하루갈피</h2>
              <p className="project-desc">
                소소하지만 소중한 하루를 조용한 갈피로 남겨두는 미니멀 일기 앱.
              </p>
              <a
                href="https://harugalpi.vercel.app/"
                className="project-link"
              >
                하루갈피 열어보기 →
              </a>
            </article>

            {/* 프로젝트 B – Soon */}
            <article className="project-card project-card-soon">
              <div className="project-icon">🌿</div>
              <h2 className="project-title">프로젝트 B</h2>
              <p className="project-desc">
                감정과 장면을 담아내는 새로운 기록 도구.
              </p>
              <p className="project-soon">Soon…</p>
            </article>

            {/* 프로젝트 C – Soon */}
            <article className="project-card project-card-soon">
              <div className="project-icon">🍃</div>
              <h2 className="project-title">프로젝트 C</h2>
              <p className="project-desc">
                자연과 함께하는 감성 기록 서비스.
              </p>
              <p className="project-soon">Soon…</p>
            </article>
          </div>
        </section>

        {/* 푸터 */}
        <footer className="app-footer">
          <span>© 초록담 2025</span>
          <span className="app-footer-dot">·</span>
          <a href="mailto:daily.chorokdam@gmail.com">
            daily.chorokdam@gmail.com
          </a>
        </footer>
      </main>
    </div>
  );
}

import React from "react";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fafaf6] text-center font-sans px-6">

      {/* 브랜드명 */}
      <h1 className="text-4xl font-semibold text-[#1a3f2e] tracking-tight mb-3">
        초록담
      </h1>

      {/* 브랜드 설명 */}
      <p className="text-sm text-[#555] mb-10">
        일상의 작은 순간들을 담아내는 공간
      </p>

      {/* 하루갈피 링크 (채도 낮은 색상) */}
      <a
        href="https://harugalpi.vercel.app"
        className="text-[#4a6f55] hover:text-[#355a43] transition font-medium underline underline-offset-4"
      >
        하루갈피 바로가기 →
      </a>

      {/* 푸터 */}
      <footer className="mt-16 text-[#1a3f2e] text-xs">
        © 초록담 2025
      </footer>
    </div>
  );
}

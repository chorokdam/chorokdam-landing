import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f7f3] text-[#2f2f2f] font-sans">
      
      {/* ---------------------- 헤더 ---------------------- */}
      <header className="w-full py-6 text-center">
        <h1 className="text-3xl font-semibold tracking-tight">
          🌿 초록담
        </h1>
        <p className="text-sm text-[#777] mt-1">
          일상의 작은 순간들을 담아내는 공간
        </p>
      </header>

      {/* ---------------------- 히어로 일러스트 ---------------------- */}
      <section className="max-w-2xl mx-auto px-6 mt-10 text-center">
        <img
          src="/hero.png"
          alt="초록담 히어로 이미지"
          className="mx-auto w-full max-w-md mb-10 rounded-xl shadow-sm"
        />
      </section>

      {/* ---------------------- 서비스 카드 목록 ---------------------- */}
      <section className="max-w-3xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        
        {/* 하루갈피 카드 */}
        <a
          href="https://harugalpi.vercel.app"
          className="bg-white p-6 rounded-2xl shadow-sm border border-[#e7e7e7] hover:shadow-md transition block"
        >
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            📑 하루갈피
          </h2>
          <p className="text-sm text-[#777] leading-relaxed">
            조용한 감정 기록을 위한 하루 북마크 앱.
          </p>
        </a>

        {/* 출시 예정 앱 1 */}
        <div className="bg-white/70 p-6 rounded-2xl shadow-sm border border-[#e7e7e7] opacity-70">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            ✨ 프로젝트 B <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">Soon</span>
          </h2>
          <p className="text-sm text-[#777]">
            일상 루틴을 감각적으로 기록하는 도구.
          </p>
        </div>

        {/* 출시 예정 앱 2 */}
        <div className="bg-white/70 p-6 rounded-2xl shadow-sm border border-[#e7e7e7] opacity-70">
          <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
            🌙 프로젝트 C <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">Soon</span>
          </h2>
          <p className="text-sm text-[#777]">
            밤의 생각을 차분히 정리하는 저널 서비스.
          </p>
        </div>

      </section>

      {/* ---------------------- 푸터 ---------------------- */}
      <footer className="text-center py-12">
        <p className="text-sm text-[#aaa]">© 초록담 2025</p>
      </footer>
    </div>
  );
}

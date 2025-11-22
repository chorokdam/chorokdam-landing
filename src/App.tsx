import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f7f3] text-[#2f2f2f] font-sans">
      {/* Header */}
      <header className="w-full py-6 text-center">
        <div className="mx-auto flex items-center justify-center gap-2">
          <img src="/hero.png" alt="초록담 로고" className="w-7 opacity-90" />
          <h1 className="text-2xl tracking-tight font-medium">초록담</h1>
        </div>
        <p className="text-sm text-[#6f6f6f] mt-1">일상의 작은 순간들을 담아내는 공간</p>
      </header>

      {/* Hero Illustration */}
      <section className="max-w-md mx-auto mt-10">
        <img
          src="/hero.png"
          alt="초록담 히어로 이미지"
          className="mx-auto w-full max-w-xs opacity-90"
        />
      </section>

      {/* Project List */}
      <section className="max-w-md mx-auto mt-12 px-6 space-y-5">
        {/* Daily app */}
        <a
          href="https://harugalpi.vercel.app"
          className="block bg-white rounded-xl shadow-sm border border-[#e6e6e6] p-5 hover:shadow-md transition"
        >
          <h2 className="text-lg font-semibold">📑 하루갈피</h2>
          <p className="text-sm text-[#777] mt-1">초록빛 감정 기록을 위한 하루 메모 앱</p>
        </a>

        {/* Soon 1 */}
        <div className="block bg-white/60 rounded-xl shadow-sm border border-[#e6e6e6] p-5 opacity-70">
          <h2 className="text-lg font-semibold">프로젝트 B <span className="text-xs">(Soon)</span></h2>
          <p className="text-sm text-[#777] mt-1">일일 루틴을 감각적으로 기록하는 도구</p>
        </div>

        {/* Soon 2 */}
        <div className="block bg-white/60 rounded-xl shadow-sm border border-[#e6e6e6] p-5 opacity-70">
          <h2 className="text-lg font-semibold">프로젝트 C <span className="text-xs">(Soon)</span></h2>
          <p className="text-sm text-[#777] mt-1">일과 여행을 자연과 함께하는 감성 서비스</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-[#9a9a9a] mt-16">
        © 초록담 2025
      </footer>
    </div>
  );
}

import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafaf6] text-[#2f2f2f] font-sans">
      <section className="max-w-2xl mx-auto px-6 pt-16 pb-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          초록담 감성의 작은 공간
        </h1>
        <p className="text-[#777] text-lg leading-relaxed">
          하루갈피를 포함한 나의 감성 앱들을 모아놓은 조용한 랜딩 페이지예요.
        </p>

        <div className="mt-8">
          <a
            href="https://harugalpi.vercel.app"
            className="inline-block px-8 py-3 rounded-xl text-white bg-[#4caf68] hover:bg-[#3b8e57] transition font-semibold shadow-sm"
          >
            하루갈피 바로가기
          </a>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-6 mb-16">
        <div className="bg-white rounded-2xl shadow-sm border border-[#eaeaea] p-4 text-center">
          <p className="text-sm text-[#777] mb-2">— 광고 영역 —</p>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-6 space-y-6">
        <div className="bg-white rounded-3xl shadow-sm border border-[#eaeaea] p-6">
          <h2 className="text-xl font-bold mb-2">🌿 하루갈피</h2>
          <p className="text-[#777] leading-relaxed mb-4">
            매일의 감정을 부드럽게 기록하는 감성 기록 앱.
          </p>
          <a
            href="https://harugalpi.vercel.app"
            className="text-[#4caf68] font-semibold hover:underline"
          >
            앱 열기 →
          </a>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-[#eaeaea] p-6">
          <h2 className="text-xl font-bold mb-2">✨ 더 많은 앱들이 준비 중이에요</h2>
          <p className="text-[#777] leading-relaxed mb-4">
            차근차근 새로운 감성 도구들이 추가될 예정이에요.
          </p>
          <span className="text-[#bbb] text-sm">Coming soon...</span>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-6 my-20">
        <div className="bg-white rounded-2xl shadow-sm border border-[#eaeaea] p-4 text-center">
          <p className="text-sm text-[#777] mb-2">— 광고 영역 —</p>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-6 text-center mb-20">
        <p className="text-lg text-[#555] leading-relaxed italic">
          “기록은 작게 쌓여 큰 힘이 됩니다.  
          마음이 조용한 날에도, 흔들리는 날에도.”
        </p>
      </section>

      <section className="max-w-2xl mx-auto px-6 mb-16">
        <div className="bg-white rounded-2xl shadow-sm border border-[#eaeaea] p-4 text-center">
          <p className="text-sm text-[#777] mb-2">— 광고 영역 —</p>
        </div>
      </section>

      <footer className="text-center py-10 text-[#999] text-sm">
        © 초록담 2025 — 감성을 담는 작은 기록
      </footer>
    </div>
  );
}

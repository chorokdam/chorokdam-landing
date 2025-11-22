import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafaf6] text-[#2f2f2f] font-sans">
      <section className="max-w-2xl mx-auto px-6 pt-16 pb-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          초록담 감성의 작은 공간
        </h1>
        <p className="text-[#777] text-lg leading-relaxed">
          하루갈피를 포함한 나의 감성 앱들을 모아놓은 조용한 행복 페이지예요.
        </p>

        <div className="mt-8">
          <a
            href="https://harugalpi.vercel.app"
            className="inline-block px-8 py-3 rounded-xl text-white bg-[#4caf68] hover:bg-[#3b8e57] 
            transition font-semibold shadow-sm"
          >
            하루갈피 바로가기 →
          </a>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-6 mb-16">
        <div className="bg-white rounded-2xl shadow-sm border-[##eaeaea] p-4 text-center">
          <p className="text-sm text-[#777] mb-2">📌 광고 영역</p>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-6 space-y-6">
        <div className="bg-white rounded-3xl shadow-sm border-[#eaeaea] p-6">
          <h2 className="text-xl font-bold mb-2">🪴 하루갈피</h2>
          <p className="text-[#777] leading-relaxed">
            하루의 감정을 고요하게 기록하는 초록담의 감성 일기장.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border-[#eaeaea] p-6">
          <h2 className="text-xl font-bold mb-2">📘 더 많은 감성 프로젝트</h2>
          <p className="text-[#777] leading-relaxed">
            기록, 감성, 글쓰기와 관련된 새로운 앱들도 곧 업데이트될 예정이에요.
          </p>
        </div>
      </section>

      <footer className="py-12 text-center">
        <p className="text-sm text-[#4caf68]">ⓒ 초록담 2025</p>
      </footer>
    </div>
  );
}


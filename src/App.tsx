import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col items-center px-6 py-12">
      
      {/* Header */}
      <header className="flex flex-col items-center mb-10">
        <img
          src="/hero.png"
          alt="초록담 로고"
          className="w-24 h-24 mb-3 opacity-90"
        />
        <h1 className="text-2xl font-semibold text-[#2d4a34] tracking-tight">
          초록담
        </h1>
        <p className="text-sm text-[#777] mt-2">
          일상의 작은 순간들을 담아내는 공간
        </p>
      </header>

      {/* Services Section */}
      <section className="w-full max-w-md space-y-4">

        {/* 하루갈피 */}
        <a
          href="https://harugalpi.vercel.app"
          className="block border border-[#e8e8e8] rounded-xl p-4 shadow-sm hover:shadow-md transition bg-white"
        >
          <div className="text-base font-medium text-[#2d4a34] mb-1">
            📑 하루갈피
          </div>
          <p className="text-sm text-[#777] leading-relaxed">
            소중한 하루 기록을 위한 따뜻한 메모 앱
          </p>
        </a>

        {/* Soon 1 */}
        <div className="block border border-[#efefef] rounded-xl p-4 bg-[#fafafa] text-[#aaa]">
          <div className="text-base font-medium mb-1">프로젝트 B (Soon)</div>
          <p className="text-sm">일상을 담아내는 새로운 기록 도구</p>
        </div>

        {/* Soon 2 */}
        <div className="block border border-[#efefef] rounded-xl p-4 bg-[#fafafa] text-[#aaa]">
          <div className="text-base font-medium mb-1">프로젝트 C (Soon)</div>
          <p className="text-sm">감성과 실용을 담아낸 서비스</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 text-center text-xs text-[#bbb]">
        © 초록담 2025
      </footer>
    </div>
  );
}

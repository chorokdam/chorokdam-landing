import React from "react";

export default function App() {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
      style={{
        backgroundImage: "url('/hero.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        opacity: 0.97,
      }}
    >
      {/* 메인 콘텐츠 */}
      <div className="backdrop-blur-sm py-10 px-6">
        <h1 className="text-3xl font-semibold text-[#2d4a34] tracking-tight mb-3">
          초록담
        </h1>

        <p className="text-sm text-[#444] leading-relaxed">
          일상의 작은 순간들을 담아내는 공간
        </p>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 text-xs text-white bg-[#2d4a34] px-4 py-2 rounded-full shadow-sm">
        © 초록담 2025
      </footer>
    </div>
  );
}

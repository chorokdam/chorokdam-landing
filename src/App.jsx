import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#111827] flex flex-col items-center px-6">
      
      {/* 상단 로고 */}
      <header className="w-full max-w-3xl flex justify-center py-10">
        <div className="flex items-center gap-2">
          <img src="/hero.png" alt="logo" className="w-6 h-6 opacity-80" />
          <span className="text-xl font-semibold text-gray-600">초록담</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full max-w-3xl text-center mb-16">
        <h1 className="text-3xl font-bold leading-tight text-gray-900">
          일상의 작은 틈을  
          <br />
          <span className="text-[#2c5c3b]">초록빛</span>으로 채웁니다.
        </h1>

        <p className="text-gray-600 mt-5 leading-relaxed">
          초록담은 일상의 소소한 가치를 발견하고 기록하는 도구를 만듭니다.  
          천천히, 하지만 단단하게 필요한 앱을 만들어갑니다.
        </p>
      </section>

      {/* 프로젝트 박스 - 하루갈피 */}
      <section className="w-full max-w-3xl mb-12">
        <div className="border border-neutral-200 bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xl font-semibold text-gray-800">하루갈피</span>
            <span className="text-xs bg-[#2c5c3b] text-white px-2 py-1 rounded-full">
              LIVE
            </span>
          </div>

          <p className="text-gray-600 leading-relaxed">
            스쳐 지나가는 하루를 조용한 갈피로 남겨두는 미니멀 일기 앱.  
            복잡한 소셜 기능 없이, 오직 당신의 기록과 감정에만 집중할 수 있는 공간입니다.
          </p>

          <a
            href="#"
            className="inline-block mt-4 text-sm font-medium text-[#2c5c3b] underline hover:text-[#244d31]"
          >
            앱 열어보기 →
          </a>
        </div>
      </section>

      {/* 프로젝트 박스 - 창작노트 */}
      <section className="w-full max-w-3xl mb-12">
        <div className="border border-neutral-200 bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xl font-semibold text-gray-800">창작노트</span>
            <span className="text-xs bg-gray-400 text-white px-2 py-1 rounded-full">
              Soon
            </span>
          </div>

          <p className="text-gray-600 leading-relaxed">
            작은 기록들을 천천히 쌓아가는 공간입니다.  
            배우는 기능들을 가볍게 만들어보며 과정 그 자체를 즐기고 있어요.
          </p>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="w-full max-w-3xl mt-20 mb-10 text-center text-gray-500 text-sm">
        © 2025 Chorokdam · daily.chorokdam@gmail.com
      </footer>
    </div>
  );
}

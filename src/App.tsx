export default function App() {
  return (
    <div className="min-h-screen bg-[#fafdf9] text-gray-800 flex flex-col items-center px-6 py-14">

      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold text-green-700">초록담</h1>
        <p className="text-gray-600 mt-2">일상에 작은 온기를 담아내는 공간</p>
      </header>

      {/* Intro */}
      <section className="max-w-3xl text-center mb-8">
        <p className="text-gray-600 leading-relaxed">
          초록담은 일상 속 작은 순간을 기록하고,<br />
          더 나은 하루를 위한 도구를 만들고 있습니다.
        </p>
      </section>

      {/* Ad box */}
      <section className="w-full max-w-3xl mb-10">
        <div className="w-full h-28 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-sm text-gray-400">
          — 광고 영역 —<br />
          Google AdSense 승인 후 자동으로 광고가 표시됩니다.
        </div>
      </section>

      {/* Projects */}
      <section className="w-full max-w-3xl">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">모든 프로젝트</h2>

        {/* 프로젝트 A */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition mb-4">
          <h3 className="text-base font-bold mb-1">하루갈피</h3>
          <p className="text-gray-600 text-sm mb-3">
            스치 지나가는 하루를 조용한 갈피로 남겨두는 미니멀 일기 앱.
          </p>
          <a
            href="https://harugalpi.vercel.app/"
            className="text-green-600 hover:text-green-700 font-medium text-sm"
          >
            하루갈피 열어보기 →
          </a>
        </div>

        {/* 프로젝트 B */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm opacity-60 mb-4">
          <h3 className="text-base font-bold mb-1">프로젝트 B</h3>
          <p className="text-gray-600 text-sm">감정과 장면을 담아내는 새로운 기록 도구.</p>
          <p className="text-gray-400 text-sm mt-2">Soon…</p>
        </div>

        {/* 프로젝트 C */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm opacity-60">
          <h3 className="text-base font-bold mb-1">프로젝트 C</h3>
          <p className="text-gray-600 text-sm">자연과 함께하는 감성 기록 서비스.</p>
          <p className="text-gray-400 text-sm mt-2">Soon…</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-3xl text-center text-[13px] text-gray-500 mt-14">
        © 초록담 2025 · daily.chorokdam@gmail.com
      </footer>
    </div>
  );
}

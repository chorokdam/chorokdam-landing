// src/App.tsx
export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center px-6">
      {/* Header */}
      <header className="w-full max-w-3xl py-12 text-center">
        <h1 className="text-3xl font-bold text-gray-900">초록담</h1>
        <p className="text-gray-600 mt-2">일상에 작은 온기를 담아내는 공간</p>
      </header>

      {/* Intro */}
      <section className="w-full max-w-3xl text-center mb-14">
        <p className="text-gray-600 text-lg leading-relaxed">
          초록담은 일상 속 작은 순간을 기록하고,<br />
          더 나은 하루를 위한 도구를 만들고 있습니다.
        </p>
      </section>

      {/* Project Card */}
      <section className="w-full max-w-3xl mb-20">
        <h2 className="text-xl font-semibold mb-6">프로젝트</h2>

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
          <h3 className="text-lg font-bold mb-2">하루갈피</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            소소하지만 소중한 하루들을 기록하기 위한 감성 기록 도구.
          </p>

          <a
            href="https://harugalpi.vercel.app/"
            className="text-green-600 hover:text-green-700 font-medium"
          >
            하루갈피 보러가기 →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 text-center text-sm text-gray-500">
        © 초록담 2025 · daily.chorokdam@gmail.com
      </footer>
    </div>
  );
}

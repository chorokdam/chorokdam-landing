export default function App() {
  return (
    <div className="min-h-screen flex flex-col text-neutral-90">

      {/* Header */}
      <header className="border-b border-neutral-10 bg-white/70 backdrop-blur">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-center items-center gap-2">
          <img
            src="/hero.png"
            alt="초록담 로고"
            className="w-6 h-6 opacity-80"
          />
          <span className="text-sm font-semibold text-neutral-500">초록담</span>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 max-w-4xl mx-auto px-4 py-10">

        {/* Hero */}
        <section className="text-center mb-14">
          <h1 className="text-3xl font-semibold mb-3 leading-snug">
            일상의 작은 틈을<br />
            <span className="text-brand-primary">초록빛으로 채웁니다.</span>
          </h1>
          <p className="text-neutral-60 text-sm">
            초록담은 일상 속에서 필요한 작은 도구들을 만들어보는 개인 작업실입니다.
          </p>
        </section>

        {/* Cards */}
        <section className="grid gap-5 md:grid-cols-3 mb-10">
          
          {/* Card 1 */}
          <div className="rounded-2xl bg-white border border-neutral-10 p-5 shadow-sm">
            <span className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-1 rounded-full">LIVE</span>
            <h3 className="mt-3 text-lg font-semibold">하루갈피</h3>
            <p className="text-sm text-neutral-60 mt-2">
              하루를 가볍게 기록할 수 있는 미니 일기 앱.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl bg-white border border-neutral-10 p-5 shadow-sm">
            <span className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-1 rounded-full">LIVE</span>
            <h3 className="mt-3 text-lg font-semibold">한 줄 기록장</h3>
            <p className="text-sm text-neutral-60 mt-2">
              오늘 하루를 한 문장으로 남기는 감성 기록 앱.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl bg-white border border-neutral-10 p-5 shadow-sm">
            <span className="text-xs text-amber-700 bg-amber-50 border border-amber-100 px-2 py-1 rounded-full">SOON</span>
            <h3 className="mt-3 text-lg font-semibold">프로젝트 B</h3>
            <p className="text-sm text-neutral-60 mt-2">
              준비중입니다. 완성되는 대로 소개할게요.
            </p>
          </div>

        </section>

        {/* 창작노트 + 준비중 */}
        <section className="grid gap-5 md:grid-cols-2">
          
          {/* 창작노트 */}
          <div className="rounded-2xl bg-white border border-neutral-10 p-6 shadow-sm">
            <h3 className="text-base font-semibold mb-2">창작노트</h3>
            <p className="text-sm text-neutral-60 leading-relaxed">
              작은 기록들을 천천히 쌓아가는 공간입니다.<br />
              배우는 기능들을 가볍게 만들어보며<br />
              과정 그 자체를 즐기고 있어요.
            </p>
          </div>

          {/* 준비중 박스 */}
          <div className="rounded-2xl bg-white border border-neutral-10 p-6 shadow-sm">
            <p className="text-sm text-neutral-60 leading-relaxed">
              준비중입니다.<br />
              완성되는 대로 업데이트할게요.
            </p>
          </div>

        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 py-8">
        <div className="text-center text-xs text-neutral-400">
          © 2025 Chorokdam. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

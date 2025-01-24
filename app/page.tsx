export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-primary-9 cookie:text-red-800 cookie">
        <h1 className="text-18 font-500 tracking-6 @320:text-32">
          Hello World
        </h1>

        <div className="text-128/100 font-500 text-gray-12">Pizza</div>

        <div className="bg-white w-32 blur-0 aspect-1-1 inset-shadow-3 drop-shadow-4 inset-shadow-primary-9" />
      </main>
    </div>
  );
}

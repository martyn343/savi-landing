export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ed] text-[#111111]">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-[#f7f3ed]/85 backdrop-blur-md">
        <div className="mx-auto flex h-[85px] max-w-7xl items-center justify-between px-6 md:px-10">
          <a
            href="/"
            className="text-xl uppercase tracking-[0.45em] text-black"
          >
            SAVI
          </a>

          <a
            href="/"
            className="rounded-full border border-black px-6 py-3 text-[11px] uppercase tracking-[0.28em] text-black transition hover:bg-black hover:!text-white"
          >
            Back home
          </a>
        </div>
      </header>

      <section className="flex min-h-screen items-center justify-center px-6 pt-[85px] md:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-8 text-xs uppercase tracking-[0.45em] text-neutral-500">
            SAVI First Edition
          </p>

          <h1 className="text-5xl font-light leading-[0.95] tracking-[-0.06em] md:text-8xl">
            You’re on the list.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-neutral-700 md:text-lg">
            Thank you for requesting access to SAVI First Edition. We’ll contact
            selected members before the public release.
          </p>

          <div className="mx-auto mt-10 max-w-xl border-t border-black/10 pt-8">
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
              Quietly impossible to ignore.
            </p>
          </div>

          <div className="mt-10">
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-xs uppercase tracking-[0.28em] !text-white transition hover:bg-neutral-800"
            >
              Return to SAVI
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
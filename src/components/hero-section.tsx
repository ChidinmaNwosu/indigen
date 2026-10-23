export function HeroSection() {
  return (
    <section id="home" className="w-full pb-8 pt-4 lg:pb-12">
      <div className="relative overflow-hidden bg-[#f3f0eb]">
        <div
          className="absolute inset-0 bg-[url('/holding-hands.jpg')] bg-cover bg-center grayscale"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(232,228,221,0.42)_38%,rgba(74,74,74,0.42)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.5),transparent_48%),linear-gradient(180deg,rgba(255,255,255,0.16)_0%,rgba(0,0,0,0.06)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[52%] bg-[linear-gradient(180deg,transparent_0%,rgba(255,255,255,0.05)_32%,rgba(0,0,0,0.18)_100%)]" />

        <div className="relative flex min-h-[calc(100vh-6rem)] items-center justify-center px-4 py-16 sm:px-8 lg:min-h-[calc(100vh-7rem)] lg:py-24">
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
            <p className="text-[0.82rem] font-semibold uppercase tracking-[0.45em] text-neutral-700/85 sm:text-sm">
              Project Zero
            </p>

            <h1 className="mt-8 max-w-6xl font-display text-[clamp(3.9rem,9vw,8.25rem)] font-semibold leading-[0.88] tracking-[-0.075em] text-neutral-950 drop-shadow-[0_1px_0_rgba(255,255,255,0.25)]">
              Discover opportunities.
              <br />
              Contribute skills.
              <br />
              Solve what matters.
            </h1>

            <p className="mt-8 max-w-4xl text-balance text-lg leading-8 text-neutral-800 sm:text-xl lg:text-2xl lg:leading-10">
              INDIGEN is a network built to help Nigerians find meaningful work,
              join projects, and participate in solving problems that shape the
              future.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#features"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[0.95rem] bg-neutral-950 px-8 text-base font-semibold text-white shadow-[0_10px_28px_rgba(0,0,0,0.22)] transition-transform hover:-translate-y-0.5 hover:bg-neutral-800"
              >
                Create your Indigene ID
                <span aria-hidden="true" className="text-lg leading-none">
                  →
                </span>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[0.95rem] border border-black/10 bg-[#f6f0e9]/95 px-8 text-base font-medium text-neutral-950 shadow-[0_6px_18px_rgba(0,0,0,0.12)] backdrop-blur-sm transition-colors hover:bg-white"
              >
                <span
                  aria-hidden="true"
                  className="flex h-5 w-5 items-center justify-center rounded-full bg-neutral-950 text-[0.7rem] text-white"
                >
                  ▶
                </span>
                See how it works
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Problem", href: "#problem" },
  { label: "Solutions", href: "#solutions" },
  { label: "Features", href: "#features" },
  { label: "Projects", href: "#projects" },
  { label: "How it works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 8);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-black/10 bg-[#fbf7f0]/92 shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl"
          : "border-transparent bg-[#fbf7f0]"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8 lg:py-2">
        <a
          href="#home"
          className="font-display text-[1.75rem] font-semibold tracking-[-0.06em] text-neutral-950 sm:text-[2rem]"
        >
          INDIGEN
        </a>

        <nav
          className="hidden flex-1 items-center justify-center gap-3 xl:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-xl px-4 py-2 text-[0.98rem] font-medium text-neutral-600 transition-colors hover:bg-black/5 hover:text-neutral-950"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <button
            type="button"
            className="rounded-full px-4 py-2 text-[0.98rem] font-medium text-neutral-950 transition-colors hover:bg-black/5"
          >
            Sign in
          </button>
          <button
            type="button"
            className="rounded-xl bg-neutral-950 px-5 py-3 text-[0.98rem] font-semibold text-white shadow-[0_10px_24px_rgba(0,0,0,0.18)] transition-transform hover:-translate-y-0.5 hover:bg-neutral-800"
          >
            Join the network
          </button>
        </div>

        <div className="relative xl:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-3 text-sm font-medium text-neutral-950 shadow-sm transition hover:bg-white"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <span className="sr-only">Toggle navigation</span>
            Menu
            <span aria-hidden="true">☰</span>
          </button>

          {menuOpen ? (
            <div
              id="mobile-nav"
              className="absolute right-0 top-[calc(100%+0.75rem)] w-[min(22rem,calc(100vw-2rem))] rounded-[1.75rem] border border-black/10 bg-[#fcf8f1] p-4 shadow-[0_24px_60px_rgba(0,0,0,0.14)]"
            >
              <nav className="grid gap-1" aria-label="Mobile primary">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-4 py-3 text-base font-medium text-neutral-700 transition-colors hover:bg-black/5 hover:text-neutral-950"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="mt-3 grid gap-3 border-t border-black/8 pt-4">
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl border border-black/10 px-4 py-3 text-center text-sm font-medium text-neutral-950 transition-colors hover:bg-black/5"
                >
                  Sign in
                </button>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl bg-neutral-950 px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
                >
                  Join the network
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}

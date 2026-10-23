import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

type FeatureCardProps = {
  index?: string;
  title: string;
  description: string;
};

type StepCardProps = {
  step: string;
  title: string;
  description: string;
};

type QuoteCardProps = {
  quote: string;
  name: string;
  role: string;
};

type FaqItemProps = {
  question: string;
  answer: string;
  isOpen?: boolean;
  onToggle?: () => void;
};

type FooterColumnProps = {
  title: string;
  items: Array<{ label: string; href: string }>;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div
      className={`mx-auto flex w-full max-w-3xl flex-col gap-4 ${alignment}`}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-neutral-500">
        {eyebrow}
      </p>
      <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mx-auto max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

export function FeatureCard({ index, title, description }: FeatureCardProps) {
  return (
    <article className="rounded-[1.75rem] border border-black/8 bg-white/55 p-6 shadow-[0_20px_60px_rgba(53,43,27,0.06)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-[#f4ede0] text-sm font-semibold text-neutral-700">
        {index ?? "•"}
      </div>
      <h3 className="mt-5 text-xl font-medium tracking-tight text-neutral-950">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-neutral-600 sm:text-[0.98rem]">
        {description}
      </p>
    </article>
  );
}

export function StepCard({ step, title, description }: StepCardProps) {
  return (
    <article className="flex flex-col gap-5 rounded-4xl border border-black/8 bg-white/60 p-6 shadow-[0_20px_60px_rgba(53,43,27,0.05)] backdrop-blur-sm sm:p-7">
      <div className="flex h-14 w-14 items-center justify-center rounded-[1.25rem] border border-black/10 bg-[#efe7d6] text-sm font-semibold text-neutral-700">
        {step}
      </div>
      <h3 className="text-xl font-medium tracking-tight text-neutral-950">
        {title}
      </h3>
      <p className="text-sm leading-7 text-neutral-600 sm:text-[0.98rem]">
        {description}
      </p>
    </article>
  );
}

export function QuoteCard({ quote, name, role }: QuoteCardProps) {
  return (
    <blockquote className="flex h-full flex-col justify-between rounded-4xl border border-black/8 bg-white/55 p-6 shadow-[0_20px_60px_rgba(53,43,27,0.05)] backdrop-blur-sm sm:p-7">
      <p className="text-[1.02rem] leading-8 text-neutral-700">“{quote}”</p>
      <footer className="mt-8 border-t border-black/8 pt-5">
        <p className="text-sm font-medium text-neutral-950">{name}</p>
        <p className="mt-1 text-sm text-neutral-500">{role}</p>
      </footer>
    </blockquote>
  );
}

export function FaqItem({
  question,
  answer,
  isOpen = false,
  onToggle,
}: FaqItemProps) {
  return (
    <div className="group border-t border-black/10 py-4 sm:py-5 lg:py-6">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="flex-1 pr-4 text-[clamp(1.3rem,1.6vw,2.1rem)] font-medium tracking-[-0.04em] text-neutral-950">
          {question}
        </span>
        <span
          className={`flex h-6 w-6 shrink-0 items-center justify-center text-neutral-600 transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path
              d="M2 4.5L6 8L10 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {isOpen ? (
        <p className="pt-3 text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
          {answer}
        </p>
      ) : null}
    </div>
  );
}

export function FooterColumn({ title, items }: FooterColumnProps) {
  return (
    <div className="space-y-5">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
        {title}
      </p>
      <ul className="space-y-4 text-base text-neutral-900 sm:text-[1.05rem]">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="inline-flex items-center transition-colors hover:text-neutral-500"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SocialLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center font-medium text-neutral-900 transition-colors hover:text-neutral-500"
    >
      {label}
    </a>
  );
}

export function MenuLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="rounded-full px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-black/5 hover:text-neutral-950"
    >
      {children}
    </a>
  );
}

import { FooterColumn, SocialLink } from "@/components/marketing";

const footerColumns = [
  {
    title: "Product",
    items: [
      { label: "Opportunities", href: "#features" },
      { label: "Indigene ID", href: "#how-it-works" },
      { label: "Projects", href: "#community" },
      { label: "Problems", href: "#problem" },
    ],
  },
  {
    title: "Network",
    items: [
      { label: "About INDIGEN", href: "#solutions" },
      { label: "Community", href: "#community" },
      { label: "Contributors", href: "#testimonials" },
      { label: "Partners", href: "#features" },
    ],
  },
  {
    title: "Support",
    items: [
      { label: "Help Center", href: "#faq" },
      { label: "Guidelines", href: "#faq" },
      { label: "Privacy", href: "#footer" },
      { label: "Terms", href: "#footer" },
    ],
  },
];

export function FooterSection() {
  return (
    <footer
      id="footer"
      className="mx-auto w-full px-5 pb-8 pt-12 sm:px-6 lg:px-8 lg:pb-12 lg:pt-16"
    >
      <div className="mx-auto max-w-360 pt-2 lg:pt-3">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.9fr)] lg:items-start">
          <div className="space-y-6 lg:space-y-7">
            <a
              href="#home"
              className="inline-block font-display text-[clamp(2.2rem,3vw,4rem)] font-semibold leading-none tracking-[-0.06em] text-neutral-950"
            >
              INDIGEN
            </a>

            <p className="max-w-135 text-sm font-normal leading-[1.7] text-neutral-600 sm:text-base">
              A network built to help Nigerians discover opportunities,
              contribute their skills, and participate in solving meaningful
              problems.
            </p>

            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium tracking-[-0.03em] text-neutral-900 sm:text-base">
              <SocialLink label="Twitter" href="#community" />
              <SocialLink label="LinkedIn" href="#community" />
              <SocialLink label="Instagram" href="#community" />
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 sm:gap-10">
            {footerColumns.map((column) => (
              <FooterColumn
                key={column.title}
                title={column.title}
                items={column.items}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 pt-8 text-sm text-neutral-700 sm:text-base md:flex-row md:items-center md:justify-between">
          <p>© 2026 INDIGEN. All rights reserved.</p>
          <p>Project Zero. Built with purpose.</p>
        </div>
      </div>
    </footer>
  );
}

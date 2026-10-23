import { ShieldCheck, Layers3, Fingerprint, Radar } from "lucide-react";

import { SectionHeading } from "@/components/marketing";

type SolutionCard = {
  title: string;
  description: string;
  Icon: typeof ShieldCheck;
};

const solutionCards: SolutionCard[] = [
  {
    title: "A single opportunity layer",
    description:
      "Curated openings, projects, and calls for contribution — all in one place, filtered by skill, interest, and location.",
    Icon: Layers3,
  },
  {
    title: "Indigene ID",
    description:
      "A portable identity that proves who you are, what you can do, and what you have contributed across the network.",
    Icon: ShieldCheck,
  },
  {
    title: "Problem surfacing",
    description:
      "Anyone can raise a problem worth solving, gather input, and attract the people and resources needed to act.",
    Icon: Radar,
  },
  {
    title: "Project participation",
    description:
      "Join teams, contribute time and knowledge, and build a verified record of impact that travels with you.",
    Icon: Fingerprint,
  },
];

export function SolutionsSection() {
  return (
    <section id="solutions" className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:items-center">
          <SectionHeading
            eyebrow="Our approach"
            title="Connect people, problems, and proof."
            description="INDIGEN is not just a job board. It is a participation network: identity, discovery, contribution, and reputation working together."
            align="center"
          />

          <div className="grid gap-6 sm:grid-cols-2">
            {solutionCards.map(({ title, description, Icon }) => (
              <article
                key={title}
                className="border border-white/10 bg-[#171717] p-8 shadow-[0_18px_50px_rgba(0,0,0,0.35)]"
              >
                <div className="mb-10 flex h-14 w-14 items-center justify-center border border-white/15 bg-white/10 text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>

                <h3 className="max-w-sm text-[1.9rem] font-semibold leading-tight tracking-[-0.04em] text-white sm:text-[2rem]">
                  {title}
                </h3>

                <p className="mt-6 max-w-xl text-base leading-8 text-white/72 sm:text-lg">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

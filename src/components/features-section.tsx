import {
  BriefcaseBusiness,
  BadgeCheck,
  ClipboardList,
  MessageSquareWarning,
  MessagesSquare,
  Trophy,
} from "lucide-react";

import { SectionHeading } from "@/components/marketing";

type FeatureCard = {
  title: string;
  description: string;
  Icon: typeof BriefcaseBusiness;
};

const featureCards: FeatureCard[] = [
  {
    title: "Opportunity discovery",
    description:
      "Browse and filter opportunities by sector, skill, commitment level, and location.",
    Icon: BriefcaseBusiness,
  },
  {
    title: "Indigene ID",
    description:
      "Create a verified profile that becomes your passport across the INDIGEN network.",
    Icon: BadgeCheck,
  },
  {
    title: "Project join flow",
    description:
      "Apply to join projects, track your applications, and manage your commitments.",
    Icon: ClipboardList,
  },
  {
    title: "Problem reporting",
    description:
      "Surface problems in your community and gather support from people who can help solve them.",
    Icon: MessageSquareWarning,
  },
  {
    title: "Contribution channels",
    description:
      "Share knowledge, answer questions, and support others through structured discussions.",
    Icon: MessagesSquare,
  },
  {
    title: "Reputation & impact",
    description:
      "Build a track record of verified contributions that opens doors to bigger opportunities.",
    Icon: Trophy,
  },
];

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="mx-auto w-full bg-[#FBFAF9] px-5 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="grid gap-10">
        <SectionHeading
          eyebrow="Features"
          title="Everything you need to participate."
          description="Project Zero is the first utility. It gives every member the tools to discover, join, and contribute from day one."
          align="center"
        />

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {featureCards.map(({ title, description, Icon }) => (
            <article
              key={title}
              className="rounded-[1.75rem] border border-black/8 bg-white/55 p-6 shadow-[0_20px_60px_rgba(53,43,27,0.06)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-[#f4ede0] text-neutral-800">
                <Icon className="h-5 w-5" strokeWidth={1.8} />
              </div>

              <h3 className="mt-5 text-xl font-medium tracking-tight text-neutral-950">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-neutral-600 sm:text-[0.98rem]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

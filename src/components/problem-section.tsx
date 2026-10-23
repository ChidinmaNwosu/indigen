import { FeatureCard, SectionHeading } from "@/components/marketing";

const problemItems = [
  {
    index: "01",
    title: "Opportunities are scattered",
    description:
      "Valuable grants, gigs, and projects are spread across dozens of channels. Most people never hear about them until it is too late.",
  },
  {
    index: "02",
    title: "Talent is disconnected",
    description:
      "Skilled Nigerians exist in every field, but there is no common place to surface ability, credibility, and availability.",
  },
  {
    index: "03",
    title: "Problems lack visibility",
    description:
      "Local challenges that could attract volunteers, funding, or expertise often stay invisible to the people best placed to help.",
  },
  {
    index: "04",
    title: "Participation is hard to prove",
    description:
      "Without a portable record of contribution, it is difficult to build trust, reputation, and a track record of impact.",
  },
];

export function ProblemSection() {
  return (
    <section
      id="problem"
      className="mx-auto w-full bg-[#FBFAF9] px-5 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
        <SectionHeading
          eyebrow="The problem"
          title="Nigeria is full of talent and problems. They rarely meet."
          description="INDIGEN exists because the people who want to contribute and the opportunities that need them are operating in parallel. We are building the intersection."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {problemItems.map((item) => (
            <FeatureCard
              key={item.title}
              index={item.index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

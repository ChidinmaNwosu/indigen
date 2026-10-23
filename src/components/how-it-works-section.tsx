import { SectionHeading } from "@/components/marketing";

type TimelineStep = {
  step: string;
  title: string;
  description: string;
};

const timelineSteps: TimelineStep[] = [
  {
    step: "01",
    title: "Create your Indigene ID",
    description:
      "Sign up and build a profile that captures your skills, interests, and availability. Your identity travels with you across the network.",
  },
  {
    step: "02",
    title: "Discover opportunities",
    description:
      "Browse curated openings, projects, and problems that match what you care about and what you can do.",
  },
  {
    step: "03",
    title: "Contribute your skills",
    description:
      "Apply to join projects, offer knowledge, or help surface problems that need attention. Every contribution counts.",
  },
  {
    step: "04",
    title: "Build your reputation",
    description:
      "Earn verified records of participation that make you visible to bigger opportunities and trusted collaborators.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-[#f4efe7] text-neutral-950">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:gap-16 lg:items-center">
          <SectionHeading
            eyebrow="How it works"
            title="From first visit to first contribution."
            description="A simple path from joining the network to building a meaningful participation record."
            align="center"
          />

          <div className="relative grid gap-8 lg:gap-0">
            <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-neutral-300 lg:block" />

            {timelineSteps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={step.step}
                  className="relative grid gap-6 lg:grid-cols-2 lg:items-center lg:min-h-72"
                >
                  <div
                    className={`order-2 lg:order-1 ${
                      isLeft
                        ? "lg:pr-16"
                        : "lg:pr-16 lg:col-start-1 lg:row-start-1 lg:justify-self-start lg:opacity-0"
                    }`}
                  >
                    {isLeft ? (
                      <div className="max-w-xl">
                        <p className="text-sm font-medium tracking-[0.12em] text-neutral-700/80">
                          Step {step.step}
                        </p>
                        <h3 className="mt-4 text-3xl font-semibold tracking-tighter text-neutral-950 sm:text-4xl">
                          {step.title}
                        </h3>
                        <p className="mt-5 text-lg leading-8 text-neutral-700 sm:text-xl">
                          {step.description}
                        </p>
                      </div>
                    ) : null}
                  </div>

                  <div
                    className={`absolute left-1/2 top-6 hidden h-5 w-5 -translate-x-1/2 rounded-full border-2 border-neutral-950 bg-[#f4efe7] lg:block ${
                      index === 0 ? "lg:top-8" : ""
                    }`}
                  />

                  <div
                    className={`order-1 flex justify-center lg:order-2 ${
                      isLeft ? "lg:pl-16" : "lg:pl-16"
                    }`}
                  ></div>

                  <div className={`order-3 lg:hidden ${!isLeft ? "" : ""}`}>
                    {!isLeft ? (
                      <div className="max-w-xl">
                        <p className="text-sm font-medium tracking-[0.12em] text-neutral-700/80">
                          Step {step.step}
                        </p>
                        <h3 className="mt-4 text-3xl font-semibold tracking-tighter text-neutral-950 sm:text-4xl">
                          {step.title}
                        </h3>
                        <p className="mt-5 text-lg leading-8 text-neutral-700 sm:text-xl">
                          {step.description}
                        </p>
                      </div>
                    ) : null}
                  </div>

                  <div className="hidden lg:block" />

                  {!isLeft ? (
                    <div className="order-2 lg:order-1 lg:pr-16">
                      <div className="max-w-xl">
                        <p className="text-sm font-medium tracking-[0.12em] text-neutral-700/80">
                          Step {step.step}
                        </p>
                        <h3 className="mt-4 text-3xl font-semibold tracking-tighter text-neutral-950 sm:text-4xl">
                          {step.title}
                        </h3>
                        <p className="mt-5 text-lg leading-8 text-neutral-700 sm:text-xl">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Quote } from "lucide-react";

import { SectionHeading } from "@/components/marketing";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "For the first time, I can see opportunities that actually match what I studied and what I want to do. INDIGEN feels like it was built for people like me.",
    name: "Amara Okeke",
    role: "Product Designer, Lagos",
  },
  {
    quote:
      "We posted a community drainage problem and within a week had volunteers, a civil engineer, and a local sponsor ready to act. The network works.",
    name: "Ibrahim Danjuma",
    role: "Community Organizer, Kano",
  },
  {
    quote:
      "My Indigene ID gives me a way to show real proof of work, not just a CV. That changes everything when you are trying to break into new spaces.",
    name: "Chioma Nwosu",
    role: "Software Engineer, Abuja",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="grid gap-10">
        <SectionHeading
          eyebrow="Early voices"
          title="What members are saying."
          description="The network should feel useful from the first interaction. These early stories reflect the intended value of the product."
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="border border-neutral-300 rounded-xl bg-white px-6 py-7 transition-colors duration-300 hover:bg-taupe-200 sm:px-7 sm:py-8"
            >
              <Quote
                className="h-8 w-8 text-neutral-500"
                strokeWidth={1.8}
                aria-hidden="true"
              />

              <p className="mt-7 text-xl leading-[1.45] tracking-[-0.01em] text-neutral-950 sm:text-lg">
                “{item.quote}”
              </p>

              <footer className="mt-8">
                <p className="text-lg font-semibold tracking-[-0.04em] text-neutral-950 sm:text-md">
                  {item.name}
                </p>
                <p className="mt-1.5 text-md leading-tight text-neutral-700 sm:text-sm">
                  {item.role}
                </p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

type Project = {
  title: string;
  description: string;
  image: string;
  status: string;
};

const projects: Project[] = [
  {
    title: "Native",
    description:
      "A think tank building practical solutions for Africa through technology and community.",
    image: "/native.jpg",
    status: "Think Tank",
  },
  {
    title: "Matchup",
    description:
      "Preserving indigenous languages and knowledge through digital archives and storytelling.",
    image: "/matchup.jpg",
    status: "In Development",
  },
  {
    title: "Brother's Keeper",
    description:
      "Community safety, support, and connection—powered by trust, not just technology.",
    image: "/brothers-keeper.jpg",
    status: "Concept",
  },
  {
    title: "Sport Speaks",
    description:
      "Stories that explore identity, culture, and imagination. Words. Worlds. Pictures.",
    image: "/sport-speaks.jpg",
    status: "In Progress",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-[#0b0b0b] px-5 py-16 text-white sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-375">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-neutral-400">
            Projects
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            What we are building together.
          </h2>
          <p className="max-w-2xl text-base leading-8 text-neutral-300 sm:text-lg">
            A portfolio of initiatives designed to protect culture, create
            belonging, and connect communities through real opportunity.
          </p>
        </div>

        <div className="mt-12 grid gap-6 xl:grid-cols-4">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#101010] shadow-[0_18px_50px_rgba(0,0,0,0.18)]"
            >
              <div className="relative h-72.5 w-full overflow-hidden bg-[#d9d1c3]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 1280px) 100vw, 25vw"
                />
              </div>

              <div className="space-y-5 p-6 sm:p-7">
                <h3 className="text-base font-semibold tracking-[-0.07em] text-white sm:text-[2rem]">
                  {project.title}
                </h3>

                <p className="text-sm leading-7 tracking-tight text-neutral-300 sm:text-[1rem]">
                  {project.description}
                </p>

                <div className="pt-1">
                  <span className="inline-flex rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium uppercase tracking-[0.4em] text-neutral-200">
                    {project.status}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

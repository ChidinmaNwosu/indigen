"use client";

import { useState } from "react";
import { FaqItem } from "@/components/marketing";

const faqItems = [
  {
    question: "What is INDIGEN?",
    answer:
      "INDIGEN is a participation network that helps people discover opportunities, contribute to meaningful work, and build a record of verified impact across communities and projects.",
  },
  {
    question: "What is an Indigene ID?",
    answer:
      "It is a portable profile that captures your skills, interests, and participation history so the network can recognize your contribution over time.",
  },
  {
    question: "Who can join INDIGEN?",
    answer:
      "Anyone who wants to discover opportunities, contribute skills, raise problems, or collaborate on solutions can join.",
  },
  {
    question: "Is INDIGEN only for jobs?",
    answer:
      "No. The network covers jobs, projects, volunteering, community problems, and structured contribution beyond traditional employment.",
  },
  {
    question: "How do I surface a problem?",
    answer:
      "Use the problem surface section to describe the issue, add context, and invite others to contribute expertise or resources.",
  },
  {
    question: "Is there a cost to join?",
    answer:
      "The current public-facing experience is designed as a lightweight network entry point. Any future pricing or access rules should be presented explicitly in-product.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="w-full bg-[#FBFAF9] px-5 py-12 sm:px-6 lg:px-8 lg:py-20"
    >
      <p className="text-center text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-neutral-500">
        FAQ
      </p>

      <h2 className="mt-7 text-center font-display text-[clamp(3rem,6vw,8rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-neutral-950">
        Questions, answered.
      </h2>

      <div className="mx-auto mt-8 max-w-245 border-t border-black/10 sm:mt-12 lg:mt-16">
        {faqItems.map((item, index) => (
          <FaqItem
            key={item.question}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
  );
}

import { FaqSection } from "@/components/faq-section";
import { FooterSection } from "@/components/footer-section";
import { HeroSection } from "@/components/hero-section";
import { Header } from "@/components/header";
import { FeaturesSection } from "@/components/features-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { ProblemSection } from "@/components/problem-section";
import { ProjectsSection } from "@/components/projects-section";
import { SolutionsSection } from "@/components/solutions-section";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.75),transparent_48%),linear-gradient(180deg,#faf4ea_0%,#f3ede1_60%,#eee4d3_100%)] text-neutral-950">
      <Header />
      <HeroSection />

      <ProblemSection />

      <SolutionsSection />

      <FeaturesSection />

      <ProjectsSection />

      <HowItWorksSection />

      <TestimonialsSection />

      <FaqSection />

      <FooterSection />
    </main>
  );
}

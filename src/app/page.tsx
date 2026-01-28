import { Hero } from "@/components/home/hero";
import { About } from "@/components/home/about";
import { Skills } from "@/components/home/skills";
import { Experience } from "@/components/home/experience";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { Contact } from "@/components/home/contact";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function Home() {
  return (
    <>
      <ScrollReveal>
        <Hero />
      </ScrollReveal>
      <ScrollReveal>
        <FeaturedProjects />
      </ScrollReveal>
      <ScrollReveal>
        <Skills />
      </ScrollReveal>
      <ScrollReveal>
        <Experience />
      </ScrollReveal>
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </>
  );
}

import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="h-screen overflow-y-auto snap-y snap-mandatory">
      <div className="snap-start snap-always">
        <HeroSection />
      </div>
      <div className="snap-start snap-always">
        <AboutSection />
      </div>
      <div className="snap-start snap-always">
        <SkillsSection />
      </div>
      <div id="projects" className="snap-start snap-always">
        <ProjectsSection />
      </div>
      <div className="snap-start snap-always">
        <ExperienceSection />
      </div>
      <div className="snap-start snap-always">
        <ContactSection />
      </div>
    </main>
  )
}

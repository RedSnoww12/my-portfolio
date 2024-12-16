import AboutSection from "@/app/portfolio/about/page";
import SkillsSection from "@/app/portfolio/skills/page";
import ProjectsSection from "@/app/portfolio/projects/page";
import ContactSection from "@/app/portfolio/contact/page";

export default function PortfolioPage() {
    return (
        <div className="h-screen w-full overflow-y-scroll snap-mandatory snap-y scroll-smooth no-scrollbar">
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
        </div>
    );
}

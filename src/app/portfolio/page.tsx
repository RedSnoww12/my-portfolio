import AboutSection from "@/app/portfolio/about/page";
import SkillsSection from "@/app/portfolio/skills/page";
import ProjectsSection from "@/app/portfolio/projects/page";
import ContactSection from "@/app/portfolio/contact/page";

export default function PortfolioPage() {
    return (
        <div className="w-full scroll-smooth no-scrollbar flex-col">
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
        </div>
    );
}

import AnimatedWrapper from "@/components/animated-wrapper/AnimatedWrapper";

export default function AboutSection() {
    return (
        <section
            className="min-h-screen p-4 flex items-center justify-center">
            <div className="text-center">
                <AnimatedWrapper>
                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold">Bienvenue chez moi !</h1>
                    <p className="mt-4 text-lg max-w-5xl">
                        Je suis Software Engineer chez AXA France, où je développe des applications performantes et
                        évolutives en utilisant principalement React.js pour le front-end et Spring Boot pour le
                        back-end. Mon expertise couvre l’architecture cloud avec Azure, ainsi que la conteneurisation et
                        l’orchestration avec Docker et Kubernetes.

                        Travaillant dans un environnement agile, j’applique les principes du Scrum pour une gestion
                        efficace des projets. J’intègre également les bonnes pratiques de développement avec le
                        Test-Driven Development (TDD) et le Behavior-Driven Development (BDD) pour garantir la qualité
                        et la robustesse du code. Mon rôle implique une collaboration étroite avec l’équipe pour assurer
                        un développement agile et centré sur la valeur métier.
                    </p>
                </AnimatedWrapper>
            </div>
            <div className="absolute bottom-8 animate-bounce">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="white"
                    className="w-8 h-8"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </div>
        </section>

    );
}

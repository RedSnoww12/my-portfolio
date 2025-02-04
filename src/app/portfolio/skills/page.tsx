export default function SkillsSection() {
    return (
        <section className="p-4 flex items-center justify-center text-white px-6">
            <div className="max-w-3xl text-center">
                <h2 className="text-4xl font-bold">Mes Compétences</h2>
                <p className="mt-4 text-lg text-gray-300">
                    Voici un aperçu des technologies et outils avec lesquels je travaille régulièrement.
                </p>

                <div className="mt-8 space-y-6 text-left">
                    <div>
                        <h3 className="text-2xl font-semibold text-blue-400">React.js</h3>
                        <p className="mt-2 text-gray-300">
                            Expérimenté en développement front-end avec React.js, je conçois des interfaces dynamiques et performantes.
                            J&#39;utilise les hooks (`useState`, `useEffect`, `useContext`) et des bibliothèques comme React Query et Redux pour gérer l&#39;état des applications.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-blue-400">Next.js</h3>
                        <p className="mt-2 text-gray-300">
                            J&#39;exploite Next.js pour développer des applications optimisées avec **Server-Side Rendering (SSR)** et **Static Site Generation (SSG)**.
                            Son système de routing et sa gestion avancée du SEO en font un excellent choix pour les applications modernes.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-blue-400">TypeScript</h3>
                        <p className="mt-2 text-gray-300">
                            J’utilise TypeScript pour améliorer la robustesse du code en ajoutant un typage statique qui réduit les erreurs et facilite la maintenance.
                            Il est essentiel pour des applications scalables et structurées.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-blue-400">Docker</h3>
                        <p className="mt-2 text-gray-300">
                            Je maîtrise Docker pour conteneuriser mes applications et assurer leur déploiement sur différents environnements sans souci de compatibilité.
                            J’utilise `Docker Compose` pour orchestrer plusieurs services (ex. : base de données + backend + frontend).
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-blue-400">Azure / AWS</h3>
                        <p className="mt-2 text-gray-300">
                            J’ai des compétences en **Cloud Computing** avec Azure et AWS, notamment sur le déploiement d’applications, la gestion des bases de données cloud et les services serverless.
                            J’utilise **Azure DevOps** et **AWS Lambda** pour automatiser le CI/CD et optimiser l&#39;hébergement d’applications.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-blue-400">Spring Boot</h3>
                        <p className="mt-2 text-gray-300">
                            J’utilise **Spring Boot** pour développer des **API REST** performantes et évolutives en Java.
                            Grâce à Spring Security, Spring Data JPA et Hibernate, je peux gérer l’authentification, la gestion des bases de données et le développement rapide de microservices.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

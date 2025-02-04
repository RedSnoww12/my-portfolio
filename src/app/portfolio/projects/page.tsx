import Image from "next/image";

export default function ProjectsSection() {
    return (
        <section className="p-4 flex flex-col items-center justify-center">
            <h2 className="text-6xl font-bold">Mes Projets</h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                <div className="max-w-sm sm:max-w-md bg-foreground rounded flex-col items-center justify-center text-background text-center p-4 shadow shadow-foreground">
                    <h3 className="text-2xl font-bold">MyCloseShop</h3>
                    <p className="mt-2">
                        Projet de fin d&#39;études réalisé en architecture microservices avec Spring Boot. Service de messagerie,
                        Docker, Kubernetes, CI/CD avec Azure DevOps.
                    </p>
                    <a
                        href="https://dev.azure.com/MyCloseShop/MyCloseShop"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                    >
                        <button
                            className="min-w-16 rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-xl sm:text-2xl h-10 sm:h-12 px-4 sm:px-5"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="./github.svg"
                                alt="github logomark"
                                width={20}
                                height={20}
                            />
                        </button>
                    </a>
                </div>
                <div className="max-w-sm sm:max-w-md bg-foreground rounded flex-col items-center justify-center text-background text-center p-4 shadow shadow-foreground">

                    <h3 className="text-2xl font-bold">MyApi</h3>
                    <p className="mt-2">
                        Une API REST réalisée en Java avec Spring Boot.
                    </p>

                    <a
                        href="https://github.com/RedSnoww12/myApiSpring"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                    >
                        <button
                            className="min-w-16 rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-xl sm:text-2xl h-10 sm:h-12 px-4 sm:px-5"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="./github.svg"
                                alt="github logomark"
                                width={20}
                                height={20}
                            />
                        </button>
                    </a>
                </div>
                <div className="max-w-sm sm:max-w-md bg-foreground rounded flex-col items-center justify-center text-background text-center p-4 shadow shadow-foreground">
                    <h3 className="text-2xl font-bold">MyYoutube</h3>
                    <p className="mt-2">
                        Un clone de Youtube réalisé en architecture microservices avec Spring Boot.
                    </p>
                    <a
                        href="https://github.com/RedSnoww12/MyYoutube"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                    >
                        <button
                            className="min-w-16 rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-xl sm:text-2xl h-10 sm:h-12 px-4 sm:px-5"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="./github.svg"
                                alt="github logomark"
                                width={20}
                                height={20}
                            />
                        </button>
                    </a>
                </div>
                <div className="max-w-sm sm:max-w-md bg-foreground rounded flex-col items-center justify-center text-background text-center p-4 shadow shadow-foreground">
                    <h3 className="text-2xl font-bold">MyBlog</h3>
                    <p className="mt-2">
                        Un blog réalisé en AngularJs et une API REST en Java Spring Boot.
                    </p>
                    <a
                        href="https://github.com/RedSnoww12/MyBlog"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                    >
                        <button
                            className="min-w-16 rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-xl sm:text-2xl h-10 sm:h-12 px-4 sm:px-5"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="./github.svg"
                                alt="github logomark"
                                width={20}
                                height={20}
                            />
                        </button>
                    </a>
                </div>
                <div className="max-w-sm sm:max-w-md bg-foreground rounded flex-col items-center justify-center text-background text-center p-4 shadow shadow-foreground">
                    <h3 className="text-2xl font-bold">Snake</h3>
                    <p className="mt-2">
                        Un jeu de snake réalisé en C.
                    </p>
                    <a
                        href="https://github.com/RedSnoww12/Snake"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                    >
                        <button
                            className="min-w-16 rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-xl sm:text-2xl h-10 sm:h-12 px-4 sm:px-5"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="/github.svg"
                                alt="Github logomark"
                                width={20}
                                height={20}
                            />
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}

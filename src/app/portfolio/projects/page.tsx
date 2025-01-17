import Image from "next/image";

export default function ProjectsSection() {
    return (
        <section className="h-screen snap-start flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold">Mes Projets</h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <a
                    href="https://github.com/RedSnoww12/Snake"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button
                        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-xl sm:text-2xl h-10 sm:h-12 px-4 sm:px-5"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="/github.svg"
                            alt="Github logomark"
                            width={20}
                            height={20}
                        />
                        Snake
                    </button>
                </a>
                <a
                    href="https://github.com/RedSnoww12/myApiSpring"
                    target="_blank"
                >
                    <button
                        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-xl sm:text-2xl h-10 sm:h-12 px-4 sm:px-5"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="./github.svg"
                            alt="github logomark"
                            width={20}
                            height={20}
                        />
                        <span>MyApi</span></button>
                </a>
                <a
                    href="https://github.com/RedSnoww12/MyYoutube"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button
                        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-xl sm:text-2xl h-10 sm:h-12 px-4 sm:px-5"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="./github.svg"
                            alt="github logomark"
                            width={20}
                            height={20}
                        />
                        <span>MyYoutube</span>
                    </button>
                </a>
                <a
                    href="https://github.com/RedSnoww12/MyBlog"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button
                        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-xl sm:text-2xl h-10 sm:h-12 px-4 sm:px-5"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="./github.svg"
                            alt="github logomark"
                            width={20}
                            height={20}
                        />
                        <span>MyBlog</span>
                    </button>
                </a>
                <a
                    href="https://dev.azure.com/MyCloseShop/MyCloseShop"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button
                        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-xl sm:text-2xl h-10 sm:h-12 px-4 sm:px-5"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src="./github.svg"
                            alt="github logomark"
                            width={20}
                            height={20}
                        />
                        <span>MyCloseShop</span>
                    </button>
                </a>
            </div>
        </section>
    );
}

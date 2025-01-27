import AnimatedWrapper from "@/components/animated-wrapper/AnimatedWrapper";

export default function AboutSection() {
    return (
        <section
            className="h-screen flex items-center justify-center">
            <div className="text-center">
                <AnimatedWrapper>
                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white">Bienvenue chez moi !</h1>
                    <p className="mt-4 text-lg text-gray-200">
                        Je suis un développeur passionné par React, Java, et Spring Boot.
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

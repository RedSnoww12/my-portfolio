import AnimatedWrapper from "@/components/animated-wrapper/AnimatedWrapper";

export const dynamic = "force-dynamic";

export default function MainPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-700">
            <AnimatedWrapper>
                <h1 className="text-5xl font-bold text-white">Bienvenue sur la page principale</h1>
            </AnimatedWrapper>
        </div>
    );
}
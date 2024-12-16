"use client";
import Image from "next/image";
import TypewriterClient from "@/components/typewriter-client/TypewriterClient";
import {useRouter} from "next/navigation";
import {useState} from "react";

export default function Home() {
    const [isTransitioning, setIsTransitioning] = useState(false);

    const router = useRouter();

    const handleNavigation = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            router.push("/portfolio");
        }, 1000);
    };

    return (
        <div
            className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ${
                isTransitioning ? "opacity-0 duration-1000" : "opacity-100"
            }`}
        >
            <main className="flex flex-col gap-10 row-start-2 items-center sm:items-center">
                <TypewriterClient/>
                <div className="flex gap-4 items-center flex-col sm:flex-row">
                    <button
                        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-xl sm:text-2xl h-10 sm:h-12 px-4 sm:px-5"
                        rel="noopener noreferrer"
                        onClick={handleNavigation}
                    >
                        <Image
                            className="dark:invert"
                            src="/vercel.svg"
                            alt="Vercel logomark"
                            width={20}
                            height={20}
                        />
                        Enter
                    </button>
                </div>
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
        </div>
    );
}

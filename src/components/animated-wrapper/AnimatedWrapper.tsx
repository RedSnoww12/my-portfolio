"use client";

import React, {useEffect, useState} from "react";

export default function AnimatedWrapper({children}: Readonly<{ children: React.ReactNode }>) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div
            className={`${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } transition-all duration-1000`}
        >
            {children}
        </div>
    );
}
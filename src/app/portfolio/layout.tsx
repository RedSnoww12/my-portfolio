import React from "react";

export default function PortfolioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar">
            {children}
        </div>
    );
}
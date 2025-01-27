import React from "react";

export default function PortfolioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="h-screen w-full overflow-y-scroll no-scrollbar">
            {children}
        </div>
    );
}
import React from "react";

export default function PortfolioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="w-full no-scrollbar">
            {children}
        </div>
    );
}
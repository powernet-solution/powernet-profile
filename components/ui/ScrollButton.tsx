"use client";

import React from "react";

interface ScrollButtonProps {
    targetId: string;
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "secondary";
}

export const ScrollButton = ({ targetId, children, className }: ScrollButtonProps) => {
    const handleScroll = () => {
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <button onClick={handleScroll} className={className}>
            {children}
        </button>
    );
};

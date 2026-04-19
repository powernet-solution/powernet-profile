"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface HeroAIAnimationProps {
    children: React.ReactNode;
    className?: string;
}

export const HeroAIAnimation = ({ children, className }: HeroAIAnimationProps) => {
    const containerRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        if (containerRef.current) {
            gsap.from(containerRef.current, {
                y: 50,
                opacity: 0,
                duration: 1.2,
                ease: "power4.out",
                delay: 0.2
            });
        }
    }, { scope: containerRef });

    return (
        <h1 ref={containerRef} className={className}>
            {children}
        </h1>
    );
};

"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type ButtonVariant = "plain" | "light" | "primary";

interface CTAButtonProps {
    variant?: ButtonVariant;
    text?: string;
    onClick?: () => void;
    className?: string;
}

const Sparkles = ({ colorClass = "bg-primary" }: { colorClass?: string }) => {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(25)].map((_, i) => (
                <motion.div
                    key={i}
                    className={`absolute w-0.5 h-0.5 ${colorClass} rounded-full`}
                    variants={{
                        hover: {
                            x: [0, (Math.random() - 0.5) * 180],
                            y: [0, (Math.random() - 0.5) * 90],
                            scale: [0, 1.5, 0],
                            opacity: [0, 0.8, 0],
                            transition: {
                                duration: 1.5,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                                ease: "circOut"
                            }
                        }
                    }}
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                />
            ))}
        </div>
    );
};

export const CTAButton: React.FC<CTAButtonProps> = ({
    variant = "light",
    text = "Scale with PowerNET",
    onClick,
    className = ""
}) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Variant styles mapping
    const variantStyles = {
        plain: {
            button: "bg-primary-50 text-primary border border-primary/10",
            sparkles: null,
            shineOpacity: "opacity-30",
            shadow: "shadow-[0_10px_30px_rgba(184,46,89,0.05)]",
            hoverShadow: "hover:shadow-[0_15px_35px_rgba(184,46,89,0.1)]"
        },
        light: {
            button: "bg-primary-50 text-primary border border-primary/10",
            sparkles: "bg-primary",
            shineOpacity: "opacity-40",
            shadow: "shadow-[0_10px_30px_rgba(184,46,89,0.05)]",
            hoverShadow: "hover:shadow-[0_20px_40px_rgba(184,46,89,0.15)]"
        },
        primary: {
            button: "bg-gradient-to-r from-primary via-primary-600 to-primary-700 text-white",
            sparkles: "bg-white/60",
            shineOpacity: "opacity-30",
            shadow: "shadow-[0_10px_30px_rgba(184,46,89,0.2)]",
            hoverShadow: "hover:shadow-[0_20px_40px_rgba(184,46,89,0.3)]"
        }
    };

    const currentStyle = variantStyles[variant];

    return (
        <motion.button
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            variants={{
                hover: { scale: 1.05 },
                tap: { scale: 0.95 }
            }}
            className={`relative overflow-hidden flex items-center gap-4 px-12 py-6 rounded-full font-medium text-2xl transition-all cursor-pointer group ${currentStyle.button} ${currentStyle.shadow} ${currentStyle.hoverShadow} ${className}`}
            onClick={onClick || (() => window.location.href = '#')}
        >
            {mounted && currentStyle.sparkles && <Sparkles colorClass={currentStyle.sparkles} />}

            {/* Shine Sweep Effect */}
            <motion.div className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.div
                    className={`absolute inset-y-0 -left-[100%] w-1/3 bg-gradient-to-r from-transparent via-white to-transparent skew-x-[-25deg] ${currentStyle.shineOpacity}`}
                    variants={{
                        hover: {
                            left: '150%',
                            transition: { duration: 1, ease: "easeInOut" }
                        }
                    }}
                />
            </motion.div>

            <span className="relative z-10">{text}</span>
            <motion.i
                className="fi fi-rr-comment leading-none text-xl relative z-10 transition-transform duration-300"
                variants={{
                    hover: { x: 5, rotate: 12 }
                }}
            />
        </motion.button>
    );
};

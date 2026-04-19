import React from "react";

export const Button = ({
    children,
    variant = "primary",
    className = "",
    ...props
}: any) => {
    const baseStyle =
        "inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300";
    const variants = {
        primary:
            "bg-primary text-white  shadow-sm hover:shadow-md",
        outline:
            "bg-primary-50 text-primary hover:bg-primary-100 border border-transparent",
        ghost: "bg-transparent text-gray-700 hover:text-primary",
    };
    // test komentar
    return (
        <button
            className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

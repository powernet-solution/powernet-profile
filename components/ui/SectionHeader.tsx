import React from "react";

export const SectionHeader = ({
    title,
    highlight,
    subtitle,
    align = "center",
}: any) => (
    <div
        data-aos="fade-up"
        className={`mb-12 ${align === "center" ? "text-center mx-auto" : "text-left"} max-w-screen-2xl`}
    >
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-4 leading-tight">
            {title
                .split(highlight)
                .map((part: string, i: number, arr: any[]) =>
                    i === arr.length - 1 ? (
                        part
                    ) : (
                        <React.Fragment key={i}>
                            {part}
                            <span className="text-primary">{highlight}</span>
                        </React.Fragment>
                    ),
                )}
        </h2>
        {subtitle && <p className="text-gray-700 text-xl font-">{subtitle}</p>}
    </div>
);

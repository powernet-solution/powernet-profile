"use client";
import React from "react";
import NextImage from "next/image";
import { ChevronRight } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";

const SERVICES_DATA = [
    {
        id: 1,
        title: "Tailored Software Development",
        desc: "We build scalable, high-performance software tailored to your organization needs, transforming complex challenges into digital solutions—from web apps to complex enterprise systems.",
        image: "/illustrations/software.svg",
        href: "/services/software",
    },
    {
        id: 2,
        title: "Managed Network & Proactive Maintenance",
        desc: "Our managed NOC delivers round-the-clock monitoring and expert maintenance to prevent interruptions and optimize performance.",
        image: "/illustrations/network.svg",
        href: "/services/network",
    },
    {
        id: 3,
        title: "Advanced AI & Machine Learning",
        desc: "Future-proof your organization with custom AI integrations. From predictive analytics to automated workflows, we build solutions built for tomorrow's challenges.",
        image: "/illustrations/ai.svg",
        href: "/services/ai",
    },
];

export const Services = () => {
    return (
        <section id="services" className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl">
                <SectionHeader
                    title="Integrated Institutional IT Solutions"
                    highlight="Integrated"
                    subtitle="Scalable architectures designed for organizational resilience."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8 mt-16">
                    {SERVICES_DATA.map((service, idx) => (
                        <div
                            key={service.id}
                            data-aos="fade-up"
                            data-aos-delay={idx * 200}
                            className="bg-neutral-2 rounded-3xl p-8 xl:p-10 flex flex-col border border-transparent hover:border-primary/10 hover:shadow-lg transition-all duration-500 group"
                        >
                            {/* Text content */}
                            <div className="flex-grow">
                                <span className="text-primary font-semibold text-lg tracking-wide uppercase mb-4 block">
                                    Service
                                </span>
                                <h3 className="text-2xl xl:text-3xl font-semibold text-gray-900 mb-4 leading-tight">
                                    {service.title}
                                </h3>
                                <p className="text-gray-900 leading-relaxed text-regular font-medium xl:text-lg">
                                    {service.desc}
                                </p>
                            </div>

                            {/* Explore button */}
                            <div className="mt-8 mb-10">
                                <button
                                    className="inline-flex  items-center justify-center text-sm font-semibold text-primary bg-primary-50 px-6 py-3 rounded-full hover:bg-primary-100 transition-colors gap-0"
                                    onClick={() => window.location.href = service.href}
                                >
                                    <span className="h-fit pr-2
                                    ">Explore</span>
                                    <i className="fi-rr-angle-small-right pt-1     leading-none"></i>
                                </button>
                            </div>

                            {/* Illustration */}
                            <div className="w-full h-56 xl:h-64 relative flex items-center justify-center">
                                <NextImage
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
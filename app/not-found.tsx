"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";


export default function NotFound() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-primary selection:text-white max-w-[1920px] mx-auto overflow-x-hidden flex flex-col">
            <Navbar />

            <main className="flex-grow min-h-screen lg:h-screen flex items-center pt-28 lg:pt-20 pb-10 lg:pb-0">
                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center min-h-[60vh]">

                        {/* Text Column */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-center lg:text-left order-2 lg:order-1"
                        >
                            <h1 className="text-primary text-xl md:text-2xl lg:text-3xl font-semibold leading-tight mb-6">
                                "404: Resource Relocated."
                            </h1>
                            <p className="text-gray-900 text-sm md:text-base lg:text-lg font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                As we scale our architecture, some legacy links are retired.
                                <br className="hidden md:block" />
                                Please use our main navigation to continue.
                            </p>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="mt-10 flex justify-center lg:justify-start"
                            >
                                <button
                                    onClick={() => window.location.href = '/'}
                                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-primary-50 text-primary border border-primary/10 rounded-full font-semibold text-sm md:text-base hover:bg-primary-100 transition-all shadow-sm hover:shadow-md group"
                                >
                                    <i className="fi fi-rr-arrow-small-left h-fit pt-1 leading-none transition-transform group-hover:-translate-x-1"></i>
                                    <span>Back to Infrastructure</span>
                                </button>
                            </motion.div>
                        </motion.div>

                        {/* Illustration Column */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                            className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square order-1 lg:order-2"
                        >
                            <Image
                                src="/illustrations/notfound/notfound.svg"
                                alt="404 Illustration"
                                fill
                                className="object-contain"
                                priority
                            />
                        </motion.div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

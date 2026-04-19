"use client";
import React from "react";
import { motion } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";

export const CTASection = () => {
    return (
        <section className=" border-t  border-gray-200 py-24 w-full bg-neutral-2 mx-auto overflow-hidden">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-12 max-w-6xl mx-auto">
                        <span className="inline-block  border-[#83213f] pb-1">
                            Powering Enterprise
                        </span>{" "}
                        Efficiency. Accelerating Your Strategic Growth.
                    </h2>

                    <div className="flex justify-center">
                        {/* 
                          Toggle variant prop to switch between designs:
                          - variant="plain"   : Clean look, no sparkles
                          - variant="light"   : Light pink background + red sparkles (Latest version)
                          - variant="primary" : Red background + white sparkles
                        */}
                        <CTAButton variant="light" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

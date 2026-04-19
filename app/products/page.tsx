"use client";

import React, { useState, useEffect, Suspense } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { PRODUCTS_DATA } from "@/constants/content";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import KelolaImage from "@/public/image/products/Group 87.svg"

function ProductsContent() {
    const searchParams = useSearchParams();
    const type = searchParams.get("type");

    const [activeProduct, setActiveProduct] = useState<"limbah" | "pintar">("limbah");
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (type === "pintar" || type === "limbah") {
            setActiveProduct(type as "limbah" | "pintar");
        }
    }, [type]);
    // test commit

    const data = PRODUCTS_DATA[activeProduct];

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(`Interest in ${data.name} from: ${email}`);
        alert(`Thank you! We will contact you soon regarding your interest in ${data.name}.`);
        setEmail("");
    };

    return (
        <main className="min-h-screen bg-white overflow-x-hidden">
            <Navbar />

            {/* Hero Header Section */}
            <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-4">
                <div className="container mx-auto max-w-7xl text-center">
                    <h1 className="text-3xl md:text-5xl font-bold text-[#A62F54] mb-4">
                        Early Access to Our Advanced Solutions
                    </h1>
                    <p className="text-lg md:text-xl text-gray-900 font-medium mx-auto mb-12">
                        Kelola and Pintar are currently in final development. Sign up to receive a technical brief and priority deployment once we launch.
                    </p>

                    {/* Email Capture Form - Exact Flex Layout */}
                    <form
                        onSubmit={handleFormSubmit}
                        className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-2xl mx-auto"
                    >
                        <div className="w-full sm:w-[400px]">
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="yourname@company.co.id"
                                className="w-full px-6 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-0 text-gray-800 placeholder:text-gray-400"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#A62F54] hover:bg-[#8A2645] text-white px-6 py-3 rounded-lg font-semibold transition-all"
                        >
                            <span>Send Email</span>
                            <img src="/icon/icon-wrapper-h.svg" alt="icon" className="w-5 h-5" />
                        </button>
                    </form>
                </div>
            </section>

            <section className="pb-24 px-4 md:px-8">
                <div className="container mx-auto max-w-screen-2xl">
                    <div className="bg-white rounded-[40px] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.8fr] items-stretch">
                            {/* Left Column */}
                            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-start border-r border-gray-50 h-full">
                                <div className="inline-flex p-3 bg-[#A62F54]/5 rounded-[8px] mb-12 w-fit border border-[#A62F54]/10">
                                    <button
                                        onClick={() => setActiveProduct("limbah")}
                                        className={`px-8 py-3 rounded-[8px] text-base font-bold transition-all duration-300 ${activeProduct === "limbah" ? "bg-[#A62F54] text-white shadow-lg shadow-[#A62F54]/20" : "text-[#A62F54] hover:bg-[#A62F54]/5"}`}
                                    >
                                        KelolaLimbah
                                    </button>
                                    <button
                                        onClick={() => setActiveProduct("pintar")}
                                        className={`px-8 py-3 rounded-[8px] text-base font-bold transition-all duration-300 ${activeProduct === "pintar" ? "bg-[#A62F54] text-white shadow-lg shadow-[#A62F54]/20" : "text-[#A62F54] hover:bg-[#A62F54]/5"}`}
                                    >
                                        PINTAR AI
                                    </button>
                                </div>

                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeProduct}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex flex-col gap-6"
                                    >
                                        <h2 className="text-3xl lg:text-3xl font-bold lg:max-w-[100ch] text-gray-900 leading-tight">
                                            {data.headline}
                                        </h2>
                                        <p className="text-lg text-gray-700 leading-relaxed">
                                            {data.description}
                                        </p>

                                        <div className="mt-1">
                                            <h4 className="text-lg font-bold text-gray-900 mb-6">
                                                Modules:
                                            </h4>
                                            <ul className="space-y-6">
                                                {data.modules.map((module, i) => (
                                                    <li key={i} className="flex gap-4">
                                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />
                                                        <div>
                                                            <p className="font-bold text-gray-900">{module.title}:</p>
                                                            <p className="text-gray-700">{module.desc}</p>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            <div
                                className="relative w-full min-h-[600px] h-full overflow-hidden transition-all duration-500 bg-[#fef8e6]"
                            >
                                <Image
                                    src={KelolaImage}
                                    alt="Product"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

export default function ProductsPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#A62F54]"></div>
            </div>
        }>
            <ProductsContent />
        </Suspense>
    );
}

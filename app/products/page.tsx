"use client";

import React, { useState, useEffect, Suspense } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { PRODUCTS_DATA } from "@/constants/content";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { Mail } from "lucide-react";

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
                    <p className="text-lg md:text-xl text-gray-700 font-medium max-w-3xl mx-auto mb-12">
                        Kelola and Pintar are currently in final development. Sign up to receive a technical brief and priority deployment once we launch.
                    </p>

                    {/* Email Capture Form */}
                    <form 
                        onSubmit={handleFormSubmit}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto"
                    >
                        <div className="relative w-full">
                            <input 
                                type="email" 
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="yourname@company.co.id"
                                className="w-full px-6 py-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#A62F54]/20 transition-all text-gray-800"
                            />
                        </div>
                        <button 
                            type="submit"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#A62F54] hover:bg-[#8A2645] text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg active:scale-95"
                        >
                            <span>Send Email</span>
                            <Mail className="w-5 h-5" />
                        </button>
                    </form>
                </div>
            </section>

            {/* Main Showcase Section */}
            <section className="pb-24 px-4 md:px-8">
                <div className="container mx-auto max-w-screen-2xl">
                    <div className="bg-white rounded-[40px] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.8fr]">
                            
                            {/* Left Column: Context & Toggle */}
                            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-start border-r border-gray-50">
                                {/* Toggle Switch */}
                                <div className="inline-flex p-1 bg-gray-100 rounded-xl mb-12 w-fit">
                                    <button 
                                        onClick={() => setActiveProduct("limbah")}
                                        className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeProduct === "limbah" ? "bg-[#A62F54] text-white shadow-md" : "text-gray-500 hover:text-gray-700"}`}
                                    >
                                        KelolaLimbah
                                    </button>
                                    <button 
                                        onClick={() => setActiveProduct("pintar")}
                                        className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeProduct === "pintar" ? "bg-[#A62F54] text-white shadow-md" : "text-gray-500 hover:text-gray-700"}`}
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
                                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                                            {data.headline}
                                        </h2>
                                        <p className="text-lg text-gray-700 leading-relaxed">
                                            {data.description}
                                        </p>

                                        <div className="mt-8">
                                            <h4 className="text-lg font-bold text-gray-900 mb-6 underline decoration-[#A62F54] decoration-2 underline-offset-8">
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

                            {/* Right Column: Preview Placeholder */}
                            <div className={`${data.previewColor} transition-colors duration-500 p-8 md:p-12 lg:p-16 flex items-center justify-center min-h-[500px] lg:min-h-auto`}>
                                <AnimatePresence mode="wait">
                                    <motion.div 
                                        key={activeProduct}
                                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 1.05, y: -20 }}
                                        transition={{ duration: 0.4 }}
                                        className="w-full h-full max-w-5xl bg-white/60 backdrop-blur-sm rounded-3xl border border-white shadow-2xl flex flex-col items-center justify-center p-12 text-center"
                                    >
                                        {/* Mock UI Elements */}
                                        <div className="w-full flex-1 border-2 border-dashed border-[#A62F54]/30 rounded-2xl flex flex-col items-center justify-center gap-4">
                                            <div className="w-20 h-20 rounded-full bg-[#A62F54]/10 flex items-center justify-center">
                                                <i className={`fi ${activeProduct === "limbah" ? "fi-rr-recycle" : "fi-rr-brain"} text-4xl text-[#A62F54]`}></i>
                                            </div>
                                            <div>
                                                <p className="text-2xl font-bold text-gray-900">{data.displayName} Platform</p>
                                                <p className="text-gray-500 mt-2">Coming Soon: Q3 2026 Preview</p>
                                            </div>
                                        </div>
                                        <p className="mt-8 text-sm font-medium text-gray-400 tracking-widest uppercase">
                                            Placeholder for {data.name} Dashboard Mockup
                                        </p>
                                    </motion.div>
                                </AnimatePresence>
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

"use client";

import React, { useState, useEffect, Suspense } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { PRODUCTS_DATA, CONTACT_INFO } from "@/constants/content";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { MessageSquareText } from "lucide-react";
import Image from "next/image";
import KelolaBG from "@/public/image/products/kelolabg.svg";
import KelolaMockup from "@/public/image/products/kelolamockup.svg";
import PintarBG from "@/public/image/products/Frame 52215.svg";
import PintarMockup from "@/public/image/products/pintarmockup.svg";

const productImages = {
    limbah: { bg: KelolaBG, mockup: KelolaMockup },
    pintar: { bg: PintarBG, mockup: PintarMockup }
};

function ProductsContent() {
    const searchParams = useSearchParams();
    const type = searchParams.get("type");

    const [activeProduct, setActiveProduct] = useState<"limbah" | "pintar">("pintar");

    useEffect(() => {
        if (type === "pintar" || type === "limbah") {
            setActiveProduct(type as "limbah" | "pintar");
        }
    }, [type]);

    const data = PRODUCTS_DATA[activeProduct];
    const getWhatsAppLink = () => {
        const phone = "6281298192099";
        const message = activeProduct === "limbah"
            ? "Halo, saya tertarik menggunakan Kelola untuk operasional pengelolaan limbah. Mohon informasi fitur, alur implementasi, dan akses awalnya."
            : "Halo, saya tertarik dengan Pintar. Ingin tahu lebih lanjut cara kerjanya dan bagaimana bisa mulai.";

        return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
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
                    <div className="flex justify-center mt-12">
                        <button
                            onClick={() => window.open(getWhatsAppLink(), "_blank")}
                            className="flex items-center justify-center gap-3 bg-[#A62F54] hover:bg-[#8A2645] text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-[#A62F54]/20 text-lg"
                        >
                            <span className="text-sm font-bold">Interested? Talk to us</span>
                            <MessageSquareText size={14} />
                        </button>
                    </div>
                </div>
            </section>

            <section className="pb-24 px-4 md:px-8">
                <div className="container mx-auto max-w-[1600px]">
                    <div className={`bg-white rounded-[20px] border border-gray-100 overflow-hidden transition-all duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.05)] ${activeProduct === "limbah" ? "shadow-[#FAEAB0]/40" : "shadow-[#FFF2E9]/60"}`}>
                        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_3.5fr] items-stretch">
                            {/* Left Column: Container/Content */}
                            <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-start border-r border-gray-50 h-full">
                                <div className="inline-flex p-2 bg-[#A62F54]/5 rounded-[8px] mb-8 w-fit border border-[#A62F54]/10">
                                    <button
                                        onClick={() => setActiveProduct("limbah")}
                                        className={`px-6 py-2 rounded-[8px] text-sm font-bold transition-all duration-300 ${activeProduct === "limbah" ? "bg-[#A62F54] text-white shadow-lg shadow-[#A62F54]/20" : "text-[#A62F54] hover:bg-[#A62F54]/5"}`}
                                    >
                                        KelolaLimbah
                                    </button>
                                    <button
                                        onClick={() => setActiveProduct("pintar")}
                                        className={`px-6 py-2 rounded-[8px] text-sm font-bold transition-all duration-300 ${activeProduct === "pintar" ? "bg-[#A62F54] text-white shadow-lg shadow-[#A62F54]/20" : "text-[#A62F54] hover:bg-[#A62F54]/5"}`}
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
                                        className="flex flex-col gap-3"
                                    >
                                        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
                                            {data.headline}
                                        </h2>
                                        <p className="text-base text-gray-900 leading-relaxed">
                                            {data.description}
                                        </p>

                                        <div className="mt-1">
                                            <h4 className="text-lg font-bold text-gray-900 mb-3">
                                                Modules:
                                            </h4>
                                            <ul className="space-y-2">
                                                {data.modules.map((module, i) => (
                                                    <li key={i} className="flex gap-3">
                                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-xl bg-[#A62F54] flex-shrink-0" />
                                                        <div>
                                                            <p className="text-base font-bold text-gray-900">{module.title}:</p>
                                                            <p className="text-base text-gray-700 leading-snug">{module.desc}</p>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Right Column: Card/Image with Layering */}
                            <div className={`relative w-full aspect-[1.4/1] sm:aspect-[16/9] lg:aspect-auto min-h-[300px] sm:min-h-[400px] lg:min-h-0 overflow-hidden transition-all duration-500 flex items-center justify-center ${activeProduct === "limbah" ? "bg-[#fef8e6]" : "bg-[#FFF2E9]"}`}>
                                {/* Background Layer */}
                                <div className="absolute inset-0 z-0">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={`${activeProduct}-bg`}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.5 }}
                                            className="w-full h-full"
                                        >
                                            <Image
                                                src={productImages[activeProduct].bg}
                                                alt="background"
                                                fill
                                                className="object-cover scale-[1.02]"
                                            />
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* Mockup Layer */}
                                <div className="relative z-10 w-full h-full p-4 sm:p-10 lg:p-12">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={`${activeProduct}-mockup`}
                                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 1.05, y: -10 }}
                                            transition={{ duration: 0.4 }}
                                            className="w-full h-full relative"
                                        >
                                            <Image
                                                src={productImages[activeProduct].mockup}
                                                alt="Product Mockup"
                                                fill
                                                className="object-contain"
                                            />
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
//tes
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
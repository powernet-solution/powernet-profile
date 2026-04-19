'use client'

import { Navbar } from "@/components/sections/Navbar"
import { Footer } from "@/components/sections/Footer"
import { Button } from "@/components/ui/Button"
import { Workflow } from "@/components/sections/Workflow"
import Image from "next/image"
import { ChevronDown, CheckSquare } from "lucide-react"


export default function SoftwareServicePage() {
    return (
        <main className="min-h-screen bg-white overflow-x-hidden">
            <Navbar />

            <section className="relative pt-32 md:pt-48 pb-24 overflow-hidden bg-white border-b border-gray-200">
                <div className="container mx-auto px-4 md:px-8 max-w-screen-3xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

                        {/* Left Column: Content */}
                        <div className="max-w-full">
                            <h1 data-aos="fade-up" className="text-2xl w-full md:text-4xl lg:text-5xl lg:max-w-[20ch] font-bold text-gray-900 leading-[1.25] mb-6">
                                End-to-end Software Solutions to Power Your Business Growth
                            </h1>
                            <p data-aos="fade-up" data-aos-delay="200" className="text-xl w-[80%] text-gray-900 mb-8 font-medium leading-relaxed">
                                We engineer <b>high-performance software</b> to eliminate bottlenecks and automate your workflows. Our custom solutions provide the robust technical foundation needed to optimize operations and accelerate scalable business growth.
                            </p>

                            <div data-aos="fade-up" data-aos-delay="400" className="flex flex-wrap items-center gap-4">
                                <button
                                    className="inline-flex items-center justify-center text-sm font-semibold text-primary bg-primary-50 px-6 py-3 rounded-full hover:bg-primary-100 transition-colors gap-0"
                                    onClick={() => window.location.href = '/'}
                                >
                                    <span className="h-fit pr-2">Learn More</span>
                                    <i className="fi fi-rr-info leading-none h-fit pt-[1px]"></i>
                                </button>
                                <Button
                                    variant="primary"
                                    className="px-6 py-3 bg-primary text-white hover:bg-primary/90 rounded-full font-medium transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-0 text-sm"
                                    onClick={() => window.location.href = '/'}
                                >
                                    <span className="pr-2">Free Consultation</span>
                                    <i className="fi fi-rr-call-outgoing leading-none h-fit pt-[1px]"></i>
                                </Button>
                            </div>
                        </div>

                        {/* Right Column: Image */}
                        <div className="w-full max-w-2xl lg:ml-auto">
                            <div className="relative w-full aspect-[853/566] overflow-hidden rounded-3xl">
                                <Image
                                    src="/image/Frame 287.svg"
                                    alt="Software Solutions Showcase"
                                    fill
                                    priority
                                    className="object-contain"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Precision Engineering Section */}
            <section className="bg-white py-20 md:py-32 border-t border-gray-50">
                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    <div data-aos="fade-up" className="text-center max-w-7xl mx-auto mb-20">
                        <h2 className="text-2xl md:text-4xl font-semibold text-primary mb-4">
                            Precision Engineering for Complex Systems
                        </h2>
                        <p className="text-lg md:text-xl font-medium text-gray-900 leading-relaxed">
                            We build reliable software designed to solve your operational gaps. Our focus is on creating high-performance systems that simplify complex processes and drive measurable efficiency for your business
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                        {/* 01 Bespoke Architecture */}
                        <div data-aos="fade-up" data-aos-delay="0" className="py-10 md:py-0 md:px-8 first:pl-0 last:pr-0">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">
                                <span className="block mb-1">01 Bespoke</span>
                                Architecture
                            </h3>
                            <p className="text-lg lg:text-xl font-medium text-gray-900 leading-relaxed">
                                Custom-built systems designed to fit your unique business logic and operational needs.
                            </p>
                        </div>

                        {/* 02 Seamless Integration */}
                        <div data-aos="fade-up" data-aos-delay="200" className="py-10 md:py-0 md:px-8 first:pl-0 last:pr-0">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">
                                <span className="block mb-1">02 Seamless</span>
                                Integration
                            </h3>
                            <p className="text-lg lg:text-xl font-medium text-gray-900 leading-relaxed">
                                Unified ecosystems that connect your existing tools into one high-performance platform.
                            </p>
                        </div>

                        {/* 03 Intelligent Automation */}
                        <div data-aos="fade-up" data-aos-delay="400" className="py-10 md:py-0 md:px-8 first:pl-0 last:pr-0">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">
                                <span className="block mb-1">03 Intelligent</span>
                                Automation
                            </h3>
                            <p className="text-lg lg:text-xl font-medium text-gray-900 leading-relaxed">
                                Eliminate manual errors by automating repetitive tasks with smart, logic-driven workflows.
                            </p>
                        </div>

                        {/* 04 Data-Driven Insights */}
                        <div data-aos="fade-up" data-aos-delay="600" className="py-10 md:py-0 md:px-8 first:pl-0 last:pr-0">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">
                                <span className="block mb-1">04 Data-Driven</span>
                                Insights
                            </h3>
                            <p className="text-lg lg:text-xl font-medium text-gray-900 leading-relaxed">
                                Real-time analytics and reporting to help you make faster, more accurate strategic decisions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enterprise Web Development Section */}
            <section className="bg-white py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
                        <div data-aos="fade-right" className="flex-1 w-full relative aspect-[4/3] md:aspect-square lg:aspect-[16/10] overflow-hidden rounded-3xl">
                            <Image
                                src="/image/softwareimage2.svg"
                                alt="Enterprise Web Development"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div data-aos="fade-left" className="flex-1 text-center md:text-left">
                            <h2 className="text-2xl md:text-4xl font-semibold text-primary mb-6">Enterprise Web Development</h2>
                            <p className="text-lg md:text-xl font-medium text-gray-900 leading-relaxed mb-8">
                                We engineer robust web platforms focused on high-load stability and complex data integration. Our web solutions are built to serve as the central nervous system of your business.
                            </p>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4 text-left">
                                    <span className="fi fi-rr-checkbox text-primary flex-shrink-0 mt-1"></span>
                                    <div className="lg:text-xl">
                                        <span className="font-semibold text-gray-900">Performance Engineering:</span>
                                        <span className="text-gray-900 ml-1">Scalable architecture designed for high-traffic environments.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 text-left">
                                    <span className="fi fi-rr-checkbox text-primary flex-shrink-0 mt-1"></span>
                                    <div className="lg:text-xl">
                                        <span className="font-semibold text-gray-900">System Synergy:</span>
                                        <span className="text-gray-900 ml-1">Seamless API and cloud integration with your existing enterprise tools.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scalable Mobile Solutions Section */}
            <section className="bg-white py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
                        <div data-aos="fade-left" className="flex-1 w-full relative aspect-[4/3] md:aspect-square lg:aspect-[16/10] overflow-hidden rounded-3xl">
                            <Image
                                src="/image/softwareimage1.svg"
                                alt="Scalable Mobile Solutions"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div data-aos="fade-right" className="flex-1 text-center md:text-left">
                            <h2 className="text-2xl md:text-4xl font-semibold text-primary mb-6">Scalable Mobile Solutions</h2>
                            <p className="text-lg md:text-xl font-medium text-gray-900 leading-relaxed mb-8">
                                High-performance Android applications designed for speed, security, and native-level experience. We bring your operational power to the palm of your hand.
                            </p>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4 text-left">
                                    <span className="fi fi-rr-checkbox text-primary flex-shrink-0 mt-1"></span>
                                    <div className="md:text-xl">
                                        <span className="font-semibold text-gray-900">Cross-Platform Agility:</span>
                                        <span className="text-gray-900 ml-1">Modern frameworks ensuring consistent performance across all devices.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 text-left">
                                    <span className="fi fi-rr-checkbox text-primary flex-shrink-0 mt-1"></span>
                                    <div className="lg:text-xl">
                                        <span className="font-semibold text-gray-900">Offline-First Logic:</span>
                                        <span className="text-gray-900 ml-1">Built-in resilience to ensure business continuity even with unstable connectivity.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <Workflow />

            <Footer />
        </main>
    )
}

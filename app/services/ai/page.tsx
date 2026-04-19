"use client";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Info, Phone } from "lucide-react";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/Button";
import aiimage1 from "@/public/image/ai/aiimage1.svg";
import aiimage2 from "@/public/image/ai/aiimage2.svg";
import aiimage3 from "@/public/image/ai/aiimage3.svg";
import aiimage4 from "@/public/image/ai/aiimage4.svg";
import icon1 from "@/public/illustrations/ai/ai1.svg";
import icon2 from "@/public/illustrations/ai/ai2.svg";
import icon3 from "@/public/illustrations/ai/ai3.svg";
import icon4 from "@/public/illustrations/ai/ai4.svg";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function AIServicePage() {
    const heroRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        if (heroRef.current) {
            gsap.from(heroRef.current, {
                y: 50,
                opacity: 0,
                duration: 1.2,
                ease: "power4.out",
                delay: 0.2
            });
        }
    }, { scope: heroRef });

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-primary selection:text-white max-w-[1920px] mx-auto overflow-x-hidden">
            <Navbar />
            <main>
                {/* Hero Section */}
                <section className="relative pt-32 md:pt-48 pb-24 overflow-hidden bg-white border-b border-gray-200">
                    <div className="container mx-auto px-4 md:px-8 max-w-screen-3xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

                            {/* Left Column: Content */}
                            <div className="max-w-full">
                                <h1 ref={heroRef} className="text-2xl w-full md:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.25] mb-6">
                                    Enterprise AI Architectures:
                                    Engineering Precision, Automating Complexity
                                </h1>
                                <p data-aos="fade-up" data-aos-delay="200" className="text-xl w-[90%] text-gray-900 mb-8 font-medium leading-relaxed">
                                    PowerNET deploys <span className="font-bold text-gray-900">custom-engineered AI models</span>—from Computer Vision to Advanced NLP—built for high-stakes environments. We integrate high-accuracy automation directly into your infrastructure while ensuring total data sovereignty and zero workflow disruption.
                                </p>

                                <div data-aos="fade-up" data-aos-delay="400" className="flex flex-wrap items-center gap-4">
                                    <button
                                        className="button-ai-solution inline-flex items-center justify-center text-sm font-semibold text-primary bg-primary-50 px-6 py-3 rounded-full hover:bg-primary-100 transition-colors gap-0"
                                        onClick={() => {
                                            const element = document.getElementById('ai-solutions');
                                            if (element) {
                                                element.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }}
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

                            {/* Right Column: 2x2 Grid */}
                            <div className="w-full max-w-2xl lg:ml-auto">
                                <div className="grid grid-cols-2 border border-gray-200 bg-white">
                                    {/* Box 1 */}
                                    <div data-aos="fade-up" data-aos-delay="100" className="p-8 md:p-12 flex flex-col items-center text-center border-r border-b border-gray-200">
                                        <div className="w-18 h-18 flex items-center justify-center mb-6">
                                            <img src={(icon1 as any).src || icon1} alt="Icon" className="w-full h-full object-contain" />
                                        </div>
                                        <h3 className="font-bold text-gray-900 text-base mb-3 leading-tight">NLP Intelligence</h3>
                                        <p className="text-sm font-medium text-gray-900 leading-relaxed">Automated extraction and semantic analysis for enterprise data.</p>
                                    </div>

                                    {/* Box 2 */}
                                    <div data-aos="fade-up" data-aos-delay="200" className="p-8 md:p-12 flex flex-col items-center text-center border-b border-gray-200">
                                        <div className="w-18 h-18 flex items-center justify-center mb-6">
                                            <img src={(icon2 as any).src || icon2} alt="Icon" className="w-full h-full object-contain" />
                                        </div>
                                        <h3 className="font-bold text-gray-900 text-base mb-3 leading-tight">Visual Recognition</h3>
                                        <p className="text-sm font-medium text-gray-900 leading-relaxed">Industrial-grade object detection with 99.9% precision.</p>
                                    </div>

                                    {/* Box 3 */}
                                    <div data-aos="fade-up" data-aos-delay="300" className="p-8 md:p-12 flex flex-col items-center text-center border-r border-gray-200">
                                        <div className="w-18 h-18 flex items-center justify-center mb-6">
                                            <img src={(icon3 as any).src || icon3} alt="Icon" className="w-full h-full object-contain" />
                                        </div>
                                        <h3 className="font-bold text-gray-900 text-base mb-3 leading-tight">Cognitive Logic</h3>
                                        <p className="text-sm font-medium text-gray-900 leading-relaxed">Predictive modeling to optimize complex decision-making.</p>
                                    </div>

                                    {/* Box 4 */}
                                    <div data-aos="fade-up" data-aos-delay="400" className="p-8 md:p-12 flex flex-col items-center text-center">
                                        <div className="w-18 h-18 flex items-center justify-center mb-6">
                                            <img src={(icon4 as any).src || icon4} alt="Icon" className="w-full h-full object-contain" />
                                        </div>
                                        <h3 className="font-bold text-gray-900 text-base mb-3 leading-tight">Secure Infrastructure</h3>
                                        <p className="text-sm font-medium text-gray-900 leading-relaxed">Privacy-first AI integration via encrypted on-premise systems.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* AI Solutions Section */}
                <section className="py-20 bg-white relative overflow-hidden bg-custom-dots" id="ai-solutions">
                    <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl relative z-10">
                        <div data-aos="fade-up" className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl font-semibold text-primary mb-4">Enterprise AI Solutions</h2>
                            <p className="text-lg md:text-xl font-medium text-gray-900 max-w-4xl mx-auto">
                                A comprehensive suite of AI-powered services designed to automate workflows, enhance decision-making, and unlock actionable intelligence from your data.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div data-aos="fade-up" data-aos-delay="0">
                                <ServiceCard
                                    title="Data Acquisition"
                                    description="Secure ingestion of structured and unstructured data. We establish high-integrity pipelines to gather and organize information from diverse sources for processing."
                                    imageSrc={aiimage2}
                                />
                            </div>
                            <div data-aos="fade-up" data-aos-delay="200">
                                <ServiceCard
                                    title="Model Training"
                                    description="Development of custom-engineered frameworks and precise fine-tuning. We optimize models using your specific datasets to achieve superior, domain-specific accuracy."
                                    imageSrc={aiimage3}
                                />
                            </div>
                            <div data-aos="fade-up" data-aos-delay="400">
                                <ServiceCard
                                    title="API Integration"
                                    description="Deployment of lightweight, scalable APIs designed for seamless connectivity. We ensure high-speed communication between your new AI assets and existing legacy systems."
                                    imageSrc={aiimage4}
                                />
                            </div>
                            <div data-aos="fade-up" data-aos-delay="600">
                                <ServiceCard
                                    title="Optimization Loop"
                                    description="Continuous monitoring to detect model drift and maintain accuracy. We use automated feedback loops to ensure your AI evolves and remains reliable as your business data grows."
                                    imageSrc={aiimage1}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantage Section */}
                <section className="w-full border-y border-gray-200 bg-white lg:h-screen min-h-max lg:min-h-[700px] flex items-stretch">
                    <div className="w-full max-w-[1300px] mx-auto h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.25fr_0.875fr_0.875fr] border-x border-gray-200 bg-white">
                        {/* Left Text Block */}
                        <div data-aos="fade-right" className="col-span-1 md:col-span-2 lg:col-span-1 lg:row-span-2 lg:border-r border-b lg:border-b-0 border-gray-200 p-8 lg:p-12 xl:p-16 flex flex-col justify-start pt-12 lg:pt-16 xl:pt-20">
                            <span className="text-primary font-medium text-base lg:text-xl mb-4 block  tracking-wider">The PowerNET Advantages</span>
                            <h2 className="text-3xl lg:text-4xl  font-semibold text-gray-900 leading-tight flex-1">
                                Tailored AI solutions engineered for
                                <br />
                                security, accuracy,
                                <br />
                                and seamless
                                <br />
                                enterprise continuity.
                            </h2>
                        </div>

                        {/* Top Middle */}
                        <div data-aos="fade-up" data-aos-delay="100" className="col-span-1 border-b md:border-r border-gray-200 p-10 lg:p-12 flex flex-col justify-start">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Custom-Built for You</h3>
                            <p className="text-lg lg:text-xl font-medium text-gray-900 leading-relaxed">
                                We don't use generic tools. Every AI model is trained specifically on your business data for maximum accuracy.
                            </p>
                        </div>

                        {/* Top Right */}
                        <div data-aos="fade-up" data-aos-delay="200" className="col-span-1 border-b border-gray-200 p-10 lg:p-12 flex flex-col justify-start">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Data Stays Safe</h3>
                            <p className="text-lg lg:text-xl font-medium text-gray-900 leading-relaxed">
                                Your privacy is our priority. We deploy AI on your own servers or private cloud so your data never leaves your control.
                            </p>
                        </div>

                        {/* Bottom Middle */}
                        <div data-aos="fade-up" data-aos-delay="300" className="col-span-1 border-b md:border-b-0 md:border-r border-gray-200 p-10 lg:p-12 lg:pb-14 flex flex-col justify-start">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Proven Performance</h3>
                            <p className="text-lg lg:text-xl font-medium text-gray-900 leading-relaxed">
                                We don't just promise results. Every system is rigorously tested and validated to ensure it works reliably in real-world conditions.
                            </p>
                        </div>

                        {/* Bottom Right */}
                        <div data-aos="fade-up" data-aos-delay="400" className="col-span-1 p-10 lg:p-12 lg:pb-14 flex flex-col justify-start">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Easy Integration</h3>
                            <p className="text-lg lg:text-xl font-medium text-gray-900 leading-relaxed">
                                No need to change your current software. Our AI is designed to plug directly into your existing systems without disrupting your workflow.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

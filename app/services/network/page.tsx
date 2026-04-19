"use client";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/Button";
import { ChevronRight, Check } from "lucide-react";
import { ServiceCard } from "@/components/ui/ServiceCard";
import networkimage1 from "@/public/image/networkimage1.svg";
import networkimage2 from "@/public/image/networkimage2.svg";
import networkimage3 from "@/public/image/networkimage3.svg";

export default function NetworkServicePage() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-primary selection:text-white max-w-[1920px] mx-auto overflow-x-hidden">
            <Navbar />
            <main>
                {/* Hero Section */}
                <section className="relative min-h-[80vh] flex items-center border-b border-gray-200 justify-center overflow-hidden bg-white bg-custom-dots pt-20">
                    <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl relative z-10 text-center">
                        <h1 data-aos="fade-up" className="text-3xl md:text-4xl lg:text-5xl w-full font-bold text-gray-900 leading-[1.15] mb-6 tracking-tight">
                            Resilient Network Architecture for High-Stake Operations
                        </h1>
                        <p data-aos="fade-up" data-aos-delay="200" className="text-lg text-gray-900 mb-8 max-w-screen w-[80%] mx-auto leading-relaxed">
                            Experience comprehensive end-to-end infrastructure management powered by proactive maintenance strategies. We ensure your business achieves peak performance through ultra-fast, low-latency connectivity and robust, enterprise-grade security layers.
                        </p>
                        <div data-aos="fade-up" data-aos-delay="400">
                            <Button
                                variant="primary"
                                className="px-8 py-3 bg-primary text-white hover:bg-primary/90 rounded-full font-medium transition-colors flex items-center justify-center gap-0"
                                onClick={() => {
                                    const element = document.getElementById('network-solutions');
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                            >
                                <span>Learn More</span>
                                <i className="fi fi-rr-info leading-none h-fit pt-[1px]"></i>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Section 2: Integrated Network Infrastructure Solutions */}
                <section className="py-20 bg-white" id="network-solutions">
                    <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                        <div data-aos="fade-up" className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl font-semibold text-primary mb-4">Integrated Network Infrastructure Solutions</h2>
                            <p className="text-lg md:text-xl font-medium text-gray-900 max-w-4xl mx-auto">
                                A technical overview of connectivity services designed to support operational stability and data scalability through fiber optic infrastructure.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div data-aos="fade-up" data-aos-delay="0">
                                <ServiceCard
                                    title="Private Fiber & High-Speed Access"
                                    description="High-speed fiber optic channel with direct pool and 1:1 CIR ratio. We provide dedicated symmetric bandwidth to ensure your business stays connected with maximum reliability."
                                    imageSrc={networkimage1}
                                    imageAlt="Private Fiber"
                                />
                            </div>
                            <div data-aos="fade-up" data-aos-delay="200">
                                <ServiceCard
                                    title="Full-Manage Server Infrastructure"
                                    description="Comprehensive hardware and software solutions with 24/7 monitoring. We handle performance optimization and system upgrades so your applications always run smoothly and reliably."
                                    imageSrc={networkimage2}
                                    imageAlt="Server Infrastructure"
                                />
                            </div>
                            <div data-aos="fade-up" data-aos-delay="400">
                                <ServiceCard
                                    title="Proactive Infra Management & SLA"
                                    description="Professional maintenance, security management, and proactive adaptation. Our technical team ensures constant supervision and rapid support to keep your infrastructure secure and online."
                                    imageSrc={networkimage3}
                                    imageAlt="Infra Management"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Secure Communication & Digital Defense */}
                <section className="py-20 bg-white ">
                    <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl">
                        <div data-aos="fade-up" className="text-center mb-16 w-full">
                            <h2 className="text-3xl  font-semibold text-gray-900 mb-2">Secure Communication & Digital Defense</h2>
                            <p className="text-gray-900  mx-auto text-xl  w-full  font-medium">
                                Protect your data and professional identity with integrated cyber security and enterprise-grade hosting solutions.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 max-w-7xl mx-auto">
                            {/* Card 1 */}
                            <div data-aos="fade-right" className="bg-neutral-2 rounded-3xl p-8 md:p-10 border border-transparent hover:border-primary/10 hover:shadow-lg transition-all duration-500 relative overflow-hidden">
                                <h3 className="text-2xl font-semibold text-primary mb-8 w-full leading-snug lg:whitespace-nowrap">Cyber Security & Threat Defense</h3>
                                <p className="text-gray-700 font-medium  text-xl w-[90%]  mb-8">
                                    Complete protection for your web applications and data interfaces. We monitor, filter, and shield your digital ecosystem from evolving cyber threats 24/7.
                                </p>

                                <ul className="space-y-6 text-xl w-full font-medium">
                                    <li className="flex items-start gap-3 ">
                                        <img src="/checkbox.svg" alt="check" className="mt-1 flex-shrink-0 w-5 h-5" />
                                        <div>
                                            <span className="font-extrabold text-gray-900 ">Web Application Firewall (WAF): </span>
                                            <span className="text-gray-900 ">Advanced Layer 7 filtering that monitors and blocks malicious traffic (malware, exploits, and bots) before they reach your server.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <img src="/checkbox.svg" alt="check" className="mt-1 flex-shrink-0 w-5 h-5" />
                                        <div>
                                            <span className="font-extrabold text-gray-900 ">Secure API Management: </span>
                                            <span className="text-gray-900 ">Ensures data integrity and confidentiality for all API-directed connections, preventing the 'loose doors' to your applications.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <img src="/checkbox.svg" alt="check" className="mt-1 flex-shrink-0 w-5 h-5" />
                                        <div>
                                            <span className="font-bold text-gray-900">Comprehensive Threat Prevention: </span>
                                            <span className="text-gray-900">Active defense against high-risk attacks, including:</span>
                                            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-900">
                                                <li><span className="font-bold">DDoS Mitigation:</span> DDoS Mitigation: Prevent system downtime caused by traffic surges.</li>
                                                <li><span className="font-bold">SQL Injection & XSS Defense:</span> Stop hackers from stealing or deleting your database.</li>
                                                <li><span className="font-bold">Session Security:</span> Prevent unauthorized web session hijacking.</li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Card 2 */}
                            <div data-aos="fade-left" className="bg-neutral-2 rounded-3xl p-8 md:p-10 border border-transparent hover:border-primary/10 hover:shadow-lg transition-all duration-500 relative overflow-hidden">
                                <h3 className="text-2xl font-semibold text-primary mb-8 w-full leading-snug lg:whitespace-nowrap">Professional Hosting & Email Services</h3>
                                <p className="text-gray-700 font-medium text-xl w-[90%] mb-8">
                                    Establish a credible digital identity with secure, high-performance communication and hosting solutions. We provide the infrastructure to keep your business connected and professional.
                                </p>

                                <ul className="space-y-6 text-xl w-full font-medium">
                                    <li className="flex items-start gap-3">
                                        <img src="/checkbox.svg" alt="check" className="mt-1 flex-shrink-0 w-5 h-5" />
                                        <div>
                                            <span className="font-extrabold text-gray-900 ">Enterprise Email: </span>
                                            <span className="text-gray-900 ">Fully managed solutions for Zimbra and Zoho Mail with custom domains and secure authentication.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <img src="/checkbox.svg" alt="check" className="mt-1 flex-shrink-0 w-5 h-5" />
                                        <div>
                                            <span className="font-extrabold text-gray-900 ">Reliable Web Hosting: </span>
                                            <span className="text-gray-900 ">Premium website and email management powered by the industry-standard cPanel platform.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <img src="/checkbox.svg" alt="check" className="mt-1 flex-shrink-0 w-5 h-5" />
                                        <div>
                                            <span className="font-extrabold text-gray-900 ">Integrated Security: </span>
                                            <span className="text-gray-900 ">Proactive defense with Anti-Spam, Anti-Virus, and multi-platform protection for your inbox.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4: Future-Ready Cloud Infrastructure */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 md:px-12 max-w-screen-2xl">
                        <div data-aos="fade-up" className="mb-12 text-center">
                            <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-4">Future-Ready Cloud Infrastructure</h2>
                            <p className="text-lg md:text-xl mx-auto font-medium text-gray-900 w-full lg:w-[90%]">
                                A high-performance and flexible cloud environment designed for seamless remote access and resilient data protection. Our solutions allow you to scale resources instantly while maintaining maximum security and operational visibility.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div data-aos="fade-up" data-aos-delay="0" className="bg-white rounded-2xl p-6 lg:p-6 lg:pt-12  shadow-sm flex flex-col border border-gray-100 border-l-2 border-b-2 border-l-primary border-b-primary text-left group hover:shadow-md transition-shadow">
                                <div className="w-full h-24 lg:h-32 mb-6">
                                    <img src="/illustrations/network/High performance server 1.svg" alt="Seamless Remote Access" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="flex flex-col gap-2 mt-auto pb-4">
                                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 leading-tight">01 Seamless Remote Access</h3>
                                    <p className="text-sm lg:text-base font-medium text-gray-900 leading-relaxed">Secure and stable connectivity from any location. High-speed access for a flexible, mobile workforce..</p>
                                </div>
                            </div>

                            <div data-aos="fade-up" data-aos-delay="200" className="bg-white rounded-2xl p-6 lg:p-6 lg:pt-12  shadow-sm flex flex-col border border-gray-100 border-l-2 border-b-2 border-l-primary border-b-primary text-left group hover:shadow-md transition-shadow">
                                <div className="w-full h-24 lg:h-32 mb-6">
                                    <img src="/illustrations/network/High nnnserver 1.svg" alt="Automated Data Security" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="flex flex-col gap-2 mt-auto pb-4">
                                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 leading-tight">02 Automated Data Security</h3>
                                    <p className="text-sm lg:text-base font-medium text-gray-900 leading-relaxed">24/7 automated encryption and threat detection. Advanced protection with zero manual effort..</p>
                                </div>
                            </div>

                            <div data-aos="fade-up" data-aos-delay="400" className="bg-white rounded-2xl p-6 lg:p-6 lg:pt-12  shadow-sm flex flex-col border border-gray-100 border-l-2 border-b-2 border-l-primary border-b-primary text-left group hover:shadow-md transition-shadow">
                                <div className="w-full h-24 lg:h-32 mb-6">
                                    <img src="/illustrations/network/High nnnserver (1) 1.svg" alt="On-Demand Scalability" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="flex flex-col gap-2 mt-auto pb-4">
                                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 leading-tight">03 On-Demand Scalability</h3>
                                    <p className="text-sm lg:text-base font-medium text-gray-900 leading-relaxed">Scale your capacity instantly as business grows. Adaptive infrastructure for real-time demands..</p>
                                </div>
                            </div>

                            <div data-aos="fade-up" data-aos-delay="600" className="bg-white rounded-2xl p-6 lg:p-6 lg:pt-12  shadow-sm flex flex-col border border-gray-100 border-l-2 border-b-2 border-l-primary border-b-primary text-left group hover:shadow-md transition-shadow">
                                <div className="w-full h-24 lg:h-32 mb-6">
                                    <img src="/illustrations/network/High nnnserver (2) 1.svg" alt="Optimized Cost Efficiency" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="flex flex-col gap-2 mt-auto pb-4">
                                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 leading-tight">04 Optimized Cost Efficiency</h3>
                                    <p className="text-sm lg:text-base font-medium text-gray-900 leading-relaxed">Eliminate wasted spend with smart allocation. Maximum performance at minimal operational costs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

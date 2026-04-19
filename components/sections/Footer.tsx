import React from "react";
import { CTASection } from "./CTASection";

export const Footer = () => {
    return (
        <footer className="w-full">
            <CTASection />
            <div className="bg-white pt-20 pb-10 border-t border-gray-100">
                <div className="mx-auto px-6 md:px-10  max-w-screen-2xl">
                    <div className="flex flex-col lg:flex-row gap-0 mb-16">
                        {/* LEFT */}
                        <div data-aos="fade-up" className="flex-1 w-fit lg:border-r lg:border-gray-200  mr-24">
                            <h3 className="text-xl md:text-2xl font-semibold text-primary mb-8">
                                Get in Touch With Us
                            </h3>

                            <div className="space-y-5 pl-5 font-medium text-2xl">
                                <div className="flex items-center gap-4 text-gray-700">
                                    <i className="fi fi-rr-phone-call text-gray-900"></i>
                                    <span className="text-sm md:text-base">
                                        +62 812-9819-2099
                                    </span>
                                </div>

                                <div className="flex items-center gap-4 text-gray-700">
                                    <i className="fi fi-rr-envelope text-gray-900"></i>
                                    <span className="text-sm md:text-base">
                                        marketing@powernet.co.id
                                    </span>
                                </div>

                                <div className="flex items-start gap-4 w-2/3 text-gray-700">
                                    <i className="fi fi-rr-marker text-gray-900 mt-1"></i>
                                    <p className="text-sm md:text-base leading-relaxed">
                                        Menara Kadin Indonesia Jl.H.R.Rasuna said Blok X-5.KAV. 2-3,
                                        Jakarta Selatan, DKI Jakarta
                                    </p>
                                </div>
                            </div>
                        </div>


                        {/* RIGHT */}
                        <div data-aos="fade-up" data-aos-delay="200" className="flex-1 flex flex-wrap items-start justify-between gap-x-10 lg:gap-x-16 gap-y-10 lg:pl-12">

                            <div className="w-fit">
                                <h4 className="text-lg font-semibold text-gray-900 mb-6">
                                    Services
                                </h4>
                                <ul className="space-y-4 text-lg font-medium text-gray-500">
                                    <li>
                                        <a href="/services/network" className="hover:text-primary">
                                            Network & Maintenance
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/services/software" className="hover:text-primary">
                                            Software Development
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/services/ai" className="hover:text-primary">
                                            Artificial Intelligence
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="w-fit">
                                <h4 className="text-lg font-semibold text-gray-900 mb-6">
                                    Products
                                </h4>
                                <ul className="space-y-4 text-lg font-medium text-gray-500">
                                    <li>
                                        <a href="#" className="hover:text-primary">
                                            KelolaLimbah
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-primary">
                                            PINTAR AI
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="w-fit">
                                <h4 className="text-lg font-semibold text-gray-900 mb-6">
                                    Social Media
                                </h4>
                                <ul className="space-y-4 text-lg font-medium text-gray-500">
                                    <li>
                                        <a href="#" className="hover:text-primary">
                                            Instagram
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-primary">
                                            LinkedIn
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* COPYRIGHT */}
                    <div className="pt-6 border-t border-gray-100 text-center">
                        <p className="text-xl text-gray-900 font-medium">
                            Copyright @ PowerNET {new Date().getFullYear()}. All rights reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
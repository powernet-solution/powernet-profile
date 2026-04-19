"use client";
import React from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "../ui/Button";

export const Hero = () => {
    return (
        <section className="relative pt-32 md:pt-40 overflow-hidden">


            <div className=" container mx-auto px-4 md:px-8  max-w-screen-3xl relative z-10">
                <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
                    <h1 data-aos="fade-up" className="text-3xl md:text-4xl  font-bold text-gray-900 leading-[1.15] mb-8 tracking-tight">
                        Secure. Scalable. Proven. IT Solutions{" "}
                        <br className="hidden lg:block" /> for the Modern
                        Enterprise.
                    </h1>
                    <div data-aos="fade-up" data-aos-delay="200">
                        <Button
                            variant="primary"
                            className="px-8 py-4 text-base rounded-full shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-0"
                            onClick={() => window.location.href = '/'}
                        >
                            <span>Free Consultation</span>
                            <i className="fi fi-rr-call-outgoing leading-none"></i>
                        </Button>
                    </div>
                </div>


            </div>
        </section>
    );
};

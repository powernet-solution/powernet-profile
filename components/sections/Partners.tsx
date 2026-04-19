import React from "react";
import NextImage from "next/image";
import { SectionHeader } from "../ui/SectionHeader";
import { PARTNERS } from "@/constants/content";

export const Partners = () => {
    const row1Order = ["Unilever", "BCA", "Kemenkes", "HUAWEI", "Bank Jakarta"];
    const row2Order = ["WIKA", "BERCA", "ISS", "KPI", "SDM POLRI"];

    const row1 = row1Order.map(name => PARTNERS.find(p => p.name === name)).filter(Boolean);
    const row2 = row2Order.map(name => PARTNERS.find(p => p.name === name)).filter(Boolean);

    return (
        <section className="py-20 border-b-2 border-gray-100 overflow-hidden">
            <div className="container w-fit mx-auto px-4 text-center max-w-[1920px] relative z-10">
                <SectionHeader
                    title="     Validated by Leaders in Government and Enterprise"
                    highlight="Leaders"
                    subtitle="We collaborate with key stakeholders to deploy secure, high-governance IT ecosystems"
                />

                <div className="mt-16 sm:mt-24 w-full flex flex-col gap-16">
                    <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 xl:gap-10 2xl:gap-16">
                        {row1.map((partner, idx) => (
                            <div
                                key={`row1-${idx}`}
                                data-aos="fade-up"
                                data-aos-delay={idx * 100}
                                className="relative w-[100px] h-[50px] sm:w-[130px] sm:h-[65px] md:w-[150px] md:h-[75px] lg:w-[170px] lg:h-[85px] xl:w-[220px] xl:h-[110px] 2xl:w-[280px] 2xl:h-[140px] transition-transform duration-300 hover:scale-105"
                            >
                                {partner && (
                                    <NextImage
                                        src={partner.logo}
                                        alt={partner.name}
                                        fill
                                        className="object-contain"
                                        priority={true}
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-4 ">
                        {row2.map((partner, idx) => (
                            <div
                                key={`row2-${idx}`}
                                data-aos="fade-up"
                                data-aos-delay={idx * 100}
                                className="relative w-[100px] h-[50px] sm:w-[130px] sm:h-[65px] md:w-[150px] md:h-[75px] lg:w-[170px] lg:h-[85px] xl:w-[220px] xl:h-[110px] 2xl:w-[280px] 2xl:h-[140px] transition-transform duration-300 hover:scale-105"
                            >
                                {partner && (
                                    <NextImage
                                        src={partner.logo}
                                        alt={partner.name}
                                        fill
                                        className="object-contain"
                                        priority={false}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

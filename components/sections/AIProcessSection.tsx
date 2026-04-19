"use client";

export function AIProcessSection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden bg-custom-dots">
            <div className="container mx-auto px-4 md:px-16 max-w-screen-2xl relative z-10">
                <div data-aos="fade-up" className="text-center mb-16 md:mb-24">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#9f3150] mb-6">From Raw Data to Scalable Intelligence</h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        We eliminate the <span className="font-bold">"Black Box"</span> approach by providing a transparent, end-to-end engineering framework designed for enterprise reliability.
                    </p>
                </div>

                <div className="relative flex flex-col md:flex-row items-center justify-between min-h-[500px]">
                    {/* SVG Curves Background */}
                    <div className="hidden md:block absolute inset-0 z-0 pointer-events-none">
                        <img data-aos="fade-right" data-aos-delay="400" src="/illustrations/curve-left.svg" alt="" className="absolute right-[50%] top-1/2 -translate-y-1/2 h-64 lg:h-80 object-right object-contain w-[40%]" />
                        <img data-aos="fade-left" data-aos-delay="400" src="/illustrations/curve-right.svg" alt="" className="absolute left-[50%] top-1/2 -translate-y-1/2 h-64 lg:h-80 object-left object-contain w-[40%]" />
                    </div>

                    {/* Left Cards */}
                    <div className="w-full md:w-[32%] flex flex-col gap-8 lg:gap-20 relative z-10">
                        {/* Card 1 */}
                        <div data-aos="fade-right" data-aos-delay="100" className="p-[10px] rounded-2xl bg-gradient-to-r from-[#fcb6c1] to-[#fde2e6] shadow-[0_4px_20px_rgba(252,182,193,0.4)]">
                            <div className="bg-white rounded-[14px] p-6 lg:p-8 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 lg:gap-6 h-full relative">
                                <div className="w-18 h-18 lg:w-24 lg:h-24 flex items-center justify-center shrink-0">
                                    <img src="/illustrations/ai/ai5.svg" alt="Icon" className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg mb-2">Data Acquisition</h3>
                                    <p className="text-sm md:text-base font-medium text-gray-700 leading-relaxed">Secure ingestion and integration of structured and unstructured data sources.</p>
                                </div>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div data-aos="fade-right" data-aos-delay="200" className="p-[10px] rounded-2xl bg-gradient-to-r from-[#fcb6c1] to-[#fde2e6] shadow-[0_4px_20px_rgba(252,182,193,0.4)]">
                            <div className="bg-white rounded-[14px] p-6 lg:p-8 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 lg:gap-6 h-full relative">
                                <div className="w-18 h-18 lg:w-24 lg:h-24 flex items-center justify-center shrink-0">
                                    <img src="/illustrations/ai/ai6.svg" alt="Icon" className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg mb-2">Model Training</h3>
                                    <p className="text-sm md:text-base font-medium text-gray-700 leading-relaxed">Custom-engineered frameworks and fine-tuning for domain-specific accuracy.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Center Logo */}
                    <div data-aos="zoom-in" data-aos-delay="300" className="hidden md:flex w-28 h-28 lg:w-32 lg:h-32 rounded-full bg-gradient-to-b from-[#f5a19b] to-[#fef2f2] shadow-[0_10px_40px_rgba(245,161,155,0.4)] items-center justify-center relative z-20 shrink-0 mx-20">
                        <img src="/illustrations/ai/aicenter.svg" alt="AI Center Brain" className="w-20 h-20 lg:w-22 lg:h-22 object-contain" />
                    </div>

                    {/* Right Cards */}
                    <div className="w-full md:w-[32%] flex flex-col gap-8 lg:gap-20 relative z-10 mt-12 md:mt-0">
                        {/* Card 3 */}
                        <div data-aos="fade-left" data-aos-delay="100" className="p-[10px] rounded-2xl bg-gradient-to-l from-[#fcb6c1] to-[#fde2e6] shadow-[0_4px_20px_rgba(252,182,193,0.4)]">
                            <div className="bg-white rounded-[14px] p-6 lg:p-8 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 lg:gap-6 h-full relative">
                                <div className="w-18 h-18 lg:w-24 lg:h-24 flex items-center justify-center shrink-0">
                                    <img src="/illustrations/ai/ai7.svg" alt="Icon" className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg mb-2">API Integration</h3>
                                    <p className="text-sm md:text-base font-medium text-gray-700 leading-relaxed">Lightweight, scalable APIs engineered for seamless legacy system communication.</p>
                                </div>
                            </div>
                        </div>
                        {/* Card 4 */}
                        <div data-aos="fade-left" data-aos-delay="200" className="p-[10px] rounded-2xl bg-gradient-to-l from-[#fcb6c1] to-[#fde2e6] shadow-[0_4px_20px_rgba(252,182,193,0.4)]">
                            <div className="bg-white rounded-[14px] p-6 lg:p-8 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 lg:gap-6 h-full relative">
                                <div className="w-18 h-18 lg:w-24 lg:h-24 flex items-center justify-center shrink-0">
                                    <img src="/illustrations/ai/ai8.svg" alt="Icon" className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg mb-2">Optimization Loop</h3>
                                    <p className="text-sm md:text-base font-medium text-gray-700 leading-relaxed">Continuous monitoring to prevent model drift and ensure long-term reliability.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

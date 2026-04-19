import { motion } from 'framer-motion';

const workflowSteps = [
    {
        id: "Discovery",
        title: "Discovery",
        icon: "fi-rr-bulb",
        desc: "We pinpoint operational bottlenecks and align them with your business goals to ensure a foundation built for long-term success."
    },
    {
        id: "Planning",
        title: "Planning",
        icon: "fi-rr-document-signed",
        desc: "We create a strategic roadmap and define the resources required to transform your infrastructure into a driver for growth."
    },
    {
        id: "Design",
        title: "Design",
        icon: "fi-rr-magic-wand",
        desc: "We simplify complex data into intuitive interfaces, enabling your team to make faster and better-informed decisions with ease."
    },
    {
        id: "Develop",
        title: "Develop",
        icon: "/icon/code.svg",
        desc: "We engineer scalable, high-performance solutions using rigorous standards to ensure maximum stability and enterprise security."
    },
    {
        id: "Testing",
        title: "Testing",
        icon: "fi-rr-time-check",
        desc: "We conduct rigorous quality audits to ensure every system is stable, secure, and performs at peak efficiency under any business demand."
    },
    {
        id: "Launch",
        title: "Launch",
        icon: "fi-rr-rocket",
        desc: "We manage a seamless transition to your live environment while providing the continuous support needed to maintain peak efficiency."
    }
];

export const Workflow = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                <div data-aos="fade-up" className="text-center max-w-none mx-auto mb-20">
                    <h2 className="text-2xl md:text-4xl font-semibold text-primary mb-6">
                        Strategic Development and Scalable Implementation
                    </h2>
                    <p className="text-gray-900 text-lg md:text-xl font-[400px] leading-relaxed max-w-none">
                        A data driven transparent workflow designed for quality assurance ensuring every line of code accelerates your strategic growth.
                    </p>
                </div>

                <div className="bg-white border border-gray-100 overflow-hidden  grid grid-cols-1 md:grid-cols-2">
                    {workflowSteps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial="initial"
                            whileHover="hover"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className={`p-10 md:p-12 border-gray-100 transition-colors duration-500 hover:bg-gray-50/50 group
                                ${index % 2 === 0 ? 'md:border-r' : ''} 
                                ${index < 4 ? 'border-b' : ''}
                                ${index === 4 ? 'border-b md:border-b-0' : ''}
                            `}
                        >
                            <motion.div 
                                variants={{
                                    hover: { scale: 1.05 }
                                }}
                                className="inline-flex items-center px-6 py-2 rounded-xl bg-primary-50 text-primary gap-3 mb-8 transition-colors duration-300 group-hover:bg-primary-100"
                            >
                                {step.icon.startsWith('/') ? (
                                    <motion.img 
                                        variants={{
                                            hover: { scale: 1.2, rotate: 12 }
                                        }}
                                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                        src={step.icon} 
                                        alt="" 
                                        className="w-5 h-5 md:w-6 md:h-6 object-contain" 
                                    />
                                ) : (
                                    <motion.i 
                                        variants={{
                                            hover: { scale: 1.2, rotate: 12 }
                                        }}
                                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                        className={`fi ${step.icon} text-xl flex items-center justify-center translate-y-[1px]`}
                                    ></motion.i>
                                )}
                                <span className="text-lg md:text-xl font-medium leading-none">{step.title}</span>
                            </motion.div>
                            <p className="text-gray-900 text-base leading-relaxed lg:text-xl transition-colors duration-300 group-hover:text-black">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

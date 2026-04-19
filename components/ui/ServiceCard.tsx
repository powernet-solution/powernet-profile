import { StaticImageData } from "next/image";

interface ServiceCardProps {
    title: string;
    description: string;
    imageSrc?: string | StaticImageData;
    imageAlt?: string;
    className?: string;
}

export function ServiceCard({ title, description, imageSrc, imageAlt, className }: ServiceCardProps) {
    const finalImageSrc = typeof imageSrc === 'string' ? imageSrc : imageSrc?.src;

    return (
        <div className={`relative rounded-2xl overflow-hidden aspect-[3/4] md:aspect-auto md:h-[580px] group flex flex-col justify-end border border-gray-100 ${className || ""}`}>
            {/* BACKGROUND IMAGE / PLACEHOLDER */}
            {finalImageSrc ? (
                <img src={finalImageSrc} alt={imageAlt || title} className="absolute inset-0 w-full h-full object-cover" />
            ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 group-hover:scale-105 transition-transform duration-700" />
            )}

            {/* Dark overlay to darken the image */}
            <div className="absolute inset-0 bg-black/40 z-[5]"></div>

            {/* Dark Red gradient layer - reduced height and deeper color */}
            <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#6b122b]/95 via-[#6b122b]/40 to-transparent z-10"></div>

            <div className="relative z-20 p-8 lg:p-10">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 flex items-center">{title}</h3>
                <div className="h-[100px] md:h-[120px]">
                    <p className="text-sm lg:text-sm text-gray-100 leading-relaxed font-regular">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}

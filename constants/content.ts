import {
    Layers,
    Network,
    Lightbulb,
    Activity,
    ShieldCheck,
    Globe,
} from "lucide-react";

export const NAV_LINKS = [
    { label: "Home", href: "/" },
    {
        label: "Services",
        href: "#services",
        hasDropdown: true,
        dropdownItems: [
            { label: "Artificial Intelligence", href: "/services/ai", icon: "fi fi-rr-physics" },
            { label: "Network & Maintenance", href: "/services/network", icon: "fi fi-rr-globe" },
            { label: "Software Development", href: "/services/software", icon: "fi fi-rr-laptop" },
        ]
    },
    {
        label: "Products",
        href: "/products",
        hasDropdown: true,
        dropdownItems: [
            { label: "Kelola Limbah", href: "/products?type=limbah", icon: "fi fi-rr-recycle" },
            { label: "Pintar AI", href: "/products?type=pintar", icon: "fi fi-rr-brain" },
        ]
    },
];

export const PRODUCTS_DATA = {
    limbah: {
        id: "limbah",
        name: "KelolaLimbah",
        displayName: "Kelola Limbah",
        headline: "Driving Net Zero through Integrated Waste Management",
        description: "KelolaLimbah automates industrial waste tracking to bridge the gap between operations and environmental accountability. We provide a high-performance infrastructure to ensure regulatory compliance and accelerate your transition toward a Net Zero future.",
        modules: [
            { title: "Net Zero Alignment", desc: "Precision tracking to meet corporate sustainability targets." },
            { title: "Automated Compliance", desc: "Streamlined reporting for rigorous regulatory standards." },
            { title: "Total Traceability", desc: "Full visibility from waste generation to final disposal." },
            { title: "Custom Development", desc: "Tailored modules engineered to fit your unique operational logic." }
        ],
        previewColor: "bg-[#FDFCF2]" // Soft yellow as seen in image
    },
    pintar: {
        id: "pintar",
        name: "PINTAR AI",
        displayName: "Pintar AI",
        headline: "AI-Driven Intelligence for Educational Personalization",
        description: "PINTAR is an instructional management ecosystem engineered to automate curriculum personalization in high-density classrooms. We eliminate administrative burnout by transforming static student data into precise, AI-generated differentiated lesson plans.",
        modules: [
            { title: "Automated Differentiation", desc: "Instant generation of lesson plans tailored to student competency profiles." },
            { title: "Tactical Analytics", desc: "Dashboards that convert raw data into actionable instructional recommendations." },
            { title: "Operational Efficiency", desc: "Reducing lesson planning time by up to 90% through AI automation." },
            { title: "Integrated Ecosystem", desc: "Real-time synchronization between student LMS and teacher management tools." }
        ],
        previewColor: "bg-[#F5F8FF]" // Soft blue/cool for AI
    }
};

export const PILLARS = [
    {
        id: 1,
        title: "Holistic Infrastructure",
        desc: "High-performance connectivity.",
        icon: "fi fi-rr-layers", // Class UIcons
    },
    {
        id: 2,
        title: "Systemic Integration",
        desc: "End-to-end technical architecture.",
        icon: "fi fi-rr-physics", // Class UIcons
    },
    {
        id: 3,
        title: "Agile Virtualization",
        desc: "Digital-first workspace solutions.",
        icon: "fi fi-rr-bulb",
    },
    {
        id: 4,
        title: "Operational Oversight",
        desc: "Real-time IP-based monitoring.",
        icon: "fi fi-rr-stats",
    },
    {
        id: 5,
        title: "Data Governance",
        desc: "Secure institutional repositories.",
        icon: "fi fi-rr-shield-check",
    },
    {
        id: 6,
        title: "Strategic Ecosystems",
        desc: "Centralized web-based platforms.",
        icon: "fi fi-rr-globe",
    },
];

export const PARTNERS = [
    { name: "BCA", logo: "/logos/partners/BCAlogo.svg" },
    { name: "BERCA", logo: "/logos/partners/BERCAlogo.svg" },
    { name: "Bank Jakarta", logo: "/logos/partners/BankJAKARTAlogo.svg" },
    { name: "HUAWEI", logo: "/logos/partners/HUAWEIlogo.svg" },
    { name: "ISS", logo: "/logos/partners/ISSlogo.svg" },
    { name: "KPI", logo: "/logos/partners/KPIlogo.svg" },
    { name: "Kemenkes", logo: "/logos/partners/Kemenkeslogo.svg" },
    { name: "SDM POLRI", logo: "/logos/partners/SDM POLRIlogo.svg" },
    { name: "Unilever", logo: "/logos/partners/Unileverlogo.svg" },
    { name: "WIKA", logo: "/logos/partners/WIKAlogo.svg" },
    { name: "Powernet Partner", logo: "/logos/partners/Defaultlogo.svg" },
];

export const CONTACT_INFO = {
    phone: "+62 812-9819-2099",
    email: "marketing@powernet.co.id",
    whatsapp: "https://wa.me/6281298192099?text=Halo!%20Terima%20kasih%20sudah%20menghubungi%20Powernet.%20%0AAda%20yang%20bisa%20kami%20bantu%20hari%20ini%3F%20Silakan%20tinggalkan%20pesan%20Anda%2C%20tim%20kami%20akan%20segera%20merespons%20secepat%20mungkin.",
    address: "Menara Kadin Indonesia Jl.H.R.Rasuna said Blok X-5.KAV. 2-3, Jakarta Selatan, DKI Jakarta",
    social: {
        instagram: "https://www.instagram.com/powernet.id",
        linkedin: "https://www.linkedin.com/company/powernetsolution/",
    }
};

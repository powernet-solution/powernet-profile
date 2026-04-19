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
        headline: "Strategic Intelligence for Mission-Critical Operations",
        description: "PINTAR AI integrates advanced computer vision and predictive analytics into your existing infrastructure. Designed for high-stakes environments, it transforms raw operational data into actionable strategic intelligence while ensuring total data sovereignty.",
        modules: [
            { title: "Cognitive Logic", desc: "Advanced neural networks for complex decision-making." },
            { title: "Industrial Vision", desc: "Real-time object detection and anomaly monitoring." },
            { title: "Secure Sovereignty", desc: "On-premise AI deployment ensuring maximum data privacy." },
            { title: "Strategic Oversight", desc: "Unified dashboard for enterprise-wide intelligence." }
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

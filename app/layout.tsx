import { Archivo } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Analytics } from '@vercel/analytics/react';
import { AOSProvider } from "@/components/providers/AOSProvider";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics } from "@next/third-parties/google";

const archivo = Archivo({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-archivo",
});

export const metadata: Metadata = {
    title: "PowerNET | Enterprise AI & Software Solutions",
    description: "PowerNET deploys custom-engineered AI models and robust software solutions built for high-stakes enterprise environments, ensuring total data sovereignty and zero workflow disruption.",
    keywords: ["AI Architecture", "Enterprise Software", "Machine Learning", "Workflow Automation", "PowerNET"],
    icons: {
        icon: "/logos/LOGO.svg",
        shortcut: "/logos/LOGO.svg",
        apple: "/logos/LOGO.svg",
    },
    openGraph: {
        title: "PowerNET | Enterprise AI & Software Solutions",
        description: "Scale your business with high-accuracy automation and custom software solutions designed for measurable growth.",
        type: "website",
        url: "https://powernet.co.id", // Placeholder unless I find the real one
        siteName: "PowerNET",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={archivo.variable} suppressHydrationWarning>
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdn-uicons.flaticon.com/2.1.0/uicons-regular-rounded/css/uicons-regular-rounded.css"
                />
            </head>
            <body className={`${archivo.variable} antialiased`}>
                <SmoothScrollProvider>
                    <AOSProvider>
                        {children}
                    </AOSProvider>
                </SmoothScrollProvider>
                <SpeedInsights />
                <Analytics />
                <GoogleAnalytics gaId="G-C5E33Q8PHK" />
            </body>
        </html>
    );
}

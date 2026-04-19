import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Partners } from "@/components/sections/Partners";
import { Services } from "@/components/sections/Services";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-primary selection:text-white max-w-[1920px] mx-auto overflow-x-hidden">
            <Navbar />
            <main>
                <div className="relative bg-white bg-custom-dots overflow-hidden">
                    <Hero />
                    <Partners />
                </div>
                <Services />
            </main>
            <Footer />
        </div>
    );
}

"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "../ui/Button";
import { NAV_LINKS } from "@/constants/content";
import Image from "next/image";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}
        >
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <div className="flex items-center justify-between">
                    <a href="/" className="flex-shrink-0 flex items-center gap-2">
                        <Image
                            src="/logos/LOGO.svg"
                            alt="PowerNet Logo"
                            width={150}
                            height={40}
                        />
                    </a>

                    <nav className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <div key={link.label} className="relative group">
                                <a
                                    href={link.href}
                                    className="text-base font-medium text-gray-700 hover:text-primary transition-colors flex items-center gap-1 py-4"
                                >
                                    {link.label}
                                    {link.hasDropdown && (
                                        <ChevronRight className="w-3 h-3 rotate-90 transition-transform group-hover:-rotate-90" />
                                    )}
                                </a>
                                {link.hasDropdown && link.dropdownItems && (
                                    <div className="absolute top-full right-0 lg:left-0 lg:right-auto mt-0 w-64 bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
                                        <div className="p-2 flex flex-col gap-1">
                                            {link.dropdownItems.map((item) => (
                                                <a
                                                    key={item.label}
                                                    href={item.href}
                                                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg transition-all group/item"
                                                >
                                                    <i className={`${item.icon} text-xl text-gray-900 group-hover/item:text-primary transition-colors`}></i>
                                                    <span className="text-sm font-medium text-gray-700 group-hover/item:text-primary transition-colors">
                                                        {item.label}
                                                    </span>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    <div className="hidden md:block">
                        <Button
                            variant="outline"
                            className="text-sm font-medium px-6 py-2.5 flex items-center justify-center gap-0"
                            onClick={() => window.location.href = '/'}
                        >
                            <span>Consult Now</span>
                            <i className="fi fi-rr-call-outgoing leading-none"></i>
                        </Button>
                    </div>

                    <button
                        className="md:hidden p-2 text-gray-900"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 p-4 flex flex-col gap-2">
                    {NAV_LINKS.map((link) => (
                        <div key={link.label} className="flex flex-col">
                            <a
                                href={link.href}
                                className="p-3 text-lg font-medium text-gray-800 hover:bg-gray-50 rounded-lg flex items-center justify-between transition-colors"
                            >
                                {link.label}
                                {link.hasDropdown && <ChevronRight className="w-4 h-4 rotate-90" />}
                            </a>
                            {link.hasDropdown && link.dropdownItems && (
                                <div className="flex flex-col ml-4 border-l-2 border-primary/20 pl-2 mt-1 gap-1">
                                    {link.dropdownItems.map((item) => (
                                        <a
                                            key={item.label}
                                            href={item.href}
                                            className="p-3 text-sm font-medium text-gray-900 hover:text-primary hover:bg-gray-50 rounded-lg flex items-center gap-3 transition-colors group/mobileItem"
                                        >
                                            <i className={`${item.icon} text-xl text-gray-900 group-hover/mobileItem:text-primary transition-colors`}></i>
                                            {item.label}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <Button
                        variant="primary"
                        className="w-full mt-4 flex items-center justify-center gap-0"
                        onClick={() => window.location.href = '/'}
                    >
                        <span>Consult Now</span>
                        <i className="fi fi-rr-call-outgoing leading-none"></i>
                    </Button>
                </div>
            )}
        </header>
    );
};

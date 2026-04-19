"use client";

import React, { useState } from "react";

export const EmailCaptureForm = () => {
    const [email, setEmail] = useState("");

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(`Email captured: ${email}`);
        alert(`Thank you! We will contact you soon.`);
        setEmail("");
    };

    return (
        <form
            onSubmit={handleFormSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-2xl mx-auto"
        >
            <div className="w-full sm:w-[400px]">
                <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="yourname@company.co.id"
                    className="w-full px-6 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-0 text-gray-800 placeholder:text-gray-400"
                />
            </div>
            <button
                type="submit"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#A62F54] hover:bg-[#8A2645] text-white px-6 py-3 rounded-lg font-semibold transition-all"
            >
                <span>Send Email</span>
                <img src="/icon/icon-wrapper-h.svg" alt="icon" className="w-5 h-5" />
            </button>
        </form>
    );
};

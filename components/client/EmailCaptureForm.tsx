"use client";

import React, { useState } from "react";

export const EmailCaptureForm = () => {
    const [email, setEmail] = useState("");

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to send email");
            }

            console.log(`Email captured: ${email}`);
            alert(`Thank you! We will contact you soon.`);
            setEmail("");
        } catch (error) {
            console.error("Submission error:", error);
            alert("Sorry, there was an error sending your request. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
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
                disabled={isSubmitting}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#A62F54] hover:bg-[#8A2645] text-white px-6 py-3 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <span>{isSubmitting ? "Sending..." : "Send Email"}</span>
                {!isSubmitting && <img src="/icon/icon-wrapper-h.svg" alt="icon" className="w-5 h-5" />}
            </button>
        </form>
    );
};

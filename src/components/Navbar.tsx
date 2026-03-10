"use client";

import { useState, useEffect } from "react";
import SayLogLogo from "./SayLogLogo";

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // If we scroll down past 80px, hide the navbar. If we scroll up, show it.
            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <nav
            className={`fixed top-0 left-0 z-50 w-full border-b border-stone-border bg-stone-bg/95 backdrop-blur-md transition-transform duration-300 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
                <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <SayLogLogo size={32} />
                    <span className="text-lg font-semibold tracking-tight text-stone-text">SayLog</span>
                </div>

                <div className="flex items-center gap-4 sm:gap-8">
                    <div className="hidden items-center gap-8 md:flex">
                        <a href="#how-it-works" className="text-sm font-medium text-stone-text-secondary hover:text-stone-text transition-colors">How it works</a>
                        <a href="mailto:rwelabs@gmail.com" className="text-sm font-medium text-stone-text-secondary hover:text-stone-text transition-colors">Contact</a>
                        <a href="#faq" className="text-sm font-medium text-stone-text-secondary hover:text-stone-text transition-colors">FAQ</a>
                    </div>
                    <a
                        href="#waitlist"
                        className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-dark shadow-sm"
                    >
                        Join waitlist
                    </a>
                </div>
            </div>
        </nav>
    );
}

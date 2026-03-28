"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import SayLogLogo from "./SayLogLogo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div
        className={`mx-auto max-w-6xl border-x border-b border-cream/10 transition-[background-color,backdrop-filter] duration-300 ${
          scrolled ? "nav-blur" : ""
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 md:px-10">
        {/* Logo */}
        <a
          href="/"
          className="flex cursor-pointer items-center gap-2"
          onClick={(e) => {
            if (isHome) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <SayLogLogo size={22} showBars={true} />
          <span className="text-[14px] font-semibold tracking-tight text-white sm:text-[15px]">
            SayLog
          </span>
        </a>

        {/* Right side */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href={isHome ? "#features" : "/#features"}
            className="hidden text-sm text-cream/50 transition-colors duration-[400ms] hover:text-cream md:block"
          >
            Features
          </a>
          <a
            href={isHome ? "#faq" : "/#faq"}
            className="hidden text-sm text-cream/50 transition-colors duration-[400ms] hover:text-cream md:block"
          >
            FAQ
          </a>
          <a
            href={isHome ? "#waitlist" : "/#waitlist"}
            className="rounded-full border border-cream/30 px-4 py-1.5 text-xs font-medium text-cream transition-all duration-300 hover:bg-cream hover:text-[#19181a] sm:px-5 sm:py-2 sm:text-sm"
          >
            Get early access
          </a>
        </div>
        </div>
      </div>
    </nav>
  );
}

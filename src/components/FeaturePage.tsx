"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import SayLogLogo from "./SayLogLogo";
import Footer from "./Footer";

interface FeatureSection {
  title: string;
  description: string;
  points?: string[];
}

interface FeaturePageProps {
  title: string;
  subtitle: string;
  heroDescription: string;
  sections: FeatureSection[];
}

export default function FeaturePage({ title, subtitle, heroDescription, sections }: FeaturePageProps) {
  return (
    <main className="min-h-screen bg-[#19181a]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-10 sm:pt-32 sm:pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-accent sm:mb-4 sm:text-sm">{subtitle}</p>
          <h1 className="max-w-3xl text-3xl font-semibold tracking-[-0.02em] leading-tight text-cream sm:text-4xl md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:mt-6 sm:text-lg">
            {heroDescription}
          </p>
        </div>
      </section>

      {/* Sections */}
      {sections.map((section, i) => (
        <section key={i} className="relative">
          <div className="mx-auto max-w-6xl border-t border-cream/10 px-5 py-10 sm:px-6 sm:py-16 md:px-10 md:py-24">
            <div className={`flex flex-col gap-6 sm:gap-8 md:flex-row md:items-start md:gap-16 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              <div className="flex-1">
                <h2 className="mb-3 text-xl font-semibold tracking-[-0.02em] text-cream sm:mb-4 sm:text-2xl md:text-3xl">
                  {section.title}
                </h2>
                <p className="text-sm leading-relaxed text-muted sm:text-base">
                  {section.description}
                </p>
                {section.points && (
                  <ul className="mt-5 space-y-2.5 sm:mt-6 sm:space-y-3">
                    {section.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-[13px] text-muted sm:gap-3 sm:text-sm">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="relative">
        <div className="mx-auto max-w-6xl border-t border-cream/10 px-5 py-14 text-center sm:px-6 sm:py-20 md:px-10 md:py-28">
          <h2 className="text-2xl font-semibold tracking-[-0.02em] text-cream sm:text-3xl md:text-4xl">
            Ready to try SayLog?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted sm:mt-4 sm:text-base">
            Join the waitlist and be the first to experience voice-first nutrition tracking.
          </p>
          <a
            href="/#waitlist"
            className="mt-6 inline-flex items-center gap-3 rounded-full bg-cream px-6 py-3 text-sm font-medium text-[#19181a] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,234,223,0.2)] hover:scale-[1.02] sm:mt-8 sm:px-8 sm:py-4 sm:text-[15px]"
          >
            Get early access
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function IndiaTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const ist = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
      const h = String(ist.getHours()).padStart(2, "0");
      const m = String(ist.getMinutes()).padStart(2, "0");
      setTime(`${h}:${m}`);
    };
    update();
    const id = setInterval(update, 10_000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;

  return (
    <p className="font-mono text-xs tracking-widest text-[#19181a]/50">
      {time}&ensp;INDIA
    </p>
  );
}

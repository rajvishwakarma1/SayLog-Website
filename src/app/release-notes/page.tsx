"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import SayLogLogo from "@/components/SayLogLogo";
import Footer from "@/components/Footer";

export default function ReleaseNotesPage() {
  return (
    <main className="min-h-screen bg-[#19181a]">
      <Navbar />

      {/* Header */}
      <section className="pt-24 pb-8 sm:pt-32 sm:pb-12 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 md:px-10">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-accent sm:mb-4 sm:text-sm">Changelog</p>
          <h1 className="text-3xl font-semibold tracking-[-0.02em] text-cream sm:text-4xl md:text-5xl">
            Release Notes
          </h1>
          <p className="mt-3 text-base text-muted sm:mt-4 sm:text-lg">
            What&apos;s new in SayLog. Every update, every improvement.
          </p>
        </div>
      </section>

      {/* v1.0.0 */}
      <section className="relative">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 md:px-10">
          <div className="border-t border-cream/10 py-8 sm:py-12 md:py-16">
            {/* Version header */}
            <div className="mb-8 flex flex-wrap items-baseline gap-3 sm:mb-10 sm:gap-4">
              <h2 className="text-xl font-semibold text-cream sm:text-2xl md:text-3xl">v1.0.0</h2>
              <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-[11px] font-medium text-accent sm:px-3 sm:py-1 sm:text-xs">Initial Release</span>
              <span className="text-xs text-muted sm:text-sm">Coming Soon</span>
            </div>

            <p className="mb-8 text-sm leading-relaxed text-muted sm:mb-10 sm:text-base">
              The first public release of SayLog &mdash; a voice-first nutrition tracker built from the ground up for Indian food and real eating habits. No typing, no barcodes, no database searching. Just speak what you ate and get instant nutritional data.
            </p>

            {/* Voice Meal Logging */}
            <div className="mb-8 sm:mb-10">
              <h3 className="mb-4 text-lg font-semibold text-cream">Voice Meal Logging</h3>
              <ul className="space-y-2.5 text-sm leading-relaxed text-muted">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Log meals by speaking naturally &mdash; no specific format or commands needed
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Full meal logged in under 5 seconds, including multi-item thalis
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Context-aware conversations &mdash; say &quot;also had chaas&quot; and it adds to your last meal
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Reference past meals with &quot;same as yesterday&quot; or &quot;my usual breakfast&quot;
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Mid-sentence corrections supported &mdash; &quot;actually, make that 3 rotis not 2&quot;
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Offline recording with automatic sync when connectivity returns
                </li>
              </ul>
            </div>

            {/* Language Support */}
            <div className="mb-8 sm:mb-10">
              <h3 className="mb-4 text-lg font-semibold text-cream">11 Indian Languages</h3>
              <p className="mb-4 text-sm text-muted">
                Hindi, Tamil, Telugu, Kannada, Malayalam, Bengali, Marathi, Gujarati, Punjabi, Odia, and English with Indian food vocabulary.
              </p>
              <ul className="space-y-2.5 text-sm leading-relaxed text-muted">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Automatic language detection &mdash; no manual switching
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Seamless code-switching between languages (Hinglish, Tanglish, Kanglish, etc.)
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Each language model trained on region-specific food names and cooking terms
                </li>
              </ul>
            </div>

            {/* Macro Breakdown */}
            <div className="mb-8 sm:mb-10">
              <h3 className="mb-4 text-lg font-semibold text-cream">Instant Macro Breakdown</h3>
              <ul className="space-y-2.5 text-sm leading-relaxed text-muted">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Calories, protein, carbs, fat, and fiber &mdash; per item and per meal
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Accounts for Indian cooking methods &mdash; tadka, ghee, frying, pressure cooking
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Portion intelligence with Indian measurements (katori, plate, glass, piece)
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Understands size modifiers &mdash; &quot;chhoti katori&quot;, &quot;badi plate&quot;, &quot;half&quot;, &quot;thoda&quot;
                </li>
              </ul>
            </div>

            {/* Food Database */}
            <div className="mb-8 sm:mb-10">
              <h3 className="mb-4 text-lg font-semibold text-cream">Indian Food Database</h3>
              <ul className="space-y-2.5 text-sm leading-relaxed text-muted">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  500+ Indian dishes with accurate nutritional data, built from scratch
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Covers North, South, East, and West Indian cuisines
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Home-cooked staples, street food, regional specialties, and festival foods
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  No barcode needed &mdash; works with home-cooked meals that have no packaging
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Ingredient-level calculation for unnamed or improvised dishes
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Recognizes multiple regional names for the same dish
                </li>
              </ul>
            </div>

            {/* Insights & Tracking */}
            <div className="mb-8 sm:mb-10">
              <h3 className="mb-4 text-lg font-semibold text-cream">Personalized Insights & Tracking</h3>
              <ul className="space-y-2.5 text-sm leading-relaxed text-muted">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Daily dashboard with running calorie total and macro split visualization
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Weekly trends &mdash; patterns across weekdays vs weekends
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Automatic weekly summary reports with top foods and calorie contributors
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Configurable goals &mdash; lose weight, build muscle, maintain, or eat healthier
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Pattern recognition &mdash; spots nutritional gaps and eating habit trends
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Logging streak counter and consistency tracking with milestone celebrations
                </li>
              </ul>
            </div>

            {/* Platform */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-cream">Platform</h3>
              <ul className="space-y-2.5 text-sm leading-relaxed text-muted">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Available on Android
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Offline voice recording with background sync
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Personal food profile that learns your regular meals and portion sizes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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

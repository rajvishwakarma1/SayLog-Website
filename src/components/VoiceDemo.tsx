"use client";

import { useState } from "react";

export default function VoiceDemo() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="px-6 pb-24 md:pb-40">
      <div className="mx-auto max-w-2xl">
        <div className="overflow-hidden rounded-[28px] bg-card">
          {/* ── Audio player bar ── */}
          <div className="flex items-center gap-4 border-b border-cream/5 p-5">
            <button
              onClick={() => setPlaying(!playing)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream text-[#19181a] transition-opacity hover:opacity-90"
              aria-label={playing ? "Pause" : "Play"}
            >
              {playing ? (
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.75 5.25a.75.75 0 01.75.75v12a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75zm10.5 0a.75.75 0 01.75.75v12a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75z" />
                </svg>
              ) : (
                <svg className="ml-0.5 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5.25 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L8.03 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653z" />
                </svg>
              )}
            </button>

            {/* Waveform */}
            <div className="flex h-8 flex-1 items-end gap-[2px]">
              {WAVE.map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-full ${
                    i < 20 ? "bg-cream" : "bg-cream/20"
                  }`}
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>

            <span className="shrink-0 font-mono text-xs text-muted">
              0:03
            </span>
          </div>

          {/* ── Transcript ── */}
          <div className="space-y-4 p-5">
            <div>
              <p className="mb-1 text-xs font-medium text-muted/70">You</p>
              <p className="text-[15px] leading-relaxed text-cream">
                &ldquo;Maine aaj subah 2 paratha aur dahi khaya&rdquo;
              </p>
            </div>
            <div>
              <p className="mb-1 text-xs font-medium text-muted/70">SayLog</p>
              <p className="text-[15px] leading-relaxed text-muted">
                Found 2&nbsp;items &mdash; 2&nbsp;Paratha (320&nbsp;kcal) and
                Dahi (60&nbsp;kcal). Total:&nbsp;380&nbsp;kcal logged to
                Breakfast.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const WAVE = [
  4, 8, 14, 8, 18, 26, 20, 14, 22, 34, 30, 18, 26, 38, 30, 22, 34, 42, 38,
  26, 18, 30, 22, 14, 10, 18, 26, 22, 14, 10, 8, 12, 18, 22, 30, 26, 18, 14,
  10, 6,
];

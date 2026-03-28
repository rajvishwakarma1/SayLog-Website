"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How does voice logging actually work?",
    a: "You tap the mic button, say what you ate in plain language - like \"2 roti with dal and a bowl of rice\" - and SayLog converts that into a full calorie and macro breakdown. No searching through databases or weighing food.",
  },
  {
    q: "Does it understand Indian food properly?",
    a: "Yes. SayLog is built specifically for Indian food - home-cooked meals, street food, mixed thalis, regional dishes. It understands portions the way Indians describe them: \"1 plate\", \"1 katori\", \"half a roti\", etc.",
  },
  {
    q: "Which languages are supported?",
    a: "SayLog supports 11 Indian languages: Hindi, English, Bengali, Tamil, Telugu, Gujarati, Kannada, Malayalam, Marathi, Punjabi, and Odia. You can speak in the language you're most comfortable with.",
  },
  {
    q: "Is this just calorie counting?",
    a: "No. SayLog tracks calories and macros, but the real value is in the insights - weekly trends, eating patterns, nutritional gaps, and health reports that help you make better food decisions over time.",
  },
  {
    q: "I've tried calorie tracking before and couldn't stick with it. How is this different?",
    a: "Most trackers fail because logging is tedious. SayLog takes about 5 seconds per meal - just speak and you're done. No typing, no photo scanning, no scrolling through food lists. Less friction means you actually keep using it.",
  },
  {
    q: "When will SayLog launch?",
    a: "We're currently building SayLog and will launch soon. Join the waitlist to get early access when we're ready.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-stone-border">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between py-5 text-left"
          >
            <span className="text-sm font-medium text-stone-text pr-8">{faq.q}</span>
            <svg
              className={`h-4 w-4 shrink-0 text-stone-text-tertiary transition-transform ${open === i ? "rotate-180" : ""
                }`}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          <div
            className={`grid transition-all duration-300 ease-in-out ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
          >
            <div className="overflow-hidden">
              <p className="pb-5 text-sm leading-relaxed text-stone-text-secondary">
                {faq.a}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

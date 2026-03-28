export default function ImpactQuote() {
  return (
    <section className="w-full py-24 md:py-32 relative overflow-hidden">
      <div className="mx-auto w-full max-w-4xl px-6 text-center">
        {/* Decorative quote mark */}
        <div className="quote-mark mb-6 select-none">&ldquo;</div>

        {/* Main quote */}
        <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold leading-snug tracking-tight text-stone-text mb-6">
          Every meal matters, but tracking shouldn&apos;t feel like work.
          Stop guessing your calories &mdash; start{" "}
          <span className="text-accent">speaking</span> what you ate.
        </h2>

        {/* Subtext */}
        <p className="text-stone-text-secondary text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          SayLog listens, understands, and logs for you in your language, so healthy eating becomes just a conversation.
        </p>

        {/* CTA */}
        <a
          href="#waitlist"
          className="inline-flex items-center gap-2 rounded-full bg-[#1c1917] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#292524] shadow-md hover:shadow-lg"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
          </svg>
          Join the waitlist
        </a>
      </div>
    </section>
  );
}

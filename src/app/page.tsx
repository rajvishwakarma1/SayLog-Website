import WaitlistForm from "@/components/WaitlistForm";
import FAQ from "@/components/FAQ";
import SayLogLogo from "@/components/SayLogLogo";

const languages = [
  "Hindi", "English", "Bengali", "Tamil", "Telugu",
  "Gujarati", "Kannada", "Malayalam", "Marathi", "Punjabi", "Odia",
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-stone-border bg-stone-bg/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <SayLogLogo size={32} />
            <span className="text-lg font-semibold tracking-tight">SayLog</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#how-it-works"
              className="text-sm font-medium text-stone-text-secondary transition-colors hover:text-stone-text"
            >
              How it works
            </a>
            <a
              href="mailto:rwelabs@gmail.com"
              className="text-sm font-medium text-stone-text-secondary transition-colors hover:text-stone-text"
            >
              Contact
            </a>
            <a
              href="#waitlist"
              className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
            >
              Join waitlist
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-12 pb-16 md:pt-16 md:pb-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-stone-border bg-white px-4 py-1.5 text-xs font-medium text-stone-text-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Coming soon — join the waitlist
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-stone-text sm:text-5xl md:text-6xl leading-[1.1]">
            Track calories by<br />
            <span className="text-accent">speaking</span>, not typing
          </h1>
          <p className="mt-6 text-lg text-stone-text-secondary leading-relaxed max-w-lg mx-auto">
            Say what you ate in your language. SayLog handles the rest - calories, macros, and nutrition insights. Built for Indian food.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="#waitlist"
              className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              Get early access
            </a>
            <a
              href="#how-it-works"
              className="rounded-lg border border-stone-border bg-white px-6 py-3 text-sm font-medium text-stone-text-secondary transition-colors hover:border-[--color-text-tertiary]"
            >
              See how it works
            </a>
          </div>
        </div>

        {/* Demo bubble */}
        <div className="mx-auto mt-16 max-w-md">
          <div className="rounded-2xl border border-stone-border bg-white p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full p-1.5">
                <SayLogLogo size={28} />
              </div>
              <div>
                <p className="text-xs font-medium text-stone-text-tertiary mb-1">You said:</p>
                <p className="text-sm text-stone-text font-medium leading-relaxed">
                  &ldquo;Lunch mein 1 plate pav bhaji khaya aur ek glass chaach&rdquo;
                </p>
              </div>
            </div>
            <div className="my-4 border-t border-dashed border-stone-border" />
            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-stone-text-secondary">Pav Bhaji (1 plate)</span>
                <span className="font-medium tabular-nums">~420 kcal</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-stone-text-secondary">Chaach (1 glass)</span>
                <span className="font-medium tabular-nums">~45 kcal</span>
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-stone-border pt-3 text-sm">
                <span className="font-semibold">Total</span>
                <span className="font-semibold text-accent">~465 kcal</span>
              </div>
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-stone-text-tertiary">Logged in under 5 seconds</p>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="border-t border-stone-border bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Three steps. That&apos;s it.</h2>
            <p className="mt-3 text-stone-text-secondary">
              No food databases to search. No photos to take. No barcodes to scan.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Speak what you ate",
                desc: "Tap the mic and say your meal naturally - \"I had 2 paratha with curd for breakfast.\"",
                icon: (
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                  </svg>
                ),
              },
              {
                step: "2",
                title: "SayLog breaks it down",
                desc: "Your meal is converted into calories, protein, carbs, and fat - automatically.",
                icon: (
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                  </svg>
                ),
              },
              {
                step: "3",
                title: "Track trends, not just calories",
                desc: "See weekly patterns, nutritional gaps, and insights that actually help you eat better.",
                icon: (
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.step} className="rounded-xl border border-stone-border-light bg-stone-bg p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-light text-accent">
                  {item.icon}
                </div>
                <h3 className="text-sm font-semibold text-stone-text">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-stone-border">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Tracking food is the easy part
            </h2>
            <p className="mt-3 text-stone-text-secondary">
              Understanding what your meals mean for your health - that&apos;s where SayLog helps.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Voice-first */}
            <div className="rounded-xl border border-stone-border bg-white p-6">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-stone-text">Voice-first logging</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-text-secondary">
                Speak the way you normally describe food. No need to search databases, scan barcodes, or measure portions. Just talk.
              </p>
            </div>

            {/* Languages */}
            <div className="rounded-xl border border-stone-border bg-white p-6">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                </svg>
              </div>
              <h3 className="font-semibold text-stone-text">11 Indian languages</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-text-secondary">
                Track in Hindi, Tamil, Bengali, Telugu, Gujarati, Kannada, Malayalam, Marathi, Punjabi, Odia, or English. Understands regional food names and phrasing.
              </p>
            </div>

            {/* Indian food */}
            <div className="rounded-xl border border-stone-border bg-white p-6">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                </svg>
              </div>
              <h3 className="font-semibold text-stone-text">Made for Indian food</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-text-secondary">
                Mixed thalis, home-cooked sabzi, street food, regional dishes - SayLog understands how India actually eats. Not just a generic Western food database.
              </p>
            </div>

            {/* Analytics */}
            <div className="rounded-xl border border-stone-border bg-white p-6">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                </svg>
              </div>
              <h3 className="font-semibold text-stone-text">Nutrition insights & reports</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-text-secondary">
                Daily summaries, weekly trends, and patterns that matter. See where your nutrition gaps are and what&apos;s working - not just raw numbers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why SayLog */}
      <section className="border-t border-stone-border bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Built for people who gave up on calorie tracking
            </h2>
            <p className="mt-3 text-stone-text-secondary">
              Most food trackers don&apos;t last past week two. SayLog is designed around one idea: remove enough friction and tracking becomes something you just do.
            </p>
          </div>
          <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-3">
            {[
              { stat: "~5s", label: "to log a meal" },
              { stat: "11", label: "Indian languages" },
              { stat: "0", label: "manual searching" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-3xl font-bold text-accent">{item.stat}</p>
                <p className="mt-1 text-sm text-stone-text-secondary">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Languages grid */}
          <div className="mx-auto mt-14 max-w-2xl">
            <p className="mb-4 text-center text-xs font-medium uppercase tracking-wider text-stone-text-tertiary">
              Supported languages
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {languages.map((lang) => (
                <span
                  key={lang}
                  className="rounded-full border border-stone-border bg-stone-bg px-3 py-1 text-xs font-medium text-stone-text-secondary"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-stone-border">
        <div className="mx-auto max-w-2xl px-6 py-20 md:py-24">
          <h2 className="text-2xl font-bold tracking-tight text-center sm:text-3xl mb-8">
            Frequently asked questions
          </h2>
          <FAQ />
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="border-t border-stone-border bg-white">
        <div className="mx-auto max-w-md px-6 py-20 md:py-24">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Get early access
            </h2>
            <p className="mt-3 text-stone-text-secondary">
              SayLog is launching soon. Join the waitlist and be the first to try it.
            </p>
          </div>
          <WaitlistForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-border">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <SayLogLogo size={24} />
              <span className="text-sm font-medium">SayLog</span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="mailto:rwelabs@gmail.com"
                className="text-sm font-medium text-stone-text-secondary transition-colors hover:text-stone-text"
              >
                Contact
              </a>
              <p className="text-xs text-stone-text-tertiary">
                &copy; {new Date().getFullYear()} SayLog
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

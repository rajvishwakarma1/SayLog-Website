import WaitlistForm from "@/components/WaitlistForm";
import FAQ from "@/components/FAQ";
import SayLogLogo from "@/components/SayLogLogo";
import Navbar from "@/components/Navbar";
import PhoneMockup from "@/components/PhoneMockup";
import AppCarousel from "@/components/AppCarousel";
import AboutCreator from "@/components/AboutCreator";
import LanguageGrid from "@/components/LanguageGrid";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden pt-20">
      {/* Nav */}
      <Navbar />

      {/* Hero */}
      <section className="mx-auto w-full max-w-6xl px-6 pt-12 pb-16 md:pt-20 md:pb-28 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
          {/* Text Content */}
          <div className="flex flex-1 w-full md:w-1/2 flex-col items-center justify-center space-y-8 text-center md:items-start md:text-left">
            {/* Pill */}
            <div className="inline-flex w-fit self-center md:self-start items-center rounded-full border border-stone-border bg-stone-50 px-3 py-1 text-sm text-stone-text shadow-sm">
              <span className="mr-2 flex h-2 w-2 rounded-full bg-[#82C394]"></span>
              Coming soon - join the waitlist
            </div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl lg:text-[5.5rem] leading-[1.1]">
              Track calories by <span className="text-accent">speaking</span>, not typing
            </h1>
            <p className="mt-6 text-lg text-stone-text-secondary leading-relaxed max-w-lg mx-auto md:mx-0">
              Say what you ate in your language. SayLog handles the rest - calories, macros, and nutrition insights. Built for Indian food.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a
                href="#waitlist"
                className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark shadow-sm hover:shadow"
              >
                Get early access
              </a>
              <a
                href="#how-it-works"
                className="rounded-lg border border-stone-border bg-white px-6 py-3 text-sm font-medium text-stone-text-secondary transition-colors hover:border-stone-400 hover:bg-stone-50"
              >
                See how it works
              </a>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="flex-1 w-full md:w-1/2 flex justify-center md:justify-end lg:pr-12 md:pl-8 mt-4 md:mt-0">
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="w-full border-t border-stone-border bg-white overflow-hidden relative">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-32">
          <div className="flex flex-col md:flex-row items-start gap-16 md:gap-24 relative z-10">
            {/* Left: Phone */}
            <div className="hidden md:flex w-full md:w-5/12 mx-auto md:mx-0 justify-center sticky top-24">
              <PhoneMockup variant="single" />
            </div>

            {/* Right: Content Steps */}
            <div className="w-full md:w-7/12 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-stone-text mb-16 leading-[1.1]">
                Calorie tracking<br />
                as easy as talking
              </h2>

              <div className="space-y-0">
                {/* Step 1 */}
                <div className="relative py-12 group">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 text-7xl md:text-[6rem] font-serif font-bold text-stone-text-tertiary/20 select-none z-0 transition-all duration-500 group-hover:text-stone-text-tertiary/40">
                    01
                  </div>
                  <div className="relative z-10 pr-24">
                    <h3 className="text-xl font-bold text-stone-text mb-3">Speak what you ate</h3>
                    <p className="text-stone-text-secondary leading-relaxed max-w-md">
                      Tap the mic and describe your meal &mdash; &quot;I had 2 paratha with curd for breakfast.&quot; That&apos;s it.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative border-t border-stone-border py-12 group">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 text-7xl md:text-[6rem] font-serif font-bold text-stone-text-tertiary/20 select-none z-0 transition-all duration-500 group-hover:text-stone-text-tertiary/40">
                    02
                  </div>
                  <div className="relative z-10 pr-24">
                    <h3 className="text-xl font-bold text-stone-text mb-3">SayLog breaks it down</h3>
                    <p className="text-stone-text-secondary leading-relaxed max-w-md">
                      Calories, protein, carbs, fat &mdash; calculated automatically from what you said.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative border-t border-stone-border py-12 group">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 text-7xl md:text-[6rem] font-serif font-bold text-stone-text-tertiary/20 select-none z-0 transition-all duration-500 group-hover:text-stone-text-tertiary/40">
                    03
                  </div>
                  <div className="relative z-10 pr-24">
                    <h3 className="text-xl font-bold text-stone-text mb-3">See what matters</h3>
                    <p className="text-stone-text-secondary leading-relaxed max-w-md">
                      Weekly patterns, gaps in nutrition, what&apos;s working. Not just numbers on a screen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="w-full border-t border-stone-border">
        <div className="mx-auto w-full max-w-5xl px-6 py-20 md:py-24">
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

      {/* See it in action Section */}
      <AppCarousel />

      {/* Why SayLog */}
      <section className="w-full border-t border-stone-border bg-white">
        <div className="mx-auto w-full max-w-5xl px-6 py-20 md:py-24">
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

          <LanguageGrid />
        </div>
      </section>

      <AboutCreator />

      {/* FAQ */}
      <section id="faq" className="border-t border-stone-border">
        <div className="mx-auto max-w-2xl px-6 py-20 md:py-24">
          <h2 className="text-2xl font-bold tracking-tight text-center sm:text-3xl mb-8">
            Frequently asked questions
          </h2>
          <FAQ />
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="w-full border-t border-stone-border bg-white mt-20 relative overflow-hidden">
        <div className="mx-auto w-full max-w-3xl px-6 py-24 text-center">
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
      <footer className="w-full border-t border-stone-border bg-white">
        <div className="mx-auto w-full max-w-5xl px-6 py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
            {/* Left Content: Brand & Tagline */}
            <div className="flex-1 max-w-md">
              <div className="flex items-center gap-2 mb-4">
                <div className="text-[#206A5D]">
                  <SayLogLogo size={22} />
                </div>
                <span className="text-lg font-medium text-stone-text tracking-tight">SayLog</span>
              </div>
              <p className="text-[15px] text-stone-text-secondary leading-relaxed mb-6">
                Track your nutrition effortlessly by speaking in any Indian language.
              </p>
              <p className="text-[13px] text-stone-text-tertiary">
                RWE Labs &copy; {new Date().getFullYear()}
              </p>
            </div>

            {/* Right Content: Contact Button */}
            <div className="shrink-0">
              <a
                href="mailto:rwelabs@gmail.com"
                className="group flex items-center justify-between gap-6 rounded-full bg-stone-100 hover:bg-stone-200 transition-all px-6 py-3.5"
              >
                <span className="text-[15px] font-medium text-stone-text">rwelabs@gmail.com</span>
                <svg className="h-4 w-4 text-stone-text-secondary transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5l7.5 7.5-7.5 7.5m-9-15l7.5 7.5-7.5 7.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

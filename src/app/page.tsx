"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import WaitlistForm from "@/components/WaitlistForm";
import SayLogLogo from "@/components/SayLogLogo";
import Footer from "@/components/Footer";
import DottedWorldMap from "@/components/DottedWorldMap";

/* ═══════════════════════════════════════════════
   Scroll-reveal hook
   ═══════════════════════════════════════════════ */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

/* ─── Flip word animation ─── */
const FLIP_WORDS = ["type", "click", "miss"];

function FlipWord() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % FLIP_WORDS.length);
        setVisible(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-flex" style={{ height: "1.15em" }}>
      <span className="invisible">click</span>
      <span
        className="absolute transition-opacity duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ opacity: visible ? 1 : 0 }}
      >
        {FLIP_WORDS[index]}
      </span>
    </span>
  );
}

/* ═══════════════════════════════════════════════
   Main Page
   ═══════════════════════════════════════════════ */
export default function Home() {
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;

    const syncPlayingState = () => setIsPlaying(!video.paused);

    const startPlayback = async () => {
      try {
        await video.play();
      } catch {
        // Autoplay can be blocked in some browser contexts.
      }
      syncPlayingState();
    };

    video.addEventListener("play", syncPlayingState);
    video.addEventListener("pause", syncPlayingState);
    startPlayback();

    return () => {
      video.removeEventListener("play", syncPlayingState);
      video.removeEventListener("pause", syncPlayingState);
    };
  }, []);

  const toggleHeroVideoPlayback = async () => {
    const video = heroVideoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
      } catch {
        return;
      }
      setIsPlaying(true);
      return;
    }

    video.pause();
    setIsPlaying(false);
  };

  const openHeroVideoFullscreen = async () => {
    const video = heroVideoRef.current;
    if (!video) return;

    if (video.requestFullscreen) {
      try {
        await video.requestFullscreen();
      } catch {
        // Ignore fullscreen request errors.
      }
      return;
    }

    const webkitVideo = video as HTMLVideoElement & {
      webkitEnterFullscreen?: () => void;
    };

    if (webkitVideo.webkitEnterFullscreen) {
      try {
        webkitVideo.webkitEnterFullscreen();
      } catch {
        // Ignore iOS fullscreen request errors.
      }
    }
  };

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      {/* Edge glows */}
      <div className="edge-glow-left" />
      <div className="edge-glow-right" />

      <Navbar />

      {/* ═══════ Hero (heading + phone side-by-side) ═══════ */}
      <section className="relative">
        <div className="mx-auto max-w-6xl border-b border-x border-cream/10">
          <div className="relative flex flex-col items-stretch md:flex-row">
            {/* Left - Text */}
            <div className="flex flex-1 flex-col justify-center border-b border-cream/10 px-6 pt-24 pb-14 sm:p-8 sm:pt-32 sm:pb-20 md:border-b-0 md:p-16 md:pt-40 md:pb-32">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_40%_at_50%_0%,rgba(239,214,189,0.04)_0%,transparent_100%)]" />
            <h1 className="animate-fade-in-up text-[2.5rem] font-semibold tracking-[-0.02em] leading-[1.08] text-cream sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              <span className="whitespace-nowrap">Never <FlipWord /></span>
              <br />
              <span className="whitespace-nowrap">your calories</span>
              <br />
              again.
            </h1>

            <p className="animate-fade-in-up delay-200 mt-5 max-w-xl text-base leading-relaxed text-muted sm:mt-6 sm:text-lg md:mx-0">
              SayLog tracks your nutrition by voice, helping you stay healthy even
              when you&apos;re busy.
            </p>

            <div className="animate-fade-in-up delay-300 mt-8 sm:mt-10">
              <a
                href="#waitlist"
                className="group inline-flex items-center gap-3 rounded-full bg-cream px-6 py-3 text-sm font-medium text-[#19181a] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,234,223,0.2)] hover:scale-[1.02] sm:px-8 sm:py-4 sm:text-[15px]"
              >
                Get early access
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

            {/* Right - Hero Video */}
            <div className="relative flex-1 flex items-center justify-center px-6 pt-8 pb-20 sm:p-8 sm:pt-28 sm:pb-8 md:p-16 md:pt-36">
              <div
                className="pointer-events-none absolute h-[300px] w-[300px] -top-[50px] left-1/2 -translate-x-1/2 rounded-full opacity-40 blur-[120px] sm:h-[500px] sm:w-[500px] sm:-top-[100px] sm:left-auto sm:translate-x-0 sm:-left-[100px]"
                style={{
                  background:
                    "linear-gradient(296deg, #5f4f6d 0%, #a7808b 74%, #d17e74 113%)",
                }}
              />

              <div className="group relative">
                <div className="relative w-[220px] aspect-[9/19.5] overflow-hidden rounded-[25px] border border-cream/15 shadow-2xl sm:w-[260px] md:w-[300px]">
                  <video
                    ref={heroVideoRef}
                    className="hero-video h-full w-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster="/mockups/home.png"
                  >
                    <source src="/hero-mockup.mp4" type="video/mp4" />
                  </video>
                </div>

                {/* Video Controls - horizontal on mobile, vertical on desktop */}
                <div className="absolute -bottom-16 left-1/2 flex -translate-x-1/2 gap-3 md:bottom-auto md:left-auto md:top-[85%] md:-translate-y-1/2 md:translate-x-0 md:flex-col md:-right-[3.5rem]">
                  <button
                    onClick={toggleHeroVideoPlayback}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/10 bg-cream/5 text-cream backdrop-blur-md transition-all hover:bg-cream/10 active:scale-95 sm:h-12 sm:w-12"
                    title={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <svg className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="6" y="4" width="4" height="16" />
                        <rect x="14" y="4" width="4" height="16" />
                      </svg>
                    ) : (
                      <svg className="h-4 w-4 translate-x-0.5 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 3l14 9-14 9V3z" />
                      </svg>
                    )}
                  </button>

                  <button
                    onClick={openHeroVideoFullscreen}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/10 bg-cream/5 text-cream backdrop-blur-md transition-all hover:bg-cream/10 active:scale-95 sm:h-12 sm:w-12"
                    title="Fullscreen"
                  >
                    <svg className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 3 21 3 21 9" />
                      <polyline points="9 21 3 21 3 15" />
                      <line x1="21" y1="3" x2="3" y2="21" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ Two-Column Features ═══════ */}
      <section id="features" className="relative">
        <div className="mx-auto max-w-6xl border-b border-x border-cream/10">
          <Reveal>
            <div className="grid md:grid-cols-2">
              <div className="border-b border-cream/10 px-6 py-8 sm:p-8 md:border-b-0 md:border-r md:p-16">
                <h2 className="mb-3 text-xl font-semibold tracking-[-0.02em] leading-tight text-cream sm:mb-4 sm:text-2xl md:text-3xl">
                  Speak what you ate
                </h2>
                <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
                  SayLog understands how you naturally describe food: in
                  Hindi, Tamil, Bengali, Telugu, and 7 more Indian languages. Just
                  tap, speak, and your meal is logged in under 5 seconds.
                </p>

                {/* Illustration: voice waveform */}
                <div className="mt-6 flex h-16 items-center justify-center gap-1 overflow-hidden sm:mt-8 sm:h-20 sm:gap-1.5">
                  {Array.from({ length: 24 }).map((_, i) => {
                    const baseHeight = [20, 35, 50, 70, 45, 60, 35, 55, 40, 25, 45, 65, 50, 30, 55, 40, 60, 35, 50, 25, 40, 55, 30, 45][i % 24];
                    return (
                      <div
                        key={i}
                        className="w-1 animate-waveform rounded-full bg-cream/20 sm:w-1.5"
                        style={{
                          height: `${baseHeight}px`,
                          animationDelay: `${i * 0.05}s`,
                          animationDuration: `${0.6 + (i % 5) * 0.2}s`,
                        }}
                      />
                    );
                  })}
                  <div className="ml-3 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cream shadow-lg sm:ml-4 sm:h-16 sm:w-16">
                    <SayLogLogo size={28} className="text-[#19181a]" />
                  </div>
                </div>
              </div>

              <div className="px-6 py-8 sm:p-8 md:p-16">
                <h2 className="mb-3 text-xl font-semibold tracking-[-0.02em] leading-tight text-cream sm:mb-4 sm:text-2xl md:text-3xl">
                  Never search a database
                </h2>
                <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
                  Instantly breaks down every meal into calories, protein, carbs,
                  and fat. No barcodes, no manual entry, it just works,
                  even for dal chawal, pani puri, and mixed thalis.
                </p>

                {/* Illustration: macro breakdown */}
                <div className="mt-6 grid grid-cols-3 gap-2 text-center sm:mt-8 sm:gap-3">
                  {[
                    { value: "24g", label: "Protein", color: "#34d399" },
                    { value: "45g", label: "Carbs", color: "#60a5fa" },
                    { value: "12g", label: "Fat", color: "#fbbf24" },
                  ].map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl bg-cream/[0.04] p-3 sm:p-4"
                    >
                      <span
                        className="text-lg font-bold sm:text-xl"
                        style={{ color: m.color }}
                      >
                        {m.value}
                      </span>
                      <p className="mt-1 text-[11px] text-cream/40">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Chat mockup below feature cards */}
          <Reveal>
            <div className="border-t border-cream/10 px-6 py-10 sm:p-8 md:p-16">
              <div className="flex flex-col items-center gap-8 sm:gap-12 md:flex-row md:items-stretch md:gap-20">
                {/* Left - Animated Chat Mockup */}
                <div className="flex-1 w-full max-w-lg">
                  <AnimatedChat />
                </div>

                {/* Right - Feature Explanation */}
                <div className="flex flex-1 flex-col justify-center">
                  <h3 className="mb-3 text-xl font-semibold tracking-[-0.02em] text-cream sm:mb-4 sm:text-2xl md:text-3xl">
                    Context-aware logging
                  </h3>
                  <p className="text-base leading-relaxed text-muted sm:text-lg">
                    SayLog understands natural conversation. It remembers what you 
                    already logged and intelligently updates your totals when you 
                    add more items later.
                  </p>
                  <ul className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
                    {[
                      "Multi-turn conversation",
                      "Automatic calorie updates",
                      "Protein & macro tracking",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-cream/70 sm:text-[15px]">
                        <div className="h-1.5 w-1.5 rounded-full bg-cream/30" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════ Make it work your way (with parallax phone) ═══════ */}
      <section className="relative">
        <div className="mx-auto max-w-6xl border-b border-x border-cream/10">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-stretch">
              <div className="flex flex-1 flex-col justify-center px-6 py-8 sm:p-8 md:p-16">
              <h2 className="mb-4 text-2xl font-semibold tracking-[-0.02em] leading-tight text-cream sm:mb-5 sm:text-3xl md:text-4xl lg:text-5xl">
                Make it work
                <br />
                your way
              </h2>
              <p className="max-w-md text-base leading-relaxed text-muted sm:text-lg">
                Tell SayLog about your diet goals and it adapts. It learns your
                eating patterns, remembers your preferences, and gets more
                accurate with every meal you log.
              </p>
            </div>

            <div className="relative flex flex-1 items-center justify-center px-6 py-8 sm:p-8 md:p-16">
              <div
                className="pointer-events-none absolute inset-0 m-auto h-[250px] w-[250px] rounded-full opacity-40 blur-[100px] sm:h-[400px] sm:w-[400px]"
                style={{
                  background:
                    "linear-gradient(296deg, #5f4f6d 0%, #a7808b 74%, #d17e74 113%)",
                }}
              />
              <GoalsCarousel />
            </div>
          </div>
        </Reveal>
        </div>
      </section>

      {/* ═══════ Stay in Control ═══════ */}
      <section className="relative">
        <div className="mx-auto max-w-6xl border-b border-x border-cream/10">
          <Reveal>
            <div className="flex flex-col-reverse md:flex-row md:items-stretch">
              {/* Left - Video */}
              <div className="relative flex flex-1 items-center justify-center px-6 py-8 sm:p-8 md:p-16">
                <div
                  className="pointer-events-none absolute inset-0 m-auto h-[250px] w-[250px] rounded-full opacity-30 blur-[120px] sm:h-[400px] sm:w-[400px]"
                  style={{
                    background:
                      "linear-gradient(296deg, #5f4f6d 0%, #a7808b 74%, #d17e74 113%)",
                  }}
                />
                <div className="relative w-[200px] aspect-[9/19.5] overflow-hidden rounded-[25px] border border-cream/15 shadow-2xl sm:w-[240px] md:w-[260px]">
                  <video
                    className="h-full w-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                  >
                    <source src="/stay-in-control.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>

              {/* Right - Text */}
              <div className="flex flex-1 flex-col justify-center px-6 py-8 sm:p-8 md:p-16">
                <h2 className="mb-4 text-2xl font-semibold tracking-[-0.02em] leading-tight text-cream sm:mb-5 sm:text-3xl md:text-4xl lg:text-5xl">
                  Stay in control
                </h2>
                <p className="max-w-md text-base leading-relaxed text-muted sm:text-lg">
                  SayLog keeps you updated with daily summaries, weekly trends, and
                  personalized insights. You decide when to adjust and when to let
                  SayLog handle it all.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════ Testimonials Marquee ═══════ */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl border-b border-x border-cream/10 pb-10 md:pb-16 overflow-hidden">
          <Reveal>
            <div className="px-6 py-8 text-center sm:p-8 md:p-16">
              <h2 className="text-xl font-semibold tracking-[-0.02em] text-cream sm:text-2xl md:text-3xl">
                Loved by early testers
              </h2>
            </div>
          </Reveal>

          <div className="relative">
            {/* Edge Fades: Masking effect */}
            <div 
              style={{
                maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)'
              }}
              className="marquee-track py-12 md:py-8"
            >
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <div key={`${t.title}-${i}`} className="testimonial-card">
                <p className="mb-2 font-semibold text-cream">{t.title}</p>
                <div className="mb-3 flex flex-wrap items-center gap-x-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span key={j} className="text-xs text-cream">
                      &#9733;
                    </span>
                  ))}
                  <span className="ml-2 text-xs text-muted/60">
                    {t.date} &middot; {t.author}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted">{t.body}</p>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* ═══════ FAQ ═══════ */}
      <section id="faq" className="relative">
        <div className="mx-auto max-w-6xl border-b border-x border-cream/10">
          <Reveal>
            <div className="mx-auto max-w-2xl px-6 py-8 sm:p-8 md:p-16">
            <h2 className="mb-8 text-center text-xl font-semibold tracking-[-0.02em] text-cream sm:mb-10 sm:text-2xl md:text-3xl">
              Frequently asked questions
            </h2>
            <FAQ />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════ Waitlist CTA ═══════ */}
      <section id="waitlist" className="relative">
        <div className="relative mx-auto max-w-6xl border-b border-x border-cream/10 overflow-hidden">
          <StarfieldBg />
          <Reveal>
            <div className="relative z-10 mx-auto max-w-lg px-6 py-10 text-center sm:p-8 md:p-16">
            <h2 className="mb-3 text-xl font-semibold tracking-[-0.02em] text-cream sm:text-2xl md:text-3xl">
              Get early access
            </h2>
            <p className="mb-8 text-muted">
              SayLog is launching soon. Join the waitlist and be the first to try
              it.
            </p>
            <WaitlistForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════ Closing CTA ═══════ */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 flex justify-center px-4 [mask-image:linear-gradient(to_bottom,transparent_0%,transparent_34%,black_58%,black_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,transparent_34%,black_58%,black_100%)]">
          <DottedWorldMap className="h-auto w-[min(1080px,95vw)] translate-y-8 text-cream/42 md:translate-y-10" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl border-x border-cream/10">
          <div className="mx-auto max-w-3xl px-6 pt-16 pb-24 text-center sm:p-8 sm:pt-20 sm:pb-32 md:p-16 md:pt-32 md:pb-40">
            <Reveal>
              <h2 className="text-3xl font-semibold tracking-[-0.02em] leading-tight text-cream sm:text-4xl md:text-5xl lg:text-6xl">
                Track effortlessly,
                <br />
                even when you&apos;re busy.
              </h2>

              <div className="mt-8 sm:mt-10">
                <a
                  href="#waitlist"
                  className="group inline-flex items-center gap-3 rounded-full bg-cream px-6 py-3 text-sm font-medium text-[#19181a] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,234,223,0.2)] hover:scale-[1.02] sm:px-8 sm:py-4 sm:text-[15px]"
                >
                  Get early access
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ─── Animated looping chat ─── */
const CHAT_MESSAGES = [
  { role: "user" as const, text: "\u201cMaine 2 roti aur paneer bhurji khaya\u201d" },
  { role: "bot"  as const, text: "Logged to Lunch: 2\u00d7 Roti (220 kcal) + Paneer Bhurji (280 kcal). Total: 500 kcal, Protein: 24g." },
  { role: "user" as const, text: "\u201cAur ek glass chaas bhi\u201d" },
  { role: "bot"  as const, text: "Added Chaas (1 glass): 45 kcal. Updated lunch total: 545 kcal." },
];

// Delays (ms) after which each message becomes visible, plus typing duration for bot
const MESSAGE_DELAYS   = [400, 2000, 3800, 5400];
const TYPING_DURATION  = 900; // how long typing indicator shows before bot bubble
const LOOP_RESET_DELAY = 2400; // pause after last message before resetting

function AnimatedChat() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [typingFor, setTypingFor]       = useState<number | null>(null); // index of bot msg being typed
  const [key, setKey]                   = useState(0); // bump to re-trigger loop

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    CHAT_MESSAGES.forEach((msg, i) => {
      if (msg.role === "bot") {
        // Show typing indicator TYPING_DURATION ms before the bubble appears
        timers.push(
          setTimeout(() => setTypingFor(i), MESSAGE_DELAYS[i] - TYPING_DURATION)
        );
      }
      timers.push(
        setTimeout(() => {
          setTypingFor(null);
          setVisibleCount(i + 1);
        }, MESSAGE_DELAYS[i])
      );
    });

    // Loop: reset after last message + pause
    const lastDelay = MESSAGE_DELAYS[CHAT_MESSAGES.length - 1] + LOOP_RESET_DELAY;
    timers.push(
      setTimeout(() => {
        setVisibleCount(0);
        setTypingFor(null);
        setKey((k) => k + 1);
      }, lastDelay)
    );

    return () => timers.forEach(clearTimeout);
  }, [key]);

  return (
    <div className="flex flex-col justify-end gap-3 h-[320px] sm:h-[280px] md:h-[260px]">
      {CHAT_MESSAGES.slice(0, visibleCount).map((msg, i) => (
        <ChatBubble key={`${key}-${i}`} role={msg.role} text={msg.text} />
      ))}

      {typingFor !== null && visibleCount <= typingFor && (
        <TypingIndicator key={`${key}-typing-${typingFor}`} />
      )}
    </div>
  );
}

function TypingIndicator() {
  return (
    <div
      className="mr-auto flex items-center gap-1.5 rounded-2xl rounded-bl-md bg-[#2a2a2c] px-4 py-3 animate-bubble-in"
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="block h-2 w-2 rounded-full bg-cream/50 animate-typing-dot"
          style={{ animationDelay: `${i * 0.18}s` }}
        />
      ))}
    </div>
  );
}

/* ─── Chat bubble ─── */
function ChatBubble({
  role,
  text,
}: {
  role: "user" | "bot";
  text: string;
}) {
  return (
    <div
      className={`max-w-[85%] rounded-2xl px-4 py-3 animate-bubble-in ${
        role === "user"
          ? "ml-auto rounded-br-md bg-cream/10 text-cream/90"
          : "mr-auto rounded-bl-md bg-[#2a2a2c] text-cream/70"
      }`}
    >
      <p className="text-[14px] leading-relaxed">{text}</p>
    </div>
  );
}

/* ─── Starfield background ─── */
function StarfieldBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const dpr = window.devicePixelRatio || 1;
    let w = 0, h = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // Stars
    const stars = Array.from({ length: 80 }, () => ({
      x: Math.random() * 2000,
      y: Math.random() * 1000,
      r: Math.random() * 1.2 + 0.3,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinkleOffset: Math.random() * Math.PI * 2,
    }));

    // Shooting stars
    interface Meteor {
      x: number; y: number; len: number; speed: number; opacity: number; angle: number; life: number; maxLife: number;
    }
    const meteors: Meteor[] = [];
    let nextMeteor = 30;

    // Ambient glow orbs
    const orbs = [
      { x: 0.15, y: 0.7, r: 250, color: [212, 132, 90] as number[], speed: 0.0003 },
      { x: 0.85, y: 0.8, r: 200, color: [180, 100, 70] as number[], speed: 0.0004 },
      { x: 0.5, y: 0.9, r: 300, color: [100, 80, 100] as number[], speed: 0.0002 },
    ];

    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // Ambient glow orbs
      for (const orb of orbs) {
        const ox = orb.x * w + Math.sin(time * orb.speed * 60) * 30;
        const oy = orb.y * h + Math.cos(time * orb.speed * 40) * 20;
        const gradient = ctx.createRadialGradient(ox, oy, 0, ox, oy, orb.r);
        gradient.addColorStop(0, `rgba(${orb.color[0]}, ${orb.color[1]}, ${orb.color[2]}, 0.06)`);
        gradient.addColorStop(1, `rgba(${orb.color[0]}, ${orb.color[1]}, ${orb.color[2]}, 0)`);
        ctx.fillStyle = gradient;
        ctx.fillRect(ox - orb.r, oy - orb.r, orb.r * 2, orb.r * 2);
      }

      // Stars with twinkle
      for (const star of stars) {
        const sx = star.x / 2000 * w;
        const sy = star.y / 1000 * h;
        const alpha = 0.3 + 0.4 * Math.sin(time * star.twinkleSpeed + star.twinkleOffset);
        ctx.beginPath();
        ctx.arc(sx, sy, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 234, 223, ${alpha})`;
        ctx.fill();
      }

      // Spawn meteors
      nextMeteor--;
      if (nextMeteor <= 0) {
        const angle = Math.PI * 0.2 + Math.random() * 0.15;
        meteors.push({
          x: Math.random() * w * 0.8,
          y: -10,
          len: 60 + Math.random() * 80,
          speed: 3 + Math.random() * 3,
          opacity: 0.6 + Math.random() * 0.3,
          angle,
          life: 0,
          maxLife: 60 + Math.random() * 40,
        });
        nextMeteor = 40 + Math.random() * 80;
      }

      // Draw meteors
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.x += Math.cos(m.angle) * m.speed;
        m.y += Math.sin(m.angle) * m.speed;
        m.life++;

        const progress = m.life / m.maxLife;
        const fadeIn = Math.min(progress * 4, 1);
        const fadeOut = progress > 0.6 ? 1 - (progress - 0.6) / 0.4 : 1;
        const alpha = m.opacity * fadeIn * fadeOut;

        const tailX = m.x - Math.cos(m.angle) * m.len;
        const tailY = m.y - Math.sin(m.angle) * m.len;

        const gradient = ctx.createLinearGradient(tailX, tailY, m.x, m.y);
        gradient.addColorStop(0, `rgba(255, 234, 223, 0)`);
        gradient.addColorStop(1, `rgba(255, 234, 223, ${alpha})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(m.x, m.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        if (m.life >= m.maxLife) meteors.splice(i, 1);
      }

      time++;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
    />
  );
}

/* ─── Footer column ─── */
function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="min-w-0">
      <p className="mb-4 whitespace-nowrap text-sm font-medium text-[#19181a]/50">{title}</p>
      <div className="space-y-2.5">
        {links.map((l) => {
          const isExternal = l.href.startsWith("http") || l.href.startsWith("mailto:");

          return (
            <a
              key={l.label}
              href={l.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="block whitespace-nowrap text-sm leading-relaxed text-[#19181a] transition-opacity duration-300 hover:opacity-60"
            >
              {l.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}

/* ─── India time display ─── */
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

/* ─── Phone: Conversation ─── */
function ConversationScreen() {
  return (
    <div className="flex h-full flex-col bg-[#1a1a1c] px-4 pt-14 pb-4 text-[11px]">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-[13px] font-bold text-cream">SayLog</span>
        <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] font-medium text-cream/60">
          Today
        </span>
      </div>

      <div className="flex-1 space-y-3 overflow-hidden">
        <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-cream/10 px-3 py-2">
          <p className="text-cream/90">
            &ldquo;2 paratha aur dahi khaya subah&rdquo;
          </p>
        </div>

        <div className="mr-auto max-w-[85%] rounded-2xl rounded-bl-md bg-[#242425] px-3 py-2.5">
          <p className="mb-1 text-[9px] font-medium text-cream/40">
            Breakfast logged
          </p>
          <div className="space-y-0.5 text-cream/70">
            <div className="flex justify-between">
              <span>2&times; Paratha</span>
              <span className="text-cream/40">320 kcal</span>
            </div>
            <div className="flex justify-between">
              <span>Dahi (1 bowl)</span>
              <span className="text-cream/40">60 kcal</span>
            </div>
          </div>
          <div className="mt-1.5 border-t border-cream/5 pt-1">
            <span className="font-medium text-cream/80">Total: 380 kcal</span>
          </div>
        </div>

        <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-cream/10 px-3 py-2">
          <p className="text-cream/90">
            &ldquo;lunch mein dal chawal&rdquo;
          </p>
        </div>

        <div className="mr-auto max-w-[85%] rounded-2xl rounded-bl-md bg-[#242425] px-3 py-2.5">
          <p className="mb-1 text-[9px] font-medium text-cream/40">
            Lunch logged
          </p>
          <div className="space-y-0.5 text-cream/70">
            <div className="flex justify-between">
              <span>Dal (1 bowl)</span>
              <span className="text-cream/40">180 kcal</span>
            </div>
            <div className="flex justify-between">
              <span>Rice (1 plate)</span>
              <span className="text-cream/40">340 kcal</span>
            </div>
          </div>
          <div className="mt-1.5 border-t border-cream/5 pt-1">
            <span className="font-medium text-cream/80">Total: 520 kcal</span>
          </div>
        </div>
      </div>

      <div className="mt-3 flex justify-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cream shadow-lg">
          <svg
            className="h-4 w-4 text-[#19181a]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 14a3 3 0 003-3V6a3 3 0 00-6 0v5a3 3 0 003 3z" />
            <path d="M19 11a1 1 0 10-2 0 5 5 0 01-10 0 1 1 0 10-2 0 7 7 0 006 6.93V20H8a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07A7 7 0 0019 11z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ─── Make it work your way: rotating screenshot carousel ─── */
const CAROUSEL_IMAGES = [
  "/make-it-work-your-way-mockups/1.jpeg",
  "/make-it-work-your-way-mockups/2.jpeg",
  "/make-it-work-your-way-mockups/3.jpeg",
];
const TOTAL = CAROUSEL_IMAGES.length;
const TRANSITION = "transform 0.9s cubic-bezier(0.22,1,0.36,1), opacity 0.9s cubic-bezier(0.22,1,0.36,1), filter 0.9s cubic-bezier(0.22,1,0.36,1)";

function GoalsCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % TOTAL);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="relative w-[200px] sm:w-[260px] md:w-[300px]"
      style={{ aspectRatio: "9 / 19.5" }}
    >
      {CAROUSEL_IMAGES.map((imageSrc, i) => {
        const isActive = i === active;
        const isPrev = i === (active - 1 + TOTAL) % TOTAL;

        return (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              transform: isActive
                ? "scale(1) translateY(0)"
                : isPrev
                ? "scale(0.92) translateY(4%)"
                : "scale(0.92) translateY(-4%)",
              opacity: isActive ? 1 : 0,
              filter: isActive ? "blur(0px)" : "blur(2px)",
              zIndex: isActive ? 10 : 5,
              transition: TRANSITION,
              willChange: "transform, opacity, filter",
            }}
          >
            <div className="relative h-full w-full overflow-hidden rounded-[25px] border border-cream/15 bg-[#ece9e6] shadow-2xl">
              <img
                src={imageSrc}
                alt={`SayLog app screen ${i + 1}`}
                className="h-full w-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
                draggable={false}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ─── Phone: Goals ─── */
function GoalsScreen() {
  return (
    <div className="flex h-full flex-col bg-[#1a1a1c] px-4 pt-14 pb-4 text-[11px]">
      <p className="mb-4 text-[13px] font-bold text-cream">Your Goals</p>

      <div className="space-y-3">
        <div className="rounded-xl bg-[#242425] p-3">
          <div className="mb-1 flex items-center justify-between">
            <span className="font-medium text-cream/80">Daily Target</span>
            <span className="text-[9px] text-cream/40">Active</span>
          </div>
          <span className="text-[18px] font-bold text-cream">2,100 kcal</span>
        </div>

        <div className="rounded-xl bg-[#242425] p-3">
          <p className="mb-2 font-medium text-cream/80">Macro Split</p>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="rounded-lg bg-cream/5 p-2">
              <span className="text-[14px] font-bold text-emerald-400">
                30%
              </span>
              <p className="mt-0.5 text-[8px] text-cream/40">Protein</p>
            </div>
            <div className="rounded-lg bg-cream/5 p-2">
              <span className="text-[14px] font-bold text-blue-400">45%</span>
              <p className="mt-0.5 text-[8px] text-cream/40">Carbs</p>
            </div>
            <div className="rounded-lg bg-cream/5 p-2">
              <span className="text-[14px] font-bold text-amber-400">25%</span>
              <p className="mt-0.5 text-[8px] text-cream/40">Fat</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-[#242425] p-3">
          <p className="mb-2 font-medium text-cream/80">Languages</p>
          <div className="flex flex-wrap gap-1.5">
            {["Hindi", "Tamil", "English"].map((l) => (
              <span
                key={l}
                className="rounded-full bg-cream/10 px-2 py-0.5 text-[9px] text-cream/70"
              >
                {l}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-[#242425] p-3">
          <p className="mb-1 font-medium text-cream/80">Diet Type</p>
          <span className="text-cream/60">Vegetarian</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Phone: Daily Summary ─── */
function DailySummaryScreen() {
  return (
    <div className="flex h-full flex-col bg-[#1a1a1c] px-4 pt-14 pb-4 text-[11px]">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-[13px] font-bold text-cream">Today</span>
        <span className="text-[9px] text-cream/40">Mon, 24 Mar</span>
      </div>

      <div className="mb-4 flex items-center justify-center">
        <div className="relative flex h-24 w-24 items-center justify-center">
          <svg className="absolute inset-0" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="rgba(255,234,223,0.1)"
              strokeWidth="7"
            />
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="#d17e74"
              strokeWidth="7"
              strokeDasharray={`${0.68 * 2 * Math.PI * 42} ${
                2 * Math.PI * 42
              }`}
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className="text-center">
            <span className="text-[18px] font-bold text-cream">1,420</span>
            <p className="text-[8px] text-cream/40">of 2,100</p>
          </div>
        </div>
      </div>

      <div className="mb-4 grid grid-cols-3 gap-2 text-center">
        <div>
          <span className="text-[12px] font-bold text-emerald-400">68g</span>
          <p className="text-[8px] text-cream/40">Protein</p>
        </div>
        <div>
          <span className="text-[12px] font-bold text-blue-400">195g</span>
          <p className="text-[8px] text-cream/40">Carbs</p>
        </div>
        <div>
          <span className="text-[12px] font-bold text-amber-400">42g</span>
          <p className="text-[8px] text-cream/40">Fat</p>
        </div>
      </div>

      <div className="flex-1 space-y-2 overflow-hidden">
        {[
          { meal: "Breakfast", kcal: 380 },
          { meal: "Lunch", kcal: 520 },
          { meal: "Snack", kcal: 175 },
          { meal: "Dinner", kcal: 345 },
        ].map((m) => (
          <div key={m.meal} className="rounded-lg bg-[#242425] p-2.5">
            <div className="flex items-center justify-between">
              <span className="font-medium text-cream/70">{m.meal}</span>
              <span className="text-cream/40">{m.kcal} kcal</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Phone: Tracking Chat ─── */
function TrackingChatScreen() {
  return (
    <div className="flex h-full flex-col bg-[#1a1a1c] px-4 pt-14 pb-4 text-[11px]">
      <div className="mb-4">
        <span className="text-[13px] font-bold text-cream">SayLog</span>
      </div>

      <div className="flex-1 space-y-3 overflow-hidden">
        <div className="mr-auto max-w-[85%] rounded-2xl rounded-bl-md bg-[#242425] px-3 py-2">
          <p className="text-cream/70">
            Good evening! You&apos;ve had 1,420 kcal today. 680 kcal left for
            dinner.
          </p>
        </div>

        <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-cream/10 px-3 py-2">
          <p className="text-cream/90">
            &ldquo;2 roti, sabzi, aur salad&rdquo;
          </p>
        </div>

        <div className="mr-auto max-w-[85%] rounded-2xl rounded-bl-md bg-[#242425] px-3 py-2.5">
          <p className="mb-1 text-[9px] font-medium text-cream/40">
            Dinner logged
          </p>
          <div className="space-y-0.5 text-cream/70">
            <div className="flex justify-between">
              <span>2&times; Roti</span>
              <span className="text-cream/40">220</span>
            </div>
            <div className="flex justify-between">
              <span>Mixed Sabzi</span>
              <span className="text-cream/40">150</span>
            </div>
            <div className="flex justify-between">
              <span>Green Salad</span>
              <span className="text-cream/40">45</span>
            </div>
          </div>
        </div>

        <div className="mr-auto max-w-[85%] rounded-2xl rounded-bl-md bg-[#242425] px-3 py-2">
          <p className="text-cream/70">
            Great day! 1,835 kcal with 88g protein. 5-day streak!
          </p>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2 rounded-full bg-[#242425] px-3 py-2">
        <span className="flex-1 text-cream/30">Tap to speak...</span>
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-cream">
          <svg
            className="h-3 w-3 text-[#19181a]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 14a3 3 0 003-3V6a3 3 0 00-6 0v5a3 3 0 003 3z" />
            <path d="M19 11a1 1 0 10-2 0 5 5 0 01-10 0 1 1 0 10-2 0 7 7 0 006 6.93V20H8a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07A7 7 0 0019 11z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ─── Testimonials data ─── */
const TESTIMONIALS = [
  {
    title: "actually works for indian food",
    date: "2 weeks ago",
    author: "Priya_S",
    body: "tried so many apps but nothing actually works for indian food. with saylog i just say '2 roti and dal' and it's done. finally don't have to search for 'lentil soup' anymore lol.",
  },
  {
    title: "way faster than typing",
    date: "Mar 15",
    author: "FitWithRahul",
    body: "logging used to take forever. now i just speak in hindi while walking back from the gym and it's all there. works way better than i expected tbh.",
  },
  {
    title: "effortless",
    date: "1 week ago",
    author: "Meera.K",
    body: "actually sticking to my diet for once. it's so much easier when you don't have to type everything out. literally took 5 seconds to log my lunch today.",
  },
  {
    title: "finally, natural portions",
    date: "Mar 20",
    author: "HealthyAakash",
    body: "it actually understands what a 'katori' or 'plate' is. other apps are so confusing with grams and portions. this is just natural.",
  },
  {
    title: "lifesaver for busy days",
    date: "3 days ago",
    author: "Sneha_Fit",
    body: "wasn't sure if the voice thing would work but it's actually really fast. i log everything in like 30 seconds now. definitely a lifesaver for busy days.",
  },
];

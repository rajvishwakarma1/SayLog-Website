import Image from "next/image";

const screens = [
    { src: "/mockups/home.png", alt: "SayLog Tracker View" },
    { src: "/mockups/analytics.png", alt: "SayLog Analytics View" },
    { src: "/mockups/streak.png", alt: "SayLog Streaks View" },
];

export default function AppCarousel() {
    return (
        <section className="border-t border-stone-border bg-stone-50 overflow-hidden py-24 md:py-32">
            <div className="mx-auto max-w-7xl px-6 mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-stone-text mb-4">
                    See it in action
                </h2>
                <p className="text-stone-text-secondary max-w-2xl mx-auto text-lg">
                    Everything you need to stay on track, beautifully designed for your daily routine.
                </p>
            </div>

            {/* Carousel Container */}
            <div className="relative flex w-full overflow-hidden py-10 -my-10">
                {/* 
                    We render the list of screens twice to create a seamless infinite scroll effect.
                    The animation shifts the container left by exactly 50% (the width of one set of screens).
                */}
                <div className="flex w-max animate-scroll hover:[animation-play-state:paused] gap-6 px-3 md:gap-8 md:px-4">
                    {[...screens, ...screens].map((screen, index) => (
                        <div
                            key={index}
                            className="relative w-[280px] h-[580px] md:w-[320px] md:h-[660px] shrink-0 rounded-[2.5rem] bg-stone-bg border-[8px] border-[#2A2A2A] shadow-inner overflow-hidden flex flex-col items-center justify-center transition-transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] duration-500"
                        >
                            <Image
                                src={screen.src}
                                alt={screen.alt}
                                fill
                                className="object-cover object-top"
                                sizes="(max-width: 768px) 280px, 320px"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        /* Shift left by half the total width of the inner flex container to seamlessly loop */
                        transform: translateX(calc(-50% - 12px)); /* Subtracted half the gap size */
                    }
                }
                .animate-scroll {
                    animation: scroll 30s linear infinite;
                }
                @media (min-width: 768px) {
                    @keyframes scroll-md {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(calc(-50% - 16px));
                        }
                    }
                    .animate-scroll {
                        animation: scroll-md 40s linear infinite;
                    }
                }
            `}</style>
        </section>
    );
}

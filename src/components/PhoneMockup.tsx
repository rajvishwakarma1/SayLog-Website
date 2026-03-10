
export default function PhoneMockup({ variant = "dual" }: { variant?: "dual" | "single" }) {
    if (variant === "single") {
        return (
            <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[380px] aspect-[1/2] mt-8 mb-8 md:mt-0 md:mb-0">
                <div className="absolute inset-0 z-10 shadow-2xl rounded-[2.5rem]">
                    <PhoneContent />
                </div>
            </div>
        );
    }

    return (
        <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[380px] aspect-[1/2] perspective-1000 mt-12 mb-8 md:mt-0 md:mb-0">
            {/* Background Phone */}
            <div className="absolute inset-0 -translate-x-6 sm:-translate-x-12 translate-y-8 -rotate-6 scale-95 opacity-80 blur-[0.5px] transition-transform duration-700 ease-out hover:-translate-x-16 hover:-rotate-12 hover:scale-95">
                <PhoneContent />
            </div>

            {/* Foreground Phone */}
            <div className="absolute inset-0 z-10 shadow-2xl rounded-[2.5rem] transition-transform duration-700 ease-out hover:-translate-y-2 hover:rotate-2 hover:scale-105">
                <PhoneContent />
            </div>
        </div>
    );
}

function PhoneContent() {
    return (
        <div className="h-full w-full rounded-[2.5rem] border-[8px] border-[#2A2A2A] bg-stone-bg overflow-hidden relative shadow-inner flex flex-col text-stone-text">
            {/* App Content */}
            <div className="flex-1 overflow-hidden pt-10 pb-24 px-4 bg-stone-bg/50 backdrop-blur-3xl relative z-20">

                {/* Header */}
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex-1 flex justify-start text-accent-dark min-w-0">
                        <span className="text-lg sm:text-xl font-serif font-bold tracking-tight truncate">SayLog</span>
                    </div>

                    <div className="shrink-0 flex justify-center px-1">
                        <button className="rounded-full border border-stone-border bg-white px-2.5 sm:px-3 py-1 text-xs sm:text-sm font-semibold shadow-sm text-stone-text flex items-center">
                            Today
                        </button>
                    </div>

                    <div className="flex-1 flex justify-end items-center gap-1 sm:gap-2 min-w-0">
                        <div className="flex items-center gap-1 sm:gap-1.5 rounded-full border border-stone-border bg-white px-1.5 sm:px-2 py-0.5 sm:py-1 shadow-sm shrink-0">
                            <div className="flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-[#206A5D] text-white">
                                <svg className="h-2.5 w-2.5 sm:h-3 sm:w-3" viewBox="0 0 24 24" fill="none" strokeWidth={3} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </div>
                            <span className="text-[10px] sm:text-sm font-bold pr-0.5 sm:pr-1 text-stone-text">1</span>
                        </div>
                        {/* Profile Placeholder */}
                        <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-amber-100 flex items-center justify-center overflow-hidden border border-amber-200 shrink-0">
                            <svg className="h-4 w-4 sm:h-5 sm:w-5 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12 11.25a3 3 0 110-6 3 3 0 010 6zM5.96 18.067C6.865 16.486 9.296 15 12 15s5.135 1.486 6.04 3.067a8.212 8.212 0 01-12.08 0z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Meals Loop */}
                <div className="space-y-8">
                    {/* Breakfast */}
                    <section>
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-[#403F3D]">Breakfast</h3>
                            <svg className="h-4 w-4 text-stone-text-tertiary" viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                            </svg>
                        </div>

                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3 text-[13px] font-medium">
                                <span className="text-emerald-700 flex items-center gap-1">🍗 18g</span>
                                <span className="text-blue-600 flex items-center gap-1">🍞 100g</span>
                                <span className="text-yellow-600 flex items-center gap-1">🥑 55g</span>
                            </div>
                            <span className="rounded-full border border-stone-border px-2 py-0.5 text-xs font-semibold text-stone-text-secondary bg-stone-50">
                                850 kcal
                            </span>
                        </div>

                        <div className="space-y-4">
                            <MealItem title="Chole Bhature" desc="1 serving (2 Bhature + Chole)" cals="850 kcal" />
                        </div>
                    </section>

                    {/* Dinner */}
                    <section>
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-[#403F3D]">Dinner</h3>
                            <svg className="h-4 w-4 text-stone-text-tertiary" viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                            </svg>
                        </div>

                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3 text-[13px] font-medium">
                                <span className="text-emerald-700 flex items-center gap-1">🍗 706g</span>
                                <span className="text-blue-600 flex items-center gap-1">🍞 103g</span>
                                <span className="text-yellow-600 flex items-center gap-1">🥑 112g</span>
                            </div>
                            <span className="rounded-full border border-stone-border px-2 py-0.5 text-xs font-semibold text-stone-text-secondary bg-stone-50">
                                4360 kcal
                            </span>
                        </div>

                        <div className="space-y-4">
                            <MealItem title="Chicken Breast" desc="2000 grams" cals="3300 kcal" />
                            <MealItem title="Curd" desc="400 grams" cals="240 kcal" />
                            <MealItem title="Chicken Breast" desc="200 grams" cals="330 kcal" />
                            <MealItem title="Pani Puri" desc="2 plates" cals="490 kcal" />
                        </div>
                    </section>
                </div>
            </div>

            {/* Floating Bottom Bar Container */}
            <div className="absolute bottom-3 sm:bottom-4 left-3 right-3 sm:left-4 sm:right-4 z-30 flex items-end gap-1.5 sm:gap-2 pointer-events-none w-[calc(100%-24px)] sm:w-[calc(100%-32px)]">
                {/* Macros pill */}
                <div className="flex-1 min-w-0 flex items-center justify-between gap-0.5 sm:gap-2 rounded-full border border-stone-border bg-white shadow-lg px-2 sm:px-4 py-2.5 sm:py-3.5 pointer-events-auto whitespace-nowrap overflow-hidden">
                    <span className="flex items-center gap-0.5 sm:gap-1 text-[10px] sm:text-[13px] font-bold tracking-tight shrink-0">
                        🔥 5210 <span className="text-stone-300 mx-0.5 font-normal">·</span>
                    </span>
                    <span className="text-[10px] sm:text-[13px] font-bold tracking-tight shrink-0">
                        <span className="text-blue-500">C</span> 203 <span className="text-stone-300 mx-0.5 font-normal">·</span>
                    </span>
                    <span className="text-[10px] sm:text-[13px] font-bold tracking-tight shrink-0">
                        <span className="text-[#206A5D]">P</span> 724 <span className="text-stone-300 mx-0.5 font-normal">·</span>
                    </span>
                    <span className="text-[10px] sm:text-[13px] font-bold tracking-tight shrink-0 text-ellipsis overflow-hidden">
                        <span className="text-amber-500">F</span> 167
                    </span>
                </div>

                {/* Action Button */}
                <button className="shrink-0 flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#E5734A] text-white shadow-lg pointer-events-auto">
                    <svg className="w-4 h-4 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 14a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3zm5-3a1 1 0 0 1 2 0 7 7 0 0 1-14 0 1 1 0 0 1 2 0 5 5 0 0 0 10 0zm-6 8v3h2v-3a7.978 7.978 0 0 1-2 0z" />
                    </svg>
                </button>
            </div>

            {/* Hide scrollbar styles */}
            <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
        </div>
    );
}

function MealItem({ title, desc, cals }: { title: string, desc: string, cals: string }) {
    return (
        <div className="border-t border-stone-border/60 pt-3 flex justify-between items-start">
            <div>
                <div className="font-medium text-stone-text mb-0.5">{title}</div>
                <div className="text-xs text-stone-text-tertiary">{desc}</div>
            </div>
            <div className="font-bold text-[#E5734A] tracking-tight">{cals}</div>
        </div>
    );
}

"use client";

import { useState, useEffect, useRef } from "react";

const languages = [
    { name: "Hindi", translation: "मैंने 2 आलू के पराठे और 1 गिलास छाछ पी" },
    { name: "English", translation: "I had 2 aloo parathas and 1 glass of buttermilk" },
    { name: "Bengali", translation: "আমি ২টো আলুর পরোটা আর ১ গ্লাস ঘোল খেয়েছি" },
    { name: "Tamil", translation: "நான் 2 ஆலு பரோட்டாவும் 1 கிளாஸ் மோரும் குடித்தேன்" },
    { name: "Telugu", translation: "నేను 2 ఆలూ పరాఠాలు మరియు 1 గ్లాసు మజ్జిగ తీసుకున్నాను" },
    { name: "Gujarati", translation: "મેં ૨ આલુ પરોઠા અને ૧ ગ્લાસ છાશ પીધી" },
    { name: "Kannada", translation: "ನಾನು 2 ಆಲೂ ಪರಾಠ ಮತ್ತು 1 ಗ್ಲಾಸ್ ಮಜ್ಜಿಗೆ ತಿಂದೆ" },
    { name: "Malayalam", translation: "ഞാൻ 2 ആലു പറാത്തയും 1 ഗ്ലാസ് മോരും കഴിച്ചു" },
    { name: "Marathi", translation: "मी २ आलू पराठे आणि १ ग्लास ताक प्यायलो" },
    { name: "Punjabi", translation: "ਮੈਂ 2 ਆਲੂ ਦੇ ਪਰੌਂਠੇ ਅਤੇ 1 ਗਲਾਸ ਲੱਸੀ ਪੀਤੀ" },
    { name: "Odia", translation: "ମୁଁ ୨ଟି ଆଳୁ ପରଟା ଏବଂ ୧ ଗ୍ଲାସ ଘୋଳ ଦହି ପିଇଲି" },
];

export default function LanguageGrid() {
    const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const tooltipRefs = useRef<Record<string, HTMLDivElement | null>>({});
    const [tooltipStyles, setTooltipStyles] = useState<Record<string, React.CSSProperties>>({});

    // Close tooltips if tapping anywhere else on the screen natively
    useEffect(() => {
        function handleClickOutside(event: MouseEvent | TouchEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setActiveTooltip(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, []);

    // Calculate dynamic positioning for active tooltips to prevent screen edge cutoff
    useEffect(() => {
        if (!activeTooltip || !tooltipRefs.current[activeTooltip]) return;

        const tooltipEl = tooltipRefs.current[activeTooltip];
        if (!tooltipEl) return;

        const rect = tooltipEl.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const padding = 16; // Minimum distance from screen edge

        let newStyles: React.CSSProperties = {
            left: "50%",
            transform: "translateX(-50%)"
        };

        // Check right edge overflow
        if (rect.right > viewportWidth - padding) {
            const overflowAmount = rect.right - (viewportWidth - padding);
            newStyles = {
                left: `calc(50% - ${overflowAmount}px)`,
                transform: "translateX(-50%)"
            };
        }
        // Check left edge overflow
        else if (rect.left < padding) {
            const underflowAmount = padding - rect.left;
            newStyles = {
                left: `calc(50% + ${underflowAmount}px)`,
                transform: "translateX(-50%)"
            };
        }

        setTooltipStyles({ [activeTooltip]: newStyles });
    }, [activeTooltip]);

    const handleToggle = (langName: string, e: React.MouseEvent | React.TouchEvent) => {
        // Only intercept events if the user is explicitly interacting to toggle (prevent default to avoid double-firing on touch)
        if (e.type === 'touchstart') {
            e.preventDefault();
        }
        setActiveTooltip(current => current === langName ? null : langName);
    };

    return (
        <div className="mx-auto mt-14 max-w-2xl" ref={containerRef}>
            <p className="mb-4 text-center text-xs font-medium uppercase tracking-wider text-stone-text-tertiary">
                <span className="hidden md:inline">Supported languages (hover over any language)</span>
                <span className="inline md:hidden">Supported languages (tap any language)</span>
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
                {languages.map((lang) => {
                    const isActive = activeTooltip === lang.name;

                    return (
                        <div key={lang.name} className="group relative flex justify-center">
                            <button
                                type="button"
                                className={`cursor-pointer rounded-full border border-stone-border px-3 py-1 text-xs font-medium transition-colors hover:border-stone-400 focus:outline-none ${isActive ? 'bg-stone-200 text-stone-text border-stone-400' : 'bg-stone-bg text-stone-text-secondary hover:text-stone-text'
                                    }`}
                                onClick={(e) => handleToggle(lang.name, e)}
                                onTouchStart={(e) => handleToggle(lang.name, e)}
                                // We add mouse enter/leave to preserve the native hover feel strictly on desktop devices alongside clicks
                                onMouseEnter={() => {
                                    // Only update on hover if we are likely on a desktop (helps avoid sticky hover states on mobile)
                                    if (window.matchMedia('(hover: hover)').matches) {
                                        setActiveTooltip(lang.name)
                                    }
                                }}
                                onMouseLeave={() => {
                                    if (window.matchMedia('(hover: hover)').matches) {
                                        setActiveTooltip(null)
                                    }
                                }}
                            >
                                {lang.name}
                            </button>

                            {/* Tooltip */}
                            <div
                                ref={(el) => { tooltipRefs.current[lang.name] = el; }}
                                className={`pointer-events-none absolute bottom-full mb-2 w-max max-w-[240px] md:max-w-[280px] transition-all duration-200 bg-[#2A2A2A] text-white text-xs px-3 py-2 rounded-lg shadow-xl text-center z-50 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
                                    }`}
                                style={isActive ? tooltipStyles[lang.name] || { left: "50%", transform: "translateX(-50%)" } : { left: "50%", transform: "translateX(-50%)" }}
                            >
                                &quot;{lang.translation}&quot;
                                {/* Tooltip Arrow - Force arrow to always point to its parent wrapper center explicitly */}
                                <div className="absolute top-full border-4 border-transparent border-t-[#2A2A2A]"
                                    style={{
                                        // The tooltip wrapper shifts around to avoid edges, but the physical arrow should always point straight down
                                        // to the center of the trigger button (which is relatively 50% left of the tooltip wrapper *before* any dynamic shift offset).
                                        // We reset its horizontal positioning by calculating the inverse of the wrapper's translation payload
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        marginLeft: isActive && tooltipStyles[lang.name]?.left?.toString().includes('calc')
                                            ? tooltipStyles[lang.name].left?.toString()?.includes('+')
                                                ? `-${tooltipStyles[lang.name].left?.toString()?.split('+ ')[1].replace('px)', '')}px`
                                                : `${tooltipStyles[lang.name].left?.toString()?.split('- ')[1].replace('px)', '')}px`
                                            : '0px'
                                    }}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

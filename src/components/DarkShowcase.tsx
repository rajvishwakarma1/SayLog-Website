export default function DarkShowcase() {
  return (
    <section className="w-full pt-0 pb-16 md:pb-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Left Card: Multi-Platform */}
          <div className="relative rounded-[1.75rem] bg-[#1c1917] p-8 sm:p-10 md:p-12 overflow-hidden min-h-[420px] flex flex-col">
            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight mb-3">
                Android &amp; iOS
              </h3>
              <p className="text-stone-400 text-sm sm:text-base leading-relaxed max-w-sm">
                SayLog is everywhere you need it to be. Track your meals on the go, at home, or at the gym.
              </p>
            </div>

            {/* Mock devices */}
            <div className="relative flex-1 mt-8 flex items-end justify-center gap-4">
              {/* Phone 1 - Android */}
              <div className="relative w-[140px] sm:w-[160px] h-[260px] sm:h-[300px] rounded-[1.5rem] border-[4px] border-[#3a3a3a] bg-stone-bg overflow-hidden shadow-2xl transform -rotate-3 translate-y-4">
                <div className="absolute top-0 inset-x-0 h-5 bg-[#3a3a3a] flex items-center justify-center">
                  <div className="w-8 h-1.5 rounded-full bg-[#555]" />
                </div>
                <div className="pt-5 px-2 pb-2 h-full">
                  <div className="bg-stone-100 rounded-lg h-full p-2 flex flex-col gap-1.5">
                    <div className="text-[8px] font-bold text-[#206A5D] tracking-tight">SayLog</div>
                    <div className="text-[6px] font-bold uppercase tracking-widest text-stone-500">Breakfast</div>
                    <div className="flex justify-between items-center">
                      <span className="text-[7px] text-stone-700">Idli Sambar</span>
                      <span className="text-[7px] font-bold text-[#E5734A]">320 kcal</span>
                    </div>
                    <div className="border-t border-stone-200" />
                    <div className="flex justify-between items-center">
                      <span className="text-[7px] text-stone-700">Filter Coffee</span>
                      <span className="text-[7px] font-bold text-[#E5734A]">95 kcal</span>
                    </div>
                    <div className="border-t border-stone-200" />
                    <div className="text-[6px] font-bold uppercase tracking-widest text-stone-500 mt-1">Lunch</div>
                    <div className="flex justify-between items-center">
                      <span className="text-[7px] text-stone-700">Rice + Dal Fry</span>
                      <span className="text-[7px] font-bold text-[#E5734A]">520 kcal</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone 2 - iOS */}
              <div className="relative w-[150px] sm:w-[170px] h-[280px] sm:h-[320px] rounded-[1.5rem] border-[4px] border-[#3a3a3a] bg-stone-bg overflow-hidden shadow-2xl z-10 transform rotate-2 -translate-y-2">
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-20" />
                <div className="pt-6 px-2.5 pb-2 h-full">
                  <div className="bg-stone-100 rounded-lg h-full p-2.5 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-bold text-[#206A5D] tracking-tight">SayLog</span>
                      <span className="text-[7px] bg-stone-200 rounded-full px-1.5 py-0.5 font-semibold">Today</span>
                    </div>
                    <div className="flex gap-2 text-[7px]">
                      <span className="text-emerald-600">🍗 42g</span>
                      <span className="text-blue-500">🍞 180g</span>
                      <span className="text-amber-500">🥑 35g</span>
                    </div>
                    <div className="border-t border-stone-200" />
                    <div className="text-[6px] font-bold uppercase tracking-widest text-stone-500">Dinner</div>
                    <div className="flex justify-between items-center">
                      <span className="text-[7px] text-stone-700">Butter Chicken</span>
                      <span className="text-[7px] font-bold text-[#E5734A]">680 kcal</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[7px] text-stone-700">2 Roti</span>
                      <span className="text-[7px] font-bold text-[#E5734A]">240 kcal</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[7px] text-stone-700">Raita</span>
                      <span className="text-[7px] font-bold text-[#E5734A]">85 kcal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative gradient glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] bg-accent/10 rounded-full blur-[80px]" />
          </div>

          {/* Right Card: Voice Recording in Action */}
          <div className="relative rounded-[1.75rem] bg-[#1c1917] p-8 sm:p-10 md:p-12 overflow-hidden min-h-[420px] flex flex-col">
            {/* Phone mockup with recording screen */}
            <div className="relative flex-1 flex items-center justify-center">
              <div className="relative w-[200px] sm:w-[240px] h-[380px] sm:h-[440px] rounded-[2rem] border-[5px] border-[#3a3a3a] bg-stone-bg overflow-hidden shadow-2xl">
                {/* Dynamic Island */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[70px] h-[20px] bg-black rounded-full z-20" />

                {/* Screen content — recording state */}
                <div className="h-full w-full flex flex-col">
                  {/* Top section — light */}
                  <div className="flex-[2] bg-stone-50 pt-8 px-4 flex flex-col">
                    <div className="flex items-center gap-1 mb-2">
                      <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-[9px] text-red-500 font-medium">Recording</span>
                    </div>
                    <p className="text-stone-800 text-[11px] sm:text-[13px] leading-relaxed">
                      <span className="text-stone-400">You said:</span><br />
                      &quot;Maine lunch mein 2 roti, rajma, aur salad khaya&quot;
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      <span className="text-[7px] bg-accent/10 text-accent px-1.5 py-0.5 rounded-full font-medium">2 Roti</span>
                      <span className="text-[7px] bg-accent/10 text-accent px-1.5 py-0.5 rounded-full font-medium">Rajma</span>
                      <span className="text-[7px] bg-accent/10 text-accent px-1.5 py-0.5 rounded-full font-medium">Salad</span>
                    </div>
                  </div>

                  {/* Bottom section — dark recording UI */}
                  <div className="flex-[1] bg-[#111] flex flex-col items-center justify-center gap-3 px-4">
                    <p className="text-white text-[11px] sm:text-sm font-semibold text-center">
                      Listening...
                    </p>
                    {/* Waveform */}
                    <div className="flex items-center gap-[3px] h-6">
                      {[3, 5, 8, 12, 16, 12, 8, 14, 10, 6, 4, 7, 11, 15, 11, 7, 4].map((h, i) => (
                        <div
                          key={i}
                          className="w-[3px] rounded-full bg-[#E5734A]"
                          style={{
                            height: `${h}px`,
                            animation: `pulse 1.2s ease-in-out ${i * 0.08}s infinite alternate`,
                          }}
                        />
                      ))}
                    </div>
                    {/* Timer + controls */}
                    <div className="flex items-center gap-4">
                      <span className="text-stone-400 text-[10px] font-mono">00:03.21</span>
                      <button className="h-8 w-8 rounded-full bg-[#E5734A] flex items-center justify-center">
                        <svg className="h-3.5 w-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 14a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Caption */}
            <div className="text-center mt-6 relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Just speak.
              </h3>
              <p className="text-stone-400 text-sm mt-1">
                SayLog turns it into nutrition data.
              </p>
            </div>

            {/* Decorative glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-[#E5734A]/8 rounded-full blur-[100px]" />
          </div>
        </div>
      </div>

      {/* Pulse animation for waveform */}
      <style>{`
        @keyframes pulse {
          0% { transform: scaleY(0.6); }
          100% { transform: scaleY(1.2); }
        }
      `}</style>
    </section>
  );
}

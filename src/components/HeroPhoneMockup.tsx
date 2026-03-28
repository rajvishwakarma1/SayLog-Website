"use client";

import { useRef, useState } from "react";

export default function HeroPhoneMockup() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px]">
      {/* Phone Frame */}
      <div className="relative aspect-[9/19.2] w-full rounded-[2.8rem] border-[6px] border-[#1c1917] bg-[#1c1917] shadow-2xl overflow-hidden">
        {/* Dynamic Island */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 w-[90px] h-[26px] bg-black rounded-full" />

        {/* Screen */}
        <div className="absolute inset-[2px] rounded-[2.4rem] overflow-hidden bg-stone-100">
          {/* Video */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="/mockups/home.png"
          >
            <source
              src="https://videos.pexels.com/video-files/5765826/5765826-uhd_1440_2560_30fps.mp4"
              type="video/mp4"
            />
          </video>

          {/* Subtle overlay gradient for premium look */}
          <div className="absolute inset-0 pointer-events-none rounded-[2.4rem] ring-1 ring-black/5 ring-inset" />
        </div>
      </div>

      {/* Caption below phone */}
      <p className="text-center mt-6 text-accent font-semibold text-base sm:text-lg tracking-tight">
        Your meals.<br />
        Tracked instantly.
      </p>

      {/* Floating Controls — right side of phone */}
      <div className="absolute right-[-48px] bottom-16 flex flex-col gap-2">
        {/* Fullscreen */}
        <button
          onClick={toggleFullscreen}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-md border border-stone-border/50 text-stone-text-secondary hover:text-stone-text hover:bg-white transition-all"
          aria-label="Fullscreen"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
          </svg>
        </button>
        {/* Play/Pause */}
        <button
          onClick={togglePlay}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-md border border-stone-border/50 text-stone-text-secondary hover:text-stone-text hover:bg-white transition-all"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75.75v12a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75zm10.5 0a.75.75 0 01.75.75v12a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

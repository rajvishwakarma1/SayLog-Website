"use client";

import { useState } from "react";
import PhoneInput from "./PhoneInput";

export default function WaitlistForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    device: "" as "" | "android" | "ios",
  });
  const [dialCode, setDialCode] = useState("+91");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.device) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          phone: form.phone ? `${dialCode}${form.phone}` : "",
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setForm({ name: "", email: "", phone: "", device: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-cream/20 bg-cream/[0.06] p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cream/10">
          <svg className="h-6 w-6 text-cream" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-cream">You&apos;re on the list!</h3>
        <p className="mt-2 text-sm text-cream/60">
          We&apos;ll reach out when SayLog is ready for you.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-stone-text mb-1.5">
          Name <span className="text-red-400">*</span>
        </label>
        <input
          id="name"
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Your name"
          className="w-full rounded-lg border border-stone-border bg-cream/[0.06] px-4 py-2.5 text-base sm:text-sm text-cream placeholder:text-stone-text-tertiary outline-none transition-colors focus:border-[--color-accent] focus:ring-1 focus:ring-[--color-accent]"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-stone-text mb-1.5">
          Email <span className="text-red-400">*</span>
        </label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="you@example.com"
          className="w-full rounded-lg border border-stone-border bg-cream/[0.06] px-4 py-2.5 text-base sm:text-sm text-cream placeholder:text-stone-text-tertiary outline-none transition-colors focus:border-[--color-accent] focus:ring-1 focus:ring-[--color-accent]"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-stone-text mb-1.5">
          Phone <span className="text-stone-text-tertiary font-normal">(optional)</span>
        </label>
        <PhoneInput
          value={form.phone}
          onChange={(val) => setForm({ ...form, phone: val })}
          onDialCodeChange={(code) => setDialCode(code)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-stone-text mb-2.5">
          Your device <span className="text-red-400">*</span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setForm({ ...form, device: "android" })}
            className={`flex items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors ${form.device === "android"
              ? "border-accent bg-accent-light text-accent-dark"
              : "border-stone-border text-stone-text-secondary hover:border-stone-text-tertiary"
              }`}
          >
            <svg className="h-4 w-4" viewBox="0 0 576 512" fill="currentColor">
              <path d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55" />
            </svg>
            Android
          </button>
          <button
            type="button"
            onClick={() => setForm({ ...form, device: "ios" })}
            className={`flex items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors ${form.device === "ios"
              ? "border-accent bg-accent-light text-accent-dark"
              : "border-stone-border text-stone-text-secondary hover:border-stone-text-tertiary"
              }`}
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            iOS
          </button>
        </div>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-500">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading" || !form.name || !form.email || !form.device}
        className="w-full rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Joining..." : "Join the waitlist"}
      </button>

      <p className="text-xs text-center text-stone-text-tertiary">
        No spam. We&apos;ll only email you when SayLog is ready.
      </p>
    </form>
  );
}

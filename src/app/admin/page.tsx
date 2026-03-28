"use client";

import { useState } from "react";
import SayLogLogo from "@/components/SayLogLogo";

interface WaitlistEntry {
  name: string;
  email: string;
  phone: string;
  device: "android" | "ios";
  timestamp: string;
}

interface WaitlistData {
  count: number;
  entries: WaitlistEntry[];
}

export default function AdminPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState<WaitlistData | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const credentials = btoa(`${username}:${password}`);

    try {
      const res = await fetch("/api/waitlist", {
        headers: { Authorization: `Basic ${credentials}` },
      });

      if (res.status === 401) {
        setError("Invalid username or password.");
        setLoading(false);
        return;
      }

      if (!res.ok) {
        setError("Something went wrong. Try again.");
        setLoading(false);
        return;
      }

      const json = await res.json();
      setData(json);
    } catch {
      setError("Failed to connect. Try again.");
    }

    setLoading(false);
  }

  function handleLogout() {
    setData(null);
    setUsername("");
    setPassword("");
  }

  if (data) {
    return (
      <div className="min-h-screen bg-stone-bg">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <SayLogLogo size={28} />
              <span className="text-lg font-semibold">SayLog - Waitlist</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                {data.count} {data.count === 1 ? "entry" : "entries"}
              </span>
              <button
                onClick={handleLogout}
                className="rounded-lg border border-stone-border bg-white px-3 py-1.5 text-sm font-medium text-stone-text-secondary transition-colors hover:border-stone-text-tertiary"
              >
                Log out
              </button>
            </div>
          </div>

          {data.entries.length === 0 ? (
            <div className="rounded-xl border border-stone-border bg-white p-12 text-center">
              <p className="text-stone-text-secondary">No waitlist entries yet.</p>
            </div>
          ) : (
            <div className="overflow-hidden rounded-xl border border-stone-border bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-stone-border bg-stone-bg">
                    <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-stone-text-tertiary">#</th>
                    <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-stone-text-tertiary">Name</th>
                    <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-stone-text-tertiary">Email</th>
                    <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-stone-text-tertiary">Phone</th>
                    <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-stone-text-tertiary">Device</th>
                    <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-stone-text-tertiary">Joined</th>
                  </tr>
                </thead>
                <tbody>
                  {data.entries.map((entry, i) => (
                    <tr
                      key={entry.email}
                      className="border-b border-stone-border last:border-0 transition-colors hover:bg-stone-bg/60"
                    >
                      <td className="px-5 py-3.5 text-stone-text-tertiary tabular-nums">{i + 1}</td>
                      <td className="px-5 py-3.5 font-medium text-stone-text">{entry.name}</td>
                      <td className="px-5 py-3.5 text-stone-text-secondary">{entry.email}</td>
                      <td className="px-5 py-3.5 text-stone-text-secondary">{entry.phone || "-"}</td>
                      <td className="px-5 py-3.5">
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            entry.device === "android"
                              ? "bg-emerald-50 text-emerald-700"
                              : "bg-blue-50 text-blue-700"
                          }`}
                        >
                          {entry.device === "android" ? "Android" : "iOS"}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 text-stone-text-secondary tabular-nums">
                        {new Date(entry.timestamp).toLocaleDateString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-stone-bg px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex flex-col items-center gap-2">
          <SayLogLogo size={40} />
          <h1 className="text-xl font-semibold text-stone-text">Waitlist Admin</h1>
          <p className="text-sm text-stone-text-secondary">Sign in to view waitlist entries</p>
        </div>

        <form onSubmit={handleLogin} className="rounded-xl border border-stone-border bg-white p-6 shadow-sm">
          <div className="space-y-4">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-stone-text-secondary">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-lg border border-stone-border px-3 py-2 text-sm text-stone-text outline-none transition-colors focus:border-accent"
                placeholder="Username"
                autoComplete="username"
                required
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-stone-text-secondary">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-stone-border px-3 py-2 text-sm text-stone-text outline-none transition-colors focus:border-accent"
                placeholder="Password"
                autoComplete="current-password"
                required
              />
            </div>
          </div>

          {error && (
            <p className="mt-3 rounded-lg bg-red-50 px-3 py-2 text-xs text-red-600">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-5 w-full rounded-lg bg-accent py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark disabled:opacity-60"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}

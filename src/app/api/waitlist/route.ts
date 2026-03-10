export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

let supabaseInstance: ReturnType<typeof createClient> | null = null;

interface WaitlistEntry {
  name: string;
  email: string;
  phone?: string;
  device: "android" | "ios";
  created_at?: string;
}

function getSupabase() {
  if (supabaseInstance) return supabaseInstance;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error("Supabase credentials are required at runtime.");
  }

  supabaseInstance = createClient(url, key);
  return supabaseInstance;
}

export async function POST(request: NextRequest) {
  try {
    const supabase = getSupabase();
    const body = await request.json();
    const { name, email, phone, device } = body;

    if (!name || !email || !device) {
      return NextResponse.json(
        { error: "Name, email, and device are required" },
        { status: 400 }
      );
    }

    if (!["android", "ios"].includes(device)) {
      return NextResponse.json(
        { error: "Device must be android or ios" },
        { status: 400 }
      );
    }

    const { data: existing } = await supabase
      .from("waitlist")
      .select("id")
      .eq("email", email.trim().toLowerCase())
      .maybeSingle();

    if (existing) {
      return NextResponse.json(
        { error: "This email is already on the waitlist" },
        { status: 409 }
      );
    }

    const { error } = await (supabase.from("waitlist") as any).insert({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || "",
      device,
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Waitlist error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const supabase = getSupabase();
    const authHeader = request.headers.get("authorization");

    const expectedUsername = process.env.ADMIN_USERNAME;
    const expectedPassword = process.env.ADMIN_PASSWORD;

    if (!authHeader || !authHeader.startsWith("Basic ")) {
      return NextResponse.json(
        { error: "Unauthorized" },
        {
          status: 401,
          headers: { "WWW-Authenticate": "Basic realm=\"Waitlist Admin\"" },
        }
      );
    }

    const base64 = authHeader.slice(6);
    const decoded = Buffer.from(base64, "base64").toString("utf-8");
    const [username, ...rest] = decoded.split(":");
    const password = rest.join(":");

    if (username !== expectedUsername || password !== expectedPassword) {
      return NextResponse.json(
        { error: "Unauthorized" },
        {
          status: 401,
          headers: { "WWW-Authenticate": "Basic realm=\"Waitlist Admin\"" },
        }
      );
    }

    const { data, error } = await supabase
      .from("waitlist")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase fetch error:", error);
      return NextResponse.json({ error: "Failed to fetch entries" }, { status: 500 });
    }

    const entries = data.map((row: any) => ({
      name: row.name,
      email: row.email,
      phone: row.phone,
      device: row.device,
      timestamp: row.created_at,
    }));

    return NextResponse.json({ count: entries.length, entries });
  } catch (err) {
    console.error("Waitlist Admin error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

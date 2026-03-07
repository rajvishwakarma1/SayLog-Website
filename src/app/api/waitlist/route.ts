import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "waitlist-data.json");

interface WaitlistEntry {
  name: string;
  email: string;
  phone: string;
  device: "android" | "ios";
  timestamp: string;
}

function readEntries(): WaitlistEntry[] {
  try {
    const data = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function writeEntries(entries: WaitlistEntry[]) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(entries, null, 2));
}

export async function POST(request: NextRequest) {
  try {
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

    const entries = readEntries();

    // Check for duplicate email
    if (entries.some((e) => e.email.toLowerCase() === email.toLowerCase())) {
      return NextResponse.json(
        { error: "This email is already on the waitlist" },
        { status: 409 }
      );
    }

    entries.push({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || "",
      device,
      timestamp: new Date().toISOString(),
    });

    writeEntries(entries);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET() {
  const entries = readEntries();
  return NextResponse.json({ count: entries.length, entries });
}

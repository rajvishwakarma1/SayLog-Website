import { NextRequest, NextResponse } from "next/server";

const AIRTABLE_API_BASE = "https://api.airtable.com/v0";
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN;
const TABLE_NAME = "Waitlist";

interface WaitlistEntry {
  name: string;
  email: string;
  phone: string;
  device: "android" | "ios";
  timestamp: string;
}

async function getEntries(): Promise<WaitlistEntry[]> {
  if (!AIRTABLE_BASE_ID || !AIRTABLE_TOKEN) {
    throw new Error("Airtable credentials missing");
  }

  const res = await fetch(
    `${AIRTABLE_API_BASE}/${AIRTABLE_BASE_ID}/${TABLE_NAME}`,
    {
      headers: { Authorization: `Bearer ${AIRTABLE_TOKEN}` },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch from Airtable");

  const data = await res.json();
  return data.records.map((record: any) => ({
    name: record.fields.name || "",
    email: record.fields.email || "",
    phone: record.fields.phone || "",
    device: record.fields.device || "android",
    timestamp: record.createdTime || new Date().toISOString(),
  }));
}

async function addEntry(entry: WaitlistEntry): Promise<void> {
  if (!AIRTABLE_BASE_ID || !AIRTABLE_TOKEN) {
    throw new Error("Airtable credentials missing");
  }

  const res = await fetch(
    `${AIRTABLE_API_BASE}/${AIRTABLE_BASE_ID}/${TABLE_NAME}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${AIRTABLE_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              name: entry.name,
              email: entry.email,
              phone: entry.phone,
              device: entry.device,
            },
          },
        ],
      }),
    }
  );

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Airtable error: ${error}`);
  }
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

    const entries = await getEntries();

    // Check for duplicate email
    if (entries.some((e) => e.email.toLowerCase() === email.toLowerCase())) {
      return NextResponse.json(
        { error: "This email is already on the waitlist" },
        { status: 409 }
      );
    }

    await addEntry({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || "",
      device,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
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

  try {
    const entries = await getEntries();
    return NextResponse.json({ count: entries.length, entries });
  } catch (error) {
    console.error("Failed to fetch entries:", error);
    return NextResponse.json(
      { error: "Failed to fetch entries" },
      { status: 500 }
    );
  }
}

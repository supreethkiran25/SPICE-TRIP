import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ message: "Please provide a valid email address." }, { status: 400 });
    }

    console.log("=== NEW NEWSLETTER SUBSCRIPTION ===", {
      email: email.trim(),
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Thank you for subscribing to SpiceTrip Luxury Travel Dispatches." },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("Newsletter API Error:", err);
    return NextResponse.json({ message: "Server error processing subscription." }, { status: 500 });
  }
}


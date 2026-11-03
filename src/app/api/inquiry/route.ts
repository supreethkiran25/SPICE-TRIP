import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, destination, travelers, budget, travelType, additionalRequirements } = body;

    // Server-side validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json({ message: "A valid full name is required." }, { status: 400 });
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ message: "A valid email address is required." }, { status: 400 });
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 7) {
      return NextResponse.json({ message: "A valid phone or WhatsApp number is required." }, { status: 400 });
    }

    if (!destination || typeof destination !== "string" || destination.trim().length < 2) {
      return NextResponse.json({ message: "Please specify your target destination." }, { status: 400 });
    }

    // In a production environment with SMTP/Resend/SendGrid credentials configured:
    // We would dispatch an email to info@spicetrip.com and send an automated receipt to the traveler.
    console.log("=== NEW SPICETRIP INQUIRY RECEIVED ===", {
      receivedAt: new Date().toISOString(),
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      destination: destination.trim(),
      travelers,
      budget,
      travelType,
      additionalRequirements: additionalRequirements || "None specified",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry successfully recorded. A SpiceTrip travel designer will reach out shortly.",
        inquiryId: `ST-${Date.now().toString().slice(-6)}`,
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("Inquiry API Error:", err);
    return NextResponse.json({ message: "Internal server error while processing your inquiry." }, { status: 500 });
  }
}


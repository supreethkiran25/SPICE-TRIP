import { NextResponse } from "next/server";
import { getPublished, getPublishedFallback } from "@/lib/published";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    const published = await getPublished();
    return NextResponse.json(published, {
      headers: {
        "Cache-Control": "s-maxage=10, stale-while-revalidate=30",
      },
    });
  } catch (error) {
    console.error("SpiceTrip CMS API:", error);
    return NextResponse.json(getPublishedFallback(), {
      headers: {
        "Cache-Control": "s-maxage=10, stale-while-revalidate=30",
      },
    });
  }
}

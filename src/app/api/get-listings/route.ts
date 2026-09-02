import { NextResponse } from "next/server";

import { connectDB } from "@/lib/db";

import Listing from "@/models/Listing";


export async function GET() {
  try {
    await connectDB();

    const listings = await Listing.find({
    status: "Published",
    })
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({
      success: true,
      listings,
    });
  } catch (error) {
       console.error("GET LISTINGS ERROR:", error);

    return NextResponse.json(
      { message: "Failed to fetch listings" },
      { status: 500 }
    );
  }
}
import { NextResponse } from "next/server";
import Listing from "@/models/Listing";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const body = await req.json();

  const listing = await Listing.findByIdAndUpdate(
    id,
    body,
    {
      returnDocument: "after",
    }
  );

  return NextResponse.json(listing);
}
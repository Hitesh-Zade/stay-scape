import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import { connectDB } from "@/lib/db";
import { authOptions } from "../auth/[...nextauth]/route";

import Listing from "@/models/Listing";
import User from "@/models/user";

export async function POST(req: Request) {
  try {
    await connectDB();

    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await req.json();

    const user = await User.findOne({
      email: session.user.email,
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    const listing = await Listing.create({
      hostId: user._id,
      ...body,
    });

    return NextResponse.json(
      {
        success: true,
        listing,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}
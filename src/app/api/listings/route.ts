import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import { connectDB } from "@/lib/db";
import { authOptions } from "../auth/[...nextauth]/route";

import Listing from "@/models/Listing";
import User from "@/models/user";

export async function POST() {
    try {
        await connectDB();

        const session = await getServerSession(authOptions);
        console.log(session)

        if (!session?.user?.email) {
            return NextResponse.json(
                { error: "Unauthorized 2" },
                { status: 401 }
            );
        }

        // const body = await req.json();

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
            status: "draft"
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
        console.error("POST /api/listings failed:");
        console.error(error);

        return NextResponse.json(
            {
                error: error instanceof Error ? error.message : "Unknown error",
            },
            {
                status: 500,
            }
        );
    }
}

export async function GET() {
  try {
    await connectDB();

    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const user = await User.findOne({
      email: session.user.email,
    });

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    const listings = await Listing.find({
      hostId: user._id,
    })
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({
      success: true,
      listings,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
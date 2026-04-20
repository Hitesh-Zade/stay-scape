import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/user";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST() {
    await connectDB();
     
    const session = await getServerSession(authOptions);

    if(!session?.user?.email){
        return NextResponse.json({error: "Unauthorized"}, {status:401})
    }

    const user = await User.findOneAndUpdate(
     { email: session.user.email },
    { role: "host" },
    { new: true }
    )
     return NextResponse.json({ message: "Now you are a host", user });
}

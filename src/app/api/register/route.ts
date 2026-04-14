import { NextResponse } from "next/server";
import User from "@/models/user";
import bcrypt from "bcrypt";

import { connectDB } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    debugger;
   console.log(name, email, password)
  console.log("Before DB connect");
await connectDB();
console.log("After DB connect");

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: "User exists" }, { status: 400 });
  }
}
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

import User from "@/models/user";
import { connectDB } from "@/lib/db";

export const authOptions: NextAuthOptions = {
  providers: [
    // ✅ Google Login
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    // ✅ Email/Password Login
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        await connectDB();

        const user = await User.findOne({ email: credentials?.email });
        console.log(user)
        if (!user) {
          throw new Error("User not found");
        }

        const isValid = await bcrypt.compare(
          credentials!.password,
          user.password
        );

        if (!isValid) {
          throw new Error("Invalid password");
        }

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt",
  },

  callbacks: {
    // ✅ GOOGLE USER SAVE / UPDATE
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        await connectDB();

        const existingUser = await User.findOne({ email: user.email });
        console.log(existingUser, "existingUser");
        if (!existingUser) {
          // 👉 Create new Google user
          await User.create({
            name: user.name,
            email: user.email,
            image: user.image,
            role: "user",
            provider: "google",
            password: null,
            isVerified: true,
            lastLogin: new Date(),
          });
        } else {
          // 👉 Update existing user
          await User.updateOne(
            { email: user.email },
            {
              $set: {
                name: user.name,
                image: user.image,
                provider: "google",
                lastLogin: new Date(),
              },
            }
          );
        }
      }

      return true;
    },

    // ✅ JWT
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.id = user.id;
       // token.role = user.role;
      }
      await connectDB();

      const dbUser = await User.findOne({ email: token.email });

      if (dbUser) {
        token.id = dbUser._id.toString();
        token.role = dbUser.role; // 👈 THIS FIXES GOOGLE LOGIN
      }

      return token;
    },

    // ✅ SESSION
    async session({ session, token }) {
      if (token) {
        session.user.email = token.email;
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    }
  },
};
//export const runtime = "nodejs"; // 👈 IMPORTANT


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
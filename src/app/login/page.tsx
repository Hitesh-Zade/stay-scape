"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import Link from 'next/link'
import { Mail, Lock, } from 'lucide-react'
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorShow, setErrorShow] = useState("");
const router = useRouter();


  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();
          const res = await signIn("credentials", {
      email,
      password,
     redirect: true,
  callbackUrl: "/",
    });
console.log(res)
     if (res?.error) {
        setErrorShow(res.error)
    //  toast.error(res.error);
    } else {
      
      
      // redirect manually
    //   router.refresh()
     //router.replace("/");
      toast.success("Login successful 🎉");
    }

  };

  return (
   <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50 py-12 px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 animate-scale-in">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">
              Welcome back
            </h1>
            <p className="text-gray-600">
              Log in to continue your journey
            </p>
          </div>
           
           {errorShow && <div className="text-red-500 text-center font-bold">{errorShow}</div>}

     
          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-2/3 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:border-primary-500 transition-colors duration-300"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-900 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-2/3 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:border-primary-500 transition-colors duration-300"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary-500 focus:ring-primary-500" />
                <span className="text-gray-600">Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-primary-500 hover:text-primary-600 font-semibold">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl"
            >
              Log in
            </button>
          </form>
               {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Or continue with email</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="space-y-3 mb-6">
            <button onClick={() => signIn("google",  { callbackUrl: "/" })}  className="w-full flex items-center justify-center space-x-3 px-6 py-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 group">
              <span className="font-semibold text-gray-700">Continue with Google</span>
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Don't have an account?{' '}
            <Link href="/signup" className="text-primary-500 hover:text-primary-600 font-semibold">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
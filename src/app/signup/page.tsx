"use client";

import { useState } from "react";
import { Mail, Lock, User } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/button/Button";
import { useEmailValidation } from "@/hooks/useEmailValidation";
import { usePasswordValidation } from "@/hooks/usePasswordValidation";
import Alert from "@/components/ui/Alert";
export default function LoginPage() {
  const [name, setName] = useState<string>("");
  const [successBanner, setSuccessBanner] = useState<string>("");
  const [isloading, setIsLoading] = useState<boolean>(false);
  const {
    email,
    error,
    handleChange,
    isValidEmail,
    reset: resetEmail,
  } = useEmailValidation();
  const {
    password,
    error: passwordError,
    handleChange: handlePasswordChange,
    validate: validatePassword,
    reset: restPassword,
  } = usePasswordValidation();

  const isDisabled = isValidEmail(email) && password.length >= 3;
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValidEmail(email)) return;
    if (!validatePassword(password)) return;

    try {
      setIsLoading(true);
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const result = await res.json();

      if (res.ok) {
        setSuccessBanner(
          result.message || "Account created successfully! You can now log in.",
        );
        toast.success("Account created successfully! You can now log in.");
      } else {
        const message =
          result.message ||
          result.error ||
          "Unable to create your account. Please try again.";

        toast.error(message);
      }
      setName("");
      resetEmail();
      restPassword();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50 py-12 px-4">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 animate-scale-in">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">
                Signup
              </h1>
            </div>
            {successBanner && (
              <Alert
                variant="success"
                message={successBanner}
                onClose={() => setSuccessBanner("")}
              />
            )}
            {/* Login Form */}
            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-6.5 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    id="name"
                    placeholder="John doe"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setName(e.target.value)
                    }
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:border-primary-500 transition-colors duration-300"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Email address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-6.5 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:border-primary-500 transition-colors duration-300"
                    required
                  />
                </div>
                {error && (
                  <p className="text-xs text-danger absolute">{error}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-6.5 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    id="password"
                    type="password"
                    autoComplete="off"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:border-primary-500 transition-colors duration-300"
                    required
                  />
                </div>
                {passwordError && (
                  <p className="text-xs text-danger absolute">
                    {passwordError}
                  </p>
                )}
              </div>

              <Button
                variant="primary"
                type="submit"
                className="w-full py-3"
                disabled={!isDisabled}
                loading={isloading}
              >
                Sign Up
              </Button>
            </form>
            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">
                  Or continue with email
                </span>
              </div>
            </div>

            {/* Social Login */}
            <div className="space-y-3 mb-6">
              <Button
                onClick={() => signIn("google", { callbackUrl: "/" })}
                className="w-full flex items-center justify-center space-x-3 px-6 py-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 group"
              >
                <span className="font-semibold text-gray-700">
                  Continue with Google
                </span>
              </Button>
            </div>

            {/* Sign Up Link */}
            <p className="text-center text-sm text-gray-600 mt-6">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-primary-500 hover:text-primary-600 font-semibold"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";
import Link from "next/link";
import { Search, Menu, User, Heart, MapPin } from "lucide-react";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();
  const handleBecomeHost = async () => {
    const res = await fetch("/api/become-host", {
      method: "POST",
    });

    const data = await res.json();

    if (res.ok) {
      toast.success("You are now a host 🎉");

      router.refresh(); // 🔥 refresh session
    } else {
      toast.error(data.error || "Something went wrong");
    }
  };
  console.log(session?.user);
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-2 rounded-xl transform group-hover:rotate-6 transition-transform duration-300">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-display font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              StayScape
            </span>
          </Link>

          {/* Center Search Bar */}
          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center bg-white border-2 border-gray-200 rounded-full px-6 py-3 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer group">
            <div className="flex items-center space-x-6 divide-x divide-gray-200">
              <div className="pr-6">
                <p className="text-sm font-semibold text-gray-900">Anywhere</p>
              </div>
              <div className="px-6">
                <p className="text-sm font-semibold text-gray-900">Any week</p>
              </div>
              <div className="pl-6 flex items-center space-x-3">
                <p className="text-sm text-gray-600">Add guests</p>
                <div className="bg-primary-500 p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Search className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
          {/* Right Menu */}
          <div className="flex items-center space-x-4">
            {/* {session ? <span>{session.user?.name}</span> : ""} */}

            {session?.user?.role === "host" && (
              <span className="text-sm font-semibold text-gray-900 hover:text-primary-500 transition-colors duration-300 px-4 py-2 rounded-full hover:bg-gray-50">
                Switch to Hosting
              </span>
            )}

            {/* Not logged in */}
            {!session && (
              <Link
                href="/login"
                className="hidden md:block text-sm font-semibold text-gray-900 hover:text-primary-500 transition-colors duration-300 px-4 py-2 rounded-full hover:bg-gray-50"
              >
                Become a host
              </Link>
            )}

            {/* Logged in but NOT host */}
            {session && session.user?.role !== "host" && (
              <button
                onClick={handleBecomeHost}
                className="hidden md:block text-sm font-semibold text-gray-900 hover:text-primary-500 transition-colors duration-300 px-4 py-2 rounded-full hover:bg-gray-50"
              >
                Become a host
              </button>
            )}

            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300">
              <Heart className="w-5 h-5 text-gray-600" />
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center space-x-2 border-2 border-gray-200 rounded-full px-4 py-2 hover:shadow-md transition-all duration-300"
            >
              <Menu className="w-5 h-5 text-gray-600" />
              {session?.user ? (
                session.user.image ? (
                  <Image
                    src={session.user.image}
                    alt={session.user.name || "user"}
                    width={32}
                    height={32}
                    className="rounded-full object-cover"
                  />
                ) : (
                  <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-white text-sm font-semibold">
                    {session.user.name?.charAt(0).toUpperCase() || "U"}
                  </div>
                )
              ) : (
                <div className="bg-gray-700 rounded-full p-2">
                  <User className="w-4 h-4 text-white" />
                </div>
              )}
            </button>
          </div>
        </div>
        <div className="lg:hidden mt-4">
          <div className="flex items-center bg-white border-2 border-gray-200 rounded-full px-4 py-3 shadow-sm">
            <Search className="w-5 h-5 text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Where to?"
              className="flex-1 outline-none text-sm font-medium text-gray-900 placeholder-gray-400"
            />
          </div>
        </div>
        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute right-4 top-20 bg-white border border-gray-200 rounded-2xl shadow-xl w-64 py-2 animate-fade-in">
            {!session && (
              <div>
                <Link
                  href="/login"
                  className="block px-4 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                >
                  Sign up
                </Link>
                <div className="border-t border-gray-200 my-2"></div>
              </div>
            )}

            <Link
              href="/bookings"
              className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
            >
              My bookings
            </Link>
            <Link
              href="/profile"
              className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
            >
              Profile
            </Link>
            <div
              onClick={() => signOut()}
              className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
            >
              Sign Out
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

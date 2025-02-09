"use client";

import Link from "next/link";
import Logo from "@/app/ui/logo";

export default function Navbar() {
    return (
        <nav className="w-full bg-[##6C6D80] text-white py-3 px-6 flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="text-lg font-bold flex items-center">
                <Logo />
            </Link>

            <div className="flex items-center justify-between gap-4">
                {/* Navigation Links */}
                <div className="flex gap-6">
                    <Link href="/dashboard/" className="hover:text-gray-300 transition-colors">SongWeb</Link>
                    <Link href="/dashboard/about" className="hover:text-gray-300 transition-colors">About</Link>
                </div>

                {/* Login Button */}
                <Link href="/login" className="bg-white text-[#000] px-4 py-2 rounded-md shadow hover:bg-gray-200 transition">Login</Link>
            </div>
        </nav>
    );
}

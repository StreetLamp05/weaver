"use client";

import Link from "next/link";
import Logo from "@/app/ui/logo";

export default function Navbar() {
    return (
        <div className="relative w-full">
            {/* Logo (Detached from Borders) */}
            <div className="absolute top-4 left-4 bg-[#4A4D59] px-4 py-2 rounded-md shadow-md">
                <Link href="/" className="inline-block">
                    <Logo />
                </Link>
            </div>
            {/* About Us Button */}
            <div className="absolute top-4 right-4 bg-[#4A4D59] px-4 py-2 rounded-md shadow-md">
                <Link href="/dashboard/about" className="text-sm font-medium text-white hover:text-gray-400 transition-colors duration-300">
                    About Us
                </Link>
            </div>
        </div>
    );
}

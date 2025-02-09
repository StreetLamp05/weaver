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
        </div>
    );
}

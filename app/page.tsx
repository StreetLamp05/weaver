"use client";

import Link from "next/link";
import { DotGothic16 } from "next/font/google";

const dotGothic16 = DotGothic16({
    weight: "400",
    subsets: ["latin"],
});

export default function Home() {
    return (
        <main
            className={`${dotGothic16.className} flex flex-col items-center justify-center min-h-screen bg-[#66657D] text-white relative pt-10`}
        >
            {/* Main Text - Moved Up */}
            <div className="text-center -mt-20"> {/* Increased negative margin */}
                <h1 className="text-6xl md:text-7xl tracking-wide">One thread...</h1>
                <h2 className="text-6xl md:text-7xl tracking-wide mt-0 font-bold">
                    Infinite Sounds
                </h2>
            </div>

            {/* Decorative Curves */}
            <div className="absolute bottom-0 w-full flex justify-center">
                <svg width="100%" height="200" viewBox="0 0 100 20" className="text-gray-300">
                    {/* More exaggerated curves */}
                    <path d="M-20,15 Q25,-10 50,10 T150,10" stroke="white" strokeWidth="0.2" fill="transparent" />
                    <path d="M-20,15 Q25,-10 50,15 T400,15" stroke="white" strokeWidth="0.2" fill="transparent" />
                    <path d="M-20,10 Q25,-5 50,20 T100,20" stroke="white" strokeWidth="0.2" fill="transparent" />
                </svg>
            </div>

            {/* "Weave.ai" Button */}
            <div className="absolute bottom-20">
                <Link
                    href="/dashboard/"
                    className="px-6 py-3 bg-[#2E3141] text-white rounded-md text-lg tracking-wider shadow-md hover:bg-[#3C3F54] transition"
                >
                    Weave.ai
                </Link>
            </div>
        </main>
    );
}

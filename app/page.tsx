"use client";

import Link from "next/link";
import { DotGothic16 } from "next/font/google";
import TrackFetcher from '@/components/TrackFetcher';


const dotGothic16 = DotGothic16({
    weight: "400",
    subsets: ["latin"],
});

export default function Home() {
    return (
        <main
            className={`${dotGothic16.className} flex flex-col items-center justify-center min-h-screen bg-[#66657D] text-white relative pt-10`}
        >
            <TrackFetcher />

        </main>
    );
}

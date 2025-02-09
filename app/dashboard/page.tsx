"use client"

import SongTree from "@/components/SongTree";

export default function HomePage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center ">
            <h1 className="text-2xl font-bold mb-4">Music Recommendation Tree</h1>
            <SongTree />
        </div>
    );
}

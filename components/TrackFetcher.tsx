"use client"; // For Next.js App Router

import { useState } from "react";

export default function TrackFetcher() {
    const [track_id, setTrackId] = useState("");

    const sendTrackId = async () => {
        const res = await fetch("http://127.0.0.1:5000/api/generate_nodes/3", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ track_id: String(track_id) }),
        });

        const data = await res.json();
        console.log("Server Response:", data);
    };

    return (
        <div>
            <input
                type="String"
                placeholder="53QF56cjZA9RTuuMZDrSA6"
                value={track_id}
                onChange={(e) => setTrackId("53QF56cjZA9RTuuMZDrSA6")}
            />
            <button onClick={sendTrackId}>Send</button>
        </div>
    );
}

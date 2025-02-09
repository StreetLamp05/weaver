"use client";
import { useState } from "react";
import SongNode from "./SongNode";

export default function SongTree() {
    const [nodes, setNodes] = useState([]);

    const fetchChildren = async (trackId) => {
        const response = await fetch(`http://127.0.0.1:5000/api/generate_nodes/3`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ track_id: trackId })
        });
        return await response.json();
    };

    const addInitialSongs = async () => {
        const input = ("53QF56cjZA9RTuuMZDrSA6,1s8tP3jP4GZcyHDsjvw218,7BRCa8MPiyuvr2VU3O9W0F,63wsZUhUZLlh1OsyrZq7sz,6nXIYClvJAfi6ujLiKqEq8");

        const trackIds = input.split(",").map(id => id.trim());
        const initialNodes = await Promise.all(trackIds.map(async (id) => {
            const response = await fetch(`http://127.0.0.1:5000/api/generate_nodes/3`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ track_id: id })
            });
            const data = await response.json();
            return data.length > 0 ? data[0] : null;
        }));

        setNodes(initialNodes.filter(n => n !== null));
    };

    const removeNode = (trackId) => {
        setNodes(nodes.filter(node => node.track_id !== trackId));
    };

    return (
        <div className="p-4 flex flex-col items-center">
            <button className="bg-blue-500 text-black px-3 py-2 rounded mb-4" onClick={addInitialSongs}>
                Start with 5 Songs
            </button>

            {/* Root Level Nodes (Multiple Parents) */}
            <div className="flex gap-4">
                {nodes.map((node) => (
                    <SongNode key={node.track_id} song={node} fetchChildren={fetchChildren} removeNode={removeNode} />
                ))}
            </div>
        </div>
    );
}

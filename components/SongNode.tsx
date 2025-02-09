import { useState } from "react";

export default function SongNode({ song, fetchChildren, removeNode }) {
    const [expanded, setExpanded] = useState(false);
    const [children, setChildren] = useState([]);

    const handleAccept = async () => {
        setExpanded(true);
        const newChildren = await fetchChildren(song.track_id);

        if (newChildren.length > 0) {
            setChildren(newChildren.slice(1)); // Auto-reject first child at all levels
        }
    };

    const handleReject = () => {
        removeNode(song.track_id);
    };

    return (
        <div className="relative flex flex-col items-center">
            {/* Parent Node */}
            <div className="border w-32 h-24 p-2 rounded bg-gray-800 text-white text-xs text-center shadow-md">
                <p className="font-bold truncate">{song.track_name}</p>
                <p className="text-gray-400 truncate">{song.artist_name}</p>
                <div className="flex justify-center mt-2">
                    <button className="bg-green-500 text-white px-1 py-0.5 rounded text-xs" onClick={handleAccept}>
                        ✔
                    </button>
                    <button className="bg-red-500 text-white px-1 py-0.5 rounded text-xs ml-1" onClick={handleReject}>
                        ✖
                    </button>
                </div>
            </div>

            {/* Connecting Line */}
            {expanded && children.length > 0 && (
                <div className="w-0.5 h-4 bg-gray-500"></div>
            )}

            {/* Child Nodes */}
            {expanded && (
                <div className="flex gap-2 mt-2">
                    {children.map((child) => (
                        <div className="relative" key={child.track_id}>
                            {/* Connecting line from parent */}
                            <div className="absolute top-0 left-1/2 h-4 w-0.5 bg-gray-500 transform -translate-x-1/2"></div>
                            <SongNode song={child} fetchChildren={fetchChildren} removeNode={removeNode} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

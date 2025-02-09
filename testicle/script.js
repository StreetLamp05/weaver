function sendTrackId() {
    const trackId = document.getElementById("trackId").value;

    fetch("http://127.0.0.1:5000/api/generate_nodes/3", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ track_id: trackId })  // Send as string
    })
        .then(response => response.json())
        .then(data => console.log("Server Response:", data))
        .catch(error => console.error("Error:", error));
}

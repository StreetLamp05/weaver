import BasePage from "@/components/BasePage";

export default function Profile() {
    const user = {
        username: "JohnDoe",
        aboutMe: "I am a music enthusiast who loves exploring new genres and artists.",
        songHistory: [
            "Song 1 - Artist 1",
            "Song 2 - Artist 2",
            "Song 3 - Artist 3",
        ],
    };

    return (
        <BasePage title={"Profile"} description={"This is the profile page"}>
            <div className="p-4">
                <h2 className="text-2xl font-bold">Username: {user.username}</h2>
                <p className="mt-2 text-lg">About Me: {user.aboutMe}</p>
                <h3 className="mt-4 text-xl font-semibold">Song History:</h3>
                <ul className="list-disc list-inside">
                    {user.songHistory.map((song, index) => (
                        <li key={index}>{song}</li>
                    ))}
                </ul>
            </div>
        </BasePage>
    );
}
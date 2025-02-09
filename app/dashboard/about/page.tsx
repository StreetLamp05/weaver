import React from "react";
import teamMembers from "@/components/team";

const AboutPage: React.FC = () => {
    return (
        <div className="h-max flex flex-col items-center justify-center px-10 text-white my-4">
            {/* Header Section */}
            <h1 className="text-3xl font-bold mb-6">About Us</h1>

            {/* About Section */}
            <div className="text-center max-w-3xl">
                <p className="text-lg leading-relaxed">
                    Our program delivers an immersive, personalized listening experience for music lovers worldwide.
                    By selecting a preferred track from recurring nodes through a vast ocean of songs, users unlock
                    a smart system that curates a playlist tailored to their unique tastes. Using the essence of each
                    song, our technology seamlessly connects them with similar tracks, creating a dynamic soundtrack
                    designed just for them.
                </p>
            </div>

            {/* Team Section */}
            <div className="mt-10">
                <h2 className="text-xl font-semibold mb-4 text-center">Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-24 h-24 rounded-full border-2 border-gray-300"
                            />
                            <h3 className="mt-2 text-lg font-medium">{member.name}</h3>
                            <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                LinkedIn
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutPage;

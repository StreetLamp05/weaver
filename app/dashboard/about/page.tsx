import React from 'react';
import BasePage from '@/components/BasePage';

const AboutPage: React.FC = () => {
    return (
        <div className="h-max flex flex-col items-center justify-center px-10 text-white my-4">
            {/* Header Section */}
            <h1 className="text-3xl font-bold mb-6">About Us</h1>

            <div className="flex flex-col md:flex-row md:space-x-10">
                {/* Team Section */}
                <div className="text-left">
                    <h2 className="text-xl font-semibold">Team:</h2>
                    <ul className="mt-2 space-y-2">
                        <li>Kevin Niu</li>
                        <li>David Kan</li>
                        <li>Jasmine Nguyen</li>
                        <li>Jason Tong</li>
                    </ul>
                </div>

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
            </div>
        </div>
    );
};

export default AboutPage;

import React from 'react';
import BasePage from '@/components/BasePage';

const AboutPage: React.FC = () => {
    return (
        <BasePage title="About Us" description="Learn more about our platform.">
            <div className="flex flex-col items-center justify-center min-h-screen px-10 text-white">
                {/* Navigation */}
                <nav className="absolute top-5 left-10 flex space-x-8 text-lg">
                    <a href="/" className="hover:underline">Home</a>
                    <a href="/about" className="hover:underline">About Us</a>
                    <a href="/profile" className="hover:underline">Profile</a>
                </nav>

                {/* About Section */}
                <div className="text-center max-w-3xl mt-20">
                    <p className="text-lg leading-relaxed">
                        Our program delivers an immersive, personalized listening experience for music lovers worldwide.
                        By selecting a preferred track from recurring nodes through a vast ocean of songs, users unlock 
                        a smart system that curates a playlist tailored to their unique tastes. Using the essence of each 
                        song, our technology seamlessly connects them with similar tracks, creating a dynamic soundtrack 
                        designed just for them.
                    </p>
                </div>

                {/* Team Section */}
                <div className="mt-10 text-left">
                    <h2 className="text-xl font-semibold">Team:</h2>
                    <ul className="mt-2 space-y-2">
                        <li>Kevin Niu</li>
                        <li>David Kan</li>
                        <li>Jasmine Nguyen</li>
                        <li>Jason Tong</li>
                    </ul>
                </div>

                {/* Decorative Curves */}
                <div className="absolute bottom-10 w-full flex justify-center">
                    <svg width="90%" height="100" viewBox="0 0 100 10" className="text-gray-300">
                        <path d="M0,5 Q50,-5 100,5" stroke="white" strokeWidth="0.2" fill="transparent" />
                        <path d="M0,7 Q50,-3 100,7" stroke="white" strokeWidth="0.2" fill="transparent" />
                        <path d="M0,9 Q50,-1 100,9" stroke="white" strokeWidth="0.2" fill="transparent" />
                    </svg>
                </div>
            </div>
        </BasePage>
    );
};

export default AboutPage;

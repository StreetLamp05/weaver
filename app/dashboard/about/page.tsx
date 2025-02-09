import React from 'react';
import BasePage from '@/components/BasePage';

const AboutPage: React.FC = () => {
    return (
        <BasePage title="About Us" description="Learn more about our platform.">
            <div className="flex flex-col items-center justify-center min-h-screen px-10 text-white overflow-hidden">
                <div className="flex flex-col md:flex-row md:space-x-10 mt-10">
                    {/* Team Section */}
                    <div className="mt-10 md:mt-0 text-left">
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

                {/* Decorative Curves */}
                
            </div>
        </BasePage>
    );
};

export default AboutPage;

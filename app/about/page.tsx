"use client";

import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });

const AboutPage: React.FC = () => {
    return (
        <div className={inter.className}>
            <h1>About Us</h1>
            <p>Welcome to our application. Here is some information about us.</p>
            <div className="flex flex-col md:flex-row md:space-x-10">
                <div className="text-left">
                    <h2 className="text-xl font-semibold">Team:</h2>
                    <ul className="mt-2 space-y-2">
                        <li>Kevin Niu</li>
                        <li>David Kan</li>
                        <li>Jasmine Nguyen</li>
                        <li>Jason Tong</li>
                    </ul>
                </div>
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

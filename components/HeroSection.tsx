"use client";
import React, { CSSProperties } from "react";
import { motion } from "framer-motion";

import { siteConfig } from "@/config/site";

interface Props {
    style?: CSSProperties;
}

export const HeroSection: React.FC<Props> = ({ style }) => {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat py-28 flex items-center justify-center"
            style={{
                backgroundImage: siteConfig.background, // Replace with your background image
            }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}

            <div className="container mx-auto text-center text-white relative z-10">
                {/* Logo */}
                <div className="mb-8">
                    <img
                        src="https://via.placeholder.com/150" // Replace with your logo
                        alt="Appy Logo"
                        className="mx-auto"
                    />
                </div>

                {/* Hero Title */}
                <motion.h1
                    className="text-6xl font-extrabold mb-4 leading-tight"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Boost Your Productivity with Appy
                </motion.h1>

                {/* Hero Description */}
                <motion.p
                    className="text-lg mb-6 mx-auto max-w-lg"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    Take control of your tasks with the most intuitive app. Get started today and experience the productivity boost!
                </motion.p>

                {/* App Download Buttons */}
                <div className="flex justify-center space-x-6 mb-8">
                    {/* Google Play Button */}
                    <motion.a
                        href="#google-play"
                        className="flex items-center justify-center px-6 py-3 bg-[#34a853] text-white text-lg font-semibold rounded-lg hover:bg-[#2c8a40] transition duration-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.4 }}
                    >
                        <img
                            src="https://via.placeholder.com/120x40?text=Google+Play" // Replace with Google Play button image
                            alt="Google Play"
                            className="mr-3"
                        />
                        Download on Google Play
                    </motion.a>

                    {/* App Store Button */}
                    <motion.a
                        href="#app-store"
                        className="flex items-center justify-center px-6 py-3 bg-[#007aff] text-white text-lg font-semibold rounded-lg hover:bg-[#0051a2] transition duration-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.6 }}
                    >
                        <img
                            src="https://via.placeholder.com/120x40?text=App+Store" // Replace with App Store button image
                            alt="App Store"
                            className="mr-3"
                        />
                        Download on the App Store
                    </motion.a>
                </div>

                {/* CTA Secondary Button */}
                <motion.a
                    href="#learn-more"
                    className="px-8 py-3 border-2 border-white text-white text-lg font-semibold rounded-full hover:bg-white hover:text-blue-600 transition duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.8 }}
                >
                    Learn More
                </motion.a>
            </div>
        </section>
    );
};

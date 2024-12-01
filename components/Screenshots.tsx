import React from 'react';
import {siteConfig} from "@/config/site";
import {title} from "@/components/primitives";
import {subtitle} from "./primitives";
import {content} from "../config/content";

const Screenshots: React.FC = () => {
    return (
        <section id="screenshots" className="bg-white py-12">
            <div className="container mx-auto text-center">
                <div className="mb-8">
                    <h2 className="text-3xl font-semibold">Screenshots</h2>
                    <p className="text-lg text-gray-600">We showcase only the best websites, portfolios, and landing pages built with passion, simplicity, and creativity!</p>
                </div>

                {/* Horizontal Scroll with Auto-scroll */}
                <div className="relative overflow-hidden">
                    {/* Container for images with flexbox */}
                    <div className="flex space-x-6 animate-slide">
                        {/* Each image is placed inside a div with appropriate width and spacing */}
                        {content.screenshots.map((screen, index) => (
                            <div key={index} className="flex-shrink-0 w-1/4 sm:w-1/4 md:w-1/4 lg:w-1/4">
                                <img src={screen.img} alt={screen.title} className="w-full h-auto object-cover rounded-lg" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Screenshots;
